import { useState, useRef, useCallback, useEffect } from "react";
import { Pen, Type, Undo2, Redo2, Trash2, Download, ArrowRight, Palette, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import { downloadImage } from "@/utils/imageResize";

// Signature font options
const SIGNATURE_FONTS = [
    { name: "Dancing Script", family: "'Dancing Script', cursive" },
    { name: "Great Vibes", family: "'Great Vibes', cursive" },
    { name: "Sacramento", family: "'Sacramento', cursive" },
    { name: "Satisfy", family: "'Satisfy', cursive" },
    { name: "Pacifico", family: "'Pacifico', cursive" },
    { name: "Allura", family: "'Allura', cursive" },
];

// Pen color options
const PEN_COLORS = [
    { name: "Black", value: "#000000" },
    { name: "Dark Blue", value: "#1a237e" },
    { name: "Dark Red", value: "#8b0000" },
    { name: "Navy", value: "#0d1b2a" },
];

interface Point {
    x: number;
    y: number;
}

interface Stroke {
    points: Point[];
    color: string;
    width: number;
}

interface SignatureCreatorProps {
    onSignatureReady?: (dataUrl: string) => void;
}

const SignatureCreator = ({ onSignatureReady }: SignatureCreatorProps) => {
    // Mode state
    const [mode, setMode] = useState<"draw" | "type">("draw");

    // Draw mode state
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [penColor, setPenColor] = useState("#000000");
    const [penWidth, setPenWidth] = useState(3);
    const [strokes, setStrokes] = useState<Stroke[]>([]);
    const [currentStroke, setCurrentStroke] = useState<Point[]>([]);
    const [redoStack, setRedoStack] = useState<Stroke[]>([]);

    // Type mode state
    const [typedText, setTypedText] = useState("");
    const [selectedFont, setSelectedFont] = useState(SIGNATURE_FONTS[0]);
    const [fontSize, setFontSize] = useState(48);
    const [fontColor, setFontColor] = useState("#000000");

    // Signature ready state
    const [signatureDataUrl, setSignatureDataUrl] = useState<string | null>(null);

    // Canvas dimensions
    const CANVAS_WIDTH = 600;
    const CANVAS_HEIGHT = 200;

    // ----- Drawing Logic -----

    const getCanvasPoint = useCallback((e: React.MouseEvent | React.TouchEvent): Point => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        if ("touches" in e) {
            const touch = e.touches[0];
            return {
                x: (touch.clientX - rect.left) * scaleX,
                y: (touch.clientY - rect.top) * scaleY,
            };
        }
        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY,
        };
    }, []);

    const drawAllStrokes = useCallback((ctx: CanvasRenderingContext2D, strokeList: Stroke[]) => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        // White background
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Draw signature guide line
        ctx.strokeStyle = "#e5e7eb";
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(40, CANVAS_HEIGHT * 0.75);
        ctx.lineTo(CANVAS_WIDTH - 40, CANVAS_HEIGHT * 0.75);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw all strokes
        strokeList.forEach((stroke) => {
            if (stroke.points.length < 2) return;
            ctx.strokeStyle = stroke.color;
            ctx.lineWidth = stroke.width;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.beginPath();
            ctx.moveTo(stroke.points[0].x, stroke.points[0].y);

            // Smooth bezier curves for natural handwriting
            for (let i = 1; i < stroke.points.length - 1; i++) {
                const midX = (stroke.points[i].x + stroke.points[i + 1].x) / 2;
                const midY = (stroke.points[i].y + stroke.points[i + 1].y) / 2;
                ctx.quadraticCurveTo(stroke.points[i].x, stroke.points[i].y, midX, midY);
            }

            const last = stroke.points[stroke.points.length - 1];
            ctx.lineTo(last.x, last.y);
            ctx.stroke();
        });
    }, []);

    // Redraw canvas when strokes change
    useEffect(() => {
        if (mode !== "draw") return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        drawAllStrokes(ctx, strokes);
    }, [strokes, mode, drawAllStrokes]);

    // Initialize canvas on mount
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        drawAllStrokes(ctx, []);
    }, [drawAllStrokes]);

    const handlePointerDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        setIsDrawing(true);
        const point = getCanvasPoint(e);
        setCurrentStroke([point]);
    }, [getCanvasPoint]);

    const handlePointerMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing) return;
        e.preventDefault();
        const point = getCanvasPoint(e);
        setCurrentStroke((prev) => [...prev, point]);

        // Draw current stroke in real-time
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        drawAllStrokes(ctx, strokes);

        // Draw current in-progress stroke
        const allPoints = [...currentStroke, point];
        if (allPoints.length >= 2) {
            ctx.strokeStyle = penColor;
            ctx.lineWidth = penWidth;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.beginPath();
            ctx.moveTo(allPoints[0].x, allPoints[0].y);
            for (let i = 1; i < allPoints.length - 1; i++) {
                const midX = (allPoints[i].x + allPoints[i + 1].x) / 2;
                const midY = (allPoints[i].y + allPoints[i + 1].y) / 2;
                ctx.quadraticCurveTo(allPoints[i].x, allPoints[i].y, midX, midY);
            }
            ctx.lineTo(allPoints[allPoints.length - 1].x, allPoints[allPoints.length - 1].y);
            ctx.stroke();
        }
    }, [isDrawing, getCanvasPoint, penColor, penWidth, strokes, currentStroke, drawAllStrokes]);

    const handlePointerUp = useCallback(() => {
        if (!isDrawing) return;
        setIsDrawing(false);
        if (currentStroke.length > 1) {
            setStrokes((prev) => [...prev, { points: currentStroke, color: penColor, width: penWidth }]);
            setRedoStack([]);
        }
        setCurrentStroke([]);
    }, [isDrawing, currentStroke, penColor, penWidth]);

    const handleUndo = () => {
        if (strokes.length === 0) return;
        const last = strokes[strokes.length - 1];
        setRedoStack((prev) => [...prev, last]);
        setStrokes((prev) => prev.slice(0, -1));
    };

    const handleRedo = () => {
        if (redoStack.length === 0) return;
        const last = redoStack[redoStack.length - 1];
        setStrokes((prev) => [...prev, last]);
        setRedoStack((prev) => prev.slice(0, -1));
    };

    const handleClear = () => {
        setStrokes([]);
        setRedoStack([]);
        setSignatureDataUrl(null);
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) drawAllStrokes(ctx, []);
        }
    };

    // ----- Type Mode Logic -----

    const renderTypedSignature = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Draw guide line
        ctx.strokeStyle = "#e5e7eb";
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(40, CANVAS_HEIGHT * 0.75);
        ctx.lineTo(CANVAS_WIDTH - 40, CANVAS_HEIGHT * 0.75);
        ctx.stroke();
        ctx.setLineDash([]);

        if (typedText) {
            ctx.font = `${fontSize}px ${selectedFont.family}`;
            ctx.fillStyle = fontColor;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(typedText, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
        }
    }, [typedText, fontSize, selectedFont, fontColor]);

    useEffect(() => {
        if (mode === "type") {
            renderTypedSignature();
        }
    }, [mode, renderTypedSignature]);

    // ----- Export Logic -----

    const getSignatureDataUrl = (): string | null => {
        const canvas = canvasRef.current;
        if (!canvas) return null;

        // Create a clean export canvas (no guide line)
        const exportCanvas = document.createElement("canvas");
        exportCanvas.width = CANVAS_WIDTH;
        exportCanvas.height = CANVAS_HEIGHT;
        const ctx = exportCanvas.getContext("2d");
        if (!ctx) return null;

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        if (mode === "draw") {
            strokes.forEach((stroke) => {
                if (stroke.points.length < 2) return;
                ctx.strokeStyle = stroke.color;
                ctx.lineWidth = stroke.width;
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.beginPath();
                ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
                for (let i = 1; i < stroke.points.length - 1; i++) {
                    const midX = (stroke.points[i].x + stroke.points[i + 1].x) / 2;
                    const midY = (stroke.points[i].y + stroke.points[i + 1].y) / 2;
                    ctx.quadraticCurveTo(stroke.points[i].x, stroke.points[i].y, midX, midY);
                }
                ctx.lineTo(stroke.points[stroke.points.length - 1].x, stroke.points[stroke.points.length - 1].y);
                ctx.stroke();
            });
        } else {
            if (typedText) {
                ctx.font = `${fontSize}px ${selectedFont.family}`;
                ctx.fillStyle = fontColor;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(typedText, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
            }
        }

        return exportCanvas.toDataURL("image/png");
    };

    const handleDownload = () => {
        const dataUrl = getSignatureDataUrl();
        if (!dataUrl) {
            toast.error("Please create a signature first");
            return;
        }
        if (mode === "draw" && strokes.length === 0) {
            toast.error("Please draw your signature first");
            return;
        }
        if (mode === "type" && !typedText) {
            toast.error("Please type your name first");
            return;
        }
        downloadImage(dataUrl, "my-signature.png");
        toast.success("Signature downloaded as PNG!");
    };

    const handleSendToResize = () => {
        const dataUrl = getSignatureDataUrl();
        if (!dataUrl) {
            toast.error("Please create a signature first");
            return;
        }
        if (mode === "draw" && strokes.length === 0) {
            toast.error("Please draw your signature first");
            return;
        }
        if (mode === "type" && !typedText) {
            toast.error("Please type your name first");
            return;
        }
        setSignatureDataUrl(dataUrl);
        onSignatureReady?.(dataUrl);
        toast.success("Signature ready! Now resize it below ↓");

        // Scroll to the resizer smoothly
        setTimeout(() => {
            const resizer = document.getElementById("signature-resizer-section");
            if (resizer) {
                resizer.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 300);
    };

    return (
        <div className="rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-lg">
            {/* Mode Tabs */}
            <div className="mb-6 flex gap-2">
                <button
                    onClick={() => setMode("draw")}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${mode === "draw"
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                >
                    <Pen className="h-4 w-4" />
                    Draw Signature
                </button>
                <button
                    onClick={() => setMode("type")}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${mode === "type"
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                >
                    <Type className="h-4 w-4" />
                    Type Signature
                </button>
            </div>

            {/* Canvas Area */}
            <div className="mb-4 overflow-hidden rounded-xl border-2 border-dashed border-border bg-white">
                <canvas
                    ref={canvasRef}
                    width={CANVAS_WIDTH}
                    height={CANVAS_HEIGHT}
                    className="w-full cursor-crosshair touch-none"
                    style={{ aspectRatio: `${CANVAS_WIDTH}/${CANVAS_HEIGHT}` }}
                    onMouseDown={mode === "draw" ? handlePointerDown : undefined}
                    onMouseMove={mode === "draw" ? handlePointerMove : undefined}
                    onMouseUp={mode === "draw" ? handlePointerUp : undefined}
                    onMouseLeave={mode === "draw" ? handlePointerUp : undefined}
                    onTouchStart={mode === "draw" ? handlePointerDown : undefined}
                    onTouchMove={mode === "draw" ? handlePointerMove : undefined}
                    onTouchEnd={mode === "draw" ? handlePointerUp : undefined}
                />
            </div>

            {/* Controls */}
            {mode === "draw" ? (
                <div className="space-y-4">
                    {/* Pen Controls Row */}
                    <div className="flex flex-wrap items-center gap-3">
                        {/* Color Picker */}
                        <div className="flex items-center gap-2">
                            <Palette className="h-4 w-4 text-muted-foreground" />
                            <div className="flex gap-1.5">
                                {PEN_COLORS.map((color) => (
                                    <button
                                        key={color.value}
                                        onClick={() => setPenColor(color.value)}
                                        className={`h-7 w-7 rounded-full border-2 transition-all hover:scale-110 ${penColor === color.value
                                                ? "border-primary ring-2 ring-primary/30 scale-110"
                                                : "border-border"
                                            }`}
                                        style={{ backgroundColor: color.value }}
                                        title={color.name}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="h-6 w-px bg-border" />

                        {/* Pen Thickness */}
                        <div className="flex items-center gap-2 flex-1 min-w-[150px]">
                            <Minus className="h-3 w-3 text-muted-foreground" />
                            <Slider
                                value={[penWidth]}
                                onValueChange={([v]) => setPenWidth(v)}
                                min={1}
                                max={8}
                                step={1}
                                className="flex-1"
                            />
                            <Plus className="h-3 w-3 text-muted-foreground" />
                        </div>

                        <div className="h-6 w-px bg-border hidden sm:block" />

                        {/* Undo / Redo / Clear */}
                        <div className="flex gap-1.5">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handleUndo}
                                disabled={strokes.length === 0}
                                title="Undo"
                                className="h-8 w-8"
                            >
                                <Undo2 className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handleRedo}
                                disabled={redoStack.length === 0}
                                title="Redo"
                                className="h-8 w-8"
                            >
                                <Redo2 className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handleClear}
                                disabled={strokes.length === 0}
                                title="Clear"
                                className="h-8 w-8 text-destructive hover:text-destructive"
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    {/* Text Input */}
                    <input
                        type="text"
                        value={typedText}
                        onChange={(e) => setTypedText(e.target.value)}
                        placeholder="Type your full name..."
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        maxLength={40}
                    />

                    {/* Font Selection */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {SIGNATURE_FONTS.map((font) => (
                            <button
                                key={font.name}
                                onClick={() => setSelectedFont(font)}
                                className={`rounded-xl border px-3 py-2.5 text-center transition-all ${selectedFont.name === font.name
                                        ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                                        : "border-border hover:border-muted-foreground"
                                    }`}
                                style={{ fontFamily: font.family }}
                            >
                                <span className="text-lg text-foreground">{typedText || font.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Font Size & Color Row */}
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2">
                            <Palette className="h-4 w-4 text-muted-foreground" />
                            <div className="flex gap-1.5">
                                {PEN_COLORS.map((color) => (
                                    <button
                                        key={color.value}
                                        onClick={() => setFontColor(color.value)}
                                        className={`h-7 w-7 rounded-full border-2 transition-all hover:scale-110 ${fontColor === color.value
                                                ? "border-primary ring-2 ring-primary/30 scale-110"
                                                : "border-border"
                                            }`}
                                        style={{ backgroundColor: color.value }}
                                        title={color.name}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="h-6 w-px bg-border" />

                        <div className="flex items-center gap-2 flex-1 min-w-[150px]">
                            <span className="text-xs text-muted-foreground whitespace-nowrap">Size</span>
                            <Slider
                                value={[fontSize]}
                                onValueChange={([v]) => setFontSize(v)}
                                min={24}
                                max={80}
                                step={2}
                                className="flex-1"
                            />
                            <span className="text-xs text-muted-foreground w-8 text-right">{fontSize}px</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                    variant="outline"
                    onClick={handleDownload}
                    className="flex-1 gap-2 h-12 text-sm font-semibold"
                >
                    <Download className="h-4 w-4" />
                    Download PNG
                </Button>
                <Button
                    onClick={handleSendToResize}
                    className="flex-1 gap-2 h-12 text-sm font-semibold bg-primary hover:bg-primary/90"
                >
                    Resize This Signature
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </div>

            {/* Privacy Note */}
            <p className="mt-3 text-center text-xs text-muted-foreground">
                🔒 Your signature is created locally in your browser. Nothing is uploaded to any server.
            </p>
        </div>
    );
};

export default SignatureCreator;

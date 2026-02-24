import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Upload, Download, RefreshCw, Camera, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";
import FAQSection from "@/components/FAQSection";

type PhotoPreset = {
    label: string;
    width: number;
    height: number;
    description: string;
    maxKB?: number;
};

const PRESETS: PhotoPreset[] = [
    { label: "India Passport (3.5×4.5 cm)", width: 413, height: 531, description: "Standard Indian passport & visa" },
    { label: "Exam Standard (200×230 px)", width: 200, height: 230, description: "SSC, IBPS, UPSC, RRB exams" },
    { label: "US Visa DS-160 (600×600 px)", width: 600, height: 600, description: "US nonimmigrant visa application", maxKB: 240 },
    { label: "USCIS Immigration (600×600 px)", width: 600, height: 600, description: "I-485, N-400, I-131 forms", maxKB: 240 },
    { label: "Agniveer / Army (200×230 px)", width: 200, height: 230, description: "Agnipath military recruitment" },
    { label: "NEET / JEE / CUET (200×260 px)", width: 200, height: 260, description: "NTA exam portals" },
    { label: "SBI / IBPS (200×230 px)", width: 200, height: 230, description: "Bank exam portals" },
];

const PassportPhotoMakerTool = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [originalFile, setOriginalFile] = useState<File | null>(null);
    const [selectedPreset, setSelectedPreset] = useState<PhotoPreset>(PRESETS[0]);
    const [quality, setQuality] = useState<number>(90);
    const [outputBlob, setOutputBlob] = useState<Blob | null>(null);
    const [outputSize, setOutputSize] = useState<string>("");
    const [isDragging, setIsDragging] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const faqs = [
        {
            question: "Does this tool crop my photo automatically?",
            answer: "No — it resizes your photo to fit the selected preset dimensions with a white background fill for any empty areas. For photos that need cropping, we recommend using our dedicated Crop Signature from Scan tool first.",
        },
        {
            question: "What format does the output photo come in?",
            answer: "The output is always JPEG — which is the format required by all major exam portals, US visa applications, and USCIS forms.",
        },
        {
            question: "Is my photo uploaded anywhere?",
            answer: "Absolutely not. All processing happens entirely in your browser using the Canvas API. Your photo never leaves your device.",
        },
        {
            question: "What if the file size is still too large after download?",
            answer: "Lower the quality slider before downloading. Most exam portals accept 60–80% quality without visible difference. For very strict limits (like DS-160's 240 KB), bring quality down to 70% and it will typically be well within range.",
        },
        {
            question: "Can I use a selfie for this tool?",
            answer: "Yes. Upload your best forward-facing selfie. The tool will resize it to the correct dimensions. Make sure the original photo has good lighting and a simple background for best results.",
        },
    ];

    const processImage = useCallback((file: File) => {
        if (!file.type.startsWith("image/")) return;
        setOriginalFile(file);
        setOutputBlob(null);
        setOutputSize("");
        setIsProcessing(false);

        const reader = new FileReader();
        reader.onload = (e) => setImageSrc(e.target?.result as string);
        reader.readAsDataURL(file);
    }, []);

    const generateOutput = useCallback(() => {
        if (!imageSrc || !canvasRef.current) return;
        setIsProcessing(true);

        const img = new Image();
        img.onload = () => {
            const canvas = canvasRef.current!;
            const preset = selectedPreset;
            canvas.width = preset.width;
            canvas.height = preset.height;
            const ctx = canvas.getContext("2d")!;

            // Fill white background
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, preset.width, preset.height);

            // Scale to fit while maintaining aspect ratio (cover-fit to fill)
            const scale = Math.max(preset.width / img.width, preset.height / img.height);
            const scaledW = img.width * scale;
            const scaledH = img.height * scale;
            const offsetX = (preset.width - scaledW) / 2;
            const offsetY = (preset.height - scaledH) / 2;

            ctx.drawImage(img, offsetX, offsetY, scaledW, scaledH);

            canvas.toBlob(
                (blob) => {
                    if (!blob) return;
                    setOutputBlob(blob);
                    const kb = (blob.size / 1024).toFixed(1);
                    setOutputSize(`${kb} KB · ${preset.width}×${preset.height} px · JPEG`);
                    setIsProcessing(false);
                },
                "image/jpeg",
                quality / 100
            );
        };
        img.src = imageSrc;
    }, [imageSrc, selectedPreset, quality]);

    const handleDownload = () => {
        if (!outputBlob) return;
        const url = URL.createObjectURL(outputBlob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `passport-photo-${selectedPreset.width}x${selectedPreset.height}.jpg`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleReset = () => {
        setImageSrc(null);
        setOriginalFile(null);
        setOutputBlob(null);
        setOutputSize("");
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <>
            <SEOHead
                title="Passport Photo Maker — Create 2×2, Exam, or USCIS Photo Free Online"
                description="Create passport-size photos for Indian passport, US visa DS-160, USCIS, SSC, IBPS, NEET, and more. White background, correct dimensions, and exact KB size. Free, private, browser-based."
                canonicalUrl="https://signatureresize.in/passport-photo-maker"
                keywords="passport photo maker online free, 2x2 passport photo resize, us visa photo maker, uscis passport photo online, exam passport photo maker india, create passport photo from selfie"
            />

            <div className="min-h-screen bg-background">
                <Header />

                <section className="relative overflow-hidden bg-gradient-to-br from-violet-600/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Tools" }, { name: "Passport Photo Maker" }]} />
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="mb-3 inline-block rounded-full bg-violet-600/10 px-4 py-1.5 text-sm font-medium text-violet-600">
                                FREE TOOL · BROWSER-BASED
                            </span>
                            <h1 className="mb-3 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl">
                                Passport Photo Maker{" "}
                                <span className="text-primary underline decoration-wavy underline-offset-4">Online Free</span>
                            </h1>
                            <p className="text-muted-foreground md:text-lg">
                                Resize any photo to exact passport, visa, or exam dimensions with a white background.
                                For India passport, US visa DS-160, USCIS, and all exam portals.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl">

                            <AdContainer type="display" className="mb-8" />

                            {/* Step 1: Select Preset */}
                            <div className="mb-6 rounded-2xl border border-border bg-card p-6">
                                <h2 className="mb-4 text-lg font-bold text-foreground">Step 1 — Choose Output Format</h2>
                                <div className="grid gap-2 sm:grid-cols-2">
                                    {PRESETS.map((preset) => (
                                        <button
                                            key={preset.label}
                                            onClick={() => setSelectedPreset(preset)}
                                            className={`rounded-xl border p-3 text-left transition-all ${selectedPreset.label === preset.label
                                                ? "border-primary bg-primary/10 text-primary"
                                                : "border-border bg-muted/30 text-muted-foreground hover:border-primary/50"
                                                }`}
                                        >
                                            <p className="text-sm font-semibold text-foreground">{preset.label}</p>
                                            <p className="text-xs text-muted-foreground mt-0.5">{preset.description}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Step 2: Upload */}
                            <div className="mb-6 rounded-2xl border border-border bg-card p-6">
                                <h2 className="mb-4 text-lg font-bold text-foreground">Step 2 — Upload Your Photo</h2>
                                {!imageSrc ? (
                                    <div
                                        className={`rounded-xl border-2 border-dashed p-8 text-center cursor-pointer transition-colors ${isDragging ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"}`}
                                        onClick={() => fileInputRef.current?.click()}
                                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                                        onDragLeave={() => setIsDragging(false)}
                                        onDrop={(e) => { e.preventDefault(); setIsDragging(false); const f = e.dataTransfer.files[0]; if (f) processImage(f); }}
                                    >
                                        <Upload className="mx-auto mb-3 h-9 w-9 text-muted-foreground" />
                                        <p className="text-base font-semibold text-foreground">Drop your photo here</p>
                                        <p className="text-sm text-muted-foreground mt-1">JPG, PNG, WEBP — any size accepted</p>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => { const f = e.target.files?.[0]; if (f) processImage(f); }}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="flex items-center gap-4 flex-wrap justify-center">
                                            <div className="text-center">
                                                <p className="mb-2 text-xs text-muted-foreground font-medium uppercase tracking-wide">Original</p>
                                                <img src={imageSrc} alt="Original" className="max-h-40 max-w-full rounded-lg object-contain shadow border border-border" />
                                            </div>
                                            {outputBlob && (
                                                <>
                                                    <span className="text-2xl text-muted-foreground">→</span>
                                                    <div className="text-center">
                                                        <p className="mb-2 text-xs text-muted-foreground font-medium uppercase tracking-wide">Output</p>
                                                        <img
                                                            src={URL.createObjectURL(outputBlob)}
                                                            alt="Output"
                                                            className="max-h-40 max-w-full rounded-lg object-contain shadow border border-border"
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        {outputSize && (
                                            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                                                <CheckCircle className="h-4 w-4 text-green-500" /> {outputSize}
                                            </p>
                                        )}
                                        <button onClick={handleReset} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                            <RefreshCw className="h-4 w-4" /> Use a different photo
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Step 3: Quality + Generate */}
                            {imageSrc && (
                                <div className="mb-6 rounded-2xl border border-border bg-card p-6">
                                    <h2 className="mb-4 text-lg font-bold text-foreground">Step 3 — Adjust Quality & Download</h2>
                                    <div className="mb-5">
                                        <label className="mb-2 flex items-center justify-between text-sm">
                                            <span className="font-medium text-foreground">JPEG Quality</span>
                                            <span className="font-bold text-primary">{quality}%</span>
                                        </label>
                                        <input
                                            type="range"
                                            min={40}
                                            max={100}
                                            value={quality}
                                            onChange={(e) => setQuality(Number(e.target.value))}
                                            className="w-full accent-primary"
                                        />
                                        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                                            <span>Smaller file</span>
                                            <span>Best quality</span>
                                        </div>
                                        {selectedPreset.maxKB && (
                                            <p className="mt-2 text-xs text-muted-foreground">
                                                Target: under <strong className="text-foreground">{selectedPreset.maxKB} KB</strong> (required for {selectedPreset.label.split(" (")[0]}).
                                                At {quality}% quality, output is typically well within this limit.
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <button
                                            onClick={generateOutput}
                                            disabled={isProcessing}
                                            className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
                                        >
                                            {isProcessing ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Camera className="h-4 w-4" />}
                                            {isProcessing ? "Processing..." : "Generate Photo"}
                                        </button>
                                        {outputBlob && (
                                            <button
                                                onClick={handleDownload}
                                                className="flex items-center gap-2 rounded-xl border border-primary bg-primary/10 px-6 py-3 font-semibold text-primary hover:bg-primary/20 transition-colors"
                                            >
                                                <Download className="h-4 w-4" /> Download JPEG
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Hidden canvas */}
                            <canvas ref={canvasRef} className="hidden" />

                            <AdContainer type="infeed" className="my-8" />

                            {/* What this does */}
                            <section className="mb-10">
                                <h2 className="mb-4 text-xl font-bold text-foreground">What This Tool Does</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { title: "Resizes to Exact Pixels", desc: "Output matches the exact pixel dimensions required by each exam or document portal" },
                                        { title: "Adds White Background", desc: "Any empty area around your photo is automatically filled white — as required by most portals" },
                                        { title: "Export as JPEG", desc: "All output is JPEG — the only format accepted by exam portals, DS-160, and USCIS" },
                                        { title: "Adjustable Quality", desc: "Control file size by adjusting JPEG quality — hit the exact KB target needed" },
                                        { title: "100% Private", desc: "Everything runs in your browser. Your photo never touches any server" },
                                        { title: "Works on Mobile", desc: "Fully responsive — works on your phone or tablet without needing to install anything" },
                                    ].map((item) => (
                                        <div key={item.title} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                                            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                                            <div>
                                                <p className="font-semibold text-foreground text-sm">{item.title}</p>
                                                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Related tools */}
                            <section className="mb-10">
                                <h2 className="mb-4 text-xl font-bold text-foreground">More Free Tools</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { title: "Exam Photo Requirements Checker", desc: "Verify your photo meets exam specs", href: "/exam-photo-checker" },
                                        { title: "Signature Resize Tool", desc: "Compress signature to exact KB", href: "/signature-resize" },
                                        { title: "White Background Tool", desc: "Remove grey or coloured backgrounds", href: "/signature-photo-white-background-phone" },
                                        { title: "Crop Signature from Scan", desc: "Extract signature from full page", href: "/crop-signature-from-full-page-scan" },
                                        { title: "Digital Signature Creator", desc: "Draw a digital signature online", href: "/signature-creator" },
                                        { title: "Bulk Resize Tool", desc: "Resize multiple images at once", href: "/bulk-resize" },
                                    ].map((tool) => (
                                        <Link key={tool.href} to={tool.href} className="rounded-lg border border-border bg-card p-3 hover:border-primary/50 transition-colors">
                                            <p className="font-semibold text-foreground text-sm">{tool.title}</p>
                                            <p className="text-xs text-muted-foreground mt-0.5">{tool.desc}</p>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* Related blog posts */}
                            <section className="mb-10">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Related Guides</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { title: "US Visa DS-160 Photo Guide", href: "/resize-passport-photo-us-visa-ds-160" },
                                        { title: "USCIS Immigration Photo Requirements", href: "/resize-photo-signature-uscis-immigration-forms" },
                                        { title: "Agniveer Photo & Signature Guide", href: "/agniveer-agnipath-photo-signature-requirements-2026" },
                                        { title: "CUET UG 2026 Photo Guide", href: "/cuet-ug-photo-signature-upload-guide-2026" },
                                        { title: "Passport Photo at Home for Exams", href: "/how-to-take-passport-photo-at-home-for-exams" },
                                        { title: "Why Exam Portal Rejects Your Photo", href: "/why-exam-portal-rejecting-photo-10-reasons" },
                                    ].map((link) => (
                                        <Link key={link.href} to={link.href} className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 text-sm hover:border-primary/50 hover:text-primary transition-colors">
                                            <span className="text-primary">→</span> {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </section>

                <AdContainer type="multiplex" />
                <FAQSection faqs={faqs} />
                <AdSenseDisclaimer />
                <Footer />
            </div>
        </>
    );
};

export default PassportPhotoMakerTool;

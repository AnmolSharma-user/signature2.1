import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdContainer from "@/components/AdContainer";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { downloadImage } from "@/utils/imageResize";
import { Type, Calendar, Upload, Download, RefreshCw, CheckCircle, Shield, Camera, Pen, Info } from "lucide-react";

/* ─────── Main Page ─────── */
const AddNameDateToPhoto = () => {
    const [preview, setPreview] = useState<string | null>(null);
    const [result, setResult] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const fileRef = useRef<HTMLInputElement>(null);

    // Text overlay settings
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [fontSize, setFontSize] = useState(14);
    const [textColor, setTextColor] = useState("#000000");
    const [bgBarColor, setBgBarColor] = useState("#ffffff");
    const [barOpacity, setBarOpacity] = useState(0.85);
    const [position, setPosition] = useState<"bottom" | "top">("bottom");

    const processImage = useCallback(async (src: string) => {
        if (!src) return;
        setIsProcessing(true);
        try {
            const img = new window.Image();
            img.crossOrigin = "anonymous";
            await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = rej; img.src = src; });

            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d")!;
            ctx.drawImage(img, 0, 0);

            if (name || date) {
                const lineH = Math.max(fontSize + 8, 28);
                const lines: string[] = [];
                if (name) lines.push(name);
                if (date) lines.push(date);
                const barH = lineH * lines.length + 10;
                const barY = position === "bottom" ? canvas.height - barH : 0;

                // Semi-transparent bar
                ctx.globalAlpha = barOpacity;
                ctx.fillStyle = bgBarColor;
                ctx.fillRect(0, barY, canvas.width, barH);
                ctx.globalAlpha = 1;

                // Text
                ctx.fillStyle = textColor;
                ctx.font = `bold ${fontSize}px Arial, sans-serif`;
                ctx.textAlign = "center";
                lines.forEach((line, i) => {
                    ctx.fillText(line, canvas.width / 2, barY + lineH * (i + 1) - 4, canvas.width - 10);
                });
            }

            setResult(canvas.toDataURL("image/jpeg", 0.92));
            toast.success("Name/date applied!");
        } catch {
            toast.error("Failed to process image.");
        } finally {
            setIsProcessing(false);
        }
    }, [name, date, fontSize, textColor, bgBarColor, barOpacity, position]);

    const handleFile = (file: File) => {
        if (!file.type.startsWith("image/")) { toast.error("Please upload an image file."); return; }
        const reader = new FileReader();
        reader.onloadend = () => {
            const src = reader.result as string;
            setPreview(src);
            setResult(null);
        };
        reader.readAsDataURL(file);
    };

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault(); setIsDragging(false);
        const file = e.dataTransfer.files?.[0]; if (file) handleFile(file);
    }, []);

    const reset = () => { setPreview(null); setResult(null); };

    const faqs = [
        { question: "Why do exam portals ask to add name and date to photo?", answer: "SSC, IBPS, SBI, and several state PSC portals require your full name and date of photo (DOP) printed below your photo on the application printout or sometimes on the uploaded photo itself. It serves as an identity verification measure." },
        { question: "Which exams require name and date on photo?", answer: "SSC CGL, SSC CHSL, SSC GD, IBPS PO/Clerk, SBI PO, SBI Clerk, and various state PSC exams require name and/or date of photograph on the printout or integrated into the photo upload. Always check the latest official instructions." },
        { question: "Is the name/date added permanently to my original photo?", answer: "No. This tool processes images entirely in your browser. Your original photo file is untouched. Only the downloaded result has the name/date overlay." },
        { question: "What format should the date be?", answer: "SSC and IBPS typically require the format 'DD/MM/YYYY' or 'DD-MM-YYYY'. Type the date exactly as specified in your exam's official instructions." },
        { question: "Can I use this tool on mobile?", answer: "Yes. This tool works on all modern mobile browsers including Chrome for Android and Safari for iOS. No app download needed." },
        { question: "Is this tool safe for exam photos?", answer: "100% safe. All processing happens in your browser using the Canvas API. Your photo is never uploaded to any server." },
    ];

    const howToSteps = [
        { text: "Upload your passport-size JPG or PNG photo" },
        { text: "Enter your name and/or exam date in the fields" },
        { text: "Adjust font size, text colour, and bar position" },
        { text: "Click Apply Name & Date to preview the result" },
        { text: "Download the JPG and use it for your exam application" },
    ];

    return (
        <>
            <SEOHead
                title="Add Name and Date to Photo Online Free 2025 | Exam Photo Name Editor"
                description="Free online tool to add name and date to exam photos for SSC, IBPS, SBI, and all government exams. Instant, browser-only, secure. No app needed."
                canonicalUrl="https://signatureresize.in/add-name-date-to-photo"
                keywords="add name to photo online, add date to photo online free, name on photo online, date on photo online, exam photo name editor, add name date to exam photo, ssc photo with name, ibps photo name date, government exam photo editor"
            />
            <SEOSchema type="HowTo" howToName="How to Add Name and Date to Exam Photo Online" howToSteps={howToSteps} />
            <SEOSchema type="FAQPage" faqs={faqs} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "Add Name & Date to Photo", url: "https://signatureresize.in/add-name-date-to-photo" },
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "WebApplication",
                    name: "Add Name and Date to Photo Online",
                    url: "https://signatureresize.in/add-name-date-to-photo",
                    description: "Free browser-based tool to add candidate name and date of photograph to exam application photos for SSC, IBPS, SBI, and all Indian government exams.",
                    applicationCategory: "UtilityApplication", operatingSystem: "Any",
                    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
                })
            }} />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-violet-600/10 via-primary/5 to-background py-8 sm:py-14">
                    <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />
                    <div className="container mx-auto px-4 relative">
                        <Breadcrumbs items={[{ name: "Add Name & Date to Photo" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                Add Name & Date to Photo{" "}
                                <span className="text-violet-500">Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                SSC, IBPS, SBI, and many exam portals require your <strong>name and date of photograph</strong> printed on the photo or application. Add it instantly — no Photoshop, no app, browser-only and 100% free.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["Works for SSC, IBPS, SBI", "Browser-Only Processing", "JPG Download", "No Watermark"].map((t) => (
                                    <span key={t} className="flex items-center gap-1.5">
                                        <CheckCircle className="h-3.5 w-3.5 text-green-500" /> {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <main className="py-8 md:py-12">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl">
                            <div className="rounded-2xl border-2 border-border bg-card shadow-xl overflow-hidden">
                                {/* Tool Header */}
                                <div className="border-b border-border bg-gradient-to-r from-violet-500/10 via-primary/5 to-background p-4 sm:p-6">
                                    <h2 className="text-center text-xl font-bold text-foreground">Exam Photo Name & Date Editor</h2>
                                    <p className="text-center text-sm text-muted-foreground mt-1">Add your name and date of photograph to any exam photo</p>
                                </div>

                                <div className="p-4 sm:p-6 space-y-5">
                                    {/* Upload */}
                                    {!preview ? (
                                        <div
                                            onDrop={handleDrop}
                                            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                                            onDragLeave={() => setIsDragging(false)}
                                            className={`cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-all duration-300 ${isDragging ? "border-violet-500 bg-violet-500/10" : "border-primary/30 bg-accent/50 hover:border-primary hover:bg-accent"}`}>
                                            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
                                            <label className="cursor-pointer" onClick={() => fileRef.current?.click()}>
                                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/10 animate-pulse">
                                                    <Type className="h-8 w-8 text-violet-500" />
                                                </div>
                                                <p className="mb-2 text-base font-semibold text-foreground">Upload your exam photo</p>
                                                <p className="mb-4 text-sm text-muted-foreground">Drag & drop or click · JPG, PNG, WEBP</p>
                                                <Button size="lg" className="pointer-events-none bg-violet-600 hover:bg-violet-700 text-white">
                                                    <Upload className="mr-2 h-5 w-5" /> Browse Files
                                                </Button>
                                            </label>
                                        </div>
                                    ) : (
                                        <>
                                            {/* Settings */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-semibold text-foreground mb-1.5">Candidate Name</label>
                                                    <input
                                                        type="text" value={name} onChange={(e) => setName(e.target.value)}
                                                        placeholder="e.g. RAHUL SHARMA"
                                                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-foreground mb-1.5">Date of Photograph</label>
                                                    <input
                                                        type="text" value={date} onChange={(e) => setDate(e.target.value)}
                                                        placeholder="e.g. 06/03/2026"
                                                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-foreground mb-1.5">Font Size (px)</label>
                                                    <input
                                                        type="range" min={10} max={28} value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))}
                                                        className="w-full accent-violet-500"
                                                    />
                                                    <span className="text-xs text-muted-foreground">{fontSize}px</span>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-foreground mb-1.5">Text Position</label>
                                                    <div className="flex gap-2 mt-1">
                                                        {["bottom", "top"].map((p) => (
                                                            <button key={p} onClick={() => setPosition(p as "bottom" | "top")}
                                                                className={`flex-1 rounded-lg border py-1.5 text-xs font-medium capitalize transition-all ${position === p ? "border-violet-500 bg-violet-500/10 text-violet-600" : "border-border text-muted-foreground"}`}>
                                                                {p}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-foreground mb-1.5">Text Color</label>
                                                    <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="h-9 w-full rounded-lg border border-border cursor-pointer" />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-foreground mb-1.5">Bar Background</label>
                                                    <input type="color" value={bgBarColor} onChange={(e) => setBgBarColor(e.target.value)} className="h-9 w-full rounded-lg border border-border cursor-pointer" />
                                                </div>
                                            </div>

                                            {/* Apply button */}
                                            <Button size="lg" className="w-full h-12 bg-violet-600 hover:bg-violet-700 text-white" onClick={() => processImage(preview)}>
                                                {isProcessing ? <><RefreshCw className="h-5 w-5 mr-2 animate-spin" /> Processing…</> : <><Type className="h-5 w-5 mr-2" /> Apply Name & Date</>}
                                            </Button>

                                            {/* Preview */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="rounded-xl border border-border bg-background p-4">
                                                    <p className="text-xs font-medium text-muted-foreground mb-2">Original</p>
                                                    <div className="flex h-48 items-center justify-center rounded-lg overflow-hidden bg-muted/20">
                                                        <img src={preview} alt="Original" className="max-h-full max-w-full object-contain" />
                                                    </div>
                                                </div>
                                                <div className={`rounded-xl border-2 p-4 ${result ? "border-green-500 bg-green-500/5" : "border-border bg-background"}`}>
                                                    <p className="text-xs font-medium mb-2 text-muted-foreground">
                                                        {result ? <span className="text-green-600 flex items-center gap-1"><CheckCircle className="h-3 w-3" /> Name & Date Applied</span> : "Result"}
                                                    </p>
                                                    <div className="flex h-48 items-center justify-center rounded-lg overflow-hidden bg-muted/20">
                                                        {result ? <img src={result} alt="With name/date" className="max-h-full max-w-full object-contain" /> : <p className="text-xs text-muted-foreground">Click Apply to preview</p>}
                                                    </div>
                                                </div>
                                            </div>

                                            {result && (
                                                <div className="flex flex-col sm:flex-row gap-3">
                                                    <Button size="lg" className="flex-1 h-12 bg-green-600 hover:bg-green-700 text-white" onClick={() => downloadImage(result, "exam-photo-with-name-date.jpg")}>
                                                        <Download className="mr-2 h-5 w-5" /> Download JPG
                                                    </Button>
                                                    <Button size="lg" variant="outline" className="h-12" onClick={reset}>
                                                        <RefreshCw className="mr-2 h-4 w-4" /> New Photo
                                                    </Button>
                                                </div>
                                            )}

                                            <div className="rounded-lg bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 p-3 flex gap-2">
                                                <Info className="h-4 w-4 text-violet-600 shrink-0 mt-0.5" />
                                                <p className="text-xs text-violet-700 dark:text-violet-300">
                                                    <strong>Tip:</strong> After adding name/date, use the <Link to="/ssc-cgl-photo-signature-resize" className="underline font-medium">SSC Photo Compressor</Link> to reduce it to the required file size (4–20 KB) before uploading to the exam portal.
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <AdContainer type="display" />
                        </div>

                        {/* Content Sections */}
                        <div className="mx-auto mt-12 max-w-4xl space-y-8">
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-4">Which Exams Require Name & Date on Photo?</h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm border-collapse">
                                        <thead><tr className="bg-gradient-to-r from-violet-600 to-violet-700 text-white">
                                            <th className="p-3 text-left rounded-tl-xl">Exam</th>
                                            <th className="p-3 text-left">Requirement</th>
                                            <th className="p-3 text-left rounded-tr-xl">Where Required</th>
                                        </tr></thead>
                                        <tbody className="divide-y divide-border">
                                            {[
                                                { exam: "SSC CGL / CHSL / GD", req: "Name & Date of Photograph", where: "Application printout & admit card" },
                                                { exam: "IBPS PO / Clerk / RRB", req: "Name & Date of Photograph", where: "Printed on application form" },
                                                { exam: "SBI PO / Clerk", req: "Name below photo", where: "Photo upload (check notification)" },
                                                { exam: "UPSC CSE", req: "Name handwritten on photo", where: "Attestation form printout" },
                                                { exam: "RRB NTPC / Group D", req: "Name & Date on back of photo", where: "Physical application / admit" },
                                                { exam: "State PSC Exams", req: "Name & Date", where: "Check individual notification" },
                                            ].map((r) => (
                                                <tr key={r.exam} className="hover:bg-muted/40">
                                                    <td className="p-3 font-semibold text-foreground">{r.exam}</td>
                                                    <td className="p-3 text-muted-foreground">{r.req}</td>
                                                    <td className="p-3 text-muted-foreground text-xs">{r.where}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-3 flex gap-2">
                                    <Info className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                                    <p className="text-xs text-amber-700 dark:text-amber-300">
                                        Requirements vary by exam year and notification. Always refer to the official instructions on the exam portal before finalizing.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-3">How to Prepare Your Exam Photo With Name & Date</h2>
                                <ol className="space-y-4 text-sm text-muted-foreground">
                                    {[
                                        { n: 1, t: "Take a passport-size photo", b: "White background, face clearly visible, no glasses. Size should be 3.5×4.5 cm (about 200×230 px for digital). Use natural light for best quality." },
                                        { n: 2, t: "Upload it here", b: "Use the upload area above. JPG and PNG are accepted. The original file is never sent to any server." },
                                        { n: 3, t: "Type your name and date", b: "Enter your full name (as in application) and the date of photograph in DD/MM/YYYY format. Adjust font size and position to your preference." },
                                        { n: 4, t: "Apply and download", b: "Click 'Apply Name & Date', review the preview, then download the JPG. Compress it if needed using the SSC CGL or IBPS tool." },
                                    ].map(({ n, t, b }) => (
                                        <li key={n} className="flex gap-4">
                                            <div className="flex-shrink-0 h-7 w-7 rounded-full bg-violet-500 text-white flex items-center justify-center text-xs font-bold">{n}</div>
                                            <div><p className="font-semibold text-foreground mb-1">{t}</p><p>{b}</p></div>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            <div className="rounded-2xl border border-border bg-muted/30 p-6">
                                <h2 className="text-lg font-bold text-foreground mb-4">Related Tools</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {[
                                        { to: "/ssc-cgl-photo-signature-resize", label: "SSC CGL Photo", icon: Camera },
                                        { to: "/ibps-photo-signature-resize", label: "IBPS Photo & Sig", icon: Camera },
                                        { to: "/signature-creator", label: "Signature Creator", icon: Pen },
                                        { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle },
                                    ].map(({ to, label, icon: Icon }) => (
                                        <Link key={to} to={to} className="flex flex-col items-center text-center rounded-xl border border-border bg-card p-3 hover:border-violet-400 hover:bg-violet-500/5 transition-all group">
                                            <Icon className="h-6 w-6 text-violet-500 mb-2 group-hover:scale-110 transition-transform" />
                                            <p className="text-xs font-semibold text-foreground">{label}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <AdContainer type="infeed" className="mx-auto max-w-4xl mt-6" />
                    </div>
                </main>

                <FAQSection faqs={faqs} />
                <AdContainer type="multiplex" className="container mx-auto px-4 mb-6" />
                <Footer />
            </div>
        </>
    );
};

export default AddNameDateToPhoto;

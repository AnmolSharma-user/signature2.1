import React, { useState, useRef, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignatureResizer from "@/components/SignatureResizer";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import ProcessingFeatures from "@/components/ProcessingFeatures";
import TrustBadges from "@/components/TrustBadges";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdContainer from "@/components/AdContainer";
import { Link } from "react-router-dom";
import {
    Camera,
    Pen,
    Image,
    CheckCircle,
    XCircle,
    AlertTriangle,
    ArrowRight,
    Upload,
    Download,
    Shield,
    Zap,
    RefreshCw,
    Info,
    FileImage,
    Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { downloadImage } from "@/utils/imageResize";

/* ─────────────────────────── Background-Changer mini-tool ─────────────────────────── */
function BackgroundChanger() {
    const [preview, setPreview] = useState<string | null>(null);
    const [result, setResult] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const fileRef = useRef<HTMLInputElement>(null);

    const applyWhiteBackground = async (src: string) => {
        setIsProcessing(true);
        try {
            const img = new window.Image();
            img.crossOrigin = "anonymous";
            await new Promise<void>((res, rej) => {
                img.onload = () => res();
                img.onerror = rej;
                img.src = src;
            });
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d")!;
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
            setResult(canvas.toDataURL("image/jpeg", 0.92));
            toast.success("White background applied!");
        } catch {
            toast.error("Failed to process image. Please try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    const handleFile = (file: File) => {
        if (!file.type.startsWith("image/")) { toast.error("Please upload an image file."); return; }
        const reader = new FileReader();
        reader.onloadend = () => {
            const src = reader.result as string;
            setPreview(src);
            setResult(null);
            applyWhiteBackground(src);
        };
        reader.readAsDataURL(file);
    };

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) handleFile(file);
    }, []);

    const reset = () => { setPreview(null); setResult(null); };

    const primaryBtn = "relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group";
    const successBtn = "relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group";

    return (
        <div className="rounded-2xl border-2 border-border bg-card shadow-xl overflow-hidden">
            {/* Header */}
            <div className="border-b border-border bg-gradient-to-r from-amber-500/10 via-primary/5 to-background p-4 sm:p-6">
                <h2 className="text-center text-xl sm:text-2xl font-bold text-foreground">
                    TNPSC Photo Background Changer
                </h2>
                <p className="text-center text-sm text-muted-foreground mt-1">
                    Instantly apply a white background — required for TNPSC OTR photo
                </p>
            </div>

            <div className="p-4 sm:p-6 space-y-5">
                {!preview ? (
                    <div
                        onDrop={handleDrop}
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        className={`cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-all duration-300 ${isDragging ? "border-amber-500 bg-amber-500/10 scale-[1.02]" : "border-primary/30 bg-accent/50 hover:border-primary hover:bg-accent"}`}
                    >
                        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
                        <label htmlFor="bg-upload" className="cursor-pointer" onClick={() => fileRef.current?.click()}>
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 animate-pulse">
                                <Image className="h-8 w-8 text-amber-500" />
                            </div>
                            <p className="mb-2 text-base font-semibold text-foreground">Upload your TNPSC photo</p>
                            <p className="mb-4 text-sm text-muted-foreground">Drag & drop or click to browse (JPG, PNG, WEBP)</p>
                            <Button size="lg" className={`pointer-events-none ${primaryBtn}`}>
                                <Upload className="mr-2 h-5 w-5" /> Browse Files
                            </Button>
                        </label>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="rounded-xl border border-border bg-background p-4">
                                <p className="text-xs font-medium text-muted-foreground mb-2">Original Photo</p>
                                <div className="flex h-48 items-center justify-center rounded-lg bg-muted/30 overflow-hidden">
                                    <img src={preview} alt="Original" className="max-h-full max-w-full object-contain" />
                                </div>
                            </div>
                            <div className={`rounded-xl border-2 p-4 ${result ? "border-green-500 bg-green-500/5" : "border-border bg-background"}`}>
                                <p className="text-xs font-medium mb-2 flex items-center gap-1">
                                    {result ? <><CheckCircle className="h-3 w-3 text-green-500" /><span className="text-green-600">White Background Applied</span></> : <span className="text-muted-foreground">Processing…</span>}
                                </p>
                                <div className="flex h-48 items-center justify-center rounded-lg overflow-hidden" style={{ background: 'repeating-conic-gradient(#e5e7eb 0% 25%, white 0% 50%) 0 0 / 16px 16px' }}>
                                    {isProcessing ? (
                                        <div className="text-center text-muted-foreground">
                                            <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-2 text-primary" />
                                            <p className="text-sm">Applying white background…</p>
                                        </div>
                                    ) : result ? (
                                        <img src={result} alt="White background" className="max-h-full max-w-full object-contain" />
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        {result && (
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button size="lg" className={`flex-1 h-12 ${successBtn}`} onClick={() => downloadImage(result, "tnpsc-photo-white-bg.jpg")}>
                                    <Download className="mr-2 h-5 w-5" /> Download JPG
                                </Button>
                                <Button size="lg" variant="outline" className="h-12 sm:w-auto" onClick={reset}>
                                    <RefreshCw className="mr-2 h-4 w-4" /> New Photo
                                </Button>
                            </div>
                        )}
                    </>
                )}

                <div className="rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-3 flex gap-2">
                    <Info className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-700 dark:text-amber-300">
                        <strong>TNPSC OTR requires a white background.</strong> This tool layers your photo over a pure white canvas. For transparent-background photos (PNG), the result will be cleanest. After applying, use the <strong>Photo Compressor tab</strong> to resize to the required 20–50 KB.
                    </p>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────── Main Page ─────────────────────────── */
const TNPSCPhotoCompressor = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature" | "background">("photo");

    const faqs = [
        {
            question: "What is the photo size requirement for TNPSC OTR registration?",
            answer: "As per the official TNPSC OTR (One Time Registration) portal, the photo must be in JPG/JPEG format, dimensions 200×230 pixels, file size between 20 KB and 50 KB, with a white background. Our TNPSC Photo Compressor automatically applies the correct dimensions and target file size.",
        },
        {
            question: "How to compress photo for TNPSC OTR online for free?",
            answer: "Use this free TNPSC photo compressor online: (1) Click the 'Photo Compressor' tab above. (2) Upload your photo — JPG, PNG, or WEBP is accepted. (3) The 'TNPSC Photo (OTR)' preset is pre-selected with the correct settings. (4) Click 'Preview & Resize', then 'Resize Now'. (5) Download your compressed photo — ready to upload to TNPSC OTR.",
        },
        {
            question: "What is the TNPSC signature compressor specification?",
            answer: "TNPSC OTR requires your signature in JPG format at 140×60 pixels, file size between 10 KB and 30 KB, on a white background. Use the 'Signature Compressor' tab on this page. The tool auto-selects the 'TNPSC Signature (OTR)' preset with the correct specifications.",
        },
        {
            question: "How to change photo background to white for TNPSC?",
            answer: "Click the 'Background Changer' tab on this page. Upload your TNPSC photo and the tool instantly applies a pure white background using a canvas layer — no Photoshop needed. Download the JPG result, then use the Photo Compressor tab to reduce to the required file size (20–50 KB).",
        },
        {
            question: "Can I use this TNPSC photo compressor on mobile?",
            answer: "Yes. This TNPSC photo compressor online tool is fully mobile-friendly and works on Android and iOS browsers (Chrome, Safari). All processing happens directly in your browser — no app download needed, no data uploaded to any server.",
        },
        {
            question: "Why is my TNPSC photo getting rejected on the OTR portal?",
            answer: "The most common reasons TNPSC OTR rejects photos are: (1) File size above 50 KB or below 20 KB. (2) Background is not white. (3) Format is PNG instead of JPG. (4) Dimensions are incorrect. This tool fixes all four issues in one go using the TNPSC Photo preset.",
        },
        {
            question: "Is my photo safe when using this online TNPSC photo compressor?",
            answer: "100% safe. All image processing happens entirely in your web browser using the Canvas API — your photo is never uploaded to any server. Once you close or refresh the page, the image is gone. We do not store, access, or transmit your photos.",
        },
    ];

    const howToSteps = [
        { text: "Open the TNPSC Photo Compressor and select the 'Photo Compressor' tab" },
        { text: "Upload your passport-size photo (JPG, PNG, or WEBP accepted)" },
        { text: "The TNPSC Photo (OTR) preset is auto-selected — target: 35 KB, 200×230 px" },
        { text: "Click 'Preview & Resize', then 'Resize Now' to compress your photo" },
        { text: "Download the JPG output and upload it to the TNPSC OTR portal" },
    ];

    const tabs = [
        { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "Resize to 20–50 KB" },
        { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "Resize to 10–30 KB" },
        { key: "background" as const, label: "Background Changer", icon: Layers, desc: "Add white background" },
    ];

    const requirements = [
        { doc: "Photo", dimension: "200 × 230 px", size: "20 KB – 50 KB", format: "JPG / JPEG", bg: "White", tab: "photo" as const },
        { doc: "Signature", dimension: "140 × 60 px", size: "10 KB – 30 KB", format: "JPG / JPEG", bg: "White", tab: "signature" as const },
        { doc: "Thumb Impression", dimension: "240 × 240 px", size: "20 KB – 50 KB", format: "JPG / JPEG", bg: "White", tab: "photo" as const },
    ];

    const commonRejections = [
        { icon: XCircle, color: "text-red-500", title: "File size out of range", desc: "Photo is above 50 KB or below 20 KB — the portal won't accept it." },
        { icon: XCircle, color: "text-red-500", title: "Non-white background", desc: "Any background other than pure white (#FFFFFF) causes rejection." },
        { icon: AlertTriangle, color: "text-amber-500", title: "Wrong file format", desc: "TNPSC OTR only accepts JPG/JPEG — PNG files are rejected." },
        { icon: AlertTriangle, color: "text-amber-500", title: "Incorrect dimensions", desc: "Photo must be 200×230 px. Images that differ will be flagged." },
        { icon: AlertTriangle, color: "text-amber-500", title: "Blurry or low-res photo", desc: "Heavily compressed or pixelated photos are rejected by the portal." },
        { icon: Info, color: "text-blue-500", title: "Glasses or head covering", desc: "Avoid sunglasses or full head coverings — must match ID document." },
    ];

    const relatedTools = [
        { to: "/compress-image-to-20kb-online", label: "Compress to 20KB", desc: "Any image to exact KB", icon: Zap },
        { to: "/signature-resize", label: "Signature Resize", desc: "All exams, any size", icon: Pen },
        { to: "/exam-photo-checker", label: "Photo Checker", desc: "Validate before upload", icon: CheckCircle },
        { to: "/passport-photo-maker", label: "Passport Photo Maker", desc: "Create passport photos", icon: Camera },
    ];

    return (
        <>
            <SEOHead
                title="TNPSC Photo Compressor Online Free | Resize Photo & Signature for TNPSC OTR"
                description="Free TNPSC photo compressor online — resize TNPSC OTR photo to 20-50 KB, signature to 10-30 KB, change photo background to white. Instant, secure, browser-only."
                canonicalUrl="https://signatureresize.in/tnpsc-photo-compressor"
                keywords="tnpsc photo compressor, tnpsc photo editor, tnpsc signature compressor, tnpsc photo background change, tnpsc photo compressor online, tnpsc otr photo size, tnpsc photo resize, tnpsc photo white background, tnpsc signature resize, tnpsc photo compress online free"
                ogImage="https://signatureresize.in/assest/tnpsc-photo-requirements.png"
                ogType="website"
            />

            {/* WebApplication Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        name: "TNPSC Photo Compressor Online",
                        url: "https://signatureresize.in/tnpsc-photo-compressor",
                        description: "Free online tool to compress TNPSC OTR photo and signature to exact size requirements, and apply white background — all in your browser.",
                        applicationCategory: "UtilityApplication",
                        operatingSystem: "Any",
                        browserRequirements: "Requires JavaScript enabled",
                        offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
                        featureList: [
                            "TNPSC Photo compression to 20-50 KB",
                            "TNPSC Signature compression to 10-30 KB",
                            "White background changer for TNPSC OTR",
                            "Browser-only — no server upload",
                            "Instant JPG download",
                        ],
                        author: { "@id": "https://signatureresize.in/#author" },
                        publisher: { "@id": "https://signatureresize.in/#organization" },
                    }),
                }}
            />

            {/* Speakable Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "TNPSC Photo Compressor Online Free",
                        speakable: {
                            "@type": "SpeakableSpecification",
                            cssSelector: [".speakable-intro", "h1", "h2"],
                        },
                        url: "https://signatureresize.in/tnpsc-photo-compressor",
                    }),
                }}
            />

            {/* Article Schema (EEAT) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: "TNPSC Photo Compressor Online — Resize Photo & Signature for TNPSC OTR",
                        description: "Complete guide and free online tool to compress TNPSC OTR photo, signature, and change background to white.",
                        url: "https://signatureresize.in/tnpsc-photo-compressor",
                        datePublished: "2026-03-05",
                        dateModified: "2026-03-05",
                        author: {
                            "@type": "Organization",
                            name: "SignatureResize Editorial Team",
                            url: "https://signatureresize.in/about-us",
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "SignatureResize.in",
                            url: "https://signatureresize.in",
                            logo: { "@type": "ImageObject", url: "https://signatureresize.in/favicon.ico" },
                        },
                        image: "https://signatureresize.in/assest/tnpsc-photo-requirements.png",
                        inLanguage: "en-IN",
                        about: { "@type": "Thing", name: "TNPSC OTR Photo Requirements" },
                    }),
                }}
            />

            <SEOSchema
                type="HowTo"
                howToName="How to Compress TNPSC OTR Photo Online — Step by Step"
                howToSteps={howToSteps}
            />
            <SEOSchema
                type="FAQPage"
                faqs={faqs}
            />
            <SEOSchema
                type="BreadcrumbList"
                breadcrumbs={[
                    { name: "Home", url: "https://signatureresize.in/" },
                    { name: "TNPSC Photo Compressor", url: "https://signatureresize.in/tnpsc-photo-compressor" },
                ]}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* ── Hero ── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-amber-600/10 via-primary/5 to-background py-8 sm:py-14">
                    {/* Decorative orbs */}
                    <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

                    <div className="container mx-auto px-4 relative">
                        <Breadcrumbs items={[{ name: "TNPSC Photo Compressor" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                TNPSC Photo Compressor Online —{" "}
                                <span className="text-amber-500">Resize Photo & Signature</span> for TNPSC OTR
                            </h1>
                            <p className="speakable-intro text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                Struggling to get your photo accepted on the <strong>TNPSC OTR portal</strong>? You're not alone — thousands of Tamil Nadu aspirants face the same size and background rejections every season. This free tool handles all three requirements in one place: compress your <strong>TNPSC photo</strong> to 20–50 KB, reduce your <strong>TNPSC signature</strong> to 10–30 KB, and instantly apply a white background — no Photoshop, no app download.
                            </p>
                            {/* Trust row */}
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["TNPSC OTR Specs", "JPG Output", "Mobile Friendly", "No Data Stored"].map((t) => (
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
                        {/* ── Tab Selector ── */}
                        <div className="mx-auto max-w-3xl">
                            <div className="grid grid-cols-3 gap-2 mb-6">
                                {tabs.map(({ key, label, icon: Icon, desc }) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        className={`rounded-xl border-2 p-3 text-center transition-all duration-200 ${activeTab === key
                                            ? "border-amber-500 bg-amber-500/10 text-amber-700 dark:text-amber-400 shadow-md"
                                            : "border-border text-muted-foreground hover:border-amber-400/50 hover:bg-amber-500/5"
                                            }`}
                                    >
                                        <Icon className={`h-5 w-5 mx-auto mb-1 ${activeTab === key ? "text-amber-500" : ""}`} />
                                        <div className="text-xs font-semibold leading-tight">{label}</div>
                                        <div className="text-[11px] opacity-70 mt-0.5">{desc}</div>
                                    </button>
                                ))}
                            </div>

                            {/* ── Tool Panel ── */}
                            {activeTab === "photo" && (
                                <SignatureResizer
                                    title="TNPSC Photo Compressor — OTR Photo Resize"
                                    defaultTargetKB={35}
                                    minKB={20}
                                    maxKB={50}
                                    maxWidth={200}
                                    maxHeight={230}
                                    defaultPreset="tnpsc-photo"
                                />
                            )}
                            {activeTab === "signature" && (
                                <SignatureResizer
                                    title="TNPSC Signature Compressor — OTR Signature Resize"
                                    defaultTargetKB={20}
                                    minKB={10}
                                    maxKB={30}
                                    maxWidth={140}
                                    maxHeight={60}
                                    defaultPreset="tnpsc-signature"
                                />
                            )}
                            {activeTab === "background" && <BackgroundChanger />}

                            <AdContainer type="display" />
                        </div>

                        {/* ── Requirements Table ── */}
                        <div className="mx-auto mt-12 max-w-4xl">
                            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <FileImage className="h-5 w-5 text-amber-500" />
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                        TNPSC OTR Photo & Signature Requirements
                                    </h2>
                                </div>
                                <p className="text-sm text-muted-foreground mb-5">
                                    As per the official <strong>TNPSC OTR portal</strong> — verify before uploading.
                                </p>

                                {/* High-quality infographic */}
                                <div className="mb-6 rounded-xl overflow-hidden border border-border">
                                    <img
                                        src="/assest/tnpsc-photo-requirements.png"
                                        alt="TNPSC OTR photo and signature size requirements infographic showing 200x230px photo and 140x60px signature specifications"
                                        className="w-full object-cover"
                                        loading="lazy"
                                        width={1200}
                                        height={630}
                                    />
                                </div>

                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                                                <th className="p-3 text-left rounded-tl-xl">Document</th>
                                                <th className="p-3 text-left">Dimension (px)</th>
                                                <th className="p-3 text-left">File Size</th>
                                                <th className="p-3 text-left">Format</th>
                                                <th className="p-3 text-left rounded-tr-xl">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border">
                                            {requirements.map((row) => (
                                                <tr key={row.doc} className="hover:bg-muted/40 transition-colors">
                                                    <td className="p-3 font-semibold text-foreground">{row.doc}</td>
                                                    <td className="p-3 text-muted-foreground font-mono text-xs">{row.dimension}</td>
                                                    <td className="p-3">
                                                        <span className="rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-semibold px-2 py-0.5">
                                                            {row.size}
                                                        </span>
                                                    </td>
                                                    <td className="p-3 text-muted-foreground">{row.format}</td>
                                                    <td className="p-3">
                                                        <button
                                                            onClick={() => { setActiveTab(row.tab); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                                                            className="text-xs text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 font-medium"
                                                        >
                                                            Use Tool <ArrowRight className="h-3 w-3" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                                    <Shield className="h-3.5 w-3.5" />
                                    Source: Official TNPSC OTR portal at tnpscregistration.in — updated March 2026
                                </p>
                            </div>
                        </div>

                        <AdContainer type="inarticle" className="mx-auto max-w-4xl" />

                        {/* ── Deep Dive Content ── */}
                        <div className="mx-auto mt-6 max-w-4xl space-y-10">

                            {/* Section 1: What is TNPSC OTR */}
                            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
                                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                                    What is TNPSC OTR and Why Does Photo Quality Matter?
                                </h2>
                                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                                    <p>
                                        If you've applied for any Tamil Nadu government job — Group 1, Group 2, Group 4, TNPSC Combined Engineering Services, or any other notification — you've had to go through <strong className="text-foreground">TNPSC OTR (One Time Registration)</strong>. It's the unified portal where you maintain your permanent profile: once registered, you use that profile across all future TNPSC applications.
                                    </p>
                                    <p>
                                        That's exactly why your photo matters so much. It isn't a one-time upload for one exam — it represents <em>you</em> across every application you'll ever make through TNPSC. If your photo is blurry, has the wrong background, or is rejected by the portal's automated validator, it holds up your entire registration.
                                    </p>
                                    <p>
                                        The TNPSC OTR portal runs a fairly strict validator: it checks file size (must be between 20 KB and 50 KB), dimensions (200×230 pixels), format (only JPG), and background colour. Most common photo-editing apps don't give you the combination of exact size + correct dimensions + white background in one step. That's the gap this tool fills.
                                    </p>
                                </div>
                            </div>

                            {/* Section 2: OTR Steps with image */}
                            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
                                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                                    Step-by-Step: How to Prepare Your TNPSC OTR Photo
                                </h2>
                                <div className="mb-5 rounded-xl overflow-hidden border border-border">
                                    <img
                                        src="/assest/tnpsc-otr-steps.png"
                                        alt="Step-by-step guide for TNPSC OTR photo upload process: click photo, compress online, upload to portal, complete registration"
                                        className="w-full object-cover"
                                        loading="lazy"
                                        width={1200}
                                        height={500}
                                    />
                                </div>
                                <ol className="space-y-4 text-sm sm:text-base text-muted-foreground">
                                    {[
                                        { num: 1, title: "Click a clear passport-size photo", body: "Use natural light near a window if possible. Wear the same clothes you'll wear to the exam. Face the camera straight — no angling, no shadows on the face. The background should ideally already be white, but the Background Changer tab above can fix that." },
                                        { num: 2, title: "Use the Photo Compressor tab above", body: "Upload your photo. The 'TNPSC Photo (OTR)' preset auto-fills target size (35 KB), dimensions (200×230 px), and format (JPG). Click Resize Now. Done in about two seconds." },
                                        { num: 3, title: "Download and verify", body: "Right-click your downloaded file → Properties → check the size is between 20–50 KB. If you're on mobile, tap the file → Details. The file name will be tnpsc-photo-compressed.jpg." },
                                        { num: 4, title: "Upload to TNPSC OTR portal", body: "Log in to tnpscregistration.in → Photo & Signature → upload your compressed photo. You should see a green tick indicating successful validation." },
                                    ].map(({ num, title, body }) => (
                                        <li key={num} className="flex gap-4">
                                            <div className="flex-shrink-0 h-7 w-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">{num}</div>
                                            <div>
                                                <p className="font-semibold text-foreground mb-1">{title}</p>
                                                <p>{body}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* Section 3: Common Rejections */}
                            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
                                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                                    6 Reasons TNPSC OTR Rejects Your Photo (And How to Fix Each)
                                </h2>
                                <p className="text-sm text-muted-foreground mb-5">
                                    These are the exact error messages and validation failures reported by aspirants on TNPSC OTR — and what you should do.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {commonRejections.map(({ icon: Icon, color, title, desc }) => (
                                        <div key={title} className="flex gap-3 rounded-xl border border-border bg-muted/20 p-4">
                                            <Icon className={`h-5 w-5 ${color} shrink-0 mt-0.5`} />
                                            <div>
                                                <p className="text-sm font-semibold text-foreground">{title}</p>
                                                <p className="text-xs text-muted-foreground mt-1">{desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-5 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 flex gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                    <p className="text-sm text-green-700 dark:text-green-300">
                                        <strong>Quick fix:</strong> Use the three tabs above — Photo Compressor (size + dimensions), Background Changer (white background), Signature Compressor (signature requirements). Together they address all six rejection reasons.
                                    </p>
                                </div>
                            </div>

                            {/* Section 4: Why tool is unique */}
                            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
                                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                                    Why This TNPSC Photo Compressor Works Better Than Other Tools
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                    {[
                                        { icon: Zap, title: "Exact KB targeting", desc: "A binary search algorithm iterates compression levels until your photo hits exactly 20–50 KB — not 'roughly 30 KB'." },
                                        { icon: Shield, title: "No server upload", desc: "Your TNPSC photo never leaves your device. All processing uses the browser Canvas API. Your data is private." },
                                        { icon: Camera, title: "TNPSC-specific presets", desc: "Photo (200×230px), Signature (140×60px), and Thumb Impression presets — built from the official portal specs." },
                                        { icon: Layers, title: "Background fixer built-in", desc: "Unlike other tools, the white background changer is on the same page — no separate app or site to visit." },
                                        { icon: FileImage, title: "JPG output guaranteed", desc: "The portal only accepts JPG. Even if you upload a PNG or WEBP, the output is always a clean JPG file." },
                                        { icon: CheckCircle, title: "Free, forever", desc: "No subscriptions, no watermarks, no account creation. Works on mobile and desktop, any browser." },
                                    ].map(({ icon: Icon, title, desc }) => (
                                        <div key={title} className="flex gap-3 rounded-xl border border-border bg-muted/20 p-4">
                                            <Icon className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-foreground">{title}</p>
                                                <p className="text-muted-foreground mt-0.5">{desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Internal link content paragraph */}
                            <div className="rounded-2xl border border-border bg-muted/30 p-6 sm:p-8">
                                <h2 className="text-lg font-bold text-foreground mb-3">Related Tools You Might Need</h2>
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                    Preparing for TNPSC Group exams often means dealing with multiple document requirements. If you need to compress a photo to a very small size like{" "}
                                    <Link to="/compress-image-to-20kb-online" className="text-primary hover:underline font-medium">20 KB</Link>{" "}
                                    for other portals, or if you want to{" "}
                                    <Link to="/exam-photo-checker" className="text-primary hover:underline font-medium">validate your photo</Link>{" "}
                                    against exam portal requirements before uploading, or need to{" "}
                                    <Link to="/signature-resize" className="text-primary hover:underline font-medium">resize a signature</Link>{" "}
                                    for a different exam — each of those has a dedicated tool on this site.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {relatedTools.map(({ to, label, desc, icon: Icon }) => (
                                        <Link
                                            key={to}
                                            to={to}
                                            className="flex flex-col items-center text-center rounded-xl border border-border bg-card p-3 hover:border-amber-400 hover:bg-amber-500/5 transition-all duration-200 group"
                                        >
                                            <Icon className="h-6 w-6 text-amber-500 mb-2 group-hover:scale-110 transition-transform" />
                                            <p className="text-xs font-semibold text-foreground">{label}</p>
                                            <p className="text-[11px] text-muted-foreground mt-0.5">{desc}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Author EEAT Block */}
                        <div className="mx-auto mt-8 max-w-4xl">
                            <div className="rounded-2xl border border-border bg-card/60 p-5 flex items-start gap-4 shadow-sm">
                                <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 ring-2 ring-amber-200 dark:ring-amber-800">
                                    <span className="text-base font-bold text-amber-600">SR</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">Written by SignatureResize Editorial Team</p>
                                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                        Our team compiled TNPSC photo specifications directly from the official{" "}
                                        <strong>TNPSC OTR portal (tnpscregistration.in)</strong> and cross-verified with notifications published in 2025–2026. We update this guide whenever TNPSC revises its upload guidelines.{" "}
                                        <Link to="/about-us" className="text-primary hover:underline">About us →</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <AdContainer type="infeed" className="mx-auto max-w-4xl" />

                        <div className="mx-auto mt-8 max-w-3xl">
                            <ProcessingFeatures />
                        </div>
                        <div className="mx-auto mt-8 max-w-4xl">
                            <TrustBadges />
                        </div>
                    </div>
                </main>

                <FAQSection faqs={faqs} />
                <AdContainer type="multiplex" className="container mx-auto px-4 mb-6" />
                <Footer />
            </div>
        </>
    );
};

export default TNPSCPhotoCompressor;

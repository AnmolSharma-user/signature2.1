import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdContainer from "@/components/AdContainer";
import FAQSection from "@/components/FAQSection";
import SignatureResizer from "@/components/SignatureResizer";
import { Camera, Pen, CheckCircle, XCircle, AlertTriangle, Shield, Zap, FileImage, Info } from "lucide-react";

const DelhiPolicePhotoSignatureResize = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature" | "thumb">("photo");

    const tabs = [
        { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "20–50 KB | 100×120 px" },
        { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "10–20 KB | 140×60 px" },
        { key: "thumb" as const, label: "Thumb Impression", icon: FileImage, desc: "10–20 KB | 140×60 px" },
    ];

    const requirements = [
        { doc: "Photograph", dimension: "100 × 120 px", size: "20 KB – 50 KB", format: "JPG", bg: "White", notes: "Taken within last 6 months" },
        { doc: "Signature", dimension: "140 × 60 px", size: "10 KB – 20 KB", format: "JPG", bg: "White", notes: "Cursive in running hand" },
        { doc: "Left Thumb (Male)", dimension: "140 × 60 px", size: "10 KB – 20 KB", format: "JPG", bg: "White", notes: "Clear impression" },
        { doc: "Right Thumb (Female)", dimension: "140 × 60 px", size: "10 KB – 20 KB", format: "JPG", bg: "White", notes: "Clear impression" },
    ];

    const faqs = [
        {
            question: "What is the Delhi Police Constable 2026 photo size requirement?",
            answer: "Delhi Police Constable 2026 requires a passport-size photograph in JPG format, dimensions 100×120 pixels, and file size between 20 KB and 50 KB. The photo must have a white background and should be taken within the last 6 months."
        },
        {
            question: "What is the Delhi Police Constable signature size?",
            answer: "The Delhi Police Constable 2026 signature must be in JPG format, 140×60 pixels, and between 10 KB and 20 KB in size. It must be signed in cursive/running hand using black or blue ink on white paper. Block letters will result in rejection."
        },
        {
            question: "Does Delhi Police require thumb impression in the application form?",
            answer: "Yes. Delhi Police Constable requires a left thumb impression for male candidates and right thumb impression for female candidates. It must be 140×60 pixels, JPG format, 10–20 KB. Use clean blue or black ink stamp pad."
        },
        {
            question: "Can I use a mobile phone camera for the Delhi Police photo?",
            answer: "Yes, you can use a smartphone camera. Ensure the background is pure white (use white A4 paper or wall), lighting is even (no shadows), and the face occupies 75–80% of the frame. Then use this tool to resize to 100×120 px at 20–50 KB."
        },
        {
            question: "Is this tool free for Delhi Police photo resize?",
            answer: "100% free. No account needed. All processing happens inside your browser — your photo and signature are never sent to any server."
        },
        {
            question: "Why is my Delhi Police photo getting rejected?",
            answer: "Common rejection reasons: photo above 50 KB or below 20 KB, wrong format (PNG instead of JPG), dimensions not 100×120 px, coloured background (must be white), sunglasses or headgear in photo, or photo older than 6 months."
        },
    ];

    const howToSteps = [
        { text: "Select 'Photo', 'Signature', or 'Thumb Impression' tab above" },
        { text: "Click 'Upload Image' and select your JPG or PNG file" },
        { text: "The Delhi Police preset is pre-applied with the exact specs" },
        { text: "Click 'Resize Now' to process the image" },
        { text: "Download the resized JPG and upload to the SSC Delhi Police portal" },
    ];

    const relatedTools = [
        { to: "/ssc-cgl-photo-signature-resize", label: "SSC CGL Photo & Sig", icon: FileImage },
        { to: "/rpf-constable-si-photo-signature-guide-2026", label: "RPF Constable Guide", icon: Camera },
        { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle },
        { to: "/compress-image-to-20kb-online", label: "Compress to 20KB", icon: Zap },
    ];

    return (
        <>
            <SEOHead
                title="Delhi Police Constable 2026 Photo & Signature Resize Online Free"
                description="Free Delhi Police Constable 2026 photo resize: compress photo to 20–50 KB (100×120 px), signature to 10–20 KB (140×60 px), and thumb impression to 10–20 KB. Meets SSC/DSSSB portal requirements. Instant, secure, browser-only."
                canonicalUrl="https://signatureresize.in/delhi-police-photo-signature-resize"
                keywords="delhi police constable 2026 photo resize, delhi police signature size, delhi police photo size kb, delhi police constable photo requirement, delhi police thumb impression size, delhi police constable application photo resize, delhi police 2026 signature kb"
                ogType="article"
                modifiedTime="2026-06-13T12:00:00+05:30"
            />
            <SEOSchema type="HowTo" howToName="How to Resize Photo for Delhi Police Constable 2026" howToSteps={howToSteps} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "Delhi Police Photo Resize", url: "https://signatureresize.in/delhi-police-photo-signature-resize" },
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "WebApplication",
                    name: "Delhi Police Constable 2026 Photo & Signature Resize",
                    url: "https://signatureresize.in/delhi-police-photo-signature-resize",
                    description: "Free online tool to resize Delhi Police Constable 2026 photo to 20–50 KB (100×120 px), signature to 10–20 KB (140×60 px) and thumb impression. Meets SSC portal requirements.",
                    applicationCategory: "UtilityApplication", operatingSystem: "Any",
                    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
                    dateModified: "2026-06-13",
                })
            }} />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-700/10 via-primary/5 to-background py-8 sm:py-14">
                    <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
                    <div className="container mx-auto px-4 relative">
                        <Breadcrumbs items={[{ name: "Delhi Police Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            {/* Urgency badge */}
                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 border border-blue-500/30 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4">
                                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                                Delhi Police Constable 2026 — Applications Open
                            </div>
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                Delhi Police Constable Photo &amp; Signature{" "}
                                <span className="text-blue-600">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                Compress your <strong>Delhi Police photo to 20–50 KB</strong> (100×120 px),{" "}
                                <strong>signature to 10–20 KB</strong> (140×60 px), and{" "}
                                <strong>thumb impression to 10–20 KB</strong> — all per SSC/DSSSB portal requirements.
                                Browser-only: your image never leaves your device.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["SSC Portal Specs", "JPG Output", "Thumb Impression", "No Data Stored"].map((t) => (
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
                            {/* Tabs */}
                            <div className="grid grid-cols-3 gap-3 mb-6">
                                {tabs.map(({ key, label, icon: Icon, desc }) => (
                                    <button key={key} onClick={() => setActiveTab(key)}
                                        className={`rounded-xl border-2 p-3 sm:p-4 text-center transition-all duration-200 ${activeTab === key ? "border-blue-600 bg-blue-600/10 text-blue-700 dark:text-blue-400 shadow-md" : "border-border text-muted-foreground hover:border-blue-400/50"}`}>
                                        <Icon className={`h-5 w-5 mx-auto mb-1 ${activeTab === key ? "text-blue-600" : ""}`} />
                                        <div className="text-xs font-semibold">{label}</div>
                                        <div className="text-[10px] opacity-70 mt-0.5">{desc}</div>
                                    </button>
                                ))}
                            </div>

                            {activeTab === "photo" && (
                                <SignatureResizer title="Delhi Police Photo Compressor" defaultTargetKB={35} minKB={20} maxKB={50} maxWidth={100} maxHeight={120} defaultPreset="delhi-police-photo" />
                            )}
                            {activeTab === "signature" && (
                                <SignatureResizer title="Delhi Police Signature Compressor" defaultTargetKB={15} minKB={10} maxKB={20} maxWidth={140} maxHeight={60} defaultPreset="delhi-police-signature" />
                            )}
                            {activeTab === "thumb" && (
                                <SignatureResizer title="Delhi Police Thumb Impression Compressor" defaultTargetKB={15} minKB={10} maxKB={20} maxWidth={140} maxHeight={60} defaultPreset="delhi-police-thumb" />
                            )}
                            <AdContainer type="display" />
                        </div>

                        {/* Requirements Table */}
                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-blue-600" /> Delhi Police Constable 2026 — Official Photo &amp; Signature Requirements
                            </h2>
                            <div className="overflow-x-auto rounded-xl border border-border">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-blue-700 to-blue-800 text-white">
                                            <th className="p-3 text-left rounded-tl-xl">Document</th>
                                            <th className="p-3 text-left">Dimension</th>
                                            <th className="p-3 text-left">File Size</th>
                                            <th className="p-3 text-left">Format</th>
                                            <th className="p-3 text-left">Background</th>
                                            <th className="p-3 text-left rounded-tr-xl">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {requirements.map((r) => (
                                            <tr key={r.doc} className="hover:bg-muted/40">
                                                <td className="p-3 font-semibold text-foreground">{r.doc}</td>
                                                <td className="p-3 text-muted-foreground font-mono text-xs">{r.dimension}</td>
                                                <td className="p-3"><span className="rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold px-2 py-0.5">{r.size}</span></td>
                                                <td className="p-3 text-muted-foreground">{r.format}</td>
                                                <td className="p-3 text-muted-foreground">{r.bg}</td>
                                                <td className="p-3 text-xs text-muted-foreground">{r.notes}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                                <Shield className="h-3.5 w-3.5" /> Source: Delhi Police Constable 2026 official notification (SSC Delhi Police portal)
                            </p>
                        </div>

                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />

                        {/* Content Sections */}
                        <div className="mx-auto mt-6 max-w-4xl space-y-8">

                            {/* Rejection Reasons */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-3">Why Delhi Police Application Rejects Photos &amp; Signatures</h2>
                                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                    {[
                                        { icon: XCircle, color: "text-red-500", t: "File size outside 20–50 KB (photo)", d: "The portal hard-rejects any photo below 20 KB or above 50 KB. This tool targets 35 KB by default — safely within range." },
                                        { icon: XCircle, color: "text-red-500", t: "PNG instead of JPG format", d: "Delhi Police only accepts JPG/JPEG. Even if you upload a PNG here, the output is always a clean JPG." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Block letter signature", d: "Delhi Police explicitly requires cursive/running hand. Block capital letters will get your application rejected." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Non-white or gradient background", d: "The photo must have a plain white background. No grey, studio-fade, or coloured backgrounds." },
                                        { icon: XCircle, color: "text-red-500", t: "Old photograph (more than 6 months)", d: "Use a recent passport photo. Old scanned photos or cropped photos from other documents are not accepted." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Thumb impression unclear", d: "Make sure the thumb impression is clear with visible ridges. Re-press if the impression is too light or smudged." },
                                    ].map(({ icon: Icon, color, t, d }) => (
                                        <div key={t} className="flex gap-3 rounded-xl border border-border bg-muted/20 p-4">
                                            <Icon className={`h-5 w-5 ${color} shrink-0 mt-0.5`} />
                                            <div><p className="text-sm font-semibold text-foreground">{t}</p><p className="text-xs text-muted-foreground mt-1">{d}</p></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Step by Step Guide */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-4">Step-by-Step: How to Prepare Delhi Police Photo at Home</h2>
                                <ol className="space-y-4">
                                    {[
                                        { step: "1", title: "Take a photo with white background", detail: "Stand in front of a white wall or tape white A4 paper behind you. Use natural daylight (face a window) or tube light. Avoid flash directly on face." },
                                        { step: "2", title: "Crop tightly to face + shoulders", detail: "Your face should occupy about 70–80% of the photo. Crop out extra background. The photo must be 100×120 pixels when resized." },
                                        { step: "3", title: "Resize using this tool", detail: "Upload your photo above, select 'Photo Compressor' tab. The Delhi Police preset (100×120 px, 20–50 KB) is auto-applied." },
                                        { step: "4", title: "Sign on white paper, photograph it", detail: "Sign with blue/black ink in cursive on plain white paper. Photograph from directly above to avoid perspective distortion." },
                                        { step: "5", title: "Resize signature using this tool", detail: "Switch to 'Signature Compressor' tab, upload your signature image. The tool outputs 140×60 px JPG at 10–20 KB." },
                                        { step: "6", title: "Upload to Delhi Police portal", detail: "Go to the official Delhi Police recruitment portal. Upload photo, signature, and thumb impression in their respective fields." },
                                    ].map(({ step, title, detail }) => (
                                        <li key={step} className="flex gap-4">
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">{step}</span>
                                            <div>
                                                <p className="font-semibold text-foreground text-sm">{title}</p>
                                                <p className="text-xs text-muted-foreground mt-1">{detail}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* Info Box */}
                            <div className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-5">
                                <div className="flex gap-3">
                                    <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                                    <div className="text-sm">
                                        <p className="font-bold text-blue-800 dark:text-blue-300 mb-1">Delhi Police Constable Recruitment 2026</p>
                                        <p className="text-blue-700 dark:text-blue-400 leading-relaxed">
                                            Delhi Police Constable recruitment is conducted by the Delhi Police through SSC (Staff Selection Commission). The application is filed online through the official Delhi Police recruitment portal. Photo, signature, and thumb impression are uploaded during the online registration. The same documents are verified at the time of document verification (DV) stage, so maintain the original signed copy.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Related Tools */}
                            <div className="rounded-2xl border border-border bg-muted/30 p-6">
                                <h2 className="text-lg font-bold text-foreground mb-4">Related Tools &amp; Guides</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {relatedTools.map(({ to, label, icon: Icon }) => (
                                        <Link key={to} to={to} className="flex flex-col items-center text-center rounded-xl border border-border bg-card p-3 hover:border-blue-500 hover:bg-blue-500/5 transition-all group">
                                            <Icon className="h-6 w-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
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

export default DelhiPolicePhotoSignatureResize;

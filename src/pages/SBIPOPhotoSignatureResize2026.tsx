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

const SBIPOPhotoSignatureResize2026 = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");

    const tabs = [
        { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "20–50 KB | 200×230 px" },
        { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "10–20 KB | 140×60 px" },
    ];

    const requirements = [
        { doc: "Photograph", dimension: "200 × 230 px", size: "20 KB – 50 KB", format: "JPG", bg: "White/Light", notes: "Recent passport-size, face 70% of frame" },
        { doc: "Signature", dimension: "140 × 60 px", size: "10 KB – 20 KB", format: "JPG", bg: "White", notes: "Black ink on white paper; cursive only" },
        { doc: "Live Photo", dimension: "Webcam capture", size: "Auto", format: "Auto", bg: "White", notes: "Captured during online registration" },
    ];

    const faqs = [
        {
            question: "What is the SBI PO 2026 photo size requirement?",
            answer: "SBI PO 2026 requires a passport-size photograph in JPG format, dimensions 200×230 pixels, file size between 20 KB and 50 KB. The photo must have a white or light-coloured background, face occupying at least 70% of the frame. Taken within the last 3–6 months."
        },
        {
            question: "What is the SBI PO 2026 signature file size?",
            answer: "SBI PO 2026 signature must be in JPG format, 140×60 pixels, file size between 10 KB and 20 KB. Sign with black ink on plain white paper. Avoid block/capital letters — only cursive running hand is accepted."
        },
        {
            question: "What is the last date to apply for SBI PO 2026?",
            answer: "The SBI PO 2026 online application window is open from June 18, 2026 to July 8, 2026. Apply well before the deadline on the official SBI website (sbi.co.in/careers). Upload your resized photo and signature during registration."
        },
        {
            question: "Does SBI PO 2026 require a live photograph?",
            answer: "Yes, in addition to uploading your photo (20–50 KB JPG), SBI PO 2026 also requires a live photograph captured via webcam or mobile camera during the online registration process. Ensure you have a good internet connection and a white background when capturing the live photo."
        },
        {
            question: "Why is my SBI PO photo being rejected on the portal?",
            answer: "Common rejection reasons: file size above 50 KB or below 20 KB, PNG format (only JPG accepted), non-white or dark background, face less than 70% of the photo area, glasses with glare, or photo older than 6 months. Use this free tool to resize accurately."
        },
        {
            question: "Is this SBI PO photo resize tool free?",
            answer: "Yes, 100% free with no account required. All image processing happens entirely in your browser — your photo and signature never leave your device or get uploaded to any server."
        },
    ];

    const howToSteps = [
        { text: "Select 'Photo' or 'Signature' tab above" },
        { text: "Click 'Upload Image' and select your JPG/PNG file" },
        { text: "The SBI PO 2026 preset (200×230 px / 140×60 px) is auto-applied" },
        { text: "Click 'Resize Now' — output is always JPG" },
        { text: "Download and upload to the SBI PO 2026 application portal at sbi.co.in" },
    ];

    const relatedTools = [
        { to: "/ibps-photo-signature-resize", label: "IBPS Photo & Sig", icon: FileImage },
        { to: "/ssc-cgl-photo-signature-resize", label: "SSC CGL Photo & Sig", icon: Camera },
        { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle },
        { to: "/compress-image-to-20kb-online", label: "Compress to 20KB", icon: Zap },
    ];

    return (
        <>
            <SEOHead
                title="SBI PO 2026 Photo & Signature Resize Online Free — 200×230 px, 20–50 KB"
                description="Free SBI PO 2026 photo resize tool: compress photo to 20–50 KB (200×230 px) and signature to 10–20 KB (140×60 px). Meets SBI official portal requirements. Apply before July 8, 2026. Instant, browser-only, no upload needed."
                canonicalUrl="https://signatureresize.in/sbi-po-2026-photo-signature-resize"
                keywords="sbi po 2026 photo size, sbi po photo resize, sbi po signature size kb, sbi po 2026 application photo, sbi po photo 200x230 pixels, sbi po 2026 signature kb, sbi probationary officer photo resize free"
                ogType="article"
                modifiedTime="2026-07-02T08:00:00+05:30"
            />
            <SEOSchema type="HowTo" howToName="How to Resize Photo for SBI PO 2026" howToSteps={howToSteps} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "SBI PO 2026 Photo Resize", url: "https://signatureresize.in/sbi-po-2026-photo-signature-resize" },
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "WebApplication",
                    name: "SBI PO 2026 Photo & Signature Resize",
                    url: "https://signatureresize.in/sbi-po-2026-photo-signature-resize",
                    description: "Free online tool to resize SBI PO 2026 photo to 20–50 KB (200×230 px) and signature to 10–20 KB (140×60 px). Meets SBI portal requirements.",
                    applicationCategory: "UtilityApplication", operatingSystem: "Any",
                    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
                    dateModified: "2026-07-02",
                })
            }} />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-700/10 via-primary/5 to-background py-8 sm:py-14">
                    <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
                    <div className="container mx-auto px-4 relative">
                        <Breadcrumbs items={[{ name: "SBI PO 2026 Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-red-600/10 border border-red-500/30 px-3 py-1 text-xs font-semibold text-red-600 dark:text-red-400 mb-4">
                                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                                SBI PO 2026 — Apply by July 8, 2026
                            </div>
                            <p className="text-xs text-muted-foreground mb-3">Last updated: <strong>July 2, 2026</strong> · Verified against <a href="https://sbi.co.in/careers" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">SBI official notification</a></p>
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                SBI PO 2026 Photo &amp; Signature{" "}
                                <span className="text-blue-600">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                Compress your <strong>SBI PO photo to 20–50 KB</strong> (200×230 px) and{" "}
                                <strong>signature to 10–20 KB</strong> (140×60 px) — as per SBI official notification.
                                Browser-only: your image never leaves your device.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["SBI Portal Specs", "JPG Output", "Live Photo Ready", "No Data Stored"].map((t) => (
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
                            <div className="grid grid-cols-2 gap-3 mb-6">
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
                                <SignatureResizer title="SBI PO Photo Compressor" defaultTargetKB={35} minKB={20} maxKB={50} maxWidth={200} maxHeight={230} defaultPreset="sbi-po-photo" />
                            )}
                            {activeTab === "signature" && (
                                <SignatureResizer title="SBI PO Signature Compressor" defaultTargetKB={15} minKB={10} maxKB={20} maxWidth={140} maxHeight={60} defaultPreset="sbi-po-signature" />
                            )}
                            <AdContainer type="display" />
                        </div>

                        {/* Requirements Table */}
                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-blue-600" /> SBI PO 2026 — Official Photo &amp; Signature Requirements
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
                                <Shield className="h-3.5 w-3.5" /> Source: SBI PO 2026 official notification (sbi.co.in/careers)
                            </p>
                        </div>

                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />

                        <div className="mx-auto mt-6 max-w-4xl space-y-8">

                            {/* Rejection Reasons */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-3">Why SBI PO Portal Rejects Photos &amp; Signatures</h2>
                                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                    {[
                                        { icon: XCircle, color: "text-red-500", t: "File size outside 20–50 KB (photo)", d: "The SBI portal hard-rejects any photo below 20 KB or above 50 KB. This tool targets 35 KB by default — safely within range." },
                                        { icon: XCircle, color: "text-red-500", t: "PNG instead of JPG format", d: "SBI only accepts JPG/JPEG. Even if you upload a PNG here, the output is always a clean JPG." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Block letter or printed signature", d: "SBI explicitly requires cursive/running hand. Block capital letters or typed signatures will get your application rejected." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Dark or coloured background", d: "The photo must have a plain white or light-coloured background. Studio gradients, grey, or colour backgrounds are rejected." },
                                        { icon: XCircle, color: "text-red-500", t: "Face less than 70% of photo area", d: "SBI requires your face to occupy at least 70% of the photograph. Crop tightly to face + shoulders only." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Signature file above 20 KB", d: "Signature must be 10–20 KB. Above 20 KB and the portal rejects it with an error during upload." },
                                    ].map(({ icon: Icon, color, t, d }) => (
                                        <div key={t} className="flex gap-3 rounded-xl border border-border bg-muted/20 p-4">
                                            <Icon className={`h-5 w-5 ${color} shrink-0 mt-0.5`} />
                                            <div><p className="text-sm font-semibold text-foreground">{t}</p><p className="text-xs text-muted-foreground mt-1">{d}</p></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Step by Step */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-4">Step-by-Step: How to Prepare SBI PO Photo &amp; Signature</h2>
                                <ol className="space-y-4">
                                    {[
                                        { step: "1", title: "Take a fresh passport photo", detail: "Use a white or very light background. Ensure your face covers 70% of the frame. Use natural or tube light. Avoid flash on face." },
                                        { step: "2", title: "Upload to this tool — Photo tab", detail: "Select the Photo Compressor tab, upload your image. The SBI PO preset (200×230 px, 20–50 KB) is pre-applied. Click Resize Now." },
                                        { step: "3", title: "Sign on plain white paper", detail: "Use black ink pen. Sign in cursive running hand — not block letters. Sign on a clean unlined white sheet." },
                                        { step: "4", title: "Photograph or scan your signature", detail: "Click a photo of your signature from directly above with good lighting. Crop to show only the signature with white margin." },
                                        { step: "5", title: "Upload to this tool — Signature tab", detail: "Switch to Signature Compressor tab, upload your signature. Output will be 140×60 px JPG at 10–20 KB." },
                                        { step: "6", title: "Apply at sbi.co.in/careers before July 8", detail: "Open the SBI PO 2026 application, upload your resized photo and signature in the respective fields. Also complete the live photo capture step." },
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
                                        <p className="font-bold text-blue-800 dark:text-blue-300 mb-1">SBI PO 2026 — Key Dates</p>
                                        <p className="text-blue-700 dark:text-blue-400 leading-relaxed">
                                            Application Open: June 18, 2026 | <strong>Last Date: July 8, 2026</strong> | Exam: Phase I (Prelims) expected August–September 2026.
                                            SBI PO (Probationary Officer) is one of India's most competitive banking exams with over 6 lakh applicants annually. Apply at <strong>sbi.co.in/careers</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Deep Content: Eligibility + Exam Pattern + Checklist */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-6">
                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-3">SBI PO 2026 — Eligibility &amp; Key Facts</h2>
                                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                        {[
                                            { label: "Conducting Body", value: "State Bank of India (SBI)" },
                                            { label: "Post", value: "Probationary Officer (JMG Scale-I)" },
                                            { label: "Age Limit", value: "21–30 years (relaxation for SC/ST/OBC/PWD)" },
                                            { label: "Education", value: "Any graduate degree from a recognised university" },
                                            { label: "Application Window", value: "June 18, 2026 – July 8, 2026" },
                                            { label: "Official Portal", value: "sbi.co.in/careers" },
                                        ].map(({ label, value }) => (
                                            <div key={label} className="rounded-lg border border-border bg-muted/30 p-3">
                                                <p className="text-xs text-muted-foreground">{label}</p>
                                                <p className="font-semibold text-foreground text-sm mt-0.5">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-3">SBI PO 2026 Exam Pattern — Phase I (Prelims)</h2>
                                    <div className="overflow-x-auto rounded-xl border border-border">
                                        <table className="w-full text-sm border-collapse">
                                            <thead>
                                                <tr className="bg-gradient-to-r from-blue-700 to-blue-800 text-white">
                                                    <th className="p-3 text-left">Section</th>
                                                    <th className="p-3 text-left">Questions</th>
                                                    <th className="p-3 text-left">Marks</th>
                                                    <th className="p-3 text-left">Time</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border">
                                                {[
                                                    { s: "English Language", q: "30", m: "30", t: "20 min" },
                                                    { s: "Quantitative Aptitude", q: "35", m: "35", t: "20 min" },
                                                    { s: "Reasoning Ability", q: "35", m: "35", t: "20 min" },
                                                    { s: "Total", q: "100", m: "100", t: "60 min" },
                                                ].map(({ s, q, m, t }) => (
                                                    <tr key={s} className="hover:bg-muted/40">
                                                        <td className="p-3 font-medium text-foreground">{s}</td>
                                                        <td className="p-3 text-muted-foreground">{q}</td>
                                                        <td className="p-3 text-muted-foreground">{m}</td>
                                                        <td className="p-3 text-muted-foreground">{t}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2">Negative marking: 0.25 marks deducted per wrong answer. Phase II (Mains) includes Reasoning, Data Analysis, General Economy &amp; Banking, English, and a Descriptive Paper.</p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-3">Photo Preparation Checklist — Before You Apply</h2>
                                    <ul className="space-y-2 text-sm">
                                        {[
                                            "✅ Photo taken within the last 3–6 months (not old ID photo)",
                                            "✅ Plain white or off-white background — no patterns or colours",
                                            "✅ Face covers at least 70% of the frame — no full-body shots",
                                            "✅ No spectacles, caps, or head coverings (except for religious reasons)",
                                            "✅ Neutral expression, both ears visible",
                                            "✅ File in JPG/JPEG format — NOT PNG, HEIC, or WEBP",
                                            "✅ File size between 20 KB and 50 KB (use this tool to ensure accuracy)",
                                            "✅ Dimensions exactly 200×230 pixels (this tool forces exact dimensions)",
                                            "✅ Signature in black ink on plain white unlined paper",
                                            "✅ Cursive running hand — no block capitals or printed letters",
                                            "✅ Signature size: 10–20 KB, 140×60 px JPG",
                                            "✅ Keep a stable internet connection ready for live photo capture on the portal",
                                        ].map((item) => (
                                            <li key={item} className="flex gap-2 items-start">
                                                <span className="text-foreground leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-4">
                                    <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-1">🔒 Privacy — Your Images Never Leave Your Device</p>
                                    <p className="text-xs text-green-700 dark:text-green-400 leading-relaxed">
                                        This tool processes your photo and signature 100% in your browser using JavaScript canvas API.
                                        No image data is uploaded to any server, stored, or transmitted anywhere.
                                        You can verify this by turning off your internet after the page loads — the tool still works.
                                    </p>
                                </div>
                            </div>
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

export default SBIPOPhotoSignatureResize2026;

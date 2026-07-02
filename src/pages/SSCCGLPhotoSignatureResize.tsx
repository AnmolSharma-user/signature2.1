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
import { Camera, Pen, CheckCircle, XCircle, AlertTriangle, Shield, Zap, FileImage, ArrowRight } from "lucide-react";

const SSCCGLPhotoSignatureResize = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");

    const tabs = [
        { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "20–50 KB | 100×120 px" },
        { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "10–20 KB | 140×60 px" },
    ];

    const requirements = [
        { doc: "Photo", dimension: "100 × 120 px", size: "20 KB – 50 KB", format: "JPG", bg: "White" },
        { doc: "Signature", dimension: "140 × 60 px", size: "10 KB – 20 KB", format: "JPG", bg: "White" },
    ];

    const faqs = [
        { question: "What is the SSC CGL 2026 photo size in KB?", answer: "For SSC CGL 2026, the photo must be in JPG format, dimensions 100×120 pixels, and file size between 20 KB and 50 KB. Background must be white. Source: SSC CGL 2026 official notification, May 21, 2026." },
        { question: "What is the SSC CGL 2026 signature size requirement?", answer: "As per the SSC CGL 2026 official notification (released May 21, 2026), the signature must be between 10 KB and 20 KB in JPG format, dimensions 140×60 pixels, on a white background with black ink. Previous guides showing 1–12 KB are outdated." },
        { question: "Can I use the same tool for SSC CHSL 2026?", answer: "Yes. SSC CHSL 2026 has the same photo and signature upload specifications as SSC CGL — 20–50 KB photo and 10–20 KB signature. This tool works for both." },
        { question: "Why is my SSC signature getting rejected on the portal?", answer: "The most common cause in 2026: using the old 1–12 KB range. SSC updated to 10–20 KB. Other causes: wrong format (PNG instead of JPG), block letters instead of cursive, or grey background. Use this tool with the SSC CGL preset — it outputs 15 KB JPG automatically." },
        { question: "Is this tool free for SSC CGL photo and signature resize?", answer: "Yes, 100% free. No account needed. All processing happens in your browser — your photo and signature are never uploaded to any server." },
    ];

    const howToSteps = [
        { text: "Select 'Photo Compressor' or 'Signature Compressor' tab" },
        { text: "Upload your JPG or PNG image" },
        { text: "The SSC CGL preset is pre-selected with correct specs" },
        { text: "Click Resize Now and download your JPG output" },
        { text: "Upload the resized image to the SSC OTRP portal" },
    ];

    const relatedTools = [
        { to: "/ssc-mts-signature-resize", label: "SSC MTS Signature", icon: Pen },
        { to: "/ssc-gd-photo-signature-resize", label: "SSC GD Photo & Sig", icon: FileImage },
        { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle },
        { to: "/compress-image-to-20kb-online", label: "Compress to 20KB", icon: Zap },
    ];

    return (
        <>
            <SEOHead
                title="SSC CGL 2026 Photo & Signature Resize Online Free | SSC CHSL Photo Compressor"
                description="Free SSC CGL 2026 photo resize: compress photo to 20–50 KB (100×120 px) and signature to 10–20 KB (140×60 px) per official May 2026 notification. Works for SSC CHSL, SSC GD. Instant, secure, browser-only."
                canonicalUrl="https://signatureresize.in/ssc-cgl-photo-signature-resize"
                keywords="ssc cgl 2026 photo resize, ssc cgl signature resize 2026, ssc cgl photo compressor, ssc chsl photo resize, ssc cgl photo size kb 2026, ssc signature resize online, ssc cgl 2026 signature 10-20kb, ssc otrp photo upload"
            />
            <SEOSchema type="HowTo" howToName="How to Resize Photo for SSC CGL Online" howToSteps={howToSteps} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "SSC CGL Photo Resize", url: "https://signatureresize.in/ssc-cgl-photo-signature-resize" },
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "WebApplication",
                    name: "SSC CGL 2026 Photo & Signature Resize Online",
                    url: "https://signatureresize.in/ssc-cgl-photo-signature-resize",
                    description: "Free online tool to resize SSC CGL 2026 photo to 20–50 KB and signature to 10–20 KB per official SSC OTRP portal requirements (May 2026 notification).",
                    applicationCategory: "UtilityApplication", operatingSystem: "Any",
                    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
                    dateModified: "2026-06-13",
                })
            }} />

            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 via-primary/5 to-background py-8 sm:py-14">
                    <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
                    <div className="container mx-auto px-4 relative">
                        <Breadcrumbs items={[{ name: "SSC CGL Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                SSC CGL Photo & Signature{" "}
                                <span className="text-blue-500">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                SSC's OTRP (One Time Registration Portal) stores your photo and signature permanently — every future SSC application you file reuses them. That's why getting it right the first time matters more here than on most portals. The photo is <strong>100×120 px</strong>, which is narrower than the banking format (200×230 px), and the signature was updated in May 2026 to <strong>10–20 KB</strong> — older guides showing 1–12 KB are wrong. This tool applies the current specs.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["SSC OTRP Specs", "JPG Output", "Mobile Friendly", "No Data Stored"].map((t) => (
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
                                        className={`rounded-xl border-2 p-4 text-center transition-all duration-200 ${activeTab === key ? "border-blue-500 bg-blue-500/10 text-blue-700 dark:text-blue-400 shadow-md" : "border-border text-muted-foreground hover:border-blue-400/50"}`}>
                                        <Icon className={`h-5 w-5 mx-auto mb-1 ${activeTab === key ? "text-blue-500" : ""}`} />
                                        <div className="text-xs font-semibold">{label}</div>
                                        <div className="text-[11px] opacity-70 mt-0.5">{desc}</div>
                                    </button>
                                ))}
                            </div>

                            {activeTab === "photo" && (
                                <SignatureResizer title="SSC CGL Photo Compressor" defaultTargetKB={35} minKB={20} maxKB={50} maxWidth={100} maxHeight={120} defaultPreset="ssc-cgl-photo" />
                            )}
                            {activeTab === "signature" && (
                                <SignatureResizer title="SSC CGL Signature Compressor" defaultTargetKB={15} minKB={10} maxKB={20} maxWidth={140} maxHeight={60} defaultPreset="ssc-cgl-signature" />
                            )}
                            <AdContainer type="display" />
                        </div>

                        {/* Requirements Table */}
                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-blue-500" /> SSC CGL / CHSL Photo & Signature Requirements 2026
                            </h2>
                            <div className="overflow-x-auto rounded-xl border border-border">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                                            <th className="p-3 text-left rounded-tl-xl">Document</th>
                                            <th className="p-3 text-left">Dimension</th>
                                            <th className="p-3 text-left">File Size</th>
                                            <th className="p-3 text-left">Format</th>
                                            <th className="p-3 text-left rounded-tr-xl">Background</th>
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
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                                <Shield className="h-3.5 w-3.5" /> Source: SSC OTRP official portal — updated 2026
                            </p>
                        </div>

                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />

                        {/* Content */}
                        <div className="mx-auto mt-6 max-w-4xl space-y-8">
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-3">Why Does SSC CGL Reject Photos & Signatures?</h2>
                                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                    {[
                                        { icon: XCircle, color: "text-red-500", t: "Signature outside 10–20 KB", d: "The SSC OTRP portal hard-rejects any signature below 10 KB or above 20 KB. This tool targets 15 KB by default — safely within range." },
                                        { icon: XCircle, color: "text-red-500", t: "PNG instead of JPG", d: "SSC only accepts JPG/JPEG. Even if you upload a PNG here, the output is always a clean JPG." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Wrong dimensions", d: "Photo must be 100×120 pixels. The ssc-cgl-photo preset auto-enforces this." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Non-white background", d: "SSC requires a plain white background. Use our TNPSC Background Changer for transparent/coloured backgrounds." },
                                    ].map(({ icon: Icon, color, t, d }) => (
                                        <div key={t} className="flex gap-3 rounded-xl border border-border bg-muted/20 p-4">
                                            <Icon className={`h-5 w-5 ${color} shrink-0 mt-0.5`} />
                                            <div><p className="text-sm font-semibold text-foreground">{t}</p><p className="text-xs text-muted-foreground mt-1">{d}</p></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-3">SSC CGL vs CHSL vs GD — Same Requirements?</h2>
                                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <p><strong className="text-foreground">SSC CGL 2026, SSC CHSL 2026:</strong> Identical specs per the May 2026 notification — 20–50 KB photo, 10–20 KB signature (140×60 px). Use this page for both.</p>
                                    <p><strong className="text-foreground">SSC GD Constable:</strong> Slightly different — 4–40 KB photo (160×200 px). Use the dedicated <Link to="/ssc-gd-photo-signature-resize" className="text-primary hover:underline">SSC GD resize tool</Link>.</p>
                                    <p><strong className="text-foreground">SSC MTS:</strong> Same signature spec as CGL/CHSL (10–20 KB). Use <Link to="/ssc-mts-signature-resize" className="text-primary hover:underline">SSC MTS signature resize</Link>.</p>
                                    <p>All SSC exams are processed through the unified <strong className="text-foreground">SSC OTRP (One Time Registration Portal)</strong>. Photo and signature uploaded here are used across all SSC applications. <strong className="text-foreground">SSC CGL 2026-27 correction window active — check ssc.gov.in for latest dates.</strong></p>
                                </div>
                            </div>

                            {/* Deep Content: Exam Pattern + Checklist + Key Details */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-6">
                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-1">SSC CGL 2026-27 — Key Details</h2>
                                    <p className="text-xs text-muted-foreground mb-4">Last updated: <strong>July 2, 2026</strong> · Source: <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">ssc.gov.in</a></p>
                                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                        {[
                                            { label: "Conducting Body", value: "Staff Selection Commission (SSC)" },
                                            { label: "Full Form", value: "Combined Graduate Level Examination" },
                                            { label: "Qualification", value: "Any graduate degree from a recognised university" },
                                            { label: "Application Portal", value: "ssc.gov.in (OTRP — One Time Registration)" },
                                            { label: "Photo Size (OTRP)", value: "100×120 px, 20–50 KB, JPG, white background" },
                                            { label: "Signature Size (OTRP)", value: "140×60 px, 10–20 KB, JPG, black ink on white" },
                                        ].map(({ label, value }) => (
                                            <div key={label} className="rounded-lg border border-border bg-muted/30 p-3">
                                                <p className="text-xs text-muted-foreground">{label}</p>
                                                <p className="font-semibold text-foreground text-sm mt-0.5">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-3">SSC CGL 2026-27 Exam Pattern — Tier I</h2>
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
                                                    { s: "General Intelligence & Reasoning", q: "25", m: "50", t: "" },
                                                    { s: "General Awareness", q: "25", m: "50", t: "" },
                                                    { s: "Quantitative Aptitude", q: "25", m: "50", t: "" },
                                                    { s: "English Comprehension", q: "25", m: "50", t: "" },
                                                    { s: "Total", q: "100", m: "200", t: "60 min" },
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
                                    <p className="text-xs text-muted-foreground mt-2">Negative marking: 0.50 marks per wrong answer in Tier I. Tier II has sections for Mathematics, Reasoning, English, and Computer Knowledge. PWD candidates get 80 minutes for Tier I.</p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-3">SSC OTRP Photo Upload Checklist</h2>
                                    <p className="text-xs text-muted-foreground mb-3">The SSC One Time Registration Portal (OTRP) is used for ALL SSC exams — CGL, CHSL, MTS, GD, CPO. Your uploaded photo and signature are reused across all SSC applications.</p>
                                    <ul className="space-y-2 text-sm">
                                        {[
                                            "✅ Photo: 100×120 pixels exactly — do NOT use 200×230 px (that is for IBPS/SBI)",
                                            "✅ File size: 20 KB to 50 KB — below 20 KB or above 50 KB will be rejected",
                                            "✅ Format: JPG/JPEG only — PNG files are rejected by SSC OTRP",
                                            "✅ Background: plain white or very light background only",
                                            "✅ Face must occupy 70–80% of the frame — no full-body shots",
                                            "✅ Photo taken within last 3 months — old passport photos may be flagged",
                                            "✅ No spectacles, caps, or head coverings (except religious)",
                                            "✅ Signature: 140×60 px, 10–20 KB, JPG, black ink on white paper",
                                            "✅ Signature must be cursive — block letters are NOT accepted",
                                            "✅ Once uploaded to OTRP, your photo is used for all SSC applications — upload carefully",
                                        ].map((item) => (
                                            <li key={item} className="flex gap-2 items-start">
                                                <span className="text-foreground leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-4">
                                    <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-1">🔒 100% Secure — No Server Upload</p>
                                    <p className="text-xs text-green-700 dark:text-green-400 leading-relaxed">
                                        This SSC CGL photo resize tool processes your images entirely in your browser using the HTML5 Canvas API.
                                        Your photo and signature are never sent to any server. Since SSC OTRP uploads are permanent,
                                        we recommend resizing with this tool, previewing carefully, then uploading to ssc.gov.in.
                                    </p>
                                </div>
                            </div>

                            {/* Related Tools */}
                            <div className="rounded-2xl border border-border bg-muted/30 p-6">
                                <h2 className="text-lg font-bold text-foreground mb-4">Related Tools</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {relatedTools.map(({ to, label, icon: Icon }) => (
                                        <Link key={to} to={to} className="flex flex-col items-center text-center rounded-xl border border-border bg-card p-3 hover:border-blue-400 hover:bg-blue-500/5 transition-all group">
                                            <Icon className="h-6 w-6 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
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

export default SSCCGLPhotoSignatureResize;

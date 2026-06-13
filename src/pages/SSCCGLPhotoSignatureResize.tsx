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
                                Compress your <strong>SSC CGL 2026 photo to 20–50 KB</strong> (100×120 px) and <strong>signature to 10–20 KB</strong> (140×60 px) as per the official SSC OTRP portal requirements (May 2026 notification). Also works for <strong>SSC CHSL, SSC MTS</strong>. Browser-only — your image never leaves your device.
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
                                    <p>All SSC exams are processed through the unified <strong className="text-foreground">SSC OTRP (One Time Registration Portal)</strong>. Photo and signature uploaded here are used across all SSC applications. <strong className="text-foreground">SSC CGL 2026 application closes June 22, 2026.</strong></p>
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

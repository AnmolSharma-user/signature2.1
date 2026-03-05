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
import { Camera, Pen, CheckCircle, Shield, Zap, FileImage } from "lucide-react";

const SSCGDPhotoSignatureResize = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");

    const tabs = [
        { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "4–40 KB | 160×200 px" },
        { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "1–20 KB | 140×60 px" },
    ];

    const faqs = [
        { question: "What is the SSC GD Constable photo size requirement?", answer: "SSC GD Constable requires a JPG photo of 160×200 pixels (4×5 cm), file size between 4 KB and 40 KB, with a plain white background." },
        { question: "What is the SSC GD signature size?", answer: "The SSC GD Constable signature must be in JPG format, 140×60 pixels, file size between 1 KB and 20 KB, on a white background." },
        { question: "Does SSC GD use the same portal as SSC CGL?", answer: "Yes, SSC GD also uses the SSC OTRP (One Time Registration Portal). However, the photo and signature size limits are different from SSC CGL — make sure to use the GD-specific presets in this tool." },
        { question: "Can I use my SSC CGL photo for SSC GD?", answer: "Not directly. SSC CGL photo is 100×120 px at 4–20 KB, while SSC GD requires 160×200 px at 4–40 KB. Use this SSC GD-specific tool to get the correct specs." },
        { question: "Is this tool free for SSC GD photo resize?", answer: "Yes, entirely free. No registration, no upload to server, no watermarks. All processing is done locally in your browser." },
    ];

    const howToSteps = [
        { text: "Click the 'Photo Compressor' or 'Signature Compressor' tab" },
        { text: "Upload your photo or signature image" },
        { text: "SSC GD preset is pre-selected with official specs" },
        { text: "Click Resize Now and download the JPG" },
        { text: "Upload to SSC OTRP portal" },
    ];

    return (
        <>
            <SEOHead
                title="SSC GD Constable Photo & Signature Resize Online Free 2025-26"
                description="Free SSC GD Constable photo resize to 4–40 KB (160×200 px) and signature to 1–20 KB (140×60 px). Instant browser-only tool for SSC GD 2025-26 OTRP portal upload."
                canonicalUrl="https://signatureresize.in/ssc-gd-photo-signature-resize"
                keywords="ssc gd photo resize, ssc gd constable photo size, ssc gd signature resize, ssc gd photo compressor online, ssc gd 2026 photo size kb, ssc gd constable photo upload"
            />
            <SEOSchema type="HowTo" howToName="How to Resize SSC GD Constable Photo Online" howToSteps={howToSteps} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "SSC GD Photo Resize", url: "https://signatureresize.in/ssc-gd-photo-signature-resize" },
            ]} />

            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-orange-600/10 via-primary/5 to-background py-8 sm:py-14">
                    <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />
                    <div className="container mx-auto px-4 relative">
                        <Breadcrumbs items={[{ name: "SSC GD Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                SSC GD Constable Photo & Signature{" "}
                                <span className="text-orange-500">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                Compress <strong>SSC GD Constable photo to 4–40 KB</strong> (160×200 px) and <strong>signature to 1–20 KB</strong> (140×60 px) as per the SSC OTRP portal. Browser-only — instant and private.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["SSC GD Official Specs", "JPG Output", "Mobile Friendly", "No Data Stored"].map((t) => (
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
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {tabs.map(({ key, label, icon: Icon, desc }) => (
                                    <button key={key} onClick={() => setActiveTab(key)}
                                        className={`rounded-xl border-2 p-4 text-center transition-all duration-200 ${activeTab === key ? "border-orange-500 bg-orange-500/10 text-orange-700 dark:text-orange-400 shadow-md" : "border-border text-muted-foreground hover:border-orange-400/50"}`}>
                                        <Icon className={`h-5 w-5 mx-auto mb-1 ${activeTab === key ? "text-orange-500" : ""}`} />
                                        <div className="text-xs font-semibold">{label}</div>
                                        <div className="text-[11px] opacity-70 mt-0.5">{desc}</div>
                                    </button>
                                ))}
                            </div>
                            {activeTab === "photo" && (
                                <SignatureResizer title="SSC GD Constable Photo Compressor" defaultTargetKB={20} minKB={4} maxKB={40} maxWidth={160} maxHeight={200} defaultPreset="ssc-gd-photo" />
                            )}
                            {activeTab === "signature" && (
                                <SignatureResizer title="SSC GD Constable Signature Compressor" defaultTargetKB={10} minKB={1} maxKB={20} maxWidth={140} maxHeight={60} defaultPreset="ssc-gd-signature" />
                            )}
                            <AdContainer type="display" />
                        </div>

                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-orange-500" /> SSC GD Constable Photo & Signature Requirements 2025-26
                            </h2>
                            <div className="overflow-x-auto rounded-xl border border-border">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                                            <th className="p-3 text-left rounded-tl-xl">Document</th>
                                            <th className="p-3 text-left">Dimension</th>
                                            <th className="p-3 text-left">File Size</th>
                                            <th className="p-3 text-left">Format</th>
                                            <th className="p-3 text-left rounded-tr-xl">Background</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {[
                                            { doc: "Photo", dim: "160 × 200 px", size: "4 KB – 40 KB", fmt: "JPG", bg: "White" },
                                            { doc: "Signature", dim: "140 × 60 px", size: "1 KB – 20 KB", fmt: "JPG", bg: "White" },
                                        ].map((r) => (
                                            <tr key={r.doc} className="hover:bg-muted/40">
                                                <td className="p-3 font-semibold text-foreground">{r.doc}</td>
                                                <td className="p-3 text-muted-foreground font-mono text-xs">{r.dim}</td>
                                                <td className="p-3"><span className="rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-semibold px-2 py-0.5">{r.size}</span></td>
                                                <td className="p-3 text-muted-foreground">{r.fmt}</td>
                                                <td className="p-3 text-muted-foreground">{r.bg}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                                <Shield className="h-3.5 w-3.5" /> Source: SSC GD Constable official notification — updated 2026
                            </p>
                        </div>

                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />

                        <div className="mx-auto mt-6 max-w-4xl">
                            <div className="rounded-2xl border border-border bg-muted/30 p-6">
                                <h2 className="text-lg font-bold text-foreground mb-4">Related Tools</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {[
                                        { to: "/ssc-cgl-photo-signature-resize", label: "SSC CGL Photo", icon: Camera },
                                        { to: "/ssc-mts-signature-resize", label: "SSC MTS Signature", icon: Pen },
                                        { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle },
                                        { to: "/compress-image-to-20kb-online", label: "Compress to 20KB", icon: Zap },
                                    ].map(({ to, label, icon: Icon }) => (
                                        <Link key={to} to={to} className="flex flex-col items-center text-center rounded-xl border border-border bg-card p-3 hover:border-orange-400 hover:bg-orange-500/5 transition-all group">
                                            <Icon className="h-6 w-6 text-orange-500 mb-2 group-hover:scale-110 transition-transform" />
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

export default SSCGDPhotoSignatureResize;

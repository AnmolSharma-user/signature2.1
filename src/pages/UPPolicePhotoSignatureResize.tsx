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

const UPPolicePhotoSignatureResize = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");
    const faqs = [
        { question: "What is the UP Police photo size requirement?", answer: "UP Police OTR (One Time Registration) requires a JPG photo of approximately 200×230 pixels, file size between 20 KB and 50 KB, with a white background." },
        { question: "What is the UP Police signature size for OTR?", answer: "UP Police OTR signature must be in JPG format, 140×60 pixels, file size between 10 KB and 30 KB, on a white background." },
        { question: "Does UP Police use an OTR portal like SSC?", answer: "Yes. UP Police Recruitment & Promotion Board (PRPB) uses a One Time Registration (OTR) system. Photo and signature uploaded during OTR are used for all future UP Police applications." },
        { question: "Can I use this tool for UP Police Constable and SI both?", answer: "Yes. Both UP Police Constable (Civil Police) and Sub-Inspector (SI) applications use the same PRPB OTR portal with the same photo and signature specifications." },
    ];
    const howToSteps = [
        { text: "Select Photo or Signature tab" }, { text: "Upload your image" },
        { text: "UP Police preset is pre-configured" }, { text: "Click Resize Now" },
        { text: "Download and upload to UP Police PRPB OTR portal" },
    ];
    return (
        <>
            <SEOHead
                title="UP Police Photo & Signature Resize Online Free 2025-26 | UP Police OTR Photo Compressor"
                description="Free UP Police photo resize to 20–50 KB and signature to 10–30 KB for UP Police OTR portal. Works for UP Police Constable and SI exams. Instant, secure, browser-only."
                canonicalUrl="https://signatureresize.in/up-police-photo-signature-resize"
                keywords="up police photo resize, up police signature resize, up police otr photo compressor, up police photo size kb, up police constable photo upload, up prpb photo resize"
            />
            <SEOSchema type="HowTo" howToName="How to Resize UP Police OTR Photo Online" howToSteps={howToSteps} />
            <SEOSchema type="FAQPage" faqs={faqs} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "UP Police Photo Resize", url: "https://signatureresize.in/up-police-photo-signature-resize" },
            ]} />
            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600/10 via-primary/5 to-background py-8 sm:py-14">
                    <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />
                    <div className="container mx-auto px-4 relative">
                        <Breadcrumbs items={[{ name: "UP Police Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                UP Police Photo & Signature <span className="text-indigo-500">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                Compress your <strong>UP Police photo to 20–50 KB</strong> and <strong>signature to 10–30 KB</strong> for UP Police OTR portal. Works for <strong>UP Police Constable, SI, and all PRPB</strong> recruitments.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["UP PRPB OTR Specs", "JPG Output", "Mobile Friendly", "No Data Stored"].map((t) => (
                                    <span key={t} className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-green-500" /> {t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <main className="py-8 md:py-12">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl">
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {[
                                    { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "20–50 KB | 200×230 px" },
                                    { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "10–30 KB | 140×60 px" },
                                ].map(({ key, label, icon: Icon, desc }) => (
                                    <button key={key} onClick={() => setActiveTab(key)}
                                        className={`rounded-xl border-2 p-4 text-center transition-all ${activeTab === key ? "border-indigo-500 bg-indigo-500/10 shadow-md" : "border-border text-muted-foreground"}`}>
                                        <Icon className={`h-5 w-5 mx-auto mb-1 ${activeTab === key ? "text-indigo-500" : ""}`} />
                                        <div className="text-xs font-semibold">{label}</div>
                                        <div className="text-[11px] opacity-70 mt-0.5">{desc}</div>
                                    </button>
                                ))}
                            </div>
                            {activeTab === "photo" && <SignatureResizer title="UP Police Photo Compressor" defaultTargetKB={35} minKB={20} maxKB={50} maxWidth={200} maxHeight={230} defaultPreset="up-police-photo" />}
                            {activeTab === "signature" && <SignatureResizer title="UP Police Signature Compressor" defaultTargetKB={20} minKB={10} maxKB={30} maxWidth={140} maxHeight={60} defaultPreset="up-police-signature" />}
                            <AdContainer type="display" />
                        </div>
                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-indigo-500" /> UP Police OTR Photo & Signature Requirements
                            </h2>
                            <div className="overflow-x-auto rounded-xl border border-border">
                                <table className="w-full text-sm border-collapse">
                                    <thead><tr className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                                        <th className="p-3 text-left rounded-tl-xl">Document</th><th className="p-3 text-left">Dimension</th>
                                        <th className="p-3 text-left">File Size</th><th className="p-3 text-left">Format</th><th className="p-3 text-left rounded-tr-xl">Background</th>
                                    </tr></thead>
                                    <tbody className="divide-y divide-border">
                                        {[{ doc: "Photo", dim: "200 × 230 px", size: "20 KB – 50 KB", fmt: "JPG", bg: "White" }, { doc: "Signature", dim: "140 × 60 px", size: "10 KB – 30 KB", fmt: "JPG", bg: "White" }].map((r) => (
                                            <tr key={r.doc} className="hover:bg-muted/40">
                                                <td className="p-3 font-semibold text-foreground">{r.doc}</td>
                                                <td className="p-3 text-muted-foreground font-mono text-xs">{r.dim}</td>
                                                <td className="p-3"><span className="rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-semibold px-2 py-0.5">{r.size}</span></td>
                                                <td className="p-3 text-muted-foreground">{r.fmt}</td><td className="p-3 text-muted-foreground">{r.bg}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1"><Shield className="h-3.5 w-3.5" /> Source: UP Police PRPB portal — verify with latest notification</p>
                        </div>
                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />
                        <div className="mx-auto mt-6 max-w-4xl">
                            <div className="rounded-2xl border border-border bg-muted/30 p-6">
                                <h2 className="text-lg font-bold text-foreground mb-4">Related Tools</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {[{ to: "/bpsc-photo-signature-resize", label: "BPSC Photo & Sig", icon: Camera }, { to: "/tnpsc-photo-compressor", label: "TNPSC Photo", icon: FileImage }, { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle }, { to: "/compress-image-to-20kb-online", label: "Compress to 20KB", icon: Zap }].map(({ to, label, icon: Icon }) => (
                                        <Link key={to} to={to} className="flex flex-col items-center text-center rounded-xl border border-border bg-card p-3 hover:border-indigo-400 hover:bg-indigo-500/5 transition-all group">
                                            <Icon className="h-6 w-6 text-indigo-500 mb-2 group-hover:scale-110 transition-transform" />
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
export default UPPolicePhotoSignatureResize;

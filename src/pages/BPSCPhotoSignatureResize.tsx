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

const BPSCPhotoSignatureResize = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");
    const faqs = [
        { question: "What is the BPSC photo size requirement?", answer: "BPSC requires a passport-size photo in JPG format, approximately 200×230 pixels, file size between 10 KB and 50 KB, with a white background." },
        { question: "What is the BPSC signature size?", answer: "The BPSC signature must be in JPG format, 140×60 pixels, file size between 5 KB and 30 KB on a white background." },
        { question: "Can I use this tool for BPSC 70th CCE?", answer: "Yes. This tool is configured with the standard BPSC photo and signature specifications used for the 70th CCE and other BPSC exams. Always verify with the latest official notification." },
        { question: "Is the BPSC portal different from UPSC/SSC?", answer: "Yes. BPSC (Bihar Public Service Commission) uses its own portal at bpsc.bih.nic.in. The photo and signature requirements are similar to other PSCs but with specific size limits." },
    ];
    const howToSteps = [
        { text: "Select Photo or Signature tab" }, { text: "Upload your image" },
        { text: "BPSC preset is pre-selected" }, { text: "Click Resize Now and download" },
        { text: "Upload to BPSC portal" },
    ];
    return (
        <>
            <SEOHead
                title="BPSC Photo & Signature Resize Online Free 2025-26 | BPSC CCE Photo Compressor"
                description="Free BPSC photo resize to 10–50 KB (200×230 px) and signature to 5–30 KB (140×60 px). Instant browser-only tool for BPSC 70th CCE and all BPSC exams."
                canonicalUrl="https://signatureresize.in/bpsc-photo-signature-resize"
                keywords="bpsc photo resize, bpsc signature resize, bpsc photo compressor online, bpsc photo size kb, bpsc 70th cce photo upload, bpsc otr photo resize"
            />
            <SEOSchema type="HowTo" howToName="How to Resize BPSC Photo Online" howToSteps={howToSteps} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "BPSC Photo Resize", url: "https://signatureresize.in/bpsc-photo-signature-resize" },
            ]} />
            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-red-600/10 via-primary/5 to-background py-8 sm:py-14">
                    <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-red-400/10 blur-3xl" />
                    <div className="container mx-auto px-4 relative">
                        <Breadcrumbs items={[{ name: "BPSC Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                BPSC Photo & Signature <span className="text-red-500">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                Compress your <strong>BPSC photo to 10–50 KB</strong> and <strong>signature to 5–30 KB</strong> for BPSC 70th CCE and all Bihar PSC exams. Instant, browser-only, 100% free.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["BPSC Specs", "JPG Output", "Mobile Friendly", "No Data Stored"].map((t) => (
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
                                    { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "10–50 KB | 200×230 px" },
                                    { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "5–30 KB | 140×60 px" },
                                ].map(({ key, label, icon: Icon, desc }) => (
                                    <button key={key} onClick={() => setActiveTab(key)}
                                        className={`rounded-xl border-2 p-4 text-center transition-all duration-200 ${activeTab === key ? "border-red-500 bg-red-500/10 shadow-md" : "border-border text-muted-foreground"}`}>
                                        <Icon className={`h-5 w-5 mx-auto mb-1 ${activeTab === key ? "text-red-500" : ""}`} />
                                        <div className="text-xs font-semibold">{label}</div>
                                        <div className="text-[11px] opacity-70 mt-0.5">{desc}</div>
                                    </button>
                                ))}
                            </div>
                            {activeTab === "photo" && <SignatureResizer title="BPSC Photo Compressor" defaultTargetKB={30} minKB={10} maxKB={50} maxWidth={200} maxHeight={230} defaultPreset="bpsc-photo" />}
                            {activeTab === "signature" && <SignatureResizer title="BPSC Signature Compressor" defaultTargetKB={20} minKB={5} maxKB={30} maxWidth={140} maxHeight={60} defaultPreset="bpsc-signature" />}
                            <AdContainer type="display" />
                        </div>
                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-red-500" /> BPSC Photo & Signature Requirements
                            </h2>
                            <div className="overflow-x-auto rounded-xl border border-border">
                                <table className="w-full text-sm border-collapse">
                                    <thead><tr className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                                        <th className="p-3 text-left rounded-tl-xl">Document</th><th className="p-3 text-left">Dimension</th>
                                        <th className="p-3 text-left">File Size</th><th className="p-3 text-left">Format</th><th className="p-3 text-left rounded-tr-xl">Background</th>
                                    </tr></thead>
                                    <tbody className="divide-y divide-border">
                                        {[{ doc: "Photo", dim: "200 × 230 px", size: "10 KB – 50 KB", fmt: "JPG", bg: "White" }, { doc: "Signature", dim: "140 × 60 px", size: "5 KB – 30 KB", fmt: "JPG", bg: "White" }].map((r) => (
                                            <tr key={r.doc} className="hover:bg-muted/40">
                                                <td className="p-3 font-semibold text-foreground">{r.doc}</td>
                                                <td className="p-3 text-muted-foreground font-mono text-xs">{r.dim}</td>
                                                <td className="p-3"><span className="rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-semibold px-2 py-0.5">{r.size}</span></td>
                                                <td className="p-3 text-muted-foreground">{r.fmt}</td><td className="p-3 text-muted-foreground">{r.bg}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1"><Shield className="h-3.5 w-3.5" /> Source: BPSC official portal — verify with latest notification</p>
                        </div>
                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />
                        <div className="mx-auto mt-6 max-w-4xl">
                            <div className="rounded-2xl border border-border bg-muted/30 p-6">
                                <h2 className="text-lg font-bold text-foreground mb-4">Related Tools</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {[
                                        { to: "/upsc-signature-resize", label: "UPSC Signature", icon: Pen },
                                        { to: "/ssc-cgl-photo-signature-resize", label: "SSC CGL Photo", icon: Camera },
                                        { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle },
                                        { to: "/compress-image-to-20kb-online", label: "Compress to 20KB", icon: Zap },
                                    ].map(({ to, label, icon: Icon }) => (
                                        <Link key={to} to={to} className="flex flex-col items-center text-center rounded-xl border border-border bg-card p-3 hover:border-red-400 hover:bg-red-500/5 transition-all group">
                                            <Icon className="h-6 w-6 text-red-500 mb-2 group-hover:scale-110 transition-transform" />
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
export default BPSCPhotoSignatureResize;

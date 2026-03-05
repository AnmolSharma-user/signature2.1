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

const MPSCPhotoSignatureResize = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");
    const faqs = [
        { question: "What is the MPSC photo size requirement?", answer: "MPSC (Maharashtra Public Service Commission) requires a JPG photo of approximately 236×307 pixels (3.5×4.5 cm), file size between 20 KB and 100 KB, with a white or light background." },
        { question: "What is the MPSC signature size?", answer: "The MPSC signature must be in JPG format, 140×60 pixels, file size between 10 KB and 40 KB, on a white background." },
        { question: "Does this work for MPSC Rajyaseva exam?", answer: "Yes. This tool uses the standard MPSC photo and signature specifications applicable to Rajyaseva, Engineering Services, and other MPSC exams." },
        { question: "Is MPSC photo requirement different from UPSC?", answer: "Yes. MPSC has different dimension (236×307 px) and file size limits (20–100 KB) compared to UPSC. Always use the MPSC-specific preset in this tool." },
    ];
    const howToSteps = [
        { text: "Select Photo or Signature tab" }, { text: "Upload your image" },
        { text: "MPSC preset is pre-configured with official specs" }, { text: "Click Resize Now" },
        { text: "Download and upload to MPSC portal" },
    ];
    return (
        <>
            <SEOHead
                title="MPSC Photo & Signature Resize Online Free 2025-26 | Maharashtra PSC Photo Compressor"
                description="Free MPSC photo resize to 20–100 KB (236×307 px) and signature to 10–40 KB (140×60 px). Works for MPSC Rajyaseva and all Maharashtra PSC exams. Instant and browser-only."
                canonicalUrl="https://signatureresize.in/mpsc-photo-signature-resize"
                keywords="mpsc photo resize, mpsc signature resize, mpsc photo compressor online, mpsc photo size kb, mpsc rajyaseva photo upload, maharashtra psc photo resize"
            />
            <SEOSchema type="HowTo" howToName="How to Resize MPSC Photo Online" howToSteps={howToSteps} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "MPSC Photo Resize", url: "https://signatureresize.in/mpsc-photo-signature-resize" },
            ]} />
            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-purple-600/10 via-primary/5 to-background py-8 sm:py-14">
                    <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />
                    <div className="container mx-auto px-4 relative">
                        <Breadcrumbs items={[{ name: "MPSC Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                MPSC Photo & Signature <span className="text-purple-500">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                Compress <strong>MPSC photo to 20–100 KB</strong> (236×307 px) and <strong>signature to 10–40 KB</strong> for all Maharashtra Public Service Commission exams including Rajyaseva, Engineering Services, and more.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["MPSC Official Specs", "JPG Output", "Mobile Friendly", "No Data Stored"].map((t) => (
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
                                    { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "20–100 KB | 236×307 px" },
                                    { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "10–40 KB | 140×60 px" },
                                ].map(({ key, label, icon: Icon, desc }) => (
                                    <button key={key} onClick={() => setActiveTab(key)}
                                        className={`rounded-xl border-2 p-4 text-center transition-all ${activeTab === key ? "border-purple-500 bg-purple-500/10 shadow-md" : "border-border text-muted-foreground"}`}>
                                        <Icon className={`h-5 w-5 mx-auto mb-1 ${activeTab === key ? "text-purple-500" : ""}`} />
                                        <div className="text-xs font-semibold">{label}</div>
                                        <div className="text-[11px] opacity-70 mt-0.5">{desc}</div>
                                    </button>
                                ))}
                            </div>
                            {activeTab === "photo" && <SignatureResizer title="MPSC Photo Compressor" defaultTargetKB={50} minKB={20} maxKB={100} maxWidth={236} maxHeight={307} defaultPreset="mpsc-photo" />}
                            {activeTab === "signature" && <SignatureResizer title="MPSC Signature Compressor" defaultTargetKB={20} minKB={10} maxKB={40} maxWidth={140} maxHeight={60} defaultPreset="mpsc-signature" />}
                            <AdContainer type="display" />
                        </div>
                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-purple-500" /> MPSC Photo & Signature Requirements
                            </h2>
                            <div className="overflow-x-auto rounded-xl border border-border">
                                <table className="w-full text-sm border-collapse">
                                    <thead><tr className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                                        <th className="p-3 text-left rounded-tl-xl">Document</th><th className="p-3 text-left">Dimension</th><th className="p-3 text-left">File Size</th><th className="p-3 text-left rounded-tr-xl">Format</th>
                                    </tr></thead>
                                    <tbody className="divide-y divide-border">
                                        {[{ doc: "Photo", dim: "236 × 307 px", size: "20 KB – 100 KB", fmt: "JPG" }, { doc: "Signature", dim: "140 × 60 px", size: "10 KB – 40 KB", fmt: "JPG" }].map((r) => (
                                            <tr key={r.doc} className="hover:bg-muted/40">
                                                <td className="p-3 font-semibold text-foreground">{r.doc}</td>
                                                <td className="p-3 text-muted-foreground font-mono text-xs">{r.dim}</td>
                                                <td className="p-3"><span className="rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-semibold px-2 py-0.5">{r.size}</span></td>
                                                <td className="p-3 text-muted-foreground">{r.fmt}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1"><Shield className="h-3.5 w-3.5" /> Source: MPSC official portal — verify with latest notification</p>
                        </div>
                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />
                        <div className="mx-auto mt-6 max-w-4xl">
                            <div className="rounded-2xl border border-border bg-muted/30 p-6">
                                <h2 className="text-lg font-bold text-foreground mb-4">Related Tools</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {[{ to: "/upsc-signature-resize", label: "UPSC Signature", icon: Pen }, { to: "/bpsc-photo-signature-resize", label: "BPSC Photo", icon: Camera }, { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle }, { to: "/compress-image-to-20kb-online", label: "Compress to 20KB", icon: Zap }].map(({ to, label, icon: Icon }) => (
                                        <Link key={to} to={to} className="flex flex-col items-center text-center rounded-xl border border-border bg-card p-3 hover:border-purple-400 hover:bg-purple-500/5 transition-all group">
                                            <Icon className="h-6 w-6 text-purple-500 mb-2 group-hover:scale-110 transition-transform" />
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
export default MPSCPhotoSignatureResize;

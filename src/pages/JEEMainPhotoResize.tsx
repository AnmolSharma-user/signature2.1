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

const JEEMainPhotoResize = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");
    const faqs = [
        { question: "What is the JEE Main photo size requirement?", answer: "JEE Main 2025 requires a JPG photo of dimensions 200×230 pixels, file size between 10 KB and 100 KB, taken in front of a white background. The face must be clearly visible." },
        { question: "What is the JEE Main signature size?", answer: "JEE Main requires a JPG signature of dimensions 230×60 pixels, file size between 10 KB and 100 KB. The signature must be done with a black/blue pen on white paper." },
        { question: "Can I use this for JEE Advanced too?", answer: "JEE Advanced uses different image upload portals, but the dimension and size requirements are similar. Check the official JEE Advanced notification for exact specs before uploading." },
        { question: "Why is the JEE portal rejecting my photo?", answer: "Common reasons: size above 100 KB, wrong dimensions (must be 200×230 px for photo), non-white background, or the face is not clearly visible or too small in the frame." },
    ];
    const howToSteps = [
        { text: "Select Photo or Signature tab" }, { text: "Upload your JPG or PNG image" },
        { text: "JEE Main photo preset is pre-configured" }, { text: "Click Resize Now" },
        { text: "Download and upload to NTA JEE portal" },
    ];
    return (
        <>
            <SEOHead
                title="JEE Main Photo & Signature Resize Online Free 2025 | NTA JEE Photo Compressor"
                description="Free JEE Main photo resize to 10–100 KB (200×230 px) and signature to 10–100 KB (230×60 px). Instant browser-only tool for NTA JEE Main 2025 portal upload."
                canonicalUrl="https://signatureresize.in/jee-main-photo-resize"
                keywords="jee main photo resize, jee main signature resize, jee main photo compressor online, jee main photo size kb 2025, nta jee photo upload, jee main photo dimensions"
            />
            <SEOSchema type="HowTo" howToName="How to Resize JEE Main Photo Online" howToSteps={howToSteps} />
            <SEOSchema type="FAQPage" faqs={faqs} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "JEE Main Photo Resize", url: "https://signatureresize.in/jee-main-photo-resize" },
            ]} />
            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600/10 via-primary/5 to-background py-8 sm:py-14">
                    <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
                    <div className="container mx-auto px-4 relative">
                        <Breadcrumbs items={[{ name: "JEE Main Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                JEE Main Photo & Signature <span className="text-cyan-500">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                Compress your <strong>JEE Main photo to 10–100 KB</strong> (200×230 px) and <strong>signature to 10–100 KB</strong> (230×60 px) as required by the <strong>NTA JEE Main portal</strong>. Instant, free, and browser-only — your image never leaves your device.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["NTA JEE Specs", "JPG Output", "Mobile Friendly", "No Data Stored"].map((t) => (
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
                                    { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "10–100 KB | 200×230 px" },
                                    { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "10–100 KB | 230×60 px" },
                                ].map(({ key, label, icon: Icon, desc }) => (
                                    <button key={key} onClick={() => setActiveTab(key)}
                                        className={`rounded-xl border-2 p-4 text-center transition-all ${activeTab === key ? "border-cyan-500 bg-cyan-500/10 shadow-md" : "border-border text-muted-foreground"}`}>
                                        <Icon className={`h-5 w-5 mx-auto mb-1 ${activeTab === key ? "text-cyan-500" : ""}`} />
                                        <div className="text-xs font-semibold">{label}</div>
                                        <div className="text-[11px] opacity-70 mt-0.5">{desc}</div>
                                    </button>
                                ))}
                            </div>
                            {activeTab === "photo" && <SignatureResizer title="JEE Main Photo Compressor" defaultTargetKB={30} minKB={10} maxKB={100} maxWidth={200} maxHeight={230} defaultPreset="jee-photo" />}
                            {activeTab === "signature" && <SignatureResizer title="JEE Main Signature Compressor" defaultTargetKB={50} minKB={10} maxKB={100} maxWidth={230} maxHeight={60} defaultPreset="jee" />}
                            <AdContainer type="display" />
                        </div>
                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-cyan-500" /> JEE Main Photo & Signature Requirements 2025
                            </h2>
                            <div className="overflow-x-auto rounded-xl border border-border">
                                <table className="w-full text-sm border-collapse">
                                    <thead><tr className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
                                        <th className="p-3 text-left rounded-tl-xl">Document</th><th className="p-3 text-left">Dimension</th><th className="p-3 text-left">File Size</th><th className="p-3 text-left rounded-tr-xl">Format</th>
                                    </tr></thead>
                                    <tbody className="divide-y divide-border">
                                        {[{ doc: "Photo", dim: "200 × 230 px", size: "10 KB – 100 KB", fmt: "JPG" }, { doc: "Signature", dim: "230 × 60 px", size: "10 KB – 100 KB", fmt: "JPG" }].map((r) => (
                                            <tr key={r.doc} className="hover:bg-muted/40">
                                                <td className="p-3 font-semibold text-foreground">{r.doc}</td>
                                                <td className="p-3 text-muted-foreground font-mono text-xs">{r.dim}</td>
                                                <td className="p-3"><span className="rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-xs font-semibold px-2 py-0.5">{r.size}</span></td>
                                                <td className="p-3 text-muted-foreground">{r.fmt}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1"><Shield className="h-3.5 w-3.5" /> Source: NTA JEE Main official information bulletin — 2025</p>
                        </div>
                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />
                        <div className="mx-auto mt-6 max-w-4xl">
                            <div className="rounded-2xl border border-border bg-muted/30 p-6">
                                <h2 className="text-lg font-bold text-foreground mb-4">Related Tools</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {[{ to: "/jee-signature-resize", label: "JEE Signature Resize", icon: Pen }, { to: "/neet-photo-signature-resize", label: "NEET Photo & Sig", icon: Camera }, { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle }, { to: "/compress-image-to-20kb-online", label: "Compress to 20KB", icon: Zap }].map(({ to, label, icon: Icon }) => (
                                        <Link key={to} to={to} className="flex flex-col items-center text-center rounded-xl border border-border bg-card p-3 hover:border-cyan-400 hover:bg-cyan-500/5 transition-all group">
                                            <Icon className="h-6 w-6 text-cyan-500 mb-2 group-hover:scale-110 transition-transform" />
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
export default JEEMainPhotoResize;

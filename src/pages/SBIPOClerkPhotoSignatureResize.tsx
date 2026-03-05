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

const SBIPOClerkPhotoSignatureResize = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");

    const tabs = [
        { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "20–80 KB | 200×200 px" },
        { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "10–80 KB | 200×80 px" },
    ];

    const faqs = [
        { question: "What is the SBI PO photo size in KB?", answer: "For SBI PO 2025-26, the photo must be in JPG format, dimensions 200×200 pixels, file size between 20 KB and 80 KB, with a white background." },
        { question: "What is the SBI Clerk signature size requirement?", answer: "The SBI Clerk (Junior Associate) signature must be in JPG format, dimensions 200×80 pixels, and file size between 10 KB and 80 KB." },
        { question: "Is the SBI PO and SBI Clerk photo requirement the same?", answer: "Yes. SBI PO and SBI Clerk (Junior Associate) both require a JPG photo of 200×200 px at 20–80 KB and a signature of 200×80 px at 10–80 KB. This tool works for both." },
        { question: "Why is my SBI photo getting rejected?", answer: "Common reasons: file size above 80 KB, wrong dimensions (must be 200×200 px), PNG format instead of JPG, or non-white background. Use this tool to compress and resize correctly." },
        { question: "Is this tool safe to use for SBI exam photos?", answer: "100% safe. All image processing happens in your browser only. Your SBI exam photo is never uploaded to any server." },
    ];

    const howToSteps = [
        { text: "Select the 'Photo Compressor' or 'Signature Compressor' tab" },
        { text: "Upload your photo (JPG, PNG, or WEBP)" },
        { text: "The SBI PO/Clerk preset is pre-loaded with correct specs" },
        { text: "Click Resize Now — output is a JPG within 20–80 KB" },
        { text: "Download and upload directly to the IBPS/SBI portal" },
    ];

    return (
        <>
            <SEOHead
                title="SBI PO & Clerk Photo Resize Online Free 2025-26 | SBI Signature Compressor"
                description="Free SBI PO and SBI Clerk photo resize: compress photo to 20–80 KB (200×200 px) and signature to 10–80 KB (200×80 px). Instant, secure, browser-only tool."
                canonicalUrl="https://signatureresize.in/sbi-po-photo-signature-resize"
                keywords="sbi po photo resize, sbi clerk photo resize, sbi po signature resize, sbi clerk signature compressor, sbi po photo size kb, sbi junior associate photo resize, sbi po 2026 photo upload"
            />
            <SEOSchema type="HowTo" howToName="How to Resize Photo for SBI PO Online" howToSteps={howToSteps} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "SBI PO Photo Resize", url: "https://signatureresize.in/sbi-po-photo-signature-resize" },
            ]} />

            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-green-600/10 via-primary/5 to-background py-8 sm:py-14">
                    <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-green-400/10 blur-3xl" />
                    <div className="container mx-auto px-4 relative">
                        <Breadcrumbs items={[{ name: "SBI PO/Clerk Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                SBI PO & Clerk Photo & Signature{" "}
                                <span className="text-green-500">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                Compress your <strong>SBI PO / SBI Clerk (Junior Associate) photo to 20–80 KB</strong> (200×200 px) and <strong>signature to 10–80 KB</strong> (200×80 px) as required by the official SBI portal. Instant, free, and browser-only — your photo never leaves your device.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["SBI Portal Specs", "JPG Output", "Mobile Friendly", "No Data Stored"].map((t) => (
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
                                        className={`rounded-xl border-2 p-4 text-center transition-all duration-200 ${activeTab === key ? "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400 shadow-md" : "border-border text-muted-foreground hover:border-green-400/50"}`}>
                                        <Icon className={`h-5 w-5 mx-auto mb-1 ${activeTab === key ? "text-green-500" : ""}`} />
                                        <div className="text-xs font-semibold">{label}</div>
                                        <div className="text-[11px] opacity-70 mt-0.5">{desc}</div>
                                    </button>
                                ))}
                            </div>
                            {activeTab === "photo" && (
                                <SignatureResizer title="SBI PO/Clerk Photo Compressor" defaultTargetKB={50} minKB={20} maxKB={80} maxWidth={200} maxHeight={200} defaultPreset="sbi-photo" />
                            )}
                            {activeTab === "signature" && (
                                <SignatureResizer title="SBI PO/Clerk Signature Compressor" defaultTargetKB={40} minKB={10} maxKB={80} maxWidth={200} maxHeight={80} defaultPreset="sbi-signature" />
                            )}
                            <AdContainer type="display" />
                        </div>

                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-green-500" /> SBI PO & SBI Clerk Photo & Signature Requirements 2025-26
                            </h2>
                            <div className="overflow-x-auto rounded-xl border border-border">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                                            <th className="p-3 text-left rounded-tl-xl">Document</th>
                                            <th className="p-3 text-left">Dimension</th>
                                            <th className="p-3 text-left">File Size</th>
                                            <th className="p-3 text-left">Format</th>
                                            <th className="p-3 text-left rounded-tr-xl">Background</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {[
                                            { doc: "Photo", dim: "200 × 200 px", size: "20 KB – 80 KB", fmt: "JPG", bg: "White" },
                                            { doc: "Signature", dim: "200 × 80 px", size: "10 KB – 80 KB", fmt: "JPG", bg: "White" },
                                        ].map((r) => (
                                            <tr key={r.doc} className="hover:bg-muted/40">
                                                <td className="p-3 font-semibold text-foreground">{r.doc}</td>
                                                <td className="p-3 text-muted-foreground font-mono text-xs">{r.dim}</td>
                                                <td className="p-3"><span className="rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold px-2 py-0.5">{r.size}</span></td>
                                                <td className="p-3 text-muted-foreground">{r.fmt}</td>
                                                <td className="p-3 text-muted-foreground">{r.bg}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                                <Shield className="h-3.5 w-3.5" /> Source: SBI official recruitment notification — updated 2026
                            </p>
                        </div>

                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />

                        <div className="mx-auto mt-6 max-w-4xl space-y-8">
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-3">SBI PO vs SBI Clerk — Same Photo Specs?</h2>
                                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <p><strong className="text-foreground">SBI PO (Probationary Officer):</strong> Photo 200×200 px, 20–80 KB. Signature 200×80 px, 10–80 KB. JPG only.</p>
                                    <p><strong className="text-foreground">SBI Clerk (Junior Associate):</strong> Identical specifications. Same tool works for both.</p>
                                    <p><strong className="text-foreground">SBI CBO:</strong> Similar but check the latest notification. Use <Link to="/ibps-photo-signature-resize" className="text-primary hover:underline">IBPS photo tool</Link> as a fallback.</p>
                                    <p>All SBI applications go through the same online portal. Your photo and signature are stored and reused across applications — so get it right the first time.</p>
                                </div>
                            </div>
                            <div className="rounded-2xl border border-border bg-muted/30 p-6">
                                <h2 className="text-lg font-bold text-foreground mb-4">Related Tools</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {[
                                        { to: "/ibps-photo-signature-resize", label: "IBPS Photo & Sig", icon: Camera },
                                        { to: "/ssc-cgl-photo-signature-resize", label: "SSC CGL Photo", icon: FileImage },
                                        { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle },
                                        { to: "/compress-image-to-20kb-online", label: "Compress to 20KB", icon: Zap },
                                    ].map(({ to, label, icon: Icon }) => (
                                        <Link key={to} to={to} className="flex flex-col items-center text-center rounded-xl border border-border bg-card p-3 hover:border-green-400 hover:bg-green-500/5 transition-all group">
                                            <Icon className="h-6 w-6 text-green-500 mb-2 group-hover:scale-110 transition-transform" />
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

export default SBIPOClerkPhotoSignatureResize;

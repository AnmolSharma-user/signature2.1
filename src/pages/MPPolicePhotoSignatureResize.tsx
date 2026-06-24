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

const MPPolicePhotoSignatureResize = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");

    const tabs = [
        { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "20–50 KB | 200×230 px" },
        { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "10–30 KB | 140×60 px" },
    ];

    const requirements = [
        { doc: "Photograph", dimension: "200 × 230 px", size: "20 KB – 50 KB", format: "JPG", bg: "White", notes: "Passport-size, plain white background" },
        { doc: "Signature", dimension: "140 × 60 px", size: "10 KB – 30 KB", format: "JPG", bg: "White", notes: "Black ink on white paper" },
    ];

    const faqs = [
        {
            question: "What is the MP Police photo size requirement?",
            answer: "MP Police (MPPEB/Vyapam) requires a passport-size photograph in JPG format, dimensions 200×230 pixels, file size between 20 KB and 50 KB. Plain white background is mandatory."
        },
        {
            question: "What is the MP Police signature size?",
            answer: "MP Police signature must be JPG format, 140×60 pixels, file size between 10 KB and 30 KB. Sign with black ink on plain white paper in cursive/running hand."
        },
        {
            question: "Which portal is used for MP Police application?",
            answer: "MP Police applications are submitted through the MPPEB (Madhya Pradesh Professional Examination Board) portal at peb.mp.gov.in. You need to register and upload your resized photo and signature during the online application."
        },
        {
            question: "How to resize MP Police photo on mobile?",
            answer: "Open this website on your mobile browser. Tap the Photo Compressor tab, upload your photo, and tap Resize Now. The tool works on all smartphones without any app installation."
        },
        {
            question: "Why is MP Police photo rejected on peb.mp.gov.in?",
            answer: "Common reasons: file size above 50 KB, non-JPG format, non-white background, blurry photo, face not clear. Use this free tool to fix all issues in one click."
        },
        {
            question: "Is this MP Police photo resize tool free?",
            answer: "Yes, 100% free. No account needed. Works entirely in your browser without uploading images to any server."
        },
    ];

    const howToSteps = [
        { text: "Select Photo or Signature tab" },
        { text: "Upload your image (JPG or PNG)" },
        { text: "MP Police preset is auto-applied" },
        { text: "Click Resize Now" },
        { text: "Download and upload to peb.mp.gov.in" },
    ];

    const relatedTools = [
        { to: "/up-police-photo-signature-resize", label: "UP Police Photo", icon: Camera },
        { to: "/rajasthan-police-photo-signature-resize", label: "Rajasthan Police", icon: FileImage },
        { to: "/compress-image-to-20kb-online", label: "Compress to 20KB", icon: Zap },
        { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle },
    ];

    return (
        <>
            <SEOHead
                title="MP Police Photo & Signature Resize Online Free — MPPEB peb.mp.gov.in Specs"
                description="Free MP Police photo resize: compress photo to 20–50 KB (200×230 px) and signature to 10–30 KB (140×60 px) for MPPEB peb.mp.gov.in portal. Instant, browser-only, no account needed."
                canonicalUrl="https://signatureresize.in/mp-police-photo-signature-resize"
                keywords="mp police photo resize, mp police photo size kb, mppeb photo size, mp police constable photo, peb mp gov in photo size, mp police signature size, madhya pradesh police photo resize free"
                ogType="article"
                modifiedTime="2026-06-24T08:00:00+05:30"
            />
            <SEOSchema type="HowTo" howToName="How to Resize Photo for MP Police" howToSteps={howToSteps} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "MP Police Photo Resize", url: "https://signatureresize.in/mp-police-photo-signature-resize" },
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "WebApplication",
                    name: "MP Police Photo & Signature Resize",
                    url: "https://signatureresize.in/mp-police-photo-signature-resize",
                    description: "Free tool to resize MP Police photo to 20–50 KB and signature to 10–30 KB for MPPEB portal.",
                    applicationCategory: "UtilityApplication", operatingSystem: "Any",
                    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
                    dateModified: "2026-06-24",
                })
            }} />

            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-700/10 via-primary/5 to-background py-8 sm:py-14">
                    <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
                    <div className="container mx-auto px-4 relative">
                        <Breadcrumbs items={[{ name: "MP Police Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 border border-blue-500/30 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4">
                                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                                MP Police — MPPEB Portal Specs
                            </div>
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                MP Police Photo &amp; Signature{" "}
                                <span className="text-blue-600">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                Compress your <strong>MP Police photo to 20–50 KB</strong> (200×230 px) and{" "}
                                <strong>signature to 10–30 KB</strong> (140×60 px) — per MPPEB/Vyapam portal requirements.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["MPPEB Portal Specs", "JPG Output", "Mobile Friendly", "No Data Stored"].map((t) => (
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
                                        className={`rounded-xl border-2 p-3 sm:p-4 text-center transition-all duration-200 ${activeTab === key ? "border-blue-600 bg-blue-600/10 text-blue-700 dark:text-blue-400 shadow-md" : "border-border text-muted-foreground hover:border-blue-400/50"}`}>
                                        <Icon className={`h-5 w-5 mx-auto mb-1 ${activeTab === key ? "text-blue-600" : ""}`} />
                                        <div className="text-xs font-semibold">{label}</div>
                                        <div className="text-[10px] opacity-70 mt-0.5">{desc}</div>
                                    </button>
                                ))}
                            </div>
                            {activeTab === "photo" && (
                                <SignatureResizer title="MP Police Photo Compressor" defaultTargetKB={35} minKB={20} maxKB={50} maxWidth={200} maxHeight={230} defaultPreset="mp-police-photo" />
                            )}
                            {activeTab === "signature" && (
                                <SignatureResizer title="MP Police Signature Compressor" defaultTargetKB={20} minKB={10} maxKB={30} maxWidth={140} maxHeight={60} defaultPreset="mp-police-signature" />
                            )}
                            <AdContainer type="display" />
                        </div>

                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-blue-600" /> MP Police — Official Photo &amp; Signature Requirements
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
                                <Shield className="h-3.5 w-3.5" /> Source: MPPEB official notification (peb.mp.gov.in)
                            </p>
                        </div>

                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />

                        <div className="mx-auto mt-6 max-w-4xl space-y-8">
                            <div className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-5">
                                <div className="flex gap-3">
                                    <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                                    <div className="text-sm">
                                        <p className="font-bold text-blue-800 dark:text-blue-300 mb-1">MP Police Recruitment — MPPEB Portal</p>
                                        <p className="text-blue-700 dark:text-blue-400 leading-relaxed">
                                            Madhya Pradesh Police Constable and SI recruitment is conducted by MPPEB (Madhya Pradesh Professional Examination Board, also known as Vyapam) at peb.mp.gov.in. Applications require photo and signature in specific file sizes. Always check the latest notification PDF for exact requirements as they may vary by post.
                                        </p>
                                    </div>
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

export default MPPolicePhotoSignatureResize;

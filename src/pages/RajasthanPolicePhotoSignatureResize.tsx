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

const RajasthanPolicePhotoSignatureResize = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");

    const tabs = [
        { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "50–100 KB | 200×230 px" },
        { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "20–50 KB | 140×60 px" },
    ];

    const requirements = [
        { doc: "Photograph", dimension: "200 × 230 px", size: "50 KB – 100 KB", format: "JPG", bg: "White", notes: "Recent passport-size, plain white background" },
        { doc: "Signature", dimension: "140 × 60 px", size: "20 KB – 50 KB", format: "JPG", bg: "White", notes: "Black/dark blue ink on white paper" },
    ];

    const faqs = [
        {
            question: "What is the Rajasthan Police photo size requirement?",
            answer: "Rajasthan Police (RPSC/Rajasthan Police Recruitment Board) requires a passport-size photograph in JPG format, typically 200×230 pixels, file size between 50 KB and 100 KB. Background must be plain white."
        },
        {
            question: "What is the Rajasthan Police signature size?",
            answer: "Rajasthan Police signature should be in JPG format, approximately 140×60 pixels, file size between 20 KB and 50 KB. Sign with black or dark blue ink on plain white paper."
        },
        {
            question: "How to apply for Rajasthan Police 2026 recruitment?",
            answer: "Rajasthan Police applications are submitted through the Rajasthan SSO portal at sso.rajasthan.gov.in. After logging in, find the RPSC or Rajasthan Police Recruitment link and upload your resized photo and signature."
        },
        {
            question: "What is the SSO portal for Rajasthan Police application?",
            answer: "The Rajasthan Single Sign-On (SSO) portal at sso.rajasthan.gov.in is the central platform for all Rajasthan government job applications including Rajasthan Police Constable and SI recruitment."
        },
        {
            question: "Why is Rajasthan Police photo rejected on SSO portal?",
            answer: "Common reasons: file size not between 50–100 KB, non-JPG format, non-white background, face too small, or blurry image. Use this free tool to resize exactly as per Rajasthan Police specifications."
        },
        {
            question: "Is this Rajasthan Police photo resize tool free?",
            answer: "Yes, 100% free. No registration needed. All processing is done in your browser — photos never leave your device."
        },
    ];

    const howToSteps = [
        { text: "Select 'Photo' or 'Signature' tab" },
        { text: "Upload your JPG or PNG image" },
        { text: "Rajasthan Police preset is pre-applied" },
        { text: "Click Resize Now" },
        { text: "Download and upload to Rajasthan SSO portal (sso.rajasthan.gov.in)" },
    ];

    const relatedTools = [
        { to: "/up-police-photo-signature-resize", label: "UP Police Photo & Sig", icon: Camera },
        { to: "/bihar-police-photo-signature-resize", label: "Bihar Police Photo", icon: FileImage },
        { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle },
        { to: "/compress-image-to-20kb-online", label: "Compress to 20KB", icon: Zap },
    ];

    return (
        <>
            <SEOHead
                title="Rajasthan Police Photo & Signature Resize Online Free — SSO Portal Specs"
                description="Free Rajasthan Police photo resize: compress photo to 50–100 KB (200×230 px) and signature to 20–50 KB (140×60 px) for Rajasthan SSO portal. Meets RPSC/Rajasthan Police requirements. Instant, browser-only."
                canonicalUrl="https://signatureresize.in/rajasthan-police-photo-signature-resize"
                keywords="rajasthan police photo resize, rajasthan police photo size kb, rpsc photo size, rajasthan police constable photo, rajasthan police signature size, sso rajasthan photo upload, rajasthan police application photo free resize"
                ogType="article"
                modifiedTime="2026-06-24T08:00:00+05:30"
            />
            <SEOSchema type="HowTo" howToName="How to Resize Photo for Rajasthan Police" howToSteps={howToSteps} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "Rajasthan Police Photo Resize", url: "https://signatureresize.in/rajasthan-police-photo-signature-resize" },
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "WebApplication",
                    name: "Rajasthan Police Photo & Signature Resize",
                    url: "https://signatureresize.in/rajasthan-police-photo-signature-resize",
                    description: "Free online tool to resize Rajasthan Police photo to 50–100 KB and signature to 20–50 KB for SSO portal.",
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
                        <Breadcrumbs items={[{ name: "Rajasthan Police Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 border border-blue-500/30 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4">
                                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                                Rajasthan Police — SSO Portal Specs
                            </div>
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                Rajasthan Police Photo &amp; Signature{" "}
                                <span className="text-blue-600">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                Compress your <strong>Rajasthan Police photo to 50–100 KB</strong> (200×230 px) and{" "}
                                <strong>signature to 20–50 KB</strong> (140×60 px) — as per Rajasthan SSO portal requirements.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["SSO Portal Specs", "JPG Output", "Instant Processing", "No Data Stored"].map((t) => (
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
                                <SignatureResizer title="Rajasthan Police Photo Compressor" defaultTargetKB={75} minKB={50} maxKB={100} maxWidth={200} maxHeight={230} defaultPreset="rajasthan-police-photo" />
                            )}
                            {activeTab === "signature" && (
                                <SignatureResizer title="Rajasthan Police Signature Compressor" defaultTargetKB={35} minKB={20} maxKB={50} maxWidth={140} maxHeight={60} defaultPreset="rajasthan-police-signature" />
                            )}
                            <AdContainer type="display" />
                        </div>

                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-blue-600" /> Rajasthan Police — Official Photo &amp; Signature Requirements
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
                                <Shield className="h-3.5 w-3.5" /> Source: RPSC / Rajasthan Police official notification (rpsc.rajasthan.gov.in)
                            </p>
                        </div>

                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />

                        <div className="mx-auto mt-6 max-w-4xl space-y-8">
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-3">Common Rajasthan Police Photo Rejection Reasons</h2>
                                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                    {[
                                        { icon: XCircle, color: "text-red-500", t: "File size outside 50–100 KB range", d: "Rajasthan Police photo must be exactly between 50 KB and 100 KB. Files outside this range are rejected at the SSO portal." },
                                        { icon: XCircle, color: "text-red-500", t: "Non-JPG format", d: "Only JPG/JPEG format is accepted. PNG or other formats are rejected. This tool always converts output to JPG." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Non-white background", d: "Plain white background is mandatory. Gradient, grey, or studio backgrounds are rejected." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Glasses with glare or tint", d: "Remove spectacles for the photo if possible, or ensure there is absolutely no glare/reflection on the lenses." },
                                        { icon: XCircle, color: "text-red-500", t: "Signature file outside 20–50 KB", d: "Signature must be between 20 KB and 50 KB. Always verify file size before uploading to the SSO portal." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Blurred or smudged signature", d: "The signature must be clear with no smudging. Photograph from directly above with good lighting." },
                                    ].map(({ icon: Icon, color, t, d }) => (
                                        <div key={t} className="flex gap-3 rounded-xl border border-border bg-muted/20 p-4">
                                            <Icon className={`h-5 w-5 ${color} shrink-0 mt-0.5`} />
                                            <div><p className="text-sm font-semibold text-foreground">{t}</p><p className="text-xs text-muted-foreground mt-1">{d}</p></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-5">
                                <div className="flex gap-3">
                                    <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                                    <div className="text-sm">
                                        <p className="font-bold text-blue-800 dark:text-blue-300 mb-1">Rajasthan Police Recruitment — Application Portal</p>
                                        <p className="text-blue-700 dark:text-blue-400 leading-relaxed">
                                            Rajasthan Police Constable and SI recruitment is conducted through the Rajasthan SSO portal (sso.rajasthan.gov.in) via the RPSC icon. All applications require photo and signature in specific sizes. The same documents are verified at the physical test and document verification stage.
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

export default RajasthanPolicePhotoSignatureResize;

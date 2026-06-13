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

const HSPCPhotoSignatureResize = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");

    const tabs = [
        { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "10–40 KB | 3.5×4.5 cm" },
        { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "10–30 KB | 3.5×1.5 cm" },
    ];

    const requirements = [
        { doc: "Photograph", dimension: "~200 × 250 px", size: "10 KB – 40 KB", format: "JPG", bg: "White", notes: "3.5×4.5 cm passport size" },
        { doc: "Signature", dimension: "~200 × 80 px", size: "10 KB – 30 KB", format: "JPG", bg: "White", notes: "Black/blue ink, white paper" },
    ];

    const exams = [
        { name: "HSSC CET Group C", body: "Haryana SSC", type: "Group C" },
        { name: "HSSC CET Group D", body: "Haryana SSC", type: "Group D" },
        { name: "HSSC Police Constable", body: "Haryana Police", type: "Constable" },
        { name: "HPSC HCS", body: "Haryana PSC", type: "State Service" },
        { name: "HSSC Clerk", body: "Haryana SSC", type: "Group C" },
        { name: "HSSC Patwari", body: "Haryana SSC", type: "Revenue" },
    ];

    const faqs = [
        {
            question: "What is the HSSC photo size requirement for 2026?",
            answer: "HSSC (Haryana Staff Selection Commission) requires a passport-size photograph in JPG format, approximately 200×250 pixels, with file size between 10 KB and 40 KB. The background must be white and the photo should be recent (within 6 months)."
        },
        {
            question: "What is the HSSC signature size in KB?",
            answer: "For HSSC/HPSC exams in 2026, the signature must be in JPG format, approximately 200×80 pixels, and between 10 KB and 30 KB in size. The signature must be in cursive or running hand using black or blue ink on plain white paper."
        },
        {
            question: "Does this tool work for HSSC CET Group C and Group D?",
            answer: "Yes. HSSC CET Group C and Group D use the same photo (10–40 KB, ~200×250 px) and signature (10–30 KB) requirements. Select the appropriate tab and upload your image."
        },
        {
            question: "Can the same photo be used for HPSC and HSSC both?",
            answer: "The photo specifications are similar but always check the specific notification. HPSC HCS uses the same passport photo format (white background, JPG, 10–40 KB). Save the original high-resolution photo and use this tool each time to resize specifically."
        },
        {
            question: "Is this Haryana exam photo resize tool free?",
            answer: "100% free. No registration required. All processing happens in your browser — your images never leave your device."
        },
        {
            question: "Why is my HSSC photo getting rejected?",
            answer: "Most common causes: file above 40 KB, wrong format (PNG not accepted), non-white background, wearing glasses or headgear, or photo quality too low (blurry). Run through this tool to auto-correct size to 20–35 KB JPG."
        },
    ];

    const howToSteps = [
        { text: "Select 'Photo Compressor' or 'Signature Compressor' tab" },
        { text: "Upload your JPG or PNG image" },
        { text: "The HSSC preset is auto-applied with correct specs" },
        { text: "Click 'Resize Now' and download the output JPG" },
        { text: "Upload to HSSC/HPSC portal (Advt. Portal or One-Time Registration)" },
    ];

    return (
        <>
            <SEOHead
                title="HSSC Photo & Signature Resize 2026 | Haryana SSC CET Group C D Photo Compressor"
                description="Free HSSC/Haryana SSC photo resize: compress photo to 10–40 KB and signature to 10–30 KB for HSSC CET Group C, Group D, Haryana Police Constable, HPSC HCS 2026 exams. Instant, browser-only, no app needed."
                canonicalUrl="https://signatureresize.in/hssc-photo-signature-resize"
                keywords="hssc photo resize 2026, haryana ssc photo size, hssc cet photo kb, hssc signature size, hssc group c photo resize, hssc group d photo compressor, hpsc photo size, haryana police photo signature, hssc cet 2026 photo requirement"
                ogType="article"
                modifiedTime="2026-06-13T12:00:00+05:30"
            />
            <SEOSchema type="HowTo" howToName="How to Resize Photo for HSSC Haryana SSC Exam" howToSteps={howToSteps} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "HSSC Photo Resize", url: "https://signatureresize.in/hssc-photo-signature-resize" },
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "WebApplication",
                    name: "HSSC Haryana SSC Photo & Signature Resize 2026",
                    url: "https://signatureresize.in/hssc-photo-signature-resize",
                    description: "Free online tool to resize HSSC/Haryana SSC photo to 10–40 KB and signature to 10–30 KB for HSSC CET Group C, Group D, Haryana Police Constable and HPSC exams 2026.",
                    applicationCategory: "UtilityApplication", operatingSystem: "Any",
                    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
                    dateModified: "2026-06-13",
                })
            }} />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-green-700/10 via-primary/5 to-background py-8 sm:py-14">
                    <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-green-400/10 blur-3xl" />
                    <div className="container mx-auto px-4 relative">
                        <Breadcrumbs items={[{ name: "HSSC Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-green-600/10 border border-green-500/30 px-3 py-1 text-xs font-semibold text-green-700 dark:text-green-400 mb-4">
                                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                HSSC CET 2026 — Photo &amp; Signature Tool
                            </div>
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                HSSC Photo &amp; Signature{" "}
                                <span className="text-green-600">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                Compress your <strong>HSSC/Haryana SSC photo to 10–40 KB</strong> and{" "}
                                <strong>signature to 10–30 KB</strong> for HSSC CET Group C, Group D, Haryana Police Constable, HPSC HCS, and all Haryana state exams.
                                Works on mobile — no app download needed.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["HSSC CET Specs", "JPG Output", "Mobile Friendly", "No Data Stored"].map((t) => (
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
                                        className={`rounded-xl border-2 p-4 text-center transition-all duration-200 ${activeTab === key ? "border-green-600 bg-green-600/10 text-green-700 dark:text-green-400 shadow-md" : "border-border text-muted-foreground hover:border-green-400/50"}`}>
                                        <Icon className={`h-5 w-5 mx-auto mb-1 ${activeTab === key ? "text-green-600" : ""}`} />
                                        <div className="text-xs font-semibold">{label}</div>
                                        <div className="text-[11px] opacity-70 mt-0.5">{desc}</div>
                                    </button>
                                ))}
                            </div>

                            {activeTab === "photo" && (
                                <SignatureResizer title="HSSC Photo Compressor" defaultTargetKB={25} minKB={10} maxKB={40} maxWidth={200} maxHeight={250} defaultPreset="hssc-photo" />
                            )}
                            {activeTab === "signature" && (
                                <SignatureResizer title="HSSC Signature Compressor" defaultTargetKB={20} minKB={10} maxKB={30} maxWidth={200} maxHeight={80} defaultPreset="hssc-signature" />
                            )}
                            <AdContainer type="display" />
                        </div>

                        {/* Requirements Table */}
                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-green-600" /> HSSC / Haryana State Exam Photo &amp; Signature Requirements 2026
                            </h2>
                            <div className="overflow-x-auto rounded-xl border border-border">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-green-700 to-green-800 text-white">
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
                                                <td className="p-3"><span className="rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold px-2 py-0.5">{r.size}</span></td>
                                                <td className="p-3 text-muted-foreground">{r.format}</td>
                                                <td className="p-3 text-muted-foreground">{r.bg}</td>
                                                <td className="p-3 text-xs text-muted-foreground">{r.notes}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                                <Shield className="h-3.5 w-3.5" /> Source: HSSC CET 2026 official notification & Haryana recruitment portal
                            </p>
                        </div>

                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />

                        {/* Exams Covered */}
                        <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4">Haryana State Exams This Tool Covers</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {exams.map((e) => (
                                    <div key={e.name} className="rounded-xl border border-border bg-muted/20 p-3 text-sm">
                                        <p className="font-semibold text-foreground">{e.name}</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">{e.body} · {e.type}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Common Rejection Reasons */}
                        <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-3">Why HSSC Portal Rejects Photos</h2>
                            <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                {[
                                    { icon: XCircle, color: "text-red-500", t: "Photo above 40 KB", d: "HSSC portals cap photo at 40 KB. This tool targets 25 KB by default — safe midpoint." },
                                    { icon: XCircle, color: "text-red-500", t: "PNG format", d: "HSSC accepts only JPG/JPEG. Upload PNG here and we output a clean JPG automatically." },
                                    { icon: AlertTriangle, color: "text-amber-500", t: "Block letter signature", d: "Write your signature in cursive. Block letters are explicitly rejected by Haryana exam portals." },
                                    { icon: AlertTriangle, color: "text-amber-500", t: "Coloured or grey background", d: "Strict white background only. Studio photos with faded blue/grey backgrounds will fail validation." },
                                ].map(({ icon: Icon, color, t, d }) => (
                                    <div key={t} className="flex gap-3 rounded-xl border border-border bg-muted/20 p-4">
                                        <Icon className={`h-5 w-5 ${color} shrink-0 mt-0.5`} />
                                        <div><p className="text-sm font-semibold text-foreground">{t}</p><p className="text-xs text-muted-foreground mt-1">{d}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-5">
                            <div className="flex gap-3">
                                <Info className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    <p className="font-bold text-green-800 dark:text-green-300 mb-1">About HSSC &amp; Haryana Recruitment</p>
                                    <p className="text-green-700 dark:text-green-400 leading-relaxed">
                                        Haryana Staff Selection Commission (HSSC) conducts a Common Eligibility Test (CET) for Group C and Group D posts across Haryana government departments. The CET is held separately for each group. After clearing the CET, candidates apply for specific posts through skill tests and document verification. Photo and signature uploaded during CET registration are used in all subsequent applications through the one-time registration (OTR) portal at <strong>adv1.haryanajobs.in</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Related Tools */}
                        <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-border bg-muted/30 p-6">
                            <h2 className="text-lg font-bold text-foreground mb-4">Related Tools</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {[
                                    { to: "/ssc-cgl-photo-signature-resize", label: "SSC CGL Photo & Sig", icon: FileImage },
                                    { to: "/bpsc-photo-signature-resize", label: "BPSC Photo & Sig", icon: Camera },
                                    { to: "/mpsc-photo-signature-resize", label: "MPSC Photo & Sig", icon: Pen },
                                    { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle },
                                ].map(({ to, label, icon: Icon }) => (
                                    <Link key={to} to={to} className="flex flex-col items-center text-center rounded-xl border border-border bg-card p-3 hover:border-green-500 hover:bg-green-500/5 transition-all group">
                                        <Icon className="h-6 w-6 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
                                        <p className="text-xs font-semibold text-foreground">{label}</p>
                                    </Link>
                                ))}
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

export default HSPCPhotoSignatureResize;

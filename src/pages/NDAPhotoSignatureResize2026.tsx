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

const NDAPhotoSignatureResize2026 = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");

    const tabs = [
        { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "10–300 KB | 350×350 px" },
        { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "4–30 KB | 350×90 px" },
    ];

    const requirements = [
        { doc: "Photograph", dimension: "350 × 350 px", size: "10 KB – 300 KB", format: "JPG", bg: "White/Light", notes: "Recent passport-size, face clear" },
        { doc: "Signature", dimension: "350 × 90 px", size: "4 KB – 30 KB", format: "JPG", bg: "White", notes: "Black ink, cursive on white paper" },
    ];

    const faqs = [
        {
            question: "What is the NDA 2026 photo size requirement?",
            answer: "NDA (National Defence Academy) 2026 requires a passport-size photograph in JPG format, dimensions 350×350 pixels, file size between 10 KB and 300 KB. The photo must have a white or light background."
        },
        {
            question: "What is the NDA 2026 signature size?",
            answer: "NDA 2026 signature must be JPG format, 350×90 pixels, file size between 4 KB and 30 KB. Sign with black ink on plain white paper in cursive. The signature must match what you'll use during document verification."
        },
        {
            question: "Which body conducts NDA 2026 exam?",
            answer: "NDA (National Defence Academy) exam is conducted by UPSC (Union Public Service Commission) twice a year — NDA I (April/May) and NDA II (September/October). Applications are at upsc.gov.in."
        },
        {
            question: "What is the NDA 2026 notification and application date?",
            answer: "NDA I 2026 application was typically in January–February 2026. NDA II 2026 notification is expected around June–July 2026 with the exam in September 2026. Check upsc.gov.in for official dates."
        },
        {
            question: "Why is NDA photo 350×350 px (square) different from other exams?",
            answer: "UPSC NDA uses a square format (350×350 px) unlike the rectangular format used by SSC, Banking, and other exams. This is unique to UPSC's online application system. Our tool lets you set any custom dimensions."
        },
        {
            question: "Is this NDA photo resize tool free?",
            answer: "Yes, 100% free. No login needed. All image processing happens in your browser — your images are never sent to any server."
        },
    ];

    const howToSteps = [
        { text: "Select Photo or Signature tab" },
        { text: "Upload your JPG or PNG image" },
        { text: "NDA 2026 preset (350×350 px / 350×90 px) is auto-applied" },
        { text: "Click Resize Now" },
        { text: "Download and upload to UPSC NDA application at upsc.gov.in" },
    ];

    const relatedTools = [
        { to: "/upsc-signature-resize", label: "UPSC Signature Resize", icon: Pen },
        { to: "/capf-ac-photo-signature-resize", label: "CAPF AC Photo & Sig", icon: Camera },
        { to: "/agniveer-agnipath-photo-signature-requirements-2026", label: "Agniveer Photo Guide", icon: FileImage },
        { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle },
    ];

    return (
        <>
            <SEOHead
                title="NDA 2026 Photo & Signature Resize Online Free — UPSC upsc.gov.in Specs"
                description="Free NDA 2026 photo resize: compress photo to 10–300 KB (350×350 px) and signature to 4–30 KB (350×90 px) as per UPSC NDA portal requirements. Instant, browser-only processing."
                canonicalUrl="https://signatureresize.in/nda-2026-photo-signature-resize"
                keywords="nda 2026 photo size, nda photo resize, nda signature size kb, upsc nda photo requirement, nda 2026 application photo, nda photo 350x350 pixels, nda signature 350x90, upsc nda photo upload free"
                ogType="article"
                modifiedTime="2026-06-24T08:00:00+05:30"
            />
            <SEOSchema type="HowTo" howToName="How to Resize Photo for NDA 2026" howToSteps={howToSteps} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "NDA 2026 Photo Resize", url: "https://signatureresize.in/nda-2026-photo-signature-resize" },
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "WebApplication",
                    name: "NDA 2026 Photo & Signature Resize",
                    url: "https://signatureresize.in/nda-2026-photo-signature-resize",
                    description: "Free tool to resize NDA 2026 photo to 350×350 px (10–300 KB) and signature to 350×90 px (4–30 KB) for UPSC portal.",
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
                        <Breadcrumbs items={[{ name: "NDA 2026 Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 border border-blue-500/30 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4">
                                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                                NDA II 2026 — UPSC Notification Expected July 2026
                            </div>
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                NDA 2026 Photo &amp; Signature{" "}
                                <span className="text-blue-600">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                The most common NDA application mistake is uploading a rectangular passport-size photo. <strong>UPSC requires a square 350×350 px photo</strong> — not the 200×230 px format used for banking exams. Candidates who paste their IBPS or SBI PO photo directly into the UPSC form get a distorted or rejected upload. The signature is also wider than usual: 350×90 px instead of the standard 140×60. This tool has the exact NDA presets pre-loaded.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["UPSC Portal Specs", "Square Photo Format", "JPG Output", "No Data Stored"].map((t) => (
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
                                <SignatureResizer title="NDA Photo Compressor (350×350 px)" defaultTargetKB={100} minKB={10} maxKB={300} maxWidth={350} maxHeight={350} defaultPreset="nda-photo" />
                            )}
                            {activeTab === "signature" && (
                                <SignatureResizer title="NDA Signature Compressor (350×90 px)" defaultTargetKB={15} minKB={4} maxKB={30} maxWidth={350} maxHeight={90} defaultPreset="nda-signature" />
                            )}
                            <AdContainer type="display" />
                        </div>

                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-blue-600" /> NDA 2026 — Official Photo &amp; Signature Requirements
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
                                <Shield className="h-3.5 w-3.5" /> Source: UPSC NDA official notification (upsc.gov.in)
                            </p>
                        </div>

                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />

                        <div className="mx-auto mt-6 max-w-4xl space-y-8">
                            <div className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-5">
                                <div className="flex gap-3">
                                    <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                    <div className="text-sm">
                                        <p className="font-bold text-amber-800 dark:text-amber-300 mb-1">NDA Photo is Square (350×350 px) — Not Rectangular!</p>
                                        <p className="text-amber-700 dark:text-amber-400 leading-relaxed">
                                            Unlike most exams that use 200×230 px, NDA uses a <strong>square 350×350 px</strong> photo format. If you upload a standard passport photo (rectangular), this tool will resize it to the correct square format. Make sure to crop your photo with your face centered before uploading.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-5">
                                <div className="flex gap-3">
                                    <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                                    <div className="text-sm">
                                        <p className="font-bold text-blue-800 dark:text-blue-300 mb-1">About NDA 2026</p>
                                        <p className="text-blue-700 dark:text-blue-400 leading-relaxed">
                                            NDA (National Defence Academy) is one of India's most prestigious joint defence entrance exams conducted by UPSC. It selects candidates for the Army, Navy, and Air Force wings of NDA and Indian Naval Academy (INA). The exam is open to unmarried male and female candidates aged 16.5–19.5 years. Apply at upsc.gov.in.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Deep Content: NDA-specific */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-6">
                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-1">NDA 2026 — Key Details</h2>
                                    <p className="text-xs text-muted-foreground mb-4">Last updated: <strong>July 10, 2026</strong> · Source: <a href="https://upsc.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">upsc.gov.in</a></p>
                                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                        {[
                                            { label: "Conducting Body", value: "UPSC (Union Public Service Commission)" },
                                            { label: "Eligibility", value: "10+2 passed/appearing; unmarried male & female" },
                                            { label: "Age Limit", value: "16.5 to 19.5 years on date of commencement of course" },
                                            { label: "Exam Cycles", value: "Twice yearly — NDA I (April) and NDA II (September)" },
                                            { label: "Photo Size — UNIQUE", value: "SQUARE 350×350 px (not rectangular like other exams)" },
                                            { label: "Application Portal", value: "upsconline.nic.in" },
                                        ].map(({ label, value }) => (
                                            <div key={label} className="rounded-lg border border-border bg-muted/30 p-3">
                                                <p className="text-xs text-muted-foreground">{label}</p>
                                                <p className="font-semibold text-foreground text-sm mt-0.5">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-4">
                                    <p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-2">⚠️ NDA Uses SQUARE Photo — Most Candidates Get This Wrong</p>
                                    <p className="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
                                        NDA (and CAPF AC) require a <strong>square 350×350 pixel photo</strong> — NOT the usual 200×230 px rectangular format used for SBI PO, IBPS, SSC, etc.
                                        If you upload a rectangular photo to the UPSC portal, it will either be stretched or rejected.
                                        This tool has a dedicated NDA preset that automatically outputs the correct 350×350 px square at 10–300 KB.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-3">NDA 2026 — Written Exam Pattern</h2>
                                    <div className="overflow-x-auto rounded-xl border border-border">
                                        <table className="w-full text-sm border-collapse">
                                            <thead>
                                                <tr className="bg-gradient-to-r from-blue-700 to-blue-800 text-white">
                                                    <th className="p-3 text-left">Paper</th>
                                                    <th className="p-3 text-left">Questions</th>
                                                    <th className="p-3 text-left">Marks</th>
                                                    <th className="p-3 text-left">Duration</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border">
                                                {[
                                                    { p: "Mathematics", q: "120", m: "300", d: "2.5 hours" },
                                                    { p: "General Ability Test", q: "150", m: "600", d: "2.5 hours" },
                                                    { p: "SSB Interview", q: "—", m: "900", d: "5 days" },
                                                    { p: "Total", q: "—", m: "1800", d: "—" },
                                                ].map(({ p, q, m, d }) => (
                                                    <tr key={p} className="hover:bg-muted/40">
                                                        <td className="p-3 font-medium text-foreground">{p}</td>
                                                        <td className="p-3 text-muted-foreground">{q}</td>
                                                        <td className="p-3 text-muted-foreground">{m}</td>
                                                        <td className="p-3 text-muted-foreground">{d}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2">Negative marking: 1/3 mark deducted per wrong answer. SSB interview (Stage 1: OIR + PPDT, Stage 2: Psychology, GTO, Interview) is conducted at Selection Centres across India.</p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-3">NDA Photo &amp; Signature Checklist</h2>
                                    <ul className="space-y-1.5 text-sm">
                                        {[
                                            "✅ Photo: SQUARE 350×350 px — not the usual rectangular format",
                                            "✅ File size: 10 KB to 300 KB (wide range — most photos pass easily)",
                                            "✅ Format: JPG/JPEG only",
                                            "✅ Background: white or light-coloured",
                                            "✅ Signature: 350×90 px (also wider than most exams), 4–30 KB, JPG",
                                            "✅ Photo and signature uploaded at upsconline.nic.in during application",
                                            "✅ Carry printed copies of photo to SSB interview — same photo used throughout",
                                            "✅ Candidates who clear written exam are called for SSB at Army/Navy/Air Force Selection Centres",
                                        ].map((item) => (
                                            <li key={item} className="text-foreground leading-relaxed">{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-4">
                                    <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-1">🔒 100% Browser-Based — UPSC Portal Ready</p>
                                    <p className="text-xs text-green-700 dark:text-green-400 leading-relaxed">
                                        This tool outputs the exact 350×350 px square photo and 350×90 px signature that UPSC's NDA portal requires.
                                        All processing is in your browser — nothing is uploaded to our servers.
                                        Download your files, then upload directly to upsconline.nic.in.
                                    </p>
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

export default NDAPhotoSignatureResize2026;

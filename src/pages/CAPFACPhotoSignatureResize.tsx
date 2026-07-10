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

const CAPFACPhotoSignatureResize = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");

    const tabs = [
        { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "10–300 KB | 350×350 px" },
        { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "4–30 KB | 350×90 px" },
    ];

    const requirements = [
        { doc: "Photograph", dimension: "350 × 350 px", size: "10 KB – 300 KB", format: "JPG", bg: "White/Light", notes: "Recent passport-size, square format" },
        { doc: "Signature", dimension: "350 × 90 px", size: "4 KB – 30 KB", format: "JPG", bg: "White", notes: "Black ink, cursive on white paper" },
    ];

    const faqs = [
        {
            question: "What is the CAPF AC photo size requirement?",
            answer: "CAPF AC (Assistant Commandant) requires a passport-size photograph in JPG format, square dimensions 350×350 pixels, file size between 10 KB and 300 KB. White or light background required."
        },
        {
            question: "What is the CAPF AC signature file size?",
            answer: "CAPF AC signature must be JPG format, 350×90 pixels, between 4 KB and 30 KB. Sign in black ink on white paper in cursive/running hand."
        },
        {
            question: "Which body conducts CAPF AC exam?",
            answer: "CAPF (Central Armed Police Forces) AC (Assistant Commandant) exam is conducted by UPSC. It recruits Assistant Commandants for BSF, CRPF, CISF, ITBP, and SSB. Apply at upsc.gov.in."
        },
        {
            question: "What is the CAPF AC 2026 notification date?",
            answer: "CAPF AC 2026 notification is typically released by UPSC in April–May each year. The written exam is usually held in August. Check upsc.gov.in for the latest CAPF AC 2026 notification."
        },
        {
            question: "Is CAPF AC photo same size as NDA photo?",
            answer: "Yes. Both CAPF AC and NDA use the same UPSC online application system which requires a square 350×350 px photo and 350×90 px signature. This is different from most other exams that use 200×230 px rectangular format."
        },
        {
            question: "Is this CAPF AC photo resize tool free?",
            answer: "Yes, 100% free. No account needed. All processing is done locally in your browser — images never leave your device."
        },
    ];

    const howToSteps = [
        { text: "Select Photo or Signature tab" },
        { text: "Upload your image (JPG or PNG)" },
        { text: "CAPF AC preset (350×350 px square / 350×90 px) is auto-applied" },
        { text: "Click Resize Now" },
        { text: "Download and upload to UPSC CAPF AC application at upsc.gov.in" },
    ];

    const relatedTools = [
        { to: "/nda-2026-photo-signature-resize", label: "NDA 2026 Photo", icon: Camera },
        { to: "/upsc-signature-resize", label: "UPSC Signature", icon: Pen },
        { to: "/agniveer-agnipath-photo-signature-requirements-2026", label: "Agniveer Guide", icon: FileImage },
        { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle },
    ];

    return (
        <>
            <SEOHead
                title="CAPF AC Photo & Signature Resize Online Free — UPSC upsc.gov.in Specs"
                description="Free CAPF AC photo resize: compress photo to 10–300 KB (350×350 px square) and signature to 4–30 KB (350×90 px) for UPSC CAPF Assistant Commandant application. Instant, browser-only."
                canonicalUrl="https://signatureresize.in/capf-ac-photo-signature-resize"
                keywords="capf ac photo resize, capf assistant commandant photo size, upsc capf photo requirement, capf ac 2026 photo, capf photo 350x350 pixels, capf signature 350x90, bsf crpf cisf itbp photo resize free"
                ogType="article"
                modifiedTime="2026-06-24T08:00:00+05:30"
            />
            <SEOSchema type="HowTo" howToName="How to Resize Photo for CAPF AC" howToSteps={howToSteps} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "CAPF AC Photo Resize", url: "https://signatureresize.in/capf-ac-photo-signature-resize" },
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "WebApplication",
                    name: "CAPF AC Photo & Signature Resize",
                    url: "https://signatureresize.in/capf-ac-photo-signature-resize",
                    description: "Free tool to resize CAPF AC photo to 350×350 px (10–300 KB) and signature to 350×90 px (4–30 KB) for UPSC portal.",
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
                        <Breadcrumbs items={[{ name: "CAPF AC Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 border border-blue-500/30 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4">
                                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                                CAPF AC — BSF, CRPF, CISF, ITBP, SSB
                            </div>
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                CAPF AC Photo &amp; Signature{" "}
                                <span className="text-blue-600">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                CAPF AC is an officer-level post — graduates joining as Assistant Commandants in BSF, CRPF, CISF, ITBP, or SSB. The UPSC portal uses the same <strong>square 350×350 px photo</strong> format as NDA, which surprises most applicants used to rectangular passport-size photos. The signature is also wider: 350×90 px. Getting this wrong means your application form shows a stretched or cropped image — a bad start for a gazetted officer application.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["UPSC Portal Specs", "Square 350×350 Format", "JPG Output", "No Data Stored"].map((t) => (
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
                                <SignatureResizer title="CAPF AC Photo Compressor (350×350 px)" defaultTargetKB={100} minKB={10} maxKB={300} maxWidth={350} maxHeight={350} defaultPreset="capf-photo" />
                            )}
                            {activeTab === "signature" && (
                                <SignatureResizer title="CAPF AC Signature Compressor (350×90 px)" defaultTargetKB={15} minKB={4} maxKB={30} maxWidth={350} maxHeight={90} defaultPreset="capf-signature" />
                            )}
                            <AdContainer type="display" />
                        </div>

                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-blue-600" /> CAPF AC — Official Photo &amp; Signature Requirements
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
                                <Shield className="h-3.5 w-3.5" /> Source: UPSC CAPF AC official notification (upsc.gov.in)
                            </p>
                        </div>

                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />

                        <div className="mx-auto mt-6 max-w-4xl space-y-8">
                            <div className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-5">
                                <div className="flex gap-3">
                                    <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                                    <div className="text-sm">
                                        <p className="font-bold text-blue-800 dark:text-blue-300 mb-1">CAPF AC (Assistant Commandant) — Forces Covered</p>
                                        <p className="text-blue-700 dark:text-blue-400 leading-relaxed">
                                            CAPF AC recruitment covers <strong>BSF</strong> (Border Security Force), <strong>CRPF</strong> (Central Reserve Police Force), <strong>CISF</strong> (Central Industrial Security Force), <strong>ITBP</strong> (Indo-Tibetan Border Police), and <strong>SSB</strong> (Sashastra Seema Bal). The exam is conducted by UPSC annually. Apply at upsc.gov.in. Photo must be square 350×350 px — same as NDA format.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Deep Content: CAPF-specific — differentiates from NDA page */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-6">
                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-1">CAPF AC 2026 — Key Details</h2>
                                    <p className="text-xs text-muted-foreground mb-4">Last updated: <strong>July 10, 2026</strong> · Source: <a href="https://upsc.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">upsc.gov.in</a></p>
                                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                        {[
                                            { label: "Conducting Body", value: "UPSC (Union Public Service Commission)" },
                                            { label: "Full Form", value: "Central Armed Police Forces (Assistant Commandant)" },
                                            { label: "Eligibility", value: "Graduate degree; Age 20–25 years" },
                                            { label: "Forces Covered", value: "BSF, CRPF, CISF, ITBP, SSB (5 forces)" },
                                            { label: "Photo Size — SQUARE", value: "350×350 px, 10–300 KB, JPG" },
                                            { label: "Application Portal", value: "upsconline.nic.in" },
                                        ].map(({ label, value }) => (
                                            <div key={label} className="rounded-lg border border-border bg-muted/30 p-3">
                                                <p className="text-xs text-muted-foreground">{label}</p>
                                                <p className="font-semibold text-foreground text-sm mt-0.5">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-3">CAPF Forces — What Each Force Does</h2>
                                    <div className="overflow-x-auto rounded-xl border border-border">
                                        <table className="w-full text-sm border-collapse">
                                            <thead>
                                                <tr className="bg-gradient-to-r from-blue-700 to-blue-800 text-white">
                                                    <th className="p-3 text-left">Force</th>
                                                    <th className="p-3 text-left">Full Name</th>
                                                    <th className="p-3 text-left">Primary Role</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border">
                                                {[
                                                    { f: "BSF", n: "Border Security Force", r: "India–Pakistan & India–Bangladesh border security" },
                                                    { f: "CRPF", n: "Central Reserve Police Force", r: "Internal security, counter-insurgency, elections" },
                                                    { f: "CISF", n: "Central Industrial Security Force", r: "Security of airports, PSUs, government buildings" },
                                                    { f: "ITBP", n: "Indo-Tibetan Border Police", r: "India–China (Tibet) border patrolling & security" },
                                                    { f: "SSB", n: "Sashastra Seema Bal", r: "India–Nepal & India–Bhutan border security" },
                                                ].map(({ f, n, r }) => (
                                                    <tr key={f} className="hover:bg-muted/40">
                                                        <td className="p-3 font-bold text-foreground">{f}</td>
                                                        <td className="p-3 text-muted-foreground">{n}</td>
                                                        <td className="p-3 text-muted-foreground">{r}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-4">
                                    <p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-2">⚠️ CAPF AC vs NDA — Same Photo Size, Different Exam</p>
                                    <p className="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
                                        CAPF AC and NDA both use a <strong>350×350 px square photo</strong> on the UPSC portal — but they are entirely different exams.
                                        CAPF AC is for graduate-level candidates (20–25 years) joining as officers in paramilitary forces.
                                        NDA is for 10+2 students (16.5–19.5 years) joining the National Defence Academy for armed forces.
                                        Use this tool's CAPF AC preset — it outputs the exact 350×350 px square photo required.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-3">CAPF AC Photo &amp; Signature Checklist</h2>
                                    <ul className="space-y-1.5 text-sm">
                                        {[
                                            "✅ Photo: SQUARE 350×350 px — same UPSC portal format as NDA",
                                            "✅ File size: 10 KB to 300 KB, JPG format only",
                                            "✅ Signature: 350×90 px, 4–30 KB, JPG, black ink on white paper",
                                            "✅ Background: white or light-coloured",
                                            "✅ Apply at upsconline.nic.in — same portal as all UPSC exams",
                                            "✅ CAPF AC selection: Written exam → Physical test → Medical → Interview/Personality Test",
                                            "✅ Minimum height: 165 cm (male), 157 cm (female) — check official notification",
                                            "✅ CAPF AC officers are gazetted officers — different from Constable-level recruitment",
                                        ].map((item) => (
                                            <li key={item} className="text-foreground leading-relaxed">{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-4">
                                    <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-1">🔒 Browser-Only Processing — UPSC Portal Ready</p>
                                    <p className="text-xs text-green-700 dark:text-green-400 leading-relaxed">
                                        Your photo and signature are resized 100% in your browser using the HTML5 Canvas API.
                                        No server upload. Download your 350×350 px square photo and upload directly to upsconline.nic.in for the CAPF AC application.
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

export default CAPFACPhotoSignatureResize;

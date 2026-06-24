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

const CTETPhotoSignatureResize2026 = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");

    const tabs = [
        { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "10–100 KB | 200×230 px" },
        { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "3–30 KB | 140×60 px" },
    ];

    const requirements = [
        { doc: "Photograph", dimension: "200 × 230 px", size: "10 KB – 100 KB", format: "JPG", bg: "White/Light", notes: "Recent passport-size, 50% face coverage" },
        { doc: "Signature", dimension: "140 × 60 px", size: "3 KB – 30 KB", format: "JPG", bg: "White", notes: "Black ink on white paper; cursive only" },
    ];

    const faqs = [
        {
            question: "What is the CTET 2026 photo size requirement?",
            answer: "CTET 2026 requires a recent passport-size photograph in JPG format, dimensions 200×230 pixels, file size between 10 KB and 100 KB. The photo must have a white or light-coloured background with your face occupying at least 50% of the frame."
        },
        {
            question: "What is the CTET 2026 signature file size?",
            answer: "CTET 2026 signature must be JPG format, 140×60 pixels, between 3 KB and 30 KB. Sign with black ink on plain white paper in cursive/running hand only. Block letters are not accepted."
        },
        {
            question: "Which portal is used for CTET 2026 application?",
            answer: "CTET applications are submitted through the official NTA CTET portal at ctet.nic.in. NTA (National Testing Agency) conducts CTET twice a year — in July and December. Check ctet.nic.in for the latest notification."
        },
        {
            question: "When is CTET 2026 notification expected?",
            answer: "CTET is typically conducted twice a year. The CTET 2026 cycle I notification is expected around April–May 2026 with exams in July 2026, and CTET cycle II notification around September 2026. Check ctet.nic.in for the latest dates."
        },
        {
            question: "Can a CTET photo be in PNG format?",
            answer: "No. CTET requires JPG/JPEG format only. If you have a PNG photo, upload it to this tool — it automatically converts and outputs a properly sized JPG file."
        },
        {
            question: "Is this CTET photo resize tool free?",
            answer: "Yes, 100% free. No registration. Your images are processed entirely in your browser — nothing is uploaded to any server."
        },
    ];

    const howToSteps = [
        { text: "Select Photo or Signature tab above" },
        { text: "Upload your JPG or PNG image" },
        { text: "CTET 2026 preset (200×230 px / 140×60 px) is pre-applied" },
        { text: "Click Resize Now" },
        { text: "Download and upload to ctet.nic.in application portal" },
    ];

    const relatedTools = [
        { to: "/nta-exam-photo-signature-guidelines-2026", label: "NTA Photo Guidelines", icon: FileImage },
        { to: "/kvs-teacher-photo-signature-resize", label: "KVS Teacher Photo", icon: Camera },
        { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle },
        { to: "/compress-image-to-20kb-online", label: "Compress to 20KB", icon: Zap },
    ];

    return (
        <>
            <SEOHead
                title="CTET 2026 Photo & Signature Resize Online Free — NTA ctet.nic.in Specs"
                description="Free CTET 2026 photo resize: compress photo to 10–100 KB (200×230 px) and signature to 3–30 KB (140×60 px) as per NTA ctet.nic.in requirements. Instant, browser-only processing."
                canonicalUrl="https://signatureresize.in/ctet-2026-photo-signature-resize"
                keywords="ctet 2026 photo size, ctet photo resize, ctet signature size kb, ctet nic in photo upload, ctet 2026 application photo, ctet photo 200x230 pixels, nta ctet photo requirement, ctet signature 3kb 30kb"
                ogType="article"
                modifiedTime="2026-06-24T08:00:00+05:30"
            />
            <SEOSchema type="HowTo" howToName="How to Resize Photo for CTET 2026" howToSteps={howToSteps} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "CTET 2026 Photo Resize", url: "https://signatureresize.in/ctet-2026-photo-signature-resize" },
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "WebApplication",
                    name: "CTET 2026 Photo & Signature Resize",
                    url: "https://signatureresize.in/ctet-2026-photo-signature-resize",
                    description: "Free tool to resize CTET 2026 photo to 10–100 KB (200×230 px) and signature to 3–30 KB (140×60 px) per NTA requirements.",
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
                        <Breadcrumbs items={[{ name: "CTET 2026 Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 border border-blue-500/30 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4">
                                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                                CTET 2026 — NTA ctet.nic.in
                            </div>
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                CTET 2026 Photo &amp; Signature{" "}
                                <span className="text-blue-600">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                Compress your <strong>CTET photo to 10–100 KB</strong> (200×230 px) and{" "}
                                <strong>signature to 3–30 KB</strong> (140×60 px) — as per NTA ctet.nic.in portal requirements.
                                Browser-only processing — your images never leave your device.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["NTA Portal Specs", "JPG Output", "Instant Processing", "No Data Stored"].map((t) => (
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
                                <SignatureResizer title="CTET Photo Compressor" defaultTargetKB={50} minKB={10} maxKB={100} maxWidth={200} maxHeight={230} defaultPreset="ctet-photo" />
                            )}
                            {activeTab === "signature" && (
                                <SignatureResizer title="CTET Signature Compressor" defaultTargetKB={15} minKB={3} maxKB={30} maxWidth={140} maxHeight={60} defaultPreset="ctet-signature" />
                            )}
                            <AdContainer type="display" />
                        </div>

                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-blue-600" /> CTET 2026 — Official Photo &amp; Signature Requirements
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
                                <Shield className="h-3.5 w-3.5" /> Source: NTA CTET official notification (ctet.nic.in)
                            </p>
                        </div>

                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />

                        <div className="mx-auto mt-6 max-w-4xl space-y-8">
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-3">CTET Photo &amp; Signature — Common Mistakes to Avoid</h2>
                                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                    {[
                                        { icon: XCircle, color: "text-red-500", t: "File size outside 10–100 KB", d: "CTET portal rejects photos below 10 KB (too small/compressed) or above 100 KB. Target ~50 KB for best quality." },
                                        { icon: XCircle, color: "text-red-500", t: "Non-JPG format", d: "Only JPG accepted. Upload any format here and get a properly sized JPG output automatically." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Signature above 30 KB", d: "CTET signature limit is 30 KB. Many candidates upload full-page scans that exceed this — crop to just the signature." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Block letter or printed signature", d: "NTA requires handwritten cursive signature. Printed or block capital letters are grounds for rejection." },
                                        { icon: XCircle, color: "text-red-500", t: "Face below 50% of photo area", d: "Your face must occupy at least 50% of the photograph. Avoid wide-angle or full-body shots." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Coloured or patterned background", d: "White or very light plain background only. Studio blue/grey or gradient backgrounds are rejected." },
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
                                        <p className="font-bold text-blue-800 dark:text-blue-300 mb-1">About CTET 2026</p>
                                        <p className="text-blue-700 dark:text-blue-400 leading-relaxed">
                                            CTET (Central Teacher Eligibility Test) is conducted by NTA (National Testing Agency) twice a year for Paper I (Class 1–5) and Paper II (Class 6–8). CTET is mandatory for teaching positions in Central Government schools including KVS, NVS, and Delhi government schools. Apply at ctet.nic.in.
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

export default CTETPhotoSignatureResize2026;

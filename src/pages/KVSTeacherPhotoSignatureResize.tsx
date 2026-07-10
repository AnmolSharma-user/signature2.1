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

const KVSTeacherPhotoSignatureResize = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");

    const tabs = [
        { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "10–200 KB | 200×230 px" },
        { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "4–30 KB | 140×60 px" },
    ];

    const requirements = [
        { doc: "Photograph", dimension: "200 × 230 px", size: "10 KB – 200 KB", format: "JPG", bg: "White/Light", notes: "Recent passport-size photo" },
        { doc: "Signature", dimension: "140 × 60 px", size: "4 KB – 30 KB", format: "JPG", bg: "White", notes: "Black ink, cursive on white paper" },
    ];

    const faqs = [
        {
            question: "What is the KVS Teacher photo size requirement?",
            answer: "KVS (Kendriya Vidyalaya Sangathan) recruitment requires a passport-size photograph in JPG format, dimensions 200×230 pixels, file size between 10 KB and 200 KB. The photo should have a white or light-coloured background."
        },
        {
            question: "What is the KVS signature file size?",
            answer: "KVS signature must be JPG format, 140×60 pixels, file size between 4 KB and 30 KB. Sign with black ink on plain white paper in cursive/running hand only."
        },
        {
            question: "Which portal is used for KVS 2026 teacher recruitment?",
            answer: "KVS recruitment applications are submitted at kvsangathan.nic.in. KVS conducts recruitment for PGT (Post Graduate Teacher), TGT (Trained Graduate Teacher), and PRT (Primary Teacher) posts."
        },
        {
            question: "What posts are included in KVS Teacher Recruitment 2026?",
            answer: "KVS recruits PGT (Post Graduate Teacher for Class 11–12), TGT (Trained Graduate Teacher for Class 6–10), PRT (Primary Teacher for Class 1–5), and other non-teaching posts like Principal, Vice-Principal, and Library & Information Assistant."
        },
        {
            question: "Is CTET required for KVS teacher jobs?",
            answer: "Yes. CTET qualification is mandatory for PRT and TGT posts in KVS. Use our CTET photo resize page to prepare for the CTET exam as well."
        },
        {
            question: "Is this KVS photo resize tool free?",
            answer: "Yes, 100% free. No registration. Works entirely in your browser without uploading images to any external server."
        },
    ];

    const howToSteps = [
        { text: "Select Photo or Signature tab" },
        { text: "Upload your JPG or PNG image" },
        { text: "KVS preset (200×230 px / 140×60 px) is auto-applied" },
        { text: "Click Resize Now" },
        { text: "Download and upload to kvsangathan.nic.in" },
    ];

    const relatedTools = [
        { to: "/ctet-2026-photo-signature-resize", label: "CTET 2026 Photo", icon: Camera },
        { to: "/nta-exam-photo-signature-guidelines-2026", label: "NTA Photo Guide", icon: FileImage },
        { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle },
        { to: "/compress-image-to-20kb-online", label: "Compress to 20KB", icon: Zap },
    ];

    return (
        <>
            <SEOHead
                title="KVS Teacher Photo & Signature Resize Online Free — kvsangathan.nic.in Specs"
                description="Free KVS teacher recruitment photo resize: compress photo to 10–200 KB (200×230 px) and signature to 4–30 KB (140×60 px) for KVS PGT, TGT, PRT application portal. Instant, browser-only."
                canonicalUrl="https://signatureresize.in/kvs-teacher-photo-signature-resize"
                keywords="kvs teacher photo resize, kvs photo size kb, kvsangathan nic in photo size, kvs pgt tgt prt photo requirement, kvs 2026 photo upload, kvs signature size kb, kendriya vidyalaya photo resize free"
                ogType="article"
                modifiedTime="2026-06-24T08:00:00+05:30"
            />
            <SEOSchema type="HowTo" howToName="How to Resize Photo for KVS Teacher Recruitment" howToSteps={howToSteps} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "KVS Teacher Photo Resize", url: "https://signatureresize.in/kvs-teacher-photo-signature-resize" },
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "WebApplication",
                    name: "KVS Teacher Photo & Signature Resize",
                    url: "https://signatureresize.in/kvs-teacher-photo-signature-resize",
                    description: "Free tool to resize KVS teacher recruitment photo to 10–200 KB and signature to 4–30 KB for kvsangathan.nic.in.",
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
                        <Breadcrumbs items={[{ name: "KVS Teacher Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 border border-blue-500/30 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4">
                                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                                KVS PGT / TGT / PRT Recruitment — kvsangathan.nic.in
                            </div>
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                KVS Teacher Photo &amp; Signature{" "}
                                <span className="text-blue-600">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                KVS gives you more room on file size — <strong>10 to 200 KB</strong> for photos — which is generous compared to banking portals. What catches people out is the CTET requirement: if you're applying for PRT or TGT posts, you need a valid CTET certificate before even reaching the photo upload step. The photo itself goes onto your admit card and gets checked again at the demo lesson and interview, so it has to be a recent, clear shot on white background.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["KVS Portal Specs", "PGT / TGT / PRT", "JPG Output", "No Data Stored"].map((t) => (
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
                                <SignatureResizer title="KVS Photo Compressor" defaultTargetKB={80} minKB={10} maxKB={200} maxWidth={200} maxHeight={230} defaultPreset="kvs-photo" />
                            )}
                            {activeTab === "signature" && (
                                <SignatureResizer title="KVS Signature Compressor" defaultTargetKB={15} minKB={4} maxKB={30} maxWidth={140} maxHeight={60} defaultPreset="kvs-signature" />
                            )}
                            <AdContainer type="display" />
                        </div>

                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-blue-600" /> KVS Teacher Recruitment — Official Photo &amp; Signature Requirements
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
                                <Shield className="h-3.5 w-3.5" /> Source: KVS official recruitment notification (kvsangathan.nic.in)
                            </p>
                        </div>

                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />

                        <div className="mx-auto mt-6 max-w-4xl space-y-8">
                            <div className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-5">
                                <div className="flex gap-3">
                                    <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                                    <div className="text-sm">
                                        <p className="font-bold text-blue-800 dark:text-blue-300 mb-1">KVS Teacher Recruitment 2026</p>
                                        <p className="text-blue-700 dark:text-blue-400 leading-relaxed">
                                            Kendriya Vidyalaya Sangathan (KVS) is one of India's largest school systems with over 1,200 schools and 50,000+ teachers. KVS conducts large-scale teacher recruitment for PGT, TGT, and PRT posts. CTET/STET is mandatory for PRT and TGT posts. Applications are at kvsangathan.nic.in. Notification typically appears in June–August each year.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Deep Content: KVS-specific */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-6">
                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-1">KVS Teacher Recruitment 2026 — Key Details</h2>
                                    <p className="text-xs text-muted-foreground mb-4">Last updated: <strong>July 10, 2026</strong> · Source: <a href="https://kvsangathan.nic.in" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">kvsangathan.nic.in</a></p>
                                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                        {[
                                            { label: "Conducting Body", value: "Kendriya Vidyalaya Sangathan (KVS), MHRD" },
                                            { label: "Schools", value: "1,200+ Kendriya Vidyalayas across India & abroad" },
                                            { label: "Post Types", value: "PGT (Post Graduate Teacher), TGT, PRT, Librarian, Admin" },
                                            { label: "Application Portal", value: "kvsangathan.nic.in" },
                                            { label: "Photo Size", value: "200×230 px, 10–200 KB, JPG, white background" },
                                            { label: "Signature Size", value: "140×60 px, 4–30 KB, JPG, black ink" },
                                        ].map(({ label, value }) => (
                                            <div key={label} className="rounded-lg border border-border bg-muted/30 p-3">
                                                <p className="text-xs text-muted-foreground">{label}</p>
                                                <p className="font-semibold text-foreground text-sm mt-0.5">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-3">KVS Post-wise Eligibility — PGT vs TGT vs PRT</h2>
                                    <div className="overflow-x-auto rounded-xl border border-border">
                                        <table className="w-full text-sm border-collapse">
                                            <thead>
                                                <tr className="bg-gradient-to-r from-blue-700 to-blue-800 text-white">
                                                    <th className="p-3 text-left">Post</th>
                                                    <th className="p-3 text-left">Classes Taught</th>
                                                    <th className="p-3 text-left">Qualification</th>
                                                    <th className="p-3 text-left">CTET Required</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border">
                                                {[
                                                    { post: "PRT", cls: "Class 1–5", qual: "Senior Secondary + D.El.Ed/B.El.Ed", ctet: "Paper I mandatory" },
                                                    { post: "TGT", cls: "Class 6–10", qual: "Graduate + B.Ed in relevant subject", ctet: "Paper II mandatory" },
                                                    { post: "PGT", cls: "Class 11–12", qual: "Post Graduate + B.Ed", ctet: "Not mandatory" },
                                                    { post: "Librarian", cls: "All classes", qual: "B.Lib.Sc / M.Lib.Sc", ctet: "Not required" },
                                                ].map(({ post, cls, qual, ctet }) => (
                                                    <tr key={post} className="hover:bg-muted/40">
                                                        <td className="p-3 font-bold text-foreground">{post}</td>
                                                        <td className="p-3 text-muted-foreground">{cls}</td>
                                                        <td className="p-3 text-muted-foreground">{qual}</td>
                                                        <td className="p-3 text-muted-foreground">{ctet}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        CTET qualification is mandatory for PRT and TGT posts. If you haven't cleared CTET yet, use our <a href="/ctet-2026-photo-signature-resize" className="text-primary underline underline-offset-2">CTET 2026 photo resize tool</a> to prepare for the CTET application first.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-3">KVS Photo &amp; Signature Upload Checklist</h2>
                                    <ul className="space-y-1.5 text-sm">
                                        {[
                                            "✅ Photo: 200×230 px, 10–200 KB, JPG — wider size range than most exams",
                                            "✅ Signature: 140×60 px, 4–30 KB, JPG, black ink on white paper",
                                            "✅ Background: white or light-coloured only",
                                            "✅ Photo taken within last 3–6 months — no old passport photos",
                                            "✅ No sunglasses, no caps, no head coverings (except religious)",
                                            "✅ CTET certificate (Paper I for PRT, Paper II for TGT) must be ready before applying",
                                            "✅ Documents needed: Mark sheets, B.Ed/D.El.Ed certificate, CTET/STET, experience certificate",
                                            "✅ Selection: Written test → Demo class (teaching demonstration) → Interview",
                                        ].map((item) => (
                                            <li key={item} className="text-foreground leading-relaxed">{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-4">
                                    <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-1">🔒 Secure — Your Teaching Career Documents Stay Private</p>
                                    <p className="text-xs text-green-700 dark:text-green-400 leading-relaxed">
                                        This KVS photo resize tool processes your photo and signature 100% in your browser.
                                        No files are sent to any external server. Download the resized files and upload directly to kvsangathan.nic.in.
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

export default KVSTeacherPhotoSignatureResize;

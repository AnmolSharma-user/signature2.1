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

const BiharPolicePhotoSignatureResize = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");

    const tabs = [
        { key: "photo" as const, label: "Photo Compressor", icon: Camera, desc: "20–50 KB | 200×230 px" },
        { key: "signature" as const, label: "Signature Compressor", icon: Pen, desc: "10–40 KB | 140×60 px" },
    ];

    const requirements = [
        { doc: "Photograph", dimension: "200 × 230 px", size: "20 KB – 50 KB", format: "JPG", bg: "White", notes: "Passport-size, taken within 6 months" },
        { doc: "Signature", dimension: "140 × 60 px", size: "10 KB – 40 KB", format: "JPG", bg: "White", notes: "Black/blue ink on white paper" },
    ];

    const faqs = [
        {
            question: "What is the Bihar Police photo size requirement?",
            answer: "Bihar Police recruitment (CSBC) requires a passport-size photograph in JPG format, typically dimensions 200×230 pixels, file size between 20 KB and 50 KB. The background must be plain white, and the photo should be taken within the last 6 months."
        },
        {
            question: "What is the Bihar Police signature file size?",
            answer: "The Bihar Police signature should be in JPG format, dimensions 140×60 pixels, file size between 10 KB and 40 KB. Sign with black or blue ink on plain white paper. The signature must be clear and legible."
        },
        {
            question: "Which body conducts Bihar Police Constable recruitment?",
            answer: "Bihar Police Constable and other state police recruitment is conducted by the Central Selection Board of Constables (CSBC Bihar) at csbc.bihar.gov.in. Applications are submitted online through the CSBC portal."
        },
        {
            question: "Can I use a mobile phone to take my Bihar Police application photo?",
            answer: "Yes. Use a smartphone with a white background (white wall or A4 paper). Ensure even lighting with no shadows. Your face should fill 70–80% of the frame. Then use this free tool to compress the photo to 20–50 KB at 200×230 pixels."
        },
        {
            question: "Why is Bihar Police photo getting rejected?",
            answer: "Common rejection reasons: file above 50 KB, non-JPG format, coloured or non-white background, face occupying less than 70%, blurry image, or photo older than 6 months. This tool fixes all size and format issues automatically."
        },
        {
            question: "Is this Bihar Police photo resize tool free?",
            answer: "100% free. No account required. All processing happens locally in your browser — your photo is never uploaded to any server."
        },
    ];

    const howToSteps = [
        { text: "Select 'Photo' or 'Signature' tab" },
        { text: "Upload your JPG or PNG image" },
        { text: "Bihar Police preset is auto-applied (200×230 px / 140×60 px)" },
        { text: "Click Resize Now" },
        { text: "Download and upload to CSBC Bihar portal (csbc.bihar.gov.in)" },
    ];

    const relatedTools = [
        { to: "/up-police-photo-signature-resize", label: "UP Police Photo & Sig", icon: Camera },
        { to: "/ssc-gd-photo-signature-resize", label: "SSC GD Photo & Sig", icon: FileImage },
        { to: "/exam-photo-checker", label: "Photo Checker", icon: CheckCircle },
        { to: "/compress-image-to-20kb-online", label: "Compress to 20KB", icon: Zap },
    ];

    return (
        <>
            <SEOHead
                title="Bihar Police Photo & Signature Resize Online Free — CSBC Portal Specs"
                description="Free Bihar Police photo resize tool: compress photo to 20–50 KB (200×230 px) and signature to 10–40 KB (140×60 px) as per CSBC Bihar portal requirements. Instant, browser-only, no account needed."
                canonicalUrl="https://signatureresize.in/bihar-police-photo-signature-resize"
                keywords="bihar police photo resize, bihar police photo size kb, csbc bihar photo size, bihar police constable photo requirement, bihar police signature size, bihar police photo 20kb 50kb, bihar police application photo resize free"
                ogType="article"
                modifiedTime="2026-06-24T08:00:00+05:30"
            />
            <SEOSchema type="HowTo" howToName="How to Resize Photo for Bihar Police" howToSteps={howToSteps} />
            <SEOSchema type="BreadcrumbList" breadcrumbs={[
                { name: "Home", url: "https://signatureresize.in/" },
                { name: "Bihar Police Photo Resize", url: "https://signatureresize.in/bihar-police-photo-signature-resize" },
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "WebApplication",
                    name: "Bihar Police Photo & Signature Resize",
                    url: "https://signatureresize.in/bihar-police-photo-signature-resize",
                    description: "Free online tool to resize Bihar Police photo to 20–50 KB (200×230 px) and signature to 10–40 KB (140×60 px) per CSBC portal requirements.",
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
                        <Breadcrumbs items={[{ name: "Bihar Police Photo Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 border border-blue-500/30 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4">
                                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                                Bihar Police — CSBC Recruitment Portal
                            </div>
                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold text-foreground leading-tight">
                                Bihar Police Photo &amp; Signature{" "}
                                <span className="text-blue-600">Resize Online Free</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                Compress your <strong>Bihar Police photo to 20–50 KB</strong> (200×230 px) and{" "}
                                <strong>signature to 10–40 KB</strong> (140×60 px) — as per CSBC Bihar portal requirements.
                                Browser-only: your image never leaves your device.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                                {["CSBC Portal Specs", "JPG Output", "Instant Processing", "No Data Stored"].map((t) => (
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
                                <SignatureResizer title="Bihar Police Photo Compressor" defaultTargetKB={35} minKB={20} maxKB={50} maxWidth={200} maxHeight={230} defaultPreset="bihar-police-photo" />
                            )}
                            {activeTab === "signature" && (
                                <SignatureResizer title="Bihar Police Signature Compressor" defaultTargetKB={25} minKB={10} maxKB={40} maxWidth={140} maxHeight={60} defaultPreset="bihar-police-signature" />
                            )}
                            <AdContainer type="display" />
                        </div>

                        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <FileImage className="h-5 w-5 text-blue-600" /> Bihar Police — Official Photo &amp; Signature Requirements
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
                                <Shield className="h-3.5 w-3.5" /> Source: CSBC Bihar official notification (csbc.bihar.gov.in)
                            </p>
                        </div>

                        <AdContainer type="inarticle" className="mx-auto max-w-4xl mt-6" />

                        <div className="mx-auto mt-6 max-w-4xl space-y-8">
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-3">Why Bihar Police Portal Rejects Photos</h2>
                                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                    {[
                                        { icon: XCircle, color: "text-red-500", t: "File size above 50 KB", d: "CSBC portal strictly rejects photos above 50 KB. Always compress before uploading." },
                                        { icon: XCircle, color: "text-red-500", t: "Non-JPG format (PNG, WEBP)", d: "Only JPG/JPEG is accepted. This tool always outputs JPG regardless of input format." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Coloured or dark background", d: "Must be plain white background. Studio gradient or blue/grey backgrounds are rejected." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Face below 70% of photo", d: "Crop tightly to face + shoulders. Full-body or group photos are rejected immediately." },
                                        { icon: XCircle, color: "text-red-500", t: "Blurry or low-quality photo", d: "Use good lighting and a stable camera. Blurry images fail the biometric verification check." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Photo older than 6 months", d: "CSBC requires a recent photograph. Old photos or re-scanned old documents are rejected at DV." },
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
                                        <p className="font-bold text-blue-800 dark:text-blue-300 mb-1">About Bihar Police Recruitment</p>
                                        <p className="text-blue-700 dark:text-blue-400 leading-relaxed">
                                            Bihar Police conducts large-scale constable, driver-constable, and SI recruitments through the CSBC (Central Selection Board of Constables) at csbc.bihar.gov.in. The recruitment process includes written exam, physical efficiency test (PET), and document verification. Photo, signature, and other documents must match at all stages.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Deep Content: Recruitment Details + Physical Standards + Checklist */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-6">
                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-1">Bihar Police Recruitment 2026 — Key Details</h2>
                                    <p className="text-xs text-muted-foreground mb-4">Last updated: <strong>July 2, 2026</strong> · Source: <a href="https://csbc.bihar.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">csbc.bihar.gov.in</a></p>
                                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                        {[
                                            { label: "Conducting Body", value: "CSBC Bihar (Central Selection Board of Constables)" },
                                            { label: "Posts", value: "Constable, Driver-Constable, Fireman, Home Guard" },
                                            { label: "Exam Type", value: "Written Test + Physical Efficiency Test (PET) + Document Verification" },
                                            { label: "Application Portal", value: "csbc.bihar.gov.in" },
                                            { label: "Photo Requirement", value: "200×230 px, JPG, 20–50 KB, white background" },
                                            { label: "Signature Requirement", value: "140×60 px, JPG, 10–40 KB, black/blue ink on white" },
                                        ].map(({ label, value }) => (
                                            <div key={label} className="rounded-lg border border-border bg-muted/30 p-3">
                                                <p className="text-xs text-muted-foreground">{label}</p>
                                                <p className="font-semibold text-foreground text-sm mt-0.5">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-3">Bihar Police Constable — Physical Standards (Male/Female)</h2>
                                    <div className="overflow-x-auto rounded-xl border border-border">
                                        <table className="w-full text-sm border-collapse">
                                            <thead>
                                                <tr className="bg-gradient-to-r from-blue-700 to-blue-800 text-white">
                                                    <th className="p-3 text-left">Standard</th>
                                                    <th className="p-3 text-left">Male (General)</th>
                                                    <th className="p-3 text-left">Female (General)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border">
                                                {[
                                                    { s: "Height", m: "165 cm", f: "155 cm" },
                                                    { s: "Chest (Male)", m: "81–86 cm (5 cm expansion)", f: "N/A" },
                                                    { s: "Weight (Female)", m: "N/A", f: "48 kg minimum" },
                                                    { s: "Running", m: "1 mile in 6 min 30 sec", f: "1 mile in 8 min" },
                                                ].map(({ s, m, f }) => (
                                                    <tr key={s} className="hover:bg-muted/40">
                                                        <td className="p-3 font-medium text-foreground">{s}</td>
                                                        <td className="p-3 text-muted-foreground">{m}</td>
                                                        <td className="p-3 text-muted-foreground">{f}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2">SC/ST/OBC candidates may have relaxation in physical standards as per Bihar government rules. Check official notification for updated relaxation norms.</p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-3">Photo &amp; Signature Checklist — Bihar Police Application</h2>
                                    <ul className="space-y-2 text-sm">
                                        {[
                                            "✅ Recent passport-size photo — taken within last 6 months",
                                            "✅ Plain white background — no coloured walls or patterns",
                                            "✅ Face must fill 70–80% of the photo frame",
                                            "✅ No sunglasses, caps, or head coverings",
                                            "✅ JPG format only — NOT PNG, HEIC, or WEBP",
                                            "✅ Photo: 200×230 pixels, 20–50 KB (this tool applies exact specs)",
                                            "✅ Signature on plain white unlined paper with black or blue ink",
                                            "✅ Signature: 140×60 pixels, 10–40 KB JPG",
                                            "✅ Keep same photo for written test, PET, and document verification",
                                            "✅ Upload to csbc.bihar.gov.in — save acknowledgement after submission",
                                        ].map((item) => (
                                            <li key={item} className="flex gap-2 items-start">
                                                <span className="text-foreground leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-4">
                                    <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-1">🔒 Your Photo Stays on Your Device</p>
                                    <p className="text-xs text-green-700 dark:text-green-400 leading-relaxed">
                                        This Bihar Police photo resize tool runs 100% in your browser. Your photo and signature are never sent to any server or stored anywhere.
                                        The resizing uses the HTML5 Canvas API directly in your browser — you can confirm this by checking Network requests in your browser developer tools.
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

export default BiharPolicePhotoSignatureResize;

import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
    Pen, FileImage, Camera, Zap, CheckCircle, BookOpen, Shield,
    PenTool, Globe, Users, Info, FileText, Layers, ArrowRight, Map,
} from "lucide-react";

interface PageEntry {
    href: string;
    label: string;
    desc?: string;
    badge?: string;
}

interface Category {
    title: string;
    icon: React.ElementType;
    color: string;
    pages: PageEntry[];
}

const categories: Category[] = [
    {
        title: "🔥 New & Featured Tools",
        icon: Zap,
        color: "from-amber-500/20 to-amber-600/10 border-amber-400/40",
        pages: [
            { href: "/tnpsc-photo-compressor", label: "TNPSC Photo Compressor", desc: "Compress TNPSC OTR photo, signature & change background", badge: "TNPSC" },
            { href: "/signature-creator", label: "Signature Creator", desc: "Draw or type a digital signature", badge: "New" },
            { href: "/exam-photo-checker", label: "Exam Photo Checker", desc: "Validate your photo against exam specs", badge: "New" },
            { href: "/passport-photo-maker", label: "Passport Photo Maker", desc: "Create 2×2 passport photos instantly", badge: "New" },
            { href: "/compress-image-to-20kb-online", label: "Compress Image to 20KB", desc: "Exact KB compression for SSC, IBPS, UPSC", badge: "Hot" },
            { href: "/aadhaar-card-photo-resize", label: "Aadhaar Card Photo Resize", desc: "Resize photo for UIDAI myAadhaar portal", badge: "New" },
        ],
    },
    {
        title: "✍️ Signature Resize Tools",
        icon: Pen,
        color: "from-blue-500/20 to-blue-600/10 border-blue-400/40",
        pages: [
            { href: "/signature-resize", label: "Signature Resize", desc: "Universal signature resizer — any KB size", badge: "Popular" },
            { href: "/signature-resize-10-to-20-kb", label: "Signature 10 to 20 KB", desc: "Resize between 10–20 KB for SSC, IBPS" },
            { href: "/50kb-signature-size", label: "50KB Signature Size", desc: "Resize or compress signature to 50 KB" },
            { href: "/gate-signature-resize", label: "GATE Signature Resize", desc: "4–30KB, 160×60 px for GATE exam" },
            { href: "/ssc-mts-signature-resize", label: "SSC MTS Signature Resize", desc: "1–12KB for SSC CGL, CHSL, MTS" },
            { href: "/ntpc-signature-resize", label: "NTPC Signature Resize", desc: "10–20KB for RRB NTPC" },
            { href: "/upsc-signature-resize", label: "UPSC Signature Resize", desc: "4–20KB for UPSC Civil Services, NDA, CDS" },
            { href: "/jee-signature-resize", label: "JEE Signature Resize", desc: "10–100KB for JEE Main / Advanced" },
            { href: "/uti-pan-resize", label: "UTI PAN Resize", desc: "Signature & photo for UTI PAN application" },
            { href: "/thumb-impression-resize", label: "Thumb Impression Resize", desc: "Compress thumb impression for exams" },
        ],
    },
    {
        title: "📷 Photo Resize Tools",
        icon: Camera,
        color: "from-green-500/20 to-green-600/10 border-green-400/40",
        pages: [
            { href: "/tnpsc-photo-compressor", label: "TNPSC Photo Compressor", desc: "TNPSC OTR photo & signature resize + BG changer" },
            { href: "/gate-photo-resize", label: "GATE Photo Resize", desc: "5–200KB for GATE exam applications" },
            { href: "/gds-photo-signature-resize", label: "GDS Photo & Signature", desc: "India Post GDS photo & signature resize" },
            { href: "/neet-photo-signature-resize", label: "NEET Photo & Signature", desc: "10–200KB photo & 4–30KB signature for NEET" },
            { href: "/ibps-photo-signature-resize", label: "IBPS Photo & Signature", desc: "20–50KB photo for IBPS PO, Clerk, RRB" },
            { href: "/rrb-group-d-photo-signature-resize", label: "RRB Group D Resize", desc: "Photo, signature, thumb for RRB Group D 2026", badge: "2026" },
            { href: "/pan-card-photo-signature-resize", label: "PAN Card Photo Resize", desc: "Resize photo/signature for NSDL/UTI PAN" },
            { href: "/photo-resize-for-admit-card-mark-sheet", label: "Admit Card Photo Resize", desc: "Resize photos for admit cards & mark sheets" },
            { href: "/aadhaar-card-photo-resize", label: "Aadhaar Card Photo Resize", desc: "Under 35KB for UIDAI myAadhaar portal" },
            { href: "/resize-passport-photo-us-visa-ds-160", label: "US Visa DS-160 Photo", desc: "2×2 inch photo for US nonimmigrant visa" },
            { href: "/bulk-resize", label: "Bulk Resize", desc: "Resize multiple images at once" },
        ],
    },
    {
        title: "🌐 Exam-Specific Tools",
        icon: FileImage,
        color: "from-purple-500/20 to-purple-600/10 border-purple-400/40",
        pages: [
            { href: "/ssc-cgl-photo-signature-upload-guide-2026", label: "SSC CGL Guide 2026", desc: "SSC CGL/CHSL photo & signature upload" },
            { href: "/sbi-po-clerk-photo-signature-resize-guide-2026", label: "SBI PO/Clerk Guide 2026", desc: "SBI PO & Clerk photo and signature specs" },
            { href: "/nta-exam-photo-signature-guidelines-2026", label: "NTA Exam Guidelines 2026", desc: "Photo & signature guidelines for all NTA exams" },
            { href: "/agniveer-agnipath-photo-signature-requirements-2026", label: "Agniveer Photo Guide 2026", desc: "Agnipath / Agniveer photo & signature specs" },
            { href: "/cuet-ug-photo-signature-upload-guide-2026", label: "CUET UG Photo Guide 2026", desc: "NTA CUET UG portal upload requirements" },
            { href: "/rrb-ntpc-2026-photo-signature-upload-guide", label: "RRB NTPC 2026 Guide", desc: "Photo & signature for RRB NTPC 11th Phase" },
            { href: "/resize-photo-signature-uscis-immigration-forms", label: "USCIS Immigration Forms", desc: "Photo & signature for USCIS I-765, I-131 forms" },
        ],
    },
    {
        title: "📖 Guides & Blog",
        icon: BookOpen,
        color: "from-teal-500/20 to-teal-600/10 border-teal-400/40",
        pages: [
            { href: "/blog", label: "Blog & Guides", desc: "All expert guides for exam aspirants" },
            { href: "/how-to-scan-signature-for-online-forms", label: "How to Scan Signature", desc: "Phone & flatbed scanning guide" },
            { href: "/exam-photo-signature-requirements-2026", label: "Exam Requirements 2026", desc: "Photo & signature specs for all exams" },
            { href: "/signature-upload-errors-and-fixes", label: "Upload Error Fixes", desc: "Fix the 6 most common portal errors" },
            { href: "/upsc-triple-signature-guide", label: "UPSC Triple Signature", desc: "How to scan 3 signatures in one image" },
            { href: "/how-to-take-passport-photo-at-home-for-exams", label: "Passport Photo at Home", desc: "Exam-ready passport photo with your phone" },
            { href: "/jpg-vs-png-for-government-exam-forms", label: "JPG vs PNG for Exams", desc: "Which format to use — explained clearly" },
            { href: "/create-digital-signature-without-scanner", label: "Digital Signature Without Scanner", desc: "Draw a digital signature from your phone" },
            { href: "/crop-signature-from-full-page-scan", label: "Crop Signature from Scan", desc: "Extract signature from a full-page scan" },
            { href: "/why-exam-portal-rejecting-photo-10-reasons", label: "10 Photo Rejection Reasons", desc: "Common portal errors and how to fix them" },
            { href: "/is-it-safe-to-resize-signature-online", label: "Is It Safe to Resize Online?", desc: "Privacy & security of browser-based tools" },
            { href: "/image-dpi-vs-kb-vs-pixels-exam-portals", label: "DPI vs KB vs Pixels Guide", desc: "What these terms mean for exam uploads" },
            { href: "/signature-photo-white-background-phone", label: "White Background on Phone", desc: "Get a white background photo using only your phone" },
            { href: "/digital-signature-vs-wet-signature-government-portals", label: "Digital vs Wet Signature", desc: "Differences explained for government portals" },
            { href: "/photo-rejection-reasons", label: "Photo Rejection Reasons", desc: "Why photos get rejected and what to do" },
            { href: "/why-signature-rejected-10kb-20kb-fix-2026", label: "Signature Rejected Fix 2026", desc: "Fix signature rejections at 10–20 KB" },
        ],
    },
    {
        title: "🏢 Company",
        icon: Info,
        color: "from-slate-500/20 to-slate-600/10 border-slate-400/40",
        pages: [
            { href: "/about-us", label: "About Us", desc: "Who we are and our mission" },
            { href: "/contact", label: "Contact", desc: "Get in touch with our team" },
            { href: "/privacy-policy", label: "Privacy Policy", desc: "How we handle your data" },
            { href: "/terms-of-service", label: "Terms of Service", desc: "Usage terms and conditions" },
            { href: "/disclaimer", label: "Disclaimer", desc: "Legal disclaimers" },
        ],
    },
];

const SitemapPage = () => {
    const totalPages = categories.reduce((sum, c) => sum + c.pages.length, 0);

    return (
        <>
            <SEOHead
                title="Sitemap — All Pages & Tools | SignatureResize.in"
                description={`Browse all ${totalPages}+ pages on SignatureResize.in — free signature & photo resize tools, exam guides, and resources for TNPSC, SSC, UPSC, IBPS, GATE, NEET, RRB and more.`}
                canonicalUrl="https://signatureresize.in/sitemap"
                keywords="signatureresize sitemap, all tools, signature resize tools list, photo resize tools india"
            />

            <SEOSchema
                type="BreadcrumbList"
                breadcrumbs={[
                    { name: "Home", url: "https://signatureresize.in/" },
                    { name: "Sitemap", url: "https://signatureresize.in/sitemap" },
                ]}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background py-10 sm:py-14">
                    <div className="pointer-events-none absolute -top-16 -right-16 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
                    <div className="container mx-auto px-4 relative">
                        <Breadcrumbs items={[{ name: "Sitemap" }]} />
                        <div className="mx-auto max-w-2xl text-center mt-4">
                            <div className="mb-4 flex justify-center">
                                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary ring-1 ring-primary/20">
                                    <Map className="h-4 w-4" />
                                    Complete Site Directory
                                </span>
                            </div>
                            <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-3">
                                Sitemap — All Pages & Tools
                            </h1>
                            <p className="text-muted-foreground text-sm sm:text-base">
                                Every page on SignatureResize.in — <strong>{totalPages}+ pages</strong> organized by category.
                                Find the exact tool or guide you need instantly.
                            </p>
                            {/* Quick category jump links */}
                            <div className="mt-5 flex flex-wrap justify-center gap-2">
                                {categories.map((cat) => (
                                    <a
                                        key={cat.title}
                                        href={`#${cat.title.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`}
                                        className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground hover:border-primary hover:text-primary transition-all duration-200"
                                    >
                                        {cat.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <main className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-6xl space-y-10">
                            {categories.map((cat) => {
                                const CatIcon = cat.icon;
                                const anchorId = cat.title.replace(/[^a-z0-9]/gi, "-").toLowerCase();
                                return (
                                    <section key={cat.title} id={anchorId}>
                                        {/* Category heading */}
                                        <div className={`mb-5 flex items-center gap-3 rounded-xl border bg-gradient-to-r ${cat.color} px-5 py-3`}>
                                            <CatIcon className="h-5 w-5 text-foreground/70 shrink-0" />
                                            <h2 className="text-lg font-bold text-foreground">{cat.title}</h2>
                                            <span className="ml-auto text-xs text-muted-foreground font-medium">{cat.pages.length} pages</span>
                                        </div>

                                        {/* Pages grid */}
                                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                            {cat.pages.map((page) => (
                                                <Link
                                                    key={page.href}
                                                    to={page.href}
                                                    className="group flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5 transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 hover:shadow-md"
                                                >
                                                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0 transition-transform group-hover:translate-x-1" />
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 flex-wrap">
                                                            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                                                                {page.label}
                                                            </span>
                                                            {page.badge && (
                                                                <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                                                                    {page.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                        {page.desc && (
                                                            <p className="mt-0.5 text-xs text-muted-foreground leading-snug line-clamp-2">
                                                                {page.desc}
                                                            </p>
                                                        )}
                                                        <p className="mt-1 text-[11px] text-muted-foreground/60 font-mono">
                                                            signatureresize.in{page.href}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </section>
                                );
                            })}

                            {/* XML Sitemap note */}
                            <div className="rounded-2xl border border-border bg-card/60 p-6 flex items-start gap-4">
                                <Globe className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-foreground mb-1">XML Sitemap for Search Engines</p>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        For search engine crawlers and Google Search Console, our machine-readable XML sitemap is available at{" "}
                                        <a
                                            href="https://signatureresize.in/sitemap.xml"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline font-medium"
                                        >
                                            signatureresize.in/sitemap.xml
                                        </a>
                                        . This HTML sitemap is intended for human visitors.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default SitemapPage;

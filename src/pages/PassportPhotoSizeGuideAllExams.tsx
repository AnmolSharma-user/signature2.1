import { Link } from "react-router-dom";
import { CheckCircle, FileImage, Search, Download, Info } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const PassportPhotoSizeGuideAllExams = () => {
    const faqs = [
        {
            question: "What is the most common passport photo size for Indian government exams?",
            answer: "The most common specification is 200×230 pixels, JPG format, 20–50 KB file size. This applies to IBPS PO/Clerk, SBI PO/Clerk, SSC CGL/CHSL, RRB NTPC, and many other national exams. Signature is commonly 140×60 pixels, 10–20 KB.",
        },
        {
            question: "Is the photo size different for SSC and UPSC?",
            answer: "SSC exams (CGL, CHSL, GD) typically require photos in the 20–50 KB range. UPSC is different — the UPSC Civil Services Mains form requires larger photos (300×400 pixels, up to 300 KB). Always check the specific notification as UPSC specifications can vary by stage.",
        },
        {
            question: "What size photo does NEET require in 2026?",
            answer: "NTA NEET 2026 requires a passport photo between 10 KB and 200 KB in JPG format. Additionally, NEET requires a 4×6 inch postcard-size photograph (scanned at 200 DPI, JPG, 50–300 KB) for the admit card. These are two separate photo requirements.",
        },
        {
            question: "Does every state exam use the same photo specs as central exams?",
            answer: "No. State exams (BPSC, MPSC, TNPSC, UPPSC) often have their own specifications. For example, TNPSC allows photos up to 200 KB while UPPSC has its own composite photo-signature specifications for the OTR portal. Always check state-specific notifications.",
        },
        {
            question: "Can I use the same photo for multiple exams?",
            answer: "Only if the photo meets all requirements for each exam (same format, size, background, and within 3 months). Different exams have different KB limits, so you may need to compress the same original photo to different file sizes. Our resize tool can create multiple versions from one original.",
        },
        {
            question: "What does '200×230 pixels' mean in cm or inches?",
            answer: "200×230 pixels at 72 DPI is approximately 2.8×3.2 cm or 1.1×1.3 inches on screen. At 200 DPI (print quality), it's 1×1.15 inches. The pixel dimension is what matters for digital uploads — the physical size only matters for printed photos. Government portals validate pixels, not physical size.",
        },
    ];

    const examSpecs = [
        {
            exam: "SSC CGL 2026",
            category: "SSC",
            photoSize: "20–50 KB",
            photoDimensions: "200×230 px",
            signatureSize: "10–20 KB",
            signatureDimensions: "140×60 px",
            format: "JPG",
            nameDateRequired: true,
            link: "/ssc-cgl-photo-signature-upload-guide-2026",
        },
        {
            exam: "SSC CHSL 2026",
            category: "SSC",
            photoSize: "20–50 KB",
            photoDimensions: "200×230 px",
            signatureSize: "10–20 KB",
            signatureDimensions: "140×60 px",
            format: "JPG",
            nameDateRequired: true,
            link: "/ssc-chsl-photo-signature-guide-2026",
        },
        {
            exam: "SSC GD 2026",
            category: "SSC",
            photoSize: "20–50 KB",
            photoDimensions: "200×230 px",
            signatureSize: "10–20 KB",
            signatureDimensions: "140×60 px",
            format: "JPG",
            nameDateRequired: true,
            link: "/ssc-gd-photo-signature-resize",
        },
        {
            exam: "IBPS PO 2026",
            category: "Banking",
            photoSize: "20–50 KB",
            photoDimensions: "200×230 px",
            signatureSize: "10–20 KB",
            signatureDimensions: "140×60 px",
            format: "JPG",
            nameDateRequired: false,
            link: "/ibps-po-clerk-photo-signature-guide-2026",
        },
        {
            exam: "IBPS Clerk 2026",
            category: "Banking",
            photoSize: "20–50 KB",
            photoDimensions: "200×230 px",
            signatureSize: "10–20 KB",
            signatureDimensions: "140×60 px",
            format: "JPG",
            nameDateRequired: false,
            link: "/ibps-po-clerk-photo-signature-guide-2026",
        },
        {
            exam: "SBI PO/Clerk 2026",
            category: "Banking",
            photoSize: "20–50 KB",
            photoDimensions: "200×230 px",
            signatureSize: "10–20 KB",
            signatureDimensions: "140×60 px",
            format: "JPG",
            nameDateRequired: false,
            link: "/sbi-po-clerk-photo-signature-resize-guide-2026",
        },
        {
            exam: "RRB NTPC 2026",
            category: "Railway",
            photoSize: "20–50 KB",
            photoDimensions: "200×230 px",
            signatureSize: "10–40 KB",
            signatureDimensions: "140×60 px",
            format: "JPG",
            nameDateRequired: false,
            link: "/rrb-ntpc-2026-photo-signature-upload-guide",
        },
        {
            exam: "RRB Group D",
            category: "Railway",
            photoSize: "20–50 KB",
            photoDimensions: "200×230 px",
            signatureSize: "10–40 KB",
            signatureDimensions: "140×60 px",
            format: "JPG",
            nameDateRequired: false,
            link: "/rrb-group-d-photo-signature-resize",
        },
        {
            exam: "RPF Constable/SI",
            category: "Railway",
            photoSize: "20–50 KB",
            photoDimensions: "200×230 px",
            signatureSize: "10–20 KB",
            signatureDimensions: "140×60 px",
            format: "JPG",
            nameDateRequired: false,
            link: "/rpf-constable-si-photo-signature-guide-2026",
        },
        {
            exam: "Agniveer 2026",
            category: "Defence",
            photoSize: "10–40 KB",
            photoDimensions: "200×230 px",
            signatureSize: "4–30 KB",
            signatureDimensions: "140×60 px",
            format: "JPG",
            nameDateRequired: false,
            link: "/agniveer-agnipath-photo-signature-requirements-2026",
        },
        {
            exam: "NEET 2026 (NTA)",
            category: "Medical",
            photoSize: "10–200 KB",
            photoDimensions: "3.5×4.5 cm",
            signatureSize: "4–30 KB",
            signatureDimensions: "3.5×1.5 cm",
            format: "JPG",
            nameDateRequired: false,
            link: "/nta-exam-photo-signature-guidelines-2026",
        },
        {
            exam: "JEE Main 2026 (NTA)",
            category: "Engineering",
            photoSize: "10–200 KB",
            photoDimensions: "3.5×4.5 cm",
            signatureSize: "4–30 KB",
            signatureDimensions: "3.5×1.5 cm",
            format: "JPG",
            nameDateRequired: false,
            link: "/nta-exam-photo-signature-guidelines-2026",
        },
        {
            exam: "CUET UG 2026",
            category: "Entrance",
            photoSize: "10–200 KB",
            photoDimensions: "3.5×4.5 cm",
            signatureSize: "4–30 KB",
            signatureDimensions: "3.5×1.5 cm",
            format: "JPG",
            nameDateRequired: false,
            link: "/cuet-ug-photo-signature-upload-guide-2026",
        },
        {
            exam: "GATE 2026",
            category: "Engineering",
            photoSize: "Up to 400 KB",
            photoDimensions: "3.5×4.5 cm",
            signatureSize: "Up to 400 KB",
            signatureDimensions: "2×7 cm",
            format: "JPG",
            nameDateRequired: false,
            link: "/gate-photo-resize",
        },
        {
            exam: "UPPSC RO/ARO",
            category: "State PSC",
            photoSize: "10–50 KB",
            photoDimensions: "Composite format",
            signatureSize: "Composite",
            signatureDimensions: "OTR Portal",
            format: "JPG",
            nameDateRequired: false,
            link: "/uppsc-ro-aro-photo-signature-rules-2026",
        },
    ];

    const categoryColors: Record<string, string> = {
        SSC: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
        Banking: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
        Railway: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        Defence: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
        Medical: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
        Engineering: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
        Entrance: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        "State PSC": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
    };

    return (
        <>
            <SEOHead
                title="Passport Photo Size Guide for All Indian Exams 2026 — Complete Chart"
                description="Complete comparison chart of passport photo and signature size requirements for SSC, IBPS, SBI, RRB, NEET, JEE, GATE, Agniveer, and UPSC exams in 2026. One reference for all exams."
                canonicalUrl="https://signatureresize.in/passport-photo-size-guide-all-indian-exams-2026"
                keywords="passport photo size all exams 2026, SSC IBPS photo size chart, exam photo KB comparison, government exam photo requirements India 2026, photo signature size guide"
                ogImage="https://signatureresize.in/assest/passport-photo-size-guide-all-exams-2026.png"
            />
            <SEOSchema
                type="Article"
                data={{
                    headline: "Passport Photo & Signature Size Guide for All Indian Exams 2026",
                    description: "Master comparison chart of photo and signature specifications across 15+ Indian government and competitive exams for 2026.",
                    url: "https://signatureresize.in/passport-photo-size-guide-all-indian-exams-2026",
                }}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600/10 via-accent to-background py-10 sm:py-16">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs
                            items={[
                                { name: "Blog", href: "/blog" },
                                { name: "Passport Photo Size Guide — All Indian Exams 2026" },
                            ]}
                        />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-indigo-600/10 px-4 py-2 text-sm font-medium text-indigo-600">
                                MASTER GUIDE · 15+ EXAMS · 2026 UPDATED
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Passport Photo Size for{" "}
                                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">
                                    All Indian Exams 2026
                                </span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg leading-relaxed">
                                SSC, IBPS, SBI, RRB, NEET, JEE, GATE, Agniveer — every exam's exact photo and signature
                                specifications in one place. Bookmark this page.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5"><Search className="h-4 w-4 text-primary" /> 15+ Exams Covered</span>
                                <span className="flex items-center gap-1.5"><FileImage className="h-4 w-4 text-primary" /> Photo & Signature Specs</span>
                                <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-500" /> 2026 Updated</span>
                            </div>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-5xl">

                            {/* Table of Contents */}
                            <div className="mb-10 rounded-xl border border-border bg-card shadow-sm overflow-hidden">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="toc" className="border-b-0">
                                        <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors">
                                            <h2 className="text-lg font-bold text-foreground flex items-center gap-2 m-0">
                                                <Info className="h-5 w-5 text-primary" /> Table of Contents
                                            </h2>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-6 pb-6 pt-2">
                                            <ul className="space-y-3 text-sm text-muted-foreground">
                                                {[
                                                    { href: "#master-chart", label: "Master Comparison Chart — All 15+ Exams" },
                                                    { href: "#ssc", label: "SSC Exams (CGL, CHSL, GD, MTS)" },
                                                    { href: "#banking", label: "Banking Exams (IBPS, SBI)" },
                                                    { href: "#railway", label: "Railway Exams (RRB NTPC, Group D, RPF)" },
                                                    { href: "#defence", label: "Defence Exams (Agniveer, NDA)" },
                                                    { href: "#entrance", label: "Entrance Exams (NEET, JEE, GATE, CUET)" },
                                                    { href: "#common-rules", label: "Universal Rules That Apply to All Exams" },
                                                    { href: "#tools", label: "Free Tools for Any Exam" },
                                                ].map((item, i) => (
                                                    <li key={i}>
                                                        <a href={item.href} className="hover:text-primary hover:underline flex items-center gap-2">
                                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">{i + 1}</span>
                                                            {item.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            {/* Featured Image */}
                            <figure className="mb-10">
                                <img
                                    src="/assest/passport-photo-size-guide-all-exams-2026.png"
                                    alt="Complete passport photo and signature size guide for all Indian government exams 2026 — SSC IBPS RRB NEET Agniveer comparison chart"
                                    className="w-full rounded-xl border border-border shadow-md"
                                    width="1200"
                                    height="630"
                                    loading="eager"
                                    decoding="async"
                                />
                                <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                                    Passport photo &amp; signature specs for all 15+ Indian exams in 2026 — complete comparison chart.
                                </figcaption>
                            </figure>

                            {/* EEAT Intro */}
                            <section className="mb-10 prose prose-neutral dark:prose-invert max-w-none">
                                <p className="text-lg text-foreground leading-relaxed font-medium">
                                    Applying to multiple competitive exams this year? You've probably noticed that every exam has
                                    slightly different photo and signature specifications — and searching for each one separately
                                    is a time-consuming chase across different websites and PDFs. This guide puts everything in one place.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    We've compiled photo and signature specs for 15+ major Indian exams for 2026, from SSC and
                                    banking exams to NEET and Agniveer. While most central exams have converged on similar
                                    specifications (200×230 px, 20–50 KB, JPG), there are important differences that can
                                    get your application rejected — particularly for NTA exams (NEET, JEE), GATE, and state PSC exams.
                                </p>
                            </section>

                            <AdContainer type="display" className="mb-8" />

                            {/* Master Chart */}
                            <section id="master-chart" className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    Master Comparison Chart — All Indian Exams 2026
                                </h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-xs sm:text-sm">
                                        <thead className="bg-muted/50">
                                            <tr>
                                                <th className="px-3 py-3 text-left font-semibold text-foreground whitespace-nowrap">Exam</th>
                                                <th className="px-3 py-3 text-left font-semibold text-foreground whitespace-nowrap">Photo KB</th>
                                                <th className="px-3 py-3 text-left font-semibold text-foreground whitespace-nowrap">Photo Px</th>
                                                <th className="px-3 py-3 text-left font-semibold text-foreground whitespace-nowrap">Sig. KB</th>
                                                <th className="px-3 py-3 text-left font-semibold text-foreground whitespace-nowrap">Sig. Px</th>
                                                <th className="px-3 py-3 text-left font-semibold text-foreground whitespace-nowrap">Format</th>
                                                <th className="px-3 py-3 text-left font-semibold text-foreground whitespace-nowrap">Name+Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {examSpecs.map((row, i) => (
                                                <tr key={i} className="border-t border-border hover:bg-muted/20 transition-colors">
                                                    <td className="px-3 py-3">
                                                        <div className="flex flex-col gap-1">
                                                            <Link to={row.link} className="font-semibold text-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                                                                {row.exam}
                                                            </Link>
                                                            <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium w-fit ${categoryColors[row.category] || ""}`}>
                                                                {row.category}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="px-3 py-3 text-foreground font-medium whitespace-nowrap">{row.photoSize}</td>
                                                    <td className="px-3 py-3 text-muted-foreground whitespace-nowrap">{row.photoDimensions}</td>
                                                    <td className="px-3 py-3 text-foreground font-medium whitespace-nowrap">{row.signatureSize}</td>
                                                    <td className="px-3 py-3 text-muted-foreground whitespace-nowrap">{row.signatureDimensions}</td>
                                                    <td className="px-3 py-3 text-muted-foreground">{row.format}</td>
                                                    <td className="px-3 py-3">
                                                        {row.nameDateRequired ? (
                                                            <CheckCircle className="h-4 w-4 text-green-500" />
                                                        ) : (
                                                            <span className="text-muted-foreground text-xs">No</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-3 text-xs text-muted-foreground">
                                    Always verify against the official notification for your specific exam cycle. Requirements can vary between cycles or phases.
                                </p>
                            </section>

                            <AdContainer type="infeed" className="my-8" />

                            {/* SSC Section */}
                            <section id="ssc" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">SSC Exams — Photo & Signature Guide</h2>
                                <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5 mb-4">
                                    <p className="text-foreground font-semibold text-sm mb-2">Key SSC Rule: Name & Date Required on Photo</p>
                                    <p className="text-muted-foreground text-sm">
                                        All SSC exams (CGL, CHSL, GD, MTS) require the candidate's name and the date the photo was taken to be printed below the face area in the photo. This is a digital text overlay inside the image — not a sticker or handwritten note.
                                    </p>
                                </div>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { label: "Photo", value: "20–50 KB, 200×230 px, JPG" },
                                        { label: "Signature", value: "10–20 KB, 140×60 px, JPG" },
                                        { label: "Background", value: "Plain white or very light" },
                                        { label: "Name+Date", value: "Required — inside photo, below face" },
                                    ].map((item, i) => (
                                        <div key={i} className="rounded-lg border border-border bg-card p-4">
                                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{item.label}</p>
                                            <p className="text-sm font-semibold text-foreground mt-1">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {[
                                        { title: "SSC CGL Guide", href: "/ssc-cgl-photo-signature-upload-guide-2026" },
                                        { title: "SSC CHSL Guide", href: "/ssc-chsl-photo-signature-guide-2026" },
                                        { title: "SSC GD Guide", href: "/ssc-gd-photo-signature-resize" },
                                    ].map((link) => (
                                        <Link key={link.href} to={link.href} className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary hover:border-primary/50 transition-colors">
                                            → {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* Banking Section */}
                            <section id="banking" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Banking Exams — IBPS & SBI Guide</h2>
                                <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 mb-4">
                                    <p className="text-foreground font-semibold text-sm mb-2">Key Banking Rule: Live Webcam Photo + No Capital Signatures</p>
                                    <p className="text-muted-foreground text-sm">
                                        IBPS and sometimes SBI require a live webcam photo during registration — different from the scanned passport photo upload. Also, signatures in block/capital letters are strictly rejected for all banking exams.
                                    </p>
                                </div>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { label: "Photo", value: "20–50 KB, 200×230 px, JPG" },
                                        { label: "Signature", value: "10–20 KB, 140×60 px, JPG" },
                                        { label: "Live Webcam", value: "Required for IBPS PO/Clerk" },
                                        { label: "Signature Style", value: "Cursive only — capitals rejected" },
                                    ].map((item, i) => (
                                        <div key={i} className="rounded-lg border border-border bg-card p-4">
                                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{item.label}</p>
                                            <p className="text-sm font-semibold text-foreground mt-1">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {[
                                        { title: "IBPS PO/Clerk Guide", href: "/ibps-po-clerk-photo-signature-guide-2026" },
                                        { title: "SBI PO/Clerk Guide", href: "/sbi-po-clerk-photo-signature-resize-guide-2026" },
                                    ].map((link) => (
                                        <Link key={link.href} to={link.href} className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary hover:border-primary/50 transition-colors">
                                            → {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* Railway Section */}
                            <section id="railway" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Railway Exams — RRB & RPF Guide</h2>
                                <div className="grid gap-3 sm:grid-cols-2 mb-3">
                                    {[
                                        { label: "Photo", value: "20–50 KB, 200×230 px, JPG" },
                                        { label: "Signature (NTPC)", value: "10–40 KB, 140×60 px, JPG" },
                                        { label: "Signature (RPF)", value: "10–20 KB, 140×60 px, JPG" },
                                        { label: "Signature Style", value: "Running/cursive handwriting required" },
                                    ].map((item, i) => (
                                        <div key={i} className="rounded-lg border border-border bg-card p-4">
                                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{item.label}</p>
                                            <p className="text-sm font-semibold text-foreground mt-1">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { title: "RRB NTPC 2026 Guide", href: "/rrb-ntpc-2026-photo-signature-upload-guide" },
                                        { title: "RRB Group D Guide", href: "/rrb-group-d-photo-signature-resize" },
                                        { title: "RPF Constable/SI Guide", href: "/rpf-constable-si-photo-signature-guide-2026" },
                                    ].map((link) => (
                                        <Link key={link.href} to={link.href} className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary hover:border-primary/50 transition-colors">
                                            → {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* Defence */}
                            <section id="defence" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Defence Exams — Agniveer & NDA</h2>
                                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 mb-3">
                                    <p className="text-foreground font-semibold text-sm mb-2">Agniveer is Different: Photo is 10–40 KB (not 20–50 KB)</p>
                                    <p className="text-muted-foreground text-sm">
                                        Indian Army Agniveer photo range is 10–40 KB — slightly different from the standard 20–50 KB used by SSC and IBPS. Signature is also different: 4–30 KB instead of 10–20 KB. Don't use one size for all recruitment processes.
                                    </p>
                                </div>
                                <Link to="/agniveer-agnipath-photo-signature-requirements-2026" className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary hover:border-primary/50 transition-colors">
                                    → Agniveer Complete Guide
                                </Link>
                            </section>

                            {/* Entrance */}
                            <section id="entrance" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Entrance Exams — NEET, JEE, GATE, CUET</h2>
                                <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-5 mb-4">
                                    <p className="text-foreground font-semibold text-sm mb-2">NTA Exams Have Higher KB Limits — Up to 200 KB for Photos</p>
                                    <p className="text-muted-foreground text-sm">
                                        NTA exams (NEET, JEE, CUET) allow much larger photo files — up to 200 KB — compared to SSC and IBPS's 50 KB limit. NEET also requires a separate postcard-sized photo (4×6 inch, up to 300 KB). GATE allows up to 400 KB. Do not assume all exams have the same limits.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { title: "NEET/JEE (NTA) Guide", href: "/nta-exam-photo-signature-guidelines-2026" },
                                        { title: "CUET UG Guide", href: "/cuet-ug-photo-signature-upload-guide-2026" },
                                        { title: "GATE Photo Resize", href: "/gate-photo-resize" },
                                    ].map((link) => (
                                        <Link key={link.href} to={link.href} className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary hover:border-primary/50 transition-colors">
                                            → {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            <AdContainer type="inarticle" className="my-8" />

                            {/* Universal Rules */}
                            <section id="common-rules" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Universal Rules That Apply to All Exams
                                </h2>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {[
                                        { title: "Always JPG/JPEG", desc: "No exam in India accepts PNG, WEBP, HEIC, or PDF for photo uploads. Always convert to JPG before uploading." },
                                        { title: "White or Light Background", desc: "Every single exam requires a plain white or very light background. Coloured or outdoor backgrounds are rejected universally." },
                                        { title: "No Glasses, Caps, or Filters", desc: "Sunglasses, caps, and heavy photo filters are prohibited across all exams. Some allow regular glasses if eyes are clearly visible." },
                                        { title: "Photo Must Be Recent (3 Months)", desc: "All exams require photos taken within the last 3 months. Do not use old studio photos — even if they look professional." },
                                        { title: "Cursive Signature Only", desc: "No exam accepts block/capital letter signatures. Your natural cursive handwriting is required for all exams." },
                                        { title: "Don't Transfer via WhatsApp", desc: "WhatsApp converts images to WEBP and compresses them, often corrupting the file format. Transfer via AirDrop, Drive, or cable." },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                                            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                                            <div>
                                                <p className="font-semibold text-foreground text-sm">{item.title}</p>
                                                <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Deep dive */}
                            <section className="mb-10 rounded-xl border border-border bg-muted/20 p-6">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Why Photo Requirements Differ Between Exams</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Photo specifications are driven by the portal technology and the administrative purpose of the photo.
                                    SSC and IBPS use NIC-hosted portals that were designed to handle massive volume (10 lakh+ applications)
                                    with minimal server storage — hence the strict 50 KB limit. NTA is a newer technology stack
                                    that can accommodate larger files, hence 200 KB. GATE allows 400 KB because it has relatively
                                    fewer applicants (10–13 lakh) and uses IIT-managed infrastructure.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    Understanding this underlying logic helps you prepare for future exams too. When a new exam announces
                                    photo requirements, you can often predict the range based on who's running the portal (NIC, NTA, IIT).
                                </p>
                            </section>

                            {/* CTA Tools */}
                            <section id="tools" className="mb-12 rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Free Tools — Works for Any Exam</h2>
                                <p className="mb-5 text-muted-foreground">All processing in your browser. Nothing uploaded to our servers.</p>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <Link to="/signature-resize" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <FileImage className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Signature Resize Tool</p>
                                            <p className="text-xs text-muted-foreground">Custom KB & pixel target for any exam</p>
                                        </div>
                                    </Link>
                                    <Link to="/compress-image-to-20kb-online" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <Download className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Photo Compress Tool</p>
                                            <p className="text-xs text-muted-foreground">20KB, 50KB, 200KB — set any target</p>
                                        </div>
                                    </Link>
                                    <Link to="/exam-photo-checker" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <Search className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Exam Photo Checker</p>
                                            <p className="text-xs text-muted-foreground">Verify size, format & dimensions</p>
                                        </div>
                                    </Link>
                                    <Link to="/add-name-date-to-photo" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Add Name & Date to Photo</p>
                                            <p className="text-xs text-muted-foreground">Required for SSC CGL, CHSL, UPSC</p>
                                        </div>
                                    </Link>
                                </div>
                            </section>

                            {/* Author */}
                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">SR</div>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">SignatureResize.in Editorial Team</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Last reviewed: March 2026 · Compiled from 15+ official exam notifications</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                                            This master guide is maintained by the SignatureResize.in team. All specifications are compiled from official
                                            exam notifications and cross-checked against live portals. Requirements can change each cycle — always verify
                                            against the official notification for your specific exam before submitting.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </article>

                <AdContainer type="multiplex" />
                <FAQSection faqs={faqs} />
                <AdSenseDisclaimer />
                <Footer />
            </div>
        </>
    );
};

export default PassportPhotoSizeGuideAllExams;

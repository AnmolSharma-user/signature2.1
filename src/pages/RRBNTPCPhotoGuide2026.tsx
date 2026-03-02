import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdContainer from "@/components/AdContainer";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, CheckCircle, AlertTriangle, Train } from "lucide-react";

const RRBNTPCPhotoGuide2026 = () => {
    const faqs = [
        {
            question: "What is the RRB NTPC 2026 photo size requirement?",
            answer: "RRB NTPC 2026 requires a passport-size color photograph in JPG/JPEG format. The file size must be between 20KB and 50KB. Dimensions should be 200×230 pixels (3.5cm × 4.5cm). Plain white background is mandatory. The photo must not be older than 3 months.",
        },
        {
            question: "What is the RRB NTPC 2026 signature size in KB?",
            answer: "The RRB NTPC 2026 signature must be in JPG/JPEG format with a file size between 10KB and 40KB. The signature should be on a white background with black ink. Use a running hand (cursive) — capital/block letters are not allowed.",
        },
        {
            question: "How to resize photo for RRB NTPC 2026 portal?",
            answer: "Use our free RRB-specific resize tool at signatureresize.in. Upload your photo, select the RRB NTPC preset, and click Resize. The tool outputs a JPG under 50KB with 200×230px dimensions — exactly what the RRB OJAS portal requires.",
        },
        {
            question: "What is RRB NTPC 11th Phase 2026 notification date?",
            answer: "The RRB NTPC 11th Phase 2026 recruitment notification was released in early 2026. Candidates should check the official RRB regional websites (rrbcdg.gov.in, rrbchennai.gov.in, etc.) for the latest vacancy count and application dates for their region.",
        },
        {
            question: "What documents are required for RRB NTPC 2026 application?",
            answer: "RRB NTPC 2026 online application requires: passport-size photo (20–50KB JPG), handwritten signature (10–40KB JPG), left thumb impression (10–40KB JPG), educational certificates, caste/category certificate if applicable, and a valid email and phone number for OTP.",
        },
        {
            question: "Can I use the same photo for multiple RRB exams?",
            answer: "Yes, if the photo meets the specifications (JPG, 20–50KB, 200×230px, white background, recent) and is not older than 3 months, you can use it across multiple RRB exam applications in the same cycle.",
        },
    ];

    const specRows = [
        { doc: "Passport Photo", size: "20 KB – 50 KB", dims: "200 × 230 px", fmt: "JPG / JPEG", bg: "White only" },
        { doc: "Signature", size: "10 KB – 40 KB", dims: "140 × 60 px", fmt: "JPG / JPEG", bg: "White paper" },
        { doc: "Left Thumb", size: "10 KB – 40 KB", dims: "100 × 100 px", fmt: "JPG / JPEG", bg: "White paper" },
    ];

    const commonMistakes = [
        { no: "1", mistake: "File size above 50KB for photo", fix: "Use our RRB resize tool to compress to 35KB" },
        { no: "2", mistake: "PNG format instead of JPG", fix: "Our tool auto-converts PNG → JPG on output" },
        { no: "3", mistake: "Background is grey or cream", fix: "Reshoot on a pure white sheet of paper behind you" },
        { no: "4", mistake: "Signature in BLOCK LETTERS", fix: "Re-sign in cursive/running hand on white paper" },
        { no: "5", mistake: "Photo older than 3 months", fix: "Get a fresh photo — portals may verify against biometrics" },
        { no: "6", mistake: "Face not clearly visible", fix: "Ensure no shadows, glasses glare, or obstruction" },
    ];

    return (
        <>
            <SEOHead
                title="RRB NTPC 2026 Photo & Signature Upload Guide | Specs, Resize & Common Errors"
                description="Complete guide for RRB NTPC 11th Phase 2026: photo size (20–50KB), signature size (10–40KB), thumb impression requirements, upload steps, and common error fixes. Free resize tool included."
                canonicalUrl="https://signatureresize.in/rrb-ntpc-2026-photo-signature-upload-guide"
                keywords="rrb ntpc 2026 photo size, rrb ntpc signature size, rrb ntpc 2026 photo upload, rrb ntpc 11th phase 2026, rrb ntpc photo format, railway ntpc photo signature guide, rrb ntpc 2026 application photo"
                ogImage="https://signatureresize.in/assest/rrb-ntpc-2026-photo-signature-guide.png"
                ogType="article"
                publishedTime="2026-03-03T00:50:00+05:30"
                modifiedTime="2026-03-03T00:50:00+05:30"
                articleAuthor="SignatureResize Editorial Team"
            />

            {/* Article Schema for Discover */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "RRB NTPC 2026 Photo & Signature Upload Guide — Specs, Resize & Common Errors",
                        "description": "Complete guide for RRB NTPC 11th Phase 2026 photo and signature upload requirements.",
                        "image": {
                            "@type": "ImageObject",
                            "url": "https://signatureresize.in/assest/rrb-ntpc-2026-photo-signature-guide.png",
                            "width": 1200,
                            "height": 630
                        },
                        "author": { "@id": "https://signatureresize.in/#author" },
                        "publisher": { "@id": "https://signatureresize.in/#organization" },
                        "datePublished": "2026-03-03T00:50:00+05:30",
                        "dateModified": "2026-03-03T00:50:00+05:30",
                        "mainEntityOfPage": "https://signatureresize.in/rrb-ntpc-2026-photo-signature-upload-guide",
                        "speakable": {
                            "@type": "SpeakableSpecification",
                            "cssSelector": [".article-summary", "h1", "h2"]
                        }
                    })
                }}
            />

            {/* BreadcrumbList Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://signatureresize.in" },
                            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://signatureresize.in/blog" },
                            { "@type": "ListItem", "position": 3, "name": "RRB NTPC 2026 Photo & Signature Guide", "item": "https://signatureresize.in/rrb-ntpc-2026-photo-signature-upload-guide" }
                        ]
                    })
                }}
            />

            <div className="min-h-screen bg-background text-foreground">
                <Header />

                {/* Hero Banner */}
                <section className="bg-gradient-to-br from-blue-700/15 via-primary/5 to-background py-8 sm:py-12">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs
                            items={[
                                { name: "Blog", href: "/blog" },
                                { name: "RRB NTPC 2026 Guide" },
                            ]}
                        />
                        <div className="mx-auto max-w-4xl">
                            {/* Category badge */}
                            <div className="mb-4 flex flex-wrap gap-2 items-center">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
                                    <Train className="h-3 w-3" />
                                    Exam Specific
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <Calendar className="h-3 w-3" />
                                    March 3, 2026
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <Clock className="h-3 w-3" />
                                    7 min read
                                </span>
                            </div>

                            <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-foreground">
                                RRB NTPC 2026 Photo & Signature Upload Guide — Exact Specs, Resize Tool & Common Errors
                            </h1>

                            {/* Hero Image — 1200×630 for Google Discover */}
                            <figure className="mb-6 overflow-hidden rounded-xl border border-border shadow-lg">
                                <img
                                    src="/assest/rrb-ntpc-2026-photo-signature-guide.png"
                                    alt="RRB NTPC 2026 Photo and Signature Upload Guide — exact specifications for photo (20–50KB) and signature (10–40KB) with free online resize tool"
                                    className="w-full object-cover"
                                    width="1200"
                                    height="630"
                                    loading="eager"
                                    decoding="async"
                                />
                                <figcaption className="bg-muted/50 px-4 py-2 text-xs text-muted-foreground text-center">
                                    RRB NTPC 2026 recruitment requires uploading photo, signature, and thumb impression in exact JPG format and KB sizes.
                                </figcaption>
                            </figure>

                            {/* Author Bio */}
                            <div className="mb-6 flex items-center gap-3 rounded-lg border border-border bg-card/60 p-3">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-base font-bold text-primary">SR</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">SignatureResize Editorial Team</p>
                                    <p className="text-xs text-muted-foreground">Exam Preparation Expert • Updated March 3, 2026</p>
                                </div>
                            </div>

                            <AdContainer type="display" />
                        </div>
                    </div>
                </section>

                {/* Article Body */}
                <article className="py-8 md:py-12">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            {/* Quick Summary */}
                            <div className="article-summary mb-8 rounded-xl border-l-4 border-primary bg-primary/5 p-5">
                                <h2 className="mb-3 text-base font-bold text-foreground flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-primary" />
                                    Quick Summary — RRB NTPC 2026 Specs
                                </h2>
                                <ul className="space-y-1.5 text-sm text-muted-foreground">
                                    <li><strong className="text-foreground">Photo:</strong> JPG, 20–50 KB, 200×230 px, white background</li>
                                    <li><strong className="text-foreground">Signature:</strong> JPG, 10–40 KB, 140×60 px, black ink on white</li>
                                    <li><strong className="text-foreground">Thumb Impression:</strong> JPG, 10–40 KB, ~100×100 px, left thumb</li>
                                    <li><strong className="text-foreground">Portal:</strong> RRB OJAS (ojas.gov.in / regional RRB sites)</li>
                                </ul>
                                <div className="mt-4">
                                    <Link
                                        to="/rrb-group-d-photo-signature-resize"
                                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                                    >
                                        Resize Now for Free <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>

                            <div className="prose-content space-y-8 text-muted-foreground text-sm sm:text-base leading-relaxed">

                                <section>
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                                        RRB NTPC 2026 — Why Photo Upload Matters
                                    </h2>
                                    <p>
                                        The <strong className="text-foreground">Railway Recruitment Board (RRB) NTPC 11th Phase 2026</strong> recruitment is one of India's most anticipated job notifications. With lakhs of graduate-level vacancies across categories like Junior Clerk cum Typist, Accounts Clerk, Junior Time Keeper, Station Master, and Goods Guard — the competition is intense and the application process is strict.
                                    </p>
                                    <p className="mt-3">
                                        One area where many candidates fail even before the exam begins: the photo and signature upload. The RRB online portal <strong className="text-foreground">automatically rejects</strong> applications where the uploaded photo or signature doesn't meet exact file size and format requirements. There's no warning — the form just doesn't proceed.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                                        RRB NTPC 2026 — Exact Photo & Signature Specifications
                                    </h2>
                                    <div className="overflow-x-auto rounded-xl border border-border">
                                        <table className="w-full text-sm border-collapse">
                                            <thead>
                                                <tr className="bg-primary text-primary-foreground">
                                                    <th className="p-3 text-left">Document</th>
                                                    <th className="p-3 text-left">Size (KB)</th>
                                                    <th className="p-3 text-left">Dimensions</th>
                                                    <th className="p-3 text-left">Format</th>
                                                    <th className="p-3 text-left">Background</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border">
                                                {specRows.map((row, i) => (
                                                    <tr key={i} className="hover:bg-muted/50">
                                                        <td className="p-3 font-medium text-foreground">{row.doc}</td>
                                                        <td className="p-3">{row.size}</td>
                                                        <td className="p-3">{row.dims}</td>
                                                        <td className="p-3">{row.fmt}</td>
                                                        <td className="p-3">{row.bg}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <AdContainer type="inarticle" />

                                <section>
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                                        How to Prepare Your Photo for RRB NTPC 2026
                                    </h2>
                                    <ol className="ml-5 list-decimal space-y-3">
                                        <li>
                                            <strong className="text-foreground">Get a recent passport photo</strong> taken by a professional photographer. The photo must be taken within the last 3 months. A plain white wall or white sheet as background works best.
                                        </li>
                                        <li>
                                            <strong className="text-foreground">Check the background</strong> — it must be plain white. No gradient, no patterned wallpaper, no studio backgrounds with shadows. If unsure, use our{" "}
                                            <Link to="/signature-photo-white-background-phone" className="text-primary hover:underline">white background guide</Link>.
                                        </li>
                                        <li>
                                            <strong className="text-foreground">Verify your face coverage</strong> — your face should occupy 70–80% of the frame. Both ears should be visible. No sunglasses. Spectacles without glare are acceptable.
                                        </li>
                                        <li>
                                            <strong className="text-foreground">Transfer the photo to your computer</strong> or use the tool directly on your phone browser.
                                        </li>
                                        <li>
                                            <strong className="text-foreground">Resize using our free tool</strong> at{" "}
                                            <Link to="/rrb-group-d-photo-signature-resize" className="text-primary hover:underline">signatureresize.in/rrb-group-d-photo-signature-resize</Link>. Select "Photo" tab, upload, and download the output (JPG, ~35KB, 200×230px).
                                        </li>
                                    </ol>
                                </section>

                                <section>
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                                        How to Prepare Your Signature for RRB NTPC 2026
                                    </h2>
                                    <ol className="ml-5 list-decimal space-y-3">
                                        <li>Take a white unruled sheet of A4 paper and a <strong className="text-foreground">black ballpoint pen</strong></li>
                                        <li>Sign your name in <strong className="text-foreground">running hand (cursive)</strong>. Capital letters or block printing are NOT accepted</li>
                                        <li>Keep the signature well within the page — don't let it touch edges</li>
                                        <li>Photograph the signature with your phone camera in good lighting. Crop tightly around the signature</li>
                                        <li>Use the <strong className="text-foreground">Signature tab</strong> on our tool to resize to 10–40KB with 140×60px dimensions</li>
                                        <li>The signature you submit must <strong className="text-foreground">match what you sign on exam day</strong> — exam centres compare uploads against live signatures</li>
                                    </ol>
                                </section>

                                <section>
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                                        6 Most Common RRB NTPC Upload Errors (and Fixes)
                                    </h2>
                                    <div className="space-y-3">
                                        {commonMistakes.map((item) => (
                                            <div key={item.no} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                                                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold">
                                                    {item.no}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-foreground flex items-center gap-1.5">
                                                        <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                                                        {item.mistake}
                                                    </p>
                                                    <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1.5">
                                                        <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0" />
                                                        Fix: {item.fix}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <AdContainer type="infeed" />

                                <section>
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                                        RRB NTPC 2026 — Vacancies Overview
                                    </h2>
                                    <p>
                                        The RRB NTPC 11th Phase 2026 notification covers graduate-level Non-Technical Popular Category posts. Major vacancies include:
                                    </p>
                                    <div className="mt-3 grid sm:grid-cols-2 gap-3">
                                        {[
                                            { post: "Junior Clerk cum Typist", level: "Level 2" },
                                            { post: "Accounts Clerk cum Typist", level: "Level 2" },
                                            { post: "Junior Time Keeper", level: "Level 3" },
                                            { post: "Train Clerk", level: "Level 3" },
                                            { post: "Commercial cum Ticket Clerk", level: "Level 3" },
                                            { post: "Traffic Assistant", level: "Level 4" },
                                            { post: "Goods Guard", level: "Level 5" },
                                            { post: "Senior Commercial cum Ticket Clerk", level: "Level 5" },
                                            { post: "Senior Clerk cum Typist", level: "Level 5" },
                                            { post: "Junior Account Assistant cum Typist", level: "Level 5" },
                                            { post: "Senior Time Keeper", level: "Level 5" },
                                            { post: "Station Master", level: "Level 6" },
                                        ].map((v) => (
                                            <div key={v.post} className="flex justify-between items-center rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm">
                                                <span className="text-foreground font-medium">{v.post}</span>
                                                <span className="text-xs text-muted-foreground">{v.level}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-sm">
                                        <strong className="text-foreground">Important:</strong> Always check your regional RRB website (rrbcdg.gov.in, rrbbhopal.gov.in, rrbchennai.gov.in, etc.) for exact vacancy counts and application deadlines for each region.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Related Resources</h2>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {[
                                            { to: "/rrb-group-d-photo-signature-resize", label: "RRB Group D Photo & Signature Resize Tool" },
                                            { to: "/ntpc-signature-resize", label: "RRB NTPC Signature Resize Tool" },
                                            { to: "/exam-photo-signature-requirements-2026", label: "All Exam Requirements 2026" },
                                            { to: "/signature-upload-errors-and-fixes", label: "Signature Upload Errors & Fixes" },
                                        ].map((link) => (
                                            <Link
                                                key={link.to}
                                                to={link.to}
                                                className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 text-sm font-medium text-primary hover:border-primary hover:shadow-sm transition-all"
                                            >
                                                <ArrowRight className="h-4 w-4 shrink-0" />
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* Extended Author Bio */}
                            <div className="mt-10 rounded-xl border border-border bg-card p-6 flex items-start gap-4">
                                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-primary">SR</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">SignatureResize Editorial Team</p>
                                    <p className="text-xs text-muted-foreground mt-1 mb-2">Exam Preparation Expert | signatureresize.in</p>
                                    <p className="text-sm text-muted-foreground">
                                        Our team reviews official RRB recruitment notifications and portal guidelines to provide accurate, up-to-date information for exam aspirants. This guide was compiled from RRB official notifications available at rrbcdg.gov.in and rrbonlinereg.in.{" "}
                                        <Link to="/about-us" className="text-primary hover:underline">About us →</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <FAQSection faqs={faqs} />
                <AdContainer type="multiplex" className="container mx-auto px-4 mb-6" />
                <Footer />
            </div>
        </>
    );
};

export default RRBNTPCPhotoGuide2026;

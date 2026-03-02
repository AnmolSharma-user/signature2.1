import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdContainer from "@/components/AdContainer";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const SignatureRejection10KB20KBFix = () => {
    const faqs = [
        {
            question: "Why is my signature getting rejected even though it looks fine?",
            answer: "The most common reason is that the file size is outside the accepted KB range. Even if the signature looks visually correct, if the file is 25KB when the portal requires 10–20KB, it will be rejected. Use our signature resize tool to hit the exact target KB required by your exam portal.",
        },
        {
            question: "My signature is 15KB but still getting rejected — why?",
            answer: "If your signature is within the 10–20KB range but still rejected, check the file format. Many portals only accept JPG/JPEG — PNG is rejected even if the KB size is correct. Also check the pixel dimensions — some portals require exactly 140×60 pixels. Use our tool which outputs JPG with correct dimensions automatically.",
        },
        {
            question: "How to resize signature to exactly 10KB to 20KB?",
            answer: "Upload your signature to our free resize tool at signatureresize.in. Set the target to 15KB (the safe midpoint), click Resize. Our binary search algorithm compresses your image to within ±1KB of the target. Download the output and upload to your exam portal.",
        },
        {
            question: "Is signature in block letters rejected by exam portals?",
            answer: "Yes. Most Indian exam portals (SSC, IBPS, UPSC, RRB) explicitly state that signatures must be in running hand (cursive). Block letters or printed signatures are rejected during document verification at the exam centre, even if they were accepted during online upload.",
        },
        {
            question: "My signature is clear and correct size but shows 'invalid format' error?",
            answer: "This means the file is likely a PNG or WEBP file, even if it has a .jpg extension. Open your image application, look at the actual format settings. Use our tool — it always outputs a genuine JPG file regardless of the input format, solving this issue.",
        },
        {
            question: "What is the signature size for SSC CGL 2026?",
            answer: "SSC CGL 2026 requires a signature in JPG format between 1KB and 12KB (typically 10–12KB is safest). Dimensions should be approximately 140×60 pixels. Use our SSC MTS Signature Resize tool which has the SSC spec preset built in.",
        },
        {
            question: "Can I use a typed/digital signature for government exam portals?",
            answer: "No. Indian exam portals require a handwritten signature scanned or photographed. Typed fonts, digital drawing apps, or typed-and-printed signatures are rejected at the document verification stage even if they upload successfully online.",
        },
    ];

    const reasons = [
        {
            no: 1,
            title: "File Size Outside the Accepted Range",
            desc: "Every portal has a minimum AND maximum KB. A 25KB signature may be rejected by SSC (max 12KB) just as easily as a 5KB one (below minimum). Use a tool that targets exact KB — quality percent sliders are unreliable.",
            fix: "Use our Signature Resize tool. Set the target KB to the midpoint of your exam's range (e.g., 15KB for a 10–20KB requirement).",
            severity: "red",
        },
        {
            no: 2,
            title: "Wrong File Format — PNG vs JPG",
            desc: "PNG files appear identical to JPG files on screen. But exam portals perform MIME-type checks. A PNG file with a .jpg extension is detected and rejected instantly with 'Invalid Format' error.",
            fix: "Our tool always outputs a real JPG file, regardless of your upload format. PNG, WEBP, BMP — all converted to JPG on output.",
            severity: "red",
        },
        {
            no: 3,
            title: "Signature Too Small in the Frame",
            desc: "You photographed the signature but left too much white space around it. The resulting usable area of the signature might be only 30% of the image, making it appear very thin on the admit card.",
            fix: "After scanning or photographing, crop tightly around the signature boundary before uploading to the resize tool.",
            severity: "orange",
        },
        {
            no: 4,
            title: "Block Letters Instead of Running Hand",
            desc: "UPSC, SSC, IBPS, and RRB all explicitly require signatures in running hand (cursive). Block letters are rejected during document verification at the exam hall, which can lead to disqualification.",
            fix: "Re-sign on white paper in your natural cursive handwriting. Your signature does not need to be legible — it just cannot be block-printed.",
            severity: "red",
        },
        {
            no: 5,
            title: "Image is Blurred or Low Resolution",
            desc: "Photographing the signature from a distance, in poor light, or at an angle causes blurring. The portal may accept it during upload, but document verification officers can reject it.",
            fix: "Use your phone camera in good lighting, hold steady, and photograph from directly above the paper. Or use a flatbed scanner at 150+ DPI.",
            severity: "orange",
        },
        {
            no: 6,
            title: "Grey or Shadowed Background",
            desc: "Photographing a signature on an actual sheet of paper often picks up a slight grey tint from ambient lighting or paper texture. Some portals require a pure white background (#FFFFFF).",
            fix: "Check our guide on signature white background using phone. Brief phone editing (brightness boost) can clean up the background.",
            severity: "orange",
        },
        {
            no: 7,
            title: "Pixel Dimensions Don't Match",
            desc: "Some portals check exact dimensions. Uploading a 500×500px JPG that is 15KB may still fail if the portal expects exactly 140×60 pixels. The KB size alone is not enough.",
            fix: "Use exam-specific resize presets in our tool. Each preset has both the target KB AND the correct pixel dimensions preset for you.",
            severity: "yellow",
        },
    ];

    const severityColors: Record<string, string> = {
        red: "border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/30",
        orange: "border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-950/30",
        yellow: "border-yellow-200 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-950/30",
    };

    const examLimits = [
        { exam: "SSC CGL / CHSL / MTS", range: "1 KB – 12 KB", target: "10 KB" },
        { exam: "IBPS PO / Clerk", range: "10 KB – 20 KB", target: "15 KB" },
        { exam: "SBI PO / Clerk", range: "10 KB – 20 KB", target: "15 KB" },
        { exam: "UPSC (all exams)", range: "20 KB – 100 KB", target: "50 KB" },
        { exam: "RRB Group D / NTPC", range: "10 KB – 40 KB", target: "20 KB" },
        { exam: "NEET UG", range: "4 KB – 30 KB", target: "15 KB" },
        { exam: "GATE", range: "4 KB – 30 KB", target: "15 KB" },
        { exam: "India Post GDS", range: "10 KB – 20 KB", target: "15 KB" },
    ];

    return (
        <>
            <SEOHead
                title="Why Signature Gets Rejected in 10KB–20KB Range + Fix Guide 2026"
                description="7 reasons your signature upload fails even when it's 10–20KB. Learn the exact fixes for each error — wrong format, block letters, grey background, wrong pixels. Free resize tool included."
                canonicalUrl="https://signatureresize.in/why-signature-rejected-10kb-20kb-fix-2026"
                keywords="signature rejected 10kb 20kb, signature upload error, why signature rejected exam portal, signature file format error, signature size rejected, fix signature upload error, signature resize to 10kb, government exam signature rejection"
                ogImage="https://signatureresize.in/assest/signature-rejected-10kb-20kb-fix-guide.png"
                ogType="article"
                publishedTime="2026-03-03T00:50:00+05:30"
                modifiedTime="2026-03-03T00:50:00+05:30"
                articleAuthor="SignatureResize Editorial Team"
            />

            {/* Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Why Your Signature Gets Rejected in 10KB–20KB Range — 7 Causes & Fixes",
                        "description": "7 reasons your signature upload fails and exact fixes for each error, including wrong format, block letters, grey background.",
                        "image": {
                            "@type": "ImageObject",
                            "url": "https://signatureresize.in/assest/signature-rejected-10kb-20kb-fix-guide.png",
                            "width": 1200,
                            "height": 630
                        },
                        "author": { "@id": "https://signatureresize.in/#author" },
                        "publisher": { "@id": "https://signatureresize.in/#organization" },
                        "datePublished": "2026-03-03T00:50:00+05:30",
                        "dateModified": "2026-03-03T00:50:00+05:30",
                        "mainEntityOfPage": "https://signatureresize.in/why-signature-rejected-10kb-20kb-fix-2026",
                        "speakable": {
                            "@type": "SpeakableSpecification",
                            "cssSelector": [".article-summary", "h1", "h2"]
                        }
                    })
                }}
            />

            {/* FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                        }))
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
                            { "@type": "ListItem", "position": 3, "name": "Signature Rejection Fix 2026", "item": "https://signatureresize.in/why-signature-rejected-10kb-20kb-fix-2026" }
                        ]
                    })
                }}
            />

            <div className="min-h-screen bg-background text-foreground">
                <Header />

                {/* Hero */}
                <section className="bg-gradient-to-br from-red-600/10 via-orange-500/5 to-background py-8 sm:py-12">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs
                            items={[
                                { name: "Blog", href: "/blog" },
                                { name: "Signature Rejection Fix Guide" },
                            ]}
                        />
                        <div className="mx-auto max-w-4xl">
                            <div className="mb-4 flex flex-wrap gap-2 items-center">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 dark:bg-red-900/30 px-3 py-1 text-xs font-semibold text-red-700 dark:text-red-400">
                                    <AlertTriangle className="h-3 w-3" />
                                    Troubleshooting
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <Calendar className="h-3 w-3" />
                                    March 3, 2026
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <Clock className="h-3 w-3" />
                                    5 min read
                                </span>
                            </div>

                            <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-foreground">
                                Why Your Signature Gets Rejected in the 10KB–20KB Range — 7 Causes & Exact Fixes (2026)
                            </h1>

                            {/* Hero Image — 1200×630 for Discover */}
                            <figure className="mb-6 overflow-hidden rounded-xl border border-border shadow-lg">
                                <img
                                    src="/assest/signature-rejected-10kb-20kb-fix-guide.png"
                                    alt="Why signature gets rejected on government exam portals — 7 causes and fixes for 10KB to 20KB signature upload errors"
                                    className="w-full object-cover"
                                    width="1200"
                                    height="630"
                                    loading="eager"
                                    decoding="async"
                                />
                                <figcaption className="bg-muted/50 px-4 py-2 text-xs text-muted-foreground text-center">
                                    Signature upload errors are one of the top reasons for application form rejection on Indian exam portals.
                                </figcaption>
                            </figure>

                            {/* Author */}
                            <div className="mb-6 flex items-center gap-3 rounded-lg border border-border bg-card/60 p-3">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-base font-bold text-primary">SR</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">SignatureResize Editorial Team</p>
                                    <p className="text-xs text-muted-foreground">Updated March 3, 2026 • Based on official exam portal documentation</p>
                                </div>
                            </div>

                            <AdContainer type="display" />
                        </div>
                    </div>
                </section>

                {/* Article Body */}
                <article className="py-8 md:py-12">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl space-y-10 text-muted-foreground text-sm sm:text-base leading-relaxed">

                            {/* Summary box */}
                            <div className="article-summary rounded-xl border-l-4 border-primary bg-primary/5 p-5">
                                <p className="font-bold text-foreground mb-2">What you'll learn from this guide:</p>
                                <ul className="space-y-1 text-sm">
                                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0" />The 7 real reasons signature uploads fail (even when file size looks correct)</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0" />Exact quick fixes for every error type</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500 shrink-0" />Safe target KB for every major exam (SSC, IBPS, UPSC, RRB)</li>
                                </ul>
                                <div className="mt-4">
                                    <Link
                                        to="/signature-resize"
                                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                                    >
                                        Fix My Signature Now <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>

                            <section>
                                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                                    Why the 10–20KB Range is a Known Problem Zone
                                </h2>
                                <p>
                                    The 10KB to 20KB range is specified by most of India's biggest exam portals — IBPS, SBI, India Post GDS, and RRB use this range for signatures. The problem: most image editing tools and phone cameras do NOT give you direct kilobyte control. You save as JPG and hope for the best. Often you land at 22KB (too big) or 8KB (too small) — and the portal rejects both.
                                </p>
                                <p className="mt-3">
                                    But KB size is only ONE of the reasons for rejection. Our team has logged the most common errors from candidates filing applications for SSC, IBPS, RRB, and UPSC exams. Below are all 7, ranked by frequency.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-5">
                                    The 7 Reasons Your Signature Gets Rejected
                                </h2>
                                <div className="space-y-4">
                                    {reasons.map((reason) => (
                                        <div key={reason.no} className={`rounded-xl border-2 p-5 ${severityColors[reason.severity]}`}>
                                            <div className="mb-2 flex items-start gap-3">
                                                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-background/50 text-sm font-bold text-foreground">
                                                    {reason.no}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-foreground flex items-center gap-2">
                                                        <XCircle className="h-4 w-4 text-red-500 shrink-0" />
                                                        {reason.title}
                                                    </p>
                                                    <p className="mt-1.5 text-sm">{reason.desc}</p>
                                                    <div className="mt-3 flex items-start gap-2 rounded-lg bg-background/50 p-3">
                                                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                                        <p className="text-sm font-medium text-foreground">{reason.fix}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <AdContainer type="inarticle" />

                            <section>
                                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                                    Safe Target KB for Every Major Exam
                                </h2>
                                <p className="mb-4">
                                    When in doubt about the exact KB to target, use the midpoint of the allowed range. Here's a quick reference:
                                </p>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="bg-primary text-primary-foreground">
                                                <th className="p-3 text-left">Exam</th>
                                                <th className="p-3 text-left">Allowed Range</th>
                                                <th className="p-3 text-left">Safe Target</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border">
                                            {examLimits.map((row, i) => (
                                                <tr key={i} className="hover:bg-muted/50">
                                                    <td className="p-3 font-medium text-foreground">{row.exam}</td>
                                                    <td className="p-3">{row.range}</td>
                                                    <td className="p-3">
                                                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                                                            {row.target}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-3 text-sm">
                                    Always verify with the official portal before submitting. Use{" "}
                                    <Link to="/exam-photo-signature-requirements-2026" className="text-primary hover:underline">our 2026 exam requirements guide</Link> for full listing.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">How to Fix Every Signature Error in 60 Seconds</h2>
                                <ol className="ml-5 list-decimal space-y-3">
                                    <li>Go to <Link to="/signature-resize" className="text-primary hover:underline font-medium">signatureresize.in/signature-resize</Link></li>
                                    <li>Upload your current signature image (any format accepted)</li>
                                    <li>Set the target KB to the midpoint of your exam range (e.g., 15KB for 10–20KB)</li>
                                    <li>Click <strong className="text-foreground">Resize Now</strong> — takes 1–2 seconds</li>
                                    <li>Download the output — it will be a genuine JPG file at exactly your target KB</li>
                                    <li>Upload to your exam portal</li>
                                </ol>
                            </section>

                            <section>
                                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Related Guides</h2>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        { to: "/signature-upload-errors-and-fixes", label: "All Signature Upload Errors & Fixes" },
                                        { to: "/signature-resize", label: "Free Signature Resize Tool" },
                                        { to: "/signature-photo-white-background-phone", label: "Get White Background on Phone" },
                                        { to: "/how-to-scan-signature-for-online-forms", label: "How to Scan Signature Properly" },
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

                            {/* Extended Author */}
                            <div className="rounded-xl border border-border bg-card p-6 flex items-start gap-4">
                                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-primary">SR</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">SignatureResize Editorial Team</p>
                                    <p className="text-xs text-muted-foreground mt-1 mb-2">Exam Preparation Expert | signatureresize.in</p>
                                    <p className="text-sm text-muted-foreground">
                                        This guide is based on official portal documentation from SSC.nic.in, IBPS.in, UPSCONLINE.nic.in, and support queries from candidates who faced upload errors during 2024–2026 exam cycles.{" "}
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

export default SignatureRejection10KB20KBFix;

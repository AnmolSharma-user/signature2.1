import { Link } from "react-router-dom";
import { BookOpen, CheckCircle, AlertTriangle, ExternalLink, FileText, Camera, Pen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const ExamPhotoSignatureGuide = () => {
    const faqs = [
        {
            question: "Which government exam has the strictest signature requirements?",
            answer: "SSC exams (CGL, CHSL, MTS) have the strictest requirements with signatures needing to be between just 1KB to 12KB — a very narrow range. GATE is also strict with 4KB-30KB. NEET and IBPS are comparatively more lenient with ranges up to 30KB and 20KB respectively.",
        },
        {
            question: "Do all government exams require JPG format for signature?",
            answer: "Yes, nearly all major Indian government exam portals (GATE, SSC, UPSC, NEET, IBPS, RRB, GDS) require signatures and photos in JPG/JPEG format. Some older portals may accept PNG, but JPG is universally accepted and produces smaller file sizes.",
        },
        {
            question: "What happens if my signature exceeds the KB limit?",
            answer: "The exam portal will reject the upload immediately and show an error like 'File size exceeds the maximum limit.' You won't be able to proceed with the application until you upload a correctly sized file. Use our exam-specific resize tools to get the exact KB size required.",
        },
        {
            question: "Can I use the same signature for different exams?",
            answer: "You can use the same original signature image, but you'll need to resize it differently for each exam since they have different KB and dimension requirements. For example, GATE needs 4-30KB while SSC needs 1-12KB. Our tool lets you resize the same image to different targets.",
        },
        {
            question: "Are photo requirements the same across all exams?",
            answer: "No, photo requirements vary significantly. GATE needs 5-200KB at 240×320px, NEET needs 10-200KB at 200×230px, IBPS needs 20-50KB at 200×230px, and GDS needs 30-100KB at 320×400px. Always check the specific requirements for your exam.",
        },
        {
            question: "When do exam portals update their signature requirements?",
            answer: "Requirements typically remain the same for 2-3 years but can change without notice. Always check the official notification PDF and application form guidelines when a new exam cycle opens. We update our tool presets as soon as new requirements are announced.",
        },
        {
            question: "What is the best background color for photos and signatures?",
            answer: "For signatures: always use a white background. For photos: most exams require a plain white background, though some like UPSC accept light-colored backgrounds. GDS specifically requires a white background for both photo and signature.",
        },
        {
            question: "How do I know if my resized signature will be accepted?",
            answer: "After resizing with our tool, check three things: (1) the file size is within the required KB range — shown in our tool's output, (2) the file format is JPG — our tool always outputs JPG, (3) the signature is clearly visible — zoom into the downloaded file to verify legibility. If all three check out, it will be accepted.",
        },
    ];

    const howToSteps = [
        { text: "Identify your exam's specific photo and signature requirements from the table below" },
        { text: "Scan your signature on white paper with black ink" },
        { text: "Crop the signature image tightly" },
        { text: "Visit SignatureResize.in and select your exam's preset" },
        { text: "Upload, resize, and download your correctly sized signature" },
        { text: "Upload to the exam application portal before the deadline" },
    ];

    return (
        <>
            <SEOHead
                title="All Exam Photo & Signature Requirements 2026 | Complete Comparison Guide"
                description="Complete guide comparing photo and signature size requirements for GATE, SSC, UPSC, NEET, IBPS, RRB NTPC, GDS & more exams in 2026. File size, dimensions, and format specifications."
                canonicalUrl="https://signatureresize.in/exam-photo-signature-requirements-2026"
                keywords="exam signature requirements 2026, GATE photo size, SSC signature size, UPSC photo dimensions, NEET signature requirements, IBPS photo size, government exam photo requirements, exam photo signature comparison"
            />

            <SEOSchema
                type="HowTo"
                howToName="How to Prepare Photo and Signature for Government Exam Applications"
                howToSteps={howToSteps}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs
                            items={[
                                { name: "Exam Photo & Signature Requirements 2026" },
                            ]}
                        />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                                📋 UPDATED FOR 2026
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                All Exam <span className="text-primary">Photo & Signature</span> Requirements 2026
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                Complete comparison of photo and signature specifications for every major Indian
                                government exam. Find the exact file size, dimensions, and format your exam needs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-5xl">

                            {/* Introduction */}
                            <section className="mb-12">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Indian government exam portals have specific requirements for photo and signature uploads.
                                    Getting these wrong is one of the <strong className="text-foreground">top 3 reasons</strong> for
                                    application form rejections. Each exam body — whether it's IIT (for GATE), NTA (for NEET/CUET),
                                    SSC, UPSC, IBPS, or India Post — has different specifications for file size, pixel dimensions,
                                    and format.
                                </p>
                                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                                    This comprehensive guide compares the requirements across all major exams in one place,
                                    so you don't have to search through multiple notification PDFs. We update this page every
                                    exam cycle with the latest specifications.
                                </p>
                            </section>

                            {/* Featured Article Image */}
                            <figure className="mb-12">
                                <img
                                    src="/assest/All-Exam-Photo-Signature-Requirements-2026.png"
                                    alt="All exam photo and signature requirements 2026 — GATE, SSC, UPSC, NEET, IBPS, GDS comparison chart"
                                    className="w-full rounded-xl border border-border shadow-lg"
                                    loading="lazy"
                                    decoding="async"
                                    width="1200"
                                    height="630"
                                />
                                <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                                    Complete comparison of photo & signature requirements for all major government exams in 2026
                                </figcaption>
                            </figure>

                            {/* Master Comparison Table - Signature */}
                            <section className="mb-12">
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                        <Pen className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                                        Signature Requirements Comparison
                                    </h2>
                                </div>

                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-border bg-muted/50">
                                                <th className="px-3 py-3 text-left font-semibold text-foreground">Exam</th>
                                                <th className="px-3 py-3 text-left font-semibold text-foreground">File Size</th>
                                                <th className="px-3 py-3 text-left font-semibold text-foreground">Dimensions</th>
                                                <th className="px-3 py-3 text-left font-semibold text-foreground">Format</th>
                                                <th className="px-3 py-3 text-left font-semibold text-foreground">Ink</th>
                                                <th className="px-3 py-3 text-left font-semibold text-foreground">Tool</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground">
                                            <tr className="border-b border-border">
                                                <td className="px-3 py-3 font-medium text-foreground">GATE 2026</td>
                                                <td className="px-3 py-3">4KB – 30KB</td>
                                                <td className="px-3 py-3">~230×60 px</td>
                                                <td className="px-3 py-3">JPG</td>
                                                <td className="px-3 py-3">Black</td>
                                                <td className="px-3 py-3"><Link to="/gate-signature-resize" className="text-primary hover:underline">Resize</Link></td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-3 py-3 font-medium text-foreground">SSC CGL/MTS/CHSL</td>
                                                <td className="px-3 py-3">1KB – 12KB</td>
                                                <td className="px-3 py-3">~140×60 px</td>
                                                <td className="px-3 py-3">JPG</td>
                                                <td className="px-3 py-3">Black</td>
                                                <td className="px-3 py-3"><Link to="/ssc-mts-signature-resize" className="text-primary hover:underline">Resize</Link></td>
                                            </tr>
                                            <tr className="border-b border-border">
                                                <td className="px-3 py-3 font-medium text-foreground">UPSC CSE/NDA/CDS</td>
                                                <td className="px-3 py-3">4KB – 20KB</td>
                                                <td className="px-3 py-3">~140×60 px</td>
                                                <td className="px-3 py-3">JPG</td>
                                                <td className="px-3 py-3">Black/Blue</td>
                                                <td className="px-3 py-3"><Link to="/upsc-signature-resize" className="text-primary hover:underline">Resize</Link></td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-3 py-3 font-medium text-foreground">NEET UG 2026</td>
                                                <td className="px-3 py-3">4KB – 30KB</td>
                                                <td className="px-3 py-3">~140×60 px</td>
                                                <td className="px-3 py-3">JPG</td>
                                                <td className="px-3 py-3">Black</td>
                                                <td className="px-3 py-3"><Link to="/neet-photo-signature-resize" className="text-primary hover:underline">Resize</Link></td>
                                            </tr>
                                            <tr className="border-b border-border">
                                                <td className="px-3 py-3 font-medium text-foreground">IBPS PO/Clerk/SO</td>
                                                <td className="px-3 py-3">10KB – 20KB</td>
                                                <td className="px-3 py-3">~140×60 px</td>
                                                <td className="px-3 py-3">JPG</td>
                                                <td className="px-3 py-3">Black</td>
                                                <td className="px-3 py-3"><Link to="/ibps-photo-signature-resize" className="text-primary hover:underline">Resize</Link></td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-3 py-3 font-medium text-foreground">RRB NTPC/Group D</td>
                                                <td className="px-3 py-3">10KB – 20KB</td>
                                                <td className="px-3 py-3">~140×60 px</td>
                                                <td className="px-3 py-3">JPG</td>
                                                <td className="px-3 py-3">Black/Blue</td>
                                                <td className="px-3 py-3"><Link to="/ntpc-signature-resize" className="text-primary hover:underline">Resize</Link></td>
                                            </tr>
                                            <tr className="border-b border-border">
                                                <td className="px-3 py-3 font-medium text-foreground">JEE Main/Advanced</td>
                                                <td className="px-3 py-3">10KB – 100KB</td>
                                                <td className="px-3 py-3">~230×60 px</td>
                                                <td className="px-3 py-3">JPG</td>
                                                <td className="px-3 py-3">Black</td>
                                                <td className="px-3 py-3"><Link to="/jee-signature-resize" className="text-primary hover:underline">Resize</Link></td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-3 py-3 font-medium text-foreground">GDS (India Post)</td>
                                                <td className="px-3 py-3">20KB – 100KB</td>
                                                <td className="px-3 py-3">~300×120 px</td>
                                                <td className="px-3 py-3">JPG</td>
                                                <td className="px-3 py-3">Black/Blue</td>
                                                <td className="px-3 py-3"><Link to="/gds-photo-signature-resize" className="text-primary hover:underline">Resize</Link></td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-3 font-medium text-foreground">UTI PAN Card</td>
                                                <td className="px-3 py-3">2KB – 30KB</td>
                                                <td className="px-3 py-3">~140×60 px</td>
                                                <td className="px-3 py-3">JPG</td>
                                                <td className="px-3 py-3">Black</td>
                                                <td className="px-3 py-3"><Link to="/uti-pan-resize" className="text-primary hover:underline">Resize</Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Master Comparison Table - Photo */}
                            <section className="mb-12">
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                        <Camera className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                                        Photo Requirements Comparison
                                    </h2>
                                </div>

                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-border bg-muted/50">
                                                <th className="px-3 py-3 text-left font-semibold text-foreground">Exam</th>
                                                <th className="px-3 py-3 text-left font-semibold text-foreground">File Size</th>
                                                <th className="px-3 py-3 text-left font-semibold text-foreground">Dimensions</th>
                                                <th className="px-3 py-3 text-left font-semibold text-foreground">Background</th>
                                                <th className="px-3 py-3 text-left font-semibold text-foreground">Tool</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground">
                                            <tr className="border-b border-border">
                                                <td className="px-3 py-3 font-medium text-foreground">GATE 2026</td>
                                                <td className="px-3 py-3">5KB – 200KB</td>
                                                <td className="px-3 py-3">240×320 px</td>
                                                <td className="px-3 py-3">White</td>
                                                <td className="px-3 py-3"><Link to="/gate-photo-resize" className="text-primary hover:underline">Resize</Link></td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-3 py-3 font-medium text-foreground">NEET UG 2026</td>
                                                <td className="px-3 py-3">10KB – 200KB</td>
                                                <td className="px-3 py-3">200×230 px</td>
                                                <td className="px-3 py-3">White</td>
                                                <td className="px-3 py-3"><Link to="/neet-photo-signature-resize" className="text-primary hover:underline">Resize</Link></td>
                                            </tr>
                                            <tr className="border-b border-border">
                                                <td className="px-3 py-3 font-medium text-foreground">IBPS PO/Clerk</td>
                                                <td className="px-3 py-3">20KB – 50KB</td>
                                                <td className="px-3 py-3">200×230 px</td>
                                                <td className="px-3 py-3">White</td>
                                                <td className="px-3 py-3"><Link to="/ibps-photo-signature-resize" className="text-primary hover:underline">Resize</Link></td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-3 py-3 font-medium text-foreground">GDS (India Post)</td>
                                                <td className="px-3 py-3">30KB – 100KB</td>
                                                <td className="px-3 py-3">320×400 px</td>
                                                <td className="px-3 py-3">White</td>
                                                <td className="px-3 py-3"><Link to="/gds-photo-signature-resize" className="text-primary hover:underline">Resize</Link></td>
                                            </tr>
                                            <tr>
                                                <td className="px-3 py-3 font-medium text-foreground">UTI PAN Card</td>
                                                <td className="px-3 py-3">2KB – 30KB</td>
                                                <td className="px-3 py-3">Passport size</td>
                                                <td className="px-3 py-3">White</td>
                                                <td className="px-3 py-3"><Link to="/uti-pan-resize" className="text-primary hover:underline">Resize</Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* In-Article Ad — mid-content */}
                            <AdContainer type="inarticle" className="my-8" />

                            {/* Key Takeaways */}
                            <section className="mb-12">
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                        <BookOpen className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                                        Key Takeaways & Best Practices
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
                                        <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                                        <div>
                                            <h3 className="font-semibold text-foreground">JPG is Universal</h3>
                                            <p className="mt-1 text-muted-foreground">
                                                Every single exam portal in India accepts JPG/JPEG format. When in doubt, always
                                                save and upload in JPG. Our tools output JPG by default.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
                                        <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                                        <div>
                                            <h3 className="font-semibold text-foreground">Scan Once, Resize Many Times</h3>
                                            <p className="mt-1 text-muted-foreground">
                                                Take one high-quality scan of your signature and keep the original. Then use our
                                                exam-specific tools to resize it to different KB targets for each exam you're
                                                applying to. No need to re-scan for each application.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
                                        <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                                        <div>
                                            <h3 className="font-semibold text-foreground">Test Before Deadline Day</h3>
                                            <p className="mt-1 text-muted-foreground">
                                                Don't wait until the last day to prepare your signature. Resize and try uploading
                                                it to the exam portal early. If there's an issue, you'll have time to fix it.
                                                Many portals allow saving a draft without final submission.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
                                        <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-yellow-500" />
                                        <div>
                                            <h3 className="font-semibold text-foreground">Always Verify with Official Sources</h3>
                                            <p className="mt-1 text-muted-foreground">
                                                While we keep this guide updated, requirements can change between exam cycles.
                                                Always cross-check the latest specifications from the official exam notification
                                                PDF or application portal guidelines before submitting.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Thumb Impression Note */}
                            <section className="mb-12">
                                <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
                                    <h3 className="mb-3 text-lg font-bold text-foreground">🖐️ Don't Forget: Thumb Impression</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Many government forms also require a <strong className="text-foreground">left thumb impression</strong> upload.
                                        This is commonly needed for IBPS, RRB, SSC, and various state-level recruitment forms.
                                        The typical requirement is 10KB-50KB in a square format (240×240 px). We have a
                                        dedicated <Link to="/thumb-impression-resize" className="text-primary hover:underline font-medium">Thumb Impression Resize Tool</Link> for this.
                                    </p>
                                </div>
                            </section>

                            {/* How to Scan Guide Link */}
                            <section className="mb-12">
                                <div className="rounded-xl border border-border bg-muted/30 p-6">
                                    <h3 className="mb-3 text-lg font-bold text-foreground">📖 Need Help Scanning?</h3>
                                    <p className="mb-3 text-muted-foreground">
                                        If you haven't scanned your signature yet, read our step-by-step guide on how to
                                        scan a signature using your phone camera or a flatbed scanner:
                                    </p>
                                    <Link
                                        to="/how-to-scan-signature-for-online-forms"
                                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                                    >
                                        <FileText className="h-4 w-4" />
                                        How to Scan Signature for Online Forms
                                    </Link>
                                </div>
                            </section>

                            {/* Official Links */}
                            <section className="mb-12">
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                        <ExternalLink className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                                        Official Exam Portals
                                    </h2>
                                </div>
                                <p className="mb-4 text-muted-foreground">
                                    Always verify the latest requirements from these official sources:
                                </p>
                                <div className="grid gap-3 md:grid-cols-2">
                                    <a href="https://gate2026.iitg.ac.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary">
                                        <ExternalLink className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-foreground">GATE 2026 — gate2026.iitg.ac.in</span>
                                    </a>
                                    <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary">
                                        <ExternalLink className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-foreground">SSC — ssc.gov.in</span>
                                    </a>
                                    <a href="https://upsc.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary">
                                        <ExternalLink className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-foreground">UPSC — upsc.gov.in</span>
                                    </a>
                                    <a href="https://neet.nta.nic.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary">
                                        <ExternalLink className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-foreground">NEET UG — neet.nta.nic.in</span>
                                    </a>
                                    <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary">
                                        <ExternalLink className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-foreground">IBPS — ibps.in</span>
                                    </a>
                                    <a href="https://www.rrbcdg.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary">
                                        <ExternalLink className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-foreground">RRB — rrbcdg.gov.in</span>
                                    </a>
                                    <a href="https://indiapostgdsonline.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary">
                                        <ExternalLink className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-foreground">GDS — indiapostgdsonline.gov.in</span>
                                    </a>
                                    <a href="https://www.utiitsl.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary">
                                        <ExternalLink className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-foreground">UTI PAN — utiitsl.com</span>
                                    </a>
                                </div>
                            </section>

                            {/* E-E-A-T Section */}
                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">About This Guide</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    This comprehensive requirements guide is researched and maintained by the
                                    <strong className="text-foreground"> SignatureResize.in</strong> team. We have studied the
                                    official notification PDFs, application portal guidelines, and help sections of every
                                    major exam body listed above. Our tool presets are configured with these exact specifications,
                                    and we regularly verify them when new exam cycles open. Over 50,000+ students have used
                                    our tools to prepare their application documents.
                                </p>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    <strong className="text-foreground">Last Updated:</strong> February 2026 |
                                    <strong className="text-foreground"> Exams Covered:</strong> GATE, SSC CGL/MTS/CHSL,
                                    UPSC CSE/NDA/CDS, NEET UG, IBPS PO/Clerk/SO/RRB, RRB NTPC/Group D, JEE Main,
                                    India Post GDS, UTI PAN
                                </p>
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

export default ExamPhotoSignatureGuide;

import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle, XCircle, FileWarning, HardDrive, Image, FileType, Crop, RotateCcw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";

const SignatureUploadErrors = () => {
    const faqs = [
        {
            question: "Why does my signature keep getting rejected even after resizing?",
            answer: "Most likely, the portal is checking pixel dimensions too, not just file size. For example, SSC wants roughly 140×60 pixels. If your image is 1000×500 pixels but happens to be 10KB, it can still fail. Use our exam-specific tools — they set both the KB and dimensions correctly.",
        },
        {
            question: "I resized my signature to 20KB but the portal says it is too large. What went wrong?",
            answer: "Some portals calculate KB differently. A file showing as 20KB on your computer might read as 20.4KB on the server. Our tool targets slightly below your set value to avoid this. Try setting the target to 19KB instead, or use our exam preset which accounts for this.",
        },
        {
            question: "Can I upload a PNG signature if the portal asks for JPG?",
            answer: "No. Even if the file size is correct, most portals reject PNG outright. Rename the extension from .png to .jpg does not work either — the portal checks the actual file format, not just the name. Convert properly using our tool which outputs real JPG files.",
        },
        {
            question: "My signature looks fine on my phone but blurry after uploading. Why?",
            answer: "The portal is probably displaying your signature in a small box (around 140×60 pixels). If your original image was very large, the portal squashes it down and it looks blurry. Crop tightly around just the signature before resizing — less whitespace means more detail in those small pixels.",
        },
        {
            question: "Do I need to redo my signature if the ink looks faded in the scan?",
            answer: "Not necessarily. First try increasing the contrast slightly in your phone's photo editor. If the signature is still too faint, yes, sign again with a fresh pen — ballpoint pens work best because the ink is consistent. Gel pens and fountain pens can produce uneven lines that fade in scans.",
        },
        {
            question: "The portal says my file is corrupt. What does that mean?",
            answer: "This usually happens when the image file got partially saved or the download was interrupted. Re-download the resized image from our tool and try again. If you edited the file with an app, the app might have saved it in a format the portal cannot read — stick to basic JPG from our tool.",
        },
    ];

    const howToSteps = [
        { text: "Read the error message on the portal carefully — note the exact wording" },
        { text: "Check the three basics: file size (KB), format (JPG), and dimensions (pixels)" },
        { text: "Upload your original scanned signature to SignatureResize.in" },
        { text: "Select your exam's preset or set a custom KB target" },
        { text: "Download and re-upload with the corrected file" },
    ];

    const errors = [
        {
            icon: HardDrive,
            message: "File size exceeds the maximum limit",
            cause: "Your image file is larger than the portal allows. You scanned at high resolution or the photo is uncropped.",
            fix: "Upload to our tool, pick your exam preset, and it will hit the exact KB. For example, SSC needs 1-12KB, GATE allows up to 30KB.",
            color: "red",
        },
        {
            icon: FileType,
            message: "Invalid file format / Only JPG files are accepted",
            cause: "Your file is PNG, HEIC, WebP, or BMP. iPhones save as HEIC by default, and screenshots are usually PNG.",
            fix: "Our tool auto-converts any format to JPG. Just upload and download — the output is always proper JPG.",
            color: "red",
        },
        {
            icon: Image,
            message: "Image dimensions do not match the requirements",
            cause: "Right KB, wrong pixel size. You resized the file but did not change the dimensions to what the portal expects.",
            fix: "Use our exam-specific page (like GATE or SSC) instead of the generic tool. Presets include the correct pixel dimensions.",
            color: "orange",
        },
        {
            icon: FileWarning,
            message: "File is corrupt or cannot be read",
            cause: "The image file is broken — this happens when a download was interrupted, or the file was renamed from another format without converting.",
            fix: "Re-download from our tool. Do not rename .png to .jpg — that changes the label, not the actual format.",
            color: "orange",
        },
        {
            icon: Crop,
            message: "Signature not clear / not legible",
            cause: "This is usually a manual review rejection. The signature is too small, blurry, or has too much whitespace around it.",
            fix: "Crop tightly before resizing. Sign with a black ballpoint pen on white paper, under good light. Read our scanning guide for details.",
            color: "yellow",
        },
        {
            icon: RotateCcw,
            message: "Please re-upload — image appears rotated or inverted",
            cause: "Your phone camera added rotation metadata (EXIF data) that the portal cannot read. The image looks fine on your phone but rotated on the server.",
            fix: "Open the image in any editor, rotate it to the correct orientation manually, save it, then upload to our tool. This strips the EXIF data.",
            color: "yellow",
        },
    ];

    return (
        <>
            <SEOHead
                title="Signature Upload Errors & How to Fix Them | Portal Error Guide"
                description="Getting errors uploading your signature to exam portals? Here are the 6 most common errors (file size, format, dimensions) and how to fix each one in under a minute."
                canonicalUrl="https://signatureresize.in/signature-upload-errors-and-fixes"
                keywords="signature upload error, file size exceeds limit, invalid file format signature, signature not clear, image dimensions do not match, exam portal upload error"
            />

            <SEOSchema
                type="HowTo"
                howToName="How to Fix Signature Upload Errors on Government Exam Portals"
                howToSteps={howToSteps}
            />

            <SEOSchema
                type="FAQPage"
                faqs={faqs.map(faq => ({ question: faq.question, answer: faq.answer }))}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-red-500/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Signature Upload Errors" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium text-red-600">
                                ⚠️ TROUBLESHOOTING GUIDE
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Signature <span className="text-red-500">Upload Errors</span> & How to Fix Them
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                Getting rejected by the exam portal? Here are the 6 errors candidates hit most
                                often — and a quick fix for each one.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            {/* Intro */}
                            <section className="mb-12">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    You have filled out the entire form, double-checked every field, and you are
                                    at the very last step — uploading your signature. Then the portal throws an error.
                                    No explanation, just a red message. It is frustrating, especially when the deadline
                                    is a few hours away.
                                </p>
                                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                                    We have seen thousands of students run into these upload errors across portals like
                                    GATE GOAPS, SSC, UPSC, NTA (NEET/JEE), IBPS, and India Post GDS. The good news?
                                    Every single one of these errors has a simple fix. Here is what each error
                                    means and how to sort it out.
                                </p>
                            </section>

                            {/* Featured Article Image */}
                            <figure className="mb-12">
                                <img
                                    src="/assest/Signature-Upload-Errors-How-to-Fix-Them.png"
                                    alt="Signature upload errors and how to fix them — file size, format, dimensions troubleshooting guide"
                                    className="w-full rounded-xl border border-border shadow-lg"
                                    loading="lazy"
                                    decoding="async"
                                    width="1200"
                                    height="630"
                                />
                                <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                                    Common signature upload errors on exam portals and how to fix each one
                                </figcaption>
                            </figure>

                            {/* Error Cards */}
                            <section className="mb-12 space-y-6">
                                {errors.map((error, index) => {
                                    const IconComponent = error.icon;
                                    const borderColor = error.color === "red"
                                        ? "border-red-500/30"
                                        : error.color === "orange"
                                            ? "border-orange-500/30"
                                            : "border-yellow-500/30";
                                    const bgColor = error.color === "red"
                                        ? "bg-red-500/5"
                                        : error.color === "orange"
                                            ? "bg-orange-500/5"
                                            : "bg-yellow-500/5";
                                    const iconColor = error.color === "red"
                                        ? "text-red-500"
                                        : error.color === "orange"
                                            ? "text-orange-500"
                                            : "text-yellow-600";

                                    return (
                                        <div key={index} className={`rounded-xl border-2 ${borderColor} ${bgColor} p-6`}>
                                            <div className="flex items-start gap-4">
                                                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${bgColor}`}>
                                                    <IconComponent className={`h-5 w-5 ${iconColor}`} />
                                                </div>
                                                <div className="flex-1">
                                                    <h2 className="text-lg font-bold text-foreground">
                                                        Error #{index + 1}: &ldquo;{error.message}&rdquo;
                                                    </h2>
                                                    <div className="mt-3 space-y-3">
                                                        <div className="flex items-start gap-2">
                                                            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                                                            <p className="text-muted-foreground">
                                                                <strong className="text-foreground">Why it happens:</strong> {error.cause}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-start gap-2">
                                                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                                                            <p className="text-muted-foreground">
                                                                <strong className="text-foreground">How to fix it:</strong> {error.fix}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </section>

                            {/* Quick Reference Table */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Quick Reference: Error → Fix</h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-border bg-muted/50">
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Error Message</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">One-Line Fix</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground">
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3">File size exceeds limit</td>
                                                <td className="px-4 py-3">Use <Link to="/signature-resize" className="text-primary hover:underline">our resize tool</Link> with your exam preset</td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-4 py-3">Invalid file format</td>
                                                <td className="px-4 py-3">Upload any format — our tool outputs real JPG</td>
                                            </tr>
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3">Dimensions do not match</td>
                                                <td className="px-4 py-3">Use the exam-specific page (sets KB + pixel size)</td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-4 py-3">File is corrupt</td>
                                                <td className="px-4 py-3">Re-download from our tool (do not rename .png to .jpg)</td>
                                            </tr>
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3">Signature not clear</td>
                                                <td className="px-4 py-3">Crop tight, re-scan with black pen in good light</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3">Image rotated</td>
                                                <td className="px-4 py-3">Open in editor, rotate manually, save, then resize</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Prevention Tips */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    How to Avoid These Errors in the First Place
                                </h2>
                                <p className="mb-4 text-muted-foreground leading-relaxed">
                                    Most of these errors come down to three things: wrong KB, wrong format, or bad scan quality.
                                    Here is a quick routine that works every time:
                                </p>
                                <ol className="ml-5 list-decimal space-y-3 text-muted-foreground">
                                    <li>
                                        <strong className="text-foreground">Sign on plain white paper</strong> with a black ballpoint pen.
                                        Not gel pen, not pencil, not colored ink.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">Scan or photograph</strong> under good light —
                                        read our <Link to="/how-to-scan-signature-for-online-forms" className="text-primary hover:underline">scanning guide</Link> for
                                        the full method.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">Crop tightly</strong> around just the signature. No extra whitespace.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">Resize using the right preset</strong> on our tool.
                                        Check the <Link to="/exam-photo-signature-requirements-2026" className="text-primary hover:underline">requirements page</Link> if
                                        you are not sure which one.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">Test-upload a day before the deadline.</strong> Do not wait until the
                                        last hour — servers are slow and you will not have time to fix anything.
                                    </li>
                                </ol>
                            </section>

                            {/* Exam-Specific Tools */}
                            <section className="mb-12 rounded-xl border border-border bg-muted/30 p-5">
                                <h3 className="mb-3 font-semibold text-foreground">Quick Links: Exam-Specific Resize Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link to="/gate-signature-resize" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">GATE</Link>
                                    <Link to="/ssc-mts-signature-resize" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">SSC</Link>
                                    <Link to="/upsc-signature-resize" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">UPSC</Link>
                                    <Link to="/neet-photo-signature-resize" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">NEET</Link>
                                    <Link to="/ibps-photo-signature-resize" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">IBPS</Link>
                                    <Link to="/ntpc-signature-resize" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">RRB NTPC</Link>
                                    <Link to="/gds-photo-signature-resize" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">GDS</Link>
                                </div>
                            </section>

                            {/* E-E-A-T */}
                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Why We Wrote This</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We built <strong className="text-foreground">SignatureResize.in</strong> after watching
                                    friends and family struggle with the last step of exam applications — the image upload.
                                    Over the past two years, we have processed more than 100,000 signatures and photos
                                    for students across India. These six errors show up again and again in the
                                    messages we get. We figured it was time to put the fixes in one place so nobody
                                    has to panic on deadline day.
                                </p>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    <strong className="text-foreground">Last Updated:</strong> February 2026 |
                                    <strong className="text-foreground"> Based on:</strong> GATE GOAPS, SSC one-time registration,
                                    NTA NEET/JEE portals, IBPS online application, India Post GDS portal error logs.
                                </p>
                            </section>

                        </div>
                    </div>
                </article>

                <FAQSection faqs={faqs} />
                <AdSenseDisclaimer />
                <Footer />
            </div>
        </>
    );
};

export default SignatureUploadErrors;

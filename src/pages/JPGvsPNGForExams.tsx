import { Link } from "react-router-dom";
import { FileImage, FileType, CheckCircle, XCircle, Info, ArrowRight, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";

const JPGvsPNGForExams = () => {
    const faqs = [
        {
            question: "Is JPG the same as JPEG?",
            answer: "Yes, JPG and JPEG are the exact same format. The only difference is the file extension (.jpg vs .jpeg). Older Windows systems used 3-character extensions, which is why .jpg exists. Modern systems support both. Every exam portal accepts both .jpg and .jpeg — they are identical.",
        },
        {
            question: "Why do exam portals reject PNG files?",
            answer: "Most government exam portals explicitly require JPG/JPEG format. PNG files are lossless (they preserve every pixel perfectly), which makes them larger in file size. Since portals enforce strict KB limits (e.g., 20-50KB for SSC), PNG files rarely fit within those limits. The portal checks the file header, so even renaming a PNG to .jpg will not work.",
        },
        {
            question: "Can I just rename my PNG file to .jpg?",
            answer: "No. Renaming the file extension does not change the actual format — the file is still a PNG internally. The exam portal reads the file header (not the extension) and will reject it as an invalid format. You need to actually convert the file using a tool, not just rename it.",
        },
        {
            question: "Which format gives better quality — JPG or PNG?",
            answer: "PNG gives theoretically better quality because it uses lossless compression (no data is lost). But for exam applications, this does not matter. Exam portals display photos and signatures at small sizes (100×120 pixels for SSC, for example). At those dimensions, there is zero visible difference between a well-compressed JPG and a PNG.",
        },
        {
            question: "What about WebP or HEIC format?",
            answer: "WebP (used by Google) and HEIC (used by iPhones) are not accepted by any Indian government exam portal as of 2026. If your photo is in WebP or HEIC format, you need to convert it to JPG first. Our resize tool handles this conversion automatically.",
        },
        {
            question: "Do government portals check DPI?",
            answer: "No. Despite many guides mentioning DPI, Indian government exam portals do not check DPI values. They validate only three things: file format (JPG), file size (in KB), and pixel dimensions (e.g., 100×120). DPI is metadata that only matters for physical printing — portals ignore it completely.",
        },
        {
            question: "My iPhone saves photos as HEIC. How do I convert to JPG?",
            answer: "Two options: (1) Change iPhone default format — go to Settings → Camera → Formats → Most Compatible. This makes the camera save JPG by default. (2) Upload the HEIC photo to our resize tool — it automatically converts to JPG during processing. No additional app needed.",
        },
    ];

    const howToSteps = [
        { text: "Check your exam notification for the required image format (almost always JPG/JPEG)" },
        { text: "If your image is PNG, HEIC, or WebP, convert it using an online tool or our resize tool" },
        { text: "Upload the image to SignatureResize.in and select your exam preset" },
        { text: "The tool converts to JPG and compresses to the required KB range automatically" },
        { text: "Download and upload to the exam portal" },
    ];

    return (
        <>
            <SEOHead
                title="JPG vs PNG vs JPEG for Government Exam Forms – Which Format to Use? (2026)"
                description="JPG vs PNG for government exam applications explained simply. Which format do GATE, SSC, UPSC, NEET portals accept? Why PNG gets rejected? How to convert? Complete guide."
                canonicalUrl="https://signatureresize.in/jpg-vs-png-for-government-exam-forms"
                keywords="jpg vs png for exam form, which image format for government exam, jpeg vs jpg difference for exam, PNG not accepted exam portal, convert png to jpg for exam"
            />

            <SEOSchema
                type="HowTo"
                howToName="How to Choose and Convert Image Format for Government Exam Applications"
                howToSteps={howToSteps}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-violet-500/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "JPG vs PNG for Exam Forms" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-600">
                                🔄 FORMAT GUIDE
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                <span className="text-primary">JPG vs PNG vs JPEG</span> for Government Exam Forms
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                Which format do exam portals accept? Why does PNG get rejected?
                                Is JPG the same as JPEG? All your format questions, answered.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            {/* TL;DR */}
                            <section className="mb-12">
                                <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-6">
                                    <h2 className="mb-3 text-xl font-bold text-foreground">TL;DR — The Short Answer</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        <strong className="text-foreground">Use JPG (or JPEG — they are the same thing).</strong>{" "}
                                        Every Indian government exam portal — GATE, SSC, UPSC, NEET, IBPS, RRB,
                                        India Post — requires JPG/JPEG format. PNG, WebP, HEIC, and BMP are
                                        either rejected outright or not listed as accepted formats.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <Link to="/signature-resize" className="inline-flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                                            Convert & Resize Now <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </section>

                            {/* What is JPG */}
                            <section className="mb-12">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                                        <FileImage className="h-5 w-5 text-blue-500" />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                        What is JPG / JPEG?
                                    </h2>
                                </div>
                                <div className="rounded-xl border border-border bg-card p-5">
                                    <p className="text-muted-foreground leading-relaxed">
                                        JPG (also called JPEG — Joint Photographic Experts Group) uses{" "}
                                        <strong className="text-foreground">lossy compression</strong>. This means it
                                        slightly reduces image quality to make the file much smaller. A 5MB phone photo
                                        can be compressed to 30KB as a JPG — that is a 99.4% reduction in size.
                                    </p>
                                    <p className="mt-3 text-muted-foreground leading-relaxed">
                                        For exam applications, this is perfect. Portals want small files (20-50KB
                                        typically), and at those sizes, JPG quality is more than sufficient. The
                                        photo is displayed at a small size on the form and admit card, so minor
                                        compression artifacts are invisible.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">Small file size ✓</span>
                                        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">All portals accept ✓</span>
                                        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">Easy to compress ✓</span>
                                    </div>
                                </div>
                            </section>

                            {/* What is PNG */}
                            <section className="mb-12">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10">
                                        <FileType className="h-5 w-5 text-orange-500" />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                        What is PNG?
                                    </h2>
                                </div>
                                <div className="rounded-xl border border-border bg-card p-5">
                                    <p className="text-muted-foreground leading-relaxed">
                                        PNG (Portable Network Graphics) uses <strong className="text-foreground">lossless
                                            compression</strong>. It preserves every pixel exactly — zero quality loss.
                                        PNG also supports transparency (alpha channel), which is why it is used for
                                        logos, icons, and graphics with transparent backgrounds.
                                    </p>
                                    <p className="mt-3 text-muted-foreground leading-relaxed">
                                        The downside for exam applications: PNG files are <strong className="text-foreground">3-10x
                                            larger</strong> than equivalent JPG files. A photo that is 40KB as a JPG could
                                        be 200-400KB as a PNG. This exceeds the file size limits on almost every exam portal.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-500">Large file size ✗</span>
                                        <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-500">Most portals reject ✗</span>
                                        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">Supports transparency ✓</span>
                                    </div>
                                </div>
                            </section>

                            {/* JPG vs JPEG */}
                            <section className="mb-12">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                                        <HelpCircle className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                                        JPG vs JPEG — Is There a Difference?
                                    </h2>
                                </div>
                                <div className="rounded-xl border-2 border-blue-500/20 bg-blue-500/5 p-5">
                                    <p className="text-lg font-medium text-foreground">
                                        No. They are exactly the same format.
                                    </p>
                                    <p className="mt-3 text-muted-foreground leading-relaxed">
                                        The JPEG format was created in 1992. Early versions of Windows (3.1, 95) only
                                        allowed 3-character file extensions, so <code className="rounded bg-muted px-1.5 py-0.5 text-sm">.jpeg</code> was
                                        shortened to <code className="rounded bg-muted px-1.5 py-0.5 text-sm">.jpg</code>. Mac and Linux always supported
                                        4-character extensions, so both .jpeg and .jpg existed.
                                    </p>
                                    <p className="mt-3 text-muted-foreground leading-relaxed">
                                        Today, every operating system and every exam portal treats .jpg and .jpeg identically.
                                        If the portal says "upload JPG," you can upload a .jpeg file and vice versa. No
                                        conversion needed between the two — they are the same file with a different name.
                                    </p>
                                </div>
                            </section>

                            {/* Comparison Table */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    JPG vs PNG — Side-by-Side Comparison
                                </h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-border bg-muted/50">
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Feature</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">JPG / JPEG</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">PNG</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground">
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3 font-medium text-foreground">Compression</td>
                                                <td className="px-4 py-3">Lossy</td>
                                                <td className="px-4 py-3">Lossless</td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-4 py-3 font-medium text-foreground">Typical file size</td>
                                                <td className="px-4 py-3 text-green-600 font-medium">20-80 KB</td>
                                                <td className="px-4 py-3 text-red-500 font-medium">200-800 KB</td>
                                            </tr>
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3 font-medium text-foreground">Transparency</td>
                                                <td className="px-4 py-3">No</td>
                                                <td className="px-4 py-3">Yes</td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-4 py-3 font-medium text-foreground">Exam portal support</td>
                                                <td className="px-4 py-3 text-green-600 font-medium">✅ All portals</td>
                                                <td className="px-4 py-3 text-red-500 font-medium">❌ Most reject</td>
                                            </tr>
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3 font-medium text-foreground">Best for</td>
                                                <td className="px-4 py-3">Photos, signatures</td>
                                                <td className="px-4 py-3">Logos, icons, graphics</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-foreground">Exam recommendation</td>
                                                <td className="px-4 py-3 text-green-600 font-medium">✅ Use this</td>
                                                <td className="px-4 py-3 text-red-500 font-medium">❌ Avoid</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* What Portals Actually Check */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    What Do Exam Portals Actually Check?
                                </h2>
                                <p className="mb-4 text-muted-foreground leading-relaxed">
                                    There is a lot of confusion about what exam portals validate. Many coaching
                                    websites mention DPI, bit depth, color space, and other technical specs.
                                    Here is what portals <strong className="text-foreground">actually</strong> check:
                                </p>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <div className="rounded-xl border-2 border-green-500/20 bg-green-500/5 p-5 text-center">
                                        <div className="mb-3 flex justify-center">
                                            <CheckCircle className="h-8 w-8 text-green-500" />
                                        </div>
                                        <h3 className="mb-2 font-bold text-foreground">File Format</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Must be JPG/JPEG. Portal reads the file header (magic bytes), not
                                            just the extension.
                                        </p>
                                    </div>
                                    <div className="rounded-xl border-2 border-green-500/20 bg-green-500/5 p-5 text-center">
                                        <div className="mb-3 flex justify-center">
                                            <CheckCircle className="h-8 w-8 text-green-500" />
                                        </div>
                                        <h3 className="mb-2 font-bold text-foreground">File Size (KB)</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Must be within the specified range (e.g., 20-50KB for SSC, 4-30KB
                                            for GATE).
                                        </p>
                                    </div>
                                    <div className="rounded-xl border-2 border-green-500/20 bg-green-500/5 p-5 text-center">
                                        <div className="mb-3 flex justify-center">
                                            <CheckCircle className="h-8 w-8 text-green-500" />
                                        </div>
                                        <h3 className="mb-2 font-bold text-foreground">Pixel Dimensions</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Width × height in pixels (e.g., 100×120 for SSC, 200×230 for some
                                            NTA exams).
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 grid gap-4 md:grid-cols-3">
                                    <div className="rounded-xl border border-muted bg-muted/30 p-5 text-center">
                                        <div className="mb-3 flex justify-center">
                                            <XCircle className="h-8 w-8 text-muted-foreground" />
                                        </div>
                                        <h3 className="mb-2 font-medium text-muted-foreground">DPI</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Not checked. DPI is metadata for print — portals ignore it.
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-muted bg-muted/30 p-5 text-center">
                                        <div className="mb-3 flex justify-center">
                                            <XCircle className="h-8 w-8 text-muted-foreground" />
                                        </div>
                                        <h3 className="mb-2 font-medium text-muted-foreground">Color Space</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Not checked. sRGB vs AdobeRGB makes no difference for portals.
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-muted bg-muted/30 p-5 text-center">
                                        <div className="mb-3 flex justify-center">
                                            <XCircle className="h-8 w-8 text-muted-foreground" />
                                        </div>
                                        <h3 className="mb-2 font-medium text-muted-foreground">Bit Depth</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Not checked. 8-bit vs 16-bit is irrelevant for exam uploads.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* How to Convert */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    How to Convert PNG to JPG for Exam Forms
                                </h2>
                                <p className="mb-4 text-muted-foreground leading-relaxed">
                                    If your photo or signature is in PNG format, here are your options:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">✓</div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Best: Use Our Resize Tool</h3>
                                            <p className="mt-1 text-muted-foreground text-sm">
                                                Upload any format (PNG, HEIC, WebP, BMP) to{" "}
                                                <Link to="/signature-resize" className="text-primary hover:underline">SignatureResize.in</Link>.
                                                The tool automatically converts to JPG and compresses to your exam's
                                                required KB range. One step — convert, resize, and compress together.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">2</div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Windows: Paint</h3>
                                            <p className="mt-1 text-muted-foreground text-sm">
                                                Open the PNG in Paint → File → Save As → JPEG Picture. This converts the
                                                format but does <strong className="text-foreground">not resize</strong> the file. You will still need
                                                to compress it to meet the KB limit.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">3</div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">iPhone: Change Camera Settings</h3>
                                            <p className="mt-1 text-muted-foreground text-sm">
                                                If your iPhone saves photos as HEIC, go to Settings → Camera → Formats →
                                                Most Compatible. New photos will save as JPG automatically.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="rounded-xl border-2 border-red-500/20 bg-red-500/5 p-5">
                                        <div className="flex items-start gap-3">
                                            <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                                            <div>
                                                <h3 className="font-semibold text-foreground">❌ What Does NOT Work: Renaming the File</h3>
                                                <p className="mt-1 text-sm text-muted-foreground">
                                                    Renaming <code className="rounded bg-muted px-1.5 py-0.5">photo.png</code> to{" "}
                                                    <code className="rounded bg-muted px-1.5 py-0.5">photo.jpg</code> does <strong className="text-foreground">not</strong> convert
                                                    the format. The file internals remain PNG. The portal reads the file header and
                                                    will reject it as "invalid format." You must use a proper conversion tool.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Exam Format Requirements */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Format Requirements by Exam
                                </h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-border bg-muted/50">
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Exam</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Accepted Format</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Size Range</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Tool</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground">
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3 font-medium text-foreground">GATE</td>
                                                <td className="px-4 py-3">JPG only</td>
                                                <td className="px-4 py-3">4KB – 200KB</td>
                                                <td className="px-4 py-3"><Link to="/gate-signature-resize" className="text-primary hover:underline">Resize →</Link></td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-4 py-3 font-medium text-foreground">SSC CGL</td>
                                                <td className="px-4 py-3">JPG only</td>
                                                <td className="px-4 py-3">20KB – 50KB</td>
                                                <td className="px-4 py-3"><Link to="/ssc-mts-signature-resize" className="text-primary hover:underline">Resize →</Link></td>
                                            </tr>
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3 font-medium text-foreground">UPSC</td>
                                                <td className="px-4 py-3">JPG only</td>
                                                <td className="px-4 py-3">20KB – 200KB</td>
                                                <td className="px-4 py-3"><Link to="/upsc-signature-resize" className="text-primary hover:underline">Resize →</Link></td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-4 py-3 font-medium text-foreground">NEET UG</td>
                                                <td className="px-4 py-3">JPG only</td>
                                                <td className="px-4 py-3">10KB – 200KB</td>
                                                <td className="px-4 py-3"><Link to="/neet-photo-signature-resize" className="text-primary hover:underline">Resize →</Link></td>
                                            </tr>
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3 font-medium text-foreground">IBPS</td>
                                                <td className="px-4 py-3">JPG only</td>
                                                <td className="px-4 py-3">20KB – 50KB</td>
                                                <td className="px-4 py-3"><Link to="/ibps-photo-signature-resize" className="text-primary hover:underline">Resize →</Link></td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-foreground">RRB NTPC</td>
                                                <td className="px-4 py-3">JPG only</td>
                                                <td className="px-4 py-3">10KB – 20KB</td>
                                                <td className="px-4 py-3"><Link to="/ntpc-signature-resize" className="text-primary hover:underline">Resize →</Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Related Guides */}
                            <section className="mb-12 rounded-xl border border-border bg-muted/30 p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <Info className="h-5 w-5 text-primary" />
                                    <h3 className="font-semibold text-foreground">Related Guides & Tools</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <Link to="/signature-resize" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Signature Resize Tool</Link>
                                    <Link to="/create-digital-signature-without-scanner" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Signature Without Scanner</Link>
                                    <Link to="/ssc-cgl-photo-signature-upload-guide-2026" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">SSC CGL Upload Guide</Link>
                                    <Link to="/signature-upload-errors-and-fixes" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Upload Error Fixes</Link>
                                    <Link to="/exam-photo-signature-requirements-2026" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">All Exam Requirements</Link>
                                </div>
                            </section>

                            {/* E-E-A-T Section */}
                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">About This Guide</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    This guide is published by{" "}
                                    <strong className="text-foreground">SignatureResize.in</strong>.
                                    We process images in every format — JPG, PNG, HEIC, WebP, BMP — and convert
                                    them for exam portals daily. The information here is based on our direct testing
                                    with GATE GOAPS, SSC, NTA, IBPS, and India Post portals, not copied from
                                    other blogs. We verify format requirements against each portal's upload
                                    validation code every registration cycle.
                                </p>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    <strong className="text-foreground">Published:</strong> February 2026 |
                                    <strong className="text-foreground"> Updated regularly</strong> when portal requirements change
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

export default JPGvsPNGForExams;

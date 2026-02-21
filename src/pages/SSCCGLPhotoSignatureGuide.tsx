import { Link } from "react-router-dom";
import { FileImage, Upload, AlertTriangle, CheckCircle, XCircle, Info, Ruler, HardDrive } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const SSCCGLPhotoSignatureGuide = () => {
    const faqs = [
        {
            question: "What is the exact photo size for SSC CGL 2026?",
            answer: "The SSC CGL 2026 application requires a photo between 20KB and 50KB in JPG/JPEG format. The dimensions must be 100×120 pixels (width × height) with a minimum resolution of 100 DPI. The photo should have a white background and be taken within the last 3 months.",
        },
        {
            question: "What is the exact signature size for SSC CGL 2026?",
            answer: "The SSC CGL 2026 application requires a signature between 1KB and 12KB in JPG/JPEG format. The dimensions must be 40×60 pixels (width × height). The signature must be done with black ink on white paper.",
        },
        {
            question: "Can I use a phone photo for SSC CGL registration?",
            answer: "Yes, phone photos are accepted as long as the final uploaded file meets the size (20-50KB), format (JPG), and dimension (100×120 px) requirements. Take the photo against a white background with good lighting, crop to passport-size framing, then resize using our tool.",
        },
        {
            question: "Why does SSC portal say 'file size exceeds limit' when my photo is just 3MB?",
            answer: "The SSC portal accepts photos only between 20KB and 50KB — much smaller than a typical phone photo (2-5MB). You need to compress the image using a resize tool. Simply renaming or changing the format does not reduce the actual file size.",
        },
        {
            question: "Are SSC CGL and SSC MTS photo requirements the same?",
            answer: "Very similar, but not always identical. Both generally require JPG format with white background. However, SSC sometimes changes size limits between different exams and years. Always check the specific notification for the exam you are applying to. Our SSC tool handles both.",
        },
        {
            question: "Can I use the same photo for SSC CGL that I used for another exam?",
            answer: "Yes, as long as the photo was taken within the last 3 months and meets SSC CGL's specific size requirements (20-50KB, 100×120 px, JPG). If the photo meets these specs, the portal will accept it regardless of which exam you originally took it for.",
        },
        {
            question: "What happens if my photo gets rejected after submitting SSC CGL form?",
            answer: "SSC provides a correction window of 3-5 days after the registration period. During this time, you can re-upload a corrected photo and signature. However, some details cannot be changed — name, DOB, etc. Always double-check before final submission.",
        },
        {
            question: "Should I wear glasses in my SSC CGL photo?",
            answer: "It is safest to remove glasses for the photo. While SSC does not explicitly ban thin-framed glasses, glare on lenses or heavy frames can sometimes cause issues during biometric verification at exam centers. If you wear glasses daily, take one photo with and one without.",
        },
    ];

    const howToSteps = [
        { text: "Take a passport-size photo with white background (phone or studio)" },
        { text: "Crop the photo to show your face and upper shoulders only" },
        { text: "Visit SignatureResize.in and select the SSC preset" },
        { text: "Upload your photo — the tool resizes to 100×120 px and 20-50KB automatically" },
        { text: "Sign on plain white paper with black ink and photograph with your phone" },
        { text: "Upload your signature image and select the SSC signature preset" },
        { text: "Download both files and upload to the SSC registration portal" },
    ];

    return (
        <>
            <SEOHead
                title="SSC CGL 2026 Photo & Signature Upload Guide: Exact Size, Dimensions & Format"
                description="Complete SSC CGL 2026 photo and signature size guide. Photo: 20-50KB, 100×120px, JPG. Signature: 1-12KB, 40×60px. Step-by-step upload instructions with free resize tool."
                canonicalUrl="https://signatureresize.in/ssc-cgl-photo-signature-upload-guide-2026"
                keywords="SSC CGL 2026 photo size, SSC CGL signature upload, SSC CGL photo upload error, SSC CGL application photo requirement, SSC CGL photo dimensions 2026"
            />

            <SEOSchema
                type="HowTo"
                howToName="How to Upload Photo and Signature for SSC CGL 2026 Application"
                howToSteps={howToSteps}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "SSC CGL 2026 Photo & Signature Guide" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
                                📋 SSC CGL 2026
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                SSC CGL 2026 <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">Photo & Signature</span> Upload Guide
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                Exact size, dimensions, format, and step-by-step upload instructions.
                                No more "file size exceeds limit" errors.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            {/* Quick Specs Cards */}
                            <section className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    SSC CGL 2026: At a Glance
                                </h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {/* Photo Specs Card */}
                                    <div className="rounded-xl border-2 border-blue-500/30 bg-blue-500/5 p-6">
                                        <div className="mb-4 flex items-center gap-2">
                                            <FileImage className="h-6 w-6 text-blue-500" />
                                            <h3 className="text-lg font-bold text-foreground">Photo Requirements</h3>
                                        </div>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-center gap-3">
                                                <HardDrive className="h-4 w-4 shrink-0 text-muted-foreground" />
                                                <span className="text-muted-foreground">File Size: <strong className="text-foreground">20KB – 50KB</strong></span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Ruler className="h-4 w-4 shrink-0 text-muted-foreground" />
                                                <span className="text-muted-foreground">Dimensions: <strong className="text-foreground">100 × 120 pixels</strong></span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <FileImage className="h-4 w-4 shrink-0 text-muted-foreground" />
                                                <span className="text-muted-foreground">Format: <strong className="text-foreground">JPG / JPEG only</strong></span>
                                            </div>
                                            <div className="mt-4">
                                                <Link to="/signature-resize" className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
                                                    Resize Photo Now →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Signature Specs Card */}
                                    <div className="rounded-xl border-2 border-green-500/30 bg-green-500/5 p-6">
                                        <div className="mb-4 flex items-center gap-2">
                                            <Upload className="h-6 w-6 text-green-500" />
                                            <h3 className="text-lg font-bold text-foreground">Signature Requirements</h3>
                                        </div>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-center gap-3">
                                                <HardDrive className="h-4 w-4 shrink-0 text-muted-foreground" />
                                                <span className="text-muted-foreground">File Size: <strong className="text-foreground">1KB – 12KB</strong></span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Ruler className="h-4 w-4 shrink-0 text-muted-foreground" />
                                                <span className="text-muted-foreground">Dimensions: <strong className="text-foreground">40 × 60 pixels</strong></span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <FileImage className="h-4 w-4 shrink-0 text-muted-foreground" />
                                                <span className="text-muted-foreground">Format: <strong className="text-foreground">JPG / JPEG only</strong></span>
                                            </div>
                                            <div className="mt-4">
                                                <Link to="/ssc-mts-signature-resize" className="inline-flex items-center gap-1 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors">
                                                    Resize Signature Now →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Photo Guidelines */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    SSC CGL Photo — What the Portal Actually Checks
                                </h2>
                                <p className="mb-4 text-muted-foreground leading-relaxed">
                                    The SSC CGL registration portal validates your photo at the moment of upload.
                                    If any of the following are off, the portal either rejects the file outright
                                    or shows a warning. Here is exactly what gets checked:
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                                        <div>
                                            <span className="font-medium text-foreground">File size between 20KB and 50KB</span>
                                            <p className="mt-1 text-sm text-muted-foreground">Below 20KB? The photo is too compressed — it will look blurry on the admit card. Above 50KB? The portal rejects it instantly.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                                        <div>
                                            <span className="font-medium text-foreground">JPG or JPEG format</span>
                                            <p className="mt-1 text-sm text-muted-foreground">PNG files are rejected even if they meet the KB requirement. Make sure the file extension is .jpg or .jpeg.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                                        <div>
                                            <span className="font-medium text-foreground">Dimensions of 100×120 pixels (recommended)</span>
                                            <p className="mt-1 text-sm text-muted-foreground">While the portal accepts slightly different dimensions, 100×120 is the official recommendation. Our tool sets these exact dimensions.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                                        <div>
                                            <span className="font-medium text-foreground">White or light background</span>
                                            <p className="mt-1 text-sm text-muted-foreground">The photo must have a plain white or very light-colored background. Patterned or dark backgrounds are not accepted.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <AdContainer type="inarticle" className="my-8" />

                            {/* Common Errors */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Common SSC CGL Upload Errors & Fixes
                                </h2>
                                <div className="space-y-4">
                                    <div className="rounded-xl border border-border bg-card p-5">
                                        <div className="flex items-start gap-3">
                                            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                                            <div>
                                                <h3 className="font-semibold text-foreground">"File size exceeds the maximum limit"</h3>
                                                <p className="mt-1 text-muted-foreground text-sm">
                                                    <strong className="text-foreground">Cause:</strong> Your photo is above 50KB (phone photos are typically 2-5 MB).
                                                </p>
                                                <p className="mt-1 text-muted-foreground text-sm">
                                                    <strong className="text-foreground">Fix:</strong> Upload to our{" "}
                                                    <Link to="/ssc-mts-signature-resize" className="text-primary hover:underline">SSC resize tool</Link>{" "}
                                                    — it compresses to the 20-50KB range automatically.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-border bg-card p-5">
                                        <div className="flex items-start gap-3">
                                            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                                            <div>
                                                <h3 className="font-semibold text-foreground">"Invalid file format"</h3>
                                                <p className="mt-1 text-muted-foreground text-sm">
                                                    <strong className="text-foreground">Cause:</strong> File is PNG, BMP, HEIC, or another non-JPG format. iPhone photos are often HEIC by default.
                                                </p>
                                                <p className="mt-1 text-muted-foreground text-sm">
                                                    <strong className="text-foreground">Fix:</strong> Our resize tool converts any format to JPG during processing. Or on iPhone, go to Settings → Camera → Formats → Most Compatible.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-border bg-card p-5">
                                        <div className="flex items-start gap-3">
                                            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                                            <div>
                                                <h3 className="font-semibold text-foreground">"Photo is too blurry / low quality"</h3>
                                                <p className="mt-1 text-muted-foreground text-sm">
                                                    <strong className="text-foreground">Cause:</strong> Photo was over-compressed (below 15KB) or has low resolution to start with.
                                                </p>
                                                <p className="mt-1 text-muted-foreground text-sm">
                                                    <strong className="text-foreground">Fix:</strong> Start with a sharper source photo. Take the photo in good lighting at 12MP+ resolution, then let the tool compress it — do not resize manually in Paint or photo editors.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-border bg-card p-5">
                                        <div className="flex items-start gap-3">
                                            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                                            <div>
                                                <h3 className="font-semibold text-foreground">"Signature file size below minimum"</h3>
                                                <p className="mt-1 text-muted-foreground text-sm">
                                                    <strong className="text-foreground">Cause:</strong> Signature image is below 1KB — this usually happens when the crop is too tight or the image is mostly white.
                                                </p>
                                                <p className="mt-1 text-muted-foreground text-sm">
                                                    <strong className="text-foreground">Fix:</strong> Leave a small margin (2-3mm) around the signature when cropping. Use our{" "}
                                                    <Link to="/signature-resize-10-to-20-kb" className="text-primary hover:underline">10-20KB resize tool</Link>{" "}
                                                    which ensures the file stays within the accepted range.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SSC CGL vs Other SSC Exams */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    SSC CGL vs SSC MTS vs SSC CHSL — Same Requirements?
                                </h2>
                                <p className="mb-4 text-muted-foreground leading-relaxed">
                                    SSC uses the same registration portal for CGL, MTS, CHSL, CPO, and Stenographer exams.
                                    The photo and signature specifications are usually the same across all SSC exams in a
                                    given year. However, SSC has changed these specs in the past, so always verify from
                                    the official notification of the specific exam you are applying for.
                                </p>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-border bg-muted/50">
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">SSC Exam</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Photo Size</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Signature Size</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Format</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground">
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3 font-medium text-foreground">SSC CGL 2026</td>
                                                <td className="px-4 py-3">20KB – 50KB</td>
                                                <td className="px-4 py-3">1KB – 12KB</td>
                                                <td className="px-4 py-3">JPG</td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-4 py-3 font-medium text-foreground">SSC MTS 2026</td>
                                                <td className="px-4 py-3">20KB – 50KB</td>
                                                <td className="px-4 py-3">1KB – 12KB</td>
                                                <td className="px-4 py-3">JPG</td>
                                            </tr>
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3 font-medium text-foreground">SSC CHSL 2026</td>
                                                <td className="px-4 py-3">20KB – 50KB</td>
                                                <td className="px-4 py-3">1KB – 12KB</td>
                                                <td className="px-4 py-3">JPG</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-foreground">SSC CPO 2026</td>
                                                <td className="px-4 py-3">20KB – 50KB</td>
                                                <td className="px-4 py-3">1KB – 12KB</td>
                                                <td className="px-4 py-3">JPG</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    Need another exam's specs? → <Link to="/exam-photo-signature-requirements-2026" className="text-primary hover:underline">All exam requirements</Link>
                                </p>
                            </section>

                            {/* Do's and Don'ts */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    SSC CGL Photo & Signature — Do's and Don'ts
                                </h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="rounded-xl border-2 border-green-500/20 bg-green-500/5 p-5">
                                        <h3 className="mb-3 font-semibold text-green-600">✅ Do</h3>
                                        <ul className="space-y-2">
                                            {[
                                                "White background for photo",
                                                "Black ink on white paper for signature",
                                                "JPG format only",
                                                "Recent photo (within 3 months)",
                                                "Neutral expression, eyes open",
                                                "Check file size before uploading",
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="rounded-xl border-2 border-red-500/20 bg-red-500/5 p-5">
                                        <h3 className="mb-3 font-semibold text-red-500">❌ Don't</h3>
                                        <ul className="space-y-2">
                                            {[
                                                "Upload PNG or HEIC format",
                                                "Use selfie/front camera for photo",
                                                "Sign on ruled/lined paper",
                                                "Wear sunglasses or tinted glasses",
                                                "Upload without checking KB size",
                                                "Use a digitally drawn signature",
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Related Guides */}
                            <section className="mb-12 rounded-xl border border-border bg-muted/30 p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <Info className="h-5 w-5 text-primary" />
                                    <h3 className="font-semibold text-foreground">Related Guides & Tools</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <Link to="/ssc-mts-signature-resize" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">SSC Signature Resize Tool</Link>
                                    <Link to="/signature-resize-10-to-20-kb" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Resize 10-20KB</Link>
                                    <Link to="/create-digital-signature-without-scanner" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Signature Without Scanner</Link>
                                    <Link to="/signature-upload-errors-and-fixes" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Upload Error Fixes</Link>
                                    <Link to="/how-to-take-passport-photo-at-home-for-exams" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Passport Photo at Home</Link>
                                </div>
                            </section>

                            {/* E-E-A-T Section */}
                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">About This Guide</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    This guide is published by{" "}
                                    <strong className="text-foreground">SignatureResize.in</strong>.
                                    We process tens of thousands of SSC exam photos and signatures every
                                    registration cycle (CGL, MTS, CHSL combined). The specifications listed here are
                                    based on the official SSC CGL 2026 notification and verified against the live SSC
                                    registration portal. We update this guide every time SSC releases a fresh notification.
                                </p>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    <strong className="text-foreground">Published:</strong> February 2026 |
                                    <strong className="text-foreground"> Source:</strong> SSC CGL Tier-I 2026 Official Notification |
                                    <strong className="text-foreground"> Updated regularly</strong>
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

export default SSCCGLPhotoSignatureGuide;

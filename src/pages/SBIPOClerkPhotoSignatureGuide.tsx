import { Link } from "react-router-dom";
import { FileImage, Upload, CheckCircle, XCircle, Info, Ruler, HardDrive } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";

const SBIPOClerkPhotoSignatureGuide = () => {
    const faqs = [
        {
            question: "What is the photo size for SBI PO 2026?",
            answer: "SBI PO 2026 requires a photo between 20KB and 50KB in JPG/JPEG format. The dimensions should be 200×230 pixels. The photo must have a white background, be taken within the last 6 months, and show your face clearly with neutral expression.",
        },
        {
            question: "What is the signature size for SBI PO 2026?",
            answer: "SBI PO 2026 requires a signature between 10KB and 20KB in JPG/JPEG format. Dimensions should be 140×60 pixels. Sign with black ink on white unruled paper.",
        },
        {
            question: "Are SBI PO and SBI Clerk requirements the same?",
            answer: "Yes, SBI uses the same portal and specifications for both PO and Clerk exams. The photo and signature requirements are identical: Photo 20-50KB (200×230 px), Signature 10-20KB (140×60 px), both in JPG format.",
        },
        {
            question: "SBI portal says 'image dimensions do not match'. What do I do?",
            answer: "The SBI portal strictly checks pixel dimensions. Your photo must be exactly 200×230 pixels (width × height) and signature must be 140×60 pixels. Use our IBPS/SBI resize tool which sets these exact dimensions automatically.",
        },
        {
            question: "Can I use my IBPS photo for SBI exam?",
            answer: "The specifications are very similar since SBI follows IBPS guidelines. However, the photo must be recent (within 6 months). If your IBPS photo was taken recently and meets SBI's exact dimension requirements (200×230 px), it should work.",
        },
        {
            question: "Does SBI require a left thumb impression?",
            answer: "Yes, SBI PO and Clerk exams require a left thumb impression in addition to the photo and signature. The thumb impression should be between 10KB and 20KB in JPG format, with dimensions of 240×240 pixels. Press your left thumb on a white paper using blue or black ink.",
        },
        {
            question: "What happens if my SBI photo is rejected after payment?",
            answer: "SBI provides a correction window (usually 3-4 days) after the registration period. You can log back into the portal with your registration ID and re-upload corrected images. The payment is not lost — it carries over.",
        },
    ];

    const howToSteps = [
        { text: "Take a passport-size photo with white background" },
        { text: "Sign on white unruled paper with black ballpoint pen" },
        { text: "Take a left thumb impression on white paper with blue or black ink" },
        { text: "Visit SignatureResize.in and select the IBPS/SBI preset" },
        { text: "Upload each image — the tool resizes to SBI's exact specs automatically" },
        { text: "Download and upload all three to the SBI registration portal" },
    ];

    return (
        <>
            <SEOHead
                title="SBI PO/Clerk 2026 Photo, Signature & Thumb Impression Guide – Exact Size & Upload"
                description="SBI PO/Clerk 2026 photo (20-50KB, 200×230px), signature (10-20KB, 140×60px), and thumb impression requirements. Step-by-step upload guide with free resize tool."
                canonicalUrl="https://signatureresize.in/sbi-po-clerk-photo-signature-resize-guide-2026"
                keywords="SBI PO photo size 2026, SBI Clerk signature size, SBI PO thumb impression size, SBI photo upload error, SBI PO application photo"
            />
            <SEOSchema type="HowTo" howToName="How to Upload Photo, Signature, and Thumb Impression for SBI PO/Clerk 2026" howToSteps={howToSteps} />

            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-700/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "SBI PO/Clerk 2026 Photo & Signature Guide" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-blue-700/10 px-4 py-2 text-sm font-medium text-blue-700">🏦 SBI PO/CLERK 2026</span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                SBI PO/Clerk 2026 <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">Photo & Signature</span> Upload Guide
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                Exact specifications for photo, signature, and left thumb impression. No more upload errors.
                            </p>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            <section className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">SBI PO/Clerk 2026: Requirements at a Glance</h2>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <div className="rounded-xl border-2 border-blue-500/30 bg-blue-500/5 p-5">
                                        <div className="mb-3 flex items-center gap-2">
                                            <FileImage className="h-5 w-5 text-blue-500" />
                                            <h3 className="font-bold text-foreground">Photo</h3>
                                        </div>
                                        <div className="space-y-2 text-sm text-muted-foreground">
                                            <p>Size: <strong className="text-foreground">20KB – 50KB</strong></p>
                                            <p>Dimensions: <strong className="text-foreground">200 × 230 px</strong></p>
                                            <p>Format: <strong className="text-foreground">JPG</strong></p>
                                        </div>
                                    </div>
                                    <div className="rounded-xl border-2 border-green-500/30 bg-green-500/5 p-5">
                                        <div className="mb-3 flex items-center gap-2">
                                            <Upload className="h-5 w-5 text-green-500" />
                                            <h3 className="font-bold text-foreground">Signature</h3>
                                        </div>
                                        <div className="space-y-2 text-sm text-muted-foreground">
                                            <p>Size: <strong className="text-foreground">10KB – 20KB</strong></p>
                                            <p>Dimensions: <strong className="text-foreground">140 × 60 px</strong></p>
                                            <p>Format: <strong className="text-foreground">JPG</strong></p>
                                        </div>
                                    </div>
                                    <div className="rounded-xl border-2 border-purple-500/30 bg-purple-500/5 p-5">
                                        <div className="mb-3 flex items-center gap-2">
                                            <HardDrive className="h-5 w-5 text-purple-500" />
                                            <h3 className="font-bold text-foreground">Thumb Impression</h3>
                                        </div>
                                        <div className="space-y-2 text-sm text-muted-foreground">
                                            <p>Size: <strong className="text-foreground">10KB – 20KB</strong></p>
                                            <p>Dimensions: <strong className="text-foreground">240 × 240 px</strong></p>
                                            <p>Format: <strong className="text-foreground">JPG</strong></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    <Link to="/ibps-photo-signature-resize" className="inline-flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                                        Resize for SBI Now →
                                    </Link>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Common SBI Upload Errors</h2>
                                <div className="space-y-4">
                                    {[
                                        { error: "Image dimensions do not match", cause: "Photo is not exactly 200×230 px or signature is not 140×60 px", fix: "Use our SBI preset which sets exact pixel dimensions" },
                                        { error: "File size exceeds limit", cause: "Image above 50KB (phone photos are 2-5MB)", fix: "Resize using our tool — it compresses to 20-50KB automatically" },
                                        { error: "Invalid file type", cause: "File is PNG, HEIC, or WebP instead of JPG", fix: "Our tool auto-converts any format to JPG" },
                                        { error: "Left thumb impression not accepted", cause: "Image is too light or has wrong dimensions", fix: "Press firmly with fresh ink, photograph against white paper, resize to 240×240 px" },
                                    ].map((item, i) => (
                                        <div key={i} className="rounded-xl border border-border bg-card p-5">
                                            <h3 className="font-semibold text-foreground">"{item.error}"</h3>
                                            <p className="mt-1 text-sm text-muted-foreground"><strong className="text-foreground">Cause:</strong> {item.cause}</p>
                                            <p className="mt-1 text-sm text-muted-foreground"><strong className="text-foreground">Fix:</strong> {item.fix}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">SBI vs IBPS vs Other Bank Exams</h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-border bg-muted/50">
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Exam</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Photo</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Signature</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Thumb</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground">
                                            <tr className="border-b border-border"><td className="px-4 py-3 font-medium text-foreground">SBI PO 2026</td><td className="px-4 py-3">20-50KB, 200×230</td><td className="px-4 py-3">10-20KB, 140×60</td><td className="px-4 py-3">10-20KB, 240×240</td></tr>
                                            <tr className="border-b border-border bg-muted/20"><td className="px-4 py-3 font-medium text-foreground">SBI Clerk 2026</td><td className="px-4 py-3">20-50KB, 200×230</td><td className="px-4 py-3">10-20KB, 140×60</td><td className="px-4 py-3">10-20KB, 240×240</td></tr>
                                            <tr className="border-b border-border"><td className="px-4 py-3 font-medium text-foreground">IBPS PO 2026</td><td className="px-4 py-3">20-50KB, 200×230</td><td className="px-4 py-3">10-20KB, 140×60</td><td className="px-4 py-3">10-20KB, 240×240</td></tr>
                                            <tr><td className="px-4 py-3 font-medium text-foreground">IBPS Clerk 2026</td><td className="px-4 py-3">20-50KB, 200×230</td><td className="px-4 py-3">10-20KB, 140×60</td><td className="px-4 py-3">10-20KB, 240×240</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section className="mb-12 rounded-xl border border-border bg-muted/30 p-5">
                                <div className="flex items-center gap-2 mb-3"><Info className="h-5 w-5 text-primary" /><h3 className="font-semibold text-foreground">Related Guides</h3></div>
                                <div className="flex flex-wrap gap-2">
                                    <Link to="/ibps-photo-signature-resize" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">IBPS Resize Tool</Link>
                                    <Link to="/ssc-cgl-photo-signature-upload-guide-2026" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">SSC CGL Guide</Link>
                                    <Link to="/create-digital-signature-without-scanner" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Signature Without Scanner</Link>
                                    <Link to="/why-exam-portal-rejecting-photo-10-reasons" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Photo Rejection Fixes</Link>
                                </div>
                            </section>

                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">About This Guide</h2>
                                <p className="text-muted-foreground leading-relaxed">Published by <strong className="text-foreground">SignatureResize.in</strong>. We process thousands of SBI and IBPS exam images every registration cycle. Specifications verified against the official SBI PO 2026 notification.</p>
                                <p className="mt-3 text-sm text-muted-foreground"><strong className="text-foreground">Published:</strong> February 2026 | <strong className="text-foreground">Updated regularly</strong></p>
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

export default SBIPOClerkPhotoSignatureGuide;

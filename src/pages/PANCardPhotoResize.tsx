import { Link } from "react-router-dom";
import { CreditCard, CheckCircle, Info, Lock, PenTool } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const PANCardPhotoResize = () => {
    const faqs = [
        {
            question: "What is the photo size for PAN Card application?",
            answer: "Both NSDL and UTIITSL require a passport size photo of 3.5cm x 2.5cm (width x height). The file size must be less than 50KB (usually 10-50KB) in JPG format. The resolution should be 200 DPI (approx 213x173 pixels).",
        },
        {
            question: "What is the signature size for PAN Card?",
            answer: "The signature size must be between 10KB and 50KB in JPG format. Dimensions should be 2cm x 4.5cm (approx 444x205 pixels at 200 DPI). It must be signed with black ink on white paper.",
        },
        {
            question: "My PAN photo upload keeps failing on NSDL. Why?",
            answer: "NSDL is strict about 200 DPI (dots per inch). Even if your file size is correct (under 50KB), incorrect DPI metadata can cause rejection. Our tool sets specifically 200 DPI for PAN card photos and signatures.",
        },
        {
            question: "Are UTI and NSDL requirements different?",
            answer: "They are nearly identical. Both require 200 DPI, JPG format, and file size under 30KB (UTI) or 50KB (NSDL). To be safe, aim for 20-30KB size which works perfectly on both portals.",
        },
        {
            question: "Can I resize PDF documents for PAN card here?",
            answer: "Currently, we specialize in photo and signature resizing. For PAN card PDF documents (proof of identity/address), you need a PDF compressor. However, verify that your supporting docs are black and white and under 300KB as per NSDL rules.",
        },
    ];

    const howToSteps = [
        { text: "Take a passport-size photo with white background" },
        { text: "Sign on white paper with black ballpoint pen" },
        { text: "Visit SignatureResize.in and select the 'UTI/NSDL PAN' preset" },
        { text: "Upload your photo — tool sets 213x173 pixels (200 DPI) automatically" },
        { text: "Upload signature — tool sets 444x205 pixels (200 DPI)" },
        { text: "Download both files and upload to NSDL or UTIITSL portal" },
    ];

    return (
        <>
            <SEOHead
                title="PAN Card Photo & Signature Resize Online (UTI & NSDL) - 200 DPI Tool"
                description="Resize photo and signature for PAN card application (UTIITSL & NSDL). Sets exact 200 DPI, 2.5x3.5cm dimension, and under 50KB size. Free online tool."
                canonicalUrl="https://signatureresize.in/pan-card-photo-signature-resize"
                keywords="pan card photo resize, nsdl photo resize online, uti pan signature resize, 200 dpi photo converter, pan card signature size 2026"
            />
            <SEOSchema type="HowTo" howToName="How to Resize Photo & Signature for PAN Card (NSDL/UTI)" howToSteps={howToSteps} />

            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "PAN Card Resize Guide" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-cyan-600/10 px-4 py-2 text-sm font-medium text-cyan-600">💳 NSDL & UTIITSL</span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                PAN Card <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">Photo & Signature</span> Resize
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                The only tool that sets precise <strong>200 DPI</strong> as required by NSDL and UTI portals.
                            </p>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            <section className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">PAN Card Specifications (2026)</h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="rounded-xl border-2 border-cyan-500/30 bg-cyan-500/5 p-5">
                                        <div className="mb-3 flex items-center gap-2">
                                            <CreditCard className="h-5 w-5 text-cyan-500" />
                                            <h3 className="font-bold text-foreground">Photo Requirements</h3>
                                        </div>
                                        <div className="space-y-3 text-sm text-muted-foreground">
                                            <p className="flex justify-between"><span className="font-medium text-foreground">Dimensions:</span> <span>3.5cm × 2.5cm</span></p>
                                            <p className="flex justify-between"><span className="font-medium text-foreground">Pixels (approx):</span> <span>213 × 173 px</span></p>
                                            <p className="flex justify-between"><span className="font-medium text-foreground">Resolution:</span> <span className="font-bold text-red-500">200 DPI (Strict)</span></p>
                                            <p className="flex justify-between"><span className="font-medium text-foreground">Size:</span> <span>Less than 50 KB</span></p>
                                            <p className="flex justify-between"><span className="font-medium text-foreground">Format:</span> <span>JPG / JPEG</span></p>
                                        </div>
                                    </div>
                                    <div className="rounded-xl border-2 border-blue-500/30 bg-blue-500/5 p-5">
                                        <div className="mb-3 flex items-center gap-2">
                                            <PenTool className="h-5 w-5 text-blue-500" />
                                            <h3 className="font-bold text-foreground">Signature Requirements</h3>
                                        </div>
                                        <div className="space-y-3 text-sm text-muted-foreground">
                                            <p className="flex justify-between"><span className="font-medium text-foreground">Dimensions:</span> <span>2cm × 4.5cm</span></p>
                                            <p className="flex justify-between"><span className="font-medium text-foreground">Pixels (approx):</span> <span>444 × 205 px</span></p>
                                            <p className="flex justify-between"><span className="font-medium text-foreground">Resolution:</span> <span className="font-bold text-red-500">200 DPI (Strict)</span></p>
                                            <p className="flex justify-between"><span className="font-medium text-foreground">Size:</span> <span>Less than 50 KB</span></p>
                                            <p className="flex justify-between"><span className="font-medium text-foreground">Format:</span> <span>JPG / JPEG</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-wrap justify-center gap-3">
                                    <Link to="/uti-pan-resize" className="inline-flex items-center gap-1 rounded-lg bg-cyan-600 px-6 py-3 text-sm font-medium text-white hover:bg-cyan-700 transition-colors shadow-lg shadow-cyan-500/20">
                                        Resize for PAN Card Now →
                                    </Link>
                                </div>
                                <AdContainer type="display" className="mt-8" />
                            </section>

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Why NSDL Rejects Correct-Looking Photos</h2>
                                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-full bg-red-100 p-2"><Lock className="h-5 w-5 text-red-500" /></div>
                                        <div>
                                            <h3 className="font-bold text-foreground">The Hidden 200 DPI Rule</h3>
                                            <p className="mt-2 text-muted-foreground leading-relaxed">
                                                Most online resizers change the pixel dimensions (width/height) but leave the DPI (dots per inch) at 72 or 96 (standard screen resolution). NSDL and UTI software reads the metadata headers of your JPG file. If it sees "72 DPI" instead of "200 DPI", it throws an error even if the photo looks perfect.
                                            </p>
                                            <p className="mt-2 text-muted-foreground leading-relaxed">
                                                <strong>SignatureResize.in is different.</strong> We actively rewrite the metadata header to specific 200 DPI to ensure 100% acceptance on PAN portals.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-12 rounded-xl border border-border bg-muted/30 p-5">
                                <div className="flex items-center gap-2 mb-3"><Info className="h-5 w-5 text-primary" /><h3 className="font-semibold text-foreground">Related Guides</h3></div>
                                <div className="flex flex-wrap gap-2">
                                    <Link to="/signature-white-background-phone" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">White Background Guide</Link>
                                    <Link to="/crop-signature-from-full-page-scan" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Crop Signature</Link>
                                    <Link to="/image-dpi-vs-kb-vs-pixels-exam-portals" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">DPI vs Pixels Explained</Link>
                                </div>
                            </section>

                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">About This Guide</h2>
                                <p className="text-muted-foreground leading-relaxed">Published by <strong className="text-foreground">SignatureResize.in</strong>. We process thousands of PAN card photos daily and are one of the few tools that handle DPI correction accurately.</p>
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

export default PANCardPhotoResize;

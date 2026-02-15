import { Link } from "react-router-dom";
import { Scissors, CheckCircle, XCircle, Info, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";

const CropSignatureFromScan = () => {
    const faqs = [
        {
            question: "How do I crop just the signature from a full A4 scan?",
            answer: "Open the scanned image in your phone's gallery or any photo editor. Use the crop tool to draw a tight rectangle around only the signature, leaving just 2-3mm margin on each side. Save and upload to our resize tool for the correct KB and dimensions.",
        },
        {
            question: "My scanned signature has a grey or yellowish background. How do I fix it?",
            answer: "Increase the brightness by 10-20% and increase contrast by 5-10% in your phone's photo editor. This whitens the background without affecting the signature ink. Alternatively, use a scanner app like CamScanner which has auto-whitening built in.",
        },
        {
            question: "Should I scan the entire page or just the signature area?",
            answer: "Scan the entire page and then crop. This gives you the flexibility to adjust the crop later. If you scan just a small area, the focus and exposure might be off. Our resize tool handles the final sizing after you crop.",
        },
        {
            question: "Can I use a scanner app instead of a physical scanner?",
            answer: "Yes, and scanner apps are often better for signatures. Apps like CamScanner, Adobe Scan, and Microsoft Lens automatically detect the document edges, correct perspective, enhance contrast, and produce a clean white background. They essentially turn your phone into a flatbed scanner.",
        },
        {
            question: "My signature edges look rough after scanning. How do I clean them?",
            answer: "Slightly increasing contrast makes the ink strokes crisper and reduces faded edges. If the pen strokes are inherently rough, try signing with a slightly thicker pen (0.7mm or 1mm ballpoint). The scanner or camera captures thicker strokes more cleanly.",
        },
        {
            question: "Does cropping reduce the image quality?",
            answer: "Cropping does not reduce quality — it removes pixels you do not need. The remaining pixels stay at the original resolution. However, if you crop a very small area from a large scan, the resulting image may have lower resolution. For signatures, this is rarely an issue since exam portals only need 40-60 pixels height.",
        },
    ];

    const howToSteps = [
        { text: "Sign on plain white unruled paper with black ballpoint pen" },
        { text: "Scan or photograph the full page — use a scanner app for best results" },
        { text: "Open the image and use the crop tool to select only the signature area" },
        { text: "Leave a thin margin (2-3mm) around the signature" },
        { text: "If the background looks grey, increase brightness by 10-15% in your editor" },
        { text: "Upload the cropped image to SignatureResize.in and select your exam preset" },
        { text: "Download and upload to the exam portal" },
    ];

    return (
        <>
            <SEOHead
                title="How to Crop Signature from Full Page Scan – Clean Background & Perfect Edges"
                description="Step-by-step guide to crop your signature from a full page scan. Clean the background, fix edges, and resize for GATE, SSC, UPSC, NEET, and other exam portals."
                canonicalUrl="https://signatureresize.in/crop-signature-from-full-page-scan"
                keywords="crop signature from page, remove background from scanned signature, clean scanned signature, crop signature from scan, signature crop for exam"
            />
            <SEOSchema type="HowTo" howToName="How to Crop Signature from a Full Page Scan" howToSteps={howToSteps} />

            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-orange-500/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Crop Signature from Scan" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-600">✂️ CROPPING GUIDE</span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Crop Signature from <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">Full Page Scan</span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                Extract a clean, white-background signature from a full A4 scan. Perfect edges, no grey tint, exam-ready sizing.
                            </p>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">The Problem: Full Page Scan, Tiny Signature</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    You signed on paper, scanned the entire A4 sheet, and now you have a 2MB image where your signature is a small element in the middle of a vast white page. If you upload this as-is, the exam portal shrinks it to fit a small box — your signature becomes an illegible speck.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    The fix is simple: <strong className="text-foreground">crop tightly around just the signature</strong>, clean up the background, and resize to the right KB. This guide shows you how.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Step-by-Step Cropping Guide</h2>
                                <div className="space-y-4">
                                    {howToSteps.map((step, i) => (
                                        <div key={i} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</div>
                                            <p className="text-muted-foreground">{step.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Scanner App vs Physical Scanner vs Phone Camera</h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-border bg-muted/50">
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Method</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Quality</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Auto-Crop</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Best For</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground">
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3 font-medium text-foreground">Scanner App</td>
                                                <td className="px-4 py-3">⭐⭐⭐⭐⭐</td>
                                                <td className="px-4 py-3 text-green-600">Yes ✅</td>
                                                <td className="px-4 py-3">Most students (recommended)</td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-4 py-3 font-medium text-foreground">Phone Camera</td>
                                                <td className="px-4 py-3">⭐⭐⭐⭐</td>
                                                <td className="px-4 py-3 text-red-500">No ❌</td>
                                                <td className="px-4 py-3">Quick & easy</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-foreground">Physical Scanner</td>
                                                <td className="px-4 py-3">⭐⭐⭐⭐⭐</td>
                                                <td className="px-4 py-3 text-red-500">No ❌</td>
                                                <td className="px-4 py-3">If you have one at home</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Common Cropping Mistakes</h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                                        <h3 className="mb-2 font-semibold text-foreground">❌ Cropping Too Tight</h3>
                                        <p className="text-sm text-muted-foreground">Cutting into the signature strokes. Leave at least 2-3mm margin on all sides.</p>
                                    </div>
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                                        <h3 className="mb-2 font-semibold text-foreground">❌ Leaving Too Much Space</h3>
                                        <p className="text-sm text-muted-foreground">Excess whitespace makes the signature appear small when the portal renders it.</p>
                                    </div>
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                                        <h3 className="mb-2 font-semibold text-foreground">❌ Skipping Background Cleanup</h3>
                                        <p className="text-sm text-muted-foreground">Grey or yellowish backgrounds from scanning can cause rejections on some portals.</p>
                                    </div>
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                                        <h3 className="mb-2 font-semibold text-foreground">❌ Cropping at an Angle</h3>
                                        <p className="text-sm text-muted-foreground">Tilted crops make the signature appear slanted on the form. Keep the crop rectangle straight.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-12 rounded-xl border border-border bg-muted/30 p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <Info className="h-5 w-5 text-primary" />
                                    <h3 className="font-semibold text-foreground">Related Guides</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <Link to="/how-to-scan-signature-for-online-forms" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">How to Scan Signature</Link>
                                    <Link to="/create-digital-signature-without-scanner" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Signature Without Scanner</Link>
                                    <Link to="/signature-photo-white-background-phone" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">White Background on Phone</Link>
                                    <Link to="/signature-upload-errors-and-fixes" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Upload Error Fixes</Link>
                                </div>
                            </section>

                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">About This Guide</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Published by <strong className="text-foreground">SignatureResize.in</strong>. Based on processing over 100,000 signature images, many of which started as full-page scans that needed proper cropping.
                                </p>
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

export default CropSignatureFromScan;

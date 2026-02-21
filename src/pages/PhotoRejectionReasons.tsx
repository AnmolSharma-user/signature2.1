import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle, XCircle, Info, FileImage } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const PhotoRejectionReasons = () => {
    const faqs = [
        {
            question: "How do I know if my photo will be accepted before submitting?",
            answer: "Upload it to our resize tool which validates format (JPG), file size (within exam's KB range), and dimensions (correct pixel size). If the tool processes it successfully, the portal will accept it. You can also preview the final image before downloading.",
        },
        {
            question: "The portal accepted my photo but the admit card looks blurry. Why?",
            answer: "The portal only checks file specs (format, size, dimensions). It does not evaluate visual quality. If the source photo was low-resolution, over-compressed, or a screenshot, it passes validation but looks bad on the admit card. Always start with a good quality source photo.",
        },
        {
            question: "Can I re-upload a rejected photo during the correction window?",
            answer: "Yes. Most exam portals (SSC, IBPS, SBI, NTA) provide a 3-5 day correction window after the registration period. During this window, you can log in and re-upload corrected photos and signatures. Your application fee is not affected.",
        },
        {
            question: "My photo was taken at a studio but still got rejected. Why?",
            answer: "Studios often save photos in high resolution (3000×4000 pixels, 5-10MB). While the quality is excellent, the file size far exceeds exam limits (20-50KB typically). You still need to resize and compress the studio photo using our tool.",
        },
        {
            question: "The portal shows 'processing error' when I try to upload. Is it my photo?",
            answer: "Not always. 'Processing error' can also mean the portal server is overloaded (common on last 2 days of registration). Try again after 10-15 minutes. If it persists, check your internet connection and ensure the file is not corrupted. Try re-downloading from our resize tool.",
        },
    ];

    const reasons = [
        { num: 1, title: "File Size Too Large", desc: "Your photo is 2-5MB from the camera. The portal wants 20-50KB.", fix: "Use our resize tool to compress to the exam's exact KB range.", icon: "📦" },
        { num: 2, title: "Wrong File Format", desc: "Photo is PNG, HEIC (iPhone), WebP, or BMP instead of JPG.", fix: "Our tool auto-converts any format to JPG during processing.", icon: "📄" },
        { num: 3, title: "Wrong Pixel Dimensions", desc: "Photo is 3000×4000 instead of 200×230 (or whatever the exam needs).", fix: "Select the exam preset — it sets exact pixel dimensions.", icon: "📐" },
        { num: 4, title: "Background Not White", desc: "Photo has a colored, gradient, or dark background.", fix: "Retake against a plain white wall with good lighting.", icon: "🎨" },
        { num: 5, title: "Face Not Clearly Visible", desc: "Shadows on face, glasses glare, hair covering eyes, or face turned.", fix: "Face the camera directly, remove glasses, ensure even lighting.", icon: "👤" },
        { num: 6, title: "File is Corrupted", desc: "Incomplete download, interrupted save, or file got damaged during transfer.", fix: "Re-upload to our tool and re-download. Do not rename file extensions.", icon: "⚠️" },
        { num: 7, title: "Renamed Extension (Fake JPG)", desc: "You renamed photo.png to photo.jpg — the portal reads the file header.", fix: "Actually convert the file using a tool. Renaming does not change the format.", icon: "🏷️" },
        { num: 8, title: "Photo is a Screenshot", desc: "Screenshots are 72-96 DPI and often include UI elements or notification bar.", fix: "Use the original photo file. Never screenshot a photo.", icon: "📱" },
        { num: 9, title: "Photo Too Old or Mismatched", desc: "Some portals check if the photo looks drastically different from a previous submission.", fix: "Use a recent photo (within 3-6 months). Be consistent across applications.", icon: "📅" },
        { num: 10, title: "File Size Below Minimum", desc: "Over-compressed or cropped too tightly, resulting in a file under the minimum KB.", fix: "Start with a higher quality source and let our tool compress to the right range.", icon: "📉" },
    ];

    return (
        <>
            <SEOHead
                title="Why Government Exam Portal Keeps Rejecting Your Photo – 10 Reasons & Fixes"
                description="10 exact reasons why your photo gets rejected on SSC, IBPS, SBI, GATE, NEET, UPSC portals — and how to fix each one. Includes file size, format, dimension, and background issues."
                canonicalUrl="https://signatureresize.in/why-exam-portal-rejecting-photo-10-reasons"
                keywords="exam portal photo rejected, why photo rejected government exam, photo upload error exam portal, exam photo not accepted, fix photo rejection exam"
            />

            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-red-500/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Photo Rejection: 10 Reasons & Fixes" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium text-red-500">🚫 TROUBLESHOOTING</span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Why Exam Portals Keep <span className="text-red-500 underline decoration-red-500 decoration-wavy underline-offset-4">Rejecting Your Photo</span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                10 exact reasons and their fixes. Works for SSC, IBPS, SBI, GATE, NEET, UPSC, and every other Indian exam portal.
                            </p>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            <section className="mb-12">
                                <div className="space-y-4">
                                    {reasons.map((r) => (
                                        <div key={r.num} className="rounded-xl border border-border bg-card p-5">
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-lg">{r.icon}</div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-foreground">
                                                        <span className="text-red-500">#{r.num}</span> {r.title}
                                                    </h3>
                                                    <p className="mt-1 text-sm text-muted-foreground"><strong className="text-foreground">Problem:</strong> {r.desc}</p>
                                                    <p className="mt-1 text-sm text-muted-foreground"><strong className="text-green-600">Fix:</strong> {r.fix}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <AdContainer type="inarticle" className="my-8" />

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Quick Self-Check Before Uploading</h2>
                                <div className="rounded-xl border-2 border-green-500/20 bg-green-500/5 p-5">
                                    <div className="space-y-3">
                                        {[
                                            "File format is .jpg or .jpeg (not .png, .heic, .webp)",
                                            "File size is within the exam's KB range (e.g., 20-50KB)",
                                            "Dimensions match the exam's requirement (e.g., 200×230 px)",
                                            "Background is plain white",
                                            "Face is centered, clearly visible, neutral expression",
                                            "No glasses glare, no shadows on face",
                                            "Photo is recent (within 3-6 months)",
                                        ].map((check, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                                                <span className="text-sm text-muted-foreground">{check}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <section className="mb-12 rounded-xl border border-border bg-muted/30 p-5">
                                <div className="flex items-center gap-2 mb-3"><Info className="h-5 w-5 text-primary" /><h3 className="font-semibold text-foreground">Related Guides</h3></div>
                                <div className="flex flex-wrap gap-2">
                                    <Link to="/signature-resize" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Resize Tool</Link>
                                    <Link to="/signature-upload-errors-and-fixes" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Signature Upload Errors</Link>
                                    <Link to="/jpg-vs-png-for-government-exam-forms" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">JPG vs PNG Guide</Link>
                                    <Link to="/image-dpi-vs-kb-vs-pixels-exam-portals" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">DPI vs KB vs Pixels</Link>
                                    <Link to="/how-to-take-passport-photo-at-home-for-exams" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Passport Photo at Home</Link>
                                </div>
                            </section>

                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">About This Guide</h2>
                                <p className="text-muted-foreground leading-relaxed">Published by <strong className="text-foreground">SignatureResize.in</strong>. These 10 reasons are compiled from the most common rejection patterns we see across all exam portals — not guesswork.</p>
                                <p className="mt-3 text-sm text-muted-foreground"><strong className="text-foreground">Published:</strong> February 2026 | <strong className="text-foreground">Updated regularly</strong></p>
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

export default PhotoRejectionReasons;

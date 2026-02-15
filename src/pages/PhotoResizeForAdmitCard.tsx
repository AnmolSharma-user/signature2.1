import { Link } from "react-router-dom";
import { FileImage, Download, CheckCircle, Info, Ruler, HardDrive } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";

const PhotoResizeForAdmitCard = () => {
    const faqs = [
        {
            question: "What size photo is needed for an admit card?",
            answer: "It depends on the exam. Most admit cards need a passport-size photo between 20KB and 200KB in JPG format. Common dimensions are 3.5×4.5 cm or specific pixel sizes like 200×230. Check your exam notification for exact numbers, or use our tool which has presets for all major exams.",
        },
        {
            question: "Can I use the same photo for the admit card and the application form?",
            answer: "Yes, and you should. Using the same photo avoids discrepancies during verification. The photo you uploaded during registration usually appears on your admit card. If asked to paste a physical photo on the admit card, use a printout of the same digital photo.",
        },
        {
            question: "How do I resize a photo to under 100KB?",
            answer: "Upload your photo to SignatureResize.in, select a target size under 100KB, and click Resize. The tool compresses the image using smart JPEG compression that maintains clarity at small file sizes. It works for any photo — passport, signature, or document scan.",
        },
        {
            question: "My mark sheet needs a photo. What are the requirements?",
            answer: "Mark sheet photos typically follow the same specs as the original exam application. If you used a specific photo during registration, that same photo appears on the mark sheet. For manual uploads (like correction forms), use passport-size JPG under 100KB with white background.",
        },
        {
            question: "Can I use a screenshot of my photo instead of the original?",
            answer: "We do not recommend this. Screenshots reduce quality significantly — they capture screen resolution (72-96 DPI) instead of the original image resolution. The result is a blurry, pixelated photo that may be rejected. Always use the original photo file.",
        },
        {
            question: "What if I lost the original photo I used for the application?",
            answer: "Check your phone's gallery, email (if you sent it to a cyber café), WhatsApp (if you shared it), or Google Photos backup. If you cannot find it, take a new photo that looks as similar as possible and resize it to match the original specifications.",
        },
    ];

    const howToSteps = [
        { text: "Locate your passport-size photo (from phone camera or studio)" },
        { text: "Visit SignatureResize.in and select your exam or document preset" },
        { text: "Upload your photo — the tool shows current size and dimensions" },
        { text: "Set target size (e.g., under 100KB) or use the exam preset" },
        { text: "Click Resize and download the compressed JPG file" },
        { text: "Paste or upload the resized photo on your admit card or mark sheet" },
    ];

    return (
        <>
            <SEOHead
                title="Photo Resize for Admit Card & Mark Sheet: Complete Guide (JPEG Under 100KB)"
                description="Resize photos for admit cards, mark sheets, and exam documents. Get your passport photo under 100KB in JPG format. Works for all Indian government exam admit cards."
                canonicalUrl="https://signatureresize.in/photo-resize-for-admit-card-mark-sheet"
                keywords="photo resize for admit card, mark sheet photo size, resize photo under 100kb, admit card photo requirement, exam admit card photo size"
            />
            <SEOSchema type="HowTo" howToName="How to Resize Photo for Admit Card and Mark Sheet" howToSteps={howToSteps} />

            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Photo Resize for Admit Card" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600">📱 PHOTO GUIDE</span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Photo Resize for <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">Admit Card & Mark Sheet</span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                Get your passport photo under 100KB in JPEG format for any exam admit card, mark sheet, or document upload.
                            </p>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Why You Need to Resize</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Admit cards and mark sheets from government exams require a specific photo format — almost always <strong className="text-foreground">JPG under 100KB</strong>. Your phone camera produces photos of 2-5MB (2,000-5,000KB). That is 20-50x larger than what is accepted. Simply emailing or WhatsApp-sharing the photo also does not bring it down enough.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    The solution is proper compression: reduce the file size while keeping the photo clear enough for the admit card. Our tool does this in one step — select your exam, upload, download.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Common Document Photo Requirements</h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-border bg-muted/50">
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Document</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Photo Size</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Format</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Tool</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground">
                                            {[
                                                { doc: "GATE Admit Card", size: "5KB – 200KB", tool: "/gate-photo-resize", label: "Resize →" },
                                                { doc: "SSC Admit Card", size: "20KB – 50KB", tool: "/ssc-mts-signature-resize", label: "Resize →" },
                                                { doc: "NEET Admit Card", size: "10KB – 200KB", tool: "/neet-photo-signature-resize", label: "Resize →" },
                                                { doc: "UPSC Admit Card", size: "20KB – 200KB", tool: "/upsc-signature-resize", label: "Resize →" },
                                                { doc: "IBPS Admit Card", size: "20KB – 50KB", tool: "/ibps-photo-signature-resize", label: "Resize →" },
                                                { doc: "General (Under 100KB)", size: "Under 100KB", tool: "/signature-resize", label: "Resize →" },
                                            ].map((row, i) => (
                                                <tr key={i} className={`border-b border-border ${i % 2 ? "bg-muted/20" : ""}`}>
                                                    <td className="px-4 py-3 font-medium text-foreground">{row.doc}</td>
                                                    <td className="px-4 py-3">{row.size}</td>
                                                    <td className="px-4 py-3">JPG</td>
                                                    <td className="px-4 py-3"><Link to={row.tool} className="text-primary hover:underline">{row.label}</Link></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Step-by-Step: Resize Your Photo</h2>
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
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Tips for the Best Result</h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {[
                                        "Use the original photo file, not a screenshot or WhatsApp-compressed version",
                                        "Make sure the photo has a white or light background",
                                        "Crop to passport-size framing before uploading",
                                        "Check the downloaded file size matches the requirement before uploading to the portal",
                                    ].map((tip, i) => (
                                        <div key={i} className="flex items-start gap-2 rounded-lg border border-border bg-card p-3">
                                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                                            <span className="text-sm text-muted-foreground">{tip}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="mb-12 rounded-xl border border-border bg-muted/30 p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <Info className="h-5 w-5 text-primary" />
                                    <h3 className="font-semibold text-foreground">Related Guides</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <Link to="/how-to-take-passport-photo-at-home-for-exams" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Take Photo at Home</Link>
                                    <Link to="/jpg-vs-png-for-government-exam-forms" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">JPG vs PNG Guide</Link>
                                    <Link to="/image-dpi-vs-kb-vs-pixels-exam-portals" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">DPI vs KB vs Pixels</Link>
                                    <Link to="/why-exam-portal-rejecting-photo-10-reasons" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Photo Rejection Fixes</Link>
                                </div>
                            </section>

                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">About This Guide</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Published by <strong className="text-foreground">SignatureResize.in</strong>. We have helped over 100,000 students resize photos for admit cards, application forms, and mark sheets across all major Indian exams.
                                </p>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    <strong className="text-foreground">Published:</strong> February 2026 | <strong className="text-foreground">Updated regularly</strong>
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

export default PhotoResizeForAdmitCard;

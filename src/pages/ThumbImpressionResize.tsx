
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignatureResizer from "@/components/SignatureResizer";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import AdContainer from "@/components/AdContainer";
import ProcessingFeatures from "@/components/ProcessingFeatures";
import TrustBadges from "@/components/TrustBadges";
import FeatureGrid from "@/components/FeatureGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle, Fingerprint } from "lucide-react";
import { Link } from "react-router-dom";

const ThumbImpressionResize = () => {
    const faqs = [
        {
            question: "What is the left thumb impression size for government forms?",
            answer: "Most Indian government forms (IBPS, SSC, Railway, PSC) require the left thumb impression in JPG/JPEG format with file size between 10KB and 50KB. The standard dimensions are 240 × 240 pixels (square format, 3.5cm × 3.5cm).",
        },
        {
            question: "Which government exams require thumb impression upload?",
            answer: "IBPS PO/Clerk/SO/RRB, SBI PO/Clerk, RRB NTPC, RRB Group D, SSC CGL/CHSL/MTS, some PSC exams, and several other government recruitment forms require left thumb impression upload along with photo and signature.",
        },
        {
            question: "How to take a clear left thumb impression?",
            answer: "Press your left thumb firmly on a blue or black stamp pad, then press it cleanly on plain white paper. Ensure the impression is clear with visible ridges and not smudged. Photograph or scan the impression with good lighting.",
        },
        {
            question: "Which ink should I use for thumb impression?",
            answer: "Use a blue or black stamp pad ink for the thumb impression. Press firmly and evenly on the pad before pressing on the white paper. Avoid excessive ink which can cause smudging.",
        },
        {
            question: "Can I use right thumb impression instead of left?",
            answer: "Most government forms specifically require the LEFT thumb impression. Only use the right thumb if you don't have a left thumb or if the form explicitly allows it. Always check the specific exam's instructions.",
        },
        {
            question: "What is the IBPS thumb impression size?",
            answer: "IBPS requires the left thumb impression in JPG/JPEG format, file size between 10KB and 20KB, with dimensions of 240 × 240 pixels (3.5cm × 3.5cm). Use our tool to resize to exact IBPS specifications.",
        },
        {
            question: "Is this thumb impression resize tool free?",
            answer: "Yes, our thumb impression resize tool is completely free to use. All image processing happens locally in your browser — we never upload your images to any server, ensuring complete privacy and security.",
        },
        {
            question: "How to resize thumb impression for online form?",
            answer: "Upload your thumb impression image above, and our tool will automatically resize it to the standard government form specifications (10-50KB, 240×240px). Click 'Resize Now' and download the result.",
        },
    ];

    const requirements = [
        "File size: 10KB to 50KB",
        "Format: JPG/JPEG only",
        "Dimensions: 240 × 240 pixels",
        "Shape: Square (1:1 ratio)",
        "Ink: Blue or Black stamp pad",
        "Paper: Plain white, clean",
        "Left thumb only (usually)",
        "Clear ridges, no smudges",
    ];

    const howToSteps = [
        { text: "Press your left thumb on a blue/black stamp pad and then firmly on plain white paper" },
        { text: "Photograph or scan the thumb impression with good lighting and a steady hand" },
        { text: "Upload the image above — our tool auto-applies government form specifications" },
        { text: "Click 'Resize Now' to process the image to 240×240px and 10-50KB" },
        { text: "Download the resized thumb impression and upload it to the government exam portal" },
    ];

    return (
        <>
            <SEOHead
                title="Left Thumb Impression Resize Online | 10KB-50KB Free Tool 2026"
                description="Resize left thumb impression for IBPS, SSC, Railway & government exam forms. 10-50KB, 240×240px. Free, instant & 100% secure browser-based tool."
                canonicalUrl="https://signatureresize.in/thumb-impression-resize"
                keywords="left thumb impression resize, thumb impression resize online, thumb impression size in kb, ibps thumb impression size, thumb impression for government form, left thumb impression 240x240, thumb impression resize for ssc, thumb impression resize for ibps, thumb impression resize for railway, thumb impression upload online form"
            />

            <SEOSchema
                type="HowTo"
                howToName="How to Resize Left Thumb Impression for Government Exam Forms"
                howToSteps={howToSteps}
            />

            <SEOSchema
                type="FAQPage"
                faqs={faqs}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-8 sm:py-12">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Thumb Impression Resize" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                                IBPS / SSC / RAILWAY / PSC READY
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">Left Thumb Impression Resize</span> Online Free
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Resize your left thumb impression for IBPS, SSC, Railway & all government exam forms.
                                10-50KB | 240×240px | Instant, free & 100% secure.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Tool Section */}
                <main className="py-6 sm:py-8 md:py-12">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl">
                            <div className="mb-6 flex items-center justify-center gap-2">
                                <Fingerprint className="h-6 w-6 text-primary" />
                                <h2 className="text-lg sm:text-xl font-bold text-foreground">Upload Your Thumb Impression</h2>
                            </div>
                            <SignatureResizer
                                title="Upload Left Thumb Impression"
                                defaultTargetKB={30}
                                minKB={10}
                                maxKB={50}
                                maxWidth={240}
                                maxHeight={240}
                                defaultPreset="thumb-impression"
                            />

                            <AdContainer type="display" className="mt-8" />

                            {/* Requirements Section */}
                            <div className="mt-6 sm:mt-8">
                                <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 sm:p-6">
                                    <h2 className="mb-4 text-lg sm:text-xl font-bold text-foreground">
                                        Thumb Impression Requirements (Government Forms 2026)
                                    </h2>
                                    <div className="grid gap-2 sm:gap-3 sm:grid-cols-2">
                                        {requirements.map((req, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                                                <span className="text-sm sm:text-base text-muted-foreground">{req}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Section — E-E-A-T SEO Content */}
                        <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
                            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    About Left Thumb Impression for Government Forms
                                </h2>
                                <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                                    <p>
                                        Many Indian <strong>government recruitment exams and online applications</strong> now require candidates
                                        to upload a scanned image of their <strong>left thumb impression</strong> in addition to photo and signature.
                                        This includes major exams like <strong>IBPS PO/Clerk, SBI PO, SSC CGL/CHSL/MTS, RRB NTPC, RRB Group D</strong>,
                                        and various state PSC exams.
                                    </p>
                                    <p>
                                        The standard requirement is a <strong>square image of 240 × 240 pixels</strong> in JPG/JPEG format with
                                        file size between <strong>10KB and 50KB</strong>. The impression should show clear ridge patterns and must
                                        not be blurred, smudged, or overloaded with ink.
                                    </p>

                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground pt-2">
                                        How to Take a Perfect Thumb Impression
                                    </h3>
                                    <ul className="ml-6 list-disc space-y-2">
                                        <li>Clean your left thumb thoroughly and dry it before taking the impression</li>
                                        <li>Use a good quality <strong>blue or black stamp pad</strong> — avoid old or dried-out pads</li>
                                        <li>Press your thumb firmly and evenly on the stamp pad</li>
                                        <li>Press your inked thumb steadily on <strong>plain white paper</strong> — don't roll or slide</li>
                                        <li>Ensure the impression shows clear fingerprint ridges without smudges</li>
                                        <li>Photograph or scan the impression with good lighting</li>
                                        <li>Use our tool above to resize to 240×240px and 10-50KB for upload</li>
                                    </ul>

                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground pt-2">
                                        Exam-Specific Thumb Impression Requirements
                                    </h3>
                                    <div className="overflow-x-auto mt-3">
                                        <table className="w-full border-collapse text-sm">
                                            <thead>
                                                <tr className="border-b border-border bg-muted/50">
                                                    <th className="px-3 py-2 text-left font-semibold text-foreground">Exam</th>
                                                    <th className="px-3 py-2 text-left font-semibold text-foreground">Size (KB)</th>
                                                    <th className="px-3 py-2 text-left font-semibold text-foreground">Dimensions</th>
                                                    <th className="px-3 py-2 text-left font-semibold text-foreground">Format</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-border">
                                                    <td className="px-3 py-2">IBPS PO/Clerk/RRB</td>
                                                    <td className="px-3 py-2">10-20 KB</td>
                                                    <td className="px-3 py-2">240×240 px</td>
                                                    <td className="px-3 py-2">JPG</td>
                                                </tr>
                                                <tr className="border-b border-border">
                                                    <td className="px-3 py-2">SBI PO/Clerk</td>
                                                    <td className="px-3 py-2">10-20 KB</td>
                                                    <td className="px-3 py-2">240×240 px</td>
                                                    <td className="px-3 py-2">JPG</td>
                                                </tr>
                                                <tr className="border-b border-border">
                                                    <td className="px-3 py-2">SSC CGL/CHSL/MTS</td>
                                                    <td className="px-3 py-2">10-20 KB</td>
                                                    <td className="px-3 py-2">240×240 px</td>
                                                    <td className="px-3 py-2">JPG</td>
                                                </tr>
                                                <tr className="border-b border-border">
                                                    <td className="px-3 py-2">RRB NTPC/Group D</td>
                                                    <td className="px-3 py-2">10-50 KB</td>
                                                    <td className="px-3 py-2">240×240 px</td>
                                                    <td className="px-3 py-2">JPG</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground pt-2">
                                        Related Tools
                                    </h3>
                                    <p>
                                        Also need to resize photo and signature? Use our{" "}
                                        <Link to="/ibps-photo-signature-resize" className="text-primary hover:underline font-medium">IBPS Photo & Signature Resize</Link>,{" "}
                                        <Link to="/ssc-mts-signature-resize" className="text-primary hover:underline font-medium">SSC Signature Resize</Link>, and{" "}
                                        <Link to="/signature-resize" className="text-primary hover:underline font-medium">General Signature Resize</Link> tools.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* How-To Steps */}
                        <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
                            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    How to Resize Thumb Impression for Government Forms
                                </h2>
                                <div className="space-y-4">
                                    {howToSteps.map((step, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                                                {index + 1}
                                            </div>
                                            <p className="text-sm sm:text-base text-muted-foreground pt-1">{step.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Feature Grid */}
                        <div className="mx-auto mt-12 sm:mt-16 max-w-6xl">
                            <div className="mb-8 sm:mb-10 text-center">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
                                    Thumb Impression Resizer Features
                                </h2>
                                <p className="text-muted-foreground text-sm sm:text-base">
                                    Resize your left thumb impression for any government exam form in just a few clicks!
                                </p>
                            </div>
                            <FeatureGrid examName="Government Exam" />
                        </div>

                        {/* Processing Features */}
                        <div className="mx-auto mt-12 sm:mt-16 max-w-3xl">
                            <ProcessingFeatures />
                        </div>

                        {/* Trust Badges */}
                        <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
                            <TrustBadges />
                        </div>
                    </div>
                </main>

                <FAQSection faqs={faqs} />
                <Footer />
            </div>
        </>
    );
};

export default ThumbImpressionResize;

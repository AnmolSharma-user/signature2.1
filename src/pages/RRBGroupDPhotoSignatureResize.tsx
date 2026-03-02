import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignatureResizer from "@/components/SignatureResizer";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import ProcessingFeatures from "@/components/ProcessingFeatures";
import TrustBadges from "@/components/TrustBadges";
import FeatureGrid from "@/components/FeatureGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdContainer from "@/components/AdContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Camera, PenTool, Fingerprint, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const RRBGroupDPhotoSignatureResize = () => {
    const faqs = [
        {
            question: "What is the RRB Group D photo size requirement 2026?",
            answer: "RRB Group D 2026 requires a passport-size color photograph in JPG/JPEG format. File size must be between 20KB and 50KB. Dimensions should be approximately 200×230 pixels (3.5cm × 4.5cm). The background must be plain white and the photo must be recent (taken within 3 months). No selfies or studio filters allowed.",
        },
        {
            question: "What is the RRB Group D signature size in KB?",
            answer: "The RRB Group D signature must be in JPG/JPEG format with file size between 10KB and 40KB. The signature dimensions should be approximately 140×60 pixels (3.5cm × 1.5cm). Sign with black ink on plain white paper, scan clearly, and use our tool to resize to the required KB before uploading.",
        },
        {
            question: "What is the RRB Group D thumb impression size requirement?",
            answer: "RRB Group D requires a left thumb impression in JPG/JPEG format, file size between 10KB and 50KB, with dimensions of approximately 100×100 pixels. Press your left thumb on a white sheet, scan clearly, and resize using our thumb tab above.",
        },
        {
            question: "Can I use PNG format for RRB Group D application?",
            answer: "No. RRB Group D portal strictly accepts only JPG/JPEG format for photo, signature, and thumb impression. Our tool automatically outputs in JPG format, ensuring full compatibility with the RRB online portal.",
        },
        {
            question: "How do I resize my photo for RRB Group D 2026?",
            answer: "Select the 'Photo' tab above, upload your passport-size photo, and the tool will automatically apply RRB Group D specifications (20–50KB, 200×230px). Click Resize and download the output. Upload instantly to the RRB OJAS portal.",
        },
        {
            question: "What happens if my RRB Group D photo is rejected?",
            answer: "Common rejection reasons include: file size outside 20–50KB range, wrong format (PNG instead of JPG), background not white, photo older than 3 months, or unclear/blurred image. Use our tool to ensure all specifications are met before submitting.",
        },
        {
            question: "Is this RRB Group D resize tool free to use?",
            answer: "Yes, this tool is 100% free with no registration required. All processing happens locally in your browser — your images are never uploaded to any server, ensuring complete privacy.",
        },
        {
            question: "How many vacancies are there in RRB Group D 2026?",
            answer: "RRB Group D 2026 recruitment is for approximately 32,000+ vacancies across various railway zones in India. The application process requires uploading a photo, signature, and left thumb impression meeting exact specifications.",
        },
    ];

    const photoRequirements = [
        "File size: 20KB to 50KB",
        "Format: JPG/JPEG only",
        "Dimensions: 200 × 230 pixels",
        "Real-world size: 3.5cm × 4.5cm",
        "Background: Plain White only",
        "Face coverage: 70–80%",
        "Recent photo (within 3 months)",
        "No sunglasses or caps",
    ];

    const signatureRequirements = [
        "File size: 10KB to 40KB",
        "Format: JPG/JPEG only",
        "Dimensions: 140 × 60 pixels approx.",
        "Black ink on white paper",
        "Running hand (no block letters)",
        "Clear and legible",
        "No smudges or shadows",
        "Consistent signature required",
    ];

    const thumbRequirements = [
        "File size: 10KB to 50KB",
        "Format: JPG/JPEG only",
        "Dimensions: ~100 × 100 pixels",
        "Left thumb impression only",
        "Clear stamp on white paper",
        "No blur or smudging",
        "Must be freshly inked",
        "Scan at minimum 150 DPI",
    ];

    const howToSteps = [
        { text: "Select the 'Photo', 'Signature', or 'Thumb' tab based on what you need to resize" },
        { text: "Upload your image file (JPG, JPEG, or PNG format accepted)" },
        { text: "The tool auto-applies RRB Group D 2026 specifications — no manual settings needed" },
        { text: "Click 'Resize Now' to process. Processing takes 1–2 seconds and runs in your browser" },
        { text: "Download the resized file and upload directly to the RRB OJAS online portal" },
    ];

    const speakableContent = "RRB Group D 2026 requires a passport-size photo between 20KB and 50KB, a signature between 10KB and 40KB, and a left thumb impression between 10KB and 50KB. All uploads must be in JPG format. Use this free tool to resize all three documents instantly.";

    return (
        <>
            <SEOHead
                title="RRB Group D Photo & Signature Resize 2026 | Free Online Tool"
                description="Resize photo (20–50KB), signature (10–40KB) and thumb impression for RRB Group D 2026. Free online tool with RRB-specific presets. JPG output, instant, 100% secure."
                canonicalUrl="https://signatureresize.in/rrb-group-d-photo-signature-resize"
                keywords="rrb group d photo resize, rrb group d signature size, rrb group d photo size in kb, rrb group d 2026 photo signature, railway group d photo resize, rrb group d thumb impression resize, rrb ojas photo size, rrb group d application photo"
                ogImage="https://signatureresize.in/assest/rrb-group-d-photo-signature-resize.png"
            />

            {/* Speakable Schema for AI voice assistants */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "RRB Group D Photo & Signature Resize 2026",
                        "speakable": {
                            "@type": "SpeakableSpecification",
                            "cssSelector": [".speakable-summary", "h1", ".speakable-steps"]
                        },
                        "url": "https://signatureresize.in/rrb-group-d-photo-signature-resize"
                    })
                }}
            />

            <SEOSchema
                type="HowTo"
                howToName="How to Resize Photo and Signature for RRB Group D 2026 Application"
                howToSteps={howToSteps}
            />

            {/* FAQPage Schema for AI Overview */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />

            {/* WebApplication Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "RRB Group D Photo & Signature Resize Tool",
                        "url": "https://signatureresize.in/rrb-group-d-photo-signature-resize",
                        "description": "Free online tool to resize photo, signature and thumb impression for RRB Group D 2026 recruitment application",
                        "applicationCategory": "UtilityApplication",
                        "operatingSystem": "Any",
                        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
                        "author": { "@id": "https://signatureresize.in/#author" },
                        "publisher": { "@id": "https://signatureresize.in/#organization" }
                    })
                }}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 via-primary/5 to-background py-8 sm:py-12">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "RRB Group D Photo & Signature Resize" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <div className="mb-3 flex items-center justify-center gap-2">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 dark:bg-red-900/30 px-4 py-1.5 text-sm font-semibold text-red-700 dark:text-red-400">
                                    <AlertTriangle className="h-4 w-4" />
                                    RRB GROUP D 2026 — APPLICATION OPEN
                                </span>
                            </div>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                <span className="text-primary">RRB Group D</span> Photo & Signature Resize 2026
                            </h1>
                            <p className="speakable-summary text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                                Resize photo (20–50 KB), signature (10–40 KB) and left thumb impression for RRB Group D 2026 recruitment. Free, instant, and 100% secure — all processing in your browser.
                            </p>

                            {/* Quick spec badges */}
                            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
                                {[
                                    { label: "Photo: 20–50 KB", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
                                    { label: "Signature: 10–40 KB", color: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" },
                                    { label: "Thumb: 10–50 KB", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400" },
                                    { label: "Format: JPG only", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400" },
                                ].map((badge) => (
                                    <span key={badge.label} className={`rounded-full px-3 py-1 font-medium ${badge.color}`}>
                                        {badge.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Tool */}
                <main className="py-6 sm:py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl">
                            <Tabs defaultValue="photo" className="w-full">
                                <TabsList className="grid w-full grid-cols-3 mb-6 h-12 sm:h-14">
                                    <TabsTrigger value="photo" className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                                        <Camera className="h-4 w-4" />
                                        Photo
                                    </TabsTrigger>
                                    <TabsTrigger value="signature" className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                                        <PenTool className="h-4 w-4" />
                                        Signature
                                    </TabsTrigger>
                                    <TabsTrigger value="thumb" className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                                        <Fingerprint className="h-4 w-4" />
                                        Thumb
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="photo" className="animate-fade-in">
                                    <SignatureResizer
                                        title="Upload Your RRB Group D Photo"
                                        defaultTargetKB={35}
                                        minKB={20}
                                        maxKB={50}
                                        maxWidth={200}
                                        maxHeight={230}
                                        defaultPreset="rrb-photo"
                                    />
                                </TabsContent>

                                <TabsContent value="signature" className="animate-fade-in">
                                    <SignatureResizer
                                        title="Upload Your RRB Group D Signature"
                                        defaultTargetKB={20}
                                        minKB={10}
                                        maxKB={40}
                                        maxWidth={140}
                                        maxHeight={60}
                                        defaultPreset="rrb-signature"
                                    />
                                </TabsContent>

                                <TabsContent value="thumb" className="animate-fade-in">
                                    <SignatureResizer
                                        title="Upload Your Left Thumb Impression"
                                        defaultTargetKB={25}
                                        minKB={10}
                                        maxKB={50}
                                        maxWidth={100}
                                        maxHeight={100}
                                        defaultPreset="rrb-thumb"
                                    />
                                </TabsContent>
                            </Tabs>

                            {/* Requirements grid */}
                            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                {[
                                    { title: "Photo Requirements", items: photoRequirements, icon: Camera, color: "border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30" },
                                    { title: "Signature Requirements", items: signatureRequirements, icon: PenTool, color: "border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/30" },
                                    { title: "Thumb Requirements", items: thumbRequirements, icon: Fingerprint, color: "border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-950/30" },
                                ].map(({ title, items, icon: Icon, color }) => (
                                    <div key={title} className={`rounded-xl border-2 p-4 ${color}`}>
                                        <div className="mb-3 flex items-center gap-2">
                                            <Icon className="h-5 w-5 text-primary" />
                                            <h2 className="text-sm font-bold text-foreground">{title}</h2>
                                        </div>
                                        <ul className="space-y-1.5">
                                            {items.map((req, i) => (
                                                <li key={i} className="flex items-start gap-1.5">
                                                    <CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0" />
                                                    <span className="text-xs text-muted-foreground">{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <AdContainer type="display" />
                        </div>

                        {/* Detailed Specs Table */}
                        <div className="mx-auto mt-12 max-w-4xl">
                            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    RRB Group D 2026 — Complete Photo & Signature Specifications
                                </h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="bg-primary text-primary-foreground">
                                                <th className="p-3 text-left rounded-tl-lg">Document</th>
                                                <th className="p-3 text-left">File Size</th>
                                                <th className="p-3 text-left">Dimensions</th>
                                                <th className="p-3 text-left">Format</th>
                                                <th className="p-3 text-left rounded-tr-lg">Background</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border">
                                            <tr className="hover:bg-muted/50">
                                                <td className="p-3 font-medium text-foreground">Passport Photo</td>
                                                <td className="p-3 text-muted-foreground">20 KB – 50 KB</td>
                                                <td className="p-3 text-muted-foreground">200 × 230 px</td>
                                                <td className="p-3 text-muted-foreground">JPG / JPEG</td>
                                                <td className="p-3 text-muted-foreground">White only</td>
                                            </tr>
                                            <tr className="hover:bg-muted/50">
                                                <td className="p-3 font-medium text-foreground">Signature</td>
                                                <td className="p-3 text-muted-foreground">10 KB – 40 KB</td>
                                                <td className="p-3 text-muted-foreground">140 × 60 px</td>
                                                <td className="p-3 text-muted-foreground">JPG / JPEG</td>
                                                <td className="p-3 text-muted-foreground">White paper</td>
                                            </tr>
                                            <tr className="hover:bg-muted/50">
                                                <td className="p-3 font-medium text-foreground">Left Thumb</td>
                                                <td className="p-3 text-muted-foreground">10 KB – 50 KB</td>
                                                <td className="p-3 text-muted-foreground">100 × 100 px</td>
                                                <td className="p-3 text-muted-foreground">JPG / JPEG</td>
                                                <td className="p-3 text-muted-foreground">White paper</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <AdContainer type="inarticle" className="my-6" />

                                <div className="speakable-steps mt-6 space-y-4 text-muted-foreground text-sm sm:text-base">
                                    <h3 className="text-lg font-semibold text-foreground">About RRB Group D 2026 Recruitment</h3>
                                    <p>
                                        The <strong className="text-foreground">Railway Recruitment Board (RRB) Group D 2026</strong> recruitment is one of India's largest hiring drives, offering approximately 32,000+ vacancies across all major railway zones. Positions include Level-1 posts such as Track Maintainer, Helper/Assistant, Porter, Gateman and more.
                                    </p>
                                    <p>
                                        The online application through the <strong className="text-foreground">RRB OJAS portal</strong> requires candidates to upload three documents: a passport-size photograph, a handwritten signature, and a left thumb impression — all in JPG format with specific KB size limits. Incorrect file sizes or formats result in instant rejection without explanation.
                                    </p>

                                    <h3 className="text-lg font-semibold text-foreground">How to Prepare Your Photo for RRB Group D</h3>
                                    <ul className="ml-5 list-disc space-y-2">
                                        <li>Get a recent passport-size color photo taken by a professional photographer</li>
                                        <li>Ensure the background is <strong className="text-foreground">plain white</strong> — cream, grey, or off-white will be rejected</li>
                                        <li>Face must cover 70–80% of the frame, both ears visible, looking straight at camera</li>
                                        <li>No caps, hats, or sunglasses. Spectacles with anti-glare coating are acceptable</li>
                                        <li>Use our Photo tab above to resize to exactly 20–50 KB with correct dimensions</li>
                                    </ul>

                                    <h3 className="text-lg font-semibold text-foreground">How to Prepare Your Signature for RRB Group D</h3>
                                    <ul className="ml-5 list-disc space-y-2">
                                        <li>Sign with a <strong className="text-foreground">black ballpoint pen</strong> on a clean white sheet of paper</li>
                                        <li>Write in <strong className="text-foreground">running hand</strong> (cursive) — block/capital letters are rejected</li>
                                        <li>Photograph or scan the signature. Crop tightly so only the signature is visible</li>
                                        <li>Use the Signature tab above to resize to 10–40 KB</li>
                                        <li>Your exam day signature must match the uploaded signature</li>
                                    </ul>

                                    <h3 className="text-lg font-semibold text-foreground">Related Tools & Guides</h3>
                                    <p>
                                        Appearing for other Railway exams? Check our{" "}
                                        <Link to="/ntpc-signature-resize" className="text-primary hover:underline font-medium">RRB NTPC Signature Resize</Link>,{" "}
                                        <Link to="/exam-photo-signature-requirements-2026" className="text-primary hover:underline font-medium">Exam Requirements 2026</Link>, and{" "}
                                        <Link to="/signature-upload-errors-and-fixes" className="text-primary hover:underline font-medium">Upload Errors & Fixes</Link> pages.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Author Bio — EEAT */}
                        <div className="mx-auto mt-8 max-w-4xl">
                            <div className="rounded-xl border border-border bg-card/50 p-5 flex items-start gap-4">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-primary">SR</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">Written by SignatureResize Editorial Team</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Our team has reviewed official RRB Group D recruitment notifications and OJAS portal requirements to compile this guide. We update specifications with every new railway recruitment cycle.{" "}
                                        <Link to="/about-us" className="text-primary hover:underline">Learn more about us →</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <AdContainer type="infeed" className="mx-auto max-w-4xl" />

                        <div className="mx-auto mt-10 max-w-6xl">
                            <FeatureGrid examName="RRB Group D" />
                        </div>

                        <div className="mx-auto mt-10 max-w-3xl">
                            <ProcessingFeatures />
                        </div>
                        <div className="mx-auto mt-10 max-w-4xl">
                            <TrustBadges />
                        </div>
                    </div>
                </main>

                <FAQSection faqs={faqs} />
                <AdContainer type="multiplex" className="container mx-auto px-4 mb-6" />
                <Footer />
            </div>
        </>
    );
};

export default RRBGroupDPhotoSignatureResize;


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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Camera, PenTool } from "lucide-react";
import SignatureCreatorBanner from "@/components/SignatureCreatorBanner";
import { Link } from "react-router-dom";
import AdContainer from "@/components/AdContainer";

const NEETPhotoSignatureResize = () => {
    const faqs = [
        {
            question: "What is the NEET photo size requirement?",
            answer: "NEET UG application requires a photograph in JPG/JPEG format with file size between 10KB and 200KB. The recommended dimensions are 3.5cm × 4.5cm (approximately 200×230 pixels at 150 DPI) with a white background.",
        },
        {
            question: "What is the NEET signature size requirement?",
            answer: "The NEET UG signature must be in JPG/JPEG format with file size between 4KB and 30KB. Recommended dimensions are approximately 3.5cm × 1.5cm (about 140×60 pixels). The signature should be in black ink on white paper.",
        },
        {
            question: "Can I use PNG format for NEET application?",
            answer: "No, the NTA NEET UG application only accepts JPG/JPEG format for both photo and signature uploads. Our tool automatically converts and outputs in JPG format for full compatibility.",
        },
        {
            question: "What background is required for NEET photo?",
            answer: "Use a plain white background for the NEET application photo. The face should be clearly visible with 70-80% face coverage. Ensure proper lighting without shadows. The photo must be recent and in color.",
        },
        {
            question: "Should the NEET signature be in capital letters?",
            answer: "No. NTA requires the signature in running handwriting, NOT in capital/block letters. Sign with a black ballpoint pen on white paper. The signature should be consistent with what you'll sign on the exam day.",
        },
        {
            question: "Is this NEET photo resize tool free?",
            answer: "Yes, our NEET photo and signature resize tool is 100% free. All processing happens locally in your browser — your images are never uploaded to any server, ensuring complete privacy and security.",
        },
        {
            question: "What happens if my NEET photo is rejected?",
            answer: "Common reasons for rejection include incorrect file size, wrong dimensions, blurred image, non-white background, or signature in block letters. Use our tool to ensure your photo meets all NEET specifications before uploading.",
        },
        {
            question: "How to resize photo for NEET 2026?",
            answer: "Upload your photo in the 'Photo Resize' tab above, and our tool will automatically apply NEET specifications (10-200KB, ~200×230px). Click 'Resize Now' and download the resized image to upload on the NTA NEET portal.",
        },
    ];

    const photoRequirements = [
        "File size: 10KB to 200KB",
        "Format: JPG/JPEG only",
        "Dimensions: ~200 × 230 pixels",
        "Size: 3.5cm × 4.5cm",
        "Background: Plain White",
        "Face coverage: 70-80%",
        "Recent color photograph",
        "No selfies or edited photos",
    ];

    const signatureRequirements = [
        "File size: 4KB to 30KB",
        "Format: JPG/JPEG only",
        "Dimensions: ~140 × 60 pixels",
        "Size: 3.5cm × 1.5cm",
        "Ink: Black ballpoint pen only",
        "Paper: Plain white, unruled",
        "Running hand (NOT block letters)",
        "Clear, steady & legible",
    ];

    const howToSteps = [
        { text: "Select the 'Photo Resize' or 'Signature Resize' tab based on what you need" },
        { text: "Upload your photograph or signature image (JPG, JPEG, or PNG format)" },
        { text: "The tool automatically applies NEET-compliant size and dimension settings" },
        { text: "Click 'Resize Now' to process your image to NEET UG specifications" },
        { text: "Download the resized image and upload it to the NTA NEET application portal" },
    ];

    return (
        <>
            <SEOHead
                title="NEET Photo & Signature Resize Online | 10KB-200KB Free Tool 2026"
                description="Resize photo & signature for NEET UG 2026 application. Photo 10-200KB (3.5×4.5cm), Signature 4-30KB (3.5×1.5cm). Free, instant & 100% secure online tool by NTA standards."
                canonicalUrl="https://signatureresize.in/neet-photo-signature-resize"
                keywords="neet photo resize, neet signature resize, neet photo size in kb, neet ug photo signature upload, neet 2026 photo size, neet signature size 4kb to 30kb, resize photo for neet, nta neet photo requirements, neet application photo dimensions, neet signature running hand"
            />

            <SEOSchema
                type="HowTo"
                howToName="How to Resize Photo and Signature for NEET UG 2026 Application"
                howToSteps={howToSteps}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-8 sm:py-12">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "NEET Photo & Signature Resize" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                                NTA NEET UG 2026 READY
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">NEET Photo & Signature Resize</span> Online Free
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Resize your photograph and signature for NTA NEET UG 2026 application.
                                Photo: 10-200KB | Signature: 4-30KB. Instant, free & 100% secure.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Tool Section with Tabs */}
                <main className="py-6 sm:py-8 md:py-12">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl">
                            <Tabs defaultValue="photo" className="w-full">
                                <TabsList className="grid w-full grid-cols-2 mb-6 h-12 sm:h-14">
                                    <TabsTrigger value="photo" className="flex items-center gap-2 text-sm sm:text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                                        <Camera className="h-4 w-4 sm:h-5 sm:w-5" />
                                        Photo Resize
                                    </TabsTrigger>
                                    <TabsTrigger value="signature" className="flex items-center gap-2 text-sm sm:text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                                        <PenTool className="h-4 w-4 sm:h-5 sm:w-5" />
                                        Signature Resize
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="photo" className="animate-fade-in">
                                    <SignatureResizer
                                        title="Upload Your NEET Photo"
                                        defaultTargetKB={100}
                                        minKB={10}
                                        maxKB={200}
                                        maxWidth={200}
                                        maxHeight={230}
                                        defaultPreset="neet-photo"
                                    />
                                </TabsContent>

                                <TabsContent value="signature" className="animate-fade-in">
                                    <SignatureResizer
                                        title="Upload Your NEET Signature"
                                        defaultTargetKB={15}
                                        minKB={4}
                                        maxKB={30}
                                        maxWidth={140}
                                        maxHeight={60}
                                        defaultPreset="neet-signature"
                                    />
                                </TabsContent>
                            </Tabs>

                            {/* Requirements Section */}
                            <div className="mt-6 sm:mt-8 space-y-6">
                                <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 sm:p-6">
                                    <h2 className="mb-4 text-lg sm:text-xl font-bold text-foreground">
                                        NEET UG Photo Requirements (NTA 2026)
                                    </h2>
                                    <div className="grid gap-2 sm:gap-3 sm:grid-cols-2">
                                        {photoRequirements.map((req, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                                                <span className="text-sm sm:text-base text-muted-foreground">{req}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 sm:p-6">
                                    <h2 className="mb-4 text-lg sm:text-xl font-bold text-foreground">
                                        NEET UG Signature Requirements (NTA 2026)
                                    </h2>
                                    <div className="grid gap-2 sm:gap-3 sm:grid-cols-2">
                                        {signatureRequirements.map((req, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                                                <span className="text-sm sm:text-base text-muted-foreground">{req}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <SignatureCreatorBanner />

                            {/* Display ad below tool */}
                            <AdContainer type="display" />
                        </div>

                        {/* About NEET Section — E-E-A-T SEO Content */}
                        <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
                            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    About NEET UG Photo & Signature Upload Requirements
                                </h2>
                                <figure className="mb-6">
                                    <img
                                        src="/assest/NEET-Photo-Signature-Resize-Online-Free.png"
                                        alt="NEET Photo and Signature Resize Online Free — NTA NEET UG photo 10-200KB, signature 4-30KB resize tool"
                                        className="w-full rounded-lg border border-border shadow-md"
                                        loading="lazy"
                                        decoding="async"
                                        width="1200"
                                        height="630"
                                    />
                                    <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                                        Resize photo & signature for NEET UG 2026 application — free online tool
                                    </figcaption>
                                </figure>
                                <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                                    <p>
                                        The <strong>National Eligibility cum Entrance Test (NEET UG)</strong>, conducted by NTA (National Testing Agency),
                                        is India's single largest medical entrance exam with over <strong>20 lakh applicants</strong> each year.
                                        During online registration, candidates must upload a clear photograph and signature in the exact format
                                        specified by NTA — failure to comply can lead to application rejection.
                                    </p>
                                    <p>
                                        The NEET 2026 application requires your <strong>photograph between 10KB and 200KB</strong> in JPG/JPEG
                                        format with size of <strong>3.5cm × 4.5cm</strong> (approximately 200×230 pixels). Your
                                        <strong> signature must be between 4KB and 30KB</strong> in JPG/JPEG format with size of
                                        <strong> 3.5cm × 1.5cm</strong> (approximately 140×60 pixels).
                                    </p>

                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground pt-2">
                                        How to Prepare Your NEET Photo
                                    </h3>
                                    <ul className="ml-6 list-disc space-y-2">
                                        <li>Take a recent passport-size color photograph with a plain white background</li>
                                        <li>Ensure 70-80% face coverage with both ears clearly visible</li>
                                        <li>Do not wear caps, sunglasses, or dark glasses (spectacles are allowed)</li>
                                        <li>The photo must match the candidate's appearance on exam day</li>
                                        <li>Avoid selfies, scanned copies, or digitally edited photos</li>
                                        <li>Use our free tool above to resize to 10-200KB with correct dimensions</li>
                                    </ul>

                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground pt-2">
                                        How to Prepare Your NEET Signature
                                    </h3>
                                    <ul className="ml-6 list-disc space-y-2">
                                        <li>Sign on plain white unruled paper with <strong>black ballpoint pen only</strong></li>
                                        <li>Write in <strong>running hand</strong> — block/capital letters are NOT accepted</li>
                                        <li>Ensure the signature is clear, steady, and matches your admit card signature</li>
                                        <li>Scan or photograph the signature and crop tightly around it</li>
                                        <li>Use our tool to resize to 4-30KB with correct dimensions</li>
                                    </ul>

                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground pt-2">
                                        Related Tools
                                    </h3>
                                    <p>
                                        Need to resize for other exams? Check out our{" "}
                                        <Link to="/jee-signature-resize" className="text-primary hover:underline font-medium">JEE Signature Resize</Link>,{" "}
                                        <Link to="/gate-signature-resize" className="text-primary hover:underline font-medium">GATE Signature Resize</Link>, and{" "}
                                        <Link to="/upsc-signature-resize" className="text-primary hover:underline font-medium">UPSC Signature Resize</Link> tools.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* How-To Steps */}
                        <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
                            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    How to Resize Photo & Signature for NEET 2026
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
                                    NEET Photo & Signature Resizer Features
                                </h2>
                                <p className="text-muted-foreground text-sm sm:text-base">
                                    Resize your photo and signature for NTA NEET UG application in just a few clicks!
                                </p>
                            </div>
                            <FeatureGrid examName="NEET" />
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

export default NEETPhotoSignatureResize;

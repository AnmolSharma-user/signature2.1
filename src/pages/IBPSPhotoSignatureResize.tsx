
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
import { Link } from "react-router-dom";
import AdContainer from "@/components/AdContainer";

const IBPSPhotoSignatureResize = () => {
    const faqs = [
        {
            question: "What is the IBPS photo size requirement?",
            answer: "IBPS (PO, Clerk, SO, RRB) requires a photograph in JPG/JPEG format with file size between 20KB and 50KB. The recommended dimensions are 200 × 230 pixels (4.5cm × 3.5cm) with a white background.",
        },
        {
            question: "What is the IBPS signature size requirement?",
            answer: "The IBPS signature must be in JPG/JPEG format with file size between 10KB and 20KB. Recommended dimensions are 140 × 60 pixels (3.5cm × 1.5cm). The signature should be in black ink on white paper.",
        },
        {
            question: "What is the IBPS left thumb impression requirement?",
            answer: "IBPS also requires a left thumb impression in JPG/JPEG format with file size between 10KB and 20KB. Dimensions should be 240 × 240 pixels (3.5cm × 3.5cm). Use black or blue stamp pad ink on white paper.",
        },
        {
            question: "Is the IBPS photo requirement same for PO, Clerk, and RRB?",
            answer: "Yes, IBPS follows the same photo and signature specifications for all its exams — PO, Clerk, SO, and RRB PO/Clerk. Photo: 20-50KB (200×230px) and Signature: 10-20KB (140×60px).",
        },
        {
            question: "What background is required for IBPS photo?",
            answer: "Use a plain white or very light-colored background. The photo should be a recent passport-size color photograph. Face should occupy about 70-80% of the frame with both ears visible.",
        },
        {
            question: "Should IBPS signature be in capital letters?",
            answer: "No. IBPS requires the signature in running handwriting, not in capital or block letters. Sign with black ink pen on white paper. The signature must match the one you sign on exam day.",
        },
        {
            question: "Is this IBPS photo resize tool free?",
            answer: "Yes, our IBPS photo and signature resize tool is completely free. All processing happens locally in your browser — your images are never uploaded to any server, ensuring complete privacy.",
        },
        {
            question: "How to resize photo for IBPS PO 2026?",
            answer: "Upload your photo in the 'Photo Resize' tab and our tool automatically applies IBPS specifications (20-50KB, 200×230px). Click 'Resize Now' and download the resized image for uploading on the IBPS portal.",
        },
    ];

    const photoRequirements = [
        "File size: 20KB to 50KB",
        "Format: JPG/JPEG only",
        "Dimensions: 200 × 230 pixels",
        "Size: 3.5cm × 4.5cm",
        "Background: Plain White",
        "Face coverage: 70-80%",
        "Recent color photograph",
        "Both ears clearly visible",
    ];

    const signatureRequirements = [
        "File size: 10KB to 20KB",
        "Format: JPG/JPEG only",
        "Dimensions: 140 × 60 pixels",
        "Size: 3.5cm × 1.5cm",
        "Ink: Black pen only",
        "Paper: Plain white, unruled",
        "Running hand (NOT block letters)",
        "Clear, steady & legible",
    ];

    const howToSteps = [
        { text: "Select the 'Photo Resize' or 'Signature Resize' tab based on what you need" },
        { text: "Upload your photograph or signature image (JPG, JPEG, or PNG format)" },
        { text: "The tool automatically applies IBPS-compliant size and dimension settings" },
        { text: "Click 'Resize Now' to process your image to IBPS specifications" },
        { text: "Download the resized image and upload it to the IBPS application portal" },
    ];

    return (
        <>
            <SEOHead
                title="IBPS Photo & Signature Resize Online | 20KB-50KB Free Tool 2026"
                description="Resize photo & signature for IBPS PO, Clerk, SO & RRB 2026. Photo 20-50KB (200×230px), Signature 10-20KB (140×60px). Free, instant & 100% secure online tool."
                canonicalUrl="https://signatureresize.in/ibps-photo-signature-resize"
                keywords="ibps photo resize, ibps signature resize, ibps po photo size in kb, ibps clerk signature size, ibps rrb photo resize, bank exam photo resize online, ibps photo 200x230, ibps signature 10kb to 20kb, ibps po 2026 photo upload, ibps left thumb impression size"
            />

            <SEOSchema
                type="HowTo"
                howToName="How to Resize Photo and Signature for IBPS PO/Clerk/RRB Application"
                howToSteps={howToSteps}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-8 sm:py-12">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "IBPS Photo & Signature Resize" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                                IBPS PO / CLERK / SO / RRB 2026 READY
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">IBPS Photo & Signature Resize</span> Online Free
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Resize your photograph and signature for IBPS PO, Clerk, SO & RRB exams.
                                Photo: 20-50KB | Signature: 10-20KB. Instant, free & 100% secure.
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
                                        title="Upload Your IBPS Photo"
                                        defaultTargetKB={35}
                                        minKB={20}
                                        maxKB={50}
                                        maxWidth={200}
                                        maxHeight={230}
                                        defaultPreset="ibps-photo"
                                    />
                                </TabsContent>

                                <TabsContent value="signature" className="animate-fade-in">
                                    <SignatureResizer
                                        title="Upload Your IBPS Signature"
                                        defaultTargetKB={15}
                                        minKB={10}
                                        maxKB={20}
                                        maxWidth={140}
                                        maxHeight={60}
                                        defaultPreset="ibps"
                                    />
                                </TabsContent>
                            </Tabs>

                            {/* Requirements Section */}
                            <div className="mt-6 sm:mt-8 space-y-6">
                                <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 sm:p-6">
                                    <h2 className="mb-4 text-lg sm:text-xl font-bold text-foreground">
                                        IBPS Photo Requirements (PO/Clerk/SO/RRB 2026)
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
                                        IBPS Signature Requirements (PO/Clerk/SO/RRB 2026)
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
                        </div>

                        {/* Display ad below tool */}
                        <AdContainer type="display" />

                        {/* About IBPS Section — E-E-A-T SEO Content */}
                        <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
                            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    About IBPS Photo & Signature Upload Requirements
                                </h2>
                                <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                                    <p>
                                        The <strong>Institute of Banking Personnel Selection (IBPS)</strong> conducts recruitment exams for
                                        public sector banks across India, including <strong>IBPS PO, IBPS Clerk, IBPS SO, and IBPS RRB</strong> (PO & Clerk).
                                        Lakhs of candidates apply each year, and one of the most common issues during registration is uploading
                                        the photo and signature in the exact specifications required by IBPS.
                                    </p>
                                    <p>
                                        IBPS requires your <strong>photograph between 20KB and 50KB</strong> in JPG/JPEG format with
                                        dimensions of <strong>200 × 230 pixels</strong> (3.5cm × 4.5cm). Your
                                        <strong> signature must be between 10KB and 20KB</strong> in JPG/JPEG format with dimensions of
                                        <strong> 140 × 60 pixels</strong> (3.5cm × 1.5cm).
                                    </p>

                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground pt-2">
                                        How to Prepare Your IBPS Photo
                                    </h3>
                                    <ul className="ml-6 list-disc space-y-2">
                                        <li>Take a recent passport-size color photograph with a plain white background</li>
                                        <li>Face should occupy 70-80% of the frame with both ears visible</li>
                                        <li>Do not wear caps or dark sunglasses (spectacles are allowed if normally worn)</li>
                                        <li>Name and date of photography should be printed on the photo</li>
                                        <li>The photo must be taken within 6 months of the application date</li>
                                        <li>Use our free tool above to resize to 20-50KB with correct 200×230 dimensions</li>
                                    </ul>

                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground pt-2">
                                        How to Prepare Your IBPS Signature
                                    </h3>
                                    <ul className="ml-6 list-disc space-y-2">
                                        <li>Sign on plain white unruled paper with <strong>black ink pen</strong></li>
                                        <li>Write in running hand — signatures in block/capital letters will be rejected</li>
                                        <li>The signature must be consistent with what you sign on the admit card and exam sheet</li>
                                        <li>Scan or photograph the signature with good lighting and crop tightly</li>
                                        <li>Use our tool to resize to 10-20KB with correct 140×60 dimensions</li>
                                    </ul>

                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground pt-2">
                                        Related Tools
                                    </h3>
                                    <p>
                                        Need to resize for other exams? Try our{" "}
                                        <Link to="/signature-resize-10-to-20-kb" className="text-primary hover:underline font-medium">10-20KB Signature Resize</Link>,{" "}
                                        <Link to="/ssc-mts-signature-resize" className="text-primary hover:underline font-medium">SSC Signature Resize</Link>, and{" "}
                                        <Link to="/ntpc-signature-resize" className="text-primary hover:underline font-medium">NTPC Signature Resize</Link> tools.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* How-To Steps */}
                        <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
                            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    How to Resize Photo & Signature for IBPS 2026
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
                                    IBPS Photo & Signature Resizer Features
                                </h2>
                                <p className="text-muted-foreground text-sm sm:text-base">
                                    Resize your photo and signature for IBPS PO, Clerk, SO & RRB exams in just a few clicks!
                                </p>
                            </div>
                            <FeatureGrid examName="IBPS" />
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

export default IBPSPhotoSignatureResize;

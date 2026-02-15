
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

const GDSPhotoSignatureResize = () => {
  const faqs = [
    {
      question: "What is the GDS photo size requirement for India Post?",
      answer: "India Post GDS (Gramin Dak Sevak) application requires a photograph in JPG/JPEG format with file size between 30KB and 100KB. The recommended dimensions are 320 × 400 pixels with a 4:5 aspect ratio.",
    },
    {
      question: "What is the GDS signature size requirement?",
      answer: "For GDS online form, the signature must be in JPG/JPEG format with file size between 20KB and 100KB. Recommended dimensions are 300 × 120 pixels with a 5:2 aspect ratio (landscape).",
    },
    {
      question: "Can I use PNG format for GDS application?",
      answer: "No, India Post GDS application only accepts JPG/JPEG format for both photo and signature uploads. Our tool converts and outputs in JPG format for full compatibility.",
    },
    {
      question: "What background should I use for GDS photo?",
      answer: "Use a plain white or light-colored background. Ensure your face is clearly visible, well-lit, and occupies 70-80% of the image frame. Avoid selfies and scanned photographs.",
    },
    {
      question: "What ink color should I use for GDS signature?",
      answer: "Sign with black or blue ballpoint pen on plain white paper. The signature should be clear, steady, and not pixelated. It should occupy 70-80% of the image space.",
    },
    {
      question: "What DPI is required for GDS photo and signature?",
      answer: "India Post recommends an image resolution between 72 and 150 DPI for both photograph and signature. Our tool automatically optimizes the DPI during resizing.",
    },
    {
      question: "Is this GDS photo resize tool free?",
      answer: "Yes, our GDS photo and signature resize tool is completely free. All processing happens in your browser — your images are never uploaded to any server, ensuring complete privacy.",
    },
    {
      question: "How to resize photo for GDS online form?",
      answer: "Simply upload your photo, select the 'Photo Resize' tab, and our tool will automatically apply GDS specifications (30-100KB, 320×400px). Click 'Resize Now' and download the resized image to upload on the India Post portal.",
    },
  ];

  const photoRequirements = [
    "File size: 30KB to 100KB",
    "Format: JPG/JPEG only",
    "Dimensions: 320 × 400 pixels",
    "Aspect Ratio: 4:5 (width:height)",
    "Background: White/Light",
    "DPI: 72–150",
    "Face: 70-80% of frame",
    "No selfies or scanned photos",
  ];

  const signatureRequirements = [
    "File size: 20KB to 100KB",
    "Format: JPG/JPEG only",
    "Dimensions: 300 × 120 pixels",
    "Aspect Ratio: 5:2 (landscape)",
    "Ink: Black or Blue pen",
    "Paper: Plain white, unruled",
    "DPI: 72–150",
    "Clear, steady & not pixelated",
  ];

  const howToSteps = [
    { text: "Select the 'Photo Resize' or 'Signature Resize' tab based on what you need" },
    { text: "Upload your photograph or signature image (JPG, JPEG, or PNG format)" },
    { text: "The tool automatically applies GDS-compliant size and dimension settings" },
    { text: "Click 'Resize Now' to process your image to GDS specifications" },
    { text: "Download the resized image and upload it to the India Post GDS application portal" },
  ];

  return (
    <>
      <SEOHead
        title="GDS Photo & Signature Resize Online | 30KB-100KB Free Tool"
        description="Resize photo & signature for India Post GDS (Gramin Dak Sevak) application. Photo 30-100KB, Signature 20-100KB. Free, instant & 100% secure tool."
        canonicalUrl="https://signatureresize.in/gds-photo-signature-resize"
        keywords="gds photo and signature resize online, gds photo resize, gds signature resize, gramin dak sevak photo size, gds photo size in kb, india post gds photo resize online free, gds signature size in kb, gds online form photo signature upload, resize photo for gds application, gds photo 320x400 pixels resize, gramin dak sevak photo signature format 2026"
      />

      <SEOSchema
        type="HowTo"
        howToName="How to Resize Photo and Signature for GDS (Gramin Dak Sevak) Application"
        howToSteps={howToSteps}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ name: "GDS Photo & Signature Resize" }]} />
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                INDIA POST GDS 2026 READY
              </span>
              <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">GDS Photo & Signature Resize</span> Online Free
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Resize your photograph and signature for India Post Gramin Dak Sevak (GDS) application.
                Photo: 30-100KB | Signature: 20-100KB. Instant, free & 100% secure.
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
                    title="Upload Your GDS Photo"
                    defaultTargetKB={60}
                    minKB={30}
                    maxKB={100}
                    maxWidth={320}
                    maxHeight={400}
                    defaultPreset="gds-photo"
                  />
                </TabsContent>

                <TabsContent value="signature" className="animate-fade-in">
                  <SignatureResizer
                    title="Upload Your GDS Signature"
                    defaultTargetKB={50}
                    minKB={20}
                    maxKB={100}
                    maxWidth={300}
                    maxHeight={120}
                    defaultPreset="gds-signature"
                  />
                </TabsContent>
              </Tabs>

              {/* Requirements Section */}
              <div className="mt-6 sm:mt-8 space-y-6">
                <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 sm:p-6">
                  <h2 className="mb-4 text-lg sm:text-xl font-bold text-foreground">
                    GDS Photo Requirements (India Post 2026)
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
                    GDS Signature Requirements (India Post 2026)
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
            </div>

            {/* About GDS Section — E-E-A-T SEO Content */}
            <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                  About GDS Photo & Signature Upload Requirements
                </h2>
                <figure className="mb-6">
                  <img
                    src="/assest/GDS-Photo-Signature-Resize-Online-Free.png"
                    alt="GDS Photo and Signature Resize Online Free — India Post Gramin Dak Sevak photo 30-100KB, signature 20-100KB resize tool"
                    className="w-full rounded-lg border border-border shadow-md"
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="630"
                  />
                  <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                    Resize photo & signature for India Post GDS application — free online tool
                  </figcaption>
                </figure>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                  <p>
                    India Post's <strong>Gramin Dak Sevak (GDS)</strong> recruitment is one of the largest government
                    hiring drives in India. Every year, lakhs of candidates apply through the India Post GDS online
                    portal. A common challenge during the application process is uploading the photograph and
                    signature in the exact format and file size specified by India Post.
                  </p>
                  <p>
                    The GDS application requires your <strong>photograph between 30KB and 100KB</strong> in JPG/JPEG
                    format with dimensions of <strong>320 × 400 pixels</strong> (4:5 aspect ratio). Your
                    <strong> signature must be between 20KB and 100KB</strong> in JPG/JPEG format with dimensions
                    of <strong>300 × 120 pixels</strong> (5:2 aspect ratio in landscape orientation).
                  </p>

                  <h3 className="text-lg sm:text-xl font-semibold text-foreground pt-2">
                    How to Prepare Your GDS Photo
                  </h3>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Take a recent passport-size photograph with a white or light background</li>
                    <li>Ensure your face is clearly visible and occupies 70-80% of the frame</li>
                    <li>Avoid wearing white clothes if using a white background</li>
                    <li>Do not use selfies or scanned copies of printed photographs</li>
                    <li>Image resolution should be between 72 and 150 DPI</li>
                    <li>Use our free tool above to resize to 30-100KB with correct 320×400 dimensions</li>
                  </ul>

                  <h3 className="text-lg sm:text-xl font-semibold text-foreground pt-2">
                    How to Prepare Your GDS Signature
                  </h3>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Sign on plain white unruled paper with black or blue ink pen</li>
                    <li>Scan or photograph the signature at 100-200 DPI</li>
                    <li>Crop tightly around the signature area</li>
                    <li>Ensure the signature is clear, steady, and fits within the frame</li>
                    <li>The signature should cover 70-80% of the image without extra borders</li>
                    <li>Use our tool to resize to 20-100KB with correct 300×120 dimensions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How-To Steps */}
            <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                  How to Resize Photo & Signature for GDS Application
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
                  GDS Photo & Signature Resizer Features
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Resize your photo and signature for India Post GDS application in just a few clicks!
                </p>
              </div>
              <FeatureGrid examName="GDS" />
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

export default GDSPhotoSignatureResize;

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
import { CheckCircle } from "lucide-react";

const GATESignatureResize = () => {
  const faqs = [
    {
      question: "What is the GATE signature size requirement?",
      answer: "GATE exam requires signature image size between 4KB to 30KB in JPG/JPEG format with dimensions around 2.0 cm × 7.0 cm (80 × 280 pixels recommended).",
    },
    {
      question: "Can I use PNG format for GATE signature?",
      answer: "While PNG is accepted, JPG/JPEG format is recommended for GATE as it produces smaller file sizes. Our tool outputs in JPG format for optimal compatibility.",
    },
    {
      question: "What happens if my signature exceeds 30 KB?",
      answer: "If your signature exceeds 30KB, the GATE application portal will reject it. Use our tool to resize it below 30KB before uploading.",
    },
    {
      question: "Should signature be in blue or black ink for GATE?",
      answer: "GATE accepts signatures in both blue and black ink. The signature should be clear, legible, and scanned on white background.",
    },
    {
      question: "How to scan signature for GATE exam?",
      answer: "Sign on white paper with black or blue ink. Scan at 200-300 DPI, crop tightly around signature, and use our tool to resize to 4-30KB range.",
    },
  ];

  const requirements = [
    "File size: 4KB to 30KB",
    "Format: JPG/JPEG preferred",
    "Dimensions: ~280 × 80 pixels",
    "Background: White",
    "Ink Color: Black or Blue",
  ];

  const howToSteps = [
    { text: "Upload your signature image (JPG, JPEG, or PNG format)" },
    { text: "Adjust the target size slider to set file size between 4KB-30KB" },
    { text: "Click the Resize button to process your GATE signature" },
    { text: "Download the resized signature and upload to GATE application portal" },
  ];

  return (
    <>
      <SEOHead
        title="GATE Signature Resize Online | 4KB-30KB Free Tool"
        description="Resize signature for GATE 2025 exam to 4KB-30KB. Free tool with exact dimensions. Instant, secure & GATE compliant."
        canonicalUrl="https://signatureresize.in/gate-signature-resize"
        keywords="GATE signature resize, GATE signature size, GATE 2024 signature"
      />

      <SEOSchema
        type="HowTo"
        howToName="How to Resize Signature for GATE Exam"
        howToSteps={howToSteps}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: "GATE Signature Resize" },
              ]}
            />
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                GATE 2025 READY
              </span>
              <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">GATE Signature Resize</span> Online Free
              </h1>
              <p className="text-muted-foreground">
                Resize your signature as per GATE exam specifications (4KB to 30KB). Instant & secure.
              </p>
            </div>
          </div>
        </section>

        <main className="py-6 sm:py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <SignatureResizer
                title="Upload Your GATE Signature"
                defaultTargetKB={20}
                minKB={4}
                maxKB={30}
                maxWidth={280}
                maxHeight={80}
                defaultPreset="gate"
              />

              {/* Requirements Box */}
              <div className="mt-6 sm:mt-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-4 sm:p-6">
                <h2 className="mb-4 text-lg sm:text-xl font-bold text-foreground">
                  GATE 2025 Signature Requirements
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

              {/* Attractive Responsive Banner Section (Vite Compatible) */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-full">
                  <img
                    src="/gate-size.png" 
                    alt="GATE Signature Resize Dimensions and Process Guide"
                    className="h-auto w-full object-contain p-2 sm:p-4"
                    loading="lazy"
                  />
                </div>
                <div className="bg-muted/30 py-2 text-center text-[10px] sm:text-xs font-medium text-muted-foreground italic">
                  Visual Guide: Step-by-step GATE signature resizing process.
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="mx-auto mt-12 sm:mt-16 max-w-6xl">
              <div className="mb-8 sm:mb-10 text-center">
                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
                  GATE Signature Resizer Tool Features
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Resize Your Signature for GATE 2025 Application in Just a Few Clicks!
                </p>
              </div>
              <FeatureGrid examName="GATE" />
            </div>

            {/* Processing Section */}
            <div className="mx-auto mt-12 sm:mt-16 max-w-3xl">
              <ProcessingFeatures />
            </div>

            {/* Trust Badges */}
            <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
              <TrustBadges />
            </div>

            {/* SEO Content */}
            <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                  How to Prepare Signature for GATE Exam
                </h2>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                  <p>
                    For GATE 2025 application, your signature must be scanned clearly on white paper. 
                    Sign with blue or black ink pen, scan at 200 DPI, and use our tool to resize 
                    to the required 4KB-30KB range.
                  </p>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">GATE Signature Guidelines</h3>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Use white unruled paper for signing</li>
                    <li>Sign with black or blue ballpoint pen</li>
                    <li>Ensure signature is within the box (7cm × 2cm)</li>
                    <li>Scan at 200-300 DPI for clarity</li>
                    <li>Save in JPG format before resizing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        <FAQSection faqs={faqs} />
        <Footer />
      </div>
    </>
  );
};

export default GATESignatureResize;

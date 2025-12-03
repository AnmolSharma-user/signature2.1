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

const NTPCSignatureResize = () => {
  const faqs = [
    {
      question: "What is RRB NTPC signature size requirement?",
      answer: "RRB NTPC requires signature between 10KB to 20KB in JPG format with dimensions approximately 140x60 pixels.",
    },
    {
      question: "Can I use the same signature for RRB Group D?",
      answer: "Yes, RRB NTPC and Group D have similar requirements. You can use our tool for both exams.",
    },
    {
      question: "What ink color should I use for NTPC signature?",
      answer: "Use black or blue ink on white paper. Ensure the signature is clear and has no smudges.",
    },
    {
      question: "How to resize signature for RRB recruitment?",
      answer: "Upload your signature, set target size to 10-20KB using the slider, click Resize, and download.",
    },
  ];

  const requirements = [
    "File size: 10KB to 20KB",
    "Format: JPG/JPEG only",
    "Dimensions: ~140 × 60 pixels",
    "Background: White",
    "Ink Color: Black or Blue",
  ];

  const howToSteps = [
    { text: "Upload your signature image (JPG, JPEG, or PNG format)" },
    { text: "Set the target size between 10KB-20KB using the slider" },
    { text: "Click Resize to process your NTPC signature" },
    { text: "Download and upload to RRB NTPC/Group D application portal" },
  ];

  return (
    <>
      <SEOHead
        title="NTPC Signature Resize | RRB NTPC & Group D Tool"
        description="Resize signature for RRB NTPC & Group D to 10KB-20KB. Free tool with correct dimensions. Instant, secure & RRB compliant."
        canonicalUrl="https://signatureresize.in/ntpc-signature-resize"
        keywords="NTPC signature resize, RRB NTPC signature size, RRB Group D signature"
      />

      <SEOSchema
        type="HowTo"
        howToName="How to Resize Signature for RRB NTPC Exam"
        howToSteps={howToSteps}
      />

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: "NTPC Signature Resize" },
              ]}
            />
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                RRB NTPC / GROUP D
              </span>
              <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">NTPC Signature Resize</span> Online Free
              </h1>
              <p className="text-muted-foreground">
                Resize your signature for RRB NTPC and Group D exams (10KB to 20KB).
              </p>
            </div>
          </div>
        </section>

        <main className="py-6 sm:py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <SignatureResizer
                title="Upload Your NTPC Signature"
                defaultTargetKB={15}
                minKB={10}
                maxKB={20}
                maxWidth={200}
                maxHeight={80}
                defaultPreset="ntpc"
              />

              <div className="mt-6 sm:mt-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-4 sm:p-6">
                <h2 className="mb-4 text-lg sm:text-xl font-bold text-foreground">
                  RRB NTPC Signature Requirements
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

            <div className="mx-auto mt-12 sm:mt-16 max-w-6xl">
              <div className="mb-8 sm:mb-10 text-center">
                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
                  NTPC Signature Resizer Tool Features
                </h2>
              </div>
              <FeatureGrid examName="RRB NTPC" />
            </div>

            <div className="mx-auto mt-12 sm:mt-16 max-w-3xl">
              <ProcessingFeatures />
            </div>

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

export default NTPCSignatureResize;

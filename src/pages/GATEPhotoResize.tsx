import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignatureResizer from "@/components/SignatureResizer";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import ProcessingFeatures from "@/components/ProcessingFeatures";
import TrustBadges from "@/components/TrustBadges";
import FeatureGrid from "@/components/FeatureGrid";
import { CheckCircle } from "lucide-react";

const GATEPhotoResize = () => {
  const faqs = [
    {
      question: "What is GATE photo size requirement?",
      answer: "GATE exam requires photograph between 5KB to 200KB in JPG/JPEG format with dimensions approximately 200x230 pixels (3.5cm x 4.5cm).",
    },
    {
      question: "Should the photo be with white background?",
      answer: "GATE accepts photos with white or light-colored background. Ensure your face is clearly visible and takes up 70-80% of the frame.",
    },
    {
      question: "Can I wear glasses in GATE photo?",
      answer: "It's recommended to avoid glasses with dark tints. If you wear prescription glasses regularly, you may keep them on but ensure no glare.",
    },
    {
      question: "What should I wear for GATE photo?",
      answer: "Wear formal or semi-formal clothing. Avoid white clothes if using white background. Face should be clearly visible.",
    },
  ];

  const requirements = [
    "File size: 5KB to 200KB",
    "Format: JPG/JPEG only",
    "Dimensions: ~200 × 230 pixels",
    "Background: White/Light",
    "Face: 70-80% of frame",
  ];

  return (
    <>
      <SEOHead
        title="GATE Photo Resize Online | 5KB-200KB Free Tool"
        description="Resize photo for GATE 2025 exam to 5KB-200KB. Free tool with perfect dimensions & quality for your application."
        canonicalUrl="https://signatureresize.in/gate-photo-resize"
        keywords="GATE photo resize, GATE photograph size, GATE 2025 photo"
      />

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                GATE PHOTO TOOL
              </span>
              <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">GATE Photo Resize</span> Online Free
              </h1>
              <p className="text-muted-foreground">
                Resize your photograph as per GATE exam specifications (5KB to 200KB).
              </p>
            </div>
          </div>
        </section>

        <main className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <SignatureResizer
                title="Upload Your GATE Photo"
                defaultTargetKB={100}
                minKB={5}
                maxKB={200}
                maxWidth={200}
                maxHeight={230}
                defaultPreset="custom"
              />

              <div className="mt-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
                <h2 className="mb-4 text-xl font-bold text-foreground">
                  GATE 2025 Photo Requirements
                </h2>
                <div className="grid gap-3 md:grid-cols-2">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-6xl">
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                  GATE Photo Resizer Tool Features
                </h2>
              </div>
              <FeatureGrid examName="GATE" />
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
              <ProcessingFeatures />
            </div>

            <div className="mx-auto mt-16 max-w-4xl">
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

export default GATEPhotoResize;

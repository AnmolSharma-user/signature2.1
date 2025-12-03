import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignatureResizer from "@/components/SignatureResizer";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import ProcessingFeatures from "@/components/ProcessingFeatures";
import TrustBadges from "@/components/TrustBadges";
import FeatureGrid from "@/components/FeatureGrid";
import { CheckCircle } from "lucide-react";

const SignatureResize10to20KB = () => {
  const faqs = [
    {
      question: "Which exams require 10-20 KB signature size?",
      answer: "Many government exams require signatures in the 10-20 KB range including RRB NTPC, RRB Group D, various state PSC exams, and some bank recruitment exams.",
    },
    {
      question: "Can I resize signature to exactly 10 KB?",
      answer: "Yes, you can set the target size to exactly 10 KB using our tool. The resized signature will be at or below your target size.",
    },
    {
      question: "What dimensions should my signature be?",
      answer: "For most exams requiring 10-20 KB, recommended dimensions are 140x60 pixels to 200x80 pixels. Our tool automatically optimizes dimensions while resizing.",
    },
    {
      question: "How to reduce signature size to 15KB?",
      answer: "Upload your signature image, set the slider to 15KB, click Resize Now, and download your perfectly sized signature.",
    },
  ];

  const requirements = [
    "File size: 10KB to 20KB",
    "Format: JPG/JPEG preferred",
    "Dimensions: ~140 × 60 pixels",
    "Background: White",
    "Quality: Maintained",
  ];

  return (
    <>
      <SEOHead
        title="Resize Signature to 10-20KB | Free Online Tool"
        description="Resize signature to 10KB, 15KB or 20KB online. Perfect for RRB NTPC, Group D & government exam applications. Fast & accurate."
        canonicalUrl="https://signatureresize.in/signature-resize-10-to-20-kb"
        keywords="resize signature 10kb, signature resize 20kb, 10-20kb signature"
      />

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                10KB - 20KB RANGE
              </span>
              <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Resize Signature to <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">10-20 KB</span>
              </h1>
              <p className="text-muted-foreground">
                Resize your signature between 10KB to 20KB for RRB, PSC, and other government applications.
              </p>
            </div>
          </div>
        </section>

        <main className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <SignatureResizer
                title="Upload Your Signature"
                defaultTargetKB={15}
                minKB={10}
                maxKB={20}
              />

              <div className="mt-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
                <h2 className="mb-4 text-xl font-bold text-foreground">
                  Signature Requirements (10-20KB)
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

              <div className="mt-8 rounded-xl border border-border bg-card p-6">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  Exams Requiring 10-20 KB Signature
                </h2>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>RRB NTPC - 10KB to 20KB</li>
                  <li>RRB Group D - 10KB to 20KB</li>
                  <li>Various State PSC Exams</li>
                  <li>Bank PO/Clerk Exams</li>
                  <li>State Level Recruitment</li>
                </ul>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-6xl">
              <FeatureGrid examName="Government Exam" />
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

export default SignatureResize10to20KB;

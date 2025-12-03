import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignatureResizer from "@/components/SignatureResizer";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import ProcessingFeatures from "@/components/ProcessingFeatures";
import TrustBadges from "@/components/TrustBadges";
import FeatureGrid from "@/components/FeatureGrid";
import { CheckCircle } from "lucide-react";

const SignatureSize50KB = () => {
  const faqs = [
    {
      question: "Which applications require 50KB signature?",
      answer: "Various government job applications, university admissions, and some online forms require signatures up to 50KB. This tool helps you resize to exactly 50KB or less.",
    },
    {
      question: "How to get exact 50KB signature size?",
      answer: "Set the target size to 50 using the slider or input field. Our algorithm will compress your signature to 50KB or slightly below while maintaining quality.",
    },
    {
      question: "Is 50KB too large for most applications?",
      answer: "50KB is on the higher side. Most government exams require 10-30KB. Check your specific application requirements before resizing.",
    },
    {
      question: "Can I resize to less than 50KB?",
      answer: "Yes! Use the slider to set any size between 20KB to 60KB. Our tool gives you full control over the target file size.",
    },
  ];

  const requirements = [
    "File size: Up to 50KB",
    "Format: JPG/JPEG preferred",
    "Dimensions: Flexible",
    "Background: White",
    "Quality: High maintained",
  ];

  return (
    <>
      <SEOHead
        title="Resize Signature to 50KB | Free Online Tool"
        description="Resize signature to exactly 50KB online. Perfect for university admissions & government portals. Fast, accurate & secure."
        canonicalUrl="https://signatureresize.in/50kb-signature-size"
        keywords="50kb signature size, resize signature 50kb, signature to 50kb"
      />

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                50KB TARGET
              </span>
              <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Resize Signature to <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">50KB</span> Online
              </h1>
              <p className="text-muted-foreground">
                Resize your signature to exactly 50KB or less for various applications.
              </p>
            </div>
          </div>
        </section>

        <main className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <SignatureResizer
                title="Upload Your Signature"
                defaultTargetKB={50}
                minKB={20}
                maxKB={60}
                maxWidth={400}
                maxHeight={150}
              />

              <div className="mt-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
                <h2 className="mb-4 text-xl font-bold text-foreground">
                  50KB Signature Requirements
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
                  When to Use 50KB Signature Size
                </h2>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  <li>University online admission portals</li>
                  <li>Government scholarship applications</li>
                  <li>Private sector job applications</li>
                  <li>Online document submissions</li>
                  <li>Various state government portals</li>
                </ul>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-6xl">
              <FeatureGrid examName="Application" />
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

export default SignatureSize50KB;

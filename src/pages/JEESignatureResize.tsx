import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignatureResizer from "@/components/SignatureResizer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card } from "@/components/ui/card";
import { CheckCircle, FileImage, Zap, Shield } from "lucide-react";
import SignatureCreatorBanner from "@/components/SignatureCreatorBanner";

const JEESignatureResize = () => {
  const faqs = [
    {
      question: "What are the JEE Main signature requirements?",
      answer: "JEE Main requires signature dimensions of 230×60 pixels with file size between 10KB to 100KB in JPG/JPEG format."
    },
    {
      question: "What are the JEE Advanced signature specifications?",
      answer: "JEE Advanced typically requires signature size of 10KB to 100KB with dimensions around 230×60 pixels in JPEG format."
    },
    {
      question: "Can I use the same signature for both JEE Main and Advanced?",
      answer: "Yes, if your signature meets the specifications (230×60 px, 10-100KB), it can be used for both exams."
    },
    {
      question: "What if my signature is rejected during form submission?",
      answer: "Use our tool to resize your signature to exact specifications. Ensure clear, dark ink signature on white background."
    },
    {
      question: "Should I sign on white paper?",
      answer: "Yes, always sign with black or dark blue ink on white unruled paper for best results and clear scanning."
    }
  ];

  const howToSteps = [
    { text: "Upload your signature image (JPG, JPEG, or PNG format)" },
    { text: "Set target size between 10KB-100KB using the slider" },
    { text: "Click Resize to process your JEE signature" },
    { text: "Download and upload to JEE Main/Advanced application portal" },
  ];

  return (
    <>
      <SEOHead
        title="JEE Main/Advanced Signature Resize - Free Online Tool 2025"
        description="Resize your signature for JEE Main & Advanced application. Free tool to compress signature to 10-100KB, 230×60 pixels as per NTA requirements."
        keywords="JEE signature resize, JEE Main signature size, JEE Advanced signature upload, NTA signature requirements, JEE 2025 signature"
        canonicalUrl="https://signatureresize.in/jee-signature-resize"
      />

      <SEOSchema
        type="HowTo"
        howToName="How to Resize Signature for JEE Exam"
        howToSteps={howToSteps}
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-accent/20 py-6 sm:py-8 sm:py-12">
            <div className="container mx-auto px-4">
              <Breadcrumbs
                items={[
                  { name: "JEE Signature Resize" },
                ]}
              />
              <div className="text-center mb-6 sm:mb-8">
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  JEE Main & Advanced 2025
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
                  JEE Signature Resize Tool
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Resize your signature to meet NTA's exact requirements for JEE Main and Advanced applications
                </p>
              </div>
            </div>
          </section>

          {/* Main Tool */}
          <section className="py-6 sm:py-8 sm:py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <SignatureResizer
                defaultTargetKB={50}
                minKB={10}
                maxKB={100}
                title="JEE Main/Advanced Signature Resizer"
                maxWidth={230}
                maxHeight={60}
                defaultPreset="jee"
              />

              <SignatureCreatorBanner />
            </div>
          </section>

          {/* Requirements Section */}
          <section className="py-6 sm:py-8 sm:py-12 bg-accent/30">
            <div className="container mx-auto px-4">
              <h2 className="text-xl sm:text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-foreground">
                JEE Signature Requirements
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
                <Card className="p-4 sm:p-6 text-center">
                  <FileImage className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 sm:mb-4 text-primary" />
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">File Size</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">10 KB - 100 KB</p>
                </Card>
                <Card className="p-4 sm:p-6 text-center">
                  <Zap className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 sm:mb-4 text-primary" />
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">Dimensions</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">230 × 60 pixels</p>
                </Card>
                <Card className="p-4 sm:p-6 text-center">
                  <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 sm:mb-4 text-primary" />
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">Format</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">JPG / JPEG only</p>
                </Card>
                <Card className="p-4 sm:p-6 text-center">
                  <Shield className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 sm:mb-4 text-primary" />
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">Background</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">White background</p>
                </Card>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="py-6 sm:py-8 sm:py-12 bg-background">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">Tips for Perfect JEE Signature</h2>
              <ul className="space-y-3">
                {[
                  "Sign with black or dark blue ink pen on white unruled paper",
                  "Ensure your full signature is visible within the crop area",
                  "Scan or photograph in good lighting without shadows",
                  "Use our crop tool to remove excess white space",
                  "Keep your signature consistent with your ID documents"
                ].map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection faqs={faqs} title="JEE Signature FAQs" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default JEESignatureResize;

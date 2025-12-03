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

const SSCMTSSignatureResize = () => {
  const faqs = [
    {
      question: "How do I resize a PDF signature?",
      answer: "First, convert your PDF signature to an image format (JPG/PNG), then upload it to our tool. We'll resize it to the required size for your SSC application.",
    },
    {
      question: "What are the rules for SSC signature upload?",
      answer: "SSC requires signature between 1KB to 12KB in JPG format with dimensions around 140x60 pixels. The signature should be on white background with black or blue ink.",
    },
    {
      question: "Can I change my signature easily?",
      answer: "Yes! Simply upload a new signature image and resize it. Our tool makes it easy to adjust and re-upload as many times as needed before submission.",
    },
    {
      question: "Can I change my signature in this exam?",
      answer: "Once submitted, SSC applications typically don't allow signature changes. Make sure your signature matches your official documents before final submission.",
    },
    {
      question: "What is the size of SSC candidate signature?",
      answer: "The standard size for SSC candidate signature is 1KB to 12KB with dimensions of approximately 140x60 pixels in JPG format.",
    },
    {
      question: "How can I edit my SSC name?",
      answer: "Name changes in SSC require a formal request through the official portal during the correction window. This tool is specifically for signature and photo resizing.",
    },
  ];

  const requirements = [
    "File size: 1KB to 12KB",
    "Format: JPG/JPEG only",
    "Dimensions: 140 × 60 pixels",
    "Background: White",
    "Ink Color: Black or Blue",
  ];

  const howToSteps = [
    { text: "Upload your signature image (JPG, JPEG, or PNG format)" },
    { text: "Set the target size between 1KB-12KB using the slider" },
    { text: "Click Resize to process your SSC signature" },
    { text: "Download and upload to SSC MTS/CGL/CHSL application portal" },
  ];

  return (
    <>
      <SEOHead
        title="SSC Signature Resize | MTS, CGL, CHSL Free Tool"
        description="Resize signature for SSC MTS, CGL, CHSL exams to 1KB-12KB. Free tool with correct dimensions. Instant & SSC compliant."
        canonicalUrl="https://signatureresize.in/ssc-mts-signature-resize"
        keywords="SSC signature resize, SSC MTS signature size, SSC CGL signature"
      />

      <SEOSchema
        type="HowTo"
        howToName="How to Resize Signature for SSC Exams"
        howToSteps={howToSteps}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: "SSC MTS Signature Resize" },
              ]}
            />
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                DO YOU HAVE A PROBLEM?
              </span>
              <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Our <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">SSC Signature Resizer Tool</span> For Your Solution.
              </h1>
              <p className="text-muted-foreground">
                Your file privacy is 100% secure, as your files will not be uploaded or stored on our server
              </p>
            </div>
          </div>
        </section>

        {/* Main Tool Section */}
        <main className="py-6 sm:py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <SignatureResizer
                title="Upload Your SSC Signature"
                defaultTargetKB={8}
                minKB={1}
                maxKB={12}
                maxWidth={200}
                maxHeight={80}
                defaultPreset="ssc"
              />

              {/* Requirements Box */}
              <div className="mt-6 sm:mt-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-4 sm:p-6">
                <h2 className="mb-4 text-lg sm:text-xl font-bold text-foreground">
                  SSC Signature Requirements
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

            {/* Features Section */}
            <div className="mx-auto mt-12 sm:mt-16 max-w-6xl">
              <div className="mb-8 sm:mb-10 text-center">
                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
                  Our SSC Signature Resizer Tool Top Features
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Resize Your Signature And Photo for SSC Exam Applications in Just a Few Clicks!
                </p>
              </div>
              <FeatureGrid examName="SSC" />
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
                  Why You Need an SSC Signature Resizer Tool?
                </h2>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                  <p>
                    If you're applying for SSC exams like CGL, CHSL, or MTS, uploading your signature correctly is crucial. 
                    The application process is strict when it comes to the signature size, dimensions, and file format. 
                    Many applicants face rejection because they don't follow these guidelines properly.
                  </p>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Problems Faced by Applicants</h3>
                  <p>
                    Despite being a crucial document, the SSC application process remains strict. Many applicants face 
                    rejection because they upload signatures with incorrect file sizes, wrong dimensions, or unsupported formats.
                  </p>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Tips for Capturing a Perfect SSC Signature</h3>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Use white blank paper, sign using a black pen, without going outside the boundary</li>
                    <li>Use a smartphone or scanner to capture the signature in an image, save it in JPG format</li>
                    <li>Resize and optimize the image using our SSC Signature Resize Tool</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        <FAQSection faqs={faqs} title="Frequently Asked Questions" />
        <Footer />
      </div>
    </>
  );
};

export default SSCMTSSignatureResize;

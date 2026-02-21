import SignatureResizer from "@/components/SignatureResizer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle, AlertCircle, Info } from "lucide-react";
import SignatureCreatorBanner from "@/components/SignatureCreatorBanner";
import AdContainer from "@/components/AdContainer";

const UPSCSignatureResize = () => {
  const faqs = [
    {
      question: "What is the signature size requirement for UPSC exams?",
      answer: "UPSC typically requires signatures to be between 4KB to 20KB with dimensions of approximately 150x50 pixels. The exact requirements may vary slightly between different UPSC exams like Civil Services, NDA, CDS, etc.",
    },
    {
      question: "What format should I use for UPSC signature?",
      answer: "JPEG format is recommended for UPSC applications as it produces smaller file sizes while maintaining quality. Some forms may also accept PNG format.",
    },
    {
      question: "How to scan signature for UPSC application?",
      answer: "Sign on white paper with black or dark blue ink. Scan at 200-300 DPI. Crop to include only the signature. Use our tool to resize to the exact KB requirement.",
    },
    {
      question: "Why is my signature getting rejected on UPSC portal?",
      answer: "Common reasons include: incorrect file size (must be within 4KB-20KB), wrong dimensions, poor image quality, or incorrect format. Use our tool to ensure compliance.",
    },
    {
      question: "Can I use this tool for all UPSC exams?",
      answer: "Yes, this tool works for Civil Services, NDA, CDS, CAPF, IES/ESE, and all other UPSC examinations. The preset is configured for standard UPSC requirements.",
    },
  ];

  const howToSteps = [
    { text: "Upload your signature image (JPG, JPEG, or PNG format)" },
    { text: "Set the target size between 4KB-20KB using the slider" },
    { text: "Click Resize to process your UPSC signature" },
    { text: "Download and upload to UPSC application portal" },
  ];

  return (
    <>
      <SEOHead
        title="UPSC Signature Resize | Civil Services, NDA, CDS"
        description="Resize signature for UPSC Civil Services, NDA, CDS to 4KB-20KB. Free tool with 150x50px dimensions. Instant & secure."
        canonicalUrl="https://signatureresize.in/upsc-signature-resize"
        keywords="UPSC signature resize, Civil Services signature, NDA signature resize"
      />

      <SEOSchema
        type="HowTo"
        howToName="How to Resize Signature for UPSC Exams"
        howToSteps={howToSteps}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/20 to-background py-6 sm:py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: "UPSC Signature Resize" },
              ]}
            />
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                UPSC EXAMS
              </span>
              <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl">
                UPSC Signature Resize Tool
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                Resize your signature for UPSC Civil Services, NDA, CDS, CAPF, and other UPSC examinations.
                Get exact file size (4KB-20KB) and dimensions (150×50 px) instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Requirements Info */}
        <section className="py-4 sm:py-6">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 sm:p-4">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground text-sm sm:text-base">File Size</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">4KB - 20KB</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 sm:p-4">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground text-sm sm:text-base">Dimensions</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">150 × 50 pixels</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 sm:p-4">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-foreground text-sm sm:text-base">Format</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">JPEG / JPG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Tool */}
        <section className="py-4 sm:py-6 sm:py-10">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <SignatureResizer
                title="UPSC Signature Resizer"
                defaultTargetKB={15}
                minKB={4}
                maxKB={20}
                maxWidth={150}
                maxHeight={50}
                defaultPreset="upsc"
              />

              <SignatureCreatorBanner />

              {/* Display ad below tool */}
              <AdContainer type="display" />
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-6 sm:py-8">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl border border-border bg-card p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="h-5 w-5 text-primary" />
                  <h2 className="text-base sm:text-lg font-semibold">Tips for UPSC Signature Upload</h2>
                </div>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Sign on plain white paper using black or dark blue ink pen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Scan your signature at 200-300 DPI for best quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Crop the image to include only your signature with minimal white space</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Ensure the signature is clearly visible without any blur or smudges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Always keep a backup of your original signature image</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Exams */}
        <section className="py-6 sm:py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">Supported UPSC Examinations</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {[
                  "Civil Services (IAS/IPS/IFS)",
                  "NDA & NA",
                  "CDS",
                  "CAPF",
                  "IES/ESE",
                  "EPFO",
                  "Geoscientist",
                  "CMS",
                  "NDA"
                ].map((exam) => (
                  <div key={exam} className="flex items-center gap-2 rounded-lg border border-border bg-card p-2 sm:p-3">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                    <span className="text-xs sm:text-sm">{exam}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-10">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-xl sm:text-2xl font-bold text-center">Frequently Asked Questions</h2>
              <FAQSection faqs={faqs} />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default UPSCSignatureResize;

import { Link } from "react-router-dom";
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
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import { CheckCircle, Info } from "lucide-react";

const UTIPANResize = () => {
  const faqs = [
    {
      question: "What is UTI PAN signature size requirement?",
      answer: "UTI PAN card application requires signature between 2KB to 20KB in JPG format with dimensions approximately 140x60 pixels.",
    },
    {
      question: "What ink should I use for PAN card signature?",
      answer: "Sign with black ink on white paper for best results. Blue ink is also acceptable but may appear lighter after scanning.",
    },
    {
      question: "Can I use digital signature for PAN card?",
      answer: "No, UTI PAN requires a physical signature that is scanned. Digital or typed signatures are not accepted.",
    },
    {
      question: "How to resize photo for PAN card?",
      answer: "Upload your photo, set target size to 2-20KB, click Resize, and download. Our tool maintains quality while reducing size.",
    },
  ];

  const requirements = [
    "File size: 2KB to 20KB",
    "Format: JPG/JPEG only",
    "Dimensions: ~140 × 60 pixels",
    "Background: White",
    "Ink Color: Black (preferred)",
  ];

  return (
    <>
      <SEOHead
        title="UTI PAN Signature Resize | PAN Card Free Tool"
        description="Resize signature for UTI PAN card to 2KB-20KB. Free tool with correct dimensions. Instant, secure & UTI compliant."
        canonicalUrl="https://signatureresize.in/uti-pan-resize"
        keywords="UTI PAN signature resize, PAN card signature size, UTI PAN signature"
      />

      <SEOSchema
        type="FAQPage"
        faqs={faqs.map(faq => ({ question: faq.question, answer: faq.answer }))}
      />

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ name: "UTI PAN Signature Resize" }]} />
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                UTI PAN CARD
              </span>
              <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">UTI PAN Signature Resize</span> Online
              </h1>
              <p className="text-muted-foreground">
                Resize your signature for UTI PAN card application (2KB to 20KB).
              </p>
            </div>
          </div>
        </section>

        <main className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <SignatureResizer
                title="Upload Your PAN Signature"
                defaultTargetKB={10}
                minKB={2}
                maxKB={20}
                maxWidth={200}
                maxHeight={80}
                defaultPreset="uti-pan"
              />

              <div className="mt-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
                <h2 className="mb-4 text-xl font-bold text-foreground">
                  UTI PAN Signature Requirements
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
                  UTI PAN Signature Resizer Features
                </h2>
              </div>
              <FeatureGrid examName="UTI PAN" />
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
              <ProcessingFeatures />
            </div>

            <div className="mx-auto mt-16 max-w-4xl">
              <TrustBadges />
            </div>

            {/* Unique PAN Content */}
            <div className="mx-auto mt-16 max-w-4xl">
              <article className="space-y-8">
                <section>
                  <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Understanding UTI PAN Card Application Signature Requirements</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    UTIITSL (UTI Infrastructure Technology and Services Limited) is one of the two agencies
                    authorized to process PAN card applications in India (the other being NSDL/Protean).
                    When applying for a new PAN card or making corrections online through
                    <a href="https://www.utiitsl.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mx-1">utiitsl.com</a>,
                    you must upload a scanned signature that meets strict specifications: <strong className="text-foreground">2KB to 20KB</strong> in
                    JPG format at approximately 140×60 pixels.
                  </p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    The UTI PAN portal is particularly strict about file size limits — even 1KB over will be rejected.
                    Our tool uses precise compression to ensure your signature file lands exactly within the 2-20KB range.
                    The signature you upload will appear on your PAN card, so clarity matters.
                  </p>
                </section>

                <section className="rounded-xl border border-border bg-muted/30 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Related Tools & Guides</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link to="/how-to-scan-signature-for-online-forms" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">How to Scan Signature</Link>
                    <Link to="/signature-resize-10-to-20-kb" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">10-20KB Resize</Link>
                    <Link to="/exam-photo-signature-requirements-2026" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">All Exam Requirements</Link>
                  </div>
                </section>

                <section className="rounded-xl border border-border bg-muted/30 p-5">
                  <h3 className="mb-2 font-bold text-foreground">About This Tool</h3>
                  <p className="text-sm text-muted-foreground">
                    Built by <strong className="text-foreground">SignatureResize.in</strong> — trusted by 50,000+ students.
                    Our UTI PAN preset matches the official UTIITSL specifications exactly.
                    All processing is done locally in your browser — no images are uploaded to any server.
                  </p>
                </section>
              </article>
            </div>

          </div>
        </main>

        <FAQSection faqs={faqs} />
        <AdSenseDisclaimer />
        <Footer />
      </div>
    </>
  );
};

export default UTIPANResize;

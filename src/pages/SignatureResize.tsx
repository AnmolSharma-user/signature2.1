import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignatureResizer from "@/components/SignatureResizer";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import ProcessingFeatures from "@/components/ProcessingFeatures";
import TrustBadges from "@/components/TrustBadges";
import FeatureGrid from "@/components/FeatureGrid";
import { CheckCircle } from "lucide-react";

const SignatureResize = () => {
  const faqs = [
    {
      question: "How do I resize my signature to a specific KB size?",
      answer: "Simply upload your signature image, use the slider or input field to set your desired KB size, and click 'Resize Now'. Our tool will automatically optimize your image to match the target size while maintaining quality.",
    },
    {
      question: "What file formats are supported for signature resize?",
      answer: "We support JPG, JPEG, and PNG image formats. For government exam applications, JPG format is recommended as it typically produces smaller file sizes with good quality.",
    },
    {
      question: "Is there a limit on how many times I can resize?",
      answer: "No, there's no limit! You can resize your signature as many times as needed. Our tool is completely free with unlimited usage.",
    },
    {
      question: "Will resizing affect my signature quality?",
      answer: "Our advanced algorithm maintains the best possible quality while achieving your target file size. For very small file sizes, some quality reduction is necessary, but signatures remain clear and readable.",
    },
    {
      question: "Is my data safe when using this tool?",
      answer: "Absolutely! Your signature is processed entirely in your browser. We don't upload or store any of your images on our servers, ensuring complete privacy and security.",
    },
  ];

  const tips = [
    "Sign on white paper with black or blue ink",
    "Scan at 200-300 DPI for best quality",
    "Crop tightly around the signature",
    "Save as JPG for smaller file sizes",
    "Check exam requirements before uploading",
  ];

  return (
    <>
      <SEOHead
        title="Signature Resize Online Free | Any KB Size Instantly"
        description="Resize signature to exact KB size - 10KB, 20KB, 50KB. Free tool for government exams. Fast, accurate & works on all devices."
        canonicalUrl="https://signatureresize.in/signature-resize"
        keywords="signature resize, resize signature online, signature resize to kb"
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                #1 FREE SIGNATURE RESIZE TOOL
              </span>
              <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Resize Your <span className="text-primary">Signature Online</span> In Seconds
              </h1>
              <p className="text-muted-foreground">
                Resize signature to any KB size for government exams. Fast, accurate, and 100% secure.
              </p>
            </div>
          </div>
        </section>

        <main className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <SignatureResizer
                title="Upload Your Image"
                defaultTargetKB={20}
                minKB={1}
                maxKB={100}
              />

              {/* Tips Box */}
              <div className="mt-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
                <h2 className="mb-4 text-xl font-bold text-foreground">
                  Tips for Perfect Signature
                </h2>
                <div className="grid gap-3 md:grid-cols-2">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="mx-auto mt-16 max-w-6xl">
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                  Top Features of Our Signature Resize Tool
                </h2>
                <p className="text-muted-foreground">
                  Everything you need to resize signatures for any government exam application
                </p>
              </div>
              <FeatureGrid examName="Government Exam" />
            </div>

            {/* Processing Section */}
            <div className="mx-auto mt-16 max-w-3xl">
              <ProcessingFeatures />
            </div>

            {/* Trust Badges */}
            <div className="mx-auto mt-16 max-w-4xl">
              <TrustBadges />
            </div>

            {/* SEO Content */}
            <div className="mx-auto mt-16 max-w-4xl">
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  How to Resize Your Signature for Government Exams
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">SignatureResize.in</strong> is India's most trusted free online 
                    signature resize tool. Whether you need to resize your signature for GATE, SSC, UPSC, RRB, 
                    or any other government examination, our tool helps you achieve the exact file size requirements instantly.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-foreground">Why Signature Size Matters</h3>
                  <p>
                    Government exams have strict requirements for signature image size. Most exams require signatures 
                    between 4KB to 30KB with specific dimensions. Submitting a signature that doesn't meet these 
                    requirements can lead to application rejection.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-foreground">Step-by-Step Guide</h3>
                  <ol className="ml-6 list-decimal space-y-2">
                    <li>Upload your signature image (JPG, PNG, or JPEG format)</li>
                    <li>Set your target file size using the slider</li>
                    <li>Click "Resize Now" to process</li>
                    <li>Preview and download your resized signature</li>
                  </ol>
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

export default SignatureResize;

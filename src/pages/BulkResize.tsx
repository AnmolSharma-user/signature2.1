import BulkSignatureResizer from "@/components/BulkSignatureResizer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import AdContainer from "@/components/AdContainer";
import { CheckCircle, Layers, Zap, Download } from "lucide-react";

const BulkResize = () => {
  const faqs = [
    {
      question: "How many images can I resize at once?",
      answer: "You can resize multiple images at once. For optimal performance, we recommend processing up to 20-30 images at a time. If you have more images, you can process them in batches.",
    },
    {
      question: "Will all images be resized to the same size?",
      answer: "Yes, all images in a bulk operation will be resized using the same configuration - same target KB size, dimensions, and output format. This is ideal when you need consistent sizing for exam applications.",
    },
    {
      question: "How do I download all resized images?",
      answer: "After processing, click the 'Download All' button. Each image will be downloaded with '_resized' appended to the original filename. Downloads may happen sequentially with a small delay.",
    },
    {
      question: "Is bulk resize free?",
      answer: "Yes, our bulk signature resize tool is completely free. There are no limits on usage, no registration required, and all processing happens locally in your browser.",
    },
    {
      question: "What if some images fail to process?",
      answer: "The tool will continue processing other images even if one fails. Failed images will be marked with an error status. You can try re-uploading failed images separately.",
    },
  ];

  const features = [
    {
      icon: Layers,
      title: "Multiple Files",
      description: "Upload and process multiple signature images simultaneously"
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "All images processed locally for maximum speed"
    },
    {
      icon: Download,
      title: "Batch Download",
      description: "Download all resized images with one click"
    }
  ];

  return (
    <>
      <SEOHead
        title="Bulk Signature Resize | Multiple Images at Once"
        description="Resize multiple signatures at once for GATE, SSC, UPSC exams. Free batch processing tool. Fast, secure & browser-based."
        canonicalUrl="https://signatureresize.in/bulk-resize"
        keywords="bulk signature resize, resize multiple signatures, batch image resize"
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/20 to-background py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                BULK PROCESSING
              </span>
              <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                Bulk Signature Resize Tool
              </h1>
              <p className="text-muted-foreground">
                Need to resize multiple signatures? Upload all your images at once and resize them
                with the same configuration. Perfect for batch processing exam applications.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-4 sm:grid-cols-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Tool */}
        <section className="py-6 sm:py-10">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <BulkSignatureResizer />
              <AdContainer type="display" className="mt-8" />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-xl font-bold mb-6 text-center">How Bulk Resize Works</h2>
              <div className="grid gap-4 sm:grid-cols-4">
                {[
                  { step: "1", title: "Upload", desc: "Select multiple images" },
                  { step: "2", title: "Configure", desc: "Choose size & format" },
                  { step: "3", title: "Process", desc: "Auto-resize all images" },
                  { step: "4", title: "Download", desc: "Get all files at once" },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-2xl font-bold text-center">Frequently Asked Questions</h2>
              <FAQSection faqs={faqs} />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BulkResize;

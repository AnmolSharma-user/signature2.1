import { Link } from "react-router-dom";
import { FileImage, Pen, Zap, Shield, CheckCircle, ArrowRight, Users, Download, Star, Award } from "lucide-react";
import SignatureResizer from "@/components/SignatureResizer";
import AdContainer from "@/components/AdContainer";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import ProcessingFeatures from "@/components/ProcessingFeatures";
import ComparisonTable from "@/components/ComparisonTable";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoTutorial from "@/components/VideoTutorial";
import MouseFollower from "@/components/MouseFollower";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingElements from "@/components/FloatingElements";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import heroBg from "@/assets/hero-bg.png";

const Index = () => {
  const tools = [
    { href: "/signature-resize", title: "Signature Resize", description: "Resize signature to any KB size. Perfect for all government exam applications.", icon: Pen, badge: "Popular" },
    { href: "/bulk-resize", title: "Bulk Resize", description: "Resize multiple signatures at once. Perfect for batch processing.", icon: FileImage, badge: "New" },
    { href: "/upsc-signature-resize", title: "UPSC Signature", description: "Resize signature for UPSC Civil Services, NDA, CDS. 4KB to 20KB.", icon: Pen, badge: "UPSC" },
    { href: "/gate-signature-resize", title: "GATE Signature", description: "Resize signature as per GATE exam specifications. 4KB to 30KB.", icon: Pen, badge: "GATE 2025" },
    { href: "/ssc-mts-signature-resize", title: "SSC MTS Signature", description: "Resize signature for SSC MTS, CGL, CHSL exams. 1KB to 12KB.", icon: FileImage },
    { href: "/ntpc-signature-resize", title: "NTPC Signature", description: "Resize signature for RRB NTPC recruitment. 10KB to 20KB.", icon: Pen },
    { href: "/gate-photo-resize", title: "GATE Photo Resize", description: "Resize photo for GATE exam. 5KB to 200KB with proper dimensions.", icon: FileImage, badge: "Photo" },
    { href: "/uti-pan-resize", title: "UTI PAN Resize", description: "Resize signature and photo for UTI PAN card application.", icon: Pen },
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Resize your signature in seconds with our optimized algorithm. No waiting, instant results.",
    },
    {
      icon: Shield,
      title: "100% Secure & Private",
      description: "Your images are processed locally in your browser. We never upload or store your data.",
    },
    {
      icon: CheckCircle,
      title: "Accurate Size Output",
      description: "Get exact KB size output that meets exam requirements. Binary search algorithm ensures precision.",
    },
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Happy Users" },
    { icon: Download, value: "100,000+", label: "Downloads" },
    { icon: Star, value: "4.8/5", label: "User Rating" },
    { icon: Award, value: "Free", label: "Forever Free" },
  ];

  const faqs = [
    {
      question: "How to resize signature for GATE exam?",
      answer: "Upload your signature image, select the target size (4KB-30KB for GATE), and click resize. Download the resized signature instantly. Our tool ensures the signature meets GATE's exact specifications.",
    },
    {
      question: "Is this signature resize tool free?",
      answer: "Yes, our signature resize tool is completely free to use. There are no hidden charges, no registration required, and no limits on the number of times you can resize your signature.",
    },
    {
      question: "What image formats are supported?",
      answer: "We support JPG, JPEG, and PNG formats. For best results with government applications, we recommend using JPG format as it produces smaller file sizes while maintaining quality.",
    },
    {
      question: "Can I resize signature for SSC exams?",
      answer: "Yes, we have a dedicated SSC signature resize tool that supports the exact specifications required for SSC CGL, SSC CHSL, SSC MTS, and other SSC exams (typically 1KB-12KB).",
    },
    {
      question: "Is my signature data safe?",
      answer: "Absolutely! Your signature is processed entirely in your browser using client-side JavaScript. We don't upload or store any of your images on our servers, ensuring complete privacy and security.",
    },
    {
      question: "Why is my signature getting rejected?",
      answer: "Common reasons include: incorrect file size (check KB requirements), wrong format (use JPG), poor quality scan, or wrong dimensions. Use our exam-specific tools to ensure compliance.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Signature Resize Online Free | GATE, SSC, UPSC Tool"
        description="Free signature resize tool for GATE, SSC, NTPC, UPSC exams. Resize to exact KB size instantly. Secure, fast & trusted by 50,000+ users."
        canonicalUrl="https://signatureresize.in/"
        keywords="signature resize, signature resize online, resize signature to 10kb, GATE signature resize"
      />
      
      {/* Schema.org markup for website */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Signature Resize Online",
          "url": "https://signatureresize.in",
          "description": "Free online signature resize tool for government exams",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "5000",
            "bestRating": "5"
          }
        })
      }} />
      
      {/* Organization Schema */}
      <SEOSchema type="Organization" />
      
      {/* HowTo Schema */}
      <SEOSchema 
        type="HowTo" 
        howToName="How to Resize Signature for Government Exams"
        howToSteps={[
          { text: "Upload your signature image (JPG, JPEG, or PNG format)" },
          { text: "Select the target file size based on exam requirements (e.g., 10KB, 20KB)" },
          { text: "Click the Resize button to process your signature" },
          { text: "Download the resized signature and upload to exam portal" }
        ]}
      />
      
      <div className="min-h-screen bg-background">
        <MouseFollower />
        <AnimatedBackground />
        <Header />

        {/* Hero Section */}
        <section 
          className="relative overflow-hidden py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 dark:from-primary/90 dark:via-primary/80 dark:to-primary/70"
        >
          <div 
            className="absolute inset-0 opacity-20 dark:opacity-10"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <FloatingElements />
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-4 sm:mb-6 inline-flex animate-pulse items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm">
                <span className="h-2 w-2 animate-ping rounded-full bg-green-400" />
                <span className="text-xs sm:text-sm font-medium text-white">
                  #1 Free <strong> Signature Resize</strong> Tool in India • Trusted by 50,000+ Users
                </span>
              </div>
              
              <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                Resize Your Signature{" "}
                <span className="block sm:inline">to Exact KB Size</span>
              </h1>
              
              <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
                Struggling with signature file size for your GATE, SSC, or NTPC application? 
                Our tool resizes your signature to the exact KB requirement in seconds. 
                Trusted by over 50,000 students across India.
              </p>
              
              <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
                <Button 
                  asChild 
                  size="lg" 
                  className="group w-full sm:w-auto bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary dark:hover:bg-white/90 text-base sm:text-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <Link to="/signature-resize">
                    <Pen className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:rotate-12" />
                    Resize Signature Now
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-white/30 bg-white/10 text-white hover:bg-white/20 dark:border-white/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 text-base sm:text-lg backdrop-blur-sm transition-all hover:scale-105"
                >
                  <Link to="/gate-signature-resize">
                    GATE 2025 Tool
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
              </div>

              {/* Quick stats in hero */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">No Registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">100% Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Instant Results</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Main Tool Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 text-center">
                <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  START NOW
                </span>
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                  Resize Your Signature Instantly
                </h2>
                <p className="text-muted-foreground">
                  Upload your signature image below and resize it to your desired file size. 
                  Works for GATE, SSC, NTPC, and all other government exams.
                </p>
              </div>
              <SignatureResizer title="Universal Signature Resizer" />
            </div>
          </div>
        </section>

        {/* Ad Container */}
        <div className="container mx-auto px-4 py-4">
          <AdContainer slot="home-banner-1" format="horizontal" className="mx-auto max-w-4xl" />
        </div>

        {/* Stats Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center rounded-xl border border-border bg-card p-4 text-center shadow-lg transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <stat.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold text-foreground md:text-2xl">{stat.value}</span>
                    <span className="text-xs text-muted-foreground md:text-sm">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                WHY CHOOSE US
              </span>
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                Features That Make Us #1
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Tutorial Section */}
        <VideoTutorial />

        {/* Tools Grid Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                ALL FREE TOOLS
              </span>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Signature & Photo Resize Tools
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Choose the right tool based on your exam or application requirements.
                All tools are free and work instantly in your browser.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {tools.map((tool) => (
                <ToolCard key={tool.href} {...tool} />
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Processing Features */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <ProcessingFeatures />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* SEO Content Section */}
        <section className="border-t border-border bg-card py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
                How to Resize Signature Online for Government Exams
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">SignatureResize.in</strong> is India's most trusted free online 
                  signature resize tool. Whether you need to resize your signature for GATE, SSC CGL, SSC MTS, 
                  RRB NTPC, UPSC, or any other government examination, our tool helps you achieve the exact 
                  file size requirements instantly.
                </p>
                <h3 className="text-xl font-semibold text-foreground">
                  Why Signature Size Matters for Government Exams
                </h3>
                <p>
                  Government exams like GATE, SSC, and NTPC have strict requirements for signature image size. 
                  Most exams require signatures between 4KB to 30KB with specific dimensions. Submitting a 
                  signature that doesn't meet these requirements can lead to application rejection.
                </p>
                <h3 className="text-xl font-semibold text-foreground">
                  Key Features of Our Signature Resize Tool
                </h3>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Resize signature to exact KB size (10KB, 20KB, 50KB, etc.)</li>
                  <li>Maintain signature quality while reducing file size</li>
                  <li>Support for JPG, JPEG, and PNG formats</li>
                  <li>100% free with no registration required</li>
                  <li>Works on mobile, tablet, and desktop</li>
                  <li>Secure - images processed locally in your browser</li>
                </ul>
                <h3 className="text-xl font-semibold text-foreground">
                  Supported Exams and Applications
                </h3>
                <p>
                  Our tool supports signature requirements for GATE, SSC CGL, SSC CHSL, SSC MTS, RRB NTPC, 
                  RRB Group D, UPSC, Bank PO, Bank Clerk, UTI PAN Card, IBPS, and many more government 
                  examinations and applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* AdSense Disclaimer */}
        <AdSenseDisclaimer />

        <Footer />
      </div>
    </>
  );
};

export default Index;

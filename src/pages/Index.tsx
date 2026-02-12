import { Link } from "react-router-dom";
import { FileImage, Pen, Zap, Shield, CheckCircle, ArrowRight, Users, Download, Star, Award, BookOpen } from "lucide-react";
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
        title="Signature Resize | Free Online Signature Resizer for Exams"
        description="Resize signature to exact KB for GATE, SSC, NTPC, UPSC exams. Free online signature resizer trusted by 50,000+ students. Instant, secure, no signup."
        canonicalUrl="https://signatureresize.in/"
        keywords="signature resize, signature resizer, resize signature online, signature resize for exam, resize signature to 10kb"
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

      {/* FAQPage Schema for rich snippets */}
      <SEOSchema
        type="FAQPage"
        faqs={faqs.map(faq => ({ question: faq.question, answer: faq.answer }))}
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
                Signature Resize Online Free{" "}
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
                    GATE 2026 Tool
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
                WHY CHOOSE SIGNATURERESIZE.IN
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

        {/* Guides & Resources Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                GUIDES & RESOURCES
              </span>
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                Learn Before You Upload
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Practical guides written from experience — how to scan, crop, resize, and avoid rejection.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { href: "/how-to-scan-signature-for-online-forms", title: "How to Scan Your Signature", desc: "Step-by-step: phone scanning, flatbed scanning, and getting a clean image for upload." },
                { href: "/exam-photo-signature-requirements-2026", title: "Exam Requirements 2026", desc: "Photo and signature specs for GATE, SSC, UPSC, NEET, IBPS, GDS — all in one table." },
                { href: "/signature-upload-errors-and-fixes", title: "Upload Errors & Fixes", desc: "The 6 most common portal errors and how to fix each one in under a minute." },
                { href: "/upsc-triple-signature-guide", title: "UPSC Triple Signature", desc: "UPSC wants 3 signatures in one image. Here is exactly how to write, scan, and crop it." },
                { href: "/how-to-take-passport-photo-at-home-for-exams", title: "Passport Photo at Home", desc: "No studio needed. Take an exam-ready passport photo with your phone and a white wall." },
              ].map((blog) => (
                <Link
                  key={blog.href}
                  to={blog.href}
                  className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground group-hover:text-primary transition-colors">{blog.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{blog.desc}</p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-primary">
                    Read guide <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="border-t border-border bg-card py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
                What Is Signature Resize and Why Does It Matter?
              </h2>
              <figure className="mb-8">
                <img
                  src="/assest/signature-resize-landing-page-image.png"
                  alt="Signature Resize Online Free Tool — Resize signature to exact KB size for GATE, SSC, UPSC, NEET exams"
                  className="w-full rounded-xl border border-border shadow-lg"
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="630"
                />
                <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                  SignatureResize.in — Free online signature resize tool trusted by 50,000+ students
                </figcaption>
              </figure>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every government exam portal in India — GATE, SSC, UPSC, NEET, IBPS, RRB NTPC — asks you to
                  upload a scanned signature during the application process. And every portal has its own rules:
                  a specific KB range, specific pixel dimensions, and always JPG format. If your file does not
                  match, the portal rejects it. No explanation, just a red error.
                </p>
                <p>
                  That is what <strong className="text-foreground">signature resize</strong> means in practice:
                  taking your scanned signature image and compressing it to the exact kilobyte size that the
                  portal expects. It sounds simple, but standard image editors do not let you target a specific
                  KB value. They let you change dimensions or quality percentage — but you are left guessing
                  whether the output will be 18KB or 25KB. You end up saving, checking, adjusting, saving again.
                </p>
                <p>
                  We built this <strong className="text-foreground">signature resizer</strong> to skip that loop
                  entirely. You set a target KB (say 20KB for SSC, or 30KB for GATE), upload your image, and the
                  tool uses a binary search algorithm to find the exact compression level that lands your file at
                  that size. The whole thing takes about 2 seconds, it runs inside your browser so nothing gets
                  uploaded to any server, and the output is a proper JPG file ready for the portal.
                </p>
                <h3 className="text-xl font-semibold text-foreground">
                  What Makes This Different From Other Resize Tools?
                </h3>
                <p>
                  General-purpose image resizers (Canva, Adobe, TinyPNG) are built for web developers and
                  designers. They optimize for visual quality or page load speed. They do not care about hitting
                  exactly 19KB or matching 140×60 pixel dimensions for a PAN card signature. Our tool was built
                  specifically for Indian exam applicants. Each exam has a pre-configured preset with the right KB
                  range and pixel dimensions, so you do not need to look up the specs yourself.
                </p>
                <p>
                  Over 50,000 students have used this tool during GATE, SSC, and UPSC application seasons. If
                  you are not sure about your exam's requirements, check our
                  <Link to="/exam-photo-signature-requirements-2026" className="text-primary hover:underline mx-1">exam requirements guide</Link>
                  or read the <Link to="/signature-upload-errors-and-fixes" className="text-primary hover:underline mx-1">common upload errors page</Link>
                  to troubleshoot issues.
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

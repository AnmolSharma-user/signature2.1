import { Link } from "react-router-dom";
import { FileImage, Pen, PenTool, Zap, Shield, CheckCircle, ArrowRight, Users, Download, Star, Award, BookOpen, Camera } from "lucide-react";
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
    { href: "/sbi-po-2026-photo-signature-resize", title: "SBI PO 2026 Photo & Sig", description: "Resize SBI PO photo to 20–50KB (200×230px) and signature to 10–20KB. Apply before July 8, 2026!", icon: Camera, badge: "Apply Now 🔥" },
    { href: "/bihar-police-photo-signature-resize", title: "Bihar Police Photo & Sig", description: "Resize Bihar Police CSBC photo to 20–50KB and signature to 10–40KB. Free, instant, browser-only.", icon: Camera, badge: "Hot 🔥" },
    { href: "/delhi-police-photo-signature-resize", title: "Delhi Police Photo Resize", description: "Resize Delhi Police Constable 2026 photo (20–50KB), signature (10–20KB), and thumb impression instantly.", icon: Camera, badge: "Popular" },
    { href: "/rajasthan-police-photo-signature-resize", title: "Rajasthan Police Photo", description: "Resize Rajasthan Police photo to 50–100KB and signature to 20–50KB for SSO portal.", icon: Camera, badge: "New" },
    { href: "/mp-police-photo-signature-resize", title: "MP Police Photo & Sig", description: "Resize MP Police MPPEB photo to 20–50KB and signature to 10–30KB for peb.mp.gov.in.", icon: Camera, badge: "New" },
    { href: "/ctet-2026-photo-signature-resize", title: "CTET 2026 Photo & Sig", description: "Resize CTET photo to 10–100KB (200×230px) and signature to 3–30KB for NTA ctet.nic.in.", icon: FileImage, badge: "New" },
    { href: "/nda-2026-photo-signature-resize", title: "NDA 2026 Photo & Sig", description: "Resize NDA photo to square 350×350px (10–300KB) and signature to 350×90px for UPSC portal.", icon: Camera, badge: "New" },
    { href: "/kvs-teacher-photo-signature-resize", title: "KVS Teacher Photo & Sig", description: "Resize KVS PGT/TGT/PRT photo to 10–200KB and signature to 4–30KB for kvsangathan.nic.in.", icon: Camera, badge: "New" },
    { href: "/capf-ac-photo-signature-resize", title: "CAPF AC Photo & Sig", description: "Resize CAPF AC (BSF/CRPF/CISF) photo to 350×350px square and signature to 350×90px.", icon: Camera, badge: "New" },
    { href: "/ssc-cgl-photo-signature-resize", title: "SSC CGL Photo & Sig", description: "Resize photo to 20–50KB and signature to 10–20KB for SSC CGL 2026-27. Correction window active.", icon: FileImage, badge: "SSC" },
    { href: "/tnpsc-photo-compressor", title: "TNPSC Photo Compressor", description: "Compress TNPSC OTR photo (20–50KB), signature (10–30KB), and apply white background — all in one free tool.", icon: Camera, badge: "TNPSC" },
    { href: "/hssc-photo-signature-resize", title: "HSSC Photo & Sig Resize", description: "Resize photo (10–40KB) and signature (10–30KB) for HSSC CET Group C, Group D, and Haryana Police 2026.", icon: Camera, badge: "HSSC" },
    { href: "/signature-creator", title: "Signature Creator", description: "Create a digital signature by drawing or typing. Download & resize instantly.", icon: PenTool, badge: "Popular" },
    { href: "/signature-resize", title: "Signature Resize", description: "Resize signature to any KB size. Perfect for all government exam applications.", icon: Pen, badge: "Popular" },
    { href: "/rrb-group-d-photo-signature-resize", title: "RRB Group D Resize", description: "Resize photo (20–50KB), signature (10–40KB) and thumb for RRB Group D 2026 recruitment.", icon: FileImage, badge: "2026" },
    { href: "/aadhaar-card-photo-resize", title: "Aadhaar Photo Resize", description: "Resize your photo to under 35KB for the UIDAI myAadhaar portal. Instant & free.", icon: Camera },
    { href: "/compress-image-to-20kb-online", title: "Compress to 20KB", description: "Compress any photo or signature to exactly 20KB for SSC, IBPS, UPSC, RRB exams.", icon: Zap, badge: "Hot" },
    { href: "/exam-photo-checker", title: "Exam Photo Checker", description: "Upload your photo and instantly verify if it meets exam requirements (SSC, IBPS, DS-160 & more).", icon: CheckCircle },
    { href: "/passport-photo-maker", title: "Passport Photo Maker", description: "Create 2×2 passport photos for US Visa, USCIS, Indian exam portals. White background included.", icon: Camera },
    { href: "/bulk-resize", title: "Bulk Resize", description: "Resize multiple signatures at once. Perfect for batch processing.", icon: FileImage },
    { href: "/upsc-signature-resize", title: "UPSC Signature", description: "Resize signature for UPSC Civil Services, NDA, CDS, CAPF. 4KB to 20KB.", icon: Pen, badge: "UPSC" },
    { href: "/gate-signature-resize", title: "GATE Signature", description: "Resize signature as per GATE exam specifications. 4KB to 30KB.", icon: Pen, badge: "GATE 2026" },
    { href: "/ssc-mts-signature-resize", title: "SSC MTS Signature", description: "Resize signature for SSC MTS, CGL, CHSL exams. 10KB to 20KB (updated for 2026).", icon: FileImage },
    { href: "/ntpc-signature-resize", title: "NTPC Signature", description: "Resize signature for RRB NTPC recruitment. 10KB to 20KB.", icon: Pen },
    { href: "/gate-photo-resize", title: "GATE Photo Resize", description: "Resize photo for GATE exam. 5KB to 200KB with proper dimensions.", icon: FileImage },
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
    { icon: Users, value: "1,00,000+", label: "Happy Users" },
    { icon: Download, value: "2,00,000+", label: "Downloads" },
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
      answer: "Yes, we have a dedicated SSC signature resize tool that supports the exact specifications required for SSC CGL, SSC CHSL, SSC MTS, and other SSC exams (updated to 10KB-20KB for the 2026 cycle).",
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
        title="Free Signature & Photo Resize Tools for Government Exams 2026 | SignatureResize.in"
        description="Free online tools to resize signature, photo, and thumb impression for SSC, IBPS, RRB, UPSC, GATE, NEET, Aadhaar exams. Trusted by 50,000+ students. Instant, accurate, no signup."
        canonicalUrl="https://signatureresize.in/"
        keywords="signature resize tool, photo resize for exam, resize signature online, government exam photo signature, signature resizer india, signature photo resize 2026"
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

      {/* FAQPage Schema — enables People Also Ask rich results */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the SSC CGL 2026 signature size requirement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For SSC CGL 2026, the signature must be in JPG format, dimensions 140×60 pixels, and between 10 KB and 20 KB. Background must be white with black ink in cursive. This was updated from the old 1–12 KB range per the May 21, 2026 official notification."
              }
            },
            {
              "@type": "Question",
              "name": "How do I resize a photo for Delhi Police Constable 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Delhi Police Constable 2026 requires a photo of 100×120 pixels, JPG format, between 20 KB and 50 KB with a white background. Use our free Delhi Police photo resize tool at signatureresize.in/delhi-police-photo-signature-resize to compress your photo to the exact size instantly."
              }
            },
            {
              "@type": "Question",
              "name": "What is the NEET 2026 photo and signature size?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For NEET UG 2026 (NTA), the photo must be between 10 KB and 200 KB in JPG format with a white background. The signature must be between 4 KB and 30 KB. Dimensions are 3.5×4.5 cm for the photo."
              }
            },
            {
              "@type": "Question",
              "name": "Is it safe to resize signature online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, signatureresize.in processes all images entirely in your browser using JavaScript. Your photo or signature is never uploaded to any server, ensuring complete privacy. No registration or login is required."
              }
            },
            {
              "@type": "Question",
              "name": "What is the IBPS PO 2026 photo size requirement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "IBPS PO 2026 requires a passport photo between 20 KB and 50 KB in JPG format with dimensions 200×230 pixels and a white background. The signature must be between 10 KB and 20 KB."
              }
            },
            {
              "@type": "Question",
              "name": "How to resize photo for RRB NTPC 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "RRB NTPC 2026 photo must be in JPG format, between 20 KB and 50 KB, approximately 130×150 pixels with a white background. The signature must be 10–40 KB and the thumb impression must be 10–40 KB. Use the free RRB NTPC resize tool on signatureresize.in."
              }
            }
          ]
        })
      }} />

      <div className="min-h-screen bg-background">
        <MouseFollower />
        <AnimatedBackground />
        <Header />

        {/* Urgency Notification Banner */}
        <div className="bg-red-600 text-white px-4 py-2 text-center text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-inner relative z-20">
          <span className="bg-white text-red-600 text-[10px] uppercase px-1.5 py-0.5 rounded font-bold animate-pulse">Urgent</span>
          <span>SBI PO 2026 application closes <strong>July 8, 2026</strong> — Resize your photo &amp; signature now!</span>
          <Link to="/sbi-po-2026-photo-signature-resize" className="underline hover:text-red-200 ml-1 inline-flex items-center gap-0.5">
            Resize Now <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

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
                  #1 Free <strong> Signature Resize</strong> Tool in India • Trusted by 75,000+ Users
                </span>
              </div>

              <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                Free Tools to <span className="block sm:inline">Resize Signature &amp; Photo</span>{" "}
                <span className="block text-white/80">for Every Government Exam</span>
              </h1>

              <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
                Struggling with signature file size for your GATE, SSC, or NTPC application?
                Our tool resizes your signature to the exact KB requirement in seconds.
                Trusted by over 75,000 students across India.
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
                  <Link to="/signature-creator">
                    Signature Creator
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

        {/* Ad — Display below main tool */}
        <div className="container mx-auto px-4 pb-4">
          <AdContainer type="display" className="mx-auto max-w-4xl" />
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

        {/* Categorized Tools Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">FREE TOOLS — ALL EXAMS</span>
              <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">Find Your Exam Tool Instantly</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-sm">Browse by exam category. Every tool is free, instant, and works in your browser — no uploads to any server.</p>
            </div>

            {/* CATEGORY: Trending / Urgent */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 text-red-600 dark:text-red-400">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">🔥 Trending — Apply Now</h3>
                  <p className="text-xs text-muted-foreground">Active recruitments with upcoming deadlines</p>
                </div>
                <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-red-500 border border-red-500/30 bg-red-500/10 rounded-full px-2 py-0.5 animate-pulse">Live</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { href: "/sbi-po-2026-photo-signature-resize", title: "SBI PO 2026", desc: "Photo 20–50KB · Sig 10–20KB · Deadline July 8!", badge: "July 8 ⚠️", color: "border-red-400/60 hover:border-red-500" },
                  { href: "/bihar-police-photo-signature-resize", title: "Bihar Police (CSBC)", desc: "Photo 20–50KB (200×230) · Sig 10–40KB", badge: "Active", color: "border-orange-400/60 hover:border-orange-500" },
                  { href: "/rajasthan-police-photo-signature-resize", title: "Rajasthan Police", desc: "Photo 50–100KB · Sig 20–50KB · SSO Portal", badge: "Active", color: "border-orange-400/60 hover:border-orange-500" },
                  { href: "/mp-police-photo-signature-resize", title: "MP Police (MPPEB)", desc: "Photo 20–50KB · Sig 10–30KB · peb.mp.gov.in", badge: "Active", color: "border-orange-400/60 hover:border-orange-500" },
                ].map((t) => (
                  <Link key={t.href} to={t.href} className={`group flex flex-col rounded-xl border-2 bg-card p-4 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${t.color}`}>
                    <div className="flex items-start justify-between mb-2">
                      <Camera className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-[10px] font-bold uppercase bg-red-500/10 text-red-600 dark:text-red-400 border border-red-400/30 rounded-full px-1.5 py-0.5">{t.badge}</span>
                    </div>
                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{t.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 flex-1">{t.desc}</p>
                    <span className="mt-2 text-xs text-primary flex items-center gap-1 font-medium">Resize Now <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" /></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CATEGORY: Banking Exams */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">🏦 Banking Exams</h3>
                  <p className="text-xs text-muted-foreground">SBI, IBPS, RBI — exact portal specs</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { href: "/sbi-po-2026-photo-signature-resize", title: "SBI PO 2026", desc: "200×230 px · 20–50KB photo · 10–20KB signature" },
                  { href: "/signature-resize", title: "SBI Clerk / IBPS", desc: "Resize signature to 10–20KB for all bank exams" },
                  { href: "/compress-image-to-20kb-online", title: "Compress to 20KB", desc: "Exact 20KB output for any banking portal" },
                  { href: "/exam-photo-checker", title: "Exam Photo Checker", desc: "Verify your photo meets bank exam requirements" },
                ].map((t) => (
                  <Link key={t.href} to={t.href} className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-blue-500 hover:shadow-md hover:-translate-y-0.5">
                    <FileImage className="h-5 w-5 text-blue-600 mb-2" />
                    <p className="text-sm font-bold text-foreground group-hover:text-blue-600 transition-colors">{t.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 flex-1">{t.desc}</p>
                    <span className="mt-2 text-xs text-primary flex items-center gap-1 font-medium">Open Tool <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" /></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CATEGORY: Police Recruitment */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">👮 Police Recruitment</h3>
                  <p className="text-xs text-muted-foreground">Delhi, UP, Bihar, Rajasthan, MP Police</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { href: "/delhi-police-photo-signature-resize", title: "Delhi Police", desc: "Photo 20–50KB (100×120) · Sig 10–20KB · Thumb" },
                  { href: "/up-police-photo-signature-resize", title: "UP Police (OTR)", desc: "Photo 20–50KB · Sig 10–30KB · uppolicerecruitment.in" },
                  { href: "/bihar-police-photo-signature-resize", title: "Bihar Police (CSBC)", desc: "Photo 20–50KB (200×230) · Sig 10–40KB" },
                  { href: "/rajasthan-police-photo-signature-resize", title: "Rajasthan Police", desc: "Photo 50–100KB · Sig 20–50KB · SSO Portal" },
                  { href: "/mp-police-photo-signature-resize", title: "MP Police (MPPEB)", desc: "Photo 20–50KB · Sig 10–30KB · peb.mp.gov.in" },
                  { href: "/hssc-photo-signature-resize", title: "HSSC / Haryana Police", desc: "Photo 10–40KB · Sig 10–30KB · CET Group C/D" },
                  { href: "/ssc-gd-photo-signature-resize", title: "SSC GD Constable", desc: "Photo 4–40KB (160×200) · Sig 1–20KB" },
                  { href: "/compress-image-to-20kb-online", title: "Compress Any Photo", desc: "Universal compressor — works for any police portal" },
                ].map((t) => (
                  <Link key={t.href} to={t.href} className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-indigo-500 hover:shadow-md hover:-translate-y-0.5">
                    <Camera className="h-5 w-5 text-indigo-600 mb-2" />
                    <p className="text-sm font-bold text-foreground group-hover:text-indigo-600 transition-colors">{t.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 flex-1">{t.desc}</p>
                    <span className="mt-2 text-xs text-primary flex items-center gap-1 font-medium">Open Tool <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" /></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CATEGORY: Teaching & Defence */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 text-green-600 dark:text-green-400">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">🎓 Teaching & Defence</h3>
                  <p className="text-xs text-muted-foreground">CTET, KVS, NDA, CAPF, Agniveer</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { href: "/ctet-2026-photo-signature-resize", title: "CTET 2026", desc: "Photo 10–100KB (200×230) · Sig 3–30KB · NTA portal" },
                  { href: "/kvs-teacher-photo-signature-resize", title: "KVS PGT / TGT / PRT", desc: "Photo 10–200KB · Sig 4–30KB · kvsangathan.nic.in" },
                  { href: "/nda-2026-photo-signature-resize", title: "NDA 2026 (UPSC)", desc: "Square 350×350px · Photo 10–300KB · Sig 4–30KB" },
                  { href: "/capf-ac-photo-signature-resize", title: "CAPF AC (BSF/CRPF)", desc: "Square 350×350px · Photo 10–300KB · UPSC portal" },
                  { href: "/agniveer-agnipath-photo-signature-requirements-2026", title: "Agniveer 2026", desc: "Photo & signature requirements for all Agniveer posts" },
                  { href: "/upsc-signature-resize", title: "UPSC Civil Services", desc: "Photo 100–600KB (300×400) · Sig 4–20KB" },
                ].map((t) => (
                  <Link key={t.href} to={t.href} className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-green-500 hover:shadow-md hover:-translate-y-0.5">
                    <BookOpen className="h-5 w-5 text-green-600 mb-2" />
                    <p className="text-sm font-bold text-foreground group-hover:text-green-600 transition-colors">{t.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 flex-1">{t.desc}</p>
                    <span className="mt-2 text-xs text-primary flex items-center gap-1 font-medium">Open Tool <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" /></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CATEGORY: SSC & Railway */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <FileImage className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">📋 SSC & Railway</h3>
                  <p className="text-xs text-muted-foreground">SSC CGL, CHSL, GD, MTS · RRB NTPC, Group D</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { href: "/ssc-cgl-photo-signature-resize", title: "SSC CGL / CHSL", desc: "Photo 4–20KB (100×120) · Sig 1–12KB · SSC OTRP" },
                  { href: "/ssc-gd-photo-signature-resize", title: "SSC GD Constable", desc: "Photo 4–40KB (160×200) · Sig 1–20KB" },
                  { href: "/ssc-mts-signature-resize", title: "SSC MTS", desc: "Signature 10–20KB for SSC MTS 2026" },
                  { href: "/rrb-group-d-photo-signature-resize", title: "RRB Group D", desc: "Photo 20–50KB · Sig 10–40KB · Thumb 10–40KB" },
                  { href: "/ntpc-signature-resize", title: "RRB NTPC", desc: "Signature resize 10–20KB for NTPC application" },
                  { href: "/compress-image-to-20kb-online", title: "Compress to 20KB", desc: "SSC OTRP strict 20KB limit — use this for exact output" },
                ].map((t) => (
                  <Link key={t.href} to={t.href} className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-amber-500 hover:shadow-md hover:-translate-y-0.5">
                    <FileImage className="h-5 w-5 text-amber-600 mb-2" />
                    <p className="text-sm font-bold text-foreground group-hover:text-amber-600 transition-colors">{t.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 flex-1">{t.desc}</p>
                    <span className="mt-2 text-xs text-primary flex items-center gap-1 font-medium">Open Tool <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" /></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CATEGORY: General Tools */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <PenTool className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">🔧 General Tools</h3>
                  <p className="text-xs text-muted-foreground">Signature creator, passport photo, Aadhaar, PAN, bulk resize</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { href: "/signature-creator", title: "Signature Creator", desc: "Draw or type your signature — download as JPG instantly", icon: PenTool },
                  { href: "/signature-resize", title: "Universal Sig Resize", desc: "Resize any signature to any KB — works for all exams", icon: Pen },
                  { href: "/passport-photo-maker", title: "Passport Photo Maker", desc: "2×2 inch photo for US Visa, Indian exam portals", icon: Camera },
                  { href: "/aadhaar-card-photo-resize", title: "Aadhaar Photo Resize", desc: "Under 35KB for UIDAI myAadhaar portal", icon: Camera },
                  { href: "/uti-pan-resize", title: "UTI PAN Card", desc: "Photo & signature for UTI PAN card application", icon: Pen },
                  { href: "/gate-photo-resize", title: "GATE Photo", desc: "5KB – 200KB photo for GATE 2026 application", icon: FileImage },
                  { href: "/gate-signature-resize", title: "GATE Signature", desc: "4KB – 30KB · 160×60 px for GATE exam", icon: Pen },
                  { href: "/bulk-resize", title: "Bulk Resize", desc: "Resize multiple signatures at once — batch processing", icon: FileImage },
                ].map((t) => (
                  <Link key={t.href} to={t.href} className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-purple-500 hover:shadow-md hover:-translate-y-0.5">
                    <t.icon className="h-5 w-5 text-purple-600 mb-2" />
                    <p className="text-sm font-bold text-foreground group-hover:text-purple-600 transition-colors">{t.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 flex-1">{t.desc}</p>
                    <span className="mt-2 text-xs text-primary flex items-center gap-1 font-medium">Open Tool <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" /></span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Mid-page Ad — inarticle after tools grid, users in browse mode = high CTR */}
        <div className="container mx-auto px-4 py-2">
          <AdContainer type="inarticle" className="mx-auto max-w-4xl" />
        </div>

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
        {/* Latest Guides Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                LATEST GUIDES
              </span>
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                Expert Tips for Exam Aspirants
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: "UPPSC RO/ARO 2026 Rules", link: "/uppsc-ro-aro-photo-signature-rules-2026", desc: "Exact photo (10-50 KB) and composite signature requirements to pass AI validation." },
                { title: "Mobile Photo Compress 20KB", link: "/mobile-photo-compress-20kb-no-app", desc: "Compress passport photo to exactly 20KB using just your phone browser — no app needed." },
                { title: "White Background Rule Explained", link: "/white-background-exam-rule-explained", desc: "Why purely white background is essential and how to dodge the dreaded blue-gradient rejection." },
                { title: "EPFO SSA 2026 Thumb & Sign", link: "/epfo-ssa-thumb-impression-signature-guide", desc: "Left thumb impression (10-20KB) specifications and black ink signature rules for NTA." },
                { title: "Blurry Admit Card Photo Fix", link: "/blurry-admit-card-photo-fix", desc: "Learn why aggressive KB compression ruins printout quality and get the exact steps to prevent pixelation." },
                { title: "US Visa DS-160 Photo Guide", link: "/resize-passport-photo-us-visa-ds-160", desc: "2×2 inch, under 240 KB — resize your photo for the US nonimmigrant visa form." },
              ].map((post, i) => (
                <Link key={i} to={post.link} className="group block rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg">
                  <h3 className="mb-2 text-lg font-bold group-hover:text-primary">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{post.desc}</p>
                  <span className="text-sm font-medium text-primary flex items-center">Read More <ArrowRight className="ml-1 h-3 w-3" /></span>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link to="/blog">View All Guides</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Ad — In-article before FAQ — better mobile performance than infeed */}
        <div className="container mx-auto px-4 pb-4">
          <AdContainer type="inarticle" className="mx-auto max-w-4xl" />
        </div>

        <FAQSection faqs={faqs} />

        {/* AdSense Disclaimer */}
        <AdSenseDisclaimer />

        <Footer />
      </div>
    </>
  );
};

export default Index;

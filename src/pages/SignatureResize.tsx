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
import AdContainer from "@/components/AdContainer";
import SignatureCreatorBanner from "@/components/SignatureCreatorBanner";
import { CheckCircle, Shield, Zap, Users, Star, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SignatureResize = () => {
  const faqs = [
    {
      question: "How do I resize my signature to a specific KB size?",
      answer: "Upload your signature image using the tool above, enter your target KB (e.g., 10KB, 20KB, 40KB), and click 'Resize Now'. Our binary search algorithm compresses your image to within ±1KB of the target. Download and upload directly to your exam portal.",
    },
    {
      question: "What is the best signature size for government exams?",
      answer: "It depends on the exam. SSC CGL/CHSL requires 1–12KB. IBPS PO/Clerk needs 10–20KB. RRB NTPC/Group D needs 10–40KB. UPSC needs 20–100KB. GATE needs 4–30KB. NEET needs 4–30KB. Use our exam-specific tools for automatic preset sizing.",
    },
    {
      question: "What file formats are supported for signature resize?",
      answer: "We accept JPG, JPEG, and PNG formats. All outputs are in JPG format (required by most exam portals). PNG files are automatically converted to JPG on output, ensuring portal compatibility.",
    },
    {
      question: "Is there a limit on how many times I can resize?",
      answer: "No limits. Our signature resizer is completely free with unlimited usage. No registration, no watermark, no hidden fees.",
    },
    {
      question: "Will resizing affect my signature quality?",
      answer: "Our tool finds the highest JPEG quality level that still meets your KB target using binary search. For very small targets (under 5KB), some reduction is visible but signatures remain clear and readable — appropriate for exam portal verification.",
    },
    {
      question: "Is my signature data safe when using this tool?",
      answer: "100% safe. Your image is processed entirely in your browser using JavaScript. It is never uploaded to any server. We don't store, see, or share your signature under any circumstances.",
    },
    {
      question: "Why is my signature getting rejected even after resizing?",
      answer: "Common causes: wrong file format (PNG instead of JPG), dimensions outside the allowed range, block letters instead of cursive writing, or grey/patterned background. Read our full guide: Why Signature Gets Rejected — 7 Causes and Fixes.",
    },
    {
      question: "Can I use this signature resizer on mobile?",
      answer: "Yes. Our tool is fully mobile-responsive and works on Android and iOS browsers without any app installation. Upload directly from your phone's gallery or camera.",
    },
    {
      question: "What is the RRB NTPC 2026 signature size requirement?",
      answer: "RRB NTPC 2026 requires: signature in JPG format, 10KB to 40KB, approximately 140×60 pixels, black ink on white paper, in cursive/running hand (block letters rejected).",
    },
    {
      question: "How do I resize a signature for SSC CGL 2026?",
      answer: "SSC CGL 2026 signature must be 1KB to 12KB in JPG format, approximately 140×60 pixels. Use our SSC MTS Signature Resize tool which has the SSC preset ready. Target 10KB for best results.",
    },
  ];

  const tips = [
    "Sign on white paper with black or blue ink",
    "Photograph or scan at 300 DPI for best quality",
    "Crop tightly around the signature — remove all extra whitespace",
    "Keep background pure white — no shadows or grey tints",
    "Always use JPG format — PNG is rejected by most portals",
    "Check exam requirements before uploading — KB ranges differ",
  ];

  const examPresets = [
    { exam: "SSC CGL / CHSL", sigRange: "1–12 KB", target: "10 KB" },
    { exam: "IBPS PO / Clerk", sigRange: "10–20 KB", target: "15 KB" },
    { exam: "RRB Group D / NTPC", sigRange: "10–40 KB", target: "20 KB" },
    { exam: "UPSC (all exams)", sigRange: "20–100 KB", target: "50 KB" },
    { exam: "GATE / JEE", sigRange: "4–30 KB", target: "15 KB" },
    { exam: "NEET UG", sigRange: "4–30 KB", target: "15 KB" },
    { exam: "SBI PO / Clerk", sigRange: "10–20 KB", target: "15 KB" },
    { exam: "India Post GDS", sigRange: "10–20 KB", target: "15 KB" },
  ];

  return (
    <>
      <SEOHead
        title="Signature Resize Online Free | Signature Resizer to Exact KB — 2026"
        description="Resize signature to exact KB size for SSC, IBPS, RRB, UPSC, GATE, NEET exams. Free signature resizer trusted by 50,000+ students. JPG output, instant, no signup. Works on mobile."
        canonicalUrl="https://signatureresize.in/signature-resize"
        keywords="signature resize, signature resizer, resize signature online, signature resize online free, resize signature to 10kb, signature resize for exam, signature resizer for government exam, online signature resize tool"
      />

      {/* Speakable Schema — AI Overview + Voice Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Signature Resize Online Free — Signature Resizer to Exact KB",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".speakable-intro", "h1", "h2"]
            },
            "url": "https://signatureresize.in/signature-resize"
          })
        }}
      />

      {/* WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free Online Signature Resizer",
            "url": "https://signatureresize.in/signature-resize",
            "description": "Free online signature resize tool. Resize signature to exact KB for SSC, IBPS, RRB, UPSC, GATE, and NEET exams.",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Any",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "5200",
              "bestRating": "5",
              "worstRating": "1"
            },
            "author": { "@id": "https://signatureresize.in/#author" },
            "publisher": { "@id": "https://signatureresize.in/#organization" }
          })
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://signatureresize.in" },
              { "@type": "ListItem", "position": 2, "name": "Signature Resize", "item": "https://signatureresize.in/signature-resize" }
            ]
          })
        }}
      />

      {/* HowTo Schema */}
      <SEOSchema
        type="HowTo"
        howToName="How to Resize Signature for Government Exam Portals"
        howToSteps={[
          { text: "Click 'Upload Your Signature' and select your JPG, JPEG, or PNG file from your device or phone gallery" },
          { text: "Check your exam's signature KB requirement (e.g., 10–20KB for IBPS, 10–40KB for RRB, 1–12KB for SSC)" },
          { text: "Enter the target KB in the field provided — set it to the midpoint of your exam's allowed range" },
          { text: "Click 'Resize Now' — the tool processes in 1–2 seconds using binary search compression" },
          { text: "Preview the resized signature and click 'Download'. Upload to your exam portal immediately" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-10 sm:py-14">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ name: "Signature Resize" }]} />
            <div className="mx-auto max-w-4xl text-center mt-2">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Star className="h-4 w-4" />
                #1 Free Signature Resize Tool in India — 50,000+ Users
              </span>
              <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                <span className="text-primary">Signature Resize</span> Online Free —{" "}
                <span className="block sm:inline">Resize to Exact KB Instantly</span>
              </h1>
              <p className="speakable-intro text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
                The fastest free <strong>signature resizer</strong> for government exams. Resize your signature to{" "}
                <strong>exact KB size</strong> for SSC, IBPS, RRB, UPSC, GATE, and NEET portals — in under 3 seconds,
                entirely in your browser. No upload to any server.
              </p>

              {/* Trust stats */}
              <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
                {[
                  { icon: Users, label: "50,000+ Users" },
                  { icon: Shield, label: "100% Browser-Only" },
                  { icon: Zap, label: "Results in 3 Seconds" },
                  { icon: Star, label: "4.8/5 Rating" },
                ].map(({ icon: Icon, label }) => (
                  <span key={label} className="flex items-center gap-1.5 font-medium">
                    <Icon className="h-4 w-4 text-primary" />{label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <main className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <SignatureResizer
                title="Upload Your Signature to Resize"
                defaultTargetKB={20}
                minKB={1}
                maxKB={100}
              />

              {/* Tips Box */}
              <div className="mt-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
                <h2 className="mb-4 text-xl font-bold text-foreground">
                  6 Tips for a Perfect Signature Upload
                </h2>
                <div className="grid gap-3 md:grid-cols-2">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              <SignatureCreatorBanner />
              <AdContainer type="display" />
            </div>

            {/* Exam KB Reference Table */}
            <div className="mx-auto mt-14 max-w-4xl">
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <h2 className="mb-2 text-xl sm:text-2xl font-bold text-foreground">
                  Signature KB Requirements — All Major 2026 Exams
                </h2>
                <p className="mb-5 text-sm text-muted-foreground">
                  Use the midpoint of the allowed range as your target for the safest upload result.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="p-3 text-left rounded-tl-lg">Exam</th>
                        <th className="p-3 text-left">Signature Size</th>
                        <th className="p-3 text-left rounded-tr-lg">Safe Target</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {examPresets.map((row, i) => (
                        <tr key={i} className="hover:bg-muted/50">
                          <td className="p-3 font-medium text-foreground">{row.exam}</td>
                          <td className="p-3 text-muted-foreground">{row.sigRange}</td>
                          <td className="p-3">
                            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                              {row.target}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="mx-auto mt-14 max-w-6xl">
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                  Why Use Our Signature Resizer?
                </h2>
                <p className="text-muted-foreground">
                  Built specifically for Indian government exam candidates — not a generic image tool
                </p>
              </div>
              <FeatureGrid examName="Government Exam" />
            </div>

            {/* SEO Content Block */}
            <div className="mx-auto mt-14 max-w-4xl">
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  How to Resize Your Signature for Government Exams — Complete Guide
                </h2>

                <AdContainer type="inarticle" className="mb-6" />

                <div className="space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong className="text-foreground">SignatureResize.in</strong> is India's most trusted free online
                    signature resize tool. Whether you need to resize your signature for GATE, SSC, UPSC, RRB, IBPS,
                    NEET, or any other government examination, our <strong className="text-foreground">signature resizer</strong>{" "}
                    helps you achieve the exact file size requirement in under 3 seconds.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground">Why Signature File Size Matters</h3>
                  <p>
                    Every Indian government exam portal enforces strict KB size limits for signature uploads. The portal
                    automatically rejects any file that exceeds the maximum — even by 1KB. Submitting a signature that
                    is too large OR too small leads to instant form rejection with no warning. This is why a precise
                    <strong className="text-foreground"> signature resize tool</strong> that targets exact KB is essential,
                    rather than generic image editors that only offer quality percentage sliders.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground">
                    How Our Signature Resizer Works — Binary Search Precision
                  </h3>
                  <p>
                    Unlike tools that let you set a "quality %" (which doesn't map reliably to KB), our tool works the
                    other way: you enter the target KB, and a <strong className="text-foreground">binary search algorithm</strong>{" "}
                    iterates through JPEG compression levels until it finds the exact quality setting that produces your
                    target file size within ±1KB. This guarantees consistent results regardless of the original image.
                  </p>

                  <h3 className="text-lg font-semibold text-foreground">
                    Step-by-Step: How to Resize Signature for Exam Portals
                  </h3>
                  <ol className="ml-6 list-decimal space-y-2">
                    <li>Click <strong className="text-foreground">Upload Your Signature</strong> above and select your image</li>
                    <li>Find your exam's signature KB requirement (see table above)</li>
                    <li>Enter the <strong className="text-foreground">safe target KB</strong> (midpoint of allowed range)</li>
                    <li>Click <strong className="text-foreground">Resize Now</strong> — results appear in 1–2 seconds</li>
                    <li>Download the JPG output and upload to your exam portal</li>
                  </ol>

                  <h3 className="text-lg font-semibold text-foreground">
                    Signature Format Requirements — Common Mistakes to Avoid
                  </h3>
                  <ul className="ml-6 list-disc space-y-2">
                    <li><strong className="text-foreground">Always use JPG/JPEG format</strong> — PNG files are rejected by SSC, IBPS, RRB portals even if they have the right KB size</li>
                    <li><strong className="text-foreground">Sign in cursive/running hand</strong> — block letters are rejected at document verification</li>
                    <li><strong className="text-foreground">White background only</strong> — grey, cream, or patterned backgrounds cause rejection</li>
                    <li><strong className="text-foreground">Crop tightly</strong> — leave minimal white space around the signature</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground">Exam-Specific Signature Resize Tools</h3>
                  <div className="grid sm:grid-cols-2 gap-3 mt-3">
                    {[
                      { to: "/ssc-mts-signature-resize", label: "SSC CGL / CHSL / MTS Signature Resize" },
                      { to: "/ibps-photo-signature-resize", label: "IBPS PO / Clerk Signature Resize" },
                      { to: "/upsc-signature-resize", label: "UPSC Civil Services Signature Resize" },
                      { to: "/gate-signature-resize", label: "GATE Signature Resize" },
                      { to: "/rrb-group-d-photo-signature-resize", label: "RRB Group D Photo & Signature Resize" },
                      { to: "/neet-photo-signature-resize", label: "NEET Photo & Signature Resize" },
                    ].map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 p-3 text-sm font-medium text-primary hover:border-primary hover:shadow-sm transition-all"
                      >
                        <ArrowRight className="h-4 w-4 shrink-0" />
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">From Our Blog</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { to: "/why-signature-rejected-10kb-20kb-fix-2026", label: "Why Signature Gets Rejected (10KB–20KB Fix)", tag: "Troubleshooting" },
                      { to: "/rrb-ntpc-2026-photo-signature-upload-guide", label: "RRB NTPC 2026 Photo & Signature Guide", tag: "Exam Guide" },
                    ].map((post) => (
                      <Link
                        key={post.to}
                        to={post.to}
                        className="flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-sm hover:border-primary hover:shadow-sm transition-all group"
                      >
                        <BookOpen className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-semibold text-primary">{post.tag}</span>
                          <p className="font-medium text-foreground group-hover:text-primary">{post.label}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Processing Section */}
            <div className="mx-auto mt-14 max-w-3xl">
              <ProcessingFeatures />
            </div>

            {/* Trust Badges */}
            <div className="mx-auto mt-14 max-w-4xl">
              <TrustBadges />
            </div>

            {/* Author Bio — E-E-A-T */}
            <div className="mx-auto mt-8 max-w-4xl">
              <div className="rounded-xl border border-border bg-card/50 p-5 flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-primary">SR</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Reviewed by SignatureResize Editorial Team</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Last updated: March 3, 2026 · Based on official exam notifications from SSC.nic.in, IBPS.in,
                    UPSCONLINE.nic.in, and RRB OJAS portal.{" "}
                    <Link to="/about-us" className="text-primary hover:underline">About us →</Link>
                  </p>
                </div>
              </div>
            </div>

            <AdContainer type="infeed" className="mx-auto max-w-4xl mt-6" />
          </div>
        </main>

        <FAQSection faqs={faqs} />
        <AdContainer type="multiplex" className="container mx-auto px-4 mb-6" />
        <Footer />
      </div>
    </>
  );
};

export default SignatureResize;

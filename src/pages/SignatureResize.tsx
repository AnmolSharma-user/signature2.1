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
        ogImage="https://signatureresize.in/assest/signature-resize-online-free.png"
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

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ name: "Signature Resize" }]} />

            <div className="mx-auto mt-2 max-w-4xl text-center">
              {/* Badge */}
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary sm:mb-4 sm:px-4 sm:py-2 sm:text-sm">
                <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                #1 Free Signature Resize Tool in India — 50,000+ Users
              </span>

              {/* H1 — scales: 26px → 36px → 48px */}
              <h1 className="mb-3 text-[1.6rem] font-bold leading-tight text-foreground sm:mb-4 sm:text-4xl lg:text-5xl">
                <span className="text-primary">Signature Resize</span> Online Free
                <span className="mt-1 block text-[1.3rem] font-bold sm:mt-0 sm:inline sm:text-4xl lg:text-5xl">
                  {" "}— Resize to Exact KB
                </span>
              </h1>

              {/* Intro paragraph */}
              <p className="speakable-intro mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                The fastest free <strong>signature resizer</strong> for government exams. Resize to{" "}
                <strong>exact KB</strong> for SSC, IBPS, RRB, UPSC, GATE &amp; NEET — in under 3 seconds,
                entirely in your browser. No upload, no signup.
              </p>

              {/* Trust pill row — wraps gracefully on mobile */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:mt-5 sm:gap-4">
                {[
                  { icon: Users, label: "50,000+ Users" },
                  { icon: Shield, label: "Browser-Only" },
                  { icon: Zap, label: "3-Second Results" },
                  { icon: Star, label: "4.8/5 Rating" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1 rounded-full bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground shadow-sm ring-1 ring-border sm:gap-1.5 sm:text-sm"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Main Content ── */}
        <main className="py-6 sm:py-10 md:py-14">
          <div className="container mx-auto px-4">

            {/* Tool */}
            <div className="mx-auto max-w-3xl">
              <SignatureResizer
                title="Upload Your Signature to Resize"
                defaultTargetKB={20}
                minKB={1}
                maxKB={100}
              />

              {/* Tips — single col → 2-col at sm */}
              <div className="mt-6 rounded-xl border-2 border-primary/20 bg-primary/5 p-4 sm:mt-8 sm:p-6">
                <h2 className="mb-3 text-base font-bold text-foreground sm:mb-4 sm:text-xl">
                  6 Tips for a Perfect Signature Upload
                </h2>
                <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                  {tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                      <span className="text-xs leading-snug text-muted-foreground sm:text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              <SignatureCreatorBanner />
              <AdContainer type="display" />
            </div>

            {/* ── Exam KB Reference Table ── */}
            <div className="mx-auto mt-10 max-w-4xl sm:mt-14">
              <div className="rounded-xl border border-border bg-card p-4 sm:p-6 lg:p-8">
                <h2 className="mb-1 text-lg font-bold text-foreground sm:mb-2 sm:text-2xl">
                  Signature KB Requirements — All Major 2026 Exams
                </h2>
                <p className="mb-4 text-xs text-muted-foreground sm:mb-5 sm:text-sm">
                  Use the midpoint of the allowed range for the safest upload result.
                </p>

                {/* Mobile: card-style list / Desktop: proper table */}
                <div className="block sm:hidden space-y-2">
                  {examPresets.map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg border border-border bg-muted/30 px-3 py-2.5"
                    >
                      <div>
                        <p className="text-xs font-semibold text-foreground">{row.exam}</p>
                        <p className="text-[11px] text-muted-foreground">{row.sigRange}</p>
                      </div>
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                        {row.target}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Desktop table — hidden on mobile */}
                <div className="hidden overflow-x-auto sm:block">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="rounded-tl-lg p-3 text-left">Exam</th>
                        <th className="p-3 text-left">Signature Size</th>
                        <th className="rounded-tr-lg p-3 text-left">Safe Target</th>
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

            {/* ── Features ── */}
            <div className="mx-auto mt-10 max-w-6xl sm:mt-14">
              <div className="mb-6 text-center sm:mb-10">
                <h2 className="mb-2 text-xl font-bold text-foreground sm:mb-4 sm:text-3xl">
                  Why Use Our Signature Resizer?
                </h2>
                <p className="text-sm text-muted-foreground sm:text-base">
                  Built specifically for Indian government exam candidates — not a generic image tool
                </p>
              </div>
              <FeatureGrid examName="Government Exam" />
            </div>

            {/* ── SEO Content Block ── */}
            <div className="mx-auto mt-10 max-w-4xl sm:mt-14">
              <div className="rounded-xl border border-border bg-card p-4 sm:p-6 lg:p-8">
                <h2 className="mb-4 text-lg font-bold text-foreground sm:mb-6 sm:text-2xl">
                  How to Resize Your Signature for Government Exams — Complete Guide
                </h2>

                <AdContainer type="inarticle" className="mb-4 sm:mb-6" />

                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:space-y-5 sm:text-base">
                  <p>
                    <strong className="text-foreground">SignatureResize.in</strong> is India's most trusted free online
                    signature resize tool. Whether you need to resize your signature for GATE, SSC, UPSC, RRB, IBPS,
                    or NEET, our <strong className="text-foreground">signature resizer</strong> delivers the exact KB
                    requirement in under 3 seconds.
                  </p>

                  <div>
                    <h3 className="mb-1.5 text-base font-semibold text-foreground sm:text-lg">
                      Why Signature File Size Matters
                    </h3>
                    <p>
                      Every Indian government exam portal enforces strict KB size limits. Even 1KB over the maximum
                      leads to instant rejection with no warning. A precision{" "}
                      <strong className="text-foreground">signature resize tool</strong> that targets exact KB is
                      essential — quality-percent sliders in generic tools are unreliable.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-1.5 text-base font-semibold text-foreground sm:text-lg">
                      How Our Signature Resizer Works — Binary Search Precision
                    </h3>
                    <p>
                      You enter the target KB; a{" "}
                      <strong className="text-foreground">binary search algorithm</strong> iterates through JPEG
                      compression levels until it finds the exact quality setting that produces your target within ±1KB.
                      Consistent results regardless of the original image — every time.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-1.5 text-base font-semibold text-foreground sm:text-lg">
                      Step-by-Step: How to Resize Signature for Exam Portals
                    </h3>
                    <ol className="ml-5 list-decimal space-y-1.5 sm:ml-6 sm:space-y-2">
                      <li>Click <strong className="text-foreground">Upload Your Signature</strong> and select your image</li>
                      <li>Find your exam's signature KB requirement (see table above)</li>
                      <li>Enter the <strong className="text-foreground">safe target KB</strong> (midpoint of the range)</li>
                      <li>Click <strong className="text-foreground">Resize Now</strong> — results in 1–2 seconds</li>
                      <li>Download the JPG and upload to your exam portal</li>
                    </ol>
                  </div>

                  {/* How-it-works infographic */}
                  <figure className="overflow-hidden rounded-xl border border-border shadow-sm">
                    <img
                      src="/assest/signature-resize-how-it-works.png"
                      alt="How to resize signature for government exam portal — step by step visual guide: upload, set KB target, binary search compression, download"
                      className="h-auto w-full object-cover"
                      width="1200"
                      height="600"
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="bg-muted/50 px-3 py-1.5 text-center text-xs text-muted-foreground sm:px-4 sm:py-2">
                      Our free signature resizer hits your exact KB target using binary search — no quality-percent guessing.
                    </figcaption>
                  </figure>

                  <div>
                    <h3 className="mb-1.5 text-base font-semibold text-foreground sm:text-lg">
                      Signature Format Requirements — Common Mistakes to Avoid
                    </h3>
                    <ul className="ml-5 list-disc space-y-1.5 sm:ml-6 sm:space-y-2">
                      <li><strong className="text-foreground">Always use JPG/JPEG</strong> — PNG is rejected by SSC, IBPS, RRB portals even at the right KB size</li>
                      <li><strong className="text-foreground">Sign in cursive/running hand</strong> — block letters are rejected at document verification</li>
                      <li><strong className="text-foreground">White background only</strong> — grey, cream, or patterned backgrounds cause rejection</li>
                      <li><strong className="text-foreground">Crop tightly</strong> — leave minimal white space around the signature</li>
                    </ul>
                  </div>

                  {/* Exam-specific tool links — single col mobile, 2-col sm */}
                  <div>
                    <h3 className="mb-2 text-base font-semibold text-foreground sm:text-lg">
                      Exam-Specific Signature Resize Tools
                    </h3>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {[
                        { to: "/ssc-mts-signature-resize", label: "SSC CGL / CHSL / MTS" },
                        { to: "/ibps-photo-signature-resize", label: "IBPS PO / Clerk" },
                        { to: "/upsc-signature-resize", label: "UPSC Civil Services" },
                        { to: "/gate-signature-resize", label: "GATE" },
                        { to: "/rrb-group-d-photo-signature-resize", label: "RRB Group D" },
                        { to: "/neet-photo-signature-resize", label: "NEET UG" },
                      ].map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-xs font-medium text-primary transition-all hover:border-primary hover:shadow-sm sm:text-sm"
                        >
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                          {link.label} Signature Resize
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Blog links — single col mobile, 2-col sm */}
                  <div>
                    <h3 className="mb-2 text-base font-semibold text-foreground sm:text-lg">From Our Blog</h3>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {[
                        {
                          to: "/why-signature-rejected-10kb-20kb-fix-2026",
                          label: "Why Signature Gets Rejected (10KB–20KB Fix)",
                          tag: "Troubleshooting",
                        },
                        {
                          to: "/rrb-ntpc-2026-photo-signature-upload-guide",
                          label: "RRB NTPC 2026 Photo & Signature Guide",
                          tag: "Exam Guide",
                        },
                      ].map((post) => (
                        <Link
                          key={post.to}
                          to={post.to}
                          className="group flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-xs transition-all hover:border-primary hover:shadow-sm sm:text-sm"
                        >
                          <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
                          <div>
                            <span className="text-[10px] font-semibold uppercase tracking-wide text-primary sm:text-xs">
                              {post.tag}
                            </span>
                            <p className="font-medium text-foreground group-hover:text-primary">{post.label}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing */}
            <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
              <ProcessingFeatures />
            </div>

            {/* Trust Badges */}
            <div className="mx-auto mt-10 max-w-4xl sm:mt-14">
              <TrustBadges />
            </div>

            {/* Author Bio — E-E-A-T */}
            <div className="mx-auto mt-6 max-w-4xl sm:mt-8">
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4 sm:gap-4 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-12 sm:w-12">
                  <span className="text-base font-bold text-primary sm:text-xl">SR</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground sm:text-sm">
                    Reviewed by SignatureResize Editorial Team
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                    Last updated: March 3, 2026 · Based on official exam notifications from SSC.nic.in, IBPS.in,
                    UPSCONLINE.nic.in, and RRB OJAS portal.{" "}
                    <Link to="/about-us" className="text-primary hover:underline">
                      About us →
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <AdContainer type="infeed" className="mx-auto mt-6 max-w-4xl" />
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

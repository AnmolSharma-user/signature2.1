import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdContainer from "@/components/AdContainer";
import {
  Camera, Pen, ArrowRight, CheckCircle, Shield, Zap, Clock,
  Home, ChevronRight, FileImage, AlertTriangle, ExternalLink,
} from "lucide-react";

const NICLPhotoSignatureResize = () => {
  const photoSpecs = [
    { label: "Format", value: "JPG / JPEG" },
    { label: "File Size", value: "20 – 50 KB" },
    { label: "Dimensions", value: "200 × 230 px" },
    { label: "Background", value: "White" },
    { label: "Face Coverage", value: "75–80%" },
  ];

  const signatureSpecs = [
    { label: "Format", value: "JPG / JPEG" },
    { label: "File Size", value: "10 – 20 KB" },
    { label: "Dimensions", value: "140 × 60 px" },
    { label: "Paper", value: "White" },
    { label: "Ink", value: "Black / Dark Blue" },
  ];

  const faqs = [
    {
      q: "What is the photo size requirement for NICL Assistant 2026?",
      a: "NICL requires a passport-size photograph in JPG/JPEG format, file size between 20 KB and 50 KB, with pixel dimensions of 200×230 pixels. The background must be white or very light coloured, and your face should occupy 75–80% of the photo area. This is consistent across NICL Assistant, Administrative Officer, and most insurance PSU recruitments.",
    },
    {
      q: "What is the signature size for NICL application?",
      a: "The signature must be in JPG/JPEG format, between 10 KB and 20 KB file size, with dimensions 140×60 pixels. You should sign on plain white paper using black or dark blue ink. The signature must be in your normal running handwriting — not printed or capital letters. NICL's portal will reject signatures outside this exact range.",
    },
    {
      q: "Can I use the same photo and signature for NICL Assistant and AO?",
      a: "Yes — NICL uses the same specification for both Assistant and Administrative Officer posts. If you've successfully uploaded a photo and signature for one NICL exam, you can reuse the same files for another NICL recruitment, provided the signature hasn't changed significantly.",
    },
    {
      q: "Why is my NICL photo being rejected?",
      a: "Common reasons: file size outside 20–50 KB range, wrong dimensions (must be 200×230 px), PNG format instead of JPG, non-white background, face too small or too large in frame, or poor image quality. Use our NICL photo resizer tool to automatically correct all these issues.",
    },
    {
      q: "How do I resize my photo for NICL online?",
      a: "Upload your photo to our NICL photo resizer tool. It automatically crops to 200×230 pixels, applies white background if needed, and compresses to a size between 20–50 KB using a binary-search algorithm. Download the JPG and upload directly to the NICL portal.",
    },
    {
      q: "Is this NICL resize tool free?",
      a: "Yes, completely free. No registration, no watermarks, no daily limits. The tool runs entirely in your browser — your photo and signature never leave your device. This is critical for documents like signatures that contain sensitive personal information.",
    },
    {
      q: "Does NICL require a live photo or uploaded file?",
      a: "NICL currently accepts uploaded photo files. Unlike some banking exams that have moved to live webcam capture, NICL allows you to upload a pre-prepared photograph that meets the specifications. This gives you time to get the photo right before submitting.",
    },
    {
      q: "What happens if my NICL signature is below 10 KB?",
      a: "The NICL portal will reject it. A file smaller than 10 KB suggests poor image quality. If your signature is very simple with few strokes, try signing slightly larger or with more pressure to add detail. Alternatively, reduce compression in our tool to increase file size.",
    },
  ];

  return (
    <>
      <SEOHead
        title="NICL Photo & Signature Resize Free — 20-50KB Photo, 10-20KB Signature Instant"
        description="Resize photo to 20–50KB (200×230px) and signature to 10–20KB (140×60px) for NICL Assistant, AO, and all NIACL/NICL recruitments. Free, instant, browser-only processing."
        canonicalUrl="https://signatureresize.in/nicl"
        keywords="nicl photo resize, nicl signature resize, nicl assistant photo resizer, nicl photo resizer, nicl image resizer, nicl assistant signature resizer, nicl sign resize, niacl photo signature"
      />

      <SEOSchema
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://signatureresize.in/" },
          { name: "NICL Photo & Signature Resize", url: "https://signatureresize.in/nicl" },
        ]}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "NICL Photo & Signature Resize Tool",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Web Browser",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
          "url": "https://signatureresize.in/nicl",
          "description": "Free online tool to resize photo and signature for NICL Assistant, AO exams. Photo 20-50KB, signature 10-20KB.",
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
          })),
        },
      ]) }} />

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/5 via-background to-blue-500/5">
          <div className="container mx-auto px-4 py-8">
            <Breadcrumbs items={[{ name: "NICL Photo & Signature Resize" }]} />

            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-4">
                <Zap className="h-3 w-3" /> Free · No Login · Instant Download
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                NICL Photo & Signature<br />
                <span className="text-primary">Resize Tool</span> Online Free
              </h1>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
                Resize your passport photo and handwritten signature for <strong className="text-foreground">NICL Assistant, Administrative Officer, and all NIACL recruitments</strong>. Photo compressed to <strong className="text-foreground">20–50 KB at 200×230 px</strong>, signature to <strong className="text-foreground">10–20 KB at 140×60 px</strong> — exact specs accepted by the NICL portal.
              </p>

              <div className="flex flex-wrap gap-3 text-xs mb-8">
                {["JPG/JPEG Format", "No Server Upload", "Works Offline", "No Watermark"].map(s => (
                  <span key={s} className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 font-medium text-foreground">
                    <CheckCircle className="h-3 w-3 text-green-500" /> {s}
                  </span>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                <Link
                  to="/nicl-photo-resizer"
                  className="group flex items-center justify-between rounded-2xl border-2 border-primary bg-primary text-primary-foreground p-5 hover:opacity-95 transition-all shadow-lg shadow-primary/20"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Camera className="h-5 w-5" />
                      <span className="font-bold text-lg">NICL Photo Resizer</span>
                    </div>
                    <p className="text-sm opacity-90">200×230px · 20–50KB · Instant</p>
                  </div>
                  <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/nicl-signature-resize"
                  className="group flex items-center justify-between rounded-2xl border-2 border-primary bg-card p-5 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Pen className="h-5 w-5 text-primary" />
                      <span className="font-bold text-lg text-foreground">NICL Signature Resize</span>
                    </div>
                    <p className="text-sm text-muted-foreground">140×60px · 10–20KB · Free</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-primary transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <AdContainer type="inarticle" className="container mx-auto px-4 max-w-4xl py-6" />

        <section className="py-12 bg-muted/20 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">NICL Photo & Signature Requirements 2026</h2>
              <p className="text-sm text-muted-foreground">Exact specifications from NICL official notification — verify before uploading</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="px-5 py-3 bg-primary/5 border-b border-border flex items-center gap-2">
                  <Camera className="h-4 w-4 text-primary" />
                  <span className="font-bold text-foreground">Photograph Specifications</span>
                </div>
                <div className="p-5 space-y-3">
                  {photoSpecs.map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{label}</span>
                      <span className="text-sm font-semibold text-foreground font-mono">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="px-5 pb-5">
                  <Link
                    to="/nicl-photo-resizer"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-semibold py-2.5 hover:opacity-90 transition-opacity"
                  >
                    <FileImage className="h-4 w-4" /> Resize Photo Now
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="px-5 py-3 bg-primary/5 border-b border-border flex items-center gap-2">
                  <Pen className="h-4 w-4 text-primary" />
                  <span className="font-bold text-foreground">Signature Specifications</span>
                </div>
                <div className="p-5 space-y-3">
                  {signatureSpecs.map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{label}</span>
                      <span className="text-sm font-semibold text-foreground font-mono">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="px-5 pb-5">
                  <Link
                    to="/nicl-signature-resize"
                    className="w-full flex items-center justify-center gap-2 rounded-xl border-2 border-primary text-primary font-semibold py-2.5 hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Pen className="h-4 w-4" /> Resize Signature Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">About NICL Photo & Signature Upload</h2>
                <p className="mb-3">
                  National Insurance Company Limited (NICL) conducts recruitment for Assistant, Administrative Officer (AO), and other posts through an online application portal. Like most insurance PSU exams under the NIACL umbrella, the portal has strict file validation for uploaded images. Photographs must be between 20 KB and 50 KB at exactly 200×230 pixels. Signatures must be between 10 KB and 20 KB at 140×60 pixels.
                </p>
                <p>
                  These specifications match those used by other public sector insurance companies — New India Assurance, Oriental Insurance, and United India Insurance. If you've applied to any of these before, the same resized files will work for NICL. The portal rejects files outside the specified range in both directions — too small is just as problematic as too large.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">Why File Size Matters for NICL Portal</h2>
                <p className="mb-3">
                  The NICL online form uses server-side validation to check every uploaded file. If your photo is 55 KB instead of the maximum 50 KB, the upload fails with an error message. If your signature is 8 KB instead of the minimum 10 KB, it also fails. The portal doesn't accept files that don't match — there's no partial acceptance.
                </p>
                <p>
                  Beyond just getting through the upload, there's a practical reason for the size limits. Your photo appears on your admit card, and a heavily compressed low-quality image will look blurry when printed. Getting the size right with proper quality ensures your admit card photo is actually usable for identification at the exam centre.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">How to Prepare Your Photo Before Uploading</h2>
                <ul className="space-y-2.5">
                  {[
                    "Take a fresh passport photo with a white or very light background. Avoid selfies — use a proper camera or visit a studio.",
                    "Ensure even lighting on your face with no harsh shadows. Natural daylight works best.",
                    "Your face should occupy about 75–80% of the photo area — not just your head, but shoulders visible.",
                    "Remove glasses if they cause glare, and keep a neutral expression with eyes open.",
                    "Scan or photograph the printed photo at high quality, then upload to our NICL photo resizer.",
                  ].map((tip, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">How to Prepare Your Signature</h2>
                <ul className="space-y-2.5">
                  {[
                    "Sign on plain white A4 paper using a black or dark blue ball-point pen. Gel pens can create strokes that are too thick.",
                    "Sign naturally in your normal style — this is the signature you'll need to match on exam day.",
                    "Keep the signature within a moderate area, not too small (hard to validate) or too large (hard to crop).",
                    "Take a clear, well-lit photo or scan of just the signature area. Crop tightly around it.",
                    "Upload to our NICL signature resizer which compresses to exactly 10–20 KB at 140×60 px.",
                  ].map((tip, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">Common NICL Upload Errors and Fixes</h2>
                <div className="space-y-3">
                  {[
                    { prob: "Photo file size above 50 KB", fix: "Use our NICL photo resizer — binary compression automatically hits 20–50 KB regardless of input size." },
                    { prob: "Photo below 20 KB", fix: "The image may be too compressed. Re-scan at higher quality and resize again." },
                    { prob: "Signature rejected for size", fix: "Must be between 10–20 KB. Our NICL signature tool targets this exact range." },
                    { prob: "Wrong dimensions error", fix: "Photo must be 200×230 px, signature 140×60 px. Our tools output exact dimensions." },
                    { prob: "Background not accepted", fix: "Ensure white or very light background. Avoid blue, grey, or patterned backgrounds." },
                  ].map(({ prob, fix }) => (
                    <div key={prob} className="rounded-xl border border-border bg-card p-4">
                      <p className="text-sm font-semibold text-foreground flex items-center gap-2 mb-1">
                        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" /> {prob}
                      </p>
                      <p className="text-xs text-muted-foreground pl-6">{fix}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">Privacy & Security</h2>
                <p className="mb-3">
                  Both the photo resizer and signature resizer run entirely in your browser using the HTML5 Canvas API. When you upload an image, it never leaves your device — no data is sent to our servers. You can verify this by checking your browser's Network tab during processing.
                </p>
                <p>
                  This is especially important for signatures, which are sensitive personal information. We don't store, log, or have access to anything you upload. The processing happens locally, and the output file is generated directly in your browser.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/20 border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
              <p className="text-sm text-muted-foreground">NICL photo and signature requirements explained</p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-6 divide-y divide-border">
              {faqs.map((f, i) => (
                <details key={i} className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer text-sm font-semibold text-foreground list-none">
                    {f.q}
                    <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="pt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <AdContainer type="inarticle" className="container mx-auto px-4 max-w-4xl py-6" />

        <section className="py-12 bg-background border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-foreground mb-6">Related Tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { to: "/ibps-photo-signature-resize", icon: FileImage, title: "IBPS Photo & Signature", desc: "20–50KB photo for IBPS PO, Clerk, RRB" },
                { to: "/sbi-po-2026-photo-signature-resize", icon: Camera, title: "SBI PO 2026", desc: "Photo & signature for SBI PO recruitment" },
                { to: "/ssc-cgl-photo-signature-resize", icon: FileImage, title: "SSC CGL Photo & Sig", desc: "Resize for SSC CGL, CHSL, GD exams" },
                { to: "/compress-image-to-20kb-online", icon: Zap, title: "Compress to 20KB", desc: "Exact 20KB compression for any image" },
                { to: "/signature-creator", icon: Pen, title: "Signature Creator", desc: "Draw or type digital signature" },
                { to: "/exam-photo-checker", icon: CheckCircle, title: "Exam Photo Checker", desc: "Verify photo meets exam specs" },
              ].map(({ to, icon: Icon, title, desc }) => (
                <Link
                  key={to}
                  to={to}
                  className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default NICLPhotoSignatureResize;

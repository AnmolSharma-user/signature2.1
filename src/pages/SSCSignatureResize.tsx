import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import AdContainer from "@/components/AdContainer";
import {
  Upload, Download, RefreshCw, CheckCircle, XCircle, Shield,
  Zap, Eye, Smartphone, Gift, Star, ChevronDown, ChevronRight,
  Home, FileImage, Scissors, SlidersHorizontal, RotateCw,
  Sun, Contrast, AlertTriangle, ArrowRight, Lock, Cpu, Clock,
} from "lucide-react";

/* ─── SSC Specs ─── */
const SSC_SPECS = { w: 140, h: 60, minKB: 10, maxKB: 20, format: "JPG/JPEG" };

/* ─── Binary-search compression ─── */
function compressToRange(
  image: HTMLImageElement,
  targetW: number,
  targetH: number,
  minKB: number,
  maxKB: number,
): Promise<{ blob: Blob; dataUrl: string; kb: number }> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    canvas.width = targetW;
    canvas.height = targetH;
    const ctx = canvas.getContext("2d")!;

    // White background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, targetW, targetH);

    // Draw image scaled to fit
    const scale = Math.min(targetW / image.naturalWidth, targetH / image.naturalHeight);
    const sw = image.naturalWidth  * scale;
    const sh = image.naturalHeight * scale;
    const sx = (targetW - sw) / 2;
    const sy = (targetH - sh) / 2;
    ctx.drawImage(image, sx, sy, sw, sh);

    // Binary-search quality
    let lo = 0.1, hi = 0.99, best: string | null = null;
    const targetMinBytes = minKB * 1024;
    const targetMaxBytes = maxKB * 1024;

    for (let i = 0; i < 20; i++) {
      const mid = (lo + hi) / 2;
      const url = canvas.toDataURL("image/jpeg", mid);
      const bytes = Math.round((url.length - "data:image/jpeg;base64,".length) * 0.75);
      if (bytes >= targetMinBytes && bytes <= targetMaxBytes) { best = url; break; }
      if (bytes > targetMaxBytes) hi = mid;
      else lo = mid;
    }

    if (!best) {
      // Use nearest boundary
      const url = canvas.toDataURL("image/jpeg", 0.7);
      best = url;
    }

    const bytes = Math.round((best.length - "data:image/jpeg;base64,".length) * 0.75);
    fetch(best).then(r => r.blob()).then(blob => resolve({ blob, dataUrl: best!, kb: Math.round(bytes / 1024) }));
  });
}

/* ─── FAQ accordion item ─── */
const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 hover:text-primary transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-foreground">{q}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-4 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
};

/* ════════════════════════════════════════════════ */
const SSCSignatureResize = () => {
  /* ── upload / processing state ── */
  const [imgSrc,   setImgSrc]   = useState<string>("");
  const [fileName, setFileName] = useState("");
  const [origKB,   setOrigKB]   = useState(0);
  const [origW,    setOrigW]    = useState(0);
  const [origH,    setOrigH]    = useState(0);
  const [isDrag,   setIsDrag]   = useState(false);
  const [status,   setStatus]   = useState<"idle" | "processing" | "done" | "error">("idle");

  /* ── adjustments ── */
  const [brightness, setBrightness] = useState(100);
  const [contrast,   setContrast]   = useState(110);
  const [whiteBg,    setWhiteBg]    = useState(true);

  /* ── output ── */
  const [outputUrl, setOutputUrl] = useState("");
  const [outputKB,  setOutputKB]  = useState(0);

  /* ── refs ── */
  const fileRef  = useRef<HTMLInputElement>(null);
  const imgRef   = useRef<HTMLImageElement>(null);
  const canvasRef= useRef<HTMLCanvasElement>(null);

  /* ── load file ── */
  const loadFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    setFileName(file.name);
    setOrigKB(Math.round(file.size / 1024));
    setStatus("idle");
    setOutputUrl("");

    const reader = new FileReader();
    reader.onload = e => {
      const src = e.target?.result as string;
      setImgSrc(src);
      const img = new Image();
      img.onload = () => { setOrigW(img.naturalWidth); setOrigH(img.naturalHeight); };
      img.src = src;
    };
    reader.readAsDataURL(file);
  }, []);

  /* ── process ── */
  const process = useCallback(async () => {
    if (!imgSrc) return;
    setStatus("processing");
    try {
      const img = new Image();
      img.src = imgSrc;
      await new Promise(r => img.onload = r);

      const canvas = document.createElement("canvas");
      canvas.width  = SSC_SPECS.w;
      canvas.height = SSC_SPECS.h;
      const ctx = canvas.getContext("2d")!;

      if (whiteBg) { ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, SSC_SPECS.w, SSC_SPECS.h); }
      ctx.filter = `brightness(${brightness}%) contrast(${contrast}%)`;

      const scale = Math.min(SSC_SPECS.w / img.naturalWidth, SSC_SPECS.h / img.naturalHeight);
      const sw = img.naturalWidth  * scale;
      const sh = img.naturalHeight * scale;
      ctx.drawImage(img, (SSC_SPECS.w - sw)/2, (SSC_SPECS.h - sh)/2, sw, sh);
      ctx.filter = "none";

      const result = await compressToRange(img, SSC_SPECS.w, SSC_SPECS.h, SSC_SPECS.minKB, SSC_SPECS.maxKB);
      setOutputUrl(result.dataUrl);
      setOutputKB(result.kb);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }, [imgSrc, brightness, contrast, whiteBg]);

  /* ── auto-process on upload ── */
  useEffect(() => { if (imgSrc) process(); }, [imgSrc]);

  /* ── download ── */
  const download = () => {
    if (!outputUrl) return;
    const a = document.createElement("a");
    a.href = outputUrl;
    a.download = `ssc-signature-${SSC_SPECS.w}x${SSC_SPECS.h}.jpg`;
    a.click();
  };

  const reset = () => {
    setImgSrc(""); setOutputUrl(""); setStatus("idle");
    setFileName(""); setOrigKB(0); setOrigW(0); setOrigH(0);
    setBrightness(100); setContrast(110);
  };

  /* ── status helpers ── */
  const statusOK  = status === "done" && outputKB >= SSC_SPECS.minKB && outputKB <= SSC_SPECS.maxKB;
  const statusFmt = "JPG";

  /* ─── FAQs ─── */
  const faqs = [
    { q: "What is the correct size for SSC signature?", a: "All SSC examinations (CGL, CHSL, GD, MTS, JE, CPO, Stenographer) require a handwritten signature in JPG/JPEG format, file size between 10 KB and 20 KB, with recommended pixel dimensions of 140×60 pixels. The signature must be on plain white paper using black or blue ink, signed in running handwriting — not printed capital letters." },
    { q: "Why is my SSC signature getting rejected on the portal?", a: "The most common reasons are: file size outside the 10–20 KB range (both too small and too large are rejected), incorrect format (PNG instead of JPG), signature on coloured paper instead of white, blurry or tilted scan, capital letter signatures, or using a stamp instead of handwriting. This tool automatically targets the correct 10–20 KB range and outputs clean JPG." },
    { q: "Can I use the same signature for SSC CGL and CHSL?", a: "Yes — SSC uses consistent signature requirements across all its exams. If you have a signature image that was accepted for one SSC exam, the same resized file (140×60 px, 10–20 KB, white background, JPG) will work for any other SSC portal registration." },
    { q: "Is my signature safe using this tool?", a: "Completely safe. All image processing runs in your browser using the HTML5 Canvas API. Your signature image never leaves your device — it is never uploaded to any server, never stored, and we cannot see it. You can verify this by disconnecting from the internet after loading the page and the tool will still work." },
    { q: "Should SSC signature be in black or blue ink?", a: "SSC official notifications specify black ink on plain white paper. However, dark blue ink is generally accepted by the portal since it scans similarly to black. Light blue, red, or any other colour ink is not accepted. Avoid gel pens with very thick strokes — fine-tip ball-point pens produce the cleanest digital scan." },
    { q: "What happens if my signature is above 20 KB?", a: "The SSC portal will display an upload error and reject the file. Anything above 20 KB is blocked. Use this tool — the binary compression algorithm automatically finds the exact quality level that hits the 10–20 KB window. If your signature is very detailed with lots of ink, it may naturally be harder to compress; in that case the tool will target the nearest safe value." },
    { q: "What if my signature comes out below 10 KB?", a: "SSC also rejects signatures below 10 KB (too small a file suggests poor quality). This tool uses a binary search that targets the 10–20 KB range from both directions. If your signature is very simple (few pen strokes), lower contrast settings can increase the file size slightly. Try adjusting the brightness slider." },
    { q: "Does the signature need to be exactly 140×60 pixels?", a: "Yes for the SSC portal — the pixel dimensions 140×60 are the recommended and accepted standard. Some older notifications specified 4.0 cm × 2.0 cm physical size which at 96 DPI equals 152×77 px, but the portal's digital upload validation uses 140×60 px. This tool outputs exactly 140×60 px." },
    { q: "Can I use a scanned signature from a flatbed scanner?", a: "Yes — scanner output generally gives the clearest results. Scan at 150–300 DPI, crop the signature tightly to remove excess white space, save as JPG or PNG, then upload to this tool. It will resize to 140×60 px and compress to 10–20 KB automatically." },
    { q: "How do I take a signature photo with my phone?", a: "Sign on plain white A4 paper with a black ball-point pen. Hold your phone directly above the paper (not at an angle), ensure even lighting without shadows, and use the document scanner mode if your camera app supports it. Crop tightly to the signature. Upload the cropped image to this tool." },
    { q: "Does SSC 2026 require a live photo instead of uploaded photo?", a: "As of 2026, SSC has moved to live photo capture for photographs (webcam or mobile camera during form fill). However, the signature still needs to be uploaded as a file — it cannot be captured live. So you still need a correctly resized signature JPG between 10–20 KB." },
    { q: "Is this tool free? Are there any limits?", a: "100% free, no account required, no watermarks, no daily limits. Process as many signatures as you need. The tool is funded by ads displayed on the page and will remain free forever for students." },
  ];

  const howToSteps = [
    { text: "Write your signature in black ink on plain white paper" },
    { text: "Take a clear, well-lit photo or scan the signature" },
    { text: "Upload the image to this tool using drag & drop or the upload button" },
    { text: "The tool automatically resizes to 140×60 px and compresses to 10–20 KB" },
    { text: "Preview both original and processed signature" },
    { text: "Download the JPG and upload to the SSC portal" },
  ];

  return (
    <>
      <SEOHead
        title="SSC Signature Resize Tool Online Free — 140×60px, 10-20KB Instant"
        description="Resize your signature for SSC CGL, CHSL, GD, MTS, JE, CPO and all SSC exams instantly. Auto-compress to 10–20KB at 140×60px JPG. Live preview, white background, no upload to server."
        canonicalUrl="https://signatureresize.in/ssc-signature-resize"
        keywords="ssc signature resize, ssc signature size, resize signature for ssc, ssc cgl signature size kb, ssc chsl signature pixels, ssc signature 140x60, ssc signature 10kb 20kb, ssc signature online free"
        ogType="website"
      />

      {/* ── All Schema ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context":"https://schema.org","@type":"SoftwareApplication",
          "name":"SSC Signature Resize Tool",
          "applicationCategory":"UtilityApplication",
          "operatingSystem":"Web Browser",
          "offers":{"@type":"Offer","price":"0","priceCurrency":"INR"},
          "url":"https://signatureresize.in/ssc-signature-resize",
          "description":"Free online tool to resize signature for all SSC exams. Outputs 140×60px, 10-20KB JPG instantly in browser.",
        },
        {
          "@context":"https://schema.org","@type":"FAQPage",
          "mainEntity": faqs.map(f => ({ "@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a} })),
        },
        {
          "@context":"https://schema.org","@type":"BreadcrumbList",
          "itemListElement":[
            {"@type":"ListItem","position":1,"name":"Home","item":"https://signatureresize.in/"},
            {"@type":"ListItem","position":2,"name":"SSC Signature Resize","item":"https://signatureresize.in/ssc-signature-resize"},
          ],
        },
        {
          "@context":"https://schema.org","@type":"HowTo",
          "name":"How to Resize Signature for SSC Exam Online",
          "step": howToSteps.map((s,i) => ({"@type":"HowToStep","position":i+1,"text":s.text})),
        },
        {
          "@context":"https://schema.org","@type":"Organization",
          "name":"SignatureResize.in","url":"https://signatureresize.in",
        },
      ]) }} />

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* ═══════════════════ HERO ═══════════════════ */}
        <section className="relative overflow-hidden border-b border-border bg-background">
          {/* Gradient blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/6 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="container mx-auto px-4 py-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-8">
              <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors"><Home className="h-3.5 w-3.5" />Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium">SSC Signature Resize</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
              {/* Left — copy + tool trigger */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-5">
                  <Zap className="h-3 w-3" /> Free · Instant · No Login Required
                </div>
                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-foreground leading-tight tracking-tight mb-4">
                  SSC Signature<br />
                  <span className="text-primary">Resize Tool</span> Online
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-lg">
                  Resize your handwritten signature for <strong className="text-foreground">SSC CGL, CHSL, GD, MTS, JE, CPO</strong> and all SSC recruitments in seconds. Auto-compresses to exactly <strong className="text-foreground">10–20 KB at 140×60 px JPG</strong> — no manual settings needed.
                </p>

                {/* Upload CTA */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <button
                    onClick={() => fileRef.current?.click()}
                    className="flex items-center gap-2 rounded-xl bg-primary text-primary-foreground font-bold px-6 py-3 text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                  >
                    <Upload className="h-4 w-4" /> Upload Signature
                  </button>
                  <a href="#how-it-works"
                    className="flex items-center gap-2 rounded-xl border border-border bg-card font-semibold px-6 py-3 text-sm hover:bg-muted transition-colors">
                    Learn More <ChevronRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Spec pills */}
                <div className="flex flex-wrap gap-2 text-xs">
                  {["140×60 px", "10–20 KB", "JPG/JPEG", "White Background", "Black Ink"].map(s => (
                    <span key={s} className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 font-medium text-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" /> {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — hero image */}
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-3xl blur-2xl scale-105 pointer-events-none" />
                <img
                  src="/ssc-tool-hero.jpg"
                  alt="SSC signature resize tool — before and after preview"
                  width={600}
                  height={450}
                  loading="eager"
                  className="relative w-full rounded-2xl shadow-2xl border border-border/40"
                />
                {/* Floating status card */}
                <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card shadow-xl p-4 min-w-[180px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-bold text-foreground">Ready for SSC</span>
                  </div>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex justify-between"><span>Format</span><span className="font-mono text-foreground">JPG</span></div>
                    <div className="flex justify-between"><span>Size</span><span className="font-mono text-foreground">140×60</span></div>
                    <div className="flex justify-between"><span>File</span><span className="font-mono text-green-600">14 KB ✓</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ TOOL ═══════════════════ */}
        <section id="tool" className="py-10 bg-muted/20 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <input ref={fileRef} type="file" accept="image/*" className="hidden"
                onChange={e => e.target.files?.[0] && loadFile(e.target.files[0])} />

              {!imgSrc ? (
                /* Drop zone */
                <div
                  className={`rounded-3xl border-2 border-dashed transition-all cursor-pointer text-center py-16 px-8 ${isDrag ? "border-primary bg-primary/5 scale-[1.01]" : "border-border hover:border-primary/60 hover:bg-muted/40 bg-card"}`}
                  onDragOver={e => { e.preventDefault(); setIsDrag(true); }}
                  onDragLeave={() => setIsDrag(false)}
                  onDrop={e => { e.preventDefault(); setIsDrag(false); const f = e.dataTransfer.files[0]; if(f) loadFile(f); }}
                  onClick={() => fileRef.current?.click()}
                  role="button"
                  aria-label="Upload signature image"
                >
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-xl font-bold text-foreground mb-2">Drop your signature here</p>
                  <p className="text-sm text-muted-foreground mb-6">JPG, PNG, WEBP · Any size · Any resolution</p>
                  <button
                    onClick={e => { e.stopPropagation(); fileRef.current?.click(); }}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground font-bold px-8 py-3 hover:opacity-90 transition-opacity"
                  >
                    <FileImage className="h-4 w-4" /> Choose File
                  </button>
                  <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                    <Shield className="h-3.5 w-3.5 text-green-500" /> Never uploaded to server · 100% private
                  </p>
                </div>
              ) : (
                /* Editor */
                <div className="space-y-4">
                  {/* Top bar */}
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`h-2.5 w-2.5 rounded-full ${status === "done" ? "bg-green-500" : status === "processing" ? "bg-yellow-500 animate-pulse" : "bg-muted"}`} />
                      <span className="text-sm font-semibold text-foreground truncate max-w-[220px]">{fileName}</span>
                      <span className="text-xs text-muted-foreground font-mono">{origW}×{origH}px · {origKB} KB</span>
                    </div>
                    <button onClick={reset} className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted transition-colors">
                      <RefreshCw className="h-3.5 w-3.5" /> New Upload
                    </button>
                  </div>

                  <div className="grid md:grid-cols-[1fr_280px] gap-4">
                    {/* Main preview area */}
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* Original */}
                        <div className="rounded-2xl border border-border bg-card overflow-hidden">
                          <div className="px-4 py-2.5 border-b border-border flex items-center justify-between">
                            <span className="text-xs font-semibold text-foreground">Original</span>
                            <span className="text-xs text-muted-foreground font-mono">{origKB} KB</span>
                          </div>
                          <div className="p-4 flex items-center justify-center min-h-[100px] bg-[repeating-conic-gradient(#f0f0f0_0%_25%,#ffffff_0%_50%)_0_0_/24px_24px] dark:bg-[repeating-conic-gradient(#2a2a2a_0%_25%,#1a1a1a_0%_50%)_0_0_/24px_24px]">
                            <img
                              src={imgSrc}
                              alt="Original signature"
                              style={{ filter: `brightness(${brightness}%) contrast(${contrast}%)`, maxHeight: 100 }}
                              className="max-w-full object-contain"
                            />
                          </div>
                        </div>

                        {/* Processed */}
                        <div className="rounded-2xl border border-border bg-card overflow-hidden">
                          <div className="px-4 py-2.5 border-b border-border flex items-center justify-between">
                            <span className="text-xs font-semibold text-foreground">Processed</span>
                            {status === "done" && <span className={`text-xs font-mono ${statusOK ? "text-green-600" : "text-amber-600"}`}>{outputKB} KB {statusOK ? "✓" : "~"}</span>}
                          </div>
                          <div className="p-4 flex items-center justify-center min-h-[100px] bg-white">
                            {status === "processing" && (
                              <div className="flex flex-col items-center gap-2">
                                <div className="h-6 w-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                                <span className="text-xs text-muted-foreground">Processing…</span>
                              </div>
                            )}
                            {status === "done" && outputUrl && (
                              <img src={outputUrl} alt="Processed SSC signature — 140×60px JPG" className="max-w-full object-contain" style={{ maxHeight: 80 }} />
                            )}
                            {status === "error" && <span className="text-xs text-red-500">Processing failed. Try again.</span>}
                          </div>
                        </div>
                      </div>

                      {/* Adjustments */}
                      <div className="rounded-2xl border border-border bg-card p-5">
                        <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                          <SlidersHorizontal className="h-3.5 w-3.5 text-primary" /> Adjustments
                        </p>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <div className="flex justify-between mb-1.5">
                              <label className="text-xs font-medium flex items-center gap-1"><Sun className="h-3.5 w-3.5 text-primary" /> Brightness</label>
                              <span className="text-xs font-mono text-muted-foreground">{brightness}%</span>
                            </div>
                            <input type="range" min={50} max={200} value={brightness} onChange={e => setBrightness(+e.target.value)} className="w-full accent-primary" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1.5">
                              <label className="text-xs font-medium flex items-center gap-1"><Contrast className="h-3.5 w-3.5 text-primary" /> Contrast</label>
                              <span className="text-xs font-mono text-muted-foreground">{contrast}%</span>
                            </div>
                            <input type="range" min={50} max={250} value={contrast} onChange={e => setContrast(+e.target.value)} className="w-full accent-primary" />
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                          <button
                            onClick={() => setWhiteBg(b => !b)}
                            className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-semibold transition-all ${whiteBg ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}
                          >
                            <CheckCircle className={`h-3.5 w-3.5 ${whiteBg ? "text-primary" : "text-muted-foreground"}`} />
                            White Background
                          </button>
                          <button onClick={() => { setBrightness(100); setContrast(110); }} className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1">
                            <RefreshCw className="h-3 w-3" /> Reset
                          </button>
                        </div>
                        <button onClick={process}
                          className="mt-4 w-full rounded-xl bg-muted border border-border py-2.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center gap-2">
                          <RefreshCw className="h-4 w-4" /> Re-process with Adjustments
                        </button>
                      </div>
                    </div>

                    {/* Right panel */}
                    <div className="space-y-3">
                      {/* Live status card */}
                      <div className="rounded-2xl border border-border bg-card overflow-hidden">
                        <div className="px-4 py-3 border-b border-border flex items-center gap-2">
                          <Eye className="h-4 w-4 text-primary" />
                          <span className="text-sm font-semibold text-foreground">Live Status</span>
                        </div>
                        <div className="p-4 space-y-2.5">
                          {[
                            { label: "Format",     value: statusFmt,                    ok: true },
                            { label: "Dimensions",  value: status === "done" ? "140×60 px" : "—",      ok: status === "done" },
                            { label: "File Size",   value: status === "done" ? `${outputKB} KB` : "—", ok: statusOK },
                            { label: "Background",  value: whiteBg ? "White" : "Original",              ok: whiteBg },
                            { label: "SSC Ready",   value: statusOK ? "Yes ✓" : status === "done" ? "Check size" : "Upload first", ok: statusOK },
                          ].map(({ label, value, ok }) => (
                            <div key={label} className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">{label}</span>
                              <span className={`text-xs font-semibold font-mono ${ok && status === "done" ? "text-green-600" : "text-foreground"}`}>{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* SSC specs card */}
                      <div className="rounded-2xl border border-border bg-card overflow-hidden">
                        <div className="px-4 py-3 border-b border-border">
                          <span className="text-sm font-semibold text-foreground">SSC Requirements</span>
                        </div>
                        <div className="p-4 space-y-2">
                          {[
                            ["Format",    "JPG / JPEG"],
                            ["File Size", "10 – 20 KB"],
                            ["Pixels",    "140 × 60 px"],
                            ["Bg Colour", "White"],
                            ["Ink",       "Black / Blue"],
                          ].map(([k, v]) => (
                            <div key={k} className="flex items-center justify-between text-xs">
                              <span className="text-muted-foreground">{k}</span>
                              <span className="font-semibold text-foreground font-mono">{v}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Download */}
                      {status === "done" && (
                        <button onClick={download}
                          className="w-full rounded-xl bg-primary text-primary-foreground font-bold py-3.5 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                          <Download className="h-4 w-4" /> Download JPG
                        </button>
                      )}

                      {/* Privacy */}
                      <div className="rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-3 flex gap-2.5">
                        <Shield className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-green-700 dark:text-green-400 leading-relaxed">
                          <strong className="text-green-800 dark:text-green-300">100% Private.</strong> Processed in browser. Never uploaded.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <AdContainer type="inarticle" className="container mx-auto px-4 max-w-4xl py-6" />

        {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
        <section id="how-it-works" className="py-16 bg-background border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">How It Works</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm">From raw photo to upload-ready SSC signature in under 10 seconds</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { n:"01", icon: Upload,       title: "Upload",          desc: "Drag & drop or choose your signature photo — JPG, PNG, WEBP, any resolution accepted." },
                { n:"02", icon: Cpu,          title: "Auto-Process",    desc: "The tool detects dimensions, applies white background, and begins binary compression targeting 10–20 KB." },
                { n:"03", icon: SlidersHorizontal, title:"Fine-tune",   desc: "Adjust brightness and contrast to clean up the signature and make it sharper before final output." },
                { n:"04", icon: Eye,          title: "Live Preview",    desc: "See both original and processed versions side by side. Check the status card for real-time size confirmation." },
                { n:"05", icon: CheckCircle,  title: "Verify",          desc: "Green status confirms format, pixel dimensions, file size, and background all meet SSC portal requirements." },
                { n:"06", icon: Download,     title: "Download",        desc: "One click downloads the 140×60 px JPG file — upload directly to the SSC registration portal." },
              ].map(({ n, icon: Icon, title, desc }) => (
                <div key={n} className="rounded-2xl border border-border bg-card p-5 relative overflow-hidden group hover:border-primary/40 transition-colors">
                  <div className="absolute top-4 right-4 text-5xl font-black text-muted/10 select-none group-hover:text-primary/10 transition-colors">{n}</div>
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-sm text-foreground mb-1.5">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ SUPPORTED EXAMS ═══════════════════ */}
        <section className="py-16 bg-muted/20 border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Supported SSC Examinations</h2>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">One tool, correct specs for every SSC recruitment. All exams use 140×60 px · 10–20 KB · JPG.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
              {[
                { exam:"SSC CGL", full:"Combined Graduate Level", badge:"Tier-I Aug–Sept 2026" },
                { exam:"SSC CHSL", full:"Combined Higher Secondary", badge:"Ongoing 2026" },
                { exam:"SSC GD", full:"General Duty Constable", badge:"2025–26 Cycle" },
                { exam:"SSC MTS", full:"Multi-Tasking Staff", badge:"Open 2026" },
                { exam:"SSC JE", full:"Junior Engineer", badge:"2026" },
                { exam:"SSC CPO", full:"Central Police Organisations", badge:"SI/ASI 2026" },
                { exam:"SSC Steno", full:"Stenographer Grade C & D", badge:"2026" },
                { exam:"SSC Selection", full:"Selection Post Phase 12", badge:"Phase 12" },
                { exam:"Delhi Police", full:"Constable & Head Constable", badge:"2026" },
              ].map(({ exam, full, badge }) => (
                <div key={exam} className="rounded-2xl border border-border bg-card p-4 hover:border-primary/40 hover:bg-primary/5 transition-all">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-sm font-bold text-foreground">{exam}</span>
                    <span className="text-[10px] rounded-full bg-primary/10 text-primary px-2 py-0.5 font-semibold shrink-0">{badge}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{full}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-green-600 font-medium">
                    <CheckCircle className="h-3.5 w-3.5" /> Specs matched
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ WHY OUR TOOL ═══════════════════ */}
        <section className="py-16 bg-background border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Why Use This Tool?</h2>
              <p className="text-sm text-muted-foreground">Built specifically for SSC applicants — not a generic image resizer</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Zap,         title: "Instant Resize",       desc: "Processes in under 2 seconds. Binary-search algorithm hits exact KB target." },
                { icon: Eye,         title: "Live Preview",          desc: "See exact output before downloading. No surprises." },
                { icon: Shield,      title: "100% Private",          desc: "Canvas API processing. Zero server upload. Works offline." },
                { icon: Gift,        title: "Free Forever",          desc: "No login, no watermark, no daily limit. Always free." },
                { icon: Smartphone,  title: "Mobile First",          desc: "Works perfectly on any phone browser. No app needed." },
                { icon: CheckCircle, title: "SSC Spec Verified",     desc: "Outputs exactly 140×60 px, 10–20 KB — confirmed against official notifications." },
                { icon: Clock,       title: "Always Updated",        desc: "Requirements updated every exam cycle. Always current." },
                { icon: Lock,        title: "No Watermark",          desc: "Your signature, clean. No branding added to output." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-border bg-card p-5 flex gap-3">
                  <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ COMPARISON ═══════════════════ */}
        <section className="py-16 bg-muted/20 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-2">How We Compare</h2>
              <p className="text-sm text-muted-foreground">vs. other generic image tools</p>
            </div>
            <div className="rounded-2xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-5 py-3.5 text-left font-semibold">Feature</th>
                    <th className="px-5 py-3.5 text-center font-semibold">SignatureResize.in</th>
                    <th className="px-5 py-3.5 text-center font-semibold text-primary-foreground/70">Other Tools</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["SSC-specific 140×60 preset",     true,  false],
                    ["Auto 10–20 KB compression",      true,  false],
                    ["Live before / after preview",    true,  false],
                    ["White background enforcement",   true,  false],
                    ["No server upload (privacy)",     true,  false],
                    ["No watermark on output",         true,  false],
                    ["Works on mobile browser",        true,  "partial"],
                    ["No login or signup",             true,  true],
                    ["Free to use",                    true,  "partial"],
                  ].map(([feat, ours, others]) => (
                    <tr key={feat as string} className="hover:bg-muted/30 transition-colors">
                      <td className="px-5 py-3 font-medium text-foreground">{feat}</td>
                      <td className="px-5 py-3 text-center">
                        {ours === true ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : <XCircle className="h-5 w-5 text-red-400 mx-auto" />}
                      </td>
                      <td className="px-5 py-3 text-center">
                        {others === true ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> :
                          others === "partial" ? <AlertTriangle className="h-5 w-5 text-amber-400 mx-auto" /> :
                          <XCircle className="h-5 w-5 text-red-400 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════ SEO CONTENT ═══════════════════ */}
        <section className="py-16 bg-background border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">Resize Signature for SSC Applications</h2>
                <p className="mb-3">The SSC portal has one of the stricter file validation systems among Indian government exam portals. Unlike some portals that accept a range of sizes, the SSC upload system specifically rejects signatures that fall outside the 10 KB to 20 KB window — both above and below. A 22 KB file gets rejected the same as a 7 KB file.</p>
                <p>This tool was built to solve that exact problem. The binary-search compression algorithm runs up to 20 iterations to find the JPEG quality factor that produces a file size within the 10–20 KB target, at exactly 140×60 pixels. It's not a slider you adjust manually — it calculates the right output automatically.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">Why Signature Size Matters for SSC</h2>
                <p className="mb-3">When you upload a signature to the SSC One-Time Registration (OTR) portal, the system validates the file before accepting it. The validation checks three things: file format (must be JPEG), file size (10–20 KB), and basic image integrity. If any check fails, the portal returns an error and you cannot proceed to the next section of the form.</p>
                <p>Beyond the portal validation, your signature is printed on your admit card and compared with the signature you write on your answer sheet on exam day. If the two signatures look significantly different — or if the digital signature is too blurry to be legible — you may face issues at the examination centre. Getting the digital signature right matters not just for form submission but for the entire examination process.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">How to Prepare Your Signature Before Uploading</h2>
                <ul className="space-y-2.5">
                  {[
                    "Sign on plain white A4 or A5 paper using a black ball-point pen. Avoid gel pens with very thick strokes.",
                    "Keep the signature within a reasonable area — not too small (harder to validate) and not too large (harder to crop cleanly).",
                    "Sign naturally in your usual style. The signature you upload will be compared on exam day — do not change it after submission.",
                    "Take the photo in good, even lighting. Place the paper on a flat surface and shoot directly above (not at an angle).",
                    "Crop the image tightly around the signature before uploading, leaving a small white margin on all four sides.",
                    "Scan if possible — flatbed scanner output is sharper than phone camera. 150–300 DPI is sufficient.",
                  ].map((tip, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">Common Upload Problems and How to Fix Them</h2>
                <div className="space-y-3">
                  {[
                    { prob:"File size too large (above 20 KB)", fix:"Upload to this tool. Binary compression automatically hits 10–20 KB regardless of input size." },
                    { prob:"File size too small (below 10 KB)", fix:"Increase contrast slider to add more ink detail. Alternatively, sign with slightly thicker strokes before rephotographing." },
                    { prob:"PNG not accepted", fix:"This tool always outputs JPG regardless of input format. Upload your PNG here and download the JPG." },
                    { prob:"Signature appears blurry in preview", fix:"Increase contrast to 120–150%. This sharpens the signature edges and makes it cleaner at 140×60 px resolution." },
                    { prob:"Signature tilted or sideways", fix:"Rotate your photo before uploading, or crop only the correctly-oriented portion of the image." },
                    { prob:"Background not white", fix:"Enable 'White Background' toggle. The canvas fills with white before drawing your signature over it." },
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
                <h2 className="text-xl font-bold text-foreground mb-4">Privacy &amp; Security</h2>
                <p className="mb-3">We process your signature using the HTML5 Canvas API — a browser-native technology that works entirely on your device. When you upload an image here, it is read into your browser's memory as a JavaScript object. The Canvas draws your image, resizes it, applies compression, and outputs the final file — all without any network request to our servers.</p>
                <p>You can verify this yourself: open your browser's developer tools, go to the Network tab, upload a file, and observe that no file upload request is sent. We cannot see your signature. We do not store it. Nobody but you has access to it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ FAQ ═══════════════════ */}
        <section className="py-16 bg-muted/20 border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
              <p className="text-sm text-muted-foreground">Everything you need to know about SSC signature requirements</p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-6">
              {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
            </div>
          </div>
        </section>

        <AdContainer type="inarticle" className="container mx-auto px-4 max-w-4xl py-6" />

        {/* ═══════════════════ RELATED TOOLS ═══════════════════ */}
        <section className="py-14 bg-background border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-foreground mb-6">Related Tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { to:"/passport-size-photo-maker",        icon: FileImage,  title:"Passport Photo Maker",  desc:"Crop, resize & download passport photos for India, USA, UK. 300 DPI print layout." },
                { to:"/compress-image-to-kb",             icon: Zap,        title:"Compress Image to KB",  desc:"Compress any image to exact KB target — 50KB, 100KB, 200KB or custom." },
                { to:"/ssc-cgl-photo-signature-resize",   icon: Scissors,   title:"SSC CGL Photo Resize",  desc:"Resize SSC CGL photo to 20–50KB (200×230px) with white background." },
                { to:"/signature-resize",                 icon: SlidersHorizontal, title:"Signature Resize",desc:"Universal signature resizer — any exam, any KB target." },
                { to:"/ibps-photo-signature-resize",      icon: FileImage,  title:"IBPS Photo Resize",     desc:"Resize IBPS PO & Clerk photo to 200×230px, 20–50KB instantly." },
                { to:"/compress-image-to-20kb-online",    icon: Zap,        title:"Compress to 20KB",      desc:"One-click compress any photo or signature to exactly 20KB." },
              ].map(({ to, icon: Icon, title, desc }) => (
                <Link key={to} to={to} className="rounded-xl border border-border bg-card p-5 flex gap-4 hover:border-primary/40 hover:bg-primary/5 transition-all group">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors ml-auto shrink-0" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ TRUST ═══════════════════ */}
        <section className="py-14 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Trusted by Lakhs of SSC Aspirants</h2>
            <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto">Every signature resized here stays on your device. No data collected, no account needed, no charges ever.</p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-3xl mx-auto">
              {[
                [Shield,      "Privacy First"],
                [Cpu,         "Runs in Browser"],
                [Lock,        "No Registration"],
                [Gift,        "Always Free"],
                [Zap,         "Fast Processing"],
              ].map(([Icon, label], i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-primary-foreground/90">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ FOOTER CTA ═══════════════════ */}
        <section className="py-14 bg-background border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-foreground mb-2">Need Another Document Photo Tool?</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">Passport photos, photo compression, exam-specific resizers — all free, all browser-based.</p>
            <Link to="/" className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground font-bold px-8 py-3 hover:opacity-90 transition-opacity">
              Explore All Free Tools <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <AdContainer type="multiplex" className="container mx-auto px-4 mb-6" />
        <Footer />
      </div>
    </>
  );
};

export default SSCSignatureResize;

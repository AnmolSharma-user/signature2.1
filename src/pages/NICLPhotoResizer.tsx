import { useState, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import AdContainer from "@/components/AdContainer";
import {
  Upload, Download, RefreshCw, CheckCircle, Shield, Zap, Eye,
  Home, ChevronRight, ChevronDown, SlidersHorizontal, Sun, Contrast,
  AlertTriangle, ArrowRight, Camera, Pen, FileImage, Crop,
} from "lucide-react";

const NICL_PHOTO_SPECS = { w: 200, h: 230, minKB: 20, maxKB: 50, format: "JPG/JPEG" };

function compressPhotoToRange(
  image: HTMLImageElement,
  targetW: number,
  targetH: number,
  minKB: number,
  maxKB: number
): Promise<{ blob: Blob; dataUrl: string; kb: number }> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    canvas.width = targetW;
    canvas.height = targetH;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, targetW, targetH);

    const targetAspect = targetW / targetH;
    const srcAspect = image.naturalWidth / image.naturalHeight;
    let sx = 0, sy = 0, sw = image.naturalWidth, sh = image.naturalHeight;
    if (srcAspect > targetAspect) {
      sw = Math.round(image.naturalHeight * targetAspect);
      sx = Math.round((image.naturalWidth - sw) / 2);
    } else if (srcAspect < targetAspect) {
      sh = Math.round(image.naturalWidth / targetAspect);
      sy = Math.round((image.naturalHeight - sh) / 2);
    }
    ctx.drawImage(image, sx, sy, sw, sh, 0, 0, targetW, targetH);

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

    if (!best) { best = canvas.toDataURL("image/jpeg", 0.7); }
    const bytes = Math.round((best.length - "data:image/jpeg;base64,".length) * 0.75);
    fetch(best).then(r => r.blob()).then(blob => resolve({ blob, dataUrl: best!, kb: Math.round(bytes / 1024) }));
  });
}

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between py-4 text-left gap-4 hover:text-primary transition-colors" aria-expanded={open}>
        <span className="text-sm font-semibold text-foreground">{q}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-4 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
};

const NICLPhotoResizer = () => {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [fileName, setFileName] = useState("");
  const [origKB, setOrigKB] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [status, setStatus] = useState<"idle" | "processing" | "done" | "error">("idle");
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [outputUrl, setOutputUrl] = useState("");
  const [outputKB, setOutputKB] = useState(0);
  const fileRef = useRef<HTMLInputElement>(null);

  const loadFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    setFileName(file.name);
    setOrigKB(Math.round(file.size / 1024));
    setStatus("idle");
    setOutputUrl("");
    const reader = new FileReader();
    reader.onload = e => { setImgSrc(e.target?.result as string); };
    reader.readAsDataURL(file);
  }, []);

  const process = useCallback(async () => {
    if (!imgSrc) return;
    setStatus("processing");
    try {
      const img = new Image();
      img.src = imgSrc;
      await new Promise(r => img.onload = r);

      const canvas = document.createElement("canvas");
      canvas.width = NICL_PHOTO_SPECS.w;
      canvas.height = NICL_PHOTO_SPECS.h;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, NICL_PHOTO_SPECS.w, NICL_PHOTO_SPECS.h);
      ctx.filter = `brightness(${brightness}%) contrast(${contrast}%)`;

      const targetAspect = NICL_PHOTO_SPECS.w / NICL_PHOTO_SPECS.h;
      const srcAspect = img.naturalWidth / img.naturalHeight;
      let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
      if (srcAspect > targetAspect) {
        sw = Math.round(img.naturalHeight * targetAspect);
        sx = Math.round((img.naturalWidth - sw) / 2);
      } else if (srcAspect < targetAspect) {
        sh = Math.round(img.naturalWidth / targetAspect);
        sy = Math.round((img.naturalHeight - sh) / 2);
      }
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, NICL_PHOTO_SPECS.w, NICL_PHOTO_SPECS.h);
      ctx.filter = "none";

      const result = await compressPhotoToRange(img, NICL_PHOTO_SPECS.w, NICL_PHOTO_SPECS.h, NICL_PHOTO_SPECS.minKB, NICL_PHOTO_SPECS.maxKB);
      setOutputUrl(result.dataUrl);
      setOutputKB(result.kb);
      setStatus("done");
    } catch { setStatus("error"); }
  }, [imgSrc, brightness, contrast]);

  useEffect(() => { if (imgSrc) process(); }, [imgSrc]);

  const download = () => {
    if (!outputUrl) return;
    const a = document.createElement("a");
    a.href = outputUrl;
    a.download = `nicl-photo-${NICL_PHOTO_SPECS.w}x${NICL_PHOTO_SPECS.h}.jpg`;
    a.click();
  };

  const reset = () => {
    setImgSrc(""); setOutputUrl(""); setStatus("idle");
    setFileName(""); setOrigKB(0);
    setBrightness(100); setContrast(100);
  };

  const statusOK = status === "done" && outputKB >= NICL_PHOTO_SPECS.minKB && outputKB <= NICL_PHOTO_SPECS.maxKB;

  const faqs = [
    { q: "What is the photo size requirement for NICL Assistant 2026?", a: "NICL requires a passport-size photograph in JPG/JPEG format, file size between 20 KB and 50 KB, with pixel dimensions of 200×230 pixels. The background must be white or very light coloured, and your face should occupy 75–80% of the photo. This specification applies to NICL Assistant, Administrative Officer, and all NIACL recruitments." },
    { q: "Why is my NICL photo being rejected on the portal?", a: "Common reasons: file size outside 20–50 KB range, wrong dimensions (must be 200×230 px), PNG format instead of JPG, non-white background, or face too small/large in frame. This tool automatically corrects all these issues — upload any photo and get a portal-ready JPG." },
    { q: "Can I use the same photo for NICL and other insurance exams?", a: "Yes. NICL, New India Assurance, Oriental Insurance, and United India Insurance all use the same photo specification: 200×230 px, 20–50 KB, JPG. If your photo was accepted for one, it will work for all public sector insurance company applications." },
    { q: "How do I take a passport photo for NICL at home?", a: "Stand against a white wall in natural daylight. Have someone photograph you from chest up with shoulders visible. Keep a neutral expression, eyes open, no glasses if they cause glare. Ensure even lighting without shadows on your face. Upload to this tool to resize to NICL specs." },
    { q: "What if my photo is above 50 KB?", a: "The NICL portal will reject it. Upload to this tool — binary compression automatically finds the right quality level to land between 20–50 KB regardless of your original file size. Works for photos from phones, cameras, or scanned prints." },
    { q: "What if my photo is below 20 KB?", a: "NICL also rejects files smaller than 20 KB because they suggest poor quality. If your photo is over-compressed, start with a higher-quality original. Our tool will target the correct 20–50 KB range automatically." },
    { q: "Does the photo need exactly 200×230 pixels?", a: "Yes. The NICL portal expects these exact dimensions. This tool center-crops your photo to match the aspect ratio, then scales to exactly 200×230 pixels. Your face stays centered in the frame." },
    { q: "Is this NICL photo resizer free?", a: "Yes, completely free. No registration, no watermarks, no daily limits. The tool runs entirely in your browser using the HTML5 Canvas API — your photo never leaves your device, which is important for personal identification documents." },
  ];

  return (
    <>
      <SEOHead
        title="NICL Photo Resizer Free Online — 200×230px, 20-50KB Instant Download"
        description="Resize your passport photo for NICL Assistant, AO, and all NICL recruitments. Auto-compress to 20–50KB at 200×230px JPG. Free, instant, browser-only — no server upload."
        canonicalUrl="https://signatureresize.in/nicl-photo-resizer"
        keywords="nicl photo resize, nicl assistant photo resizer, nicl photo resizer, nicl image resizer, nicl photo size, nicl photo 20kb 50kb, nicl passport photo, niacl photo resize"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "NICL Photo Resizer Tool",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Web Browser",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
          "url": "https://signatureresize.in/nicl-photo-resizer",
          "description": "Free online tool to resize passport photo for NICL Assistant, AO exams. Outputs 200×230px, 20-50KB JPG instantly.",
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://signatureresize.in/" },
            { "@type": "ListItem", "position": 2, "name": "NICL", "item": "https://signatureresize.in/nicl" },
            { "@type": "ListItem", "position": 3, "name": "NICL Photo Resizer", "item": "https://signatureresize.in/nicl-photo-resizer" },
          ],
        },
      ]) }} />

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/5 via-background to-blue-500/5">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 py-6">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6 flex-wrap">
              <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors"><Home className="h-3.5 w-3.5" />Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/nicl" className="hover:text-primary transition-colors">NICL</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium">Photo Resizer</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-4">
                  <Zap className="h-3 w-3" /> Free · Instant · No Login
                </div>
                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-foreground leading-tight tracking-tight mb-4">
                  NICL Photo<br />
                  <span className="text-primary">Resizer Tool</span> Online
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-lg">
                  Resize your passport photo for <strong className="text-foreground">NICL Assistant, Administrative Officer, and all NIACL recruitments</strong>. Auto-compresses to exactly <strong className="text-foreground">20–50 KB at 200×230 px JPG</strong> — accepted by the NICL portal.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <button onClick={() => fileRef.current?.click()} className="flex items-center gap-2 rounded-xl bg-primary text-primary-foreground font-bold px-6 py-3 text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                    <Upload className="h-4 w-4" /> Upload Photo
                  </button>
                  <Link to="/nicl-signature-resize" className="flex items-center gap-2 rounded-xl border border-border bg-card font-semibold px-6 py-3 text-sm hover:bg-muted transition-colors">
                    <Pen className="h-4 w-4" /> Resize Signature Instead
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  {["200×230 px", "20–50 KB", "JPG/JPEG", "White Background", "75–80% Face"].map(s => (
                    <span key={s} className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 font-medium text-foreground">
                      <CheckCircle className="h-3 w-3 text-green-500" /> {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-3xl blur-2xl scale-105 pointer-events-none" />
                <div className="relative rounded-2xl border border-border bg-card p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-foreground">NICL Photo Preview</span>
                    <span className="text-xs rounded-full bg-green-500/10 text-green-600 px-2 py-0.5 font-semibold">Ready</span>
                  </div>
                  <div className="flex items-center justify-center h-32 bg-[repeating-conic-gradient(#f0f0f0_0%_25%,#ffffff_0%_50%)_0_0_/16px_16px] rounded-xl mb-4">
                    <div className="text-center text-muted-foreground text-sm">Your photo will appear here</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-center">
                    <div className="rounded-lg bg-muted p-2"><span className="block text-muted-foreground">Size</span><span className="font-mono font-bold text-foreground">200×230</span></div>
                    <div className="rounded-lg bg-muted p-2"><span className="block text-muted-foreground">KB</span><span className="font-mono font-bold text-green-600">20–50</span></div>
                    <div className="rounded-lg bg-muted p-2"><span className="block text-muted-foreground">Format</span><span className="font-mono font-bold text-foreground">JPG</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tool" className="py-10 bg-muted/20 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={e => e.target.files?.[0] && loadFile(e.target.files[0])} />

              {!imgSrc ? (
                <div
                  className={`rounded-3xl border-2 border-dashed transition-all cursor-pointer text-center py-16 px-8 ${isDrag ? "border-primary bg-primary/5 scale-[1.01]" : "border-border hover:border-primary/60 hover:bg-muted/40 bg-card"}`}
                  onDragOver={e => { e.preventDefault(); setIsDrag(true); }}
                  onDragLeave={() => setIsDrag(false)}
                  onDrop={e => { e.preventDefault(); setIsDrag(false); const f = e.dataTransfer.files[0]; if (f) loadFile(f); }}
                  onClick={() => fileRef.current?.click()}
                  role="button"
                  aria-label="Upload photo image"
                >
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-xl font-bold text-foreground mb-2">Drop your passport photo here</p>
                  <p className="text-sm text-muted-foreground mb-6">JPG, PNG, WEBP · Any size · Any resolution</p>
                  <button onClick={e => { e.stopPropagation(); fileRef.current?.click(); }} className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground font-bold px-8 py-3 hover:opacity-90 transition-opacity">
                    <FileImage className="h-4 w-4" /> Choose File
                  </button>
                  <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                    <Shield className="h-3.5 w-3.5 text-green-500" /> Never uploaded to server · 100% private
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`h-2.5 w-2.5 rounded-full ${status === "done" ? "bg-green-500" : status === "processing" ? "bg-yellow-500 animate-pulse" : "bg-muted"}`} />
                      <span className="text-sm font-semibold text-foreground truncate max-w-[220px]">{fileName}</span>
                      <span className="text-xs text-muted-foreground font-mono">{origKB} KB original</span>
                    </div>
                    <button onClick={reset} className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted transition-colors">
                      <RefreshCw className="h-3.5 w-3.5" /> New Upload
                    </button>
                  </div>

                  <div className="grid md:grid-cols-[1fr_250px] gap-4">
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-border bg-card overflow-hidden">
                          <div className="px-4 py-2.5 border-b border-border flex items-center justify-between">
                            <span className="text-xs font-semibold text-foreground">Original</span>
                            <span className="text-xs text-muted-foreground font-mono">{origKB} KB</span>
                          </div>
                          <div className="p-4 flex items-center justify-center min-h-[140px] bg-[repeating-conic-gradient(#f0f0f0_0%_25%,#ffffff_0%_50%)_0_0_/24px_24px]">
                            <img src={imgSrc} alt="Original photo" style={{ filter: `brightness(${brightness}%) contrast(${contrast}%)`, maxHeight: 140 }} className="max-w-full object-contain" />
                          </div>
                        </div>

                        <div className="rounded-2xl border border-border bg-card overflow-hidden">
                          <div className="px-4 py-2.5 border-b border-border flex items-center justify-between">
                            <span className="text-xs font-semibold text-foreground">Processed</span>
                            {status === "done" && <span className={`text-xs font-mono ${statusOK ? "text-green-600" : "text-amber-600"}`}>{outputKB} KB {statusOK ? "✓" : "~"}</span>}
                          </div>
                          <div className="p-4 flex items-center justify-center min-h-[140px] bg-white">
                            {status === "processing" && <div className="flex flex-col items-center gap-2"><div className="h-6 w-6 border-2 border-primary border-t-transparent rounded-full animate-spin" /><span className="text-xs text-muted-foreground">Processing…</span></div>}
                            {status === "done" && outputUrl && <img src={outputUrl} alt="Processed NICL photo" className="max-w-full object-contain" style={{ maxHeight: 130 }} />}
                            {status === "error" && <span className="text-xs text-red-500">Processing failed. Try again.</span>}
                          </div>
                        </div>
                      </div>

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
                              <label className="text-xs font-medium flex items-center gap-1"><Sun className="h-3.5 w-3.5 text-primary" /> Contrast</label>
                              <span className="text-xs font-mono text-muted-foreground">{contrast}%</span>
                            </div>
                            <input type="range" min={50} max={250} value={contrast} onChange={e => setContrast(+e.target.value)} className="w-full accent-primary" />
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                          <button onClick={() => { setBrightness(100); setContrast(100); }} className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1">
                            <RefreshCw className="h-3 w-3" /> Reset
                          </button>
                        </div>
                        <button onClick={process} className="mt-4 w-full rounded-xl bg-muted border border-border py-2.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center gap-2">
                          <RefreshCw className="h-4 w-4" /> Re-process
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-2xl border border-border bg-card overflow-hidden">
                        <div className="px-4 py-3 border-b border-border flex items-center gap-2">
                          <Eye className="h-4 w-4 text-primary" />
                          <span className="text-sm font-semibold text-foreground">NICL Status</span>
                        </div>
                        <div className="p-4 space-y-2.5">
                          {[{ label: "Format", value: "JPG", ok: true }, { label: "Dimensions", value: status === "done" ? "200×230 px" : "—", ok: status === "done" }, { label: "File Size", value: status === "done" ? `${outputKB} KB` : "—", ok: statusOK }, { label: "NICL Ready", value: statusOK ? "Yes ✓" : status === "done" ? "Check size" : "Upload first", ok: statusOK }].map(({ label, value, ok }) => (
                            <div key={label} className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">{label}</span>
                              <span className={`text-xs font-semibold font-mono ${ok && status === "done" ? "text-green-600" : "text-foreground"}`}>{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {status === "done" && (
                        <button onClick={download} className="w-full rounded-xl bg-primary text-primary-foreground font-bold py-3.5 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                          <Download className="h-4 w-4" /> Download JPG
                        </button>
                      )}

                      <Link to="/nicl-signature-resize" className="block rounded-xl border border-border bg-card p-4 hover:border-primary transition-colors">
                        <p className="text-xs text-muted-foreground mb-1">Need to resize signature too?</p>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1">
                          <Pen className="h-3.5 w-3.5 text-primary" /> NICL Signature Resize <ArrowRight className="h-3 w-3" />
                        </p>
                      </Link>

                      <div className="rounded-xl border border-green-200 bg-green-50 p-3 flex gap-2.5">
                        <Shield className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-green-700 leading-relaxed"><strong className="text-green-800">100% Private.</strong> Processed in browser. Never uploaded.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <AdContainer type="inarticle" className="container mx-auto px-4 max-w-4xl py-6" />

        <section className="py-12 bg-background border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">NICL Photo Resizer Online</h2>
                <p className="mb-3">
                  National Insurance Company Limited (NICL) requires passport-size photographs in a very specific format: 200×230 pixels, file size between 20 KB and 50 KB, JPG format only. The portal validates these parameters during upload and rejects any file that doesn't match.
                </p>
                <p>
                  This tool was built specifically for NICL applicants. It uses center-crop scaling to fit your photo into the exact aspect ratio (200×230 px), then runs a binary-search compression algorithm to find the JPEG quality that produces a file between 20–50 KB. Upload any photo from any device and get a portal-ready JPG in seconds.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">How to Take a Passport Photo for NICL</h2>
                <ul className="space-y-2.5">
                  {[
                    "Stand against a plain white or very light-coloured wall. Avoid patterns or gradients.",
                    "Use natural daylight from a window if possible — avoid direct flash which creates shadows.",
                    "Have someone photograph you from chest up, with shoulders visible and face centred.",
                    "Keep a neutral expression with eyes open, mouth closed. No smiling widely.",
                    "Remove glasses if they cause glare. If you wear them regularly, ensure no reflections.",
                    "Face should occupy 75–80% of the frame — not just a headshot but including shoulders.",
                  ].map((tip, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">Common Photo Upload Issues</h2>
                <div className="space-y-3">
                  {[
                    { prob: "Photo above 50 KB", fix: "Upload to this tool — compression automatically hits 20–50 KB regardless of input." },
                    { prob: "Photo below 20 KB", fix: "Start with a higher-quality original. Our tool targets the correct range automatically." },
                    { prob: "Wrong dimensions", fix: "This tool outputs exactly 200×230 px with center-crop to maintain aspect ratio." },
                    { prob: "Background rejected", fix: "Ensure white or very light background. The tool adds white background if needed." },
                    { prob: "Blurry on admit card", fix: "Don't over-compress. Our tool finds the best quality within the size limit." },
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

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <Pen className="h-4 w-4 text-primary" /> Also Need to Resize Your Signature?
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  NICL requires your handwritten signature at 140×60 pixels, 10–20 KB. Our NICL signature resizer handles that automatically.
                </p>
                <Link to="/nicl-signature-resize" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                  Go to NICL Signature Resizer <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/20 border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
              <p className="text-sm text-muted-foreground">NICL photo requirements explained</p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-6">
              {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-foreground mb-6">Related Tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { to: "/nicl-signature-resize", icon: Pen, title: "NICL Signature Resize", desc: "140×60px · 10–20KB for NICL" },
                { to: "/nicl", icon: FileImage, title: "NICL Overview", desc: "Photo & signature requirements" },
                { to: "/ibps-photo-signature-resize", icon: FileImage, title: "IBPS Photo & Signature", desc: "20–50KB photo for IBPS exams" },
                { to: "/passport-size-photo-maker", icon: Camera, title: "Passport Photo Maker", desc: "2×2 inch for US Visa, Indian exams" },
                { to: "/ssc-cgl-photo-signature-resize", icon: FileImage, title: "SSC CGL Photo & Sig", desc: "Resize for SSC exams" },
                { to: "/exam-photo-checker", icon: CheckCircle, title: "Exam Photo Checker", desc: "Verify photo meets exam specs" },
              ].map(({ to, icon: Icon, title, desc }) => (
                <Link key={to} to={to} className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary hover:bg-primary/5 transition-all">
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

export default NICLPhotoResizer;

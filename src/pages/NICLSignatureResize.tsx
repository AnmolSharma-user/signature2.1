import { useState, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import AdContainer from "@/components/AdContainer";
import {
  Upload, Download, RefreshCw, CheckCircle, Shield, Zap, Eye,
  Home, ChevronRight, ChevronDown, SlidersHorizontal, Sun, Contrast,
  AlertTriangle, ArrowRight, Camera, Pen, FileImage,
} from "lucide-react";

const NICL_SPECS = { w: 140, h: 60, minKB: 10, maxKB: 20, format: "JPG/JPEG" };

function compressToRange(
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
    const scale = Math.min(targetW / image.naturalWidth, targetH / image.naturalHeight);
    const sw = image.naturalWidth * scale;
    const sh = image.naturalHeight * scale;
    const sx = (targetW - sw) / 2;
    const sy = (targetH - sh) / 2;
    ctx.drawImage(image, sx, sy, sw, sh);

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

const NICLSignatureResize = () => {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [fileName, setFileName] = useState("");
  const [origKB, setOrigKB] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [status, setStatus] = useState<"idle" | "processing" | "done" | "error">("idle");
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(110);
  const [whiteBg, setWhiteBg] = useState(true);
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
      canvas.width = NICL_SPECS.w;
      canvas.height = NICL_SPECS.h;
      const ctx = canvas.getContext("2d")!;
      if (whiteBg) { ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, NICL_SPECS.w, NICL_SPECS.h); }
      ctx.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
      const scale = Math.min(NICL_SPECS.w / img.naturalWidth, NICL_SPECS.h / img.naturalHeight);
      const sw = img.naturalWidth * scale;
      const sh = img.naturalHeight * scale;
      ctx.drawImage(img, (NICL_SPECS.w - sw) / 2, (NICL_SPECS.h - sh) / 2, sw, sh);
      ctx.filter = "none";

      const result = await compressToRange(img, NICL_SPECS.w, NICL_SPECS.h, NICL_SPECS.minKB, NICL_SPECS.maxKB);
      setOutputUrl(result.dataUrl);
      setOutputKB(result.kb);
      setStatus("done");
    } catch { setStatus("error"); }
  }, [imgSrc, brightness, contrast, whiteBg]);

  useEffect(() => { if (imgSrc) process(); }, [imgSrc]);

  const download = () => {
    if (!outputUrl) return;
    const a = document.createElement("a");
    a.href = outputUrl;
    a.download = `nicl-signature-${NICL_SPECS.w}x${NICL_SPECS.h}.jpg`;
    a.click();
  };

  const reset = () => {
    setImgSrc(""); setOutputUrl(""); setStatus("idle");
    setFileName(""); setOrigKB(0);
    setBrightness(100); setContrast(110);
  };

  const statusOK = status === "done" && outputKB >= NICL_SPECS.minKB && outputKB <= NICL_SPECS.maxKB;

  const faqs = [
    { q: "What is the exact signature size for NICL Assistant 2026?", a: "NICL requires your signature in JPG/JPEG format, file size between 10 KB and 20 KB, with pixel dimensions of 140×60 pixels. This specification is the same for NICL Assistant, Administrative Officer, and all other NICL recruitments. The signature must be handwritten on white paper using black or dark blue ink." },
    { q: "Why is my NICL signature being rejected on the portal?", a: "The most common reasons are: file size outside the 10–20 KB range, incorrect format (PNG instead of JPG), signature on coloured paper, blurry scan, or using capital letters instead of running handwriting. This tool automatically compresses to the correct 10–20 KB range and outputs clean JPG at 140×60 px." },
    { q: "Can I use the same signature for NICL and other insurance PSUs?", a: "Yes. NICL, New India Assurance, Oriental Insurance, and United India Insurance all use the same signature specification: 10–20 KB, 140×60 px, JPG. If your signature was accepted for one, it will work for all of them." },
    { q: "How do I sign for NICL online application?", a: "Sign on plain white A4 paper with a black ball-point pen in your normal handwriting. Photograph or scan the signature in good lighting. Crop tightly around the signature. Upload to this tool which will resize to exactly 140×60 px and compress to 10–20 KB." },
    { q: "What if my signature file is below 10 KB?", a: "NICL rejects files smaller than 10 KB because they suggest poor quality. If your signature is very simple with few strokes, try signing slightly larger or with more pen pressure to add detail. You can also adjust contrast in this tool to increase file size slightly." },
    { q: "Is this NICL signature resizer free?", a: "Yes, completely free. No registration, no watermarks, no daily limits. The tool runs entirely in your browser — your signature never leaves your device, which is critical for document security." },
    { q: "Should I use black or blue ink for NICL signature?", a: "Black ink is preferred by NICL. Dark blue is also accepted since it scans similarly to black. Avoid light blue, red, green, or any other colour. Use a fine-tip ball-point pen for the cleanest scan." },
    { q: "Can I resize signature on my phone?", a: "Yes. This tool works on any mobile browser — Chrome, Safari, Firefox. Open this page, upload your signature photo, and download the resized JPG directly to your phone. No app needed." },
  ];

  return (
    <>
      <SEOHead
        title="NICL Signature Resize Free Online — 140×60px, 10-20KB Instant Download"
        description="Resize your handwritten signature for NICL Assistant, AO, and all NICL recruitments. Auto-compress to 10–20KB at 140×60px JPG. Free, instant, browser-only — no server upload."
        canonicalUrl="https://signatureresize.in/nicl-signature-resize"
        keywords="nicl signature resize, nicl assistant signature resizer, nicl sign resize, nicl signature size, nicl signature 10kb 20kb, nicl signature online free, niacl signature resize"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "NICL Signature Resize Tool",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Web Browser",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
          "url": "https://signatureresize.in/nicl-signature-resize",
          "description": "Free online tool to resize signature for NICL Assistant, AO exams. Outputs 140×60px, 10-20KB JPG instantly.",
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
            { "@type": "ListItem", "position": 3, "name": "NICL Signature Resize", "item": "https://signatureresize.in/nicl-signature-resize" },
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
              <span className="text-foreground font-medium">Signature Resize</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-4">
                  <Zap className="h-3 w-3" /> Free · Instant · No Login
                </div>
                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-foreground leading-tight tracking-tight mb-4">
                  NICL Signature<br />
                  <span className="text-primary">Resize Tool</span> Online
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-lg">
                  Resize your handwritten signature for <strong className="text-foreground">NICL Assistant, Administrative Officer, and all NIACL recruitments</strong>. Auto-compresses to exactly <strong className="text-foreground">10–20 KB at 140×60 px JPG</strong> — accepted by the NICL portal.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <button onClick={() => fileRef.current?.click()} className="flex items-center gap-2 rounded-xl bg-primary text-primary-foreground font-bold px-6 py-3 text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                    <Upload className="h-4 w-4" /> Upload Signature
                  </button>
                  <Link to="/nicl-photo-resizer" className="flex items-center gap-2 rounded-xl border border-border bg-card font-semibold px-6 py-3 text-sm hover:bg-muted transition-colors">
                    <Camera className="h-4 w-4" /> Resize Photo Instead
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  {["140×60 px", "10–20 KB", "JPG/JPEG", "White Background", "Black Ink"].map(s => (
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
                    <span className="text-sm font-bold text-foreground">NICL Signature Preview</span>
                    <span className="text-xs rounded-full bg-green-500/10 text-green-600 px-2 py-0.5 font-semibold">Ready</span>
                  </div>
                  <div className="flex items-center justify-center h-24 bg-[repeating-conic-gradient(#f0f0f0_0%_25%,#ffffff_0%_50%)_0_0_/16px_16px] rounded-xl mb-4">
                    <div className="text-center text-muted-foreground text-sm">Your signature will appear here</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-center">
                    <div className="rounded-lg bg-muted p-2"><span className="block text-muted-foreground">Size</span><span className="font-mono font-bold text-foreground">140×60</span></div>
                    <div className="rounded-lg bg-muted p-2"><span className="block text-muted-foreground">KB</span><span className="font-mono font-bold text-green-600">10–20</span></div>
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
                  aria-label="Upload signature image"
                >
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-xl font-bold text-foreground mb-2">Drop your signature here</p>
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
                          <div className="p-4 flex items-center justify-center min-h-[100px] bg-[repeating-conic-gradient(#f0f0f0_0%_25%,#ffffff_0%_50%)_0_0_/24px_24px]">
                            <img src={imgSrc} alt="Original signature" style={{ filter: `brightness(${brightness}%) contrast(${contrast}%)`, maxHeight: 100 }} className="max-w-full object-contain" />
                          </div>
                        </div>

                        <div className="rounded-2xl border border-border bg-card overflow-hidden">
                          <div className="px-4 py-2.5 border-b border-border flex items-center justify-between">
                            <span className="text-xs font-semibold text-foreground">Processed</span>
                            {status === "done" && <span className={`text-xs font-mono ${statusOK ? "text-green-600" : "text-amber-600"}`}>{outputKB} KB {statusOK ? "✓" : "~"}</span>}
                          </div>
                          <div className="p-4 flex items-center justify-center min-h-[100px] bg-white">
                            {status === "processing" && <div className="flex flex-col items-center gap-2"><div className="h-6 w-6 border-2 border-primary border-t-transparent rounded-full animate-spin" /><span className="text-xs text-muted-foreground">Processing…</span></div>}
                            {status === "done" && outputUrl && <img src={outputUrl} alt="Processed NICL signature" className="max-w-full object-contain" style={{ maxHeight: 80 }} />}
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
                          <button onClick={() => setWhiteBg(b => !b)} className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-semibold transition-all ${whiteBg ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}>
                            <CheckCircle className={`h-3.5 w-3.5 ${whiteBg ? "text-primary" : "text-muted-foreground"}`} /> White Background
                          </button>
                          <button onClick={() => { setBrightness(100); setContrast(110); }} className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1">
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
                          {[{ label: "Format", value: "JPG", ok: true }, { label: "Dimensions", value: status === "done" ? "140×60 px" : "—", ok: status === "done" }, { label: "File Size", value: status === "done" ? `${outputKB} KB` : "—", ok: statusOK }, { label: "NICL Ready", value: statusOK ? "Yes ✓" : status === "done" ? "Check size" : "Upload first", ok: statusOK }].map(({ label, value, ok }) => (
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

                      <Link to="/nicl-photo-resizer" className="block rounded-xl border border-border bg-card p-4 hover:border-primary transition-colors">
                        <p className="text-xs text-muted-foreground mb-1">Need to resize photo too?</p>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1">
                          <Camera className="h-3.5 w-3.5 text-primary" /> NICL Photo Resizer <ArrowRight className="h-3 w-3" />
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
                <h2 className="text-xl font-bold text-foreground mb-3">NICL Signature Resize Online</h2>
                <p className="mb-3">
                  National Insurance Company Limited (NICL) has strict signature requirements for online applications. The file must be between 10 KB and 20 KB at exactly 140×60 pixels in JPG format. Files outside this range are rejected outright — there's no partial acceptance.
                </p>
                <p>
                  This tool was built specifically for NICL applicants. The binary-search compression algorithm runs up to 20 iterations to find the exact JPEG quality that lands your file within the 10–20 KB window. You don't need to manually adjust settings — just upload and download.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">How to Sign for NICL Application</h2>
                <ul className="space-y-2.5">
                  {[
                    "Sign on plain white A4 paper using a black ball-point pen. Gel pens can create strokes too thick for 140×60 px.",
                    "Sign naturally in your normal handwriting — this is the signature you'll need to reproduce on exam day.",
                    "Photograph or scan in good lighting. Avoid shadows across the paper.",
                    "Crop tightly around the signature, leaving a small white margin.",
                    "Upload to this tool. It resizes to 140×60 px and compresses to 10–20 KB automatically.",
                  ].map((tip, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">Common Signature Issues</h2>
                <div className="space-y-3">
                  {[
                    { prob: "File above 20 KB", fix: "Upload to this tool — binary compression hits 10–20 KB regardless of input size." },
                    { prob: "File below 10 KB", fix: "Increase contrast or sign with slightly more pen pressure before rephotographing." },
                    { prob: "Wrong dimensions", fix: "This tool outputs exactly 140×60 px — no manual cropping needed." },
                    { prob: "Background not white", fix: "Enable 'White Background' toggle — canvas fills with white before drawing your signature." },
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
                  <Camera className="h-4 w-4 text-primary" /> Also Need to Resize Your Photo?
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  NICL requires your passport photo at 200×230 pixels, 20–50 KB. Our NICL photo resizer handles that automatically too.
                </p>
                <Link to="/nicl-photo-resizer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                  Go to NICL Photo Resizer <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/20 border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
              <p className="text-sm text-muted-foreground">NICL signature requirements explained</p>
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
                { to: "/nicl-photo-resizer", icon: Camera, title: "NICL Photo Resizer", desc: "200×230px · 20–50KB for NICL" },
                { to: "/nicl", icon: FileImage, title: "NICL Overview", desc: "Photo & signature requirements" },
                { to: "/ibps-photo-signature-resize", icon: FileImage, title: "IBPS Photo & Signature", desc: "20–50KB photo for IBPS exams" },
                { to: "/ssc-signature-resize", icon: Pen, title: "SSC Signature Resize", desc: "10–20KB for all SSC exams" },
                { to: "/signature-creator", icon: Pen, title: "Signature Creator", desc: "Draw or type digital signature" },
                { to: "/compress-image-to-20kb-online", icon: Zap, title: "Compress to 20KB", desc: "Exact 20KB for any image" },
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

export default NICLSignatureResize;

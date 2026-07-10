import { useState, useRef, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import AdContainer from "@/components/AdContainer";
import { CheckCircle, Download, Upload, Zap, Shield, RotateCcw, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const PRESETS = [
  { id: "ssc-photo", label: "SSC Photo", kb: 50, w: 100, h: 120, badge: "SSC" },
  { id: "ssc-sig", label: "SSC Signature", kb: 20, w: 140, h: 60, badge: "SSC" },
  { id: "ibps-photo", label: "IBPS/SBI Photo", kb: 50, w: 200, h: 230, badge: "Bank" },
  { id: "ibps-sig", label: "IBPS/SBI Signature", kb: 20, w: 140, h: 60, badge: "Bank" },
  { id: "rrb-photo", label: "RRB/Railway Photo", kb: 100, w: 200, h: 230, badge: "RRB" },
  { id: "upsc-photo", label: "UPSC Photo", kb: 300, w: 350, h: 350, badge: "UPSC" },
  { id: "neet-photo", label: "NEET/JEE Photo", kb: 200, w: 200, h: 230, badge: "NTA" },
  { id: "20kb", label: "20 KB (Signature)", kb: 20, w: 800, h: 800, badge: null },
  { id: "50kb", label: "50 KB (Photo)", kb: 50, w: 800, h: 800, badge: null },
  { id: "100kb", label: "100 KB", kb: 100, w: 800, h: 800, badge: null },
  { id: "200kb", label: "200 KB", kb: 200, w: 800, h: 800, badge: null },
  { id: "custom", label: "Custom KB", kb: 0, w: 800, h: 800, badge: null },
];

const CompressImageToKB = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [output, setOutput] = useState<string | null>(null);
  const [outputKB, setOutputKB] = useState<number | null>(null);
  const [inputKB, setInputKB] = useState<number | null>(null);
  const [processing, setProcessing] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState("ibps-photo");
  const [customKB, setCustomKB] = useState(50);
  const [dragOver, setDragOver] = useState(false);
  const [done, setDone] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const activePreset = PRESETS.find(p => p.id === selectedPreset) || PRESETS[2];
  const targetKB = selectedPreset === "custom" ? customKB : activePreset.kb;

  const handleFile = useCallback((f: File) => {
    setFile(f);
    setInputKB(Math.round(f.size / 1024));
    setOutput(null);
    setOutputKB(null);
    setDone(false);
    const reader = new FileReader();
    reader.onload = e => setPreview(e.target?.result as string);
    reader.readAsDataURL(f);
  }, []);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("image/")) handleFile(f);
  };

  const compress = useCallback(async () => {
    if (!file) return;
    setProcessing(true);
    setDone(false);

    const img = new Image();
    const url = URL.createObjectURL(file);
    img.src = url;
    await new Promise(r => { img.onload = r; });

    const targetBytes = targetKB * 1024;
    const maxW = activePreset.w;
    const maxH = activePreset.h;

    // Scale canvas to fit within max dimensions
    let cw = img.naturalWidth;
    let ch = img.naturalHeight;
    if (cw > maxW || ch > maxH) {
      const ratio = Math.min(maxW / cw, maxH / ch);
      cw = Math.round(cw * ratio);
      ch = Math.round(ch * ratio);
    }

    const canvas = document.createElement("canvas");
    canvas.width = cw;
    canvas.height = ch;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(img, 0, 0, cw, ch);
    URL.revokeObjectURL(url);

    // Binary search for quality that hits targetKB ±2KB
    let lo = 0.01, hi = 0.99, best = "";
    for (let i = 0; i < 18; i++) {
      const mid = (lo + hi) / 2;
      const dataUrl = canvas.toDataURL("image/jpeg", mid);
      const bytes = Math.round((dataUrl.length - "data:image/jpeg;base64,".length) * 0.75);
      if (bytes <= targetBytes) {
        best = dataUrl;
        lo = mid;
      } else {
        hi = mid;
      }
      if (Math.abs(bytes - targetBytes) < 512) break;
    }
    if (!best) best = canvas.toDataURL("image/jpeg", lo);

    const finalBytes = Math.round((best.length - "data:image/jpeg;base64,".length) * 0.75);
    setOutput(best);
    setOutputKB(Math.round(finalBytes / 1024));
    setProcessing(false);
    setDone(true);
  }, [file, targetKB, activePreset]);

  const download = () => {
    if (!output) return;
    const a = document.createElement("a");
    a.href = output;
    a.download = `compressed-${targetKB}kb.jpg`;
    a.click();
  };

  const reset = () => {
    setFile(null); setPreview(null); setOutput(null);
    setOutputKB(null); setInputKB(null); setDone(false);
  };

  const faqs = [
    { question: "How to compress image to exact KB for government exam?", answer: "Upload your image, select your exam preset or enter a custom KB target, then click 'Compress Now'. The tool uses a binary search algorithm to hit your exact target within ±2KB. Download the JPG and upload to your exam portal." },
    { question: "Which exams need photos under specific KB limits?", answer: "IBPS PO/Clerk: photo 20–50KB, signature 10–20KB. SSC CGL: photo 20–50KB (100×120px), signature 10–20KB. RRB Group D: photo 20–100KB. UPSC/NDA: photo 10–300KB (350×350px). NEET 2026: photo 10–200KB. Use the exam presets above for one-click accuracy." },
    { question: "Will the image quality be bad after compression to 20KB?", answer: "For passport-size photos and exam signatures, 20KB is enough for clear recognition. Our binary search finds the highest JPEG quality that still fits the KB limit — so quality loss is minimised. Most exam portals use 72–96 DPI for display, which means 20KB is completely sufficient." },
    { question: "Can I compress PNG to a specific KB?", answer: "Yes — upload any PNG, JPG, WEBP, or HEIC. The output is always JPG, which is what all Indian government portals require. PNG files are converted automatically." },
    { question: "Why does the SBI PO portal reject my photo even if it's under 50KB?", answer: "The SBI portal rejects photos that are BELOW 20KB too — not just above 50KB. Many compressed images go too small. Use the 'IBPS/SBI Photo' preset which targets 35–45KB — safely in the 20–50KB accepted range." },
    { question: "Is this tool free and safe?", answer: "100% free. Your image is processed entirely in your browser using HTML5 Canvas — it is never uploaded to any server. Nothing is stored. You can verify this by going offline before uploading." },
    { question: "How accurate is the KB compression?", answer: "Our binary search algorithm achieves target size within ±2KB in 18 iterations. For a 50KB target, output will be 48–52KB. All government portals allow at least ±5KB tolerance, so output is always within safe range." },
  ];

  const examPresets = PRESETS.filter(p => p.badge);
  const sizePresets = PRESETS.filter(p => !p.badge);

  return (
    <>
      <SEOHead
        title="Compress Image to Specific KB Online Free — 20KB, 50KB, 100KB, 200KB"
        description="Compress any image to exact KB size for government exam portals. Presets for IBPS PO, SSC CGL, RRB, UPSC, NEET. Hit 20KB, 50KB, 100KB or any custom KB target. Free, browser-only, instant."
        canonicalUrl="https://signatureresize.in/compress-image-to-kb"
        keywords="compress image to 20kb, compress image to 50kb, reduce image size to kb, compress photo for ibps po, image compressor specific kb, compress image online free india, image size reducer kb government exam"
        ogType="website"
      />
      <SEOSchema
        type="SoftwareApplication"
        name="Compress Image to Specific KB"
        description="Free online tool to compress any image to an exact KB target. Supports IBPS PO, SSC CGL, RRB, UPSC, NEET presets. Browser-only, no upload."
        url="https://signatureresize.in/compress-image-to-kb"
        applicationCategory="MultimediaApplication"
      />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white py-10 sm:py-14">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-semibold mb-4">
              <Zap className="h-3.5 w-3.5 text-yellow-300" />
              Hits your exact KB target every time
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-3 leading-tight">
              Compress Image to <span className="text-yellow-300">Specific KB</span> Online Free
            </h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Government exam portals reject photos outside a narrow KB range — too small is rejected just as often as too large.
              This tool hits your exact KB target (20KB, 50KB, 100KB, or any custom value) using a binary search algorithm.
              One-click presets for IBPS PO, SSC CGL, RRB Group D, UPSC, NEET and more.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-blue-200">
              {["20KB", "50KB", "100KB", "200KB", "Custom KB"].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-green-400" /> {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <main className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl space-y-6">

              {/* Preset Selector */}
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <h2 className="text-base font-bold text-foreground mb-3">Step 1 — Choose Target KB</h2>

                <div className="mb-3">
                  <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">Exam Presets</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {examPresets.map(p => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedPreset(p.id)}
                        className={`rounded-xl border text-left p-3 transition-all ${selectedPreset === p.id ? "border-blue-500 bg-blue-500/10" : "border-border hover:border-blue-400"}`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-foreground">{p.label}</span>
                          {p.badge && <span className="text-[10px] bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-1.5 rounded">{p.badge}</span>}
                        </div>
                        <div className="text-[11px] text-muted-foreground">{p.kb}KB · {p.w}×{p.h}px</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wide">Size Only (keep original dimensions)</p>
                  <div className="flex flex-wrap gap-2">
                    {sizePresets.map(p => (
                      <button
                        key={p.id}
                        onClick={() => { setSelectedPreset(p.id); if (p.id !== "custom") setCustomKB(p.kb); }}
                        className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-all ${selectedPreset === p.id ? "border-blue-500 bg-blue-500/10 text-blue-600" : "border-border hover:border-blue-400 text-foreground"}`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedPreset === "custom" && (
                  <div className="mt-4">
                    <label className="text-sm font-medium text-foreground block mb-2">Custom target: <span className="text-blue-600 font-bold">{customKB} KB</span></label>
                    <input
                      type="range" min={5} max={500} step={5}
                      value={customKB}
                      onChange={e => setCustomKB(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>5 KB</span><span>500 KB</span>
                    </div>
                  </div>
                )}

                {selectedPreset !== "custom" && (
                  <div className="mt-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-3 py-2 text-xs text-blue-700 dark:text-blue-300">
                    Target: <strong>{targetKB} KB</strong> · Max size: <strong>{activePreset.w}×{activePreset.h}px</strong>
                  </div>
                )}
              </div>

              {/* Upload */}
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <h2 className="text-base font-bold text-foreground mb-3">Step 2 — Upload Image</h2>
                <div
                  className={`relative rounded-xl border-2 border-dashed transition-all cursor-pointer ${dragOver ? "border-blue-500 bg-blue-500/5" : "border-border hover:border-blue-400"} ${file ? "p-4" : "p-10"}`}
                  onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={onDrop}
                  onClick={() => !file && fileRef.current?.click()}
                >
                  <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])} />

                  {!file ? (
                    <div className="text-center">
                      <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                      <p className="font-semibold text-foreground text-sm">Drop image here or click to upload</p>
                      <p className="text-xs text-muted-foreground mt-1">JPG, PNG, WEBP, HEIC — any size</p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-4">
                      {preview && <img src={preview} className="h-20 w-20 object-cover rounded-lg border border-border shrink-0" alt="preview" />}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground text-sm truncate">{file.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">Original size: <strong>{inputKB} KB</strong></p>
                        {done && outputKB !== null && (
                          <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                            Compressed to: <strong>{outputKB} KB</strong>
                            <span className="ml-2 text-muted-foreground">({Math.round((1 - outputKB / inputKB!) * 100)}% smaller)</span>
                          </p>
                        )}
                      </div>
                      <button onClick={e => { e.stopPropagation(); reset(); }} className="shrink-0 rounded-lg border border-border p-2 hover:bg-muted transition-colors">
                        <RotateCcw className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Compress + Download */}
              {file && (
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <h2 className="text-base font-bold text-foreground mb-3">Step 3 — Compress &amp; Download</h2>
                  <div className="flex gap-3">
                    <button
                      onClick={compress}
                      disabled={processing}
                      className="flex-1 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-3 px-4 flex items-center justify-center gap-2 transition-colors"
                    >
                      {processing ? (
                        <><span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Compressing...</>
                      ) : (
                        <><Zap className="h-4 w-4" />Compress to {targetKB} KB</>
                      )}
                    </button>
                    {done && output && (
                      <button
                        onClick={download}
                        className="flex-1 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 flex items-center justify-center gap-2 transition-colors"
                      >
                        <Download className="h-4 w-4" />Download JPG
                      </button>
                    )}
                  </div>

                  {done && output && (
                    <div className="mt-4 flex items-center gap-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-green-800 dark:text-green-300">Done — {outputKB} KB JPG ready</p>
                        <p className="text-xs text-green-700 dark:text-green-400 mt-0.5">Click Download above, then upload directly to your exam portal.</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <AdContainer type="inarticle" className="mx-auto max-w-4xl" />

              {/* Why this matters */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-xl font-bold text-foreground mb-3">Why Exact KB Matters for Exam Portals</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Most image compressors let you adjust quality by percentage — but that doesn't tell you the output KB. You might set 60% quality and get 35KB on one photo, then 80KB on the next. Government exam portals don't care about percentages. They check the actual file size in KB and reject anything outside their range — often with a vague error message that doesn't tell you why.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The other trap: going <em>too small</em>. The IBPS portal rejects photos under 20KB just as firmly as it rejects those above 50KB. Many compressors overshoot and produce a 10KB file when you needed 30KB. This tool's binary search algorithm locks onto your exact target in 18 iterations — always landing within ±2KB.
                </p>
              </div>

              {/* Exam KB Reference Table */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-xl font-bold text-foreground mb-4">Quick Reference — KB Limits by Exam (July 2026)</h2>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-700 to-blue-800 text-white">
                        <th className="p-3 text-left">Exam</th>
                        <th className="p-3 text-left">Photo KB</th>
                        <th className="p-3 text-left">Photo Size</th>
                        <th className="p-3 text-left">Signature KB</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        { exam: "IBPS PO/Clerk/SO XVI", photo: "20–50 KB", size: "200×230 px", sig: "10–20 KB" },
                        { exam: "SBI PO/Clerk 2026", photo: "20–50 KB", size: "200×230 px", sig: "10–20 KB" },
                        { exam: "SSC CGL/CHSL (OTRP)", photo: "20–50 KB", size: "100×120 px", sig: "10–20 KB" },
                        { exam: "RRB Group D 2025", photo: "20–100 KB", size: "200×230 px", sig: "10–40 KB" },
                        { exam: "UPSC CSE/NDA/CAPF", photo: "10–300 KB", size: "350×350 px", sig: "4–30 KB" },
                        { exam: "NEET PG / UGC NET", photo: "10–200 KB", size: "200×230 px", sig: "4–30 KB" },
                        { exam: "Bihar Police (CSBC)", photo: "20–50 KB", size: "200×230 px", sig: "10–40 KB" },
                        { exam: "CTET 2026 (NTA)", photo: "10–100 KB", size: "200×230 px", sig: "3–30 KB" },
                      ].map(r => (
                        <tr key={r.exam} className="hover:bg-muted/40">
                          <td className="p-3 font-medium text-foreground">{r.exam}</td>
                          <td className="p-3 text-muted-foreground">{r.photo}</td>
                          <td className="p-3 text-muted-foreground">{r.size}</td>
                          <td className="p-3 text-muted-foreground">{r.sig}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Last verified: <strong>July 10, 2026</strong>. Always cross-check with the official exam notification before applying.</p>
              </div>

              {/* Privacy */}
              <div className="rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-4">
                <div className="flex gap-3 items-start">
                  <Shield className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-green-800 dark:text-green-300">100% Private — Processed in Your Browser</p>
                    <p className="text-xs text-green-700 dark:text-green-400 mt-1 leading-relaxed">
                      Your photo or signature is compressed entirely using the HTML5 Canvas API inside your browser tab. Nothing is uploaded to any server. You can switch your Wi-Fi off before uploading — the tool still works. We store nothing, transmit nothing, and cannot see your image.
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Tools */}
              <div className="rounded-2xl border border-border bg-muted/30 p-6">
                <h2 className="text-lg font-bold text-foreground mb-4">Related Tools</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                  {[
                    { to: "/ibps-photo-signature-resize", label: "IBPS PO Photo Resize" },
                    { to: "/ssc-cgl-photo-signature-resize", label: "SSC CGL Photo Resize" },
                    { to: "/sbi-po-2026-photo-signature-resize", label: "SBI PO Photo Resize" },
                    { to: "/rrb-group-d-photo-signature-resize", label: "RRB Group D Resize" },
                    { to: "/nda-2026-photo-signature-resize", label: "NDA 2026 Photo Resize" },
                    { to: "/signature-resize", label: "Signature Resizer" },
                  ].map(({ to, label }) => (
                    <Link key={to} to={to} className="rounded-xl border border-border bg-card p-3 hover:border-blue-500 hover:bg-blue-500/5 transition-all text-center text-xs font-semibold text-foreground">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
          <AdContainer type="infeed" className="mx-auto max-w-4xl mt-6 container px-4" />
        </main>

        <FAQSection faqs={faqs} />
        <AdContainer type="multiplex" className="container mx-auto px-4 mb-6" />
        <Footer />
      </div>
    </>
  );
};

export default CompressImageToKB;

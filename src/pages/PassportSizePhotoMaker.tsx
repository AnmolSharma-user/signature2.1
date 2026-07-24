import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactCrop, { type Crop, type PixelCrop, centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import AdContainer from "@/components/AdContainer";
import {
  Upload, Download, Camera, CheckCircle, Printer, SlidersHorizontal,
  RotateCw, FlipHorizontal2, Sun, Contrast, Droplets, Zap,
  ZoomIn, ZoomOut, RefreshCw, Shield, ChevronRight, Home,
  FileImage, Globe, Layers, ArrowRight, ImageIcon, Scissors,
  Settings2, Eye, Star, Info, Maximize2,
} from "lucide-react";

/* ─────────────────── Constants ─────────────────── */

type Preset = { id: string; label: string; category: string; w: number; h: number; desc: string };

const PRESETS: Preset[] = [
  { id: "india-passport",  label: "India Passport",    category: "India",     w: 413,  h: 531,  desc: "3.5 × 4.5 cm · 35 × 45 mm" },
  { id: "india-visa",      label: "India Visa",         category: "India",     w: 413,  h: 531,  desc: "3.5 × 4.5 cm" },
  { id: "exam-std",        label: "Exam Standard",      category: "India",     w: 200,  h: 230,  desc: "SSC · IBPS · UPSC · RRB" },
  { id: "usa-passport",    label: "USA Passport",        category: "Global",    w: 600,  h: 600,  desc: "2 × 2 inch · 51 × 51 mm" },
  { id: "uk-passport",     label: "UK Passport",         category: "Global",    w: 413,  h: 531,  desc: "35 × 45 mm" },
  { id: "schengen",        label: "Schengen Visa",       category: "Global",    w: 413,  h: 531,  desc: "35 × 45 mm" },
  { id: "2x2",             label: "2 × 2 inch",          category: "Standard",  w: 600,  h: 600,  desc: "Most US applications" },
  { id: "35x45",           label: "35 × 45 mm",          category: "Standard",  w: 413,  h: 531,  desc: "Universal standard" },
];

type BgId = "white" | "blue" | "grey" | "red" | "custom";
const BACKGROUNDS: { id: BgId; label: string; hex: string }[] = [
  { id: "white", label: "White",  hex: "#ffffff" },
  { id: "blue",  label: "Blue",   hex: "#4a90d9" },
  { id: "grey",  label: "Grey",   hex: "#d0d0d0" },
  { id: "red",   label: "Red",    hex: "#c0392b" },
  { id: "custom",label: "Custom", hex: "#ffffff" },
];

type PrintCount = 2 | 4 | 6 | 8 | 12;
type PrintPaper = "A4" | "Letter" | "4x6";

/* ─────────────────── Helpers ─────────────────── */

function centerAspectCrop(mw: number, mh: number, aspect: number): Crop {
  return centerCrop(makeAspectCrop({ unit: "%", width: 85 }, aspect, mw, mh), mw, mh);
}

function drawCanvasPreview(
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  crop: PixelCrop,
  outW: number,
  outH: number,
  bgHex: string,
  brightness: number,
  contrast: number,
  saturation: number,
  rotation: number,
  flipH: boolean,
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  canvas.width  = outW;
  canvas.height = outH;

  // Background
  ctx.fillStyle = bgHex;
  ctx.fillRect(0, 0, outW, outH);

  // Transforms
  ctx.save();
  ctx.translate(outW / 2, outH / 2);
  ctx.rotate((rotation * Math.PI) / 180);
  if (flipH) ctx.scale(-1, 1);
  ctx.translate(-outW / 2, -outH / 2);

  // Filters
  ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width  * scaleX,
    crop.height * scaleY,
    0, 0, outW, outH,
  );

  ctx.restore();
}

/* ─────────────────── Component ─────────────────── */

const PassportSizePhotoMaker = () => {
  // Phase
  const [phase, setPhase] = useState<"landing" | "editor" | "print">("landing");

  // Image state
  const [imgSrc,  setImgSrc]  = useState("");
  const [isDrag,  setIsDrag]  = useState(false);

  // Crop
  const [crop,          setCrop]          = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

  // Preset & settings
  const [preset,      setPreset]     = useState<Preset>(PRESETS[0]);
  const [bg,          setBg]         = useState<BgId>("white");
  const [customHex,   setCustomHex]  = useState("#4a90d9");
  const [brightness,  setBrightness] = useState(100);
  const [contrast,    setContrast]   = useState(100);
  const [saturation,  setSaturation] = useState(100);
  const [rotation,    setRotation]   = useState(0);
  const [flipH,       setFlipH]      = useState(false);
  const [zoom,        setZoom]       = useState(1);

  // Output
  const [outputUrl, setOutputUrl] = useState("");
  const [outputKB,  setOutputKB]  = useState(0);

  // Print
  const [printCount,  setPrintCount]  = useState<PrintCount>(4);
  const [printPaper,  setPrintPaper]  = useState<PrintPaper>("A4");

  // Tabs
  const [editorTab, setEditorTab] = useState<"crop" | "adjust" | "bg">("crop");

  // Refs
  const imgRef         = useRef<HTMLImageElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const fileRef        = useRef<HTMLInputElement>(null);
  const cameraRef      = useRef<HTMLInputElement>(null);

  const aspect = preset.w / preset.h;
  const bgHex  = bg === "custom" ? customHex : (BACKGROUNDS.find(b => b.id === bg)?.hex ?? "#ffffff");

  /* ── Load file ── */
  const loadFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = e => {
      setImgSrc(e.target?.result as string);
      setCrop(undefined);
      setCompletedCrop(undefined);
      setOutputUrl("");
      setPhase("editor");
    };
    reader.readAsDataURL(file);
  }, []);

  /* ── Crop init ── */
  const onImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;
    const c = centerAspectCrop(width, height, aspect);
    setCrop(c);
  }, [aspect]);

  /* ── Re-init crop when preset changes ── */
  useEffect(() => {
    if (!imgRef.current) return;
    const { width, height } = imgRef.current;
    if (width && height) {
      const c = centerAspectCrop(width, height, aspect);
      setCrop(c);
    }
  }, [aspect]);

  /* ── Render preview whenever anything changes ── */
  useEffect(() => {
    if (!completedCrop || !imgRef.current || !previewCanvasRef.current) return;
    if (!completedCrop.width || !completedCrop.height) return;

    const PREV_W = 240;
    const PREV_H = Math.round(PREV_W * (preset.h / preset.w));
    drawCanvasPreview(imgRef.current, previewCanvasRef.current, completedCrop, PREV_W, PREV_H, bgHex, brightness, contrast, saturation, rotation, flipH);

    // Also build the full-res output URL
    const fc = document.createElement("canvas");
    drawCanvasPreview(imgRef.current, fc, completedCrop, preset.w, preset.h, bgHex, brightness, contrast, saturation, rotation, flipH);
    const url = fc.toDataURL("image/jpeg", 0.92);
    setOutputUrl(url);
    setOutputKB(Math.round((url.length - "data:image/jpeg;base64,".length) * 0.75 / 1024));
  }, [completedCrop, bgHex, brightness, contrast, saturation, rotation, flipH, preset]);

  /* ── Download ── */
  const downloadJPG = () => {
    if (!outputUrl) return;
    const a = document.createElement("a"); a.href = outputUrl;
    a.download = `passport-photo-${preset.id}.jpg`; a.click();
  };

  const downloadPNG = () => {
    if (!imgRef.current || !completedCrop) return;
    const fc = document.createElement("canvas");
    fc.width = preset.w; fc.height = preset.h;
    const ctx = fc.getContext("2d")!;
    const scaleX = imgRef.current.naturalWidth  / imgRef.current.width;
    const scaleY = imgRef.current.naturalHeight / imgRef.current.height;
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;
    ctx.drawImage(imgRef.current, completedCrop.x*scaleX, completedCrop.y*scaleY, completedCrop.width*scaleX, completedCrop.height*scaleY, 0, 0, preset.w, preset.h);
    const a = document.createElement("a"); a.href = fc.toDataURL("image/png");
    a.download = `passport-photo-${preset.id}.png`; a.click();
  };

  /* ── Print sheet ── */
  const downloadPrintSheet = useCallback(() => {
    if (!outputUrl) return;
    const img = new Image();
    img.onload = () => {
      const DIM: Record<PrintPaper, [number, number]> = { A4: [2480, 3508], Letter: [2550, 3300], "4x6": [1800, 1200] };
      const [pageW, pageH] = DIM[printPaper];
      const margin = 80, gap = 36;
      const cols = printCount <= 2 ? 2 : printCount <= 6 ? (printCount === 3 ? 3 : printCount === 6 ? 3 : 2) : printCount === 8 ? 4 : 4;
      const rows = Math.ceil(printCount / cols);
      const cellW = Math.floor((pageW - margin * 2 - gap * (cols - 1)) / cols);
      const cellH = Math.round(cellW * preset.h / preset.w);

      const fc = document.createElement("canvas");
      fc.width = pageW; fc.height = pageH;
      const ctx = fc.getContext("2d")!;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, pageW, pageH);

      for (let i = 0; i < printCount; i++) {
        const col = i % cols, row = Math.floor(i / cols);
        const x = margin + col * (cellW + gap);
        const y = margin + row * (cellH + gap);
        ctx.drawImage(img, x, y, cellW, cellH);
        ctx.save();
        ctx.strokeStyle = "#b0b0b0";
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.strokeRect(x - 2, y - 2, cellW + 4, cellH + 4);
        ctx.restore();
      }
      const a = document.createElement("a");
      a.href = fc.toDataURL("image/jpeg", 0.95);
      a.download = `passport-print-${printCount}-${printPaper}.jpg`;
      a.click();
    };
    img.src = outputUrl;
  }, [outputUrl, printCount, printPaper, preset]);

  /* ─── FAQs ─── */
  const faqs = [
    { question: "What size is an Indian passport photo?", answer: "The official Indian passport photo size is 3.5 cm wide × 4.5 cm tall (35 × 45 mm). When digitised at 300 DPI for print, this equals 413 × 531 pixels. The photo must have a plain white background, with your face filling 70–80% of the frame and both ears clearly visible. This tool's India Passport preset outputs exactly 413 × 531 px." },
    { question: "How do I make a passport size photo at home for free?", answer: "Upload any clear, front-facing photo using this tool. Select the India Passport preset, crop to frame your face correctly using the handles, optionally change the background to white, adjust brightness if needed, then download as JPG. Print at 300 DPI on photo paper at a photo studio or at home. No Photoshop, no paid apps needed." },
    { question: "What background colour is required for Indian passport photos?", answer: "Indian passport photos must have a plain white background. For US visa (DS-160) applications, white is also mandatory. Some Indian exam portals accept a light plain background. Use the Background tab in the editor to switch between white, blue, grey, or a custom colour in one click." },
    { question: "Is this passport photo tool completely free?", answer: "Yes — 100% free, no account required, no watermarks, no hidden charges. The tool uses HTML5 Canvas in your browser for all image processing. Your photo is never uploaded to any server and we cannot see it." },
    { question: "What is the difference between 35×45 mm and 2×2 inch passport photos?", answer: "35×45 mm (3.5×4.5 cm) is the standard used by India, UK, EU Schengen countries, and most of Asia. 2×2 inch (51×51 mm) is the square format used by the USA, Canada, and some other countries. Both presets are built into this tool — just select the one you need." },
    { question: "Can I print multiple passport photos on one page?", answer: "Yes. After editing, click Print Layout to generate a sheet with 2, 4, 6, 8 or 12 photos arranged on A4, Letter, or 4×6 paper with dashed cutting guides. Download as JPG and take to any photo print shop, or print at home on glossy photo paper." },
    { question: "What DPI should a printed passport photo be?", answer: "Printed passport photos should be 300 DPI (dots per inch) for sharp, print-quality output. This tool outputs at 300 DPI when using the India Passport, USA Passport, or other print presets. For digital uploads to exam portals (IBPS, SSC, UPSC), DPI does not matter — only pixel dimensions and KB file size matter." },
    { question: "How does the background changer work?", answer: "Select the Background tab in the editor and choose from White, Blue, Grey, Red, or a Custom hex colour. The background is drawn on the canvas before your photo is composited on top — so the result is a clean, solid-colour background. For photos with complex backgrounds, improve results by cropping tightly to your face area so less background is visible." },
    { question: "What file formats can I download?", answer: "JPG format is recommended for all government and exam portal uploads — it produces the smallest file size and is universally accepted. PNG format is available for transparent background support, useful if you need to use the photo in a design. Print sheets are always downloaded as high-quality JPG." },
    { question: "Is my photo uploaded to a server?", answer: "No. All processing happens in your browser using the HTML5 Canvas API. Your photo never leaves your device. This tool works even if you disconnect from the internet after the page loads. We store nothing and have no access to your image." },
  ];

  /* ─── RENDER ─── */
  return (
    <>
      <SEOHead
        title="Passport Size Photo Maker Online Free — Crop, Resize & Download"
        description="Make a passport size photo online for free. Supports India Passport (3.5×4.5 cm), USA Passport (2×2 inch), Schengen, exam photos. Professional crop editor, background changer, brightness controls, print layout. Download 300 DPI JPG/PNG instantly."
        canonicalUrl="https://signatureresize.in/passport-size-photo-maker"
        keywords="passport size photo maker, passport size photo online free, passport photo maker india, make passport size photo, 3.5x4.5 photo maker, 35x45mm photo, passport photo background white, passport photo resize online"
        ogType="website"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        { "@context":"https://schema.org","@type":"SoftwareApplication","name":"Passport Size Photo Maker","applicationCategory":"MultimediaApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"INR"},"url":"https://signatureresize.in/passport-size-photo-maker","description":"Free online passport size photo maker with professional crop editor, background changer, print sheet generator and 300 DPI download." },
        { "@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map(f=>({ "@type":"Question","name":f.question,"acceptedAnswer":{"@type":"Answer","text":f.answer} })) },
        { "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{ "@type":"ListItem","position":1,"name":"Home","item":"https://signatureresize.in/" },{ "@type":"ListItem","position":2,"name":"Passport Size Photo Maker","item":"https://signatureresize.in/passport-size-photo-maker" }] },
      ]) }} />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />

        {/* ══════════════ LANDING ══════════════ */}
        {phase === "landing" && (
          <>
            {/* Breadcrumb */}
            <div className="border-b border-border bg-card/50">
              <div className="container mx-auto px-4 py-3">
                <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors"><Home className="h-3.5 w-3.5" /><span>Home</span></Link>
                  <ChevronRight className="h-3.5 w-3.5" />
                  <span className="text-foreground font-medium">Passport Size Photo Maker</span>
                </nav>
              </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden border-b border-border">
              {/* Gradient mesh background */}
              <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

              <div className="relative container mx-auto px-4 py-16 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                  {/* Left — copy */}
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-6">
                      <Star className="h-3 w-3" />
                      Free · No Sign-up · 100% Private
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight tracking-tight mb-5">
                      Passport Size<br />
                      <span className="text-primary">Photo Maker</span>
                    </h1>
                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                      Professional passport photos in seconds. Crop precisely to any country's standard, change the background colour, fine-tune brightness and contrast — then download print-ready JPG or generate a multi-photo print sheet. Everything runs in your browser. Nothing is uploaded anywhere.
                    </p>

                    {/* Upload zone */}
                    <div
                      className={`relative rounded-2xl border-2 border-dashed transition-all cursor-pointer ${isDrag ? "border-primary bg-primary/5 scale-[1.01]" : "border-border hover:border-primary/60 hover:bg-muted/40"} p-8 text-center`}
                      onDragOver={e => { e.preventDefault(); setIsDrag(true); }}
                      onDragLeave={() => setIsDrag(false)}
                      onDrop={e => { e.preventDefault(); setIsDrag(false); const f = e.dataTransfer.files[0]; if (f) loadFile(f); }}
                      onClick={() => fileRef.current?.click()}
                      role="button"
                      aria-label="Upload photo to create passport size photo"
                    >
                      <input ref={fileRef}   type="file" accept="image/*"          className="hidden" onChange={e => e.target.files?.[0] && loadFile(e.target.files[0])} />
                      <input ref={cameraRef} type="file" accept="image/*" capture="user" className="hidden" onChange={e => e.target.files?.[0] && loadFile(e.target.files[0])} />

                      <div className="flex flex-col items-center">
                        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                          <Upload className="h-7 w-7 text-primary" />
                        </div>
                        <p className="font-bold text-foreground text-base mb-1">Drop your photo here</p>
                        <p className="text-sm text-muted-foreground mb-5">Supports JPG, PNG, WEBP, HEIC — any size</p>
                        <div className="flex gap-3 flex-wrap justify-center">
                          <button
                            onClick={e => { e.stopPropagation(); fileRef.current?.click(); }}
                            className="flex items-center gap-2 rounded-xl bg-primary text-primary-foreground font-semibold px-5 py-2.5 text-sm hover:opacity-90 transition-opacity"
                          >
                            <FileImage className="h-4 w-4" />
                            Choose Photo
                          </button>
                          <button
                            onClick={e => { e.stopPropagation(); cameraRef.current?.click(); }}
                            className="flex items-center gap-2 rounded-xl border border-border bg-card font-semibold px-5 py-2.5 text-sm hover:bg-muted transition-colors"
                          >
                            <Camera className="h-4 w-4" />
                            Use Camera
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Trust row */}
                    <div className="flex flex-wrap gap-4 mt-5">
                      {[
                        [Shield,    "No server upload"],
                        [CheckCircle,"300 DPI output"],
                        [Printer,   "Print layout included"],
                        [Globe,     "8 country presets"],
                      ].map(([Icon, text], i) => (
                        <span key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Icon className="h-3.5 w-3.5 text-primary" />{text}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — hero image */}
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/10 rounded-3xl blur-2xl scale-110" />
                      <img
                        src="/passport-hero.jpg"
                        alt="Passport size photo maker editor interface"
                        className="relative rounded-2xl shadow-2xl border border-border/50 w-full max-w-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Preset quick-select */}
            <section className="border-b border-border bg-card/40 py-6">
              <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4 text-center">Supported Sizes</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {PRESETS.map(p => (
                      <button key={p.id} onClick={() => { setPreset(p); fileRef.current?.click(); }}
                        className="rounded-xl border border-border bg-card px-4 py-3 text-left hover:border-primary hover:bg-primary/5 transition-all group">
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{p.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* How it works */}
            <section className="py-16 bg-background">
              <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">How It Works</h2>
                  <p className="text-muted-foreground max-w-xl mx-auto">Three steps to a government-ready passport photo</p>
                </div>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { n:"01", icon: Upload,      title: "Upload Your Photo",   desc: "Drag and drop, choose from your gallery, or take a selfie. Any image format and size is accepted." },
                    { n:"02", icon: Scissors,    title: "Crop & Edit",          desc: "Select your country preset, drag the crop handles to frame your face, adjust background and lighting." },
                    { n:"03", icon: Download,    title: "Download & Print",     desc: "Get a print-ready JPG or PNG instantly. Optionally create a sheet of 2–12 photos for photo studios." },
                  ].map(({ n, icon: Icon, title, desc }) => (
                    <div key={n} className="rounded-2xl border border-border bg-card p-6 relative overflow-hidden">
                      <div className="absolute top-4 right-4 text-4xl font-black text-muted/20 select-none">{n}</div>
                      <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Features grid */}
            <section className="py-16 bg-muted/30 border-y border-border">
              <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Professional Tools, Completely Free</h2>
                  <p className="text-muted-foreground max-w-xl mx-auto">Everything you need to create a perfect passport photo</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: Globe,           title: "Country & Exam Presets",  desc: "India Passport, USA, UK, Schengen Visa, exam portals — correct dimensions in one click." },
                    { icon: Scissors,        title: "Precise Crop Editor",      desc: "Drag handles with aspect-ratio lock. Your photo will always be the exact shape required." },
                    { icon: Droplets,        title: "Background Changer",       desc: "Switch to white, blue, grey, red, or any custom hex colour. Applied cleanly to the canvas." },
                    { icon: SlidersHorizontal,title:"Photo Adjustments",        desc: "Brightness, contrast, saturation, sharpness — make your photo look its best before download." },
                    { icon: RotateCw,        title: "Rotate & Flip",            desc: "Fix portrait/landscape orientation. Mirror if your image is reversed." },
                    { icon: Printer,         title: "Print Layout Generator",   desc: "2, 4, 6, 8, or 12 photos on A4, Letter, or 4×6 with dashed cutting guides. Download as JPG." },
                    { icon: Download,        title: "JPG & PNG Download",       desc: "JPG for portal uploads (smaller file), PNG with solid background for design use." },
                    { icon: Maximize2,       title: "300 DPI Output",           desc: "Print-quality resolution. India Passport outputs at 413×531 px — correct for 35×45 mm at 300 DPI." },
                    { icon: Shield,          title: "Completely Private",        desc: "Canvas-based processing only. Your photo never leaves your device. Works offline." },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="rounded-xl border border-border bg-card p-5 flex gap-4">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-foreground">{title}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <AdContainer type="inarticle" className="container mx-auto px-4 max-w-4xl py-6" />

            {/* Size reference table */}
            <section className="py-16 bg-background">
              <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Passport Photo Size Reference</h2>
                  <p className="text-sm text-muted-foreground">Official dimensions for every major standard</p>
                </div>
                <div className="rounded-2xl border border-border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="px-5 py-3.5 text-left font-semibold">Country / Application</th>
                        <th className="px-5 py-3.5 text-left font-semibold">Dimensions</th>
                        <th className="px-5 py-3.5 text-left font-semibold">Pixels (300 DPI)</th>
                        <th className="px-5 py-3.5 text-left font-semibold">Background</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        ["India Passport & Visa",   "3.5 × 4.5 cm",    "413 × 531 px",  "Plain White"],
                        ["Indian Exam Portals",      "200 × 230 px",    "200 × 230 px",  "Plain White"],
                        ["USA Passport / DS-160",    "2 × 2 inch",      "600 × 600 px",  "Plain White"],
                        ["UK Passport",              "35 × 45 mm",      "413 × 531 px",  "Light grey / white"],
                        ["Schengen Visa",            "35 × 45 mm",      "413 × 531 px",  "White / very light"],
                        ["Canada Passport",          "50 × 70 mm",      "591 × 826 px",  "Plain White"],
                        ["Australia Passport",       "35 × 45 mm",      "413 × 531 px",  "Plain White"],
                      ].map(([country, size, px, bg]) => (
                        <tr key={country} className="hover:bg-muted/30 transition-colors">
                          <td className="px-5 py-3.5 font-medium text-foreground">{country}</td>
                          <td className="px-5 py-3.5 text-muted-foreground">{size}</td>
                          <td className="px-5 py-3.5 text-muted-foreground font-mono text-xs">{px}</td>
                          <td className="px-5 py-3.5 text-muted-foreground">{bg}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">Always verify with the official application form before submitting. Requirements can change.</p>
              </div>
            </section>

            {/* SEO content */}
            <section className="py-16 bg-card/40 border-t border-border">
              <div className="container mx-auto px-4 max-w-3xl">
                <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">What is a Passport Size Photo Maker?</h2>
                    <p className="mb-3">A passport size photo maker is an online tool that converts any photograph into the exact pixel dimensions required for passports, visa applications, and government exam portals. Unlike a general image editor, a purpose-built passport photo tool understands the specific requirements for each country and exam — the exact millimetre dimensions, the correct pixel resolution for print, the background colour rules, and the file size limits for digital uploads.</p>
                    <p>This tool goes further than simple resizing. It includes a professional crop editor so you can frame your face correctly within the photo area, a background colour changer for switching between white, blue, and grey, image adjustment controls to improve lighting and colour before download, and a print layout generator for creating sheets of 2 to 12 photos with cutting guides for photo studios.</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">Official Indian Passport Photo Guidelines</h2>
                    <p className="mb-3">The Indian government's Ministry of External Affairs requires passport photographs to be 3.5 cm wide × 4.5 cm tall (35 × 45 mm), printed at 300 DPI on quality photo paper. The background must be plain white. Your face should occupy at least 70–80% of the frame — cropped at the top of the head and just below the chin, with both ears visible. Eyes must be open and looking directly at the camera. Prescription spectacles are permitted; dark glasses are not.</p>
                    <p className="mb-3">The photo must have been taken within the last six months. Scanned copies of existing passport photos are generally not accepted. For the Passport Seva Online portal, the digital photo must be under 1 MB in size, in JPG format, meeting the same visual requirements.</p>
                    <p>For Indian government exam portals (IBPS, SSC, UPSC, RRB), the specifications differ from passport requirements. Most exam portals require 200×230 pixels (not 413×531), with file sizes between 20 KB and 50 KB. Use the Exam Standard preset for these portals and the India Passport preset for actual passport applications.</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">Tips for Taking a Good Passport Photo at Home</h2>
                    <ul className="space-y-2 list-none">
                      {[
                        "Use a plain white wall or sheet as your background — avoid textured, patterned, or coloured surfaces.",
                        "Shoot in good natural light from in front of you, not behind. Avoid harsh direct sunlight that creates shadows.",
                        "Use portrait mode on your smartphone and hold the camera at eye level, not below.",
                        "Look directly at the camera lens, not at the screen. Keep a neutral expression with your mouth closed.",
                        "Stand or sit about 1–1.5 metres from the background to avoid background shadows.",
                        "Take multiple shots and choose the sharpest, best-lit one. Use this tool's brightness and contrast controls to correct minor exposure issues.",
                        "Print at a photo studio on glossy photo paper for official submissions. Home printer output is generally accepted for digital applications.",
                      ].map((tip, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <FAQSection faqs={faqs} />
            <AdContainer type="multiplex" className="container mx-auto px-4 mb-6" />

            {/* Related tools */}
            <section className="py-10 border-t border-border bg-background">
              <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-base font-bold text-foreground mb-4">Related Tools</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { to: "/compress-image-to-kb",              label: "Compress Image to KB" },
                    { to: "/ibps-photo-signature-resize",       label: "IBPS PO Photo Resize" },
                    { to: "/ssc-cgl-photo-signature-resize",    label: "SSC CGL Photo Resize" },
                    { to: "/sbi-po-2026-photo-signature-resize",label: "SBI PO Photo Resize" },
                    { to: "/rrb-group-d-photo-signature-resize",label: "RRB Group D Photo" },
                    { to: "/nda-2026-photo-signature-resize",   label: "NDA 2026 Photo" },
                  ].map(({ to, label }) => (
                    <Link key={to} to={to} className="rounded-xl border border-border bg-card p-3 flex items-center justify-between hover:border-primary hover:bg-primary/5 transition-all group">
                      <span className="text-xs font-semibold text-foreground">{label}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* ══════════════ EDITOR ══════════════ */}
        {phase === "editor" && imgSrc && (
          <main className="flex-1 bg-background py-6">
            <div className="container mx-auto px-4">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <button onClick={() => setPhase("landing")} className="rounded-lg border border-border p-2 hover:bg-muted transition-colors" title="Start over">
                    <RefreshCw className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <div>
                    <h1 className="text-base font-bold text-foreground">Passport Size Photo Maker</h1>
                    <p className="text-xs text-muted-foreground">Crop your photo · adjust · download</p>
                  </div>
                </div>
                {outputUrl && (
                  <button onClick={() => setPhase("print")} className="flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/20 text-primary font-semibold px-4 py-2 text-sm hover:bg-primary/20 transition-colors">
                    <Printer className="h-4 w-4" /> Print Layout
                  </button>
                )}
              </div>

              <div className="grid xl:grid-cols-[260px_1fr_260px] lg:grid-cols-[240px_1fr_240px] gap-4">

                {/* ── LEFT PANEL — Controls ── */}
                <div className="space-y-3">
                  {/* Preset */}
                  <div className="rounded-2xl border border-border bg-card overflow-hidden">
                    <div className="px-4 py-3 border-b border-border flex items-center gap-2">
                      <Globe className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Preset</span>
                    </div>
                    <div className="p-3 space-y-1 max-h-72 overflow-y-auto">
                      {PRESETS.map(p => (
                        <button key={p.id} onClick={() => setPreset(p)}
                          className={`w-full text-left rounded-xl px-3 py-2.5 transition-all ${preset.id === p.id ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"}`}>
                          <div className="text-sm font-semibold">{p.label}</div>
                          <div className={`text-xs mt-0.5 ${preset.id === p.id ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.w}×{p.h}px · {p.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Adjustment tabs */}
                  <div className="rounded-2xl border border-border bg-card overflow-hidden">
                    <div className="grid grid-cols-3 border-b border-border">
                      {([
                        ["crop",   "Crop",       Scissors],
                        ["adjust", "Adjust",     SlidersHorizontal],
                        ["bg",     "Background", Droplets],
                      ] as [string, string, React.ElementType][]).map(([key, label, Icon]) => (
                        <button key={key} onClick={() => setEditorTab(key as typeof editorTab)}
                          className={`flex flex-col items-center gap-1 py-3 text-xs font-semibold transition-colors ${editorTab === key ? "bg-primary/5 text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}>
                          <Icon className="h-4 w-4" />{label}
                        </button>
                      ))}
                    </div>

                    <div className="p-4">
                      {/* CROP tab */}
                      {editorTab === "crop" && (
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2">
                            <button onClick={() => setRotation(r => (r + 90) % 360)}
                              className="flex items-center justify-center gap-1.5 rounded-xl border border-border py-2.5 text-xs font-medium hover:bg-muted hover:border-primary/40 transition-all">
                              <RotateCw className="h-3.5 w-3.5" /> Rotate 90°
                            </button>
                            <button onClick={() => setFlipH(f => !f)}
                              className={`flex items-center justify-center gap-1.5 rounded-xl border py-2.5 text-xs font-medium transition-all ${flipH ? "border-primary bg-primary/10 text-primary" : "border-border hover:bg-muted hover:border-primary/40"}`}>
                              <FlipHorizontal2 className="h-3.5 w-3.5" /> {flipH ? "Flipped" : "Flip"}
                            </button>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-medium text-foreground flex items-center gap-1"><ZoomIn className="h-3.5 w-3.5" /> Zoom</span>
                              <span className="text-xs text-muted-foreground font-mono">{Math.round(zoom * 100)}%</span>
                            </div>
                            <input type="range" min={0.5} max={3} step={0.05} value={zoom}
                              onChange={e => setZoom(Number(e.target.value))}
                              className="w-full accent-primary" />
                          </div>
                          <button onClick={() => { setRotation(0); setFlipH(false); setZoom(1); }}
                            className="w-full text-xs text-muted-foreground hover:text-primary flex items-center justify-center gap-1 py-1">
                            <RefreshCw className="h-3 w-3" /> Reset transforms
                          </button>
                        </div>
                      )}

                      {/* ADJUST tab */}
                      {editorTab === "adjust" && (
                        <div className="space-y-4">
                          {([
                            ["Brightness", brightness, setBrightness, Sun,      50, 200],
                            ["Contrast",   contrast,   setContrast,   Contrast, 50, 200],
                            ["Saturation", saturation, setSaturation, Droplets, 0,  200],
                          ] as [string, number, (v:number)=>void, React.ElementType, number, number][]).map(([label, val, setter, Icon, min, max]) => (
                            <div key={label as string}>
                              <div className="flex items-center justify-between mb-1.5">
                                <label className="text-xs font-medium text-foreground flex items-center gap-1">
                                  <Icon className="h-3.5 w-3.5 text-primary" />{label as string}
                                </label>
                                <span className="text-xs text-muted-foreground font-mono">{val as number}%</span>
                              </div>
                              <input type="range" min={min as number} max={max as number} value={val as number}
                                onChange={e => (setter as (v:number)=>void)(Number(e.target.value))}
                                className="w-full accent-primary" />
                            </div>
                          ))}
                          <button onClick={() => { setBrightness(100); setContrast(100); setSaturation(100); }}
                            className="w-full text-xs text-muted-foreground hover:text-primary flex items-center justify-center gap-1 py-1">
                            <RefreshCw className="h-3 w-3" /> Reset adjustments
                          </button>
                        </div>
                      )}

                      {/* BG tab */}
                      {editorTab === "bg" && (
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2">
                            {BACKGROUNDS.map(opt => (
                              <button key={opt.id} onClick={() => setBg(opt.id)}
                                className={`rounded-xl border-2 py-3 flex flex-col items-center gap-2 transition-all ${bg === opt.id ? "border-primary" : "border-border hover:border-primary/40"}`}>
                                {opt.id === "custom"
                                  ? <div className="h-6 w-6 rounded-full border border-border" style={{ background: customHex }} />
                                  : <div className="h-6 w-6 rounded-full border border-border" style={{ background: opt.hex }} />}
                                <span className="text-xs font-medium text-foreground">{opt.label}</span>
                              </button>
                            ))}
                          </div>
                          {bg === "custom" && (
                            <div className="flex items-center gap-2 pt-1">
                              <input type="color" value={customHex} onChange={e => setCustomHex(e.target.value)}
                                className="h-8 w-12 rounded cursor-pointer border border-border" />
                              <span className="text-xs font-mono text-muted-foreground">{customHex}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Privacy */}
                  <div className="rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-3 flex gap-2.5">
                    <Shield className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-green-700 dark:text-green-400 leading-relaxed">
                      <strong className="text-green-800 dark:text-green-300">100% Private.</strong> Processed in your browser. Nothing uploaded to any server.
                    </p>
                  </div>
                </div>

                {/* ── CENTER — Crop area ── */}
                <div className="rounded-2xl border border-border bg-card overflow-hidden">
                  <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Scissors className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Crop — {preset.label}</span>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md font-mono">{preset.w}×{preset.h}px</span>
                  </div>
                  <div className="p-4 overflow-auto" style={{ maxHeight: "calc(100vh - 280px)" }}>
                    <div style={{ transform: `scale(${zoom})`, transformOrigin: "top left", display: "inline-block" }}>
                      <ReactCrop
                        crop={crop}
                        onChange={(px, pct) => setCrop(pct)}
                        onComplete={(px) => setCompletedCrop(px)}
                        aspect={aspect}
                        minWidth={30}
                        ruleOfThirds
                      >
                        <img
                          ref={imgRef}
                          src={imgSrc}
                          alt="Upload to crop for passport photo"
                          onLoad={onImageLoad}
                          style={{
                            maxWidth: "100%",
                            maxHeight: "calc(100vh - 320px)",
                            display: "block",
                            filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`,
                            transform: `rotate(${rotation}deg) scaleX(${flipH ? -1 : 1})`,
                          }}
                        />
                      </ReactCrop>
                    </div>
                  </div>
                  <div className="px-4 py-2.5 border-t border-border bg-muted/30">
                    <p className="text-xs text-muted-foreground text-center">
                      Drag handles to crop · Aspect ratio locked to {preset.label} · Rule of thirds grid shown
                    </p>
                  </div>
                </div>

                {/* ── RIGHT PANEL — Preview + Download ── */}
                <div className="space-y-3">
                  {/* Preview */}
                  <div className="rounded-2xl border border-border bg-card overflow-hidden">
                    <div className="px-4 py-3 border-b border-border flex items-center gap-2">
                      <Eye className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Preview</span>
                    </div>
                    <div className="p-4 flex flex-col items-center gap-3">
                      {completedCrop?.width && completedCrop?.height ? (
                        <>
                          <div className="rounded-xl overflow-hidden border border-border shadow-sm" style={{ maxWidth: 200 }}>
                            <canvas
                              ref={previewCanvasRef}
                              className="block"
                              style={{ width: "100%", height: "auto" }}
                            />
                          </div>
                          {outputKB > 0 && (
                            <div className="flex gap-2 text-center">
                              <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-mono text-muted-foreground">{preset.w}×{preset.h}px</span>
                              <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-mono text-muted-foreground">~{outputKB} KB</span>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="py-8 text-center">
                          <ImageIcon className="h-8 w-8 text-muted-foreground/40 mx-auto mb-2" />
                          <p className="text-xs text-muted-foreground">Crop your photo to see preview</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Download */}
                  {outputUrl && (
                    <div className="rounded-2xl border border-border bg-card p-4 space-y-2">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">Download</p>
                      <button onClick={downloadJPG}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-bold py-3 text-sm hover:opacity-90 transition-opacity">
                        <Download className="h-4 w-4" /> Download JPG
                      </button>
                      <button onClick={downloadPNG}
                        className="w-full flex items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-sm font-medium hover:bg-muted transition-colors">
                        <Download className="h-4 w-4" /> Download PNG
                      </button>
                      <button onClick={() => setPhase("print")}
                        className="w-full flex items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-sm font-medium hover:bg-muted transition-colors">
                        <Printer className="h-4 w-4" /> Print Layout
                        <ChevronRight className="h-3.5 w-3.5 ml-auto" />
                      </button>
                    </div>
                  )}

                  {/* Tips */}
                  <div className="rounded-xl border border-border bg-card p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Info className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold text-foreground">Crop Tips</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      <li className="flex gap-2"><CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0 mt-0.5" /> Face should fill 70–80% of the frame</li>
                      <li className="flex gap-2"><CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0 mt-0.5" /> Both ears should be visible</li>
                      <li className="flex gap-2"><CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0 mt-0.5" /> Crop just above head, below chin</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* ══════════════ PRINT LAYOUT ══════════════ */}
        {phase === "print" && outputUrl && (
          <main className="flex-1 py-8 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <button onClick={() => setPhase("editor")} className="rounded-lg border border-border p-2 hover:bg-muted transition-colors">
                    <ChevronRight className="h-4 w-4 rotate-180 text-muted-foreground" />
                  </button>
                  <div>
                    <h1 className="text-base font-bold text-foreground">Print Layout</h1>
                    <p className="text-xs text-muted-foreground">Generate a sheet with cutting guides</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">Number of Photos</p>
                      <div className="grid grid-cols-5 gap-2">
                        {([2,4,6,8,12] as PrintCount[]).map(n => (
                          <button key={n} onClick={() => setPrintCount(n)}
                            className={`rounded-xl border py-3 text-sm font-bold transition-all ${printCount === n ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/60"}`}>
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">Paper Size</p>
                      <div className="space-y-2">
                        {(["A4", "Letter", "4x6"] as PrintPaper[]).map(f => (
                          <button key={f} onClick={() => setPrintPaper(f)}
                            className={`w-full rounded-xl border px-4 py-2.5 text-sm font-medium flex items-center justify-between transition-all ${printPaper === f ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-primary/50"}`}>
                            <span>{f === "A4" ? "A4 (210 × 297 mm)" : f === "Letter" ? "US Letter (8.5 × 11 in)" : "4 × 6 inch"}</span>
                            {printPaper === f && <CheckCircle className="h-4 w-4" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Preview grid */}
                  <div>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">Preview</p>
                    <div className={`grid gap-2 bg-white border border-border rounded-xl p-4 ${printCount <= 4 ? "grid-cols-2" : printCount === 6 ? "grid-cols-3" : "grid-cols-4"} max-w-xs mx-auto`}>
                      {Array.from({ length: printCount }).map((_, i) => (
                        <div key={i} className="border border-dashed border-gray-300 rounded overflow-hidden aspect-[35/45]">
                          <img src={outputUrl} alt={`Passport photo ${i+1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-2">Dashed lines = cut guides · Print at photo studio or home on photo paper</p>
                  </div>

                  <button onClick={downloadPrintSheet}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-bold py-3.5 hover:opacity-90 transition-opacity">
                    <Download className="h-4 w-4" /> Download Print Sheet — {printCount} Photos · {printPaper}
                  </button>
                </div>
              </div>
            </div>
          </main>
        )}

        <Footer />
      </div>
    </>
  );
};

export default PassportSizePhotoMaker;

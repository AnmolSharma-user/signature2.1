import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactCrop, { type Crop, centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdContainer from "@/components/AdContainer";
import {
  Upload, Download, Camera, CheckCircle, Printer, Sliders,
  RotateCw, FlipHorizontal, Sun, Contrast, Eye, Palette,
  ZoomIn, ZoomOut, RefreshCw, Shield, Sparkles, ChevronDown,
  FileImage, Globe, IndianRupee, Layers
} from "lucide-react";

/* ─── Presets ─── */
type Preset = { id: string; label: string; w: number; h: number; dpi: number; desc: string; flag?: string };
const PRESETS: Preset[] = [
  { id: "india-passport", label: "India Passport", w: 413, h: 531, dpi: 300, desc: "3.5×4.5 cm · 35mm×45mm", flag: "🇮🇳" },
  { id: "india-visa",    label: "India Visa",     w: 413, h: 531, dpi: 300, desc: "3.5×4.5 cm",            flag: "🇮🇳" },
  { id: "usa-passport",  label: "USA Passport",   w: 600, h: 600, dpi: 300, desc: "2×2 inch · 51mm×51mm", flag: "🇺🇸" },
  { id: "uk-passport",   label: "UK Passport",    w: 413, h: 531, dpi: 300, desc: "35×45 mm",             flag: "🇬🇧" },
  { id: "schengen",      label: "Schengen Visa",  w: 413, h: 531, dpi: 300, desc: "35×45 mm",             flag: "🇪🇺" },
  { id: "exam-std",      label: "Exam Standard",  w: 200, h: 230, dpi: 96,  desc: "SSC / IBPS / UPSC",    flag: "📋" },
  { id: "2x2",           label: "2×2 inch",       w: 600, h: 600, dpi: 300, desc: "Standard 2×2",         flag: "📐" },
  { id: "35x45",         label: "35×45 mm",       w: 413, h: 531, dpi: 300, desc: "Most common size",     flag: "📐" },
];

type BgColor = "white" | "blue" | "grey" | "red" | "transparent" | "custom";
type PrintLayout = 2 | 4 | 6 | 8 | 12;

const BG_OPTIONS: { id: BgColor; label: string; value: string; swatch: string }[] = [
  { id: "white",       label: "White",       value: "#ffffff", swatch: "bg-white border-2 border-gray-300" },
  { id: "blue",        label: "Blue",        value: "#4a90d9", swatch: "bg-blue-400" },
  { id: "grey",        label: "Grey",        value: "#cccccc", swatch: "bg-gray-300" },
  { id: "red",         label: "Red",         value: "#c0392b", swatch: "bg-red-600" },
  { id: "transparent", label: "Transparent", value: "transparent", swatch: "bg-checkered" },
  { id: "custom",      label: "Custom",      value: "#ffffff", swatch: "bg-gradient-to-br from-pink-400 to-purple-500" },
];

function centerAspectCrop(w: number, h: number, aspect: number): Crop {
  return centerCrop(makeAspectCrop({ unit: "%", width: 90 }, aspect, w, h), w, h);
}

const PassportSizePhotoMaker = () => {
  /* ── state ── */
  const [phase, setPhase] = useState<"landing" | "editor" | "print">("landing");
  const [imgSrc, setImgSrc]     = useState<string>("");
  const [crop, setCrop]          = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<Crop>();
  const [preset, setPreset]      = useState<Preset>(PRESETS[0]);
  const [bg, setBg]              = useState<BgColor>("white");
  const [customBg, setCustomBg]  = useState("#4a90d9");
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast]     = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [sharpness, setSharpness]   = useState(0);
  const [rotation, setRotation]     = useState(0);
  const [flipH, setFlipH]           = useState(false);
  const [zoom, setZoom]             = useState(100);
  const [outputDataUrl, setOutputDataUrl] = useState<string>("");
  const [outputKB, setOutputKB]          = useState<number>(0);
  const [printLayout, setPrintLayout]    = useState<PrintLayout>(4);
  const [printFormat, setPrintFormat]    = useState<"A4" | "Letter" | "4x6">("A4");
  const [activeTab, setActiveTab]        = useState<"crop" | "adjust" | "bg">("crop");

  const imgRef    = useRef<HTMLImageElement>(null);
  const fileRef   = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const aspect = preset.w / preset.h;

  /* ── load file ── */
  const loadFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImgSrc(e.target?.result as string);
      setCrop(undefined);
      setCompletedCrop(undefined);
      setOutputDataUrl("");
      setPhase("editor");
    };
    reader.readAsDataURL(file);
  }, []);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) loadFile(file);
  };

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, aspect));
  };

  /* ── render to canvas ── */
  const renderOutput = useCallback(() => {
    const image = imgRef.current;
    if (!image || !completedCrop) return;

    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width  = preset.w;
    canvas.height = preset.h;
    const ctx = canvas.getContext("2d")!;

    // Background
    const bgValue = bg === "custom" ? customBg : (BG_OPTIONS.find(b => b.id === bg)?.value ?? "#ffffff");
    if (bg !== "transparent") {
      ctx.fillStyle = bgValue;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    if (flipH) ctx.scale(-1, 1);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    // Apply CSS-like filters via canvas filter
    const filterStr = [
      `brightness(${brightness}%)`,
      `contrast(${contrast}%)`,
      `saturate(${saturation}%)`,
    ].join(" ");
    ctx.filter = filterStr;

    const cropX = completedCrop.x * scaleX;
    const cropY = completedCrop.y * scaleY;
    const cropW = completedCrop.width * scaleX;
    const cropH = completedCrop.height * scaleY;

    ctx.drawImage(image, cropX, cropY, cropW, cropH, 0, 0, canvas.width, canvas.height);

    // Sharpness via unsharp mask approximation
    if (sharpness > 0) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      // Simple contrast boost as sharpness proxy
      const factor = 1 + sharpness / 200;
      for (let i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i]   = Math.min(255, Math.max(0, (imageData.data[i]   - 128) * factor + 128));
        imageData.data[i+1] = Math.min(255, Math.max(0, (imageData.data[i+1] - 128) * factor + 128));
        imageData.data[i+2] = Math.min(255, Math.max(0, (imageData.data[i+2] - 128) * factor + 128));
      }
      ctx.putImageData(imageData, 0, 0);
    }

    ctx.restore();

    const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
    setOutputDataUrl(dataUrl);
    const bytes = Math.round((dataUrl.length - "data:image/jpeg;base64,".length) * 0.75);
    setOutputKB(Math.round(bytes / 1024));
  }, [completedCrop, preset, bg, customBg, brightness, contrast, saturation, sharpness, rotation, flipH]);

  useEffect(() => {
    if (completedCrop?.width && completedCrop?.height) {
      renderOutput();
    }
  }, [completedCrop, renderOutput]);

  /* ── download ── */
  const downloadJPG = () => {
    if (!outputDataUrl) return;
    const a = document.createElement("a");
    a.href = outputDataUrl;
    a.download = `passport-photo-${preset.id}.jpg`;
    a.click();
  };

  const downloadPNG = () => {
    const image = imgRef.current;
    if (!image || !completedCrop) return;
    const canvas = document.createElement("canvas");
    canvas.width  = preset.w;
    canvas.height = preset.h;
    const ctx = canvas.getContext("2d")!;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const bgValue = bg === "custom" ? customBg : (BG_OPTIONS.find(b => b.id === bg)?.value ?? "#ffffff");
    if (bg !== "transparent") { ctx.fillStyle = bgValue; ctx.fillRect(0, 0, canvas.width, canvas.height); }
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;
    ctx.drawImage(image, completedCrop.x*scaleX, completedCrop.y*scaleY, completedCrop.width*scaleX, completedCrop.height*scaleY, 0, 0, canvas.width, canvas.height);
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = `passport-photo-${preset.id}.png`;
    a.click();
  };

  /* ── print layout canvas ── */
  const generatePrintCanvas = useCallback(() => {
    if (!outputDataUrl) return;
    const img = new Image();
    img.onload = () => {
      const FORMATS = { A4: [2480,3508], Letter: [2550,3300], "4x6": [1800,1200] };
      const [pageW, pageH] = FORMATS[printFormat];
      const margin = 80;
      const gap    = 40;
      const cols   = printLayout <= 4 ? 2 : printLayout === 6 ? 3 : printLayout === 8 ? 4 : 4;
      const rows   = Math.ceil(printLayout / cols);
      const cellW  = Math.floor((pageW - margin * 2 - gap * (cols - 1)) / cols);
      const cellH  = Math.round(cellW * (preset.h / preset.w));

      const canvas = document.createElement("canvas");
      canvas.width  = pageW;
      canvas.height = pageH;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, pageW, pageH);

      for (let i = 0; i < printLayout; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x   = margin + col * (cellW + gap);
        const y   = margin + row * (cellH + gap);
        ctx.drawImage(img, x, y, cellW, cellH);
        // cut guide lines
        ctx.strokeStyle = "#cccccc";
        ctx.lineWidth   = 1;
        ctx.setLineDash([4, 4]);
        ctx.strokeRect(x - 2, y - 2, cellW + 4, cellH + 4);
        ctx.setLineDash([]);
      }

      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/jpeg", 0.95);
      a.download = `passport-print-${printLayout}up-${printFormat}.jpg`;
      a.click();
    };
    img.src = outputDataUrl;
  }, [outputDataUrl, printLayout, printFormat, preset]);

  const faqs = [
    { question: "What is a passport size photo?", answer: "A passport size photo is a standardised small photograph used for official identity documents, government applications, and exam registrations. In India, the standard size is 3.5×4.5 cm (approximately 413×531 pixels at 300 DPI) with a plain white background. Different countries have slightly different standards — the US uses a 2×2 inch square format, while most European countries follow the 35×45 mm standard." },
    { question: "How do I make a passport size photo at home?", answer: "Upload your photo using this tool, select the correct preset (India Passport, US Passport, etc.), crop to frame your face correctly, adjust brightness and contrast if needed, choose a white or blue background, then download and print at a photo studio or at home on photo paper. This tool handles all resizing and formatting automatically — no Photoshop needed." },
    { question: "What is the background colour for Indian passport photo?", answer: "The official Indian passport photo requirement is a plain white background. Some exam portals also accept light grey. For visa applications to specific countries (like USA and Canada), a plain white background is mandatory. Our background changer lets you select white, blue, grey, or any custom colour in one click." },
    { question: "Is this passport photo maker free?", answer: "Yes — completely free. There are no hidden charges, no account required, and no watermarks on downloads. All photo processing happens in your browser using the Canvas API, so your photo is never uploaded to any server." },
    { question: "Can I print multiple passport photos on one sheet?", answer: "Yes. After editing your photo, switch to the Print Layout tab to generate a printable sheet with 2, 4, 6, 8, or 12 photos arranged on A4, Letter, or 4×6 paper with cutting guides. Download as JPG and take it to any print shop or print at home." },
    { question: "What DPI should a passport photo be?", answer: "Printed passport photos should be 300 DPI for crisp, sharp prints. This tool outputs photos at 300 DPI when using the India Passport, USA Passport, or other travel document presets. For digital-only use (exam portals, online applications), DPI does not matter — only pixel dimensions and file size matter." },
    { question: "How is face detection used in this tool?", answer: "When you upload a photo, the crop guide is automatically centered in the image to help you frame your face correctly. Drag the crop handles to adjust. The tool enforces the correct aspect ratio for your selected preset so your final photo is always the right shape." },
    { question: "What file formats can I download?", answer: "You can download your passport photo as JPG (recommended — smallest file size, accepted by all portals) or PNG (transparent background support for design use). For print sheets, download as JPG and take to any photo print service." },
  ];

  const howToSteps = [
    { text: "Upload your photo using drag & drop, camera, or gallery" },
    { text: "Select the passport size preset for your country or exam" },
    { text: "Crop the photo to frame your face using the crop handles" },
    { text: "Adjust brightness, contrast, and background colour if needed" },
    { text: "Preview the final result and download as JPG or PNG" },
    { text: "Optionally generate a printable sheet with 2–12 photos" },
  ];

  /* ─── RENDER ─── */
  return (
    <>
      <SEOHead
        title="Passport Size Photo Maker Online Free — Crop, Resize & Download"
        description="Make a passport size photo online free. Supports India Passport (3.5×4.5cm), US Passport (2×2 inch), Schengen Visa, exam photos. Crop, adjust background, download JPG/PNG. Print-ready 300 DPI. No upload to server."
        canonicalUrl="https://signatureresize.in/passport-size-photo-maker"
        keywords="passport size photo maker, passport size photo online free, passport photo maker india, how to make passport size photo, passport photo online, passport size photo background, 3.5x4.5 cm photo, 35x45mm photo maker"
        ogType="website"
      />

      {/* Inline schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        { "@context":"https://schema.org","@type":"SoftwareApplication","name":"Passport Size Photo Maker","applicationCategory":"MultimediaApplication","operatingSystem":"Any","offers":{"@type":"Offer","price":"0","priceCurrency":"INR"},"url":"https://signatureresize.in/passport-size-photo-maker","description":"Free online passport size photo maker with crop, background changer, adjustments and printable sheet generator." },
        { "@context":"https://schema.org","@type":"FAQPage","mainEntity": faqs.map(f => ({ "@type":"Question","name":f.question,"acceptedAnswer":{"@type":"Answer","text":f.answer} })) },
        { "@context":"https://schema.org","@type":"HowTo","name":"How to Make a Passport Size Photo Online","step": howToSteps.map((s,i) => ({ "@type":"HowToStep","position":i+1,"text":s.text })) },
      ]) }} />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />

        {/* ══ LANDING ══ */}
        {phase === "landing" && (
          <>
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-purple-900 text-white pt-12 pb-20 sm:pt-16 sm:pb-28">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
              <div className="container mx-auto px-4 relative z-10">
                <Breadcrumbs items={[{ name: "Passport Size Photo Maker" }]} />
                <div className="max-w-4xl mx-auto text-center mt-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold mb-5">
                    <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
                    Free · No Login · No Upload to Server
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-5">
                    Passport Size Photo Maker{" "}
                    <span className="text-yellow-300">Online Free</span>
                  </h1>
                  <p className="text-purple-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                    Professional passport photos in seconds. Crop precisely, change background, adjust lighting,
                    and download print-ready JPG or PNG — all inside your browser, nothing uploaded anywhere.
                  </p>

                  {/* Upload Zone */}
                  <div
                    className="max-w-xl mx-auto rounded-2xl border-2 border-dashed border-white/40 bg-white/10 backdrop-blur p-10 cursor-pointer hover:border-white/70 hover:bg-white/20 transition-all"
                    onDragOver={e => e.preventDefault()}
                    onDrop={onDrop}
                    onClick={() => fileRef.current?.click()}
                    role="button"
                    aria-label="Upload passport photo"
                  >
                    <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={e => e.target.files?.[0] && loadFile(e.target.files[0])} />
                    <input ref={cameraRef} type="file" accept="image/*" capture="user" className="hidden" onChange={e => e.target.files?.[0] && loadFile(e.target.files[0])} />
                    <Upload className="h-12 w-12 text-white/70 mx-auto mb-4" />
                    <p className="text-white font-bold text-lg">Drop your photo here</p>
                    <p className="text-purple-200 text-sm mt-1">or click to browse · JPG, PNG, WEBP, HEIC</p>
                    <div className="mt-5 flex justify-center gap-3">
                      <button
                        onClick={e => { e.stopPropagation(); fileRef.current?.click(); }}
                        className="flex items-center gap-2 rounded-xl bg-white text-primary font-bold px-5 py-2.5 text-sm hover:bg-yellow-50 transition-colors"
                      >
                        <FileImage className="h-4 w-4" /> From Gallery
                      </button>
                      <button
                        onClick={e => { e.stopPropagation(); cameraRef.current?.click(); }}
                        className="flex items-center gap-2 rounded-xl bg-white/20 text-white font-bold px-5 py-2.5 text-sm hover:bg-white/30 transition-colors border border-white/30"
                      >
                        <Camera className="h-4 w-4" /> Use Camera
                      </button>
                    </div>
                  </div>

                  {/* Quick preset pills */}
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {PRESETS.map(p => (
                      <button key={p.id} onClick={() => { setPreset(p); fileRef.current?.click(); }}
                        className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-medium hover:bg-white/20 transition-colors">
                        {p.flag} {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Trust bar */}
            <div className="bg-card border-b border-border py-3">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
                  {[
                    [Shield, "No upload to server — 100% private"],
                    [CheckCircle, "300 DPI print-ready output"],
                    [Printer, "Print layouts: 2, 4, 6, 8, 12 photos"],
                    [Globe, "India, USA, UK, Schengen presets"],
                  ].map(([Icon, text], i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <Icon className="h-3.5 w-3.5 text-primary" />{text}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* How it works */}
            <section className="py-14 bg-background">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">How It Works</h2>
                  <p className="text-muted-foreground text-center text-sm mb-10">Three steps to a perfect passport photo</p>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {[
                      { n:"1", icon: Upload, title: "Upload Your Photo", desc: "Drag & drop, pick from gallery, or take a selfie. Any format, any size accepted." },
                      { n:"2", icon: Sliders, title: "Crop & Adjust", desc: "Select your country preset, crop precisely, change background, adjust brightness and contrast." },
                      { n:"3", icon: Download, title: "Download & Print", desc: "Download as JPG or PNG. Generate a printable sheet with cutting guides for photo studios." },
                    ].map(({ n, icon: Icon, title, desc }) => (
                      <div key={n} className="rounded-2xl border border-border bg-card p-6 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-xs font-bold text-primary mb-1">Step {n}</div>
                        <h3 className="font-bold text-foreground mb-2">{title}</h3>
                        <p className="text-sm text-muted-foreground">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="py-14 bg-accent/20">
              <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">Everything You Need</h2>
                  <p className="text-muted-foreground text-center text-sm mb-10">Professional tools, completely free</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { icon: Globe,          title: "Country Presets",      desc: "India, USA, UK, Schengen, EU — correct pixel dimensions for every standard." },
                      { icon: Palette,        title: "Background Changer",   desc: "Switch to white, blue, grey, red or any custom hex colour in one click." },
                      { icon: Sun,            title: "Photo Adjustments",    desc: "Brightness, contrast, saturation, sharpness — get your photo looking its best." },
                      { icon: RotateCw,       title: "Rotate & Flip",        desc: "Fix portrait/landscape orientation and mirror the image if needed." },
                      { icon: Printer,        title: "Print Layout",         desc: "2, 4, 6, 8 or 12 photos on A4/Letter/4×6 with dashed cutting guides." },
                      { icon: Download,       title: "JPG & PNG Download",   desc: "High-quality JPG for portals, PNG with transparency for design use." },
                      { icon: Shield,         title: "100% Private",         desc: "Canvas-based processing. Your photo never leaves your device." },
                      { icon: Layers,         title: "Exam Presets",         desc: "SSC, IBPS, UPSC, RRB, NEET — one-click resize to exact exam portal dimensions." },
                      { icon: Sparkles,       title: "No Account Needed",    desc: "Open, use, download. No email, no sign-up, no watermark. Ever." },
                    ].map(({ icon: Icon, title, desc }) => (
                      <div key={title} className="rounded-xl border border-border bg-card p-5 flex gap-4">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm text-foreground">{title}</h3>
                          <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Presets table */}
            <section className="py-14 bg-background">
              <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground text-center mb-2">Supported Passport Photo Sizes</h2>
                <p className="text-sm text-muted-foreground text-center mb-8">All major international standards built in</p>
                <div className="overflow-x-auto rounded-2xl border border-border">
                  <table className="w-full text-sm border-collapse">
                    <thead><tr className="bg-gradient-to-r from-primary to-purple-700 text-white">
                      <th className="p-3 text-left">Country / Use</th>
                      <th className="p-3 text-left">Size</th>
                      <th className="p-3 text-left">Pixels</th>
                      <th className="p-3 text-left">DPI</th>
                    </tr></thead>
                    <tbody className="divide-y divide-border">
                      {[
                        ["🇮🇳 India Passport & Visa",  "3.5×4.5 cm", "413×531 px", "300"],
                        ["🇺🇸 US Passport / DS-160",   "2×2 inch",   "600×600 px", "300"],
                        ["🇬🇧 UK Passport",             "35×45 mm",   "413×531 px", "300"],
                        ["🇪🇺 Schengen Visa",           "35×45 mm",   "413×531 px", "300"],
                        ["📋 Indian Exam Portals",      "200×230 px", "200×230 px", "96"],
                        ["📐 Standard 2×2 inch",        "2×2 inch",   "600×600 px", "300"],
                      ].map(([country, size, px, dpi]) => (
                        <tr key={country} className="hover:bg-muted/40">
                          <td className="p-3 font-medium text-foreground">{country}</td>
                          <td className="p-3 text-muted-foreground">{size}</td>
                          <td className="p-3 text-muted-foreground">{px}</td>
                          <td className="p-3 text-muted-foreground">{dpi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <AdContainer type="inarticle" className="container mx-auto px-4 max-w-4xl mb-6" />

            {/* SEO content */}
            <section className="py-10 bg-card/50">
              <div className="container mx-auto px-4 max-w-3xl space-y-6 text-sm text-muted-foreground leading-relaxed">
                <h2 className="text-xl font-bold text-foreground">What is a Passport Size Photo Maker?</h2>
                <p>A passport size photo maker is an online tool that lets you take any photograph and convert it into the precise dimensions required for passports, visas, and government applications. Unlike general image editors, a good passport photo tool understands the specific requirements for each country and use case — the exact millimetre dimensions, the pixel density for print, the background colour rules, and the file size limits for digital portals.</p>
                <p>This tool goes further than a simple resizer. It includes a professional crop editor so you can frame your face correctly within the photo area, a background colour changer for switching between white, blue, and grey backgrounds, and image adjustment controls for improving the lighting and colour of your photo before download. The result is a photo that meets official requirements and looks good — not just a mechanically cropped version of whatever you uploaded.</p>
                <h2 className="text-xl font-bold text-foreground">Official Indian Passport Photo Guidelines</h2>
                <p>The Indian government requires passport photographs to be 3.5 cm wide and 4.5 cm tall (35×45 mm), printed at 300 DPI on photo paper. The background must be plain white. Your face should occupy at least 70–80% of the frame. Both ears must be visible. Eyes should be open and looking directly at the camera. No caps, hats, or dark sunglasses are allowed — prescription glasses are permitted if you normally wear them. The photo must be recent, taken within the last six months.</p>
                <p>For the online passport application portal (Passport Seva), the digital upload requires a JPG file, generally under 1MB in file size, with the same visual guidelines applying. This tool's India Passport preset outputs exactly 413×531 pixels — the correct 300 DPI equivalent of the 35×45 mm print dimension.</p>
              </div>
            </section>

            <FAQSection faqs={faqs} />
            <AdContainer type="multiplex" className="container mx-auto px-4 mb-4" />
          </>
        )}

        {/* ══ EDITOR ══ */}
        {phase === "editor" && imgSrc && (
          <main className="py-8 md:py-10 flex-1">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                  <div>
                    <h1 className="text-xl font-bold text-foreground">Passport Size Photo Maker</h1>
                    <p className="text-xs text-muted-foreground">Crop, adjust, and download your photo</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setPhase("landing")} className="rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" /> New Photo
                    </button>
                    {outputDataUrl && (
                      <button onClick={() => setPhase("print")} className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                        <Printer className="h-4 w-4" /> Print Layout
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid lg:grid-cols-[1fr_320px] gap-6">
                  {/* LEFT — crop area */}
                  <div className="space-y-4">
                    {/* Tabs */}
                    <div className="flex gap-2 bg-muted/50 rounded-xl p-1">
                      {([["crop","Crop & Rotate",Eye],["adjust","Adjustments",Sliders],["bg","Background",Palette]] as const).map(([key, label, Icon]) => (
                        <button key={key} onClick={() => setActiveTab(key as typeof activeTab)}
                          className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-semibold transition-all ${activeTab === key ? "bg-card shadow text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                          <Icon className="h-4 w-4" />{label}
                        </button>
                      ))}
                    </div>

                    {/* Crop area */}
                    <div className="rounded-2xl border border-border bg-card overflow-hidden">
                      <div className="p-4" style={{ transform: `scale(${zoom/100})`, transformOrigin: "top left" }}>
                        <ReactCrop
                          crop={crop}
                          onChange={(_, pct) => setCrop(pct)}
                          onComplete={(_, pct) => setCompletedCrop(pct)}
                          aspect={aspect}
                          minWidth={50}
                        >
                          <img
                            ref={imgRef}
                            src={imgSrc}
                            alt="Uploaded passport photo for editing"
                            onLoad={onImageLoad}
                            style={{
                              maxHeight: "480px",
                              width: "100%",
                              objectFit: "contain",
                              filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`,
                              transform: `rotate(${rotation}deg) scaleX(${flipH ? -1 : 1})`,
                            }}
                          />
                        </ReactCrop>
                      </div>
                    </div>

                    {/* Crop controls */}
                    {activeTab === "crop" && (
                      <div className="rounded-2xl border border-border bg-card p-5 space-y-4">
                        <div className="flex gap-2 flex-wrap">
                          {[
                            { icon: RotateCw, label: "Rotate 90°", onClick: () => setRotation(r => (r + 90) % 360) },
                            { icon: FlipHorizontal, label: "Flip", onClick: () => setFlipH(f => !f) },
                          ].map(({ icon: Icon, label, onClick }) => (
                            <button key={label} onClick={onClick} className="flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors">
                              <Icon className="h-4 w-4" />{label}
                            </button>
                          ))}
                          <div className="flex items-center gap-2 ml-auto">
                            <button onClick={() => setZoom(z => Math.max(50, z - 10))} className="rounded-lg border border-border p-2 hover:bg-muted"><ZoomOut className="h-4 w-4" /></button>
                            <span className="text-xs font-mono w-10 text-center">{zoom}%</span>
                            <button onClick={() => setZoom(z => Math.min(200, z + 10))} className="rounded-lg border border-border p-2 hover:bg-muted"><ZoomIn className="h-4 w-4" /></button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Adjustments */}
                    {activeTab === "adjust" && (
                      <div className="rounded-2xl border border-border bg-card p-5 space-y-5">
                        {([
                          ["Brightness", brightness, setBrightness, 50, 200],
                          ["Contrast",   contrast,   setContrast,   50, 200],
                          ["Saturation", saturation, setSaturation, 0,  200],
                          ["Sharpness",  sharpness,  setSharpness,  0,  100],
                        ] as [string, number, (v:number)=>void, number, number][]).map(([label, val, setter, min, max]) => (
                          <div key={label}>
                            <div className="flex justify-between mb-1">
                              <label className="text-sm font-medium text-foreground">{label}</label>
                              <span className="text-xs text-muted-foreground font-mono">{val}{label !== "Sharpness" ? "%" : ""}</span>
                            </div>
                            <input type="range" min={min} max={max} value={val}
                              onChange={e => setter(Number(e.target.value))}
                              className="w-full accent-primary" />
                          </div>
                        ))}
                        <button onClick={() => { setBrightness(100); setContrast(100); setSaturation(100); setSharpness(0); }}
                          className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1">
                          <RefreshCw className="h-3 w-3" /> Reset adjustments
                        </button>
                      </div>
                    )}

                    {/* Background */}
                    {activeTab === "bg" && (
                      <div className="rounded-2xl border border-border bg-card p-5 space-y-4">
                        <p className="text-sm font-semibold text-foreground">Background Colour</p>
                        <div className="grid grid-cols-3 gap-3">
                          {BG_OPTIONS.map(opt => (
                            <button key={opt.id} onClick={() => setBg(opt.id)}
                              className={`rounded-xl border-2 p-3 flex flex-col items-center gap-2 transition-all ${bg === opt.id ? "border-primary" : "border-border hover:border-primary/50"}`}>
                              {opt.id === "transparent"
                                ? <div className="h-8 w-8 rounded-full border border-gray-300" style={{ background: "repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 0 0 / 12px 12px" }} />
                                : opt.id === "custom"
                                  ? <div className="h-8 w-8 rounded-full" style={{ background: customBg }} />
                                  : <div className="h-8 w-8 rounded-full border border-gray-200" style={{ background: opt.value }} />}
                              <span className="text-xs font-medium text-foreground">{opt.label}</span>
                            </button>
                          ))}
                        </div>
                        {bg === "custom" && (
                          <div className="flex items-center gap-3">
                            <label className="text-sm text-foreground">Custom:</label>
                            <input type="color" value={customBg} onChange={e => setCustomBg(e.target.value)} className="h-9 w-16 rounded cursor-pointer border border-border" />
                            <span className="text-xs font-mono text-muted-foreground">{customBg}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* RIGHT — preset + preview */}
                  <div className="space-y-4">
                    {/* Preset selector */}
                    <div className="rounded-2xl border border-border bg-card p-5">
                      <p className="text-sm font-bold text-foreground mb-3">Photo Preset</p>
                      <div className="space-y-2">
                        {PRESETS.map(p => (
                          <button key={p.id} onClick={() => { setPreset(p); setCrop(undefined); if (imgRef.current) { const {width, height} = imgRef.current; setCrop(centerAspectCrop(width, height, p.w/p.h)); } }}
                            className={`w-full rounded-xl border text-left px-3 py-2.5 transition-all ${preset.id === p.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-foreground">{p.flag} {p.label}</span>
                              {preset.id === p.id && <CheckCircle className="h-4 w-4 text-primary" />}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5">{p.desc} · {p.w}×{p.h}px</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Preview */}
                    {outputDataUrl ? (
                      <div className="rounded-2xl border border-border bg-card p-5">
                        <p className="text-sm font-bold text-foreground mb-3">Preview</p>
                        <div className="rounded-xl overflow-hidden border border-border mx-auto" style={{ width: "100%", maxWidth: 200 }}>
                          <img src={outputDataUrl} alt="Passport size photo preview" className="w-full h-auto" />
                        </div>
                        <p className="text-xs text-muted-foreground text-center mt-2">{preset.w}×{preset.h}px · ~{outputKB} KB</p>

                        {/* Download */}
                        <div className="mt-4 space-y-2">
                          <button onClick={downloadJPG} className="w-full rounded-xl bg-primary text-primary-foreground font-bold py-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                            <Download className="h-4 w-4" /> Download JPG
                          </button>
                          <button onClick={downloadPNG} className="w-full rounded-xl border border-border py-2.5 text-sm font-medium hover:bg-muted flex items-center justify-center gap-2 transition-colors">
                            <Download className="h-4 w-4" /> Download PNG
                          </button>
                          <button onClick={() => setPhase("print")} className="w-full rounded-xl border border-border py-2.5 text-sm font-medium hover:bg-muted flex items-center justify-center gap-2 transition-colors">
                            <Printer className="h-4 w-4" /> Print Layout →
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center">
                        <Eye className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Crop your photo on the left to see a preview here</p>
                      </div>
                    )}

                    {/* Privacy badge */}
                    <div className="rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-4 flex gap-3">
                      <Shield className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-green-700 dark:text-green-400 leading-relaxed">
                        <strong className="text-green-800 dark:text-green-300">100% Private.</strong> Your photo is processed in-browser using the Canvas API. Nothing is ever uploaded. Turn off your internet — the tool still works.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* ══ PRINT LAYOUT ══ */}
        {phase === "print" && outputDataUrl && (
          <main className="py-8 flex-1">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                  <div>
                    <h1 className="text-xl font-bold text-foreground">Print Layout</h1>
                    <p className="text-xs text-muted-foreground">Generate a printable sheet with cutting guides</p>
                  </div>
                  <button onClick={() => setPhase("editor")} className="rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors">
                    ← Back to Editor
                  </button>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
                  {/* Options */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-3">Number of Photos</p>
                      <div className="grid grid-cols-3 gap-2">
                        {([2,4,6,8,12] as PrintLayout[]).map(n => (
                          <button key={n} onClick={() => setPrintLayout(n)}
                            className={`rounded-xl border py-2.5 text-sm font-bold transition-all ${printLayout === n ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-primary/50"}`}>
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-3">Paper Size</p>
                      <div className="space-y-2">
                        {(["A4","Letter","4x6"] as const).map(f => (
                          <button key={f} onClick={() => setPrintFormat(f)}
                            className={`w-full rounded-xl border py-2.5 text-sm font-medium transition-all flex items-center justify-between px-4 ${printFormat === f ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>
                            <span>{f === "A4" ? "A4 (210×297mm)" : f === "Letter" ? "Letter (8.5×11 inch)" : "4×6 inch"}</span>
                            {printFormat === f && <CheckCircle className="h-4 w-4 text-primary" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Preview grid */}
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="text-xs text-muted-foreground text-center mb-3">Preview ({printLayout} photos on {printFormat})</p>
                    <div className={`grid gap-2 mx-auto max-w-sm ${printLayout <= 4 ? "grid-cols-2" : printLayout === 6 ? "grid-cols-3" : "grid-cols-4"}`}>
                      {Array.from({ length: printLayout }).map((_, i) => (
                        <div key={i} className="border-2 border-dashed border-gray-300 rounded overflow-hidden">
                          <img src={outputDataUrl} alt={`Passport photo ${i+1}`} className="w-full h-auto" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button onClick={generatePrintCanvas} className="w-full rounded-xl bg-primary text-primary-foreground font-bold py-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                    <Download className="h-4 w-4" /> Download Print Sheet ({printLayout} photos, {printFormat})
                  </button>
                  <p className="text-xs text-muted-foreground text-center">Dashed lines are cut guides. Print at a photo studio or home printer on photo paper.</p>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* Related tools */}
        {phase === "landing" && (
          <section className="py-10 bg-background border-t border-border">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-lg font-bold text-foreground mb-4">Related Tools</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                {[
                  { to: "/compress-image-to-kb",              label: "Compress Image to KB" },
                  { to: "/ibps-photo-signature-resize",       label: "IBPS PO Photo Resize" },
                  { to: "/ssc-cgl-photo-signature-resize",    label: "SSC CGL Photo Resize" },
                  { to: "/sbi-po-2026-photo-signature-resize",label: "SBI PO Photo Resize" },
                  { to: "/rrb-group-d-photo-signature-resize",label: "RRB Group D Photo" },
                  { to: "/nda-2026-photo-signature-resize",   label: "NDA 2026 Photo" },
                ].map(({ to, label }) => (
                  <Link key={to} to={to} className="rounded-xl border border-border bg-card p-3 hover:border-primary hover:bg-primary/5 transition-all text-center text-xs font-semibold text-foreground">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
};

export default PassportSizePhotoMaker;

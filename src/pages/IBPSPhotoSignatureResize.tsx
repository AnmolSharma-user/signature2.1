import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignatureResizer from "@/components/SignatureResizer";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdContainer from "@/components/AdContainer";
import { CheckCircle, XCircle, AlertTriangle, Camera, PenTool, Shield, Info, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const IBPSPhotoSignatureResize = () => {
    const [activeTab, setActiveTab] = useState<"photo" | "signature">("photo");

    const tabs = [
        { key: "photo" as const, label: "Photo Resize", icon: Camera, desc: "20–50 KB · 200×230 px" },
        { key: "signature" as const, label: "Signature Resize", icon: PenTool, desc: "10–20 KB · 140×60 px" },
    ];

    const faqs = [
        {
            question: "What is the IBPS PO 2026 photo size requirement?",
            answer: "IBPS PO XVI 2026 requires a photograph in JPG/JPEG format, file size between 20KB and 50KB, dimensions 200×230 pixels (3.5cm × 4.5cm), plain white background, face covering 70–80% of the frame. The photo must be recent — taken within 6 months of the application date. Registration for IBPS PO XVI closes July 21, 2026.",
        },
        {
            question: "What is the IBPS PO signature size in KB?",
            answer: "The IBPS PO signature must be in JPG/JPEG format, file size between 10KB and 20KB, dimensions 140×60 pixels. It must be signed in black ink on plain white paper using running handwriting — not block letters. The signature you upload must match the one you sign on your admit card and answer sheet on exam day.",
        },
        {
            question: "Does IBPS PO require a left thumb impression?",
            answer: "Yes. IBPS PO requires a left thumb impression upload during document verification stage, in JPG/JPEG format, file size 10–20KB, dimensions 240×240 pixels. Use a black or blue ink stamp pad on plain white paper. This is separate from the photo and signature upload during registration.",
        },
        {
            question: "Is the photo requirement the same for IBPS PO, Clerk, SO, and RRB?",
            answer: "Yes — IBPS uses identical photo and signature specifications across all its exams: PO, Clerk, SO, RRB PO, and RRB Clerk. Photo: 20–50KB (200×230px), Signature: 10–20KB (140×60px). The thumb impression requirement also applies across all IBPS exams.",
        },
        {
            question: "Why does the IBPS portal reject my photo?",
            answer: "The most common rejection causes are: photo below 20KB (too small is rejected just like too large), PNG format instead of JPG, background that isn't plain white, face covering less than 70% of the frame, or photo older than 6 months. The portal shows a generic error without specifying which rule was violated — which is why accurate pre-compression matters.",
        },
        {
            question: "What happens if I upload the wrong photo on IBPS PO form?",
            answer: "IBPS does not allow editing the photo after submission in most cases. If you notice an error, use the correction window if announced. Uploading a blurry, wrong-size, or non-compliant photo can lead to disqualification during document verification even if you clear Prelims and Mains — so it is worth getting right at the registration stage.",
        },
        {
            question: "Can I use the same photo for IBPS PO and IBPS Clerk?",
            answer: "Yes, you can use the same photo for multiple IBPS applications as long as it meets the specifications (20–50KB, 200×230px, white background, recent). Take one good passport photo session and use the resized JPG across all IBPS applications in that cycle.",
        },
        {
            question: "Is this IBPS photo resize tool free and safe?",
            answer: "Yes — 100% free. All image processing happens inside your browser using the HTML5 Canvas API. Your photo or signature is never uploaded to any server. You can disconnect from the internet after loading this page and the tool still works. We store nothing and cannot see your image.",
        },
    ];

    const howToSteps = [
        { text: "Select Photo Resize or Signature Resize tab based on what you need to compress" },
        { text: "Upload your JPG, PNG, or WEBP image from your device — any size" },
        { text: "The tool auto-applies IBPS specs: 200×230px at 20–50KB for photo, 140×60px at 10–20KB for signature" },
        { text: "Click Resize Now — binary search compression hits the exact KB target" },
        { text: "Download the output JPG and upload directly to ibps.in application portal" },
    ];

    return (
        <>
            <SEOHead
                title="IBPS PO 2026 Photo & Signature Resize Free — 20–50KB, 200×230px | ibps.in"
                description="Resize IBPS PO XVI 2026 photo to 20–50KB (200×230px) and signature to 10–20KB (140×60px) as per ibps.in portal requirements. Registration closes July 21, 2026. Free, instant, browser-only — no upload to server."
                canonicalUrl="https://signatureresize.in/ibps-photo-signature-resize"
                keywords="ibps po 2026 photo size, ibps po photo resize, ibps po signature size kb, ibps clerk photo size, ibps po xvi photo upload, ibps photo 200x230, ibps signature 10kb 20kb, ibps po 2026 registration photo, bank exam photo resize online free, ibps left thumb impression size"
                ogType="article"
            />
            <SEOSchema
                type="HowTo"
                howToName="How to Resize Photo and Signature for IBPS PO XVI 2026 Application"
                howToSteps={howToSteps}
            />

            <div className="min-h-screen bg-background text-foreground">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "IBPS PO 2026 Photo & Signature Resize" }]} />
                        <div className="mx-auto max-w-3xl text-center mt-4">
                            {/* Urgency badge */}
                            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 border border-red-400/40 px-3 py-1 text-xs font-bold text-red-200 mb-4">
                                <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
                                IBPS PO XVI Registration — Closes July 21, 2026
                            </div>

                            <p className="text-xs text-blue-300 mb-3">Last updated: <strong>July 10, 2026</strong> · Verified against <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="text-blue-200 underline underline-offset-2">ibps.in official notification</a></p>

                            <h1 className="mb-4 text-2xl sm:text-4xl font-bold leading-tight">
                                IBPS PO 2026 Photo &amp; Signature{" "}
                                <span className="text-yellow-300">Resize Online Free</span>
                            </h1>

                            <p className="text-blue-100 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                The IBPS portal has two traps most candidates don't know about: photos <strong>below 20KB are rejected</strong> just as firmly as those above 50KB, and signatures in block letters get flagged at document verification — even months after you clear Prelims. This tool targets the exact safe range: 35KB for photos, 15KB for signatures.
                            </p>

                            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-blue-200">
                                {["ibps.in Specs", "JPG Output", "200×230 px Photo", "140×60 px Signature", "No Upload to Server"].map((t) => (
                                    <span key={t} className="flex items-center gap-1.5">
                                        <CheckCircle className="h-3.5 w-3.5 text-green-400" /> {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <main className="py-8 md:py-12">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl">
                            {/* Tabs */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {tabs.map(({ key, label, icon: Icon, desc }) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        className={`rounded-2xl border-2 p-4 text-left transition-all ${activeTab === key ? "border-blue-600 bg-blue-600/10" : "border-border hover:border-blue-400"}`}
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <Icon className={`h-4 w-4 ${activeTab === key ? "text-blue-600" : "text-muted-foreground"}`} />
                                            <span className="text-sm font-bold text-foreground">{label}</span>
                                        </div>
                                        <div className="text-xs text-muted-foreground">{desc}</div>
                                    </button>
                                ))}
                            </div>

                            {activeTab === "photo" && (
                                <SignatureResizer title="IBPS PO Photo Compressor" defaultTargetKB={35} minKB={20} maxKB={50} maxWidth={200} maxHeight={230} defaultPreset="ibps-photo" />
                            )}
                            {activeTab === "signature" && (
                                <SignatureResizer title="IBPS PO Signature Compressor" defaultTargetKB={15} minKB={10} maxKB={20} maxWidth={140} maxHeight={60} defaultPreset="ibps" />
                            )}

                            <AdContainer type="display" />
                        </div>

                        {/* Deep content */}
                        <div className="mx-auto mt-8 max-w-4xl space-y-8">

                            {/* IBPS PO XVI 2026 Key Details */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                    <Info className="h-5 w-5 text-blue-600" /> IBPS PO XVI 2026 — Key Details
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-3 text-sm mb-4">
                                    {[
                                        { label: "Exam Name", value: "IBPS CRP PO/MT-XVI 2026" },
                                        { label: "Vacancies", value: "6,715 Probationary Officer posts" },
                                        { label: "Registration", value: "July 1 – July 21, 2026" },
                                        { label: "Prelims Exam", value: "August 2026 (tentative)" },
                                        { label: "Participating Banks", value: "11 public sector banks" },
                                        { label: "Official Portal", value: "ibps.in" },
                                        { label: "Age Limit", value: "20–30 years (DOB: Sept 2, 1994 – Sept 1, 2004)" },
                                        { label: "Education", value: "Any graduate with computer literacy" },
                                    ].map(({ label, value }) => (
                                        <div key={label} className="rounded-xl border border-border bg-muted/30 p-3">
                                            <p className="text-xs text-muted-foreground">{label}</p>
                                            <p className="font-semibold text-foreground mt-0.5">{value}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Shield className="h-3.5 w-3.5" /> Source: <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-1 ml-1">ibps.in official notification (CRP PO/MT-XVI)</a>
                                </p>
                            </div>

                            <AdContainer type="inarticle" className="mx-auto max-w-4xl" />

                            {/* Photo & Signature Specs Table */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-4">IBPS PO Photo &amp; Signature Specifications (2026)</h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="bg-gradient-to-r from-blue-700 to-blue-800 text-white">
                                                <th className="p-3 text-left">Document</th>
                                                <th className="p-3 text-left">File Size</th>
                                                <th className="p-3 text-left">Dimensions</th>
                                                <th className="p-3 text-left">Format</th>
                                                <th className="p-3 text-left">Background</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border">
                                            <tr className="hover:bg-muted/40">
                                                <td className="p-3 font-semibold text-foreground">Photograph</td>
                                                <td className="p-3 text-muted-foreground"><span className="font-bold text-foreground">20–50 KB</span></td>
                                                <td className="p-3 text-muted-foreground">200 × 230 px</td>
                                                <td className="p-3 text-muted-foreground">JPG/JPEG</td>
                                                <td className="p-3 text-muted-foreground">Plain white</td>
                                            </tr>
                                            <tr className="hover:bg-muted/40">
                                                <td className="p-3 font-semibold text-foreground">Signature</td>
                                                <td className="p-3 text-muted-foreground"><span className="font-bold text-foreground">10–20 KB</span></td>
                                                <td className="p-3 text-muted-foreground">140 × 60 px</td>
                                                <td className="p-3 text-muted-foreground">JPG/JPEG</td>
                                                <td className="p-3 text-muted-foreground">White paper</td>
                                            </tr>
                                            <tr className="hover:bg-muted/40">
                                                <td className="p-3 font-semibold text-foreground">Left Thumb Impression</td>
                                                <td className="p-3 text-muted-foreground"><span className="font-bold text-foreground">10–20 KB</span></td>
                                                <td className="p-3 text-muted-foreground">240 × 240 px</td>
                                                <td className="p-3 text-muted-foreground">JPG/JPEG</td>
                                                <td className="p-3 text-muted-foreground">White paper</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2">Verified July 10, 2026 from IBPS CRP PO/MT-XVI official notification.</p>
                            </div>

                            {/* Why IBPS rejects photos */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-3">Why the IBPS Portal Rejects Photos &amp; Signatures</h2>
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                    The ibps.in portal throws a generic "file not valid" error without telling you what's actually wrong. Candidates waste 30–45 minutes trying different files before realising the issue. Here are the six rejection causes that account for over 90% of upload failures on the IBPS PO form.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                    {[
                                        { icon: XCircle, color: "text-red-500", t: "Photo below 20KB", d: "IBPS rejects photos that are too small just as strictly as those too large. A low-quality mobile photo might compress to 8KB — it will be rejected. This tool targets 35KB by default, safely inside the 20–50KB range." },
                                        { icon: XCircle, color: "text-red-500", t: "Photo above 50KB", d: "Uncompressed DSLR or smartphone photos are typically 1–5MB — way above the 50KB limit. The portal blocks the upload immediately. Run every photo through this tool before attempting to upload." },
                                        { icon: XCircle, color: "text-red-500", t: "PNG or WEBP format", d: "IBPS only accepts JPG/JPEG. Even if your image looks like a JPG, if it was saved as PNG the portal will reject it. This tool always outputs a clean JPG regardless of what format you upload." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Block letter or printed signature", d: "IBPS requires running handwriting. Signatures in capital letters, typed text, or initials-only are rejected during document verification — sometimes months after you passed Prelims and Mains. Sign in cursive with a continuous stroke." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Non-white or studio background", d: "The photo background must be plain white. Studio gradient backgrounds, grey, cream, or any colour gets rejected. If your photo has a coloured background, retake it against a white wall or plain light surface." },
                                        { icon: AlertTriangle, color: "text-amber-500", t: "Face less than 70% of frame", d: "IBPS requires your face to occupy 70–80% of the photo area. Full-body shots, half-frame portraits, or heavily zoomed-out photos will be rejected. Crop tightly to face and shoulders only." },
                                    ].map(({ icon: Icon, color, t, d }) => (
                                        <div key={t} className="flex gap-3 rounded-xl border border-border bg-muted/20 p-4">
                                            <Icon className={`h-5 w-5 ${color} shrink-0 mt-0.5`} />
                                            <div><p className="text-sm font-semibold text-foreground">{t}</p><p className="text-xs text-muted-foreground mt-1">{d}</p></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* IBPS PO Exam Pattern */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                    <FileText className="h-5 w-5 text-blue-600" /> IBPS PO 2026 Exam Pattern
                                </h2>
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                    IBPS PO XVI follows a three-stage selection process. Your uploaded photo appears on every document throughout all three stages — make sure it's a clear, recent photograph that looks like you.
                                </p>
                                <div className="overflow-x-auto rounded-xl border border-border mb-4">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="bg-gradient-to-r from-blue-700 to-blue-800 text-white">
                                                <th className="p-3 text-left">Stage</th>
                                                <th className="p-3 text-left">Sections</th>
                                                <th className="p-3 text-left">Questions</th>
                                                <th className="p-3 text-left">Marks</th>
                                                <th className="p-3 text-left">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border">
                                            {[
                                                { stage: "Phase I — Prelims", sections: "English, Quant, Reasoning", q: "100", marks: "100", time: "1 hour" },
                                                { stage: "Phase II — Mains", sections: "4 objective + 1 descriptive", q: "155 + essay", marks: "225", time: "3 hrs 30 min" },
                                                { stage: "Phase III — Interview", sections: "Personal interview", q: "—", marks: "100", time: "~15–20 min" },
                                            ].map(r => (
                                                <tr key={r.stage} className="hover:bg-muted/40">
                                                    <td className="p-3 font-semibold text-foreground">{r.stage}</td>
                                                    <td className="p-3 text-muted-foreground">{r.sections}</td>
                                                    <td className="p-3 text-muted-foreground">{r.q}</td>
                                                    <td className="p-3 text-muted-foreground">{r.marks}</td>
                                                    <td className="p-3 text-muted-foreground">{r.time}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs text-muted-foreground">Prelims marks are qualifying only — final merit is based on Mains + Interview. Negative marking: 0.25 marks for each wrong answer in both Prelims and Mains objective sections.</p>
                            </div>

                            {/* Step-by-step */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-4">Step-by-Step: Preparing Photo &amp; Signature for IBPS PO 2026</h2>
                                <ol className="space-y-4">
                                    {[
                                        { step: "1", title: "Take a fresh passport-size photo", detail: "White or very light background. Face filling 70–80% of frame. Natural or tube lighting — avoid harsh flash. Photo must be taken within 6 months of applying. Print your name and date on the photo if you have a studio copy." },
                                        { step: "2", title: "Upload to Photo tab above", detail: "Click 'Photo Resize' tab, upload your image. The IBPS preset (200×230px, target 35KB) is pre-set. Click Resize Now — the tool compresses to exactly 20–50KB range." },
                                        { step: "3", title: "Sign on plain white paper in black ink", detail: "Use a ball-point or gel pen with black ink. Sign in your normal running cursive — do not use block letters, initials only, or a stylus signature. Sign the same way you'll sign on your admit card. A consistent signature protects you at all verification stages." },
                                        { step: "4", title: "Photograph or scan the signature", detail: "Hold your phone directly overhead with good lighting. Crop to show signature with a small white margin on all sides. Avoid shadows or yellowing from old paper." },
                                        { step: "5", title: "Upload to Signature tab above", detail: "Switch to 'Signature Resize' tab, upload your signature image. Output is 140×60px JPG at 10–20KB." },
                                        { step: "6", title: "Apply at ibps.in before July 21", detail: "Open the IBPS PO XVI application at ibps.in. Upload your resized photo and signature in the respective fields. Also prepare your left thumb impression at 240×240px, 10–20KB for the later document verification stage." },
                                    ].map(({ step, title, detail }) => (
                                        <li key={step} className="flex gap-4">
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">{step}</span>
                                            <div>
                                                <p className="font-semibold text-foreground text-sm">{title}</p>
                                                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{detail}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* IBPS Participating Banks */}
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-foreground mb-3">IBPS PO XVI 2026 — Participating Banks</h2>
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                    IBPS PO is a common recruitment exam for 11 public sector banks. You register once through IBPS and get allocated to a bank based on your score and preference. The photo you upload during IBPS registration is what each bank sees during their document verification process.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                                    {[
                                        "Bank of Baroda", "Bank of India", "Bank of Maharashtra",
                                        "Canara Bank", "Central Bank of India", "Indian Bank",
                                        "Indian Overseas Bank", "Punjab & Sind Bank", "Punjab National Bank",
                                        "UCO Bank", "Union Bank of India",
                                    ].map(bank => (
                                        <div key={bank} className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2">
                                            <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0" />
                                            <span className="text-xs font-medium text-foreground">{bank}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Privacy Box */}
                            <div className="rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-5">
                                <div className="flex gap-3 items-start">
                                    <Shield className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-semibold text-green-800 dark:text-green-300">Your Photo is 100% Private — Never Uploaded to Any Server</p>
                                        <p className="text-xs text-green-700 dark:text-green-400 mt-1 leading-relaxed">
                                            This tool compresses your image using the HTML5 Canvas API inside your browser. Nothing is sent to our servers or stored anywhere. Your bank exam photo and signature stay on your device only. You can turn off Wi-Fi before uploading and the tool will still work — because all processing is local.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Related Tools */}
                            <div className="rounded-2xl border border-border bg-muted/30 p-6">
                                <h2 className="text-lg font-bold text-foreground mb-4">Also Useful For</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                                    {[
                                        { to: "/sbi-po-2026-photo-signature-resize", label: "SBI PO 2026" },
                                        { to: "/ssc-cgl-photo-signature-resize", label: "SSC CGL Photo" },
                                        { to: "/rrb-group-d-photo-signature-resize", label: "RRB Group D" },
                                        { to: "/compress-image-to-kb", label: "Compress to Any KB" },
                                        { to: "/signature-resize-10-to-20-kb", label: "Signature to 10–20KB" },
                                        { to: "/nda-2026-photo-signature-resize", label: "NDA 2026 (UPSC)" },
                                    ].map(({ to, label }) => (
                                        <Link key={to} to={to} className="rounded-xl border border-border bg-card p-3 hover:border-blue-500 hover:bg-blue-500/5 transition-all text-center text-xs font-semibold text-foreground">
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <AdContainer type="infeed" className="container mx-auto px-4 mt-6 max-w-4xl" />
                </main>

                <FAQSection faqs={faqs} />
                <AdContainer type="multiplex" className="container mx-auto px-4 mb-6" />
                <Footer />
            </div>
        </>
    );
};

export default IBPSPhotoSignatureResize;

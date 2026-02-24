import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Upload, CheckCircle, XCircle, AlertTriangle, RefreshCw, Camera } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";
import FAQSection from "@/components/FAQSection";

type ExamProfile = {
    name: string;
    minW: number; maxW: number;
    minH: number; maxH: number;
    minKB: number; maxKB: number;
    format: string[];
    aspectNote?: string;
};

const EXAM_PROFILES: Record<string, ExamProfile> = {
    "SSC (CGL/CHSL/MTS)": { name: "SSC (CGL/CHSL/MTS)", minW: 100, maxW: 350, minH: 100, maxH: 400, minKB: 4, maxKB: 50, format: ["image/jpeg"] },
    "IBPS (PO/Clerk/SO)": { name: "IBPS (PO/Clerk/SO)", minW: 100, maxW: 350, minH: 100, maxH: 400, minKB: 10, maxKB: 50, format: ["image/jpeg"] },
    "NEET / JEE / CUET (NTA)": { name: "NEET / JEE / CUET (NTA)", minW: 100, maxW: 400, minH: 100, maxH: 450, minKB: 10, maxKB: 200, format: ["image/jpeg"] },
    "UPSC (IAS/IPS)": { name: "UPSC (IAS/IPS)", minW: 150, maxW: 350, minH: 150, maxH: 400, minKB: 10, maxKB: 100, format: ["image/jpeg"] },
    "RRB / Railway": { name: "RRB / Railway", minW: 100, maxW: 350, minH: 100, maxH: 400, minKB: 10, maxKB: 50, format: ["image/jpeg"] },
    "Agniveer / Agnipath": { name: "Agniveer / Agnipath", minW: 190, maxW: 210, minH: 220, maxH: 240, minKB: 10, maxKB: 40, format: ["image/jpeg"] },
    "SBI (PO/Clerk)": { name: "SBI (PO/Clerk)", minW: 100, maxW: 350, minH: 100, maxH: 400, minKB: 10, maxKB: 50, format: ["image/jpeg"] },
    "PAN Card (NSDL/UTI)": { name: "PAN Card (NSDL/UTI)", minW: 150, maxW: 300, minH: 150, maxH: 350, minKB: 10, maxKB: 50, format: ["image/jpeg"] },
    "US Visa DS-160": { name: "US Visa DS-160", minW: 600, maxW: 1800, minH: 600, maxH: 1800, minKB: 1, maxKB: 240, format: ["image/jpeg"], aspectNote: "Must be square (1:1 ratio)" },
    "USCIS (I-485/N-400)": { name: "USCIS (I-485/N-400)", minW: 600, maxW: 1800, minH: 600, maxH: 1800, minKB: 1, maxKB: 240, format: ["image/jpeg"], aspectNote: "Must be square (1:1 ratio)" },
};

type CheckResult = {
    label: string;
    pass: boolean;
    actual: string;
    expected: string;
};

const ExamPhotoCheckerTool = () => {
    const [selectedExam, setSelectedExam] = useState<string>("SSC (CGL/CHSL/MTS)");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [results, setResults] = useState<CheckResult[] | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [overallPass, setOverallPass] = useState<boolean | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const faqs = [
        {
            question: "What does the Exam Photo Checker do?",
            answer: "It checks if your uploaded photo meets the specific requirements (dimensions, file size, format) for the exam you select. It gives you an instant pass or fail for each requirement so you know exactly what to fix.",
        },
        {
            question: "Is this tool accurate for all exams?",
            answer: "The checker uses specifications based on official exam notifications. Requirements can change each notification cycle, so always verify with the official exam portal. Use this as a quick sanity check.",
        },
        {
            question: "What if my photo fails the check?",
            answer: "Use our free Signature Resize Tool to fix dimensions and file size, or our Passport Photo Maker to create a correctly sized photo. All links are provided below.",
        },
        {
            question: "Does this tool upload my photo to any server?",
            answer: "No. Everything is processed entirely in your browser. Your photo is never uploaded or stored anywhere. This is completely private and local.",
        },
    ];

    const processFile = useCallback((file: File) => {
        if (!file.type.startsWith("image/")) return;
        setImageFile(file);
        setResults(null);
        setOverallPass(null);

        const reader = new FileReader();
        reader.onload = (e) => {
            const dataUrl = e.target?.result as string;
            setImagePreview(dataUrl);

            const img = new Image();
            img.onload = () => {
                const profile = EXAM_PROFILES[selectedExam];
                const fileSizeKB = file.size / 1024;

                const checks: CheckResult[] = [
                    {
                        label: "File Format",
                        pass: profile.format.includes(file.type),
                        actual: file.type === "image/jpeg" ? "JPG/JPEG" : file.type.split("/")[1].toUpperCase(),
                        expected: "JPG/JPEG",
                    },
                    {
                        label: "File Size (KB)",
                        pass: fileSizeKB >= profile.minKB && fileSizeKB <= profile.maxKB,
                        actual: `${fileSizeKB.toFixed(1)} KB`,
                        expected: `${profile.minKB} – ${profile.maxKB} KB`,
                    },
                    {
                        label: "Width (pixels)",
                        pass: img.width >= profile.minW && img.width <= profile.maxW,
                        actual: `${img.width} px`,
                        expected: `${profile.minW} – ${profile.maxW} px`,
                    },
                    {
                        label: "Height (pixels)",
                        pass: img.height >= profile.minH && img.height <= profile.maxH,
                        actual: `${img.height} px`,
                        expected: `${profile.minH} – ${profile.maxH} px`,
                    },
                ];

                if (profile.aspectNote) {
                    const ratio = img.width / img.height;
                    checks.push({
                        label: "Aspect Ratio",
                        pass: ratio >= 0.98 && ratio <= 1.02,
                        actual: `${img.width}×${img.height}`,
                        expected: "Square (1:1)",
                    });
                }

                const allPass = checks.every((c) => c.pass);
                setResults(checks);
                setOverallPass(allPass);
            };
            img.src = dataUrl;
        };
        reader.readAsDataURL(file);
    }, [selectedExam]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) processFile(file);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) processFile(file);
    };

    const handleReset = () => {
        setImageFile(null);
        setImagePreview(null);
        setResults(null);
        setOverallPass(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleExamChange = (exam: string) => {
        setSelectedExam(exam);
        if (imageFile) processFile(imageFile);
    };

    return (
        <>
            <SEOHead
                title="Exam Photo Checker — Verify if Your Photo Meets Exam Requirements Instantly"
                description="Check if your photo meets the exact requirements for SSC, IBPS, NEET, JEE, UPSC, RRB, Agniveer, DS-160, and USCIS. Instant pass/fail for dimensions, KB size, and format. Free, private, browser-based."
                canonicalUrl="https://signatureresize.in/exam-photo-checker"
                keywords="exam photo checker online, verify photo for government exam, check photo size for ssc ibps neet, photo requirement checker, check if photo meets exam requirements"
            />

            <div className="min-h-screen bg-background">
                <Header />

                <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Tools" }, { name: "Exam Photo Checker" }]} />
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                                FREE TOOL · 100% PRIVATE
                            </span>
                            <h1 className="mb-3 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl">
                                Exam Photo{" "}
                                <span className="text-primary underline decoration-wavy underline-offset-4">Requirements Checker</span>
                            </h1>
                            <p className="text-muted-foreground md:text-lg">
                                Upload your photo, select your exam, and instantly see if it passes. No uploads to any server — 100% in your browser.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl">

                            <AdContainer type="display" className="mb-8" />

                            {/* Exam Selector */}
                            <div className="mb-6">
                                <label className="mb-2 block text-sm font-semibold text-foreground">Select Your Exam</label>
                                <select
                                    value={selectedExam}
                                    onChange={(e) => handleExamChange(e.target.value)}
                                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                >
                                    {Object.keys(EXAM_PROFILES).map((exam) => (
                                        <option key={exam} value={exam}>{exam}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Upload Zone */}
                            {!imageFile ? (
                                <div
                                    className={`relative rounded-2xl border-2 border-dashed p-10 text-center transition-colors cursor-pointer ${isDragging ? "border-primary bg-primary/10" : "border-border bg-card hover:border-primary/50"}`}
                                    onClick={() => fileInputRef.current?.click()}
                                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                                    onDragLeave={() => setIsDragging(false)}
                                    onDrop={handleDrop}
                                >
                                    <Upload className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
                                    <p className="text-lg font-semibold text-foreground mb-1">Drop your photo here</p>
                                    <p className="text-sm text-muted-foreground mb-4">or click to browse — JPG, PNG, WEBP accepted</p>
                                    <span className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Choose Photo</span>
                                    <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                                </div>
                            ) : (
                                <div className="rounded-2xl border border-border bg-card overflow-hidden">
                                    {/* Preview + Results */}
                                    <div className="grid gap-0 md:grid-cols-2">
                                        <div className="flex flex-col items-center justify-center bg-muted/30 p-6">
                                            <img src={imagePreview!} alt="Preview" className="max-h-48 max-w-full rounded-lg object-contain shadow" />
                                            <p className="mt-3 text-xs text-muted-foreground">{imageFile.name}</p>
                                        </div>

                                        <div className="p-6">
                                            {/* Overall result banner */}
                                            {overallPass !== null && (
                                                <div className={`mb-4 flex items-center gap-3 rounded-xl p-4 ${overallPass ? "bg-green-500/10 border border-green-500/20" : "bg-red-500/10 border border-red-500/20"}`}>
                                                    {overallPass ? (
                                                        <>
                                                            <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                                                            <div>
                                                                <p className="font-bold text-green-600">All checks passed!</p>
                                                                <p className="text-xs text-muted-foreground">Your photo meets {selectedExam} requirements.</p>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                                                            <div>
                                                                <p className="font-bold text-red-600">Issues found</p>
                                                                <p className="text-xs text-muted-foreground">Fix the failing checks below before uploading.</p>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            )}

                                            {results && (
                                                <div className="space-y-2">
                                                    {results.map((r, i) => (
                                                        <div key={i} className={`flex items-start gap-3 rounded-lg p-3 ${r.pass ? "bg-green-500/5" : "bg-red-500/5"}`}>
                                                            {r.pass
                                                                ? <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                                                                : <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />}
                                                            <div className="min-w-0">
                                                                <p className="text-sm font-semibold text-foreground">{r.label}</p>
                                                                <p className="text-xs text-muted-foreground">
                                                                    Your file: <span className={r.pass ? "text-green-600 font-medium" : "text-red-600 font-medium"}>{r.actual}</span>{" · "}
                                                                    Required: <span className="text-foreground">{r.expected}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="border-t border-border p-4 flex flex-wrap gap-3">
                                        <button onClick={handleReset} className="flex items-center gap-2 rounded-lg border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground hover:border-primary/50 transition-colors">
                                            <RefreshCw className="h-4 w-4" /> Check Another Photo
                                        </button>
                                        {!overallPass && (
                                            <Link to="/signature-resize" className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
                                                Fix with Resize Tool →
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Fix suggestions when failed */}
                            {overallPass === false && (
                                <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
                                    <h3 className="mb-3 font-semibold text-foreground flex items-center gap-2">
                                        <AlertTriangle className="h-5 w-5 text-yellow-500" /> How to Fix Your Photo
                                    </h3>
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        <Link to="/signature-resize" className="rounded-lg border border-border bg-card p-3 text-sm hover:border-primary/50 transition-colors">
                                            <p className="font-semibold text-foreground">Resize & Compress</p>
                                            <p className="text-xs text-muted-foreground mt-1">Fix dimensions and file size in one step</p>
                                        </Link>
                                        <Link to="/passport-photo-maker" className="rounded-lg border border-border bg-card p-3 text-sm hover:border-primary/50 transition-colors">
                                            <p className="font-semibold text-foreground">Passport Photo Maker</p>
                                            <p className="text-xs text-muted-foreground mt-1">Crop + white background + correct size</p>
                                        </Link>
                                        <Link to="/signature-photo-white-background-phone" className="rounded-lg border border-border bg-card p-3 text-sm hover:border-primary/50 transition-colors">
                                            <p className="font-semibold text-foreground">White Background</p>
                                            <p className="text-xs text-muted-foreground mt-1">Fix background color issues</p>
                                        </Link>
                                        <Link to="/crop-signature-from-full-page-scan" className="rounded-lg border border-border bg-card p-3 text-sm hover:border-primary/50 transition-colors">
                                            <p className="font-semibold text-foreground">Crop from Scan</p>
                                            <p className="text-xs text-muted-foreground mt-1">Extract signature from full-page scan</p>
                                        </Link>
                                    </div>
                                </div>
                            )}

                            <AdContainer type="infeed" className="my-8" />

                            {/* What the tool checks */}
                            <section className="mb-10">
                                <h2 className="mb-4 text-xl font-bold text-foreground">What This Tool Checks</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { icon: Camera, title: "File Format", desc: "Confirms your image is JPG/JPEG as required by most portals" },
                                        { icon: CheckCircle, title: "File Size (KB)", desc: "Verifies the file is within the min–max KB range for the exam" },
                                        { icon: CheckCircle, title: "Width (pixels)", desc: "Checks actual pixel width against the exam's accepted range" },
                                        { icon: CheckCircle, title: "Height (pixels)", desc: "Checks actual pixel height against the exam's accepted range" },
                                    ].map((item) => (
                                        <div key={item.title} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                                            <item.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                                            <div>
                                                <p className="font-semibold text-foreground text-sm">{item.title}</p>
                                                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Related blog links */}
                            <section className="mb-10">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Exam-Specific Photo Guides</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { title: "Agniveer Photo & Signature Guide", href: "/agniveer-agnipath-photo-signature-requirements-2026" },
                                        { title: "CUET UG 2026 Photo Guide", href: "/cuet-ug-photo-signature-upload-guide-2026" },
                                        { title: "SSC CGL Photo & Signature Guide", href: "/ssc-cgl-photo-signature-upload-guide-2026" },
                                        { title: "NEET Photo & Signature Guide", href: "/neet-photo-signature-resize" },
                                        { title: "US Visa DS-160 Photo Guide", href: "/resize-passport-photo-us-visa-ds-160" },
                                        { title: "USCIS Immigration Photo Guide", href: "/resize-photo-signature-uscis-immigration-forms" },
                                    ].map((link) => (
                                        <Link key={link.href} to={link.href} className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 text-sm hover:border-primary/50 hover:text-primary transition-colors">
                                            <span className="text-primary">→</span> {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </section>

                <AdContainer type="multiplex" />
                <FAQSection faqs={faqs} />
                <AdSenseDisclaimer />
                <Footer />
            </div>
        </>
    );
};

export default ExamPhotoCheckerTool;

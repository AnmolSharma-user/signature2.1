import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignatureResizer from "@/components/SignatureResizer";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import ProcessingFeatures from "@/components/ProcessingFeatures";
import TrustBadges from "@/components/TrustBadges";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdContainer from "@/components/AdContainer";
import { CheckCircle, Zap, Shield, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CompressImageTo20KB = () => {
    const [selectedPreset, setSelectedPreset] = useState("custom");

    const presets = [
        { id: "ssc", label: "SSC CGL/CHSL", description: "Photo: 20KB | Signature: 10KB", targetKB: 20, maxW: 200, maxH: 230 },
        { id: "ibps", label: "IBPS / SBI", description: "Photo: 20KB | Signature: 20KB", targetKB: 20, maxW: 200, maxH: 230 },
        { id: "upsc", label: "UPSC", description: "Photo: 40KB | Signature: 40KB", targetKB: 40, maxW: 200, maxH: 230 },
        { id: "rrb", label: "RRB / Railway", description: "Photo: 50KB | Signature: 20KB", targetKB: 20, maxW: 200, maxH: 230 },
        { id: "neet", label: "NEET / JEE", description: "Photo: 50KB | Signature: 20KB", targetKB: 20, maxW: 200, maxH: 230 },
        { id: "custom", label: "Custom 20KB", description: "Compress any image to 20KB", targetKB: 20, maxW: 500, maxH: 500 },
    ];

    const active = presets.find(p => p.id === selectedPreset) || presets[5];

    const faqs = [
        {
            question: "How to compress an image to 20KB for government exam?",
            answer: "Upload your image using the tool on this page. Select your exam preset (SSC, IBPS, UPSC, etc.) or choose 'Custom 20KB'. Click Resize Now. The tool uses a binary search algorithm to compress your image to exactly 20KB (±1KB) in JPG format. Download and upload to your exam portal.",
        },
        {
            question: "Why do government exam portals require a 20KB image size?",
            answer: "20KB is the common minimum threshold used by Indian government exam portals including SSC, IBPS, RRB, and others. This limit ensures the image loads quickly on slow internet connections, meets server storage limits, and maintains consistent quality across all applications. Portal systems often reject files both smaller and larger than the specified range.",
        },
        {
            question: "Which exams require photo or signature under 20KB?",
            answer: "SSC CGL, SSC CHSL, SSC MTS require signature between 10–20KB. IBPS PO/Clerk requires photo 20–50KB. RRB Group D, RRB NTPC require photo 20–50KB and signature 10–40KB. UPSC requires photo 20–200KB and signature 20–100KB. Use the preset selector above for your specific exam.",
        },
        {
            question: "Will compressing to 20KB reduce image quality?",
            answer: "Compressing to 20KB will reduce quality slightly, but our tool minimizes visible quality loss by using smart JPEG compression at the highest quality level that still meets the size target. For exam purposes (signature and passport photo), 20KB is sufficient for clear recognition. The output always meets exam portal standards.",
        },
        {
            question: "Can I compress a PNG image to 20KB using this tool?",
            answer: "Yes. Upload your PNG image and the tool will convert it to JPG format and compress it to 20KB. This is actually beneficial for exam portals since most government portals only accept JPG/JPEG — our tool handles the conversion automatically.",
        },
        {
            question: "How accurate is the 20KB compression?",
            answer: "Our tool uses a binary search algorithm that achieves the target file size within ±1KB. For a 20KB target, the output will typically be between 19KB and 21KB. Most exam portals allow a ±2KB tolerance, so the output is always within acceptable range.",
        },
        {
            question: "What is the difference between KB and quality percentage?",
            answer: "Other tools let you set quality percentage (like 60% or 80%), but this doesn't guarantee a specific KB size — the output could be 15KB or 35KB depending on the image. Our tool does the opposite: you set the target KB size and the algorithm finds the exact quality percentage needed to hit it. Much more reliable for exam uploads.",
        },
    ];

    const whydoes20kb = [
        { exam: "SSC CGL / CHSL / MTS", requirement: "Photo: 20–50KB | Signature: 10–20KB" },
        { exam: "IBPS PO / Clerk", requirement: "Photo: 20–50KB | Signature: 10–20KB" },
        { exam: "RRB Group D", requirement: "Photo: 20–50KB | Signature: 10–40KB" },
        { exam: "RRB NTPC", requirement: "Photo: 20–50KB | Signature: 10–40KB" },
        { exam: "UPSC (CSE / NDA / CDS)", requirement: "Photo: 20–200KB | Signature: 20–100KB" },
        { exam: "SBI PO / Clerk", requirement: "Photo: 20–50KB | Signature: 10–20KB" },
        { exam: "India Post GDS", requirement: "Photo: 30–100KB | Signature: 10–20KB" },
        { exam: "NEET UG", requirement: "Photo: 10–200KB | Signature: 4–30KB" },
    ];

    const howToSteps = [
        { text: "Select your exam preset (SSC, IBPS, UPSC, RRB) or choose Custom 20KB" },
        { text: "Upload your image file (JPG, JPEG, or PNG — any format is accepted)" },
        { text: "The target KB is automatically set based on your preset selection" },
        { text: "Click 'Resize Now' — the binary search algorithm compresses to exact target size" },
        { text: "Download the compressed JPG file and upload to your exam portal" },
    ];

    return (
        <>
            <SEOHead
                title="Compress Image to 20KB Online Free | Government Exam Photo Resize"
                description="Compress any image to exactly 20KB for SSC, IBPS, UPSC, RRB exams. Free online tool with exam-specific presets. JPG output, binary search precision, instant results."
                canonicalUrl="https://signatureresize.in/compress-image-to-20kb-online"
                keywords="compress image to 20kb, resize image to 20kb, compress photo to 20kb, compress signature to 20kb, 20kb photo resize for exam, compress image to 20kb online free, how to compress image to 20kb, government exam photo resize 20kb"
                ogImage="https://signatureresize.in/assest/compress-image-to-20kb.png"
            />

            {/* Speakable Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Compress Image to 20KB Online Free",
                        "speakable": {
                            "@type": "SpeakableSpecification",
                            "cssSelector": [".speakable-intro", "h1", "h2"]
                        },
                        "url": "https://signatureresize.in/compress-image-to-20kb-online"
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
                        "name": "Image to 20KB Compressor for Government Exams",
                        "url": "https://signatureresize.in/compress-image-to-20kb-online",
                        "description": "Free tool to compress images to exactly 20KB for government exam portals including SSC, IBPS, UPSC, RRB",
                        "applicationCategory": "UtilityApplication",
                        "operatingSystem": "Any",
                        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
                        "author": { "@id": "https://signatureresize.in/#author" },
                        "publisher": { "@id": "https://signatureresize.in/#organization" }
                    })
                }}
            />

            <SEOSchema
                type="HowTo"
                howToName="How to Compress Image to 20KB for Government Exams"
                howToSteps={howToSteps}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-green-600/10 via-primary/5 to-background py-8 sm:py-12">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Compress Image to 20KB" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-green-100 dark:bg-green-900/30 px-4 py-1.5 text-sm font-semibold text-green-700 dark:text-green-400">
                                <Zap className="h-4 w-4" />
                                Works for SSC, IBPS, UPSC, RRB, NEET & more
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Compress Image to <span className="text-primary">20KB</span> Online Free
                            </h1>
                            <p className="speakable-intro text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                                Compress any photo or signature to <strong>exactly 20KB</strong> (or any custom target) for government exam portals. Select your exam preset below for correct dimensions automatically.
                            </p>
                        </div>
                    </div>
                </section>

                <main className="py-8 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl">
                            {/* Preset Selector */}
                            <div className="mb-6 rounded-xl border border-border bg-card p-5">
                                <div className="mb-3 flex items-center gap-2">
                                    <Info className="h-4 w-4 text-primary" />
                                    <h2 className="text-sm font-semibold text-foreground">Select Your Exam Preset</h2>
                                </div>
                                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                                    {presets.map((preset) => (
                                        <button
                                            key={preset.id}
                                            onClick={() => setSelectedPreset(preset.id)}
                                            className={`rounded-lg border p-3 text-left text-xs transition-all ${selectedPreset === preset.id
                                                ? "border-primary bg-primary/10 text-primary font-semibold"
                                                : "border-border text-muted-foreground hover:border-primary/50"
                                                }`}
                                        >
                                            <div className="font-medium text-foreground">{preset.label}</div>
                                            <div className="mt-0.5 text-[11px]">{preset.description}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <SignatureResizer
                                title={`Compress Image to ${active.targetKB}KB — ${active.label}`}
                                defaultTargetKB={active.targetKB}
                                minKB={5}
                                maxKB={100}
                                maxWidth={active.maxW}
                                maxHeight={active.maxH}
                                defaultPreset={active.id}
                            />

                            <AdContainer type="display" />
                        </div>

                        {/* Exam Requirements Table */}
                        <div className="mx-auto mt-12 max-w-4xl">
                            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    Which Exams Need Images Under 20KB?
                                </h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="bg-primary text-primary-foreground">
                                                <th className="p-3 text-left rounded-tl-lg">Exam</th>
                                                <th className="p-3 text-left rounded-tr-lg">Photo & Signature Requirement</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border">
                                            {whydoes20kb.map((row, i) => (
                                                <tr key={i} className="hover:bg-muted/50">
                                                    <td className="p-3 font-medium text-foreground">{row.exam}</td>
                                                    <td className="p-3 text-muted-foreground">{row.requirement}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <AdContainer type="inarticle" className="my-6" />

                                <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                                    <h3 className="text-lg font-semibold text-foreground">Why Most Tools Fail to Hit Exact KB Sizes</h3>
                                    <p>
                                        Most image compression tools let you set a quality percentage (like "70% quality"). The problem? Quality percentage doesn't reliably map to a specific file size. A 70% quality JPEG can be anywhere from 8KB to 400KB depending on the image content. You adjust, re-save, re-check — over and over.
                                    </p>
                                    <p>
                                        Our tool takes a different approach: you set the <strong className="text-foreground">target file size in KB</strong>, and a <strong className="text-foreground">binary search algorithm</strong> iterates through compression levels until it finds the exact quality setting that produces your target size. The whole process takes 1–2 seconds.
                                    </p>

                                    <h3 className="text-lg font-semibold text-foreground">Features of This Compression Tool</h3>
                                    <div className="grid sm:grid-cols-2 gap-3 mt-3">
                                        {[
                                            { icon: Zap, title: "Exact KB targeting", desc: "Binary search hits target within ±1KB" },
                                            { icon: Shield, title: "Browser-only", desc: "No upload to any server — 100% private" },
                                            { icon: CheckCircle, title: "Exam presets", desc: "Pre-configured for 8 major exam categories" },
                                            { icon: CheckCircle, title: "Any input format", desc: "Accepts JPG, PNG, WEBP — outputs JPG" },
                                        ].map(({ icon: Icon, title, desc }) => (
                                            <div key={title} className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-3">
                                                <Icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                                <div>
                                                    <p className="text-xs font-semibold text-foreground">{title}</p>
                                                    <p className="text-xs text-muted-foreground">{desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <h3 className="text-lg font-semibold text-foreground">Related Tools</h3>
                                    <p>
                                        Need exam-specific tools?{" "}
                                        <Link to="/signature-resize" className="text-primary hover:underline font-medium">Signature Resize</Link>,{" "}
                                        <Link to="/rrb-group-d-photo-signature-resize" className="text-primary hover:underline font-medium">RRB Group D Resize</Link>,{" "}
                                        <Link to="/ibps-photo-signature-resize" className="text-primary hover:underline font-medium">IBPS Photo & Signature Resize</Link>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Author Bio */}
                        <div className="mx-auto mt-6 max-w-4xl">
                            <div className="rounded-xl border border-border bg-card/50 p-5 flex items-start gap-4">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-primary">SR</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">Written by SignatureResize Editorial Team</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Our team compiled exam requirements from official portals including SSC.nic.in, IBPS.in, UPSCONLINE.nic.in and RRB OJAS to create this reference guide.{" "}
                                        <Link to="/about-us" className="text-primary hover:underline">About us →</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <AdContainer type="infeed" className="mx-auto max-w-4xl" />

                        <div className="mx-auto mt-10 max-w-3xl">
                            <ProcessingFeatures />
                        </div>
                        <div className="mx-auto mt-10 max-w-4xl">
                            <TrustBadges />
                        </div>
                    </div>
                </main>

                <FAQSection faqs={faqs} />
                <AdContainer type="multiplex" className="container mx-auto px-4 mb-6" />
                <Footer />
            </div>
        </>
    );
};

export default CompressImageTo20KB;

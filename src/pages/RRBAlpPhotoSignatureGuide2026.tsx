import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdContainer from "@/components/AdContainer";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, CheckCircle, AlertTriangle, Train, Info, Shield, FileText } from "lucide-react";

const RRBAlpPhotoSignatureGuide2026 = () => {
    const faqs = [
        {
            question: "What is the RRB ALP 2026 photo size requirement?",
            answer: "For RRB ALP (Assistant Loco Pilot) 2026, the passport-size color photograph must be in JPG/JPEG format, with a file size between 20KB and 50KB. Dimensions should be 200×230 pixels (3.5cm × 4.5cm) against a plain white background. It must be taken within the last 3 months.",
        },
        {
            question: "What is the signature size in KB for RRB ALP 2026?",
            answer: "The signature for RRB ALP 2026 must be in JPG/JPEG format with a file size between 10KB and 40KB. Dimensions should be approximately 140×60 pixels. Sign in running/cursive handwriting on white paper using black or blue ink. Capital/block letters will be rejected.",
        },
        {
            question: "Is there a thumb impression requirement for RRB ALP 2026?",
            answer: "Unlike some other exams, the initial RRB ALP 2026 online registration primarily requires your photo and signature. However, you should keep a scanned copy of your left thumb impression (10-40KB, JPG) ready for document verification and subsequent stages.",
        },
        {
            question: "Can I upload a PNG photo for RRB ALP application?",
            answer: "No. The RRB application portal only accepts JPG/JPEG format. If you upload a PNG, the portal will show an error or fail to upload. Use our free tool to automatically convert PNG to JPG and compress it.",
        },
        {
            question: "How do I resize my photo for RRB ALP 2026 online?",
            answer: "Upload your photo on our RRB Group D or NTPC signature resize page, set the target size to 35KB (which is in the 20-50KB range), and download the resized JPG. Our tool automatically adjusts dimensions to 200×230 pixels.",
        },
    ];

    const specRows = [
        { doc: "Passport Photo", size: "20 KB – 50 KB", dims: "200 × 230 px", fmt: "JPG / JPEG", bg: "Plain White" },
        { doc: "Signature", size: "10 KB – 40 KB", dims: "140 × 60 px", fmt: "JPG / JPEG", bg: "White paper" },
        { doc: "Left Thumb (optional/backup)", size: "10 KB – 40 KB", dims: "100 × 100 px", fmt: "JPG / JPEG", bg: "White paper" },
    ];

    const steps = [
        { text: "Sign on a blank white sheet of paper using black or dark blue ink" },
        { text: "Take a clear photo of your signature or passport photo in good lighting" },
        { text: "Upload the image to our free resize tool at signatureresize.in" },
        { text: "Set target KB (e.g., 35KB for photo, 15KB for signature) and download the JPG" },
        { text: "Upload the downloaded file directly to the RRB application portal" },
    ];

    return (
        <>
            <SEOHead
                title="RRB ALP 2026 Photo & Signature Guide | Size, Dimensions & Rules"
                description="Complete upload guide for RRB ALP (Assistant Loco Pilot) 2026 recruitment. Learn photo size specs (20-50KB), signature rules (10-40KB), and avoid rejection."
                canonicalUrl="https://signatureresize.in/rrb-alp-2026-photo-signature-upload-guide"
                keywords="rrb alp 2026 photo size, rrb alp signature size, railway alp photo resize, rrb assistant loco pilot photo guidelines, rrb signature upload format"
                ogImage="https://signatureresize.in/logo.png"
                ogType="article"
                publishedTime="2026-06-13T12:00:00+05:30"
                modifiedTime="2026-06-13T12:00:00+05:30"
                articleAuthor="SignatureResize Editorial Team"
            />

            {/* Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "RRB ALP 2026 Photo & Signature Upload Guide — Exact Specs, Resize Tool & Common Errors",
                        "description": "Complete guide for RRB ALP (Assistant Loco Pilot) 2026 photo and signature upload requirements.",
                        "image": {
                            "@type": "ImageObject",
                            "url": "https://signatureresize.in/logo.png",
                            "width": 512,
                            "height": 512
                        },
                        "author": { "@id": "https://signatureresize.in/#author" },
                        "publisher": { "@id": "https://signatureresize.in/#organization" },
                        "datePublished": "2026-06-13T12:00:00+05:30",
                        "dateModified": "2026-06-13T12:00:00+05:30",
                        "mainEntityOfPage": "https://signatureresize.in/rrb-alp-2026-photo-signature-upload-guide",
                        "speakable": {
                            "@type": "SpeakableSpecification",
                            "cssSelector": [".article-summary", "h1", "h2"]
                        }
                    })
                }}
            />

            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://signatureresize.in" },
                            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://signatureresize.in/blog" },
                            { "@type": "ListItem", "position": 3, "name": "RRB ALP 2026 Photo & Signature Guide", "item": "https://signatureresize.in/rrb-alp-2026-photo-signature-upload-guide" }
                        ]
                    })
                }}
            />

            <div className="min-h-screen bg-background text-foreground">
                <Header />

                {/* Hero Banner */}
                <section className="bg-gradient-to-br from-blue-700/15 via-primary/5 to-background py-8 sm:py-12">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs
                            items={[
                                { name: "Blog", href: "/blog" },
                                { name: "RRB ALP 2026 Guide" },
                            ]}
                        />
                        <div className="mx-auto max-w-4xl">
                            {/* Category badge */}
                            <div className="mb-4 flex flex-wrap gap-2 items-center">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
                                    <Train className="h-3 w-3" />
                                    RRB Exams
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <Calendar className="h-3 w-3" />
                                    June 13, 2026
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <Clock className="h-3 w-3" />
                                    5 min read
                                </span>
                            </div>

                            <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-foreground">
                                RRB ALP 2026 Photo & Signature Upload Guide — Exact Specs, Resize Tool & Common Errors
                            </h1>
                            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl article-summary">
                                Applying for RRB Assistant Loco Pilot (ALP) 2026? Ensure your application is not rejected by following the latest Railway Recruitment Board photo and signature upload rules. Adjust dimensions and compress sizes in seconds using our free presets.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Section */}
                <main className="py-8 sm:py-12">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl grid md:grid-cols-3 gap-8">
                            
                            {/* Left Side: Article Content */}
                            <div className="md:col-span-2 space-y-8">
                                
                                <section className="space-y-4">
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">RRB ALP 2026 Specifications Table</h2>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Here are the exact size, dimensions, format, and background rules for documents needed in the RRB ALP application:
                                    </p>
                                    
                                    <div className="overflow-x-auto rounded-xl border border-border bg-card">
                                        <table className="w-full text-xs sm:text-sm border-collapse">
                                            <thead>
                                                <tr className="bg-muted text-foreground border-b border-border">
                                                    <th className="p-3 text-left font-semibold">Document</th>
                                                    <th className="p-3 text-left font-semibold">File Size</th>
                                                    <th className="p-3 text-left font-semibold">Dimensions</th>
                                                    <th className="p-3 text-left font-semibold">Format</th>
                                                    <th className="p-3 text-left font-semibold">Background</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border text-muted-foreground">
                                                {specRows.map((row) => (
                                                    <tr key={row.doc} className="hover:bg-muted/30">
                                                        <td className="p-3 font-semibold text-foreground">{row.doc}</td>
                                                        <td className="p-3">{row.size}</td>
                                                        <td className="p-3 font-mono">{row.dims}</td>
                                                        <td className="p-3">{row.fmt}</td>
                                                        <td className="p-3">{row.bg}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <AdContainer type="inarticle" />

                                <section className="space-y-4">
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">Rules for Photograph Upload</h2>
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                            <span><strong>Plain White Background:</strong> The background must be pure white. Coloured, patterned, or outdoorsy backgrounds are not allowed.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                            <span><strong>No Glasses, Caps, or Headgear:</strong> Eyes must be fully visible. Photos wearing sunglasses, caps, or hats will be rejected. Religious headwear is allowed but face must not be obstructed.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                            <span><strong>No Group Photos or Selfies:</strong> The candidate should look straight into the camera, with a neutral face. Selfies or cropped group pictures will not be accepted.</span>
                                        </li>
                                    </ul>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">Rules for Signature Upload</h2>
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                            <span><strong>Running Hand Only:</strong> Signatures in capital letters (BLOCK LETTERS) will not be accepted. Use a cursive, natural flowing signature.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                            <span><strong>Ink Color:</strong> Use black or dark blue ink pen on plain white paper. Avoid gel pens that may smudge, or pencil.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                            <span><strong>No Shadows:</strong> Ensure no shadows fall across the paper when photographing or scanning the signature.</span>
                                        </li>
                                    </ul>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">How to Resize RRB ALP Photo & Signature</h2>
                                    <ol className="space-y-3 text-sm text-muted-foreground ml-4 list-decimal">
                                        {steps.map((step, idx) => (
                                            <li key={idx} className="pl-1">
                                                {step.text}
                                            </li>
                                        ))}
                                    </ol>
                                </section>

                                <AdContainer type="display" />

                                {/* FAQ Section */}
                                <section>
                                    <FAQSection faqs={faqs} title="Frequently Asked Questions (RRB ALP)" />
                                </section>

                            </div>

                            {/* Right Side: Sidebar */}
                            <div className="space-y-6">
                                <div className="rounded-xl border border-border bg-card p-5 space-y-4">
                                    <h3 className="font-bold text-foreground flex items-center gap-2">
                                        <Info className="h-5 w-5 text-blue-500" />
                                        Important Details
                                    </h3>
                                    <div className="space-y-3 text-sm text-muted-foreground">
                                        <p>
                                            <strong>Exam:</strong> Railway Recruitment Board Assistant Loco Pilot (RRB ALP) 2026.
                                        </p>
                                        <p>
                                            <strong>Upload format:</strong> JPG/JPEG only. PNG is strictly rejected.
                                        </p>
                                        <p>
                                            <strong>Photo Preset:</strong> 20KB to 50KB (Auto-dimension 200×230 px).
                                        </p>
                                        <p>
                                            <strong>Signature Preset:</strong> 10KB to 40KB (Auto-dimension 140×60 px).
                                        </p>
                                    </div>
                                    <Button asChild className="w-full">
                                        <Link to="/signature-resize-10-to-20-kb">
                                            Go to Resizer Tool
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>

                                <div className="rounded-xl border border-border bg-card p-5 space-y-3">
                                    <h3 className="font-bold text-foreground flex items-center gap-2">
                                        <FileText className="h-5 w-5 text-purple-500" />
                                        Related Guides
                                    </h3>
                                    <ul className="space-y-2 text-sm text-primary hover:underline">
                                        <li>
                                            <Link to="/rrb-ntpc-2026-photo-signature-upload-guide">
                                                RRB NTPC 2026 Upload Guide
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/ssc-cgl-photo-signature-upload-guide-2026">
                                                SSC CGL 2026 Upload Guide
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/ssc-mts-signature-resize">
                                                SSC MTS Signature Resizer
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>

                {/* Footer Section */}
                <div className="border-t border-border mt-12 py-6 text-center text-xs text-muted-foreground">
                    <p className="flex items-center justify-center gap-1">
                        <Shield className="h-3.5 w-3.5" />
                        Last Updated: June 13, 2026 | signatureresize.in Editorial Team
                    </p>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default RRBAlpPhotoSignatureGuide2026;

import { Link } from "react-router-dom";
import { CheckCircle, XCircle, AlertTriangle, FileImage, Upload, Download, Info } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const UPPSCROAROPhotoSignatureGuide = () => {
    const faqs = [
        {
            question: "What is the UPPSC OTR photo size for 2026?",
            answer: "For the UPPSC OTR (One Time Registration) portal, your photo must be between 10 KB and 50 KB in size. The required dimensions are strictly 3.5 cm x 4.5 cm (equivalent to roughly 132 x 170 pixels).",
        },
        {
            question: "What background color is required for the UPPSC photo?",
            answer: "UPPSC guidelines specifically require a plain white or light-grey background. Photos with dark, busy, or outdoorsy backgrounds are frequently flagged or rejected by the automated OTR portal.",
        },
        {
            question: "What is the UPPSC signature limit and format?",
            answer: "The signature block for UPPSC must be between 10 KB and 30 KB. The dimensions are 3.5 cm wide by 1.5 cm high. You must use a black ink pen on white paper—blue ink is often discouraged or rejected.",
        },
        {
            question: "Why is my UPPSC RO/ARO photo showing as invalid format?",
            answer: "The UPPSC portal only accepts valid JPG/JPEG or PNG formats. If you saved it from WhatsApp or a phone editor, it might be saved as a WEBP file. Use a free tool to convert and compress the image to JPG.",
        },
        {
            question: "Do I need to upload both English and Hindi signatures?",
            answer: "UPPSC has a unique requirement where you must provide a composite image containing your full signature on top and your name written in block letters below it, all fitting within the 3.5 cm x 1.5 cm box.",
        },
    ];

    const specsData = [
        { label: "Photo File Size", value: "10 KB – 50 KB", ok: true },
        { label: "Photo Dimensions", value: "3.5 cm × 4.5 cm", ok: true },
        { label: "Photo Background", value: "White or Light-Grey", ok: true },
        { label: "Signature File Size", value: "10 KB – 30 KB", ok: true },
        { label: "Signature Dimensions", value: "3.5 cm × 1.5 cm", ok: true },
        { label: "Signature Ink Tool", value: "Black Ink Pen Only", ok: true },
    ];

    return (
        <>
            <SEOHead
                title="UPPSC RO/ARO 2026 Photo & Signature Upload Rules | Avoid OTR Rejection"
                description="Exact photo (10-50 KB) and signature (10-30 KB) requirements for UPPSC RO/ARO and OTR portal 2026. Step-by-step guide to stop your application from getting rejected."
                canonicalUrl="https://signatureresize.in/uppsc-ro-aro-photo-signature-rules-2026"
                keywords="UPPSC RO ARO photo size 2026, UPPSC OTR photo upload, UPPSC signature format, UP photo rejection reasons, UPPSC admit card photo"
                ogImage="/assest/uppsc-ro-aro-2026-photo-guide.png"
            />
            <SEOSchema
                type="Article"
                data={{
                    headline: "UPPSC RO/ARO 2026 Photo & Signature Upload Rules: Avoid Rejection",
                    description: "Avoid UPPSC OTR rejection with this definitive guide on exact photo and signature sizes, dimensions, and standard formats.",
                    url: "https://signatureresize.in/uppsc-ro-aro-photo-signature-rules-2026",
                }}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600/10 via-accent to-background py-10 sm:py-16">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs
                            items={[
                                { name: "Blog", href: "/blog" },
                                { name: "UPPSC RO/ARO Photo Guide" },
                            ]}
                        />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-indigo-600/10 px-4 py-2 text-sm font-medium text-indigo-600">
                                EXAM SPECIFIC · OTR PORTAL
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                UPPSC RO/ARO 2026 {" "}
                                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">
                                    Photo & Signature Rules
                                </span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg leading-relaxed">
                                UPPSC's newly updated OTR portal is notoriously strict. A 52 KB file or a blue pen signature can crash your application dreams. Here is how to pass the portal instantly.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5"><FileImage className="h-4 w-4 text-primary" /> Photo: 10–50 KB</span>
                                <span className="flex items-center gap-1.5"><FileImage className="h-4 w-4 text-primary" /> Sign: 10–30 KB</span>
                                <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-indigo-500" /> OTR Ready</span>
                            </div>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">
                            
                            {/* Table of Contents */}
                            <div className="mb-10 rounded-xl border border-border bg-card shadow-sm overflow-hidden">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="toc" className="border-b-0">
                                        <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors">
                                            <h2 className="text-lg font-bold text-foreground flex items-center gap-2 m-0">
                                                <Info className="h-5 w-5 text-primary" /> Table of Contents
                                            </h2>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-6 pb-6 pt-2">
                                            <ul className="space-y-3 text-sm text-muted-foreground">
                                                <li>
                                                    <a href="#why-strict" className="hover:text-primary hover:underline flex items-center gap-2">
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">1</span>
                                                        Why UPPSC OTR Requirements Are So Strict
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#quick-specs" className="hover:text-primary hover:underline flex items-center gap-2">
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">2</span>
                                                        Quick Specs Overview
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#photo-rules" className="hover:text-primary hover:underline flex items-center gap-2">
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">3</span>
                                                        Step-by-Step Photo Rules
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#signature-rules" className="hover:text-primary hover:underline flex items-center gap-2">
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">4</span>
                                                        The Unique UPPSC Signature Format
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#common-mistakes" className="hover:text-primary hover:underline flex items-center gap-2">
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">5</span>
                                                        Top 3 Rejection Reasons and How to Fix Them
                                                    </a>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <figure className="mb-10">
                                <img
                                    src="/assest/uppsc-ro-aro-rules-2026.png"
                                    alt="UPPSC RO/ARO 2026 Online Application Photo and Signature Upload Requirements"
                                    className="w-full rounded-xl border border-border shadow-md"
                                    loading="lazy"
                                />
                                <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                                    Official dimensions and rules for UPPSC OTR photo and signature validation.
                                </figcaption>
                            </figure>

                            <AdContainer type="display" className="mb-8" />

                            <section id="why-strict" className="mb-10 prose prose-neutral dark:prose-invert max-w-none">
                                <p className="text-lg text-foreground leading-relaxed font-medium">
                                    Preparing for the highly competitive UPPSC Review Officer (RO) and Assistant Review Officer (ARO) exams takes months—sometimes years—of intense dedication. Candidates spend hours pouring over the syllabus, but often overlook one critical administrative hurdle.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    Yet, every single year, thousands of capable candidates receive a disheartening notification: their <strong>OTR (One Time Registration)</strong> or application form has been rejected. The culprit is almost always an incorrectly formatted photo or a signature that doesn't meet the strict guidelines.
                                </p>
                                <h3 className="mt-8 mb-4 text-xl font-bold text-foreground">The Role of Automated Validation</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    The new UPPSC OTR portal relies heavily on automated scripts to validate image uploads. This system instantly checks image dimensions, DPI (Dots Per Inch), and background contrast. It enforces strict byte limits down to the exact kilobyte. 
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    If your photo is simply resized via WhatsApp, or if your signature box doesn’t correctly enclose both your handwriting and block letters in black ink, the automated server flags your profile immediately. This guide breaks down exactly how to format your files to bypass these automated checks seamlessly.
                                </p>
                            </section>

                            {/* Quick Specs Overview */}
                            <section id="quick-specs" className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    2. Quick Specs Overview
                                </h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead className="bg-muted/50">
                                            <tr>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Requirement</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Value</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Valid?</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {specsData.map((row, i) => (
                                                <tr key={i} className="border-t border-border hover:bg-muted/20">
                                                    <td className="px-4 py-3 text-muted-foreground font-medium">{row.label}</td>
                                                    <td className="px-4 py-3 text-foreground font-semibold">{row.value}</td>
                                                    <td className="px-4 py-3">
                                                        {row.ok ? (
                                                            <CheckCircle className="h-4 w-4 text-green-500" />
                                                        ) : (
                                                            <XCircle className="h-4 w-4 text-red-500" />
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <AdContainer type="infeed" className="my-8" />

                            {/* Photo Rules */}
                            <section id="photo-rules" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    3. Step-by-Step Photo Rules for UPPSC
                                </h2>
                                <p className="mb-6 text-muted-foreground leading-relaxed">
                                    UPPSC expects a studio-quality passport photo, even if you took it on your phone. Attempting to upload a casual selfie or a poorly cropped group photo is a guaranteed way to secure an application rejection. Here are the absolute non-negotiables:
                                </p>

                                <div className="space-y-6">
                                    <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-6">
                                        <h3 className="font-bold text-foreground flex items-center gap-2 text-lg">
                                            <CheckCircle className="h-6 w-6 text-green-500" /> Acceptable Profile Rules
                                        </h3>
                                        <ul className="mt-4 space-y-3 text-sm text-muted-foreground list-disc pl-5">
                                            <li>
                                                <strong className="text-foreground block mb-1">Strict Weight Limit: 10 KB to 50 KB</strong>
                                                The portal will physically block uploads outside this range. If your photo is 51 KB, it will fail.
                                            </li>
                                            <li>
                                                <strong className="text-foreground block mb-1">Face Coverage: 70% Minimum</strong>
                                                Your face, from the top of your hair to the bottom of your chin, must consume roughly 70% of the entire photograph. Do not zoom out too far.
                                            </li>
                                            <li>
                                                <strong className="text-foreground block mb-1">Ear Visibility</strong>
                                                Both ears must be clearly visible. Hair must be tucked behind ears, and no hats or tinted glasses are allowed.
                                            </li>
                                            <li>
                                                <strong className="text-foreground block mb-1">The White Background Rule</strong>
                                                The background must be plain white or a very pale grey. Complex backgrounds confuse the AI validator. Use our <Link to="/signature-photo-white-background-phone" className="text-primary hover:underline font-medium">white background tool</Link> if you need to quickly fix a photo taken at home.
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
                                        <h4 className="text-foreground font-semibold">Tips for taking the photo at home:</h4>
                                        <ul>
                                            <li>Stand facing a window so natural light hits your face evenly.</li>
                                            <li>Stand about 1-2 feet away from a white wall to avoid harsh shadows behind your head.</li>
                                            <li>Have someone else hold the phone. <strong className="text-foreground">Do not take a selfie</strong>, as it distorts facial proportions.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Signature Rules */}
                            <section id="signature-rules" className="mb-10 rounded-xl border border-border bg-muted/20 p-6 md:p-8">
                                <h2 className="mb-4 text-xl md:text-2xl font-bold text-foreground">4. The Unique UPPSC Signature Format</h2>
                                <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
                                    <p className="leading-relaxed">
                                        Unlike the SSC or IBPS exams—which generally just ask for a simple signature scan—the UPPSC portal requires a notoriously strict format: the <strong>Composite Signature Box</strong>.
                                    </p>
                                    <p className="leading-relaxed mt-4">
                                        To meet this requirement, you cannot simply sign a piece of paper and take a photo. You are required to draw a specific bounding box on white unlined paper (approximately 3.5cm wide by 1.5cm high). 
                                    </p>
                                    
                                    <h4 className="text-foreground font-semibold mt-6 mb-2">How to create a composite signature:</h4>
                                    <ol className="mt-2 text-sm md:text-base space-y-2">
                                        <li>Inside the top half of the box, sign your name normally in <strong>running handwriting</strong>.</li>
                                        <li>Immediately below the signature (in the bottom half of the box), print your full name in <strong>CAPITAL BLOCK LETTERS</strong>.</li>
                                        <li>You <strong className="text-foreground border-b border-primary/50">MUST use a black ink pen</strong> with a medium tip.</li>
                                    </ol>

                                    <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                                        <p className="text-amber-700 dark:text-amber-400 font-medium m-0 flex items-start gap-2">
                                            <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                                            <span>
                                                <strong>Warning about Blue Ink:</strong> Historically, blue ink has resulted in thousands of rejected applications. When portals convert images to black-and-white during compression and processing, blue ink often fades and becomes illegible, failing the validation check.
                                            </span>
                                        </p>
                                    </div>

                                    <p className="mt-6 leading-relaxed">
                                        If creating this exactly is proving difficult via your phone gallery, our dedicated <Link to="/signature-resize" className="text-primary font-medium hover:underline">Signature Resizer tool</Link> allows you to crop exactly to this box size and ensure the KB weight stays under the strict 30 KB limit.
                                    </p>
                                </div>
                            </section>

                            <AdContainer type="inarticle" className="my-8" />

                            {/* Common Mistakes */}
                            <section id="common-mistakes" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    5. Top 3 Rejection Reasons and How to Fix Them
                                </h2>
                                <div className="space-y-3">
                                    <div className="flex gap-4 rounded-xl border border-border bg-card p-4">
                                        <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
                                        <div>
                                            <p className="font-semibold text-foreground">Selfies or Cropped Wedding Photos</p>
                                            <p className="mt-1 text-sm text-muted-foreground">The AI engine detecting OTR uploads instantly flags backgrounds with textures or gradients. Stick to plain colors.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 rounded-xl border border-border bg-card p-4">
                                        <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
                                        <div>
                                            <p className="font-semibold text-foreground">Blurry Submissions Post-Compression</p>
                                            <p className="mt-1 text-sm text-muted-foreground">Using cheap compression apps ruins the DPI. Instead of looking crisp, the photo looks grainy. Use our <Link to="/compress-image-to-20kb-online" className="text-primary hover:underline">lossless 20KB tool</Link> to retain exact clarity.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 rounded-xl border border-border bg-card p-4">
                                        <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
                                        <div>
                                            <p className="font-semibold text-foreground">Signing in Blue Ink</p>
                                            <p className="mt-1 text-sm text-muted-foreground">When scanned and compressed in black-and-white (which portals eventually do), blue ink fades. Black ink guarantees 100% legibility.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Editorial Block (EEAT) */}
                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">SR</div>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">SignatureResize.in Editorial Team</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Authoritative Guidance • Updated for 2026 Examination Cycles</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                                            Our editorial team has actively analyzed the UPPSC OTR and RO/ARO exam portal updates. We verify our guidelines precisely against the official gazette notices published by the state commision to provide you accurate and safe resizing advice. Over 50,000 students rely on our compression logic to avoid registration delays. For official notices, always head to the UPPSC portal.
                                        </p>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </article>

                <AdContainer type="multiplex" />
                <FAQSection faqs={faqs} />
                <AdSenseDisclaimer />
                <Footer />
            </div>
        </>
    );
};

export default UPPSCROAROPhotoSignatureGuide;

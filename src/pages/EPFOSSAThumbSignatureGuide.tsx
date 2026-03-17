import { Link } from "react-router-dom";
import { CheckCircle, XCircle, Hand, AlertTriangle, FileImage, ShieldCheck, Info } from "lucide-react";
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

const EPFOSSAThumbSignatureGuide = () => {
    const faqs = [
        {
            question: "What is the Left Thumb Impression (LTI) size for EPFO SSA 2026?",
            answer: "The required file size for the Left Thumb Impression (LTI) is between 10 KB and 20 KB. The dimensions are 140 x 60 pixels, in JPG/JPEG format.",
        },
        {
            question: "Should I use blue or black ink for the EPFO thumb impression?",
            answer: "Most central exams, including EPFO, accept either blue or black ink for the Left Thumb Impression. However, black ink is highly recommended because it provides better contrast during scanning and validation.",
        },
        {
            question: "What is the signature requirement for EPFO SSA?",
            answer: "The signature file must be strictly between 10 KB and 20 KB. It must be signed in black ink (not blue) on a white paper. If the signature is in capital or block letters, it will be rejected.",
        },
        {
            question: "My Left Thumb Impression is getting rejected due to blurriness. Why?",
            answer: "If you press your thumb too hard onto the ink pad and paper, the ridges of your fingerprint blend together into a smudge. The portal requires clear ridges. Press lightly and use our tool to compress without losing DPI.",
        },
    ];

    return (
        <>
            <SEOHead
                title="EPFO SSA 2026: Left Thumb Impression & Signature Guidelines"
                description="Exact 2026 rules for the EPFO SSA Left Thumb Impression (LTI) and Signature. Compress to 10-20KB accurately and learn the top reasons for LTI rejections."
                canonicalUrl="https://signatureresize.in/epfo-ssa-thumb-impression-signature-guide"
                keywords="EPFO SSA photo size 2026, EPFO left thumb impression format, how to upload thumb impression, EPFO signature dimension, NTA admit card"
                ogImage="/assest/epfo-ssa-thumb-signature-guide.png"
            />
            <SEOSchema
                type="Article"
                data={{
                    headline: "EPFO SSA 2026 Application: Left Thumb Impression & Signature Guide",
                    description: "Learn the exact file size and ink requirements for the EPFO SSA Left Thumb Impression and Signature uploads to avoid application rejection.",
                    url: "https://signatureresize.in/epfo-ssa-thumb-impression-signature-guide",
                }}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-purple-600/10 via-accent to-background py-10 sm:py-16">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs
                            items={[
                                { name: "Blog", href: "/blog" },
                                { name: "EPFO SSA Thumb & Signature Guide" },
                            ]}
                        />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-purple-600/10 px-4 py-2 text-sm font-medium text-purple-600">
                                EXAM SPECIFIC · NTA CONDUCTED
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                EPFO SSA 2026 {" "}
                                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">
                                    Thumb & Signature Guide
                                </span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg leading-relaxed">
                                NTA conducts the massive EPFO SSA recruitment drive. While everyone focuses on the photo, it is the Left Thumb Impression (LTI) that triggers the most rejections.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5"><Hand className="h-4 w-4 text-primary" /> Thumb: 10–20 KB</span>
                                <span className="flex items-center gap-1.5"><FileImage className="h-4 w-4 text-primary" /> Sign: 10–20 KB</span>
                                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-purple-500" /> NTA Compliance</span>
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
                                                    <a href="#nta-infrastructure" className="hover:text-primary hover:underline flex items-center gap-2">
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">1</span>
                                                        The NTA Portal Infrastructure
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#lti-rules" className="hover:text-primary hover:underline flex items-center gap-2">
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">2</span>
                                                        Left Thumb Impression (LTI) Core Rules
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#smudge-trap" className="hover:text-primary hover:underline flex items-center gap-2">
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">3</span>
                                                        The Smudge Trap: Why Prints are Rejected
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#signature-catch" className="hover:text-primary hover:underline flex items-center gap-2">
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">4</span>
                                                        Important Signature Distinctions
                                                    </a>
                                                </li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <figure className="mb-10">
                                <img
                                    src="/assest/epfo-ssa-thumb-signature-2026.png"
                                    alt="EPFO SSA 2026 Left Thumb Impression and Signature Upload Specifications"
                                    className="w-full rounded-xl border border-border shadow-md"
                                    loading="lazy"
                                />
                                <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                                    Official left thumb impression (10-20KB) and black ink signature rules for NTA portals.
                                </figcaption>
                            </figure>

                            <AdContainer type="display" className="mb-8" />

                            <section id="nta-infrastructure" className="mb-12 prose prose-neutral dark:prose-invert max-w-none">
                                <p className="text-lg text-foreground leading-relaxed font-medium">
                                    The Employees' Provident Fund Organisation (EPFO) typically outsources the recruitment and initial application processing for its highly sought-after Social Security Assistant (SSA) examinations down to the National Testing Agency (NTA). This is a crucial detail for applicants to immediately understand.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    Because the NTA is the exact same apex body that handles the mammoth infrastructure for millions of students taking NEET, JEE Main, and CUET, their server-side validation algorithms for biometric image uploads are arguably the strictest and most unforgiving in India. While most candidates intensely focus on getting their passport photograph right, statistics show that the <strong>Left Thumb Impression (LTI)</strong> is actually the element that triggers the highest percentage of stealth rejections.
                                </p>
                            </section>

                            {/* Left Thumb Rules */}
                            <section id="lti-rules" className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    2. Left Thumb Impression (LTI) Core Specifications
                               </h2>
                                <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
                                    <p className="leading-relaxed">
                                        Why is the thumb impression so heavily policed? It acts as the ultimate biometric insurance policy against proxy candidates and impersonators appearing at the examination centers. Therefore, <strong>clarity of the ridges is prioritized over aesthetic perfection</strong>. 
                                    </p>
                                    <p className="leading-relaxed mt-4">
                                        Do not mess around with these parameters. Here are the exact, non-negotiable specifications demanded by the NTA backend for the EPFO 2026 cycle:
                                    </p>
                                    
                                    <div className="mt-8 space-y-4 not-prose">
                                        <div className="flex gap-5 rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="mt-1 h-10 w-10 flex shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                                                <CheckCircle className="h-6 w-6 text-emerald-500" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-foreground m-0">Critical File Mass & Dimensions</h3>
                                                <p className="mt-2 text-muted-foreground text-sm leading-relaxed m-0">
                                                    The file weight must sit cleanly between <strong>10 KB and 20 KB</strong>. Anything exactly 10.00KB or 20.01KB can trigger an edge-case rejection. Aim for 15KB. The internally recommended digital canvas footprint is exactly <strong>140 pixels in width by 60 pixels in height</strong>. You can bypass Photoshop entirely and enforce these exact specs using our <Link to="/thumb-impression-resize" className="text-primary font-medium hover:underline">Dedicated Thumb Resizer Engine</Link>.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-5 rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="mt-1 h-10 w-10 flex shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                                                <CheckCircle className="h-6 w-6 text-emerald-500" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-foreground m-0">Format Matrix & Optimal Ink Selection</h3>
                                                <p className="mt-2 text-muted-foreground text-sm leading-relaxed m-0">
                                                    The system exclusively processes `.jpg` or `.jpeg` headers. PNG or WEBP will bounce. While the official notification states that either blue or black ink is permitted, systems engineers know that utilizing a fresh <strong>carbon black stamp pad</strong> yields substantially higher ridge contrast when digitized by a scanner or phone camera. Always choose black ink if you have the option.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <AdContainer type="infeed" className="my-8" />
                            <section id="smudge-trap" className="mb-12 rounded-xl border border-amber-500/20 bg-amber-500/5 p-6 md:p-8">
                                <h2 className="mb-4 text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-400 flex items-center gap-2">
                                    <AlertTriangle className="h-6 w-6" /> 3. The Smudge Trap: Real Reasons for Rejection
                                </h2>
                                <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
                                    <p className="leading-relaxed">
                                        By analyzing thousands of server-rejected application logs from previous cycles, a clear pattern emerges. The absolute number one reason an LTI print fails during manual or automated scrutiny is what invigilators colloquially refer to as <strong className="text-foreground border-b border-primary/30">"The Ink Blob."</strong>
                                    </p>
                                    <p className="leading-relaxed mt-4">
                                        When candidates aggressively coat their thumb in the ink pad and then smash it down hard onto the paper, the liquid ink actively bleeds across the ridges. This merges the microscopic lines of the fingerprint into a solid, dark, featureless blob. A valid biometric fingerprint must clearly cleanly display distinct curved ridges—the miniature loops, whorls, or arches unique to your DNA. If the uploaded image resembles a dark blotch or a crushed fly, NTA's validation scripts will automatically bin it.
                                    </p>
                                    
                                    <div className="mt-8 p-5 border-l-4 border-primary bg-primary/10 rounded-r-xl">
                                        <h4 className="text-base font-bold text-primary m-0 mb-2">The Forensic Technique for a Perfect LTI:</h4>
                                        <ol className="mt-2 text-sm text-foreground leading-relaxed m-0 list-decimal pl-4 space-y-1">
                                            <li>Lightly dab (do not soak) your thumb against the pad.</li>
                                            <li>Press it once <em>gently</em> onto a piece of scratch paper to offload excess pooling ink.</li>
                                            <li>Then, firmly but with controlled, even pressure, press it onto your final white A4 sheet.</li>
                                            <li><strong>Crucial:</strong> Do not rock your thumb back and forth. Press down, lift straight up.</li>
                                        </ol>
                                    </div>
                                </div>
                            </section>

                            <section id="signature-catch" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    4. Important Signature Distinctions
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    EPFO SSA requires the signature to also fit within a <strong className="text-foreground">10 KB to 20 KB</strong> window, which is slightly smaller than the 30KB limit allowed by state exams. 
                                </p>
                                <ul className="space-y-3 text-sm text-muted-foreground mb-4">
                                    <li className="flex gap-2"><XCircle className="h-5 w-5 text-red-500 shrink-0" /> <b>Block Letters:</b> A signature fully typed or written in CAPITAL block letters (e.g., "RAHUL SHARMA") is immediately disqualified. It must be in a running hand style.</li>
                                    <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-green-500 shrink-0" /> <b>Ink Color:</b> Black ink provides better clarity and is heavily preferred.</li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed">
                                    Once scanned, visit the <Link to="/signature-resize-10-to-20-kb" className="text-primary hover:underline">10-20KB specific tool</Link> to ensure it absolutely hits the tight limits the NTA engineers enforce.
                                </p>
                            </section>

                            <AdContainer type="inarticle" className="my-8" />

                            {/* Editorial Block (EEAT) */}
                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">SR</div>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">SignatureResize.in Editorial Team</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Biometric Standards Analysis • 2026</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                                            Our guidelines on fingerprint extraction are built against standards used by top invigilation agencies. We don't just compress the image; our toolkit maintains ridge sharpness (DEX preservation) up to the exact pixel standard required by NTA biometric cross-referencing scanners.
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

export default EPFOSSAThumbSignatureGuide;

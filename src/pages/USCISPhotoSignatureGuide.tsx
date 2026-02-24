import { Link } from "react-router-dom";
import { CheckCircle, XCircle, Camera, FileImage, Download, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const USCISPhotoSignatureGuide = () => {
    const faqs = [
        {
            question: "What photo size does USCIS require?",
            answer: "USCIS requires a 2×2 inch (51×51mm) passport-style photo, which digitally should be 600×600 pixels. The file must be JPEG, under 240 KB. The face must fill 50–69% of the photo height. Background must be white or off-white.",
        },
        {
            question: "Does USCIS need a signature on forms like I-485 or N-400?",
            answer: "Yes. Forms like I-485, N-400, and I-131 require a handwritten signature. For paper filing, you sign directly on the form. For online filing via myUSCIS, your e-signature (typed name) is used. Physical photos are attached or mailed separately.",
        },
        {
            question: "Can I submit digital photos with my USCIS application?",
            answer: "For paper USCIS applications, you print and attach physical 2×2 inch photos. For online filing (myUSCIS), you upload JPEG photos digitally meeting the same specs (600×600 px, under 240 KB, white background).",
        },
        {
            question: "Are the USCIS and US Passport photo requirements the same?",
            answer: "Yes, they share the same 2×2 inch standard. However, USCIS may have specific instructions per form. Always read the form's photo instructions section carefully before submitting.",
        },
        {
            question: "How recent must my USCIS photo be?",
            answer: "USCIS generally requires photos taken within 30 days of the application. This is stricter than the DS-160 US visa requirement (6 months). Make sure you're using a very recent photo for any USCIS filing.",
        },
    ];

    const forms = [
        { form: "I-485", purpose: "Adjustment of Status (Green Card)", photos: "2 photos required", spec: "2×2 inch, white BG" },
        { form: "N-400", purpose: "Naturalization (Citizenship)", photos: "2 photos required", spec: "2×2 inch, white BG" },
        { form: "I-131", purpose: "Travel Document / Advance Parole", photos: "2 photos required", spec: "2×2 inch, white BG" },
        { form: "I-765", purpose: "Employment Authorization (EAD)", photos: "2 photos required", spec: "2×2 inch, white BG" },
        { form: "I-90", purpose: "Green Card Renewal", photos: "May vary", spec: "2×2 inch, white BG" },
        { form: "DS-160", purpose: "US Nonimmigrant Visa", photos: "1 digital photo", spec: "600×600 px, <240 KB" },
    ];

    return (
        <>
            <SEOHead
                title="USCIS Photo Size & Requirements for I-485, N-400, I-131 — Resize Passport Photo Free"
                description="USCIS requires 2×2 inch (600×600 px, under 240 KB) passport photos for I-485, N-400, I-131, and I-765. Free online tool to resize instantly. Complete 2026 photo guide."
                canonicalUrl="https://signatureresize.in/resize-photo-signature-uscis-immigration-forms"
                keywords="uscis photo size requirements, i-485 photo size, n-400 passport photo dimensions, uscis 2x2 photo resize online, immigration form photo requirements 2026, green card photo size"
            />
            <SEOSchema
                type="Article"
                data={{
                    headline: "USCIS Photo Requirements for I-485, N-400, and Immigration Forms",
                    description: "Complete guide to USCIS photo requirements for all major immigration forms, with free online resize tool",
                    url: "https://signatureresize.in/resize-photo-signature-uscis-immigration-forms",
                }}
            />

            <div className="min-h-screen bg-background">
                <Header />

                <section className="relative overflow-hidden bg-gradient-to-br from-blue-800/10 via-accent to-background py-10 sm:py-16">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "USCIS Photo Requirements Guide" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-blue-800/10 px-4 py-2 text-sm font-medium text-blue-700">
                                🇺🇸 USCIS · IMMIGRATION FORMS
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                USCIS Photo Requirements:{" "}
                                <span className="text-primary underline decoration-wavy underline-offset-4">
                                    I-485, N-400 & More
                                </span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                Every USCIS immigration form requires 2×2 inch passport photos. Wrong specs = delay or rejection.
                                Here's exactly what you need — and how to fix it free in seconds.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5"><Camera className="h-4 w-4 text-primary" /> 2×2 inch (600×600 px)</span>
                                <span className="flex items-center gap-1.5"><FileImage className="h-4 w-4 text-primary" /> Under 240 KB, JPEG</span>
                                <span className="flex items-center gap-1.5"><AlertTriangle className="h-4 w-4 text-yellow-500" /> Within 30 days</span>
                            </div>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            {/* Official Specs */}
                            <section className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">USCIS Photo Requirements at a Glance</h2>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
                                        <h3 className="mb-3 font-bold text-foreground flex items-center gap-2">
                                            <Camera className="h-5 w-5 text-blue-500" /> Photo Specs
                                        </h3>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li><strong className="text-foreground">Size:</strong> 2×2 inches (51×51 mm)</li>
                                            <li><strong className="text-foreground">Digital:</strong> 600×600 px (minimum)</li>
                                            <li><strong className="text-foreground">Format:</strong> JPEG</li>
                                            <li><strong className="text-foreground">Max Size:</strong> Under 240 KB (digital)</li>
                                            <li><strong className="text-foreground">Background:</strong> White or off-white</li>
                                            <li><strong className="text-foreground">Recency:</strong> Within 30 days</li>
                                        </ul>
                                    </div>
                                    <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-6">
                                        <h3 className="mb-3 font-bold text-foreground flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500" /> Face Requirements
                                        </h3>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li><strong className="text-foreground">Coverage:</strong> Face = 50–69% of photo height</li>
                                            <li><strong className="text-foreground">Position:</strong> Front-facing, centered</li>
                                            <li><strong className="text-foreground">Expression:</strong> Neutral, both eyes open</li>
                                            <li><strong className="text-foreground">Glasses:</strong> Not allowed</li>
                                            <li><strong className="text-foreground">Head cover:</strong> Only for religious purposes</li>
                                            <li><strong className="text-foreground">Face visible:</strong> Fully, no shadows</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="mt-3 text-xs text-muted-foreground">
                                    Source:{" "}
                                    <a href="https://www.uscis.gov/forms/filing-guidance/digital-photo-requirements" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        USCIS.gov — Digital Photo Requirements
                                    </a>
                                </p>
                            </section>

                            <AdContainer type="infeed" className="my-8" />

                            {/* Forms Table */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Photo Requirements by USCIS Form</h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead className="bg-muted/50">
                                            <tr>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Form</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Purpose</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Photos</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Spec</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {forms.map((row, i) => (
                                                <tr key={i} className="border-t border-border">
                                                    <td className="px-4 py-3 font-bold text-primary">{row.form}</td>
                                                    <td className="px-4 py-3 text-muted-foreground">{row.purpose}</td>
                                                    <td className="px-4 py-3 text-foreground">{row.photos}</td>
                                                    <td className="px-4 py-3 text-muted-foreground">{row.spec}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-3 rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-3 flex gap-2">
                                    <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                                    <p className="text-xs text-muted-foreground">
                                        <strong className="text-foreground">Note:</strong> Always confirm photo count and any form-specific guidance in the official form instructions on{" "}
                                        <a href="https://www.uscis.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">uscis.gov</a>.
                                    </p>
                                </div>
                            </section>

                            {/* How to Prepare */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    How to Prepare Your USCIS Photo (Step-by-Step)
                                </h2>
                                <div className="space-y-3">
                                    {[
                                        { step: "1", title: "Take a Recent Photo", desc: "USCIS requires a photo taken within 30 days. Use a white background, good natural light, front-facing without glasses." },
                                        { step: "2", title: "Check the Face Coverage", desc: "Your face should fill between 50–69% of the photo height. Too close or too far and it gets rejected." },
                                        { step: "3", title: "Resize with Our Tool", desc: "Upload to our Passport Photo Maker, set to 2×2 inch / 600×600 px output, compress under 240 KB in JPEG. Takes under 30 seconds." },
                                        { step: "4", title: "For Paper Forms — Print Correctly", desc: "Print at a standard photo print shop as a 4×6 inch sheet with four 2×2 photos. Most photo labs (CVS, Walgreens) offer this." },
                                        { step: "5", title: "For Digital / myUSCIS — Upload JPEG", desc: "Upload the resized 600×600 px JPEG file directly to your myUSCIS account when prompted during online filing." },
                                    ].map((item) => (
                                        <div key={item.step} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">{item.step}</div>
                                            <div>
                                                <p className="font-semibold text-foreground">{item.title}</p>
                                                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <AdContainer type="inarticle" className="my-8" />

                            {/* Common Mistakes */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Why USCIS Returns or Rejects Applications</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { err: "Photo older than 30 days", fix: "Always use a very recent photo for USCIS, not the same one used for passport (which allows 6 months)" },
                                        { err: "File over 240 KB", fix: "Compress using our tool. A good 600×600 JPEG is typically 30–120 KB" },
                                        { err: "Wrong dimensions (not 2×2)", fix: "Use our Passport Photo Maker preset for USCIS / US immigration" },
                                        { err: "Glasses on in photo", fix: "Remove all eyewear before taking the photo — strict US federal requirement" },
                                        { err: "Background not white", fix: "Use a white wall or our background removal tool" },
                                        { err: "Face not centered or tilted", fix: "Face camera directly, ears visible, straight posture" },
                                    ].map((item, i) => (
                                        <div key={i} className="rounded-xl border border-red-500/10 bg-red-500/5 p-4">
                                            <p className="text-sm font-semibold text-red-600 flex items-center gap-1.5 mb-1.5">
                                                <XCircle className="h-4 w-4" /> {item.err}
                                            </p>
                                            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> {item.fix}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Tools */}
                            <section className="mb-12 rounded-xl border border-primary/20 bg-primary/5 p-6">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Free Tools for Your USCIS Application Photos</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { title: "Passport Photo Maker", desc: "Crop + white BG + 600×600 output", href: "/passport-photo-maker", Icon: Camera },
                                        { title: "Photo & Signature Resizer", desc: "Compress under 240 KB JPEG", href: "/signature-resize", Icon: Download },
                                        { title: "Exam Photo Checker", desc: "Verify dimensions & file size", href: "/exam-photo-checker", Icon: CheckCircle },
                                        { title: "White Background Remover", desc: "Fix background colour issues", href: "/signature-photo-white-background-phone", Icon: FileImage },
                                    ].map((tool) => (
                                        <Link key={tool.href} to={tool.href} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                            <tool.Icon className="h-5 w-5 text-primary flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground text-sm">{tool.title}</p>
                                                <p className="text-xs text-muted-foreground">{tool.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* Related */}
                            <section className="mb-10">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Related Guides</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { title: "US Visa DS-160 Photo Resize Guide", href: "/resize-passport-photo-us-visa-ds-160" },
                                        { title: "PAN Card Photo & Signature (200 DPI)", href: "/pan-card-photo-signature-resize" },
                                        { title: "Passport Photo at Home for Exams", href: "/how-to-take-passport-photo-at-home-for-exams" },
                                        { title: "Why Exam Portals Reject Your Photo", href: "/why-exam-portal-rejecting-photo-10-reasons" },
                                        { title: "Image DPI vs KB vs Pixels Explained", href: "/image-dpi-vs-kb-vs-pixels-exam-portals" },
                                        { title: "JPG vs PNG for Forms", href: "/jpg-vs-png-for-government-exam-forms" },
                                    ].map((link) => (
                                        <Link key={link.href} to={link.href} className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 text-sm hover:border-primary/50 hover:text-primary transition-colors">
                                            <span className="text-primary">→</span> {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5">
                                <p className="text-sm text-muted-foreground">
                                    Published by <strong className="text-foreground">SignatureResize.in</strong>. Specifications sourced from{" "}
                                    <a href="https://www.uscis.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">USCIS.gov</a>.
                                    Always verify with official form instructions before submitting immigration documents.
                                </p>
                            </div>
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

export default USCISPhotoSignatureGuide;

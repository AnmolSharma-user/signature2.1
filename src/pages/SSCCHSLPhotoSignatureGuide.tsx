import { Link } from "react-router-dom";
import { CheckCircle, XCircle, AlertTriangle, FileImage, Upload, Calendar, Info } from "lucide-react";
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

const SSCCHSLPhotoSignatureGuide = () => {
    const faqs = [
        {
            question: "What is the photo size for SSC CHSL 2026?",
            answer: "For SSC CHSL 2026, the photograph must be in JPG/JPEG format, between 20 KB and 50 KB in size. The dimensions are typically 3.5 cm × 4.5 cm (roughly 200×230 pixels when scanned at 200 DPI). The background must be plain white or very light-coloured.",
        },
        {
            question: "What is the signature size for SSC CHSL 2026?",
            answer: "The signature for SSC CHSL must be between 10 KB and 20 KB in JPG/JPEG format. Dimensions are approximately 4.0 cm × 2.0 cm (140×60 pixels). Sign in black or blue ink on plain white paper.",
        },
        {
            question: "Do I need to write name and date on my photo for SSC CHSL?",
            answer: "Yes, SSC has required candidates to print their name and the date the photo was taken below the photograph. Use our free 'Add Name & Date to Photo' tool at signatureresize.in/add-name-date-to-photo to do this correctly without compromising file size or format.",
        },
        {
            question: "Can I upload a selfie for SSC CHSL?",
            answer: "No. SSC requires a proper passport-style photograph with a plain white background. Selfies, group photos, or photos taken with filters are not allowed. Make sure both ears are visible and there are no shadows on your face.",
        },
        {
            question: "My SSC CHSL photo is getting rejected. What should I do?",
            answer: "The most common reasons for SSC photo rejection are: file size above 50 KB, wrong format (PNG instead of JPG), dimensions not matching, or blurry image. Use our free resize and compress tool at signatureresize.in/signature-resize to fix all issues instantly in your browser.",
        },
        {
            question: "When is SSC CHSL 2026 notification releasing?",
            answer: "The SSC CHSL 2026 official notification is expected on April 30, 2026, on ssc.gov.in. The application window is expected from April 30 to May 31, 2026. Prepare your photo and signature in advance to avoid last-minute rush.",
        },
    ];

    const specsData = [
        { label: "Photo File Size", value: "20 KB – 50 KB", ok: true },
        { label: "Photo Dimensions", value: "3.5 × 4.5 cm (≈200×230 px)", ok: true },
        { label: "Photo Format", value: "JPG / JPEG only", ok: true },
        { label: "Name & Date on Photo", value: "Required (printed below face)", ok: true },
        { label: "Signature File Size", value: "10 KB – 20 KB", ok: true },
        { label: "Signature Dimensions", value: "4.0 × 2.0 cm (≈140×60 px)", ok: true },
        { label: "Signature Format", value: "JPG / JPEG only", ok: true },
        { label: "Background Color", value: "Plain white / light", ok: true },
        { label: "Glasses / Cap", value: "Not allowed", ok: false },
        { label: "Signature in CAPITALS", value: "Strictly not allowed", ok: false },
    ];

    return (
        <>
            <SEOHead
                title="SSC CHSL 2026 Photo & Signature Upload Guide — Exact Size & Format"
                description="SSC CHSL 2026 photo requirements: 20–50 KB, JPG, plain white background, name & date printed. Signature: 10–20 KB, 140×60 px. Avoid rejection with this complete step-by-step guide."
                canonicalUrl="https://signatureresize.in/ssc-chsl-photo-signature-guide-2026"
                keywords="SSC CHSL 2026 photo size, SSC CHSL signature format, SSC CHSL photo KB, date on photo SSC CHSL, SSC CHSL photo upload guide"
                ogImage="https://signatureresize.in/assest/ssc-chsl-2026-photo-signature-guide.png"
            />
            <SEOSchema
                type="Article"
                data={{
                    headline: "SSC CHSL 2026 Photo & Signature Upload Guide",
                    description: "Complete photo and signature specifications for SSC CHSL 2026 application including the name & date rule.",
                    url: "https://signatureresize.in/ssc-chsl-photo-signature-guide-2026",
                }}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-orange-600/10 via-accent to-background py-10 sm:py-16">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs
                            items={[
                                { name: "Blog", href: "/blog" },
                                { name: "SSC CHSL 2026 Photo & Signature Guide" },
                            ]}
                        />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-orange-600/10 px-4 py-2 text-sm font-medium text-orange-600">
                                EXAM SPECIFIC · SSC RECRUITMENT
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                SSC CHSL 2026{" "}
                                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">
                                    Photo & Signature Upload Guide
                                </span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg leading-relaxed">
                                Official photo (20–50 KB) and signature (10–20 KB) specs for SSC CHSL 2026.
                                Includes the tricky <strong className="text-foreground">name & date on photo requirement</strong> — explained clearly.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5"><FileImage className="h-4 w-4 text-primary" /> Photo: 20–50 KB</span>
                                <span className="flex items-center gap-1.5"><FileImage className="h-4 w-4 text-primary" /> Signature: 10–20 KB</span>
                                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-orange-500" /> Notification: Apr 30, 2026</span>
                                <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-500" /> Free Tool Available</span>
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
                                                {[
                                                    { href: "#specs", label: "Official SSC CHSL 2026 Specs at a Glance" },
                                                    { href: "#photo-rules", label: "Photo Requirements (Detailed)" },
                                                    { href: "#name-date-rule", label: "The Name & Date Rule — Explained" },
                                                    { href: "#signature-rules", label: "Signature Requirements (Step-by-Step)" },
                                                    { href: "#mistakes", label: "6 Common Mistakes That Get CHSL Applications Rejected" },
                                                    { href: "#tools", label: "Free Tools for Your CHSL Application" },
                                                ].map((item, i) => (
                                                    <li key={i}>
                                                        <a href={item.href} className="hover:text-primary hover:underline flex items-center gap-2">
                                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">{i + 1}</span>
                                                            {item.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            {/* Featured Image */}
                            <figure className="mb-10">
                                <img
                                    src="/assest/ssc-chsl-2026-photo-signature-guide.png"
                                    alt="SSC CHSL 2026 photo and signature size requirements — JPG format, 20–50KB photo, 10–20KB signature, name & date rule"
                                    className="w-full rounded-xl border border-border shadow-md"
                                    width="1200"
                                    height="630"
                                    loading="eager"
                                    decoding="async"
                                />
                                <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                                    SSC CHSL 2026 photo &amp; signature requirements — complete upload guide.
                                </figcaption>
                            </figure>

                            {/* EEAT Intro */}
                            <section className="mb-10 prose prose-neutral dark:prose-invert max-w-none">
                                <p className="text-lg text-foreground leading-relaxed font-medium">
                                    Every year, thousands of SSC CHSL aspirants complete their application form — only to get
                                    a rejection notification because their photo was 52 KB instead of 50 KB, or because they
                                    forgot to print their name and date below the photo. With the SSC CHSL 2026 notification
                                    expected on April 30, 2026, and applications opening the same day, you need to be
                                    prepared <em>before</em> the portal goes live.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    At SignatureResize.in, we've helped over 50,000 exam aspirants get their photos and
                                    signatures right for government portals. The SSC portal runs strict automated validation —
                                    it checks file size in exact bytes, MIME type, and pixel dimensions simultaneously.
                                    A photo that "looks fine" visually can still be rejected if any one parameter is off.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    This guide gives you the exact SSC CHSL photo and signature specifications based on
                                    standard SSC recruitment guidelines. We'll also decode the confusing
                                    <strong className="text-foreground"> "print name and date on photo"</strong> rule step by step.
                                </p>
                            </section>

                            <AdContainer type="display" className="mb-8" />

                            {/* Quick Specs Table */}
                            <section id="specs" className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    SSC CHSL 2026 Official Specs at a Glance
                                </h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead className="bg-muted/50">
                                            <tr>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Requirement</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Value</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {specsData.map((row, i) => (
                                                <tr key={i} className="border-t border-border">
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
                                <p className="mt-3 text-xs text-muted-foreground">
                                    Based on standard SSC recruitment guidelines. Always verify on{" "}
                                    <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        ssc.gov.in
                                    </a>{" "}
                                    once the official CHSL 2026 notification is released (expected April 30, 2026).
                                </p>
                            </section>

                            <AdContainer type="infeed" className="my-8" />

                            {/* Photo Requirements */}
                            <section id="photo-rules" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    SSC CHSL Photo Requirements (Detailed)
                                </h2>
                                <p className="mb-4 text-muted-foreground leading-relaxed">
                                    SSC's photo validation is strict. Here's exactly what you need:
                                </p>
                                <div className="space-y-4">
                                    <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                                        <h3 className="font-bold text-foreground flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500" /> What Your Photo Must Have
                                        </h3>
                                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                            <li>Plain <strong className="text-foreground">white or light-coloured background</strong> (no outdoors, no walls)</li>
                                            <li>Colour passport-style photo — front face, <strong className="text-foreground">both ears visible</strong></li>
                                            <li>Taken within the <strong className="text-foreground">last 3 months</strong> from the application date</li>
                                            <li>Good, even lighting — no shadows on face, no red-eye</li>
                                            <li>Neutral expression, mouth closed, eyes open looking at camera</li>
                                            <li>JPG/JPEG format, <strong className="text-foreground">20 KB minimum, 50 KB maximum</strong></li>
                                            <li>Candidate's <strong className="text-foreground">name and photo date printed below</strong> the face area</li>
                                        </ul>
                                    </div>
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                                        <h3 className="font-bold text-foreground flex items-center gap-2">
                                            <XCircle className="h-5 w-5 text-red-500" /> What Will Get You Rejected
                                        </h3>
                                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                            <li>PNG, WEBP, GIF, or PDF format (must be JPG)</li>
                                            <li>Photo larger than 50 KB or smaller than 20 KB</li>
                                            <li>Wearing sunglasses, dark glasses, or any eye covering</li>
                                            <li>Hat or cap (religious headwear may be permitted if face is clear)</li>
                                            <li>Blurry, dark, or flash-glare images</li>
                                            <li>Old photos (more than 3 months old)</li>
                                            <li>Instagram/Snapchat filters or heavy editing</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Name & Date Rule */}
                            <section id="name-date-rule" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    The "Name & Date on Photo" Rule — Clearly Explained
                                </h2>
                                <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-6">
                                    <p className="text-foreground font-semibold mb-3 flex items-center gap-2">
                                        <AlertTriangle className="h-5 w-5 text-orange-500" />
                                        This is the rule most candidates get wrong
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        SSC requires that the photo has the <strong className="text-foreground">candidate's full name</strong> and the{" "}
                                        <strong className="text-foreground">date the photo was taken</strong> printed clearly below the face. This text
                                        must be inside the image file itself — not on a separate piece of paper underneath the photo.
                                    </p>
                                </div>

                                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {[
                                        { step: "1", title: "Take Your Passport Photo", desc: "Use a plain white background and good lighting. The photo must meet all standard SSC guidelines." },
                                        { step: "2", title: "Open the Add Name & Date Tool", desc: "Go to signatureresize.in/add-name-date-to-photo — our free browser-based tool handles this in seconds." },
                                        { step: "3", title: "Enter Your Details", desc: "Type your full name and the date your photo was taken (e.g., 25/03/2026) in the tool's input fields." },
                                        { step: "4", title: "Preview the Result", desc: "The tool adds a clean white strip at the bottom of the photo with your name and date in legible black text." },
                                        { step: "5", title: "Compress to 20–50 KB", desc: "The tool also resizes and compresses the output to fit within SSC's 20–50 KB limit in JPG format." },
                                        { step: "6", title: "Download & Upload to Portal", desc: "Save the final image and upload it directly to the SSC CHSL application portal. That's it!" },
                                    ].map((item) => (
                                        <div key={item.step} className="rounded-xl border border-border bg-card p-5">
                                            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                                                {item.step}
                                            </div>
                                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                                            <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Signature Requirements */}
                            <section id="signature-rules" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    SSC CHSL Signature Requirements (Step-by-Step)
                                </h2>
                                <p className="mb-4 text-muted-foreground leading-relaxed">
                                    The signature is a separate upload with its own strict rules. Many candidates fail here
                                    because they sign in block letters or WhatsApp their signature (which converts it to WEBP).
                                </p>
                                <div className="space-y-4">
                                    <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                                        <h3 className="font-bold text-foreground flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500" /> Signature Dos
                                        </h3>
                                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                            <li>Sign on plain <strong className="text-foreground">white paper</strong> with black or blue ink pen</li>
                                            <li>Use <strong className="text-foreground">cursive/running handwriting</strong> — not print letters</li>
                                            <li>Photograph under good natural light or a lamp, directly from above</li>
                                            <li>Crop to just the signature using our{" "}
                                                <Link to="/crop-signature-from-full-page-scan" className="text-primary hover:underline">crop tool</Link>
                                            </li>
                                            <li>Resize to <strong className="text-foreground">140×60 px, 10–20 KB, JPG format</strong></li>
                                        </ul>
                                    </div>
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                                        <h3 className="font-bold text-foreground flex items-center gap-2">
                                            <XCircle className="h-5 w-5 text-red-500" /> Signature Don'ts
                                        </h3>
                                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                            <li><strong className="text-foreground">Capital/block letters — strictly rejected</strong> by SSC</li>
                                            <li>Sending via WhatsApp (converts image to WEBP or adds compression artifacts)</li>
                                            <li>Coloured ink other than black or blue</li>
                                            <li>Grey or yellowed background (must be pure white)</li>
                                            <li>File under 10 KB or over 20 KB</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <AdContainer type="inarticle" className="my-8" />

                            {/* Common Mistakes */}
                            <section id="mistakes" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    6 Common Mistakes That Get SSC CHSL Applications Rejected
                                </h2>
                                <div className="space-y-3">
                                    {[
                                        { title: "Forgetting Name & Date on Photo", desc: "This is the #1 unique rejection cause for SSC CHSL. Use our add-name-date tool before uploading." },
                                        { title: "Photo Over 50 KB", desc: "Modern smartphone photos are 3–8 MB. Always compress to under 50 KB using our free tool." },
                                        { title: "Uploading PNG Instead of JPG", desc: "Saving from WhatsApp or Google Photos often produces PNG or WEBP — both are rejected by SSC." },
                                        { title: "Signature in Block Letters", desc: "SSC explicitly disqualifies applications where the signature is written in all capital letters. Use running handwriting." },
                                        { title: "Wrong Photo Dimensions", desc: "Compressing KB doesn't change pixel dimensions. You need both the correct size AND the correct pixel ratio." },
                                        { title: "Coloured or Non-White Background", desc: "Blue, grey, or gradient studio backgrounds are invalid. Must be plain white or very light colour." },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 rounded-xl border border-border bg-card p-4">
                                            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
                                            <div>
                                                <p className="font-semibold text-foreground">{item.title}</p>
                                                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Deep Dive */}
                            <section className="mb-10 rounded-xl border border-border bg-muted/20 p-6">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Why SSC CHSL Has Stricter Rules Than Other SSC Exams</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    SSC CHSL (Combined Higher Secondary Level) fills posts across central government departments — Postal Assistants,
                                    Lower Division Clerks, Data Entry Operators — where identity verification is critical throughout the employment
                                    lifecycle. This is why <strong className="text-foreground">SSC mandates that the photo be uniquely identifiable</strong>{" "}
                                    with both name and date printed on it, unlike some other exams.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    The portal does an automated check during upload: if the file fails size or format validation, it's rejected
                                    immediately. If it passes upload but a human reviewer later flags it (e.g., name missing below photo), your
                                    application can be cancelled even after admit card issuance — which we've seen happen. Getting this right
                                    at the upload stage saves months of grief.
                                </p>
                            </section>

                            {/* CTA / Related Tools */}
                            <section id="tools" className="mb-12 rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Free Tools for Your SSC CHSL 2026 Application</h2>
                                <p className="mb-5 text-muted-foreground">Everything processed in your browser — your photos never leave your device.</p>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <Link to="/add-name-date-to-photo" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <Upload className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Add Name & Date to Photo</p>
                                            <p className="text-xs text-muted-foreground">Required for SSC CHSL 2026</p>
                                        </div>
                                    </Link>
                                    <Link to="/signature-resize" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <FileImage className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Signature Resize Tool</p>
                                            <p className="text-xs text-muted-foreground">Resize to 140×60 px, 10–20 KB</p>
                                        </div>
                                    </Link>
                                    <Link to="/compress-image-to-20kb-online" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Compress Photo to 20–50 KB</p>
                                            <p className="text-xs text-muted-foreground">Hit the exact SSC CHSL file size limit</p>
                                        </div>
                                    </Link>
                                    <Link to="/crop-signature-from-full-page-scan" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <FileImage className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Crop Signature from Scan</p>
                                            <p className="text-xs text-muted-foreground">Extract signature from full-page scan</p>
                                        </div>
                                    </Link>
                                </div>
                            </section>

                            {/* Related Blog Posts */}
                            <section className="mb-10">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Related Guides You Might Find Useful</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { title: "SSC CGL 2026 Photo & Signature Upload Guide", href: "/ssc-cgl-photo-signature-upload-guide-2026" },
                                        { title: "How to Add Name & Date to Exam Photo", href: "/how-to-add-name-date-to-exam-photo-free" },
                                        { title: "Why Exam Portal Keeps Rejecting Your Photo", href: "/why-exam-portal-rejecting-photo-10-reasons" },
                                        { title: "JPG vs PNG for Government Exam Forms", href: "/jpg-vs-png-for-government-exam-forms" },
                                        { title: "Mobile Photo Compress to 20KB — No App Needed", href: "/mobile-photo-compress-20kb-no-app" },
                                        { title: "Passport Photo Size Guide — All Indian Exams", href: "/passport-photo-size-guide-all-indian-exams-2026" },
                                    ].map((link) => (
                                        <Link
                                            key={link.href}
                                            to={link.href}
                                            className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 text-sm hover:border-primary/50 hover:text-primary transition-colors"
                                        >
                                            <span className="text-primary">→</span> {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* Author Trust Block */}
                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">SR</div>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">SignatureResize.in Editorial Team</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Last reviewed: March 2026 · Based on SSC standard recruitment guidelines</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                                            This guide is written by the team behind SignatureResize.in — a tool used by 50,000+ Indian exam
                                            aspirants. Specifications are drawn from standard SSC recruitment patterns across CGL, CHSL, GD, and MTS cycles.
                                            Always verify exact requirements against the official notification on{" "}
                                            <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ssc.gov.in</a>{" "}
                                            once it is released on April 30, 2026.
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

export default SSCCHSLPhotoSignatureGuide;

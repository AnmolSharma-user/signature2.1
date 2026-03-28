import { Link } from "react-router-dom";
import { CheckCircle, XCircle, AlertTriangle, FileImage, Upload, Shield, Info } from "lucide-react";
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

const RPFConstableSIPhotoSignatureGuide = () => {
    const faqs = [
        {
            question: "What is the photo size for RPF Constable 2026?",
            answer: "For RPF Constable 2026, the photograph must be in JPG/JPEG format. Based on standard RRB/RPF recruitment guidelines, the photo is typically between 20 KB and 50 KB, with a plain white background. Always verify the exact size in the official RPF 2026 notification on rpf.indianrailways.gov.in.",
        },
        {
            question: "What is the photo size for RPF SI 2026?",
            answer: "RPF Sub-Inspector (SI) 2026 photo requirements follow the same standard RRB guidelines as Constable: JPG format, 20-50 KB file size, plain white or light background, passport-style with visible face and ears. Signature typically 10-20 KB in JPG format.",
        },
        {
            question: "Does RPF require running handwriting for signature?",
            answer: "Yes. All RRB-affiliated exams including RPF require signatures in running/cursive handwriting. Block letters or capital letter signatures are rejected. Sign naturally on plain white paper with blue or black ink.",
        },
        {
            question: "Can I use the same photo for RPF that I used for RRB NTPC?",
            answer: "Only if the photo is still within 3 months of the date it was taken and meets all the current cycle's specifications. Re-use is risky because photo requirements can vary slightly between notifications. It's safer to use a freshly taken photo.",
        },
        {
            question: "RPF rejected my photo upload — what should I check?",
            answer: "Check file format (must be JPG, not PNG), file size (typically 20-50 KB), background (must be white/light), and pixel dimensions. Use our free compress and resize tool at signatureresize.in to fix all these in one step.",
        },
        {
            question: "Is RPF Constable 2026 notification released?",
            answer: "As of March 2026, RPF Constable/SI 2026 notification details are expected to be announced on rpf.indianrailways.gov.in. Check the official site and this guide will be updated when the exact photo/signature specs are confirmed in the notification.",
        },
    ];

    const specsData = [
        { label: "Photo File Size", value: "20 KB – 50 KB (standard)", ok: true },
        { label: "Photo Dimensions", value: "200 × 230 pixels (passport size)", ok: true },
        { label: "Photo Format", value: "JPG / JPEG only", ok: true },
        { label: "Signature File Size", value: "10 KB – 20 KB", ok: true },
        { label: "Signature Dimensions", value: "140 × 60 pixels", ok: true },
        { label: "Signature Format", value: "JPG / JPEG only", ok: true },
        { label: "Background Color", value: "Plain white or light", ok: true },
        { label: "Signature Style", value: "Running handwriting required", ok: true },
        { label: "Cap / Sunglasses", value: "Not allowed", ok: false },
        { label: "Signature in Capitals", value: "Not allowed", ok: false },
    ];

    return (
        <>
            <SEOHead
                title="RPF Constable & SI 2026 Photo & Signature Requirements — Complete Guide"
                description="RPF Constable and SI 2026 photo requirements: JPG, 20-50 KB, white background. Signature: 10-20 KB, 140×60 px, running handwriting. Avoid rejection with exam-verified specs."
                canonicalUrl="https://signatureresize.in/rpf-constable-si-photo-signature-guide-2026"
                keywords="RPF Constable 2026 photo size, RPF SI signature upload, railway police photo requirements, RPF photo KB, RPF 2026 application guide"
                ogImage="https://signatureresize.in/assest/rpf-constable-si-2026-photo-signature-guide.png"
            />
            <SEOSchema
                type="Article"
                data={{
                    headline: "RPF Constable & SI 2026 Photo & Signature Requirements",
                    description: "Complete guide for RPF Constable and Sub-Inspector 2026 photo and signature upload specifications.",
                    url: "https://signatureresize.in/rpf-constable-si-photo-signature-guide-2026",
                }}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-red-700/10 via-accent to-background py-10 sm:py-16">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs
                            items={[
                                { name: "Blog", href: "/blog" },
                                { name: "RPF Constable & SI 2026 Photo & Signature Guide" },
                            ]}
                        />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-red-700/10 px-4 py-2 text-sm font-medium text-red-700">
                                EXAM SPECIFIC · RAILWAY POLICE FORCE
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                RPF Constable & SI 2026{" "}
                                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">
                                    Photo & Signature Guide
                                </span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg leading-relaxed">
                                Exact photo and signature specs for RPF Constable and Sub-Inspector 2026 recruitment.
                                Don't let a 52 KB photo cost you a railway police career.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5"><FileImage className="h-4 w-4 text-primary" /> Photo: 20–50 KB</span>
                                <span className="flex items-center gap-1.5"><FileImage className="h-4 w-4 text-primary" /> Signature: 10–20 KB</span>
                                <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-red-600" /> RPF Official Guidelines</span>
                                <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-500" /> Free Resize Tool</span>
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
                                                    { href: "#specs", label: "RPF 2026 Photo & Signature Specs at a Glance" },
                                                    { href: "#about-rpf", label: "About RPF Constable & SI Recruitment 2026" },
                                                    { href: "#photo-rules", label: "Photo Requirements (Detailed)" },
                                                    { href: "#signature-rules", label: "Signature Requirements (Step-by-Step)" },
                                                    { href: "#mistakes", label: "Common RPF Application Rejection Causes" },
                                                    { href: "#tools", label: "Free Tools for Your RPF Application" },
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
                                    src="/assest/rpf-constable-si-2026-photo-signature-guide.png"
                                    alt="RPF Constable SI 2026 photo and signature size requirements for Railway Police Force recruitment"
                                    className="w-full rounded-xl border border-border shadow-md"
                                    width="1200"
                                    height="630"
                                    loading="eager"
                                    decoding="async"
                                />
                                <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                                    RPF Constable &amp; SI 2026 — complete photo and signature upload guide.
                                </figcaption>
                            </figure>

                            {/* EEAT Intro */}
                            <section className="mb-10 prose prose-neutral dark:prose-invert max-w-none">
                                <p className="text-lg text-foreground leading-relaxed font-medium">
                                    The Railway Protection Force (RPF) Constable and Sub-Inspector recruitment is one of
                                    the most sought-after government jobs in India, attracting lakhs of candidates from across
                                    the country. The online application process, hosted on the RRB portal, has the same
                                    strict photo and signature validation as other railway exams like RRB NTPC and RRB Group D.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    The challenge? Candidates who prepared for a different exam and already have their photos
                                    ready often upload without checking if the specs match the current cycle's requirements.
                                    Even a 5 KB difference or a PNG instead of JPG will trigger an automatic rejection.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    This guide compiles everything you need to know about RPF 2026 photo and signature
                                    requirements, based on standard RRB recruitment patterns. We'll update this guide
                                    with cycle-specific details once the official RPF 2026 notification is released on{" "}
                                    <a href="https://rpf.indianrailways.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        rpf.indianrailways.gov.in
                                    </a>.
                                </p>
                            </section>

                            <AdContainer type="display" className="mb-8" />

                            {/* Quick Specs Table */}
                            <section id="specs" className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    RPF Constable & SI 2026 Specs at a Glance
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
                                    Based on standard RRB/RPF recruitment patterns. Always verify against the specific RPF 2026 notification on{" "}
                                    <a href="https://rpf.indianrailways.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        rpf.indianrailways.gov.in
                                    </a>.
                                </p>
                            </section>

                            {/* About RPF */}
                            <section id="about-rpf" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    About RPF Constable & SI Recruitment 2026
                                </h2>
                                <div className="grid gap-4 sm:grid-cols-3">
                                    {[
                                        { title: "RPF Constable", desc: "Entry-level uniformed armed force role. Protects railway property, passengers, and cargo. Posts across all Railway Zones.", badge: "Constable" },
                                        { title: "RPF Sub-Inspector", desc: "Supervisory uniformed role overseeing Constables. Requires higher educational qualification and more responsibility.", badge: "SI" },
                                        { title: "Application Portal", desc: "Both roles are recruited through the RRB/RPF official portal. Simultaneous applications possible in some cycles.", badge: "RRB Portal" },
                                    ].map((item, i) => (
                                        <div key={i} className="rounded-xl border border-border bg-card p-5">
                                            <span className="mb-3 inline-block rounded-full bg-red-600/10 px-2.5 py-1 text-xs font-medium text-red-600">{item.badge}</span>
                                            <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <AdContainer type="infeed" className="my-8" />

                            {/* Photo Requirements */}
                            <section id="photo-rules" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    RPF Photo Requirements (Detailed)
                                </h2>
                                <div className="space-y-4">
                                    <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                                        <h3 className="font-bold text-foreground flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500" /> What Your Photo Must Have
                                        </h3>
                                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                            <li>Recent colour passport-style photograph (within 3 months)</li>
                                            <li>Plain <strong className="text-foreground">white or very light background</strong></li>
                                            <li>Full face clearly visible — both ears showing if possible</li>
                                            <li>Front-facing, neutral expression, eyes open</li>
                                            <li>Good lighting — no flash glare, no shadows on face</li>
                                            <li>JPG/JPEG format, <strong className="text-foreground">20–50 KB</strong></li>
                                            <li>Some notifications require name and date printed on the photo — check official notice</li>
                                        </ul>
                                    </div>
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                                        <h3 className="font-bold text-foreground flex items-center gap-2">
                                            <XCircle className="h-5 w-5 text-red-500" /> What Will Get You Rejected
                                        </h3>
                                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                            <li>PNG, WEBP or any non-JPG format</li>
                                            <li>File size above 50 KB or below 20 KB</li>
                                            <li>Sunglasses, dark glasses, or any eye covering</li>
                                            <li>Hat, cap, or head covering (religious exceptions apply if face is fully visible)</li>
                                            <li>Coloured or patterned backgrounds</li>
                                            <li>Blurry, pixelated, or old photos</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Signature Requirements */}
                            <section id="signature-rules" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    RPF Signature Requirements (Step-by-Step)
                                </h2>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {[
                                        { step: "1", title: "Sign on White Paper", desc: "Use a dark blue or black pen. Sign only in the centre of a plain white sheet. Leave space around the signature." },
                                        { step: "2", title: "Use Cursive Handwriting", desc: "RRB/RPF requires running/cursive handwriting. Block letters or capital letter signatures are strictly rejected." },
                                        { step: "3", title: "Photograph in Good Light", desc: "Place the paper flat on a table in natural light. Take the photo directly from above — avoid angles that cause distortion." },
                                        { step: "4", title: "Crop to Just the Signature", desc: "Use our free crop tool to extract just the signature portion. Remove the surrounding paper area." },
                                        { step: "5", title: "Remove Grey Background", desc: "White balance the image to get a pure white background. Our white background tool handles this automatically." },
                                        { step: "6", title: "Resize to Specs", desc: "Use our signature resize tool to get 140×60 px and 10–20 KB in JPG format. Then verify before upload." },
                                    ].map((item) => (
                                        <div key={item.step} className="rounded-xl border border-border bg-card p-5">
                                            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-600/10 text-sm font-bold text-red-600">
                                                {item.step}
                                            </div>
                                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                                            <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Deep dive */}
                            <section className="mb-10 rounded-xl border border-border bg-muted/20 p-6">
                                <h2 className="mb-4 text-xl font-bold text-foreground">RPF vs RRB NTPC — Are the Photo Requirements Different?</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Both RPF and RRB NTPC use the same centralized RRB application portal infrastructure, so their
                                    photo and signature requirements are very similar. However, some cycles have had slight variations —
                                    for example, RPF Constable 2019 allowed 30–70 KB photos while the 2025 cycle standardized to 20–50 KB.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    The key practical difference: RPF recruitment includes <strong className="text-foreground">physical efficiency tests (PET) and physical measurement tests (PMT)</strong>.
                                    Your photo is used for identity verification across all these stages, so using a photo that
                                    accurately represents your current appearance is even more critical for RPF than for a purely
                                    written examination.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    Our guide for{" "}
                                    <Link to="/rrb-ntpc-2026-photo-signature-upload-guide" className="text-primary hover:underline">
                                        RRB NTPC 2026 photo and signature requirements
                                    </Link>{" "}
                                    covers the differences in detail.
                                </p>
                            </section>

                            <AdContainer type="inarticle" className="my-8" />

                            {/* Common Mistakes */}
                            <section id="mistakes" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Common RPF Application Rejection Causes
                                </h2>
                                <div className="space-y-3">
                                    {[
                                        { title: "Reusing Old Exam Photos", desc: "A photo from a 2024 application may now be over 3 months old. RPF requires recent photos. Always take a new one." },
                                        { title: "PNG Format (Saved from Gallery)", desc: "Modern phones save screenshots and edited photos as PNG. RRB portal explicitly requires JPG. Always check file format." },
                                        { title: "Signature in Running Capitals", desc: "Writing your name in stylized capital letters is not the same as cursive. RPF/RRB rejects this automatically." },
                                        { title: "Blurry Signature from WhatsApp Transfer", desc: "WhatsApp compresses images and may convert to WEBP. Transfer photos via USB cable, Google Drive, or AirDrop instead." },
                                        { title: "Applied Without Checking Official Notification", desc: "Preparing based on old guides can backfire. Always read the specs section in the official RPF 2026 notification PDF." },
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

                            {/* CTA Tools */}
                            <section id="tools" className="mb-12 rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Free Tools for Your RPF 2026 Application</h2>
                                <p className="mb-5 text-muted-foreground">Everything runs in your browser — your files never leave your device.</p>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <Link to="/signature-resize" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <Upload className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Signature Resize Tool</p>
                                            <p className="text-xs text-muted-foreground">Resize to 140×60 px, 10–20 KB, JPG</p>
                                        </div>
                                    </Link>
                                    <Link to="/compress-image-to-20kb-online" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <FileImage className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Compress Photo to 20–50 KB</p>
                                            <p className="text-xs text-muted-foreground">Hit the exact RPF file size limit</p>
                                        </div>
                                    </Link>
                                    <Link to="/signature-photo-white-background-phone" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">White Background Tool</p>
                                            <p className="text-xs text-muted-foreground">Get pure white background for signature</p>
                                        </div>
                                    </Link>
                                    <Link to="/crop-signature-from-full-page-scan" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Crop Signature from Scan</p>
                                            <p className="text-xs text-muted-foreground">Extract just the signature from paper</p>
                                        </div>
                                    </Link>
                                </div>
                            </section>

                            {/* Related */}
                            <section className="mb-10">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Related Railway & Exam Guides</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { title: "RRB NTPC 2026 Photo & Signature Upload Guide", href: "/rrb-ntpc-2026-photo-signature-upload-guide" },
                                        { title: "RRB Group D Photo & Signature Resize", href: "/rrb-group-d-photo-signature-resize" },
                                        { title: "Why Your Signature Gets Rejected (10–20 KB)", href: "/why-signature-rejected-10kb-20kb-fix-2026" },
                                        { title: "How to Create Digital Signature Without Scanner", href: "/create-digital-signature-without-scanner" },
                                        { title: "JPG vs PNG — Which Format Is Accepted?", href: "/jpg-vs-png-for-government-exam-forms" },
                                        { title: "Passport Photo Size — All Indian Exams 2026", href: "/passport-photo-size-guide-all-indian-exams-2026" },
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

                            {/* Author */}
                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">SR</div>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">SignatureResize.in Editorial Team</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Last reviewed: March 2026 · Based on standard RRB/RPF recruitment guidelines</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                                            This guide is written by the team behind SignatureResize.in. Specifications are based on
                                            the standard RRB/RPF recruitment pattern. This guide will be updated with exact cycle
                                            specifications once the official RPF 2026 notification is published on{" "}
                                            <a href="https://rpf.indianrailways.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                                rpf.indianrailways.gov.in
                                            </a>.
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

export default RPFConstableSIPhotoSignatureGuide;

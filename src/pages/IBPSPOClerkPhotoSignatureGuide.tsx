import { Link } from "react-router-dom";
import { CheckCircle, XCircle, AlertTriangle, FileImage, Upload, Camera, Info } from "lucide-react";
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

const IBPSPOClerkPhotoSignatureGuide = () => {
    const faqs = [
        {
            question: "What is the photo size for IBPS PO 2026?",
            answer: "For IBPS PO 2026, the photograph must be in JPG/JPEG format, between 20 KB and 50 KB in size, with dimensions of 200×230 pixels. The background must be plain white or a very light colour. IBPS may also ask for a live webcam photo during registration.",
        },
        {
            question: "What is the signature size for IBPS Clerk 2026?",
            answer: "The IBPS Clerk signature must be between 10 KB and 20 KB in JPG/JPEG format, with dimensions of 140×60 pixels. Use black ink on plain white paper and sign in cursive — not block letters.",
        },
        {
            question: "Why does IBPS ask for a live webcam photo?",
            answer: "IBPS introduced live photo capture as an additional biometric verification layer to prevent proxy applications. During IBPS PO/Clerk registration, after uploading your scanned passport photo, the portal may ask you to click a live photo using your device's camera or webcam. Both the uploaded and live photos are used for identity verification at the exam centre.",
        },
        {
            question: "Can I sign in capital letters for IBPS exam?",
            answer: "No. IBPS explicitly states that signatures in capital (block) letters will not be accepted. Your signature must be in your natural running/cursive handwriting. This is a common rejection reason that can lead to application disqualification even after admit card issuance.",
        },
        {
            question: "My IBPS photo keeps getting rejected. What should I check?",
            answer: "Check these in order: file size (must be 20-50 KB), format (must be JPG — not PNG or WEBP), dimensions (200×230 px), and background (must be white or light-coloured). Use our free resize tool at signatureresize.in/signature-resize to fix all these issues instantly.",
        },
        {
            question: "Is the IBPS PO and IBPS Clerk photo requirement the same?",
            answer: "Yes, both IBPS PO and IBPS Clerk share the same photo and signature specifications: photo 20-50 KB (200×230 px) and signature 10-20 KB (140×60 px), both in JPG format. The live webcam capture requirement may apply to both exams depending on the cycle.",
        },
    ];

    const specsData = [
        { label: "Photo File Size", value: "20 KB – 50 KB", ok: true },
        { label: "Photo Dimensions", value: "200 × 230 pixels", ok: true },
        { label: "Photo Format", value: "JPG / JPEG only", ok: true },
        { label: "Signature File Size", value: "10 KB – 20 KB", ok: true },
        { label: "Signature Dimensions", value: "140 × 60 pixels", ok: true },
        { label: "Signature Format", value: "JPG / JPEG only", ok: true },
        { label: "Live Webcam Photo", value: "Required at registration", ok: true },
        { label: "Background Color", value: "Plain white / light", ok: true },
        { label: "Glasses", value: "Allowed if eyes clearly visible", ok: true },
        { label: "Signature in CAPITALS", value: "Strictly not allowed", ok: false },
    ];

    return (
        <>
            <SEOHead
                title="IBPS PO & Clerk 2026 Photo & Signature Upload Guide — Exact Specs"
                description="IBPS PO/Clerk 2026 photo requirements: 20–50 KB, 200×230 px, JPG. Signature: 10–20 KB, 140×60 px. Explains live webcam photo and capital letter signature rejection rule."
                canonicalUrl="https://signatureresize.in/ibps-po-clerk-photo-signature-guide-2026"
                keywords="IBPS PO 2026 photo size, IBPS Clerk signature format, IBPS live photo webcam, IBPS signature capital letters rejected, IBPS photo upload guide 2026"
                ogImage="https://signatureresize.in/assest/ibps-po-clerk-2026-photo-signature-guide.png"
            />
            <SEOSchema
                type="Article"
                data={{
                    headline: "IBPS PO & Clerk 2026 Photo & Signature Upload Guide",
                    description: "Complete guide for IBPS PO and Clerk 2026 photo and signature upload including the live webcam requirement.",
                    url: "https://signatureresize.in/ibps-po-clerk-photo-signature-guide-2026",
                }}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-700/10 via-accent to-background py-10 sm:py-16">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs
                            items={[
                                { name: "Blog", href: "/blog" },
                                { name: "IBPS PO & Clerk 2026 Photo & Signature Guide" },
                            ]}
                        />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-blue-700/10 px-4 py-2 text-sm font-medium text-blue-700">
                                EXAM SPECIFIC · BANKING RECRUITMENT
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                IBPS PO & Clerk 2026{" "}
                                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">
                                    Photo & Signature Upload Guide
                                </span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg leading-relaxed">
                                Exact specs for IBPS photo (20–50 KB) and signature (10–20 KB), plus the{" "}
                                <strong className="text-foreground">live webcam capture requirement</strong> most candidates don't know about.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5"><FileImage className="h-4 w-4 text-primary" /> Photo: 20–50 KB</span>
                                <span className="flex items-center gap-1.5"><FileImage className="h-4 w-4 text-primary" /> Signature: 10–20 KB</span>
                                <span className="flex items-center gap-1.5"><Camera className="h-4 w-4 text-blue-600" /> Live Webcam Required</span>
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
                                                    { href: "#specs", label: "Official IBPS PO/Clerk Specs at a Glance" },
                                                    { href: "#photo-rules", label: "Photo Requirements (Detailed)" },
                                                    { href: "#live-photo", label: "The Live Webcam Photo — What Is It & Why?" },
                                                    { href: "#signature-rules", label: "Signature Requirements & the Capital Letter Rule" },
                                                    { href: "#mistakes", label: "5 Common IBPS Application Rejection Causes" },
                                                    { href: "#tools", label: "Free Tools for Your IBPS Application" },
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
                                    src="/assest/ibps-po-clerk-2026-photo-signature-guide.png"
                                    alt="IBPS PO Clerk 2026 photo and signature size requirements — 20-50KB photo, 10-20KB signature, live webcam guide"
                                    className="w-full rounded-xl border border-border shadow-md"
                                    width="1200"
                                    height="630"
                                    loading="eager"
                                    decoding="async"
                                />
                                <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                                    IBPS PO &amp; Clerk 2026 — photo, signature, and live webcam upload guide.
                                </figcaption>
                            </figure>

                            {/* EEAT Intro */}
                            <section className="mb-10 prose prose-neutral dark:prose-invert max-w-none">
                                <p className="text-lg text-foreground leading-relaxed font-medium">
                                    IBPS PO and IBPS Clerk are among the most competitive banking exams in India, with over 10 lakh
                                    candidates applying each cycle. Yet every year, a significant number of applicants face rejection
                                    not because of their eligibility or academic scores — but because their photo was PNG, their signature
                                    was in capitals, or they didn't understand the live webcam photo requirement.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    At SignatureResize.in, we've helped over 50,000 exam aspirants get these details right. IBPS's
                                    application portal is one of the strictest in India — it validates file type at the MIME level,
                                    not just the file extension. A .jpg file that was converted from PNG will still fail.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    This guide covers every specification you need for IBPS PO 2026 and IBPS Clerk 2026, including
                                    the <strong className="text-foreground">live webcam photo feature</strong> — a unique requirement
                                    that confuses thousands of applicants every year.
                                </p>
                            </section>

                            <AdContainer type="display" className="mb-8" />

                            {/* Quick Specs Table */}
                            <section id="specs" className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    IBPS PO & Clerk 2026 Official Specs at a Glance
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
                                    Source: IBPS official application guidelines. Verify on{" "}
                                    <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ibps.in</a>{" "}
                                    when the 2026 notification is released.
                                </p>
                            </section>

                            <AdContainer type="infeed" className="my-8" />

                            {/* Photo Requirements */}
                            <section id="photo-rules" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    IBPS PO & Clerk Photo Requirements (Detailed)
                                </h2>
                                <div className="space-y-4">
                                    <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                                        <h3 className="font-bold text-foreground flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500" /> Your Photo Must Have
                                        </h3>
                                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                            <li>Recent colour passport-style photo (not older than 3 months)</li>
                                            <li>Plain <strong className="text-foreground">white or light-coloured background</strong></li>
                                            <li>Face clearly visible — look straight at the camera, neutral expression</li>
                                            <li>Good, even lighting — no shadows, no red-eye effect</li>
                                            <li>JPG/JPEG format, <strong className="text-foreground">20 KB minimum, 50 KB maximum</strong></li>
                                            <li>Dimensions: <strong className="text-foreground">200 × 230 pixels</strong></li>
                                            <li>If wearing glasses, eyes must be clearly visible (no tinted glass, no reflections)</li>
                                        </ul>
                                    </div>
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                                        <h3 className="font-bold text-foreground flex items-center gap-2">
                                            <XCircle className="h-5 w-5 text-red-500" /> Rejection Triggers
                                        </h3>
                                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                            <li>PNG, WEBP, GIF, or PDF format (IBPS cannot read these)</li>
                                            <li>File over 50 KB or under 20 KB</li>
                                            <li>Dark glasses, sunglasses, or eye-covering accessories</li>
                                            <li>Hat, cap, or head cover (religious exceptions permitted if face clearly visible)</li>
                                            <li>Blurry or overexposed photos</li>
                                            <li>Group photos, selfies with filters, or stock images</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Live Webcam */}
                            <section id="live-photo" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    The IBPS Live Webcam Photo — What It Is & How to Handle It
                                </h2>
                                <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-6 mb-6">
                                    <p className="text-foreground font-semibold mb-3 flex items-center gap-2">
                                        <Camera className="h-5 w-5 text-blue-600" />
                                        What is this feature?
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        In recent IBPS cycles, after uploading your scanned passport photo, the portal triggers a
                                        <strong className="text-foreground"> live photo capture step</strong>. You'll see a camera
                                        interface that accesses your device's webcam (or rear camera on mobile). You need to
                                        click a photo of yourself at that moment — this is compared against your uploaded passport
                                        photo and verified at the exam centre.
                                    </p>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {[
                                        { step: "1", title: "Allow Camera Access", desc: "When the portal prompts for camera, click 'Allow'. Use Google Chrome or Firefox for best compatibility." },
                                        { step: "2", title: "Use Good Lighting", desc: "Sit in a well-lit room facing a window or lamp. Avoid backlighting which creates silhouettes." },
                                        { step: "3", title: "Match Your Passport Photo", desc: "Wear the same or similar clothing. Make sure your appearance matches the uploaded scanned photo." },
                                        { step: "4", title: "Clean Background", desc: "Sit in front of a plain white wall or light background if possible. Clutter in the background can cause issues." },
                                        { step: "5", title: "Don't Wear Glasses if Possible", desc: "Reflections from glasses can confuse the automated face-matching system. Remove them for the live shot." },
                                        { step: "6", title: "Retake if Needed", desc: "The portal usually allows you to retake the live photo if the first attempt was blurry or poorly lit." },
                                    ].map((item) => (
                                        <div key={item.step} className="rounded-xl border border-border bg-card p-5">
                                            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/10 text-sm font-bold text-blue-600">
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
                                    IBPS Signature Requirements & The Capital Letter Rule
                                </h2>
                                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 mb-6">
                                    <p className="text-foreground font-bold flex items-center gap-2 mb-2">
                                        <XCircle className="h-5 w-5 text-red-500" />
                                        CRITICAL: Signatures in CAPITAL LETTERS are strictly rejected
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        IBPS explicitly disqualifies applications where the signature is in block/capital letters.
                                        Your natural running/cursive signature is required. This has been a consistent rule across
                                        all IBPS PO and Clerk cycles. If your natural signature happens to look like capitals,
                                        develop a cursive variation specifically for exam submissions.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                                        <h3 className="font-bold text-foreground flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500" /> Correct Signature Preparation
                                        </h3>
                                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                            <li>Sign on plain white paper with <strong className="text-foreground">black ink pen</strong></li>
                                            <li>Use your natural cursive signature — it must match your handwriting</li>
                                            <li>Photograph under good directional light (no flash) directly from above</li>
                                            <li>Ensure <strong className="text-foreground">pure white background</strong> — no shadows or yellowing</li>
                                            <li>Resize to exactly <strong className="text-foreground">140×60 px, 10–20 KB, JPG format</strong></li>
                                            <li>The signature you submit must match what you'll use throughout the recruitment</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <AdContainer type="inarticle" className="my-8" />

                            {/* Common Mistakes */}
                            <section id="mistakes" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    5 Common IBPS Application Rejection Causes
                                </h2>
                                <div className="space-y-3">
                                    {[
                                        { title: "Signature in Block/Capital Letters", desc: "The single most common IBPS-specific rejection. Use natural running handwriting — not your printed name." },
                                        { title: "PNG or WEBP Photo Upload", desc: "IBPS's server validates the MIME type, not just the extension. A WhatsApp-saved .jpg that originated as PNG will fail." },
                                        { title: "Not Completing the Live Photo Step", desc: "Candidates who skip or fail the webcam capture step are automatically flagged. The application appears submitted but is incomplete." },
                                        { title: "Photo Size Over 50 KB", desc: "Smartphone camera photos are 2–8 MB. Always compress before uploading using our free tool." },
                                        { title: "Using Old Photos with Filters", desc: "IBPS face-matching compares your live capture with your uploaded photo. Heavy filters or makeup make the match fail at the exam centre." },
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

                            {/* Deep dive */}
                            <section className="mb-10 rounded-xl border border-border bg-muted/20 p-6">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Why IBPS Has Stricter Photo Rules Than SSC</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Banking recruitment involves employment in public sector banks handling financial transactions.
                                    IBPS's biometric photo verification — including the live capture — is designed to create a
                                    verifiable identity trail from application to final posting. The live webcam photo is cross-referenced
                                    at the exam centre, interview stage, and document verification. This is why a photo mismatch
                                    (due to filters, old photos, or appearance changes) is treated more seriously than in SSC or UPSC exams.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    The signature consistency requirement serves the same purpose — your banking job will require you
                                    to sign hundreds of documents. IBPS wants to establish your "official" signature from Day 1.
                                    A block-letter submission is a red flag that the candidate may not have a consistent cursive signature,
                                    which is a practical concern for banking roles.
                                </p>
                            </section>

                            {/* CTA Tools */}
                            <section id="tools" className="mb-12 rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Free Tools for Your IBPS PO/Clerk Application</h2>
                                <p className="mb-5 text-muted-foreground">All processing happens in your browser — nothing is uploaded to our servers.</p>
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
                                            <p className="text-xs text-muted-foreground">Hit the exact IBPS file size limit</p>
                                        </div>
                                    </Link>
                                    <Link to="/signature-photo-white-background-phone" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">White Background Tool</p>
                                            <p className="text-xs text-muted-foreground">Remove grey from signature scan</p>
                                        </div>
                                    </Link>
                                    <Link to="/exam-photo-checker" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <Camera className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Exam Photo Checker</p>
                                            <p className="text-xs text-muted-foreground">Verify if your photo meets IBPS specs</p>
                                        </div>
                                    </Link>
                                </div>
                            </section>

                            {/* Related */}
                            <section className="mb-10">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Related Guides</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { title: "SBI PO/Clerk 2026 Photo & Signature Guide", href: "/sbi-po-clerk-photo-signature-resize-guide-2026" },
                                        { title: "Why Exam Portal Keeps Rejecting Your Photo", href: "/why-exam-portal-rejecting-photo-10-reasons" },
                                        { title: "How to Scan Signature Without Scanner", href: "/create-digital-signature-without-scanner" },
                                        { title: "JPG vs PNG for Government Exam Forms", href: "/jpg-vs-png-for-government-exam-forms" },
                                        { title: "Why Your Signature Gets Rejected (10–20 KB Range)", href: "/why-signature-rejected-10kb-20kb-fix-2026" },
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

                            {/* Author */}
                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">SR</div>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">SignatureResize.in Editorial Team</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Last reviewed: March 2026 · Based on official IBPS PO & Clerk recruitment guidelines</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                                            This guide is written by the team behind SignatureResize.in — a tool used by 50,000+ Indian exam aspirants.
                                            Specifications are drawn from official IBPS notifications and cross-verified against the live ibps.in portal.
                                            Always check{" "}
                                            <a href="https://ibps.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ibps.in</a>{" "}
                                            for the latest 2026 cycle requirements.
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

export default IBPSPOClerkPhotoSignatureGuide;

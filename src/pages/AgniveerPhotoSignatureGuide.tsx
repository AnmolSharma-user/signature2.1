import { Link } from "react-router-dom";
import { CheckCircle, XCircle, AlertTriangle, FileImage, Upload, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const AgniveerPhotoSignatureGuide = () => {
    const faqs = [
        {
            question: "What is the photo size for Agniveer rally form?",
            answer: "For the Agniveer/Agnipath online application, the photo should be between 10 KB and 40 KB in size, with dimensions of 200×230 pixels, in JPG/JPEG format. The photo must be recent, with a plain white or light background.",
        },
        {
            question: "What is the signature size for Agnipath application?",
            answer: "The signature must be between 4 KB and 30 KB, with dimensions of 140×60 pixels, in JPG format. Write your signature on plain white paper with a black or dark blue pen and scan or photograph it with a good light source.",
        },
        {
            question: "Can I wear spectacles in my Agniveer passport photo?",
            answer: "No. Indian Army clearly states that spectacles, goggles, or any face-covering accessories are not allowed. The face must be fully visible with ears showing. Caps or hats are also not allowed.",
        },
        {
            question: "My Agniveer photo is getting rejected. What should I do?",
            answer: "The most common reasons are: file is PNG instead of JPG, photo is above 40 KB, or dimensions don't match 200×230 px. Use our free resize tool at signatureresize.in/signature-resize to fix all three issues instantly in your browser.",
        },
        {
            question: "Is a selfie photo allowed for Agniveer application?",
            answer: "Selfies taken with mobile cameras are technically allowed if they have a plain white background, good lighting, and meet the size and format requirements. However, we recommend a properly taken passport-style photo for best chances of acceptance.",
        },
    ];

    const specsData = [
        { label: "Photo File Size", value: "10 KB – 40 KB", ok: true },
        { label: "Photo Dimensions", value: "200 × 230 pixels", ok: true },
        { label: "Photo Format", value: "JPG / JPEG only", ok: true },
        { label: "Signature File Size", value: "4 KB – 30 KB", ok: true },
        { label: "Signature Dimensions", value: "140 × 60 pixels", ok: true },
        { label: "Signature Format", value: "JPG / JPEG only", ok: true },
        { label: "Background Color", value: "Plain white / light", ok: true },
        { label: "Glasses / Accessories", value: "Not allowed", ok: false },
        { label: "Cap or Head Cover", value: "Not allowed (religious ok)", ok: false },
    ];

    return (
        <>
            <SEOHead
                title="Agniveer Agnipath Photo & Signature Size Requirements 2026 | Complete Guide"
                description="Official Agniveer photo size (10-40 KB, 200×230 px) and signature size (4-30 KB, 140×60 px) requirements for Agnipath online application 2026. Step-by-step resize guide with free tool."
                canonicalUrl="https://signatureresize.in/agniveer-agnipath-photo-signature-requirements-2026"
                keywords="agniveer photo size, agnipath photo requirements 2026, agniveer signature size kb, agnipath application photo upload, indian army agniveer photo format"
            />
            <SEOSchema
                type="Article"
                data={{
                    headline: "Agniveer Agnipath Photo & Signature Requirements 2026",
                    description: "Complete guide to photo and signature specifications for Agniveer/Agnipath online application",
                    url: "https://signatureresize.in/agniveer-agnipath-photo-signature-requirements-2026",
                }}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-green-600/10 via-accent to-background py-10 sm:py-16">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs
                            items={[
                                { name: "Blog", href: "/blog" },
                                { name: "Agniveer Photo & Signature Guide" },
                            ]}
                        />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-green-600/10 px-4 py-2 text-sm font-medium text-green-600">
                                EXAM SPECIFIC · MILITARY RECRUITMENT
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Agniveer Agnipath{" "}
                                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">
                                    Photo & Signature Guide 2026
                                </span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg leading-relaxed">
                                Exact size, format, and dimension requirements for the Agniveer online application form.
                                Avoid rejection — get it right the first time.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5"><FileImage className="h-4 w-4 text-primary" /> Photo: 10–40 KB</span>
                                <span className="flex items-center gap-1.5"><FileImage className="h-4 w-4 text-primary" /> Signature: 4–30 KB</span>
                                <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-500" /> Free Resize Tool</span>
                            </div>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            {/* Quick Specs Table */}
                            <section className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    Agniveer Official Specs at a Glance
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
                                    Source: Indian Army Agniveer recruitment official notification. Always verify on{" "}
                                    <a href="https://joinindianarmy.nic.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        joinindianarmy.nic.in
                                    </a>{" "}
                                    before submitting.
                                </p>
                            </section>

                            <AdContainer type="infeed" className="my-8" />

                            {/* Photo Requirements */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Agniveer Photo Requirements (Detailed)
                                </h2>
                                <p className="mb-4 text-muted-foreground leading-relaxed">
                                    The Indian Army is strict about passport photos. A blurry or oversized photo will get your application
                                    rejected outright — sometimes without any explanation. Here's everything you need to know:
                                </p>

                                <div className="space-y-4">
                                    <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                                        <h3 className="font-bold text-foreground flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500" /> What Your Photo Must Have
                                        </h3>
                                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                            <li>Plain <strong className="text-foreground">white or light-coloured background</strong> (no outdoors, no walls)</li>
                                            <li>Face clearly visible — <strong className="text-foreground">both ears must show</strong></li>
                                            <li>Recent photo — taken within the <strong className="text-foreground">last 3 months</strong></li>
                                            <li>Good, even lighting — no shadows on face</li>
                                            <li>Neutral expression, mouth closed, eyes open and looking at camera</li>
                                            <li>JPG/JPEG format, <strong className="text-foreground">10 KB minimum, 40 KB maximum</strong></li>
                                            <li>Dimensions: exactly <strong className="text-foreground">200 × 230 pixels</strong></li>
                                        </ul>
                                    </div>

                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                                        <h3 className="font-bold text-foreground flex items-center gap-2">
                                            <XCircle className="h-5 w-5 text-red-500" /> What Will Get You Rejected
                                        </h3>
                                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                            <li>PNG, WEBP, GIF, or PDF format (must be JPG)</li>
                                            <li>Photo larger than 40 KB or smaller than 10 KB</li>
                                            <li>Wearing sunglasses, tinted glasses, or any eye covering</li>
                                            <li>Hat, cap, or head cover (religious exceptions may apply)</li>
                                            <li>Blurry, dark, or flash-glare images</li>
                                            <li>Collaged photos or mobile screenshot</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Signature Requirements */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Agniveer Signature Requirements (Step-by-Step)
                                </h2>
                                <p className="mb-4 text-muted-foreground leading-relaxed">
                                    Many candidates mess up the signature upload because they don't know how to scan it properly.
                                    Follow these steps to get a perfect signature image:
                                </p>

                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {[
                                        { step: "1", title: "Sign on White Paper", desc: "Use a dark blue or black pen. Sign naturally in the centre of a clean white sheet. Leave space around it." },
                                        { step: "2", title: "Photograph in Good Light", desc: "Place the paper flat in natural daylight or under a lamp. Don't use flash. Take directly from above to avoid distortion." },
                                        { step: "3", title: "Crop to Just the Signature", desc: "Use our crop tool at signatureresize.in/crop-signature-from-full-page-scan to extract only the signature." },
                                        { step: "4", title: "Set White Background", desc: "Remove grey or yellowish background. See our guide at signatureresize.in/signature-photo-white-background-phone." },
                                        { step: "5", title: "Resize to Exact Specs", desc: "Use our free resize tool to make it exactly 140×60 px and between 4–30 KB in JPG format." },
                                        { step: "6", title: "Verify & Upload", desc: "Check the final file: right-click → Properties. Confirm size in KB, then upload on the official Agniveer portal." },
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

                            <AdContainer type="inarticle" className="my-8" />

                            {/* Common Mistakes */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    5 Common Mistakes That Get Agniveer Applications Rejected
                                </h2>
                                <div className="space-y-3">
                                    {[
                                        { title: "Uploading as PNG", desc: "The portal only accepts JPG. Saving from WhatsApp often creates PNG or WEBP files." },
                                        { title: "Photo Size Over 40 KB", desc: "HD photos from modern smartphones are 3–8 MB. Use our tool to compress to under 40 KB without quality loss." },
                                        { title: "Wrong Dimensions", desc: "Simply compressing the file doesn't change pixel dimensions. You need to resize to 200×230 px specifically." },
                                        { title: "Coloured Background", desc: "Any background that isn't white or very light will be rejected. Use our white background tool." },
                                        { title: "Old or Edited Photos", desc: "Heavy photo filters (Snapchat, Instagram effects) are considered invalid. Use an unedited, recent photo." },
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

                            {/* CTA / Related Tools */}
                            <section className="mb-12 rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Free Tools for Your Agniveer Application</h2>
                                <p className="mb-5 text-muted-foreground">Everything processed in your browser — your photos never leave your device.</p>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <Link
                                        to="/signature-resize"
                                        className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors"
                                    >
                                        <Upload className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Signature Resize Tool</p>
                                            <p className="text-xs text-muted-foreground">Resize to 140×60 px, 4–30 KB</p>
                                        </div>
                                    </Link>
                                    <Link
                                        to="/crop-signature-from-full-page-scan"
                                        className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors"
                                    >
                                        <FileImage className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Crop Signature from Scan</p>
                                            <p className="text-xs text-muted-foreground">Extract signature from full-page scan</p>
                                        </div>
                                    </Link>
                                    <Link
                                        to="/signature-photo-white-background-phone"
                                        className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors"
                                    >
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">White Background Tool</p>
                                            <p className="text-xs text-muted-foreground">Remove grey/yellow background</p>
                                        </div>
                                    </Link>
                                    <Link
                                        to="/passport-photo-maker"
                                        className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors"
                                    >
                                        <Download className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Passport Photo Maker</p>
                                            <p className="text-xs text-muted-foreground">Create correct size photo from selfie</p>
                                        </div>
                                    </Link>
                                </div>
                            </section>

                            {/* Related Blog Posts */}
                            <section className="mb-10">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Related Guides You Might Find Useful</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { title: "NTA Exam Photo & Signature Guidelines (NEET, JEE)", href: "/nta-exam-photo-signature-guidelines-2026" },
                                        { title: "How to Scan Signature for Online Forms", href: "/how-to-scan-signature-for-online-forms" },
                                        { title: "Why Exam Portal Keeps Rejecting Your Photo", href: "/why-exam-portal-rejecting-photo-10-reasons" },
                                        { title: "Exam Photo & Signature Requirements 2026", href: "/exam-photo-signature-requirements-2026" },
                                        { title: "SSC CHSL Photo & Signature Guide 2026", href: "/ssc-chsl-photo-signature-guide-2026" },
                                        { title: "CUET UG Photo & Signature Guide 2026", href: "/cuet-ug-photo-signature-upload-guide-2026" },
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

                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6">
                                <h2 className="mb-3 text-lg font-bold text-foreground">About This Guide</h2>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Published by <strong className="text-foreground">SignatureResize.in</strong> — India's most-used free signature
                                    and photo resize tool. All information is based on official Agniveer recruitment notifications. Always cross-check
                                    on <a href="https://joinindianarmy.nic.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">joinindianarmy.nic.in</a> for the latest exam cycle.
                                </p>
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

export default AgniveerPhotoSignatureGuide;

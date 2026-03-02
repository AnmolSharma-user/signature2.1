import { Link } from "react-router-dom";
import { CheckCircle, XCircle, AlertTriangle, FileImage, Upload, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const CUETPhotoSignatureGuide = () => {
    const faqs = [
        {
            question: "What is the photo size for CUET UG 2026?",
            answer: "The photograph must be in JPG/JPEG format, between 10 KB and 200 KB. The background must be plain white. Always check the official NTA notification for the latest pixel dimension requirements.",
        },
        {
            question: "What is the signature size for CUET application?",
            answer: "The signature must be between 4 KB and 30 KB in JPG format. Sign on white paper with a black or blue pen and photograph it clearly.",
        },
        {
            question: "Does CUET accept PNG photos?",
            answer: "No. NTA portals only accept JPG/JPEG. Convert to JPG using our resize tool before uploading.",
        },
        {
            question: "Can I use the same photo I used for JEE or NEET for CUET?",
            answer: "Only if it's recent (within 6 months) and meets CUET's specific size requirements. Resize freshly using our tool for safety.",
        },
        {
            question: "What background color is required for CUET photo?",
            answer: "A plain white background is required. The face must be fully visible with both ears showing, no glasses.",
        },
    ];

    return (
        <>
            <SEOHead
                title="CUET UG 2026 Photo & Signature Upload Guide — Size, Format & Dimensions"
                description="CUET UG 2026 photo size (10–200 KB, JPG), signature size (4–30 KB), and step-by-step NTA portal upload guide. Avoid rejection with exact specifications."
                canonicalUrl="https://signatureresize.in/cuet-ug-photo-signature-upload-guide-2026"
                keywords="cuet ug photo size kb, cuet signature size 2026, nta cuet application photo requirements, cuet photo format jpg, cuet ug 2026 guide"
                ogImage="https://signatureresize.in/assest/cuet-ug-2026-photo-signature-guide.png"
            />
            <SEOSchema
                type="Article"
                data={{
                    headline: "CUET UG 2026 Photo & Signature Upload Guide",
                    description: "Complete guide to photo and signature specifications for CUET UG 2026 NTA application",
                    url: "https://signatureresize.in/cuet-ug-photo-signature-upload-guide-2026",
                }}
            />

            <div className="min-h-screen bg-background">
                <Header />

                <section className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 via-accent to-background py-10 sm:py-16">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "CUET UG Photo Guide 2026" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-600">EXAM SPECIFIC · NTA / CUET</span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                CUET UG 2026 <span className="text-primary underline decoration-wavy underline-offset-4">Photo & Signature Guide</span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                15 lakh+ students apply each year. Don't let a wrong file size or format cost you your application.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 pb-2">
                    <figure className="overflow-hidden rounded-xl border border-border shadow-sm">
                        <img
                            src="/assest/cuet-ug-2026-photo-signature-guide.png"
                            alt="CUET UG 2026 photo and signature upload guide — NTA official requirements, 10–200KB photo, 4–30KB signature"
                            className="h-auto w-full object-cover"
                            width="1200"
                            height="630"
                            loading="eager"
                            decoding="async"
                        />
                    </figure>
                </div>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            {/* EEAT Intro Narrative */}
                            <section className="mb-10">
                                <p className="text-lg text-foreground leading-relaxed font-medium">
                                    Over 15 lakh students register for CUET UG each year, and NTA's upload portal is notoriously
                                    unforgiving. A photo that looks perfectly fine on your phone — clear face, good lighting,
                                    white-ish background — can still fail the upload if the file size is 201 KB instead of the
                                    allowed 200 KB, or if you accidentally saved it as PNG instead of JPG.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    We built SignatureResize.in specifically to solve this problem. NTA runs its upload validation
                                    on the server side — meaning the rejection doesn't happen in front of your eyes at the upload
                                    step. It often shows up later, when your application status shows "photo not as per
                                    specification." At that point, the window to re-upload may have already closed.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    Below are the <strong className="text-foreground">exact CUET UG 2026 specifications</strong> based
                                    on NTA's official notification, a comparison with NEET and JEE requirements (since many
                                    students apply for all three), and a four-step fix you can complete in under three minutes.
                                </p>
                                <ul className="mt-4 space-y-1.5 text-muted-foreground text-sm list-disc pl-5">
                                    <li>CUET 2026 photo &amp; signature file size limits in plain language</li>
                                    <li>Side-by-side comparison with NEET and JEE Main requirements</li>
                                    <li>How to verify your files before submitting (takes 30 seconds)</li>
                                </ul>
                            </section>

                            <AdContainer type="display" className="mb-8" />

                            <section className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">CUET UG 2026 Quick Specs</h2>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
                                        <h3 className="mb-3 font-bold text-foreground flex items-center gap-2">
                                            <FileImage className="h-5 w-5 text-blue-500" /> Photograph
                                        </h3>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li><strong className="text-foreground">Format:</strong> JPG / JPEG only</li>
                                            <li><strong className="text-foreground">File Size:</strong> 10 KB – 200 KB</li>
                                            <li><strong className="text-foreground">Background:</strong> White / light plain</li>
                                            <li><strong className="text-foreground">Recency:</strong> Within last 6 months</li>
                                        </ul>
                                    </div>
                                    <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-6">
                                        <h3 className="mb-3 font-bold text-foreground flex items-center gap-2">
                                            <Upload className="h-5 w-5 text-purple-500" /> Signature
                                        </h3>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li><strong className="text-foreground">Format:</strong> JPG / JPEG only</li>
                                            <li><strong className="text-foreground">File Size:</strong> 4 KB – 30 KB</li>
                                            <li><strong className="text-foreground">Background:</strong> White plain paper</li>
                                            <li><strong className="text-foreground">Ink:</strong> Black or blue pen</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 flex gap-3">
                                    <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
                                    <p className="text-sm text-muted-foreground">
                                        <strong className="text-foreground">Always verify</strong> the official pixel dimensions on{" "}
                                        <a href="https://cuet.samarth.ac.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cuet.samarth.ac.in</a> —
                                        NTA may update specs each notification cycle.
                                    </p>
                                </div>
                            </section>

                            <AdContainer type="infeed" className="my-8" />

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">CUET vs JEE vs NEET — Spec Comparison</h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead className="bg-muted/50">
                                            <tr>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Exam</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Photo (KB)</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Signature (KB)</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Format</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { exam: "CUET UG 2026", photo: "10–200 KB", sig: "4–30 KB", fmt: "JPG" },
                                                { exam: "NEET 2026", photo: "10–200 KB", sig: "4–30 KB", fmt: "JPG" },
                                                { exam: "JEE Main 2026", photo: "5–200 KB", sig: "2–30 KB", fmt: "JPG" },
                                            ].map((r, i) => (
                                                <tr key={i} className="border-t border-border">
                                                    <td className="px-4 py-3 font-medium text-foreground">{r.exam}</td>
                                                    <td className="px-4 py-3 text-muted-foreground">{r.photo}</td>
                                                    <td className="px-4 py-3 text-muted-foreground">{r.sig}</td>
                                                    <td className="px-4 py-3 text-green-600 font-medium">{r.fmt}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-3 text-sm">
                                    <Link to="/nta-exam-photo-signature-guidelines-2026" className="text-primary hover:underline">
                                        See full NTA Exam Photo Guidelines →
                                    </Link>
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Step-by-Step: Fix Your CUET Photo</h2>
                                <div className="space-y-3">
                                    {[
                                        { step: "1", title: "Take the right photo", desc: "Plain white background, good light, no glasses, both ears visible, recent photo." },
                                        { step: "2", title: "Sign on white paper", desc: "Use dark blue or black pen on a clean white sheet. Sign in the centre with space around it." },
                                        { step: "3", title: "Resize using our tool", desc: "Upload to signatureresize.in and set the target KB range. Done in seconds, no app needed." },
                                        { step: "4", title: "Verify before uploading", desc: "Use our Exam Photo Checker tool to confirm dimensions, KB, and format before submitting." },
                                    ].map((item) => (
                                        <div key={item.step} className="flex gap-4 rounded-xl border border-border bg-card p-4">
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">{item.step}</div>
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
                                <h2 className="mb-4 text-xl font-bold text-foreground">Why CUET Applicants Face More Upload Issues Than NEET or JEE</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    One pattern we notice every exam season: CUET applicants struggle more with the photo upload
                                    than NEET or JEE applicants, even though the specifications are almost identical. The reason
                                    is timing. JEE and NEET registrations open in November and December, when students have more
                                    time to prepare. CUET registration usually opens in February — right when board exam revision
                                    is in full swing. Students rush through the process and skip the file verification step.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    A second pattern: students who applied for JEE or NEET think they can reuse the same photo
                                    file. That works <em>only</em> if the file is still under 200 KB and is in JPG format.
                                    CUET's upper limit on photo size is 200 KB — which is more lenient than many other exams
                                    — but the format requirement is strict. If you saved or screenshot the photo via WhatsApp
                                    or Google Photos, the downloaded version may have been re-encoded as WEBP, which the NTA
                                    portal will reject silently.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    Our advice: don't assume. Take two minutes now to run your files through our{" "}
                                    <Link to="/exam-photo-checker" className="text-primary hover:underline">Exam Photo Checker</Link>{" "}
                                    and confirm the format, dimensions, and size before the portal opens.
                                </p>
                            </section>

                            <AdContainer type="inarticle" className="my-8" />

                            <section className="mb-12 rounded-xl border border-primary/20 bg-primary/5 p-6">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Free Tools for CUET Application</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { title: "Photo & Signature Resizer", desc: "Compress to exact KB & pixels", href: "/signature-resize", icon: Upload },
                                        { title: "Exam Photo Checker", desc: "Verify specs instantly", href: "/exam-photo-checker", icon: CheckCircle },
                                        { title: "Crop Signature from Scan", desc: "Extract from full-page scan", href: "/crop-signature-from-full-page-scan", icon: FileImage },
                                        { title: "White Background Tool", desc: "Remove grey/yellow BG", href: "/signature-photo-white-background-phone", icon: Shield },
                                    ].map((tool) => (
                                        <Link key={tool.href} to={tool.href} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                            <tool.icon className="h-5 w-5 text-primary flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground text-sm">{tool.title}</p>
                                                <p className="text-xs text-muted-foreground">{tool.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            <section className="mb-10">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Related Exam Guides</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { title: "Agniveer Photo & Signature Guide 2026", href: "/agniveer-agnipath-photo-signature-requirements-2026" },
                                        { title: "SSC CHSL Photo & Signature Guide 2026", href: "/ssc-chsl-photo-signature-guide-2026" },
                                        { title: "NEET Photo & Signature Resize", href: "/neet-photo-signature-resize" },
                                        { title: "NTA Exam Photo Guidelines", href: "/nta-exam-photo-signature-guidelines-2026" },
                                        { title: "Why Exam Portal Rejects Your Photo", href: "/why-exam-portal-rejecting-photo-10-reasons" },
                                        { title: "Exam Photo & Signature Requirements 2026", href: "/exam-photo-signature-requirements-2026" },
                                    ].map((link) => (
                                        <Link key={link.href} to={link.href} className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 text-sm hover:border-primary/50 hover:text-primary transition-colors">
                                            <span className="text-primary">→</span> {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-5">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">SR</div>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">SignatureResize.in Editorial Team</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Last reviewed: February 2026 · Based on NTA's official CUET UG notification</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                                            Specifications sourced from NTA's official CUET notifications. Verify the latest pixel dimensions
                                            on{" "}<a href="https://cuet.samarth.ac.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cuet.samarth.ac.in</a>{" "}
                                            each cycle as NTA occasionally updates requirements.
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

export default CUETPhotoSignatureGuide;

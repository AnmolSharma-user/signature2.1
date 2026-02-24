import { Link } from "react-router-dom";
import { CheckCircle, XCircle, AlertTriangle, Camera, Download, FileImage } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const USVisaPhotoResize = () => {
    const faqs = [
        {
            question: "What size should my US visa photo be for DS-160?",
            answer: "Your DS-160 (US nonimmigrant visa) photo must be 2×2 inches (51×51 mm), which equals 600×600 pixels at 300 DPI. The file must be under 240 KB in JPEG format. The face must take up 50–69% of the photo height.",
        },
        {
            question: "Can I take my own DS-160 photo at home?",
            answer: "Yes! You can take your own DS-160 photo at home as long as it meets all specifications: plain white or off-white background, even lighting, no shadows, no glasses, taken within the last 6 months.",
        },
        {
            question: "Do I need to print the DS-160 photo or upload it digitally?",
            answer: "For the DS-160 online form, you upload it digitally. You'll also need to bring one printed 2×2 inch photo to the visa interview at the US embassy or consulate.",
        },
        {
            question: "Can I wear glasses in my US visa photo?",
            answer: "No. Since November 2016, US visa regulations prohibit glasses in visa photos — including clear/non-prescription glasses. Remove glasses before taking your DS-160 photo.",
        },
        {
            question: "What if my DS-160 photo gets rejected?",
            answer: "Common reasons for rejection: glasses worn, head tilted, photo too dark, face too small (< 50% of photo), wrong background color, or file larger than 240 KB. Retake the photo addressing these issues and re-upload. Our tool helps you resize to the exact 240 KB limit.",
        },
        {
            question: "Is a selfie acceptable for the DS-160 form?",
            answer: "Technically no — 'selfies' where the camera arm is visible are not acceptable. However, a front-facing photo taken with a phone camera on a timer or by someone else, meeting all other specs, is acceptable.",
        },
    ];

    return (
        <>
            <SEOHead
                title="How to Resize Passport Photo for US Visa DS-160 Application (2×2 inch, Under 240 KB)"
                description="DS-160 US visa photo requirements: 2×2 inch (600×600 px), under 240 KB, JPEG, white background. Resize your photo for free in seconds. Complete guide for 2026."
                canonicalUrl="https://signatureresize.in/resize-passport-photo-us-visa-ds-160"
                keywords="ds-160 photo size requirements, us visa photo resize online, resize photo for us visa application, ds-160 passport photo dimensions, 2x2 photo resize for us visa, us visa photo 240kb"
            />
            <SEOSchema
                type="Article"
                data={{
                    headline: "How to Resize Passport Photo for US Visa DS-160",
                    description: "Complete guide to US visa DS-160 photo requirements: dimensions, file size, background, and free resize tool",
                    url: "https://signatureresize.in/resize-passport-photo-us-visa-ds-160",
                }}
            />

            <div className="min-h-screen bg-background">
                <Header />

                <section className="relative overflow-hidden bg-gradient-to-br from-red-600/10 via-accent to-background py-10 sm:py-16">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "US Visa DS-160 Photo Resize" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-red-600/10 px-4 py-2 text-sm font-medium text-red-600">
                                🇺🇸 US VISA · DOCUMENT GUIDE
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Resize Passport Photo for{" "}
                                <span className="text-primary underline decoration-wavy underline-offset-4">
                                    US Visa DS-160
                                </span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                The DS-160 demands specific photo specs. Get them wrong and your application stalls.
                                Here's the exact size, format, and how to fix it — free, in seconds.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5"><Camera className="h-4 w-4 text-primary" /> 2×2 inch (600×600 px)</span>
                                <span className="flex items-center gap-1.5"><FileImage className="h-4 w-4 text-primary" /> Under 240 KB</span>
                                <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-500" /> JPEG format</span>
                            </div>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            {/* EEAT Intro Narrative */}
                            <section className="mb-10">
                                <p className="text-lg text-foreground leading-relaxed font-medium">
                                    You've finally gotten your DS-160 interview appointment, or you're filling the form for
                                    the first time. You reach the photo upload step — and the system rejects your image with
                                    a vague error. It's one of the most frustrating moments in the US visa application process,
                                    and it happens to thousands of applicants every month.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    The DS-160 photo checker is stricter than most people expect. It validates file size
                                    (must be under 240 KB), format (JPEG only), face coverage (your face must fill 50–69% of
                                    the photo height), and background color — all automatically. A studio photo taken for
                                    an Indian passport may not pass because it uses a different aspect ratio or is saved at
                                    a higher-than-expected resolution.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    We've compiled this guide using the latest specifications from the{" "}
                                    <a href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos.html"
                                        target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        US Department of State
                                    </a>. Below you'll find the exact requirements, how to take the photo correctly
                                    at home with just your phone, and the most common reasons the DS-160 photo checker
                                    rejects photos (and how to fix each one).
                                </p>
                                <ul className="mt-4 space-y-1.5 text-muted-foreground text-sm list-disc pl-5">
                                    <li>DS-160 photo specifications: exact pixel size, KB limit, and background rules</li>
                                    <li>How to take a valid US visa photo at home for free (no studio needed)</li>
                                    <li>Why your photo may have been rejected and how to fix it in minutes</li>
                                </ul>
                            </section>

                            <AdContainer type="display" className="mb-8" />

                            {/* Official Specs */}
                            <section className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    DS-160 Official Photo Requirements (2026)
                                </h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead className="bg-muted/50">
                                            <tr>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Requirement</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Specification</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { req: "Photo Size (print)", val: "2×2 inches (51×51 mm)" },
                                                { req: "Digital Dimensions", val: "600×600 pixels (minimum)" },
                                                { req: "File Format", val: "JPEG / JPG only" },
                                                { req: "Max File Size", val: "240 KB" },
                                                { req: "Background", val: "Plain white or off-white" },
                                                { req: "Face Coverage", val: "50–69% of photo height" },
                                                { req: "Head Position", val: "Straight, facing camera" },
                                                { req: "Expression", val: "Neutral with both eyes open" },
                                                { req: "Glasses", val: "Not allowed" },
                                                { req: "Recency", val: "Within last 6 months" },
                                            ].map((row, i) => (
                                                <tr key={i} className="border-t border-border">
                                                    <td className="px-4 py-3 font-medium text-foreground">{row.req}</td>
                                                    <td className="px-4 py-3 text-muted-foreground">{row.val}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-3 text-xs text-muted-foreground">
                                    Source:{" "}
                                    <a href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        US Department of State — Visa Photo Requirements
                                    </a>
                                </p>
                            </section>

                            <AdContainer type="infeed" className="my-8" />

                            {/* How to take the photo */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    How to Take a DS-160 Photo at Home
                                </h2>
                                <p className="mb-4 text-muted-foreground leading-relaxed">
                                    You don't need to go to a studio. A phone camera and good lighting is enough.
                                    Here's how to do it correctly the first time:
                                </p>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {[
                                        { title: "Set Up the Background", desc: "Stand in front of a plain white wall or hang a white bedsheet. No patterns, no colours. The entire background must be uniformly white or off-white.", icon: "✅" },
                                        { title: "Get the Lighting Right", desc: "Face a large window with natural daylight. Don't use flash — it creates harsh shadows on the face and background. Take the photo during daylight hours.", icon: "✅" },
                                        { title: "Position Your Face", desc: "Face the camera straight on. Both ears should be visible. No tilting or turning. Eyes open and looking directly at camera. Neutral expression.", icon: "✅" },
                                        { title: "Remove Glasses", desc: "US regulations since 2016 prohibit glasses in visa photos. Remove all eyewear including clear-framed glasses before taking the photo.", icon: "✅" },
                                        { title: "Use the Right Camera Mode", desc: "Use your phone's rear camera (higher quality than front). Set it on a stand or tripod. Use a timer so there's no camera shake.", icon: "✅" },
                                        { title: "Resize & Upload", desc: "Upload the photo to our resize tool, set output to 600×600 px and under 240 KB in JPEG. Done in seconds — no signup required.", icon: "✅" },
                                    ].map((item, i) => (
                                        <div key={i} className="rounded-xl border border-border bg-card p-5">
                                            <p className="font-semibold text-foreground">{item.icon} {item.title}</p>
                                            <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Common Rejections */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Why DS-160 Photos Get Rejected (And How to Fix Them)
                                </h2>
                                <div className="space-y-3">
                                    {[
                                        { prob: "Glasses in photo", fix: "Remove all eyewear. US rules are strict — even clear-frame glasses are not allowed." },
                                        { prob: "File larger than 240 KB", fix: "Compress using our resize tool. A 600×600 px JPEG at 80–90% quality is typically 40–120 KB." },
                                        { prob: "Background not white enough", fix: "Use our passport photo maker to auto-fill white background after cropping your face." },
                                        { prob: "Face too small or too large", fix: "Your face must fill 50–69% of photo height. Crop closer or further from the camera." },
                                        { prob: "Photo not recent", fix: "Use a photo taken within the last 6 months. The consulate officer will compare it with you at interview." },
                                        { prob: "Coloured, patterned, or dark background", fix: "Retake with a white wall or sheet. Or use our white background removal tool." },
                                    ].map((item, i) => (
                                        <div key={i} className="rounded-xl border border-red-500/10 bg-red-500/5 p-4">
                                            <p className="text-sm font-semibold text-red-600 flex items-center gap-1.5">
                                                <XCircle className="h-4 w-4" /> {item.prob}
                                            </p>
                                            <p className="mt-1.5 text-sm text-muted-foreground flex items-center gap-1.5">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" /> {item.fix}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Deep Dive: Studio vs Home */}
                            <section className="mb-10 rounded-xl border border-border bg-muted/20 p-6">
                                <h2 className="mb-4 text-xl font-bold text-foreground">The Home Photo Challenge: What Most Guides Don't Tell You</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Taking a DS-160 photo at home sounds simple in theory. In practice, the biggest challenge
                                    isn't the background or the lighting — it's the <strong className="text-foreground">face coverage requirement</strong>.
                                    The US State Department requires your face (from chin to the top of your head) to fill
                                    between 50% and 69% of the photo's height. Too far from the camera and the face is too
                                    small. Too close and it's too large. Both will get rejected.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    The practical tip: stand about 4–5 feet from the camera and use the rear camera (not
                                    the selfie camera). Have someone else take the photo or use a phone stand with a timer.
                                    After taking the photo, crop to a square that shows your head with some space above
                                    the crown and a little below the chin. This naturally hits the 50–69% face coverage rule.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    For file size: a 600×600 px JPEG saved at 80% quality is typically 40–90 KB — well
                                    within the 240 KB limit. Our{" "}
                                    <Link to="/passport-photo-maker" className="text-primary hover:underline">Passport Photo Maker</Link>{" "}
                                    handles all of this: crop, white background, 600×600 px output, and JPEG compression.
                                </p>
                            </section>

                            <AdContainer type="inarticle" className="my-8" />

                            {/* DS-160 vs Indian Exam Compare */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    DS-160 vs Indian Exam Photo — What's Different?
                                </h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead className="bg-muted/50">
                                            <tr>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Property</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">DS-160 (US Visa)</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Indian Exams (SSC/IBPS)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { prop: "Dimensions", ds: "600×600 px (square)", ind: "200×230 px (portrait)" },
                                                { prop: "Max File Size", ds: "240 KB", ind: "20–200 KB (varies)" },
                                                { prop: "Format", ds: "JPEG", ind: "JPG/JPEG" },
                                                { prop: "Background", ds: "White / off-white", ind: "White / light plain" },
                                                { prop: "Glasses", ds: "Not allowed", ind: "Not allowed" },
                                                { prop: "DPI Required", ds: "Not specified (300 recommended)", ind: "Usually not checked" },
                                            ].map((row, i) => (
                                                <tr key={i} className="border-t border-border">
                                                    <td className="px-4 py-3 font-medium text-foreground">{row.prop}</td>
                                                    <td className="px-4 py-3 text-blue-600 font-medium">{row.ds}</td>
                                                    <td className="px-4 py-3 text-muted-foreground">{row.ind}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Tools */}
                            <section className="mb-12 rounded-xl border border-primary/20 bg-primary/5 p-6">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Free Tools for Your DS-160 Photo</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { title: "Passport Photo Maker", desc: "Crop face, white background, 600×600 px output", href: "/passport-photo-maker", Icon: Camera },
                                        { title: "Photo & Signature Resizer", desc: "Compress under 240 KB in JPEG", href: "/signature-resize", Icon: Download },
                                        { title: "Exam Photo Checker", desc: "Verify dimensions & file size", href: "/exam-photo-checker", Icon: CheckCircle },
                                        { title: "White Background Tool", desc: "Remove coloured backgrounds", href: "/signature-photo-white-background-phone", Icon: FileImage },
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
                                        { title: "USCIS Immigration Photo Guide (I-485, N-400)", href: "/resize-photo-signature-uscis-immigration-forms" },
                                        { title: "PAN Card Photo & Signature Resize (200 DPI)", href: "/pan-card-photo-signature-resize" },
                                        { title: "Passport Photo at Home Guide", href: "/how-to-take-passport-photo-at-home-for-exams" },
                                        { title: "Image DPI vs KB vs Pixels Explained", href: "/image-dpi-vs-kb-vs-pixels-exam-portals" },
                                        { title: "Why Your Photo Gets Rejected (10 Reasons)", href: "/why-exam-portal-rejecting-photo-10-reasons" },
                                        { title: "Digital vs Wet Signature Guide", href: "/digital-signature-vs-wet-signature-government-portals" },
                                    ].map((link) => (
                                        <Link key={link.href} to={link.href} className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 text-sm hover:border-primary/50 hover:text-primary transition-colors">
                                            <span className="text-primary">→</span> {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">SR</div>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">SignatureResize.in Editorial Team</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Last reviewed: February 2026 · Source: US Department of State</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                                            Photo specifications sourced from the{" "}
                                            <a href="https://travel.state.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                                US Department of State Visa Photo Requirements
                                            </a>. Always verify current specs before submitting, as requirements can change.
                                        </p>
                                    </div>
                                </div>
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

export default USVisaPhotoResize;

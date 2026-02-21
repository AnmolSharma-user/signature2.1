import { Link } from "react-router-dom";
import { Image, CheckCircle, XCircle, Info, Sun, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const SignatureWhiteBackgroundPhone = () => {
    const faqs = [
        {
            question: "How do I make my signature background purely white?",
            answer: "The easiest way is to increase exposure and contrast. On your phone: Open photo → Edit → Increase 'Exposure' or 'Brightness' until the paper looks white → Increase 'Contrast' to keep the ink dark. Or better, use a scan app like Adobe Scan which does this automatically.",
        },
        {
            question: "Why does my signature look grey in the photo?",
            answer: "Phone cameras adjust exposure for the whole scene, often ignoring that paper should be bright white. Poor lighting also casts shadows. This results in the paper looking grey or yellowish instead of true white.",
        },
        {
            question: "Can I use flash to get a white background?",
            answer: "Avoid direct flash if possible. Flash often creates a bright hotspot in the center and dark corners (vignetting), or reflects off the ink making it invisible. Natural daylight near a window is much better.",
        },
        {
            question: "Will exam portals reject a slightly grey background?",
            answer: "Many portals are strict (especially SSC and UPSC) and require a clear white background. A grey or muddy background makes the signature hard to verify and increases rejection risk. Always aim for a clean white background.",
        },
        {
            question: "Do I need Photoshop to remove the background?",
            answer: "No. You don't need to 'remove' the background (make it transparent). You just need to make it white. Basic phone editing tools (Brightness/Contrast) or our resize tool is sufficient. Transparent backgrounds (PNG) are actually rejected by most portals.",
        },
    ];

    const howToSteps = [
        { text: "Sign on a clean white unruled sheet with a black gel or ball pen" },
        { text: "Place the paper near a window for natural daylight (no shadows)" },
        { text: "Hold your phone steady and parallel to the paper (not tilted)" },
        { text: "Take the photo, focusing on the signature" },
        { text: "Open Phone Editor → Increase Brightness (+30-50%) and Contrast (+20%)" },
        { text: "Crop tightly around the signature" },
        { text: "Upload to SignatureResize.in to set the correct KB size" },
    ];

    return (
        <>
            <SEOHead
                title="How to Get White Background for Signature Photo Using Phone"
                description="Easy guide to get a clean white background for your signature using just your phone. No scanner needed. Fix grey backgrounds and shadows for exam uploads."
                canonicalUrl="https://signatureresize.in/signature-photo-white-background-phone"
                keywords="white background signature phone, clean signature background, remove shadow from signature photo, scan signature with phone, exam signature white background"
            />
            <SEOSchema type="HowTo" howToName="How to Get a White Background for Signature Photo on Phone" howToSteps={howToSteps} />

            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-600/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "White Background on Phone" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-slate-600/10 px-4 py-2 text-sm font-medium text-slate-700">📱 PHONE PHOTOGRAPHY</span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Signature Photo <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">White Background</span> Using Phone
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                Stop uploading grey, shadowy signatures. Get a scanner-quality white background using simple phone edits.
                            </p>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">The "Grey Paper" Problem</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    When you take a photo of a white paper indoors, your phone camera often makes it look <strong className="text-foreground">grey, blueish, or yellow</strong>. To the exam computer, this looks like a "colored background" and can trigger rejection algorithms. You need high contrast: clear black ink on stark white paper.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Method 1: The "Window & Edit" Technique (Recommended)</h2>
                                <p className="mb-4 text-muted-foreground">This is the fastest method and uses your phone's built-in tools.</p>
                                <div className="space-y-4">
                                    <div className="rounded-xl border border-border bg-card p-5">
                                        <div className="flex items-start gap-4">
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">1</span>
                                            <div>
                                                <h3 className="font-semibold text-foreground">Lighting is Key</h3>
                                                <p className="text-sm text-muted-foreground">Place the paper on the floor or table near a bright window. Do NOT stand between the light and the paper (this casts a shadow). Position yourself so the light hits the paper from the side or front.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-border bg-card p-5">
                                        <div className="flex items-start gap-4">
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">2</span>
                                            <div>
                                                <h3 className="font-semibold text-foreground">The Magic Edit</h3>
                                                <p className="text-sm text-muted-foreground">Take the photo. Open it in Photos app (iOS or Android) → Edit.</p>
                                                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                                                    <li>Exposure / Brightness: <strong>Increase (+40)</strong> until paper turns white.</li>
                                                    <li>Contrast: <strong>Increase (+30)</strong> to make ink darker.</li>
                                                    <li>Saturation: <strong>Decrease (-100)</strong> to remove any yellow/blue tint (optional).</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-border bg-card p-5">
                                        <div className="flex items-start gap-4">
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">3</span>
                                            <div>
                                                <h3 className="font-semibold text-foreground">Crop & Resize</h3>
                                                <p className="text-sm text-muted-foreground">Crop out the table/floor edges. Then upload to SignatureResize.in to get the correct KB size.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <AdContainer type="inarticle" className="my-8" />

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Method 2: Use a Scanner App</h2>
                                <p className="mb-4 text-muted-foreground">Apps like <strong>Adobe Scan</strong>, <strong>Microsoft Lens</strong>, or <strong>CamScanner</strong> have a specialized "Document" or "Whiteboard" mode.</p>
                                <div className="flex items-start gap-2 rounded-lg border border-border bg-card p-4">
                                    <Smartphone className="mt-1 h-5 w-5 text-primary" />
                                    <div>
                                        <p className="text-sm text-foreground">These apps automatically detect the paper, crop it, and apply a high-contrast "Magic Color" filter that turns the background pure white and ink dark black. This is essentially a digital xerox.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Common Mistakes to Avoid</h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                                        <h3 className="mb-2 font-semibold text-foreground">❌ Casting a Shadow</h3>
                                        <p className="text-sm text-muted-foreground">Your hand or body blocking the light creates a huge shadow that editing cannot fix.</p>
                                    </div>
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                                        <h3 className="mb-2 font-semibold text-foreground">❌ Using Flash Close-Up</h3>
                                        <p className="text-sm text-muted-foreground">Flash creates a "hotspot" (bright white circle) in the middle and darkness around edges.</p>
                                    </div>
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                                        <h3 className="mb-2 font-semibold text-foreground">❌ Dull Lighting / Night</h3>
                                        <p className="text-sm text-muted-foreground">Artificial room lights usually result in grainy, yellow-tinted photos. Use daylight.</p>
                                    </div>
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                                        <h3 className="mb-2 font-semibold text-foreground">❌ Ruled Paper</h3>
                                        <p className="text-sm text-muted-foreground">Never sign on lined/ruled paper. It looks unprofessional and is often rejected.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-12 rounded-xl border border-border bg-muted/30 p-5">
                                <div className="flex items-center gap-2 mb-3"><Info className="h-5 w-5 text-primary" /><h3 className="font-semibold text-foreground">Related Guides</h3></div>
                                <div className="flex flex-wrap gap-2">
                                    <Link to="/create-digital-signature-without-scanner" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Signature Without Scanner</Link>
                                    <Link to="/crop-signature-from-full-page-scan" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Crop from Scan</Link>
                                    <Link to="/signature-upload-errors-and-fixes" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Rejection Fixes</Link>
                                </div>
                            </section>

                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">About This Guide</h2>
                                <p className="text-muted-foreground leading-relaxed">Published by <strong className="text-foreground">SignatureResize.in</strong>. A "colored" or grey background is the #2 reason for signature rejection (after wrong KB size). This guide helps you fix it in seconds.</p>
                                <p className="mt-3 text-sm text-muted-foreground"><strong className="text-foreground">Published:</strong> February 2026 | <strong className="text-foreground">Updated regularly</strong></p>
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

export default SignatureWhiteBackgroundPhone;

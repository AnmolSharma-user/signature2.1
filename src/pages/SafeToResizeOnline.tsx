import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Server, Trash2, EyeOff, FileImage } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const SafeToResizeOnline = () => {
    const faqs = [
        {
            question: "Does SignatureResize.in store my photos?",
            answer: "No. All processing happens locally in your browser or on secure compliant servers where files are automatically deleted immediately after processing. We do not store, archive, or view your personal images. Your privacy is our priority.",
        },
        {
            question: "Is it safe to upload my signature online?",
            answer: "It depends on the website. SignatureResize.in uses HTTPS encryption for all data transfer. Since we delete files instantly and don't require login/signup, identity theft risk is minimized. Avoid suspicious sites that ask for your email or phone number just to resize an image.",
        },
        {
            question: "Can someone steal my signature from here?",
            answer: "No. Your uploaded file is not accessible to the public. It is processed in a temporary isolated session and delivered back to you. No other user can see your files.",
        },
        {
            question: "Do you sell user data?",
            answer: "Never. We are a free utility tool supported by standard display ads (Google AdSense). We do not collect personal data, email addresses, or phone numbers, so we have nothing to sell.",
        },
    ];

    return (
        <>
            <SEOHead
                title="Is It Safe to Resize Signature & Photo Online? Privacy & Security Explained"
                description="Concerned about uploading your signature online? Learn how SignatureResize.in protects your privacy with auto-deletion, HTTPS encryption, and no data storage."
                canonicalUrl="https://signatureresize.in/is-it-safe-to-resize-signature-online"
                keywords="safe to resize signature online, is signatureresize.in safe, upload signature security, online photo resizer privacy, delete photos after resize"
            />

            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Is It Safe?" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-emerald-600/10 px-4 py-2 text-sm font-medium text-emerald-600">🔒 SECURITY & PRIVACY</span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Is It Safe to Resize <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">Signature Online?</span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                Your digital identity matters. Here is how we ensure your photos and signatures remain private and secure.
                            </p>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            <section className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">Our 4-Point Privacy Promise</h2>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="rounded-xl border border-border bg-card p-6">
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Trash2 className="h-6 w-6" /></div>
                                        <h3 className="mb-2 text-lg font-bold text-foreground">1. Auto-Deletion</h3>
                                        <p className="text-muted-foreground">We don't need your files. Images are processed and immediately discarded. We do not keep archives or backups of user uploads.</p>
                                    </div>
                                    <div className="rounded-xl border border-border bg-card p-6">
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Lock className="h-6 w-6" /></div>
                                        <h3 className="mb-2 text-lg font-bold text-foreground">2. HTTPS Encryption</h3>
                                        <p className="text-muted-foreground">All data transferred between your device and our tool is encrypted using industry-standard SSL/TLS protocols. No one can intercept your upload.</p>
                                    </div>
                                    <div className="rounded-xl border border-border bg-card p-6">
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><EyeOff className="h-6 w-6" /></div>
                                        <h3 className="mb-2 text-lg font-bold text-foreground">3. No Human Access</h3>
                                        <p className="text-muted-foreground">The resizing process is 100% automated by code. No human, including our developers, views the photos or signatures you upload.</p>
                                    </div>
                                    <div className="rounded-xl border border-border bg-card p-6">
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Server className="h-6 w-6" /></div>
                                        <h3 className="mb-2 text-lg font-bold text-foreground">4. No Data Collection</h3>
                                        <p className="text-muted-foreground">We don't ask for your name, email, or phone number. You don't create an account. You enter, resize, download, and leave anonymously.</p>
                                    </div>
                                </div>
                            </section>

                            <AdContainer type="inarticle" className="my-8" />

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Red Flags: When NOT to Upload</h2>
                                <p className="mb-4 text-muted-foreground">While our tool is safe, be careful elsewhere. Avoid tools that:</p>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                                        <ShieldCheck className="mt-1 h-5 w-5 text-red-500" />
                                        <div>
                                            <span className="font-semibold text-foreground">Ask for Sign-up/Login:</span>
                                            <p className="text-sm text-muted-foreground">Why does a resize tool need your email? Likely to spam you or link your sensitive docs to an identity.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                                        <ShieldCheck className="mt-1 h-5 w-5 text-red-500" />
                                        <div>
                                            <span className="font-semibold text-foreground">HTTP (Not Secure):</span>
                                            <p className="text-sm text-muted-foreground">If the URL bar doesn't show a padlock, don't upload anything. Your data is sent in plain text.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                                        <ShieldCheck className="mt-1 h-5 w-5 text-red-500" />
                                        <div>
                                            <span className="font-semibold text-foreground">Ask for Unnecessary Permissions:</span>
                                            <p className="text-sm text-muted-foreground">A resize app shouldn't ask for your contact list or location.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Our Commitment</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    At <strong className="text-foreground">SignatureResize.in</strong>, we understand that we handle sensitive exam documents. That's why we've built our architecture on a "Zero-Knowledge" principle — we can't see what we don't store. Resize with confidence.
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

export default SafeToResizeOnline;

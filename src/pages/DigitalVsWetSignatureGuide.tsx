import { Link } from "react-router-dom";
import { CheckCircle, XCircle, Shield, Pen, FileText, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const DigitalVsWetSignatureGuide = () => {
    const faqs = [
        {
            question: "Can I use a digital signature for government exam forms in India?",
            answer: "It depends on the exam. Most traditional exam portals (SSC, IBPS, UPSC) require a scanned wet signature — meaning you sign on paper and upload a photograph of it. Aadhaar eSign is increasingly accepted on DigiLocker and some MCA/income tax portals, but not yet on exam portals.",
        },
        {
            question: "What is Aadhaar eSign?",
            answer: "Aadhaar eSign is a legally valid digital signature service backed by UIDAI. It's verified using your Aadhaar OTP. It's accepted for income tax returns, DigiLocker documents, and MCA filings — but not (yet) for exam application uploads.",
        },
        {
            question: "Is an e-signature the same as a digital signature?",
            answer: "Not exactly. An e-signature is any electronic signature (including a typed name or drawn image). A digital signature specifically uses cryptographic verification (PKI) to prove authenticity — like DSC (Digital Signature Certificate) or Aadhaar eSign. For most exam portals, only a scanned wet signature image (JPG) is accepted.",
        },
        {
            question: "Do courts accept digitally signed documents in India?",
            answer: "Yes. Under the IT Act 2000, Aadhaar eSign and DSC-based signatures have legal validity in India. However, courts may require affidavits with physical signatures in some cases depending on jurisdiction.",
        },
        {
            question: "Will exam portals start accepting Aadhaar eSign in the future?",
            answer: "Almost certainly yes. Government initiatives like DigiLocker, Digi Yatra, and the push for paperless governance suggest exam portals will accept Aadhaar eSign within the next few years. For now, a scanned wet signature uploaded as JPG remains the standard.",
        },
    ];

    const comparison = [
        { feature: "Exam Application Portals (SSC, IBPS, UPSC)", wet: true, esign: false, dsc: false },
        { feature: "Income Tax Return Filing", wet: false, esign: true, dsc: true },
        { feature: "DigiLocker Document Requests", wet: false, esign: true, dsc: false },
        { feature: "MCA / Company Registration", wet: false, esign: false, dsc: true },
        { feature: "PAN Card Application (NSDL/UTIITSL)", wet: true, esign: false, dsc: false },
        { feature: "Passport Application", wet: true, esign: false, dsc: false },
        { feature: "Bank Account Opening (digital banks)", wet: false, esign: true, dsc: false },
        { feature: "Property Registration", wet: true, esign: false, dsc: false },
    ];

    return (
        <>
            <SEOHead
                title="Digital Signature vs Wet Signature: What Do Government Portals Accept?"
                description="Understand the difference between wet signature, Aadhaar eSign, and DSC for Indian government portals. Which signature type is valid for exam forms, DigiLocker, and tax filings?"
                canonicalUrl="https://signatureresize.in/digital-signature-vs-wet-signature-government-portals"
                keywords="digital signature vs wet signature india, aadhaar esign for exam portal, digital signature for government forms india, esign vs scanned signature, can i use digital signature for rrb application"
            />
            <SEOSchema
                type="Article"
                data={{
                    headline: "Digital Signature vs Wet Signature: What Government Portals Accept",
                    description: "A comprehensive comparison of wet signatures, Aadhaar eSign, and DSC for Indian government portals",
                    url: "https://signatureresize.in/digital-signature-vs-wet-signature-government-portals",
                }}
            />

            <div className="min-h-screen bg-background">
                <Header />

                <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600/10 via-accent to-background py-10 sm:py-16">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Digital vs Wet Signature Guide" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-indigo-600/10 px-4 py-2 text-sm font-medium text-indigo-600">
                                GUIDE · EVERGREEN
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Digital Signature vs Wet Signature:{" "}
                                <span className="text-primary underline decoration-wavy underline-offset-4">
                                    What Portals Actually Accept
                                </span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                India is going digital fast. But exam portals, tax filings, and document systems
                                have different rules. Here's the complete, honest breakdown.
                            </p>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            {/* Three Types */}
                            <section className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">The 3 Types of Signatures in India</h2>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <div className="rounded-xl border border-border bg-card p-5">
                                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10">
                                            <Pen className="h-5 w-5 text-orange-500" />
                                        </div>
                                        <h3 className="font-bold text-foreground">1. Wet Signature</h3>
                                        <p className="mt-2 text-sm text-muted-foreground">Your physical ink signature on paper, photographed or scanned and uploaded as a JPG. This is what 99% of exam portals require.</p>
                                        <p className="mt-2 text-xs font-semibold text-orange-600">Required: SSC, IBPS, UPSC, NEET, JEE, PAN</p>
                                    </div>
                                    <div className="rounded-xl border border-border bg-card p-5">
                                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
                                            <Smartphone className="h-5 w-5 text-blue-500" />
                                        </div>
                                        <h3 className="font-bold text-foreground">2. Aadhaar eSign</h3>
                                        <p className="mt-2 text-sm text-muted-foreground">A legally valid digital signature verified by your Aadhaar OTP. Used for DigiLocker, income tax, and bank KYC.</p>
                                        <p className="mt-2 text-xs font-semibold text-blue-600">Used: DigiLocker, ITR, bank onboarding</p>
                                    </div>
                                    <div className="rounded-xl border border-border bg-card p-5">
                                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10">
                                            <Shield className="h-5 w-5 text-purple-500" />
                                        </div>
                                        <h3 className="font-bold text-foreground">3. DSC (Digital Signature Certificate)</h3>
                                        <p className="mt-2 text-sm text-muted-foreground">A PKI-based digital certificate issued by licensed CAs. Used for MCA filings, GST, income tax for professionals.</p>
                                        <p className="mt-2 text-xs font-semibold text-purple-600">Used: MCA, GST, tender portals</p>
                                    </div>
                                </div>
                            </section>

                            <AdContainer type="infeed" className="my-8" />

                            {/* Comparison Table */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Which Signature Works Where? (Comparison Table)
                                </h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead className="bg-muted/50">
                                            <tr>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Portal / Use Case</th>
                                                <th className="px-4 py-3 text-center font-semibold text-foreground">Wet Sig</th>
                                                <th className="px-4 py-3 text-center font-semibold text-foreground">eSign</th>
                                                <th className="px-4 py-3 text-center font-semibold text-foreground">DSC</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {comparison.map((row, i) => (
                                                <tr key={i} className="border-t border-border">
                                                    <td className="px-4 py-3 text-muted-foreground">{row.feature}</td>
                                                    <td className="px-4 py-3 text-center">{row.wet ? <CheckCircle className="h-4 w-4 text-green-500 mx-auto" /> : <XCircle className="h-4 w-4 text-red-400 mx-auto" />}</td>
                                                    <td className="px-4 py-3 text-center">{row.esign ? <CheckCircle className="h-4 w-4 text-green-500 mx-auto" /> : <XCircle className="h-4 w-4 text-red-400 mx-auto" />}</td>
                                                    <td className="px-4 py-3 text-center">{row.dsc ? <CheckCircle className="h-4 w-4 text-green-500 mx-auto" /> : <XCircle className="h-4 w-4 text-red-400 mx-auto" />}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <AdContainer type="inarticle" className="my-8" />

                            {/* Future of eSign */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    The Future: Will Exam Portals Accept eSign?
                                </h2>
                                <p className="mb-4 text-muted-foreground leading-relaxed">
                                    India's Digital India push is very real. DigiLocker now has 600 million+ users. Aadhaar eSign is already used for tax returns and bank KYC. The question isn't <em>if</em> exam portals will adopt eSign — it's <em>when</em>.
                                </p>
                                <div className="space-y-3">
                                    {[
                                        { title: "What's already digital", desc: "DigiLocker (mark sheets, Aadhaar), Income Tax (e-filing), PM Internship Scheme, Digi Yatra (face-based travel)" },
                                        { title: "What's getting there", desc: "Some state PSC portals, new-age fintech applications, and newer central schemes are piloting Aadhaar OTP–based signatures." },
                                        { title: "What's still wet-only (2026)", desc: "Major exam portals — SSC, IBPS, UPSC, NTA (NEET/JEE/CUET), RRB — still require scanned physical signatures in JPG format." },
                                    ].map((item, i) => (
                                        <div key={i} className="rounded-xl border border-border bg-card p-5">
                                            <p className="font-semibold text-foreground">{item.title}</p>
                                            <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* How to create valid wet sig for exams */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    How to Create a Valid Wet Signature for Exam Portals
                                </h2>
                                <p className="mb-4 text-muted-foreground">Until digital eSign is accepted universally, here's how to prepare the perfect scanned signature:</p>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { step: "1", text: "Sign on white, unlined paper with a dark blue or black pen" },
                                        { step: "2", text: "Photograph in bright natural light — no shadows, no flash" },
                                        { step: "3", text: "Crop to just the signature using our crop tool" },
                                        { step: "4", text: "Remove grey background with our white background tool" },
                                        { step: "5", text: "Resize to target KB (usually 4–30 KB) in JPG format" },
                                        { step: "6", text: "Verify dimensions and file size with Exam Photo Checker" },
                                    ].map((item) => (
                                        <div key={item.step} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                                            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{item.step}</div>
                                            <p className="text-sm text-muted-foreground">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Related tools */}
                            <section className="mb-12 rounded-xl border border-primary/20 bg-primary/5 p-6">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Tools to Prepare Your Signature</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { title: "Signature Resize Tool", desc: "Resize to 10–40 KB in JPG", href: "/signature-resize", Icon: FileText },
                                        { title: "Crop Signature from Scan", desc: "Extract from full-page photo", href: "/crop-signature-from-full-page-scan", Icon: FileText },
                                        { title: "White Background Tool", desc: "Remove grey/yellow background", href: "/signature-photo-white-background-phone", Icon: Shield },
                                        { title: "Digital Signature Creator", desc: "Draw digitally (for platforms that accept)", href: "/signature-creator", Icon: Pen },
                                        { title: "Exam Photo Checker", desc: "Verify dimensions & KB", href: "/exam-photo-checker", Icon: CheckCircle },
                                        { title: "How to Scan Signature Guide", desc: "Step-by-step with phone camera", href: "/how-to-scan-signature-for-online-forms", Icon: Smartphone },
                                    ].map((tool) => (
                                        <Link key={tool.href} to={tool.href} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 hover:border-primary/50 transition-colors">
                                            <tool.Icon className="h-4 w-4 text-primary flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-foreground text-sm">{tool.title}</p>
                                                <p className="text-xs text-muted-foreground">{tool.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            <section className="mb-10">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Related Reading</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { title: "Is It Safe to Resize Signature Online?", href: "/is-it-safe-to-resize-signature-online" },
                                        { title: "Create Digital Signature Without Scanner", href: "/create-digital-signature-without-scanner" },
                                        { title: "How to Scan Signature for Online Forms", href: "/how-to-scan-signature-for-online-forms" },
                                        { title: "Signature Upload Errors & Fixes", href: "/signature-upload-errors-and-fixes" },
                                        { title: "Resize Photo for US Visa DS-160", href: "/resize-passport-photo-us-visa-ds-160" },
                                        { title: "USCIS Immigration Photo Guide", href: "/resize-photo-signature-uscis-immigration-forms" },
                                    ].map((link) => (
                                        <Link key={link.href} to={link.href} className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 text-sm hover:border-primary/50 hover:text-primary transition-colors">
                                            <span className="text-primary">→</span> {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-5">
                                <p className="text-sm text-muted-foreground">
                                    Published by <strong className="text-foreground">SignatureResize.in</strong>. Information based on Indian IT Act 2000, UIDAI guidelines, and official portal requirements as of 2026.
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

export default DigitalVsWetSignatureGuide;

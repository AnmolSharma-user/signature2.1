import { Link } from "react-router-dom";
import { FileImage, Upload, CheckCircle, Info, Ruler, HardDrive } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const NTAExamPhotoGuidelines = () => {
    const faqs = [
        {
            question: "What is the photo size for NEET UG 2026?",
            answer: "NEET UG 2026 requires a passport size photo between 10KB and 200KB in JPG format. You also need a postcard size photo (4x6 inches) between 10KB and 200KB. Both must have a white background and show 80% face coverage.",
        },
        {
            question: "What are the requirements for JEE Main 2026 photo?",
            answer: "JEE Main 2026 requires a passport photo between 10KB and 200KB. The signature must be between 4KB and 30KB. Both files should be in JPG/JPEG format with a white background.",
        },
        {
            question: "Does NTA accept black and white photos?",
            answer: "Generally, no. NTA information bulletins for NEET, JEE, and CUET specify that the photograph should be in color with a white background. Always prioritize color photos unless a specific exam notification explicitly allows B&W.",
        },
        {
            question: "What is the postcard size photo for NEET?",
            answer: "The postcard size photo is a 4x6 inch (10x15 cm) version of your passport photo. It is required for the NEET admit card and exam center verification. The file size must be 10KB to 200KB. Our NEET resize tool has a specific preset for this.",
        },
        {
            question: "My signature is 3KB. Will NTA accept it?",
            answer: "No. The minimum size for NTA signatures is 4KB. If your file is 3KB, the portal will reject it. Use our resize tool to ensure the file size is within the 4KB-30KB range.",
        },
        {
            question: "Should I write my name and date on the photo?",
            answer: "For NEET and some other NTA exams, it is recommended (and sometimes mandatory) to have your name and the date of taking the photograph printed at the bottom. Check the current year's information bulletin. If required, you can add this text using any photo editor before resizing.",
        },
    ];

    const howToSteps = [
        { text: "Take a clear color photo with a white background" },
        { text: "For NEET, ensure 80% of the image is your face (ears visible)" },
        { text: "Visit SignatureResize.in and select the NEET or JEE preset" },
        { text: "Upload your photo — the tool resizes it to 10-200KB automatically" },
        { text: "For NEET postcard photo, select the 'Postcard Size' option" },
        { text: "Sign on white paper with black pen, scan, and resize to 4-30KB" },
        { text: "Download all files and upload to the NTA portal" },
    ];

    return (
        <>
            <SEOHead
                title="NTA Exam Photo & Signature Guidelines 2026 (NEET, JEE, CUET)"
                description="Complete 2026 photo and signature guide for NTA exams (NEET, JEE Main, CUET). Passport photo (10-200KB), postcard photo, and signature (4-30KB) rules explained."
                canonicalUrl="https://signatureresize.in/nta-exam-photo-signature-guidelines-2026"
                keywords="NTA photo requirements 2026, NEET photo size, JEE Main photo size, CUET photo guidelines, NTA signature size 4kb-30kb"
            />
            <SEOSchema type="HowTo" howToName="How to Resize Photo and Signature for NTA Exams (NEET, JEE, CUET)" howToSteps={howToSteps} />

            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "NTA Photo & Signature Guidelines" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-indigo-600/10 px-4 py-2 text-sm font-medium text-indigo-600">🎓 NTA EXAMS 2026</span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                NTA <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">Photo & Signature</span> Guidelines
                                <span className="block mt-2 text-2xl md:text-3xl text-muted-foreground font-normal">(NEET, JEE, CUET)</span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                Exact specifications for all National Testing Agency (NTA) exams.
                                Passport size, postcard size, and signature rules.
                            </p>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            <section className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">Common NTA Requirements (2026)</h2>
                                <p className="mb-6 text-muted-foreground leading-relaxed">
                                    NTA conducts NEET, JEE Main, CUET, UGC NET, and CMAT. While each exam has its own brochure, NTA largely standardizes the image requirements across all its portals.
                                </p>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    <div className="rounded-xl border-2 border-indigo-500/30 bg-indigo-500/5 p-5">
                                        <div className="mb-3 flex items-center gap-2">
                                            <FileImage className="h-5 w-5 text-indigo-500" />
                                            <h3 className="font-bold text-foreground">Passport Photo</h3>
                                        </div>
                                        <div className="space-y-2 text-sm text-muted-foreground">
                                            <p>Size: <strong className="text-foreground">10KB – 200KB</strong></p>
                                            <p>Format: <strong className="text-foreground">JPG / JPEG</strong></p>
                                            <p>Background: <strong className="text-foreground">White</strong></p>
                                            <p>Focus: <strong className="text-foreground">80% Face Coverage</strong></p>
                                        </div>
                                    </div>
                                    <div className="rounded-xl border-2 border-purple-500/30 bg-purple-500/5 p-5">
                                        <div className="mb-3 flex items-center gap-2">
                                            <Ruler className="h-5 w-5 text-purple-500" />
                                            <h3 className="font-bold text-foreground">Postcard Photo</h3>
                                        </div>
                                        <div className="space-y-2 text-sm text-muted-foreground">
                                            <p>Size: <strong className="text-foreground">10KB – 200KB</strong></p>
                                            <p>Dimensions: <strong className="text-foreground">4" × 6" (10×15 cm)</strong></p>
                                            <p>Required for: <strong className="text-foreground">NEET UG</strong></p>
                                            <p>Background: <strong className="text-foreground">White</strong></p>
                                        </div>
                                    </div>
                                    <div className="rounded-xl border-2 border-green-500/30 bg-green-500/5 p-5">
                                        <div className="mb-3 flex items-center gap-2">
                                            <Upload className="h-5 w-5 text-green-500" />
                                            <h3 className="font-bold text-foreground">Signature</h3>
                                        </div>
                                        <div className="space-y-2 text-sm text-muted-foreground">
                                            <p>Size: <strong className="text-foreground">4KB – 30KB</strong></p>
                                            <p>Format: <strong className="text-foreground">JPG / JPEG</strong></p>
                                            <p>Style: <strong className="text-foreground">Running hand (not ALL CAPS)</strong></p>
                                            <p>Ink: <strong className="text-foreground">Black pen on white paper</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Exam-Specific Presets</h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-border bg-muted/50">
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Exam</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Photo Size</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Signature</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Direct Link</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground">
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3 font-medium text-foreground">NEET UG 2026</td>
                                                <td className="px-4 py-3">10-200 KB</td>
                                                <td className="px-4 py-3">4-30 KB</td>
                                                <td className="px-4 py-3"><Link to="/neet-photo-signature-resize" className="text-primary hover:underline">Resize for NEET →</Link></td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-4 py-3 font-medium text-foreground">JEE Main 2026</td>
                                                <td className="px-4 py-3">10-200 KB</td>
                                                <td className="px-4 py-3">4-30 KB</td>
                                                <td className="px-4 py-3"><Link to="/neet-photo-signature-resize" className="text-primary hover:underline">Resize for JEE →</Link></td>
                                            </tr>
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3 font-medium text-foreground">CUET (UG/PG)</td>
                                                <td className="px-4 py-3">10-200 KB</td>
                                                <td className="px-4 py-3">4-30 KB</td>
                                                <td className="px-4 py-3"><Link to="/neet-photo-signature-resize" className="text-primary hover:underline">Resize for CUET →</Link></td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-foreground">UGC NET</td>
                                                <td className="px-4 py-3">10-200 KB</td>
                                                <td className="px-4 py-3">4-30 KB</td>
                                                <td className="px-4 py-3"><Link to="/neet-photo-signature-resize" className="text-primary hover:underline">Resize for NET →</Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <AdContainer type="inarticle" className="my-8" />

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">Essential Rules for NTA Photos</h2>
                                <div className="space-y-3">
                                    {[
                                        "White Background: Must be plain white. No objects or patterns behind you.",
                                        "80% Face Coverage: Your face (including ears) should occupy about 80% of the photo area.",
                                        "No Glasses Glare: If you wear glasses, ensure there are no reflections. Better to remove them.",
                                        "Name & Date (Check Notification): NEET often requires name and date of photo printed at the bottom.",
                                        "No Caps/Masks: Do not wear caps or masks. Religious headgear is allowed but must not hide face.",
                                        "Same Photo for All Uses: Keep 6-8 copies of the same photo for admit card and counseling.",
                                    ].map((rule, i) => (
                                        <div key={i} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3">
                                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                                            <span className="text-sm text-foreground">{rule}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="mb-12 rounded-xl border border-border bg-muted/30 p-5">
                                <div className="flex items-center gap-2 mb-3"><Info className="h-5 w-5 text-primary" /><h3 className="font-semibold text-foreground">Related Guides</h3></div>
                                <div className="flex flex-wrap gap-2">
                                    <Link to="/neet-photo-signature-resize" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">NEET Resize Tool</Link>
                                    <Link to="/crop-signature-from-full-page-scan" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Crop Signature Scan</Link>
                                    <Link to="/why-exam-portal-rejecting-photo-10-reasons" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Rejection Fixes</Link>
                                    <Link to="/photo-resize-for-admit-card-mark-sheet" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Admit Card Photo Guide</Link>
                                </div>
                            </section>

                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">About This Guide</h2>
                                <p className="text-muted-foreground leading-relaxed">Published by <strong className="text-foreground">SignatureResize.in</strong>. NTA guidelines are strict, and 1000s of forms get flagged annually for image issues. This specific guide is based on the 2026 Information Bulletins for NEET, JEE Main, and CUET.</p>
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

export default NTAExamPhotoGuidelines;

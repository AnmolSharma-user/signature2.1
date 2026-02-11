import { Link } from "react-router-dom";
import { Pen, Ruler, ScanLine, AlertTriangle, CheckCircle, Info, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";

const UPSCTripleSignatureGuide = () => {
    const faqs = [
        {
            question: "Why does UPSC ask for three signatures instead of one?",
            answer: "UPSC uses the triple signature for verification at multiple stages — during the exam, during document verification, and during the interview. Having three copies of your signature on a single scanned image lets them cross-check consistency without asking you to sign again each time.",
        },
        {
            question: "Do all three signatures have to be exactly the same?",
            answer: "They should be as close as possible. UPSC wants to see that you have a consistent, established signature — not three wildly different versions. That said, minor natural variations are fine. Nobody signs identically every time, and UPSC knows that.",
        },
        {
            question: "What pen should I use for the UPSC signature?",
            answer: "A black ballpoint pen on white paper. Avoid gel pens (they smudge during scanning) and fountain pens (uneven ink flow). A standard Cello or Reynolds ballpoint works perfectly.",
        },
        {
            question: "Can I use blue ink for the UPSC triple signature?",
            answer: "The official instruction says black ink. While some candidates have used blue and not been rejected, we strongly recommend black. Blue ink often appears faded or washed out after scanning and compression, which could raise legibility concerns.",
        },
        {
            question: "What are the file size and dimension requirements?",
            answer: "UPSC requires the signature image to be between 20KB and 100KB in JPG format. The recommended pixel range is 350 to 1000 pixels wide. Our UPSC signature resize tool is pre-configured with these exact specifications.",
        },
        {
            question: "I already submitted with a single signature. Will my form be rejected?",
            answer: "If the portal accepted your upload, your form is submitted. However, if UPSC specifically asked for three signatures in the current cycle's notification, they may flag it during document verification. Check the notification carefully and re-upload if the portal allows editing.",
        },
    ];

    const howToSteps = [
        { text: "Take a plain white A4 sheet (unruled) and a black ballpoint pen" },
        { text: "Sign three times vertically, leaving about 2cm gap between each signature" },
        { text: "Keep all three signatures within a rectangular area roughly 5cm wide and 6cm tall" },
        { text: "Scan or photograph the triple signature in good lighting — avoid shadows" },
        { text: "Crop the image tightly around the three signatures" },
        { text: "Upload to SignatureResize.in UPSC tool and resize to 20-100KB" },
    ];

    const mistakes = [
        {
            icon: Ruler,
            title: "Uneven spacing between the three signatures",
            description: "If one signature is crammed close to another while the third has a big gap, the overall image looks unbalanced. Draw faint pencil lines as guides (erase them after signing) to keep roughly equal 2cm spacing.",
        },
        {
            icon: Pen,
            title: "Different signature styles across the three",
            description: "Some candidates sign casually for the first, then try a fancier version for the second. Keep them consistent. UPSC is checking for a stable, recognizable signature pattern. Practice a few times on a separate sheet before signing the final version.",
        },
        {
            icon: ScanLine,
            title: "Too much whitespace around the signatures",
            description: "If you scan the entire A4 sheet, most of the image is blank paper. The three signatures get squeezed into tiny pixels. Crop tightly — the final image should show mainly the signatures with just a small margin around them.",
        },
        {
            icon: AlertTriangle,
            title: "Scanning with the page rotated or at an angle",
            description: "Phone cameras especially do this — if you hold the phone at an angle, the signatures come out skewed. Hold the phone directly above the paper, parallel to it. Some camera apps have a document mode that auto-corrects perspective.",
        },
    ];

    return (
        <>
            <SEOHead
                title="UPSC Triple Signature Guide — How to Write, Scan & Upload"
                description="UPSC asks for 3 signatures on one image. Here is exactly how to write them, scan them, crop the image, and resize to 20-100KB for the UPSC online portal."
                canonicalUrl="https://signatureresize.in/upsc-triple-signature-guide"
                keywords="UPSC triple signature, UPSC 3 signatures, how to make triple signature for UPSC, UPSC signature format, UPSC signature upload"
            />

            <SEOSchema
                type="HowTo"
                howToName="How to Create a Triple Signature for UPSC Online Application"
                howToSteps={howToSteps}
            />

            <SEOSchema
                type="FAQPage"
                faqs={faqs.map(faq => ({ question: faq.question, answer: faq.answer }))}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "UPSC Triple Signature Guide" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                                UPSC / CSE / IAS
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                UPSC <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">Triple Signature</span> — Step by Step
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                The UPSC signature is different from every other exam. They want three signatures
                                in one image. Here is how to get it right.
                            </p>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            {/* What is the Triple Signature */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    What Exactly Is the Triple Signature?
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    When you fill out the UPSC online application (for Civil Services, IFS, CDS, or
                                    any other UPSC exam), the portal asks you to upload a scanned image of your
                                    signature. But unlike SSC, GATE, or IBPS — where one signature is enough —
                                    UPSC wants <strong className="text-foreground">three copies of your handwritten
                                        signature, one below the other, on a single scanned image</strong>.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    This is not three different signatures or three different scans stitched together.
                                    It is you picking up a pen, signing three times in a column on the same piece of
                                    paper, and then scanning that area as one picture. The idea is that UPSC can
                                    verify your signature at different stages of the exam process without needing
                                    you to sign again.
                                </p>
                            </section>

                            {/* Step-by-Step */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    How to Write the Triple Signature
                                </h2>
                                <div className="space-y-4">
                                    <div className="rounded-xl border border-border bg-muted/30 p-5">
                                        <h3 className="mb-3 font-semibold text-foreground">Step 1: Set Up</h3>
                                        <p className="text-muted-foreground">
                                            Take a clean, unruled white A4 sheet. Ruled paper is not acceptable —
                                            the blue lines show up in the scan and can trigger rejection. Get a black
                                            ballpoint pen. Not a gel pen, not a sketch pen. A basic ballpoint.
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-border bg-muted/30 p-5">
                                        <h3 className="mb-3 font-semibold text-foreground">Step 2: Mark Your Space</h3>
                                        <p className="text-muted-foreground">
                                            Using a pencil (you will erase this later), lightly draw three horizontal
                                            lines about 2cm apart. This gives you three rows to sign in. The total
                                            signing area should be roughly 5cm wide and 6-7cm tall. You do not need
                                            to be exact — this is just to keep things tidy.
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-border bg-muted/30 p-5">
                                        <h3 className="mb-3 font-semibold text-foreground">Step 3: Sign Three Times</h3>
                                        <p className="text-muted-foreground">
                                            Sign in each row. Try to make all three signatures look similar — same size,
                                            same style, same speed. Do not overthink it. Sign the way you normally sign.
                                            If one goes wrong, take a fresh sheet and start over. It is better to use two
                                            sheets than to submit uneven signatures.
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-border bg-muted/30 p-5">
                                        <h3 className="mb-3 font-semibold text-foreground">Step 4: Erase & Scan</h3>
                                        <p className="text-muted-foreground">
                                            Erase the pencil guide lines gently. Then scan or photograph the signature
                                            area. Our <Link to="/how-to-scan-signature-for-online-forms" className="text-primary hover:underline">scanning guide</Link> has
                                            the full method for getting a clean scan with your phone.
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-border bg-muted/30 p-5">
                                        <h3 className="mb-3 font-semibold text-foreground">Step 5: Crop & Resize</h3>
                                        <p className="text-muted-foreground">
                                            Crop the image so only the three signatures and a thin margin are visible.
                                            Then upload it to our <Link to="/upsc-signature-resize" className="text-primary hover:underline">UPSC signature resize tool</Link> —
                                            it will bring the file down to the 20-100KB range in JPG format that
                                            UPSC needs.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* UPSC Specs Box */}
                            <section className="mb-12 rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
                                <h2 className="mb-4 text-xl font-bold text-foreground">UPSC Signature Specifications</h2>
                                <div className="grid gap-3 md:grid-cols-2">
                                    {[
                                        "Format: JPG / JPEG only",
                                        "File size: 20KB to 100KB",
                                        "Width: 350 to 1000 pixels",
                                        "Ink: Black ballpoint on white paper",
                                        "Style: Three signatures, vertically aligned",
                                        "Background: Plain white, no ruled lines",
                                    ].map((req, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                                            <span className="text-muted-foreground">{req}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-sm text-muted-foreground">
                                    Source:{" "}
                                    <a href="https://upsc.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                                        upsc.gov.in <ExternalLink className="h-3 w-3" />
                                    </a>{" "}
                                    — always verify against the current year's notification.
                                </p>
                            </section>

                            {/* Common Mistakes */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Mistakes That Get Signatures Rejected
                                </h2>
                                <p className="mb-6 text-muted-foreground">
                                    We see these come up repeatedly in messages from UPSC aspirants:
                                </p>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {mistakes.map((mistake, index) => {
                                        const IconComponent = mistake.icon;
                                        return (
                                            <div key={index} className="rounded-xl border border-border bg-card p-5">
                                                <div className="mb-3 flex items-center gap-2">
                                                    <IconComponent className="h-5 w-5 text-orange-500" />
                                                    <h3 className="font-semibold text-foreground">{mistake.title}</h3>
                                                </div>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{mistake.description}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>

                            {/* Related Tools */}
                            <section className="mb-12 rounded-xl border border-border bg-muted/30 p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <Info className="h-5 w-5 text-primary" />
                                    <h3 className="font-semibold text-foreground">Related Tools & Guides</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <Link to="/upsc-signature-resize" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">UPSC Resize Tool</Link>
                                    <Link to="/how-to-scan-signature-for-online-forms" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">How to Scan Signature</Link>
                                    <Link to="/exam-photo-signature-requirements-2026" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">All Exam Requirements</Link>
                                    <Link to="/signature-upload-errors-and-fixes" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Upload Error Fixes</Link>
                                </div>
                            </section>

                            {/* E-E-A-T */}
                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Why Trust This Guide?</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We have helped over 15,000 UPSC aspirants resize their signatures since 2024. The
                                    triple signature format trips up a lot of first-time candidates, and the UPSC
                                    portal does not explain it well. This guide is based on the official UPSC
                                    notification and the actual error messages candidates share with us. We update
                                    it every year when UPSC releases new specifications.
                                </p>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    <strong className="text-foreground">Published:</strong> February 2026 |
                                    <strong className="text-foreground"> Author:</strong> SignatureResize.in Team |
                                    <strong className="text-foreground"> Reference:</strong>{" "}
                                    <a href="https://upsc.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">UPSC Official Portal</a>
                                </p>
                            </section>

                        </div>
                    </div>
                </article>

                <FAQSection faqs={faqs} />
                <AdSenseDisclaimer />
                <Footer />
            </div>
        </>
    );
};

export default UPSCTripleSignatureGuide;

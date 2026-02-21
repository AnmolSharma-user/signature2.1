import { useState } from "react";
import { Link } from "react-router-dom";
import { PenTool, CheckCircle, ArrowRight, Sparkles, Shield, Zap, Download, FileImage } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import FAQSection from "@/components/FAQSection";
import AdContainer from "@/components/AdContainer";
import SignatureCreator from "@/components/SignatureCreator";
import SignatureResizer from "@/components/SignatureResizer";
import { Button } from "@/components/ui/button";

const SignatureCreatorPage = () => {
    const [signatureDataUrl, setSignatureDataUrl] = useState<string | null>(null);

    const howToSteps = [
        { text: "Open the Signature Creator tool on SignatureResize.in" },
        { text: "Choose 'Draw Signature' to draw by hand, or 'Type Signature' to use stylish fonts" },
        { text: "In Draw mode, customize pen color and thickness, then sign on the canvas" },
        { text: "In Type mode, enter your name, choose a signature font, and adjust size" },
        { text: "Click 'Download PNG' to save your signature, or 'Resize This Signature' to resize it for exam forms" },
        { text: "Select your exam preset (GATE, SSC, UPSC, NEET, etc.) and resize to the exact KB required" },
    ];

    const faqs = [
        {
            question: "Is this signature creator free to use?",
            answer: "Yes, the Signature Creator is completely free, with no signup or login required. You can create, download, and resize as many signatures as you want.",
        },
        {
            question: "Is my signature safe and private?",
            answer: "Absolutely. Your signature is created and processed entirely in your browser. We never upload, store, or transmit your signature data to any server. Everything stays on your device.",
        },
        {
            question: "Can I use the created signature for government exam forms?",
            answer: "Yes! After creating your signature, use the built-in resize tool to resize it to the exact KB and pixel dimensions required by your exam portal (GATE, SSC, UPSC, NEET, IBPS, GDS, etc.).",
        },
        {
            question: "Which is better — drawing or typing my signature?",
            answer: "For government exam forms, a hand-drawn signature is generally preferred as it looks more authentic and natural. However, typed signatures with cursive fonts are accepted by most portals. Choose whatever looks closest to your real signature.",
        },
        {
            question: "What format is the signature downloaded in?",
            answer: "The signature is downloaded as a PNG file with a white background, which is the most widely accepted format for exam portals. You can then resize it to JPG/JPEG format using the resize tool below.",
        },
        {
            question: "Can I use this on my phone?",
            answer: "Yes, the Signature Creator works on all devices — phones, tablets, and computers. On touchscreen devices, you can draw your signature directly with your finger.",
        },
        {
            question: "How do I resize the signature after creating it?",
            answer: "Click the 'Resize This Signature →' button after creating your signature. This will automatically load it into the resize tool below, where you can pick your exam preset and resize to the exact KB.",
        },
        {
            question: "What if my signature doesn't look good?",
            answer: "Use the Undo button to remove the last stroke, or Clear to start over. In Draw mode, experiment with different pen thicknesses and colors. In Type mode, try different fonts until you find one that matches your style.",
        },
    ];

    return (
        <>
            <SEOHead
                title="Signature Creator Online Free | Draw or Type Your Signature | SignatureResize.in"
                description="Create a digital signature online for free. Draw by hand or type with stylish fonts. Download as PNG and resize for GATE, SSC, UPSC, NEET exam forms. No signup needed."
                canonicalUrl="https://signatureresize.in/signature-creator"
                keywords="signature creator online, create signature online free, digital signature maker, draw signature online, type signature online, signature generator, create signature for exam, make digital signature, online signature maker free, signature creator tool, handwritten signature generator, cursive signature maker"
            />

            <SEOSchema
                type="HowTo"
                howToName="How to Create a Digital Signature Online for Exam Forms"
                howToSteps={howToSteps}
            />

            <SEOSchema
                type="FAQPage"
                faqs={faqs}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background py-8 sm:py-12">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Signature Creator" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                                ✨ CREATE + RESIZE IN ONE PLACE
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">Signature Creator</span> Online Free
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Create a professional digital signature by drawing or typing. Download as PNG
                                and resize it instantly for GATE, SSC, UPSC, NEET, IBPS, GDS, and all government exam forms.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Tool Section */}
                <main className="py-6 sm:py-8 md:py-12">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl">

                            {/* Step 1: Create */}
                            <div className="mb-2 flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</div>
                                <h2 className="text-lg font-semibold text-foreground">Create Your Signature</h2>
                            </div>
                            <SignatureCreator onSignatureReady={(dataUrl) => setSignatureDataUrl(dataUrl)} />

                            {/* Step 2: Resize */}
                            <div id="signature-resizer-section" className="mt-10">
                                <div className="mb-2 flex items-center gap-2">
                                    <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${signatureDataUrl ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                                        }`}>2</div>
                                    <h2 className={`text-lg font-semibold ${signatureDataUrl ? "text-foreground" : "text-muted-foreground"}`}>
                                        Resize for Your Exam
                                    </h2>
                                </div>

                                {signatureDataUrl ? (
                                    <SignatureResizer
                                        title="Resize Your Created Signature"
                                        defaultTargetKB={20}
                                        minKB={1}
                                        maxKB={100}
                                        maxWidth={400}
                                        maxHeight={200}
                                        defaultPreset="custom"
                                    />
                                ) : (
                                    <div className="rounded-2xl border-2 border-dashed border-border bg-muted/30 p-8 text-center">
                                        <PenTool className="mx-auto mb-3 h-10 w-10 text-muted-foreground/50" />
                                        <p className="text-muted-foreground font-medium">
                                            Create your signature above, then click "Resize This Signature →" to resize it here
                                        </p>
                                        <p className="mt-1 text-sm text-muted-foreground/70">
                                            Or you can upload an existing signature image directly
                                        </p>
                                        <Button asChild variant="outline" className="mt-4 gap-2">
                                            <Link to="/signature-resize">
                                                <FileImage className="h-4 w-4" />
                                                Upload Existing Signature
                                            </Link>
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Ad Container */}
                        <div className="mt-8">
                            <AdContainer type="display" />
                        </div>
                    </div>
                </main>

                {/* Features Section */}
                <section className="border-t border-border bg-muted/30 py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
                            Why Use Our Signature Creator?
                        </h2>
                        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
                            {[
                                {
                                    icon: Sparkles,
                                    title: "Draw or Type",
                                    description: "Draw freely with pen controls or type your name with 6 signature-style fonts. Both produce clean, professional results.",
                                },
                                {
                                    icon: ArrowRight,
                                    title: "Create → Resize in One Flow",
                                    description: "No need to save, open another tool, and re-upload. Create your signature and resize it right here for any exam portal.",
                                },
                                {
                                    icon: Shield,
                                    title: "100% Private & Secure",
                                    description: "Your signature never leaves your browser. Everything is processed locally on your device — we never see your data.",
                                },
                                {
                                    icon: Zap,
                                    title: "Works on All Devices",
                                    description: "Draw with your finger on phone, stylus on tablet, or mouse on desktop. Fully responsive touch support.",
                                },
                                {
                                    icon: Download,
                                    title: "Download as PNG",
                                    description: "Get a clean PNG with white background, ready for any exam portal. Convert to JPG with the resize tool.",
                                },
                                {
                                    icon: CheckCircle,
                                    title: "Undo, Redo & Customize",
                                    description: "Made a mistake? Undo it. Choose from 4 pen colors and adjustable thickness for the perfect signature.",
                                },
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md hover:border-primary/30"
                                >
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                        <feature.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEO Content / About Section */}
                <section className="border-t border-border bg-card py-12">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
                                Why Do You Need a Signature Creator for Exam Forms?
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Every government exam in India — GATE, SSC CGL, SSC CHSL, SSC MTS, UPSC CSE, UPSC NDA,
                                    NEET UG, JEE Main, JEE Advanced, IBPS PO, IBPS Clerk, RRB NTPC, India Post GDS — requires
                                    you to upload a digital signature during the online application process. The signature must
                                    meet strict requirements for file size (typically 1KB to 30KB), dimensions (usually 140×60
                                    to 300×120 pixels), and format (JPG/JPEG).
                                </p>
                                <p>
                                    Many students face a common problem: they don't have a clean, high-quality digital version
                                    of their signature. Scanning a physical signature often results in messy backgrounds, uneven
                                    contrast, or blurry edges. Studio scans can be expensive and inconvenient, especially when
                                    you need to re-do it for every exam cycle.
                                </p>
                                <p>
                                    <strong>That's exactly why we built this Signature Creator tool.</strong> Instead of scanning
                                    a physical signature, you can create a clean, professional digital signature right here in
                                    your browser — either by drawing it with your mouse/finger or by typing your name with a
                                    stylish script font. The result is a crisp PNG image on a pure white background, ready for
                                    any exam portal.
                                </p>

                                <h3 className="text-xl font-semibold text-foreground pt-4">
                                    Draw Mode vs Type Mode — Which Should You Use?
                                </h3>
                                <p>
                                    <strong>Draw Mode</strong> is ideal if you want an authentic, handwritten look. You draw
                                    your signature using your mouse (on desktop) or finger (on phone/tablet). The tool uses
                                    smooth bezier curves to make your strokes look natural, not jagged. You can choose from
                                    four pen colors (Black, Dark Blue, Dark Red, Navy) and adjust the pen thickness from thin
                                    to thick. If you make a mistake, just hit Undo.
                                </p>
                                <p>
                                    <strong>Type Mode</strong> is great for speed and consistency. Simply type your name and
                                    choose from six signature-style Google Fonts: Dancing Script, Great Vibes, Sacramento,
                                    Satisfy, Pacifico, and Allura. Each font gives your name a professional, cursive look.
                                    Adjust the font size and color to match your preference. The typed signature looks clean
                                    and is accepted by all major exam portals.
                                </p>

                                <h3 className="text-xl font-semibold text-foreground pt-4">
                                    The Complete Create → Resize Workflow
                                </h3>
                                <p>
                                    What makes our tool unique is the <strong>integrated create-and-resize workflow</strong>.
                                    On other websites, you'd create a signature, download it, then open a separate resize tool,
                                    upload it again, set the parameters, and download again. That's 6+ steps across multiple tools.
                                </p>
                                <p>
                                    Here, you create your signature and click "Resize This Signature →" — it loads directly
                                    into our proven resize engine (trusted by 50,000+ students) where you can select your exam
                                    preset and get the exact KB size. Two steps, one page, zero friction.
                                </p>

                                <h3 className="text-xl font-semibold text-foreground pt-4">
                                    Tips for Creating the Perfect Digital Signature
                                </h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        <strong>Use black ink:</strong> Most exam portals require a black or dark blue signature
                                        on a white background. Stick to black for maximum compatibility.
                                    </li>
                                    <li>
                                        <strong>Sign in the center:</strong> Keep your signature centered on the canvas, ideally
                                        along the guide line. This ensures it won't get cut off during resizing.
                                    </li>
                                    <li>
                                        <strong>Keep it simple:</strong> Overly complex signatures with too many flourishes may
                                        become unreadable when resized to small dimensions (like 140×60 pixels for SSC).
                                    </li>
                                    <li>
                                        <strong>Match your real signature:</strong> Your digital signature should resemble the one
                                        you use on paper. Some exams cross-verify your digital signature with your handwritten one
                                        at the exam center.
                                    </li>
                                    <li>
                                        <strong>Medium thickness:</strong> A pen thickness of 2-4px works best. Too thin can
                                        disappear after resizing; too thick can bleed into a dark block.
                                    </li>
                                </ul>

                                <h3 className="text-xl font-semibold text-foreground pt-4">
                                    Privacy & Security
                                </h3>
                                <p>
                                    Your signature is one of the most sensitive personal identifiers — we take that seriously.
                                    The Signature Creator runs <strong>100% in your browser</strong> using HTML5 Canvas. Your
                                    signature data is never sent to our server, never stored in any database, and never shared
                                    with anyone. When you close the page, it's gone. This is the same architecture trusted by
                                    50,000+ students for our signature resize tool.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="border-t border-border bg-muted/30 py-12">
                    <div className="container mx-auto px-4">
                        <FAQSection faqs={faqs} />
                    </div>
                </section>

                {/* CTA Section */}
                <section className="border-t border-border bg-gradient-to-br from-primary/5 via-background to-accent/10 py-12">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="mb-4 text-2xl font-bold text-foreground">
                            Already Have a Physical Signature?
                        </h2>
                        <p className="mb-6 text-muted-foreground max-w-xl mx-auto">
                            If you already have a scanned or photographed signature, use our dedicated
                            Signature Resize tool to resize it for any exam portal.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button asChild size="lg" className="gap-2">
                                <Link to="/signature-resize">
                                    <FileImage className="h-5 w-5" />
                                    Resize Existing Signature
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="gap-2">
                                <Link to="/how-to-scan-signature-for-online-forms">
                                    Learn How to Scan Signature
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default SignatureCreatorPage;

import { Link } from "react-router-dom";
import { Camera, Sun, Crop, Image, Monitor, CheckCircle, Info, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";

const PassportPhotoAtHome = () => {
    const faqs = [
        {
            question: "Can I use a phone camera for passport-size photos for exams?",
            answer: "Yes, absolutely. Modern phone cameras (even budget phones from the last 3-4 years) are more than good enough. The key is lighting and framing, not the camera itself. Rear camera gives better results than the front camera in most phones.",
        },
        {
            question: "Does the background have to be perfectly white?",
            answer: "It should be as close to white or very light grey as possible. A light-colored wall works. If the wall has a slight tint, your phone's photo editor can usually fix that with the brightness and whites slider. A white bedsheet pinned to the wall is the easiest DIY backdrop.",
        },
        {
            question: "My photo is 2MB. How do I get it under 50KB?",
            answer: "Upload it to our resize tool and select your exam's preset. For example, GATE wants under 200KB, SSC wants 20-50KB, NEET wants 10-200KB. Our tool will compress while keeping enough quality for the portal to accept it.",
        },
        {
            question: "Should I smile in the exam photo?",
            answer: "Keep a neutral expression — mouth closed, eyes open, looking straight at the camera. This is the same rule as a passport photo. Some portals will reject photos with wide smiles or open mouths.",
        },
        {
            question: "Can I wear glasses in my exam photo?",
            answer: "Most Indian exam portals accept thin-framed glasses as long as there is no glare on the lenses and your eyes are clearly visible. Thick-framed glasses or sunglasses are usually not allowed. When in doubt, take the photo without glasses.",
        },
        {
            question: "Why do studio photos keep getting rejected on exam portals?",
            answer: "Studios often deliver photos at 300 DPI in high resolution — which means the file is 500KB-2MB. They also use standard 3.5×4.5 cm ratios, but many exam portals want specific pixel dimensions like 200×230 or 3:4 ratio. The photo needs to be resized to the portal's exact requirements.",
        },
    ];

    const howToSteps = [
        { text: "Set up a white or light-colored background — use a wall or a bedsheet pinned flat" },
        { text: "Position yourself arm's length from the background to avoid shadows" },
        { text: "Use natural window light from the front or slightly to the side — no flash" },
        { text: "Mount your phone at face height using a stack of books or a tripod — use the timer" },
        { text: "Take the photo with the rear camera, holding your head straight with a neutral expression" },
        { text: "Crop the photo so your head fills about 70-80% of the frame" },
        { text: "Upload to SignatureResize.in and select your exam preset to get the right KB and dimensions" },
    ];

    return (
        <>
            <SEOHead
                title="How to Take a Passport Photo at Home for Exam Forms (Phone Camera)"
                description="Take a passport-size photo at home with your phone for GATE, SSC, UPSC, NEET, and other exam forms. Setup, lighting, framing, and how to resize to the right KB."
                canonicalUrl="https://signatureresize.in/how-to-take-passport-photo-at-home-for-exams"
                keywords="passport photo at home, exam photo phone camera, white background photo at home, passport size photo for exam form, take photo for government form"
            />

            <SEOSchema
                type="HowTo"
                howToName="How to Take a Passport Photo at Home Using Your Phone for Exam Applications"
                howToSteps={howToSteps}
            />

            <SEOSchema
                type="FAQPage"
                faqs={faqs.map(faq => ({ question: faq.question, answer: faq.answer }))}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Take Passport Photo at Home" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
                                📸 PHOTO GUIDE
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Take a <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">Passport Photo at Home</span> for Exam Forms
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                No studio needed. Your phone camera, a white wall, and 5 minutes. Here is the full method.
                            </p>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            {/* Why Studio Photos Fail */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Why Studio Photos Often Fail on Exam Portals
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    You get a photo taken at a studio, it looks perfect, and then the exam
                                    portal says "file size exceeds limit" or "invalid dimensions." This happens
                                    a lot — and it is not the studio's fault exactly. Studios shoot at high resolution
                                    (300 DPI, sometimes 600 DPI) for print quality. The resulting file is 500KB to 2MB.
                                    But exam portals want 20KB to 100KB.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    Studios also crop to standard passport-size ratio (3.5 × 4.5 cm), which does
                                    not always match what portals expect. GATE wants a specific pixel dimension.
                                    SSC wants 3.5 × 4.5 cm but at 20-50KB. NTA portals want 10-200KB with particular
                                    aspect ratios. Each one is slightly different.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    The simplest solution: take the photo yourself. You control the framing from
                                    the start, and you can resize it right away using our tool. No back-and-forth
                                    with the studio.
                                </p>
                            </section>

                            {/* Featured Article Image */}
                            <figure className="mb-12">
                                <img
                                    src="/assest/Take-a-Passport-Photo-at-Home-for-Exam-Forms.webp"
                                    alt="Take a passport photo at home for exam forms — DIY passport-size photo guide using phone camera"
                                    className="w-full rounded-xl border border-border shadow-lg"
                                    loading="lazy"
                                    decoding="async"
                                    width="1200"
                                    height="630"
                                />
                                <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                                    How to take a professional passport-size photo at home using your phone camera
                                </figcaption>
                            </figure>

                            {/* Setup Section */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Setting Up for the Photo
                                </h2>

                                <div className="space-y-5">
                                    <div className="rounded-xl border border-border bg-muted/30 p-5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Monitor className="h-5 w-5 text-primary" />
                                            <h3 className="font-semibold text-foreground">Background</h3>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Find a plain white or very light-colored wall. If your walls are painted
                                            a dark color, pin a white bedsheet or a large white chart paper to the wall.
                                            Iron the sheet first if you can — wrinkles create shadows that show up
                                            in the photo. Stand about 30-40cm (one arm length) away from the wall.
                                            This gap prevents your shadow from falling on the background.
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-border bg-muted/30 p-5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Sun className="h-5 w-5 text-yellow-500" />
                                            <h3 className="font-semibold text-foreground">Lighting</h3>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Natural light is the best option. Stand facing a window — the light should
                                            hit your face from the front. If the sunlight is too harsh (sharp shadows
                                            under your nose and chin), hang a thin white curtain or dupatta over the
                                            window to soften it. Avoid having a window behind you — that creates a
                                            silhouette. Do not use the phone flash — it creates a washed-out look and
                                            uneven lighting.
                                        </p>
                                        <p className="mt-3 text-muted-foreground leading-relaxed">
                                            If you are shooting at night, use two desk lamps or tube lights. Place
                                            one on each side of your face, slightly above eye level. This fills in
                                            shadows and gives even lighting across your face.
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-border bg-muted/30 p-5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Camera className="h-5 w-5 text-primary" />
                                            <h3 className="font-semibold text-foreground">Camera Setup</h3>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Use your phone's rear camera — it is sharper than the front camera on most
                                            phones. Place the phone on a stack of books, a shelf, or against a wall at
                                            face height. Use the 3-second timer so you have time to get into position.
                                            If someone else can hold the phone for you, even better — just make sure
                                            the camera is at your eye level, not looking up or down at your face.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Taking the Photo */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Taking the Photo
                                </h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {[
                                        { icon: CheckCircle, text: "Look directly at the camera lens", color: "text-green-500" },
                                        { icon: CheckCircle, text: "Keep a neutral expression — mouth closed", color: "text-green-500" },
                                        { icon: CheckCircle, text: "Both ears visible (push hair behind ears)", color: "text-green-500" },
                                        { icon: CheckCircle, text: "Head straight, not tilted or rotated", color: "text-green-500" },
                                        { icon: CheckCircle, text: "Wear a plain, solid-colored top (not white — it blends into the background)", color: "text-green-500" },
                                        { icon: CheckCircle, text: "No hat, cap, or headband (religious headgear is fine if ears are visible)", color: "text-green-500" },
                                    ].map((item, index) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <div key={index} className="flex items-start gap-2 rounded-lg border border-border bg-card p-3">
                                                <IconComponent className={`mt-0.5 h-4 w-4 shrink-0 ${item.color}`} />
                                                <span className="text-sm text-muted-foreground">{item.text}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>

                            {/* Cropping Section */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Cropping the Photo Correctly
                                </h2>
                                <div className="rounded-xl border border-border bg-muted/30 p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Crop className="h-5 w-5 text-primary" />
                                        <h3 className="font-semibold text-foreground">The 70-80% Rule</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Your face should fill about 70-80% of the image vertically. The top
                                        of the frame should have a small gap above your head (about 10% of the
                                        image height). The bottom of the frame should cut off somewhere around
                                        your upper chest or just below your collar.
                                    </p>
                                    <p className="mt-3 text-muted-foreground leading-relaxed">
                                        Most phone photo editors have a crop tool where you can set aspect ratio.
                                        Use 3:4 or 4:5 for passport-style photos. Do not crop to 1:1 (square)
                                        unless the exam specifically asks for it.
                                    </p>
                                </div>
                            </section>

                            {/* Resize Section */}
                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Resizing for Your Exam Portal
                                </h2>
                                <p className="mb-4 text-muted-foreground leading-relaxed">
                                    After cropping, the photo will still be too large for most exam portals —
                                    phone cameras produce files between 1MB and 5MB. You need to bring it
                                    down to the portal's required KB range without making the photo blurry.
                                    That is exactly what our resize tools do.
                                </p>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-border bg-muted/50">
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Exam</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Photo Size</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Tool</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground">
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3">GATE</td>
                                                <td className="px-4 py-3">5KB - 200KB</td>
                                                <td className="px-4 py-3"><Link to="/gate-photo-resize" className="text-primary hover:underline">GATE Photo Resize</Link></td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-4 py-3">SSC</td>
                                                <td className="px-4 py-3">20KB - 50KB</td>
                                                <td className="px-4 py-3"><Link to="/ssc-mts-signature-resize" className="text-primary hover:underline">SSC Tool</Link></td>
                                            </tr>
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3">UPSC</td>
                                                <td className="px-4 py-3">20KB - 200KB</td>
                                                <td className="px-4 py-3"><Link to="/upsc-signature-resize" className="text-primary hover:underline">UPSC Tool</Link></td>
                                            </tr>
                                            <tr className="border-b border-border bg-muted/20">
                                                <td className="px-4 py-3">NEET</td>
                                                <td className="px-4 py-3">10KB - 200KB</td>
                                                <td className="px-4 py-3"><Link to="/neet-photo-signature-resize" className="text-primary hover:underline">NEET Photo Resize</Link></td>
                                            </tr>
                                            <tr className="border-b border-border">
                                                <td className="px-4 py-3">IBPS</td>
                                                <td className="px-4 py-3">20KB - 50KB</td>
                                                <td className="px-4 py-3"><Link to="/ibps-photo-signature-resize" className="text-primary hover:underline">IBPS Photo Resize</Link></td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3">GDS</td>
                                                <td className="px-4 py-3">20KB - 100KB</td>
                                                <td className="px-4 py-3"><Link to="/gds-photo-signature-resize" className="text-primary hover:underline">GDS Photo Resize</Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    Full list: <Link to="/exam-photo-signature-requirements-2026" className="text-primary hover:underline">All exam photo &amp; signature requirements →</Link>
                                </p>
                            </section>

                            {/* Related Tools */}
                            <section className="mb-12 rounded-xl border border-border bg-muted/30 p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <Info className="h-5 w-5 text-primary" />
                                    <h3 className="font-semibold text-foreground">Related Guides</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <Link to="/how-to-scan-signature-for-online-forms" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">How to Scan Signature</Link>
                                    <Link to="/signature-upload-errors-and-fixes" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">Upload Error Fixes</Link>
                                    <Link to="/upsc-triple-signature-guide" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">UPSC Triple Signature</Link>
                                    <Link to="/exam-photo-signature-requirements-2026" className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">All Exam Requirements</Link>
                                </div>
                            </section>

                            {/* E-E-A-T */}
                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Who Made This Guide?</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    This guide comes from the team at <strong className="text-foreground">SignatureResize.in</strong>.
                                    We have processed over 100,000 photos and signatures for students applying
                                    to GATE, SSC, UPSC, NEET, IBPS, and other exams. A big chunk of the support
                                    messages we get are about photo rejections — wrong KB, wrong dimensions, blurry
                                    image. After answering the same questions hundreds of times, we put it all in one page.
                                </p>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    <strong className="text-foreground">Published:</strong> February 2026 |
                                    <strong className="text-foreground"> Updated regularly</strong> when exam portals change their requirements
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

export default PassportPhotoAtHome;

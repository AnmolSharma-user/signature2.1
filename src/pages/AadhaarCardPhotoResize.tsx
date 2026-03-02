import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignatureResizer from "@/components/SignatureResizer";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import ProcessingFeatures from "@/components/ProcessingFeatures";
import TrustBadges from "@/components/TrustBadges";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdContainer from "@/components/AdContainer";
import { CheckCircle, Camera, AlertTriangle, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const AadhaarCardPhotoResize = () => {
    const faqs = [
        {
            question: "What is the Aadhaar card photo size requirement for UIDAI portal?",
            answer: "For Aadhaar card enrollment or update through the myAadhaar portal or Aadhaar enrollment center, the photograph must be in JPEG/JPG format with a file size under 35KB. The recommended resolution is 200×200 pixels. The photo must show a clear, front-facing view with a neutral expression and white or light background.",
        },
        {
            question: "How to resize Aadhaar photo to under 35KB?",
            answer: "Use the tool on this page: Upload your photo, and select 'Aadhaar Enrollment' from the presets. The tool will automatically compress your photo to under 35KB in JPG format without visible quality loss. Download the output and use it for your Aadhaar application.",
        },
        {
            question: "What format does UIDAI accept for Aadhaar photo upload?",
            answer: "UIDAI's myAadhaar portal accepts JPEG/JPG format only. PNG, GIF, BMP, and WEBP formats are not accepted. Our tool automatically outputs in JPG format to ensure compatibility with the UIDAI portal.",
        },
        {
            question: "Can I update my Aadhaar photo online?",
            answer: "Yes, you can update your Aadhaar photo online via the myAadhaar portal at myaadhaar.uidai.gov.in. However, there may be fees and identity verification requirements. The uploaded photo must be in JPG format, under 35KB, with specific dimension requirements. Use our tool to prepare your photo.",
        },
        {
            question: "What background is required for Aadhaar card photo?",
            answer: "The UIDAI requires a white or light-coloured plain background for the Aadhaar photo. The face should be clearly visible with no shadows. Casual selfies, photos with patterned backgrounds, or photos with sunglasses are not accepted.",
        },
        {
            question: "Is there a minimum size for Aadhaar card photo?",
            answer: "UIDAI requires the photo to be clear and high quality but under 35KB. While there is no strict minimum KB size, the image must be sharp enough to clearly identify the individual. We recommend targeting 25–30KB for the best balance of quality and file size compliance.",
        },
        {
            question: "How to compress image to 35KB for Aadhaar?",
            answer: "Upload your photo to the tool above, which uses a precision binary search algorithm to compress your image to exactly the target size. Select the Aadhaar preset (35KB), click Resize, and download. The process takes under 3 seconds and runs entirely in your browser.",
        },
        {
            question: "Does Aadhaar enrollment require a live photo or uploaded photo?",
            answer: "Aadhaar enrollment centers take live biometric photos onsite. However, for online address or demographic updates via myAadhaar portal, you can upload a photo. The upload must meet UIDAI's specifications: JPG format, under 35KB.",
        },
    ];

    const photoRequirements = [
        "File size: Under 35 KB",
        "Format: JPEG / JPG only",
        "Dimensions: 200 × 200 pixels",
        "Background: White or light plain",
        "Clear, front-facing portrait",
        "Neutral expression",
        "Both eyes open and visible",
        "No sunglasses or head covering",
    ];

    const howToSteps = [
        { text: "Take or get a passport-size photo with a white or light background" },
        { text: "Upload your photo using the tool below (JPG, JPEG, or PNG accepted)" },
        { text: "The Aadhaar preset auto-sets the target to 30KB and 200×200px dimensions" },
        { text: "Click 'Resize Now' — the tool compresses your photo to under 35KB instantly" },
        { text: "Download the resized JPG and upload it to myaadhaar.uidai.gov.in" },
    ];

    return (
        <>
            <SEOHead
                title="Aadhaar Card Photo Resize Online | Resize to Under 35KB Free"
                description="Resize your Aadhaar card photo to under 35KB for UIDAI myAadhaar portal. Free online tool, JPG output, 200×200px, instant compression. No signup required."
                canonicalUrl="https://signatureresize.in/aadhaar-card-photo-resize"
                keywords="aadhaar card photo resize, aadhaar photo size in kb, aadhaar photo resize online, myaadhaar photo upload size, uidai photo size, compress photo to 35kb aadhaar, aadhaar enrollment photo size, aadhaar photo 200x200"
                ogImage="https://signatureresize.in/assest/aadhaar-card-photo-resize.png"
            />

            {/* Speakable Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Aadhaar Card Photo Resize Online",
                        "speakable": {
                            "@type": "SpeakableSpecification",
                            "cssSelector": [".speakable-intro", "h1", ".faq-answer"]
                        },
                        "url": "https://signatureresize.in/aadhaar-card-photo-resize"
                    })
                }}
            />

            {/* FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                        }))
                    })
                }}
            />

            {/* WebApplication Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "Aadhaar Card Photo Resize Tool",
                        "url": "https://signatureresize.in/aadhaar-card-photo-resize",
                        "description": "Free tool to resize Aadhaar card photo to under 35KB for UIDAI myAadhaar portal",
                        "applicationCategory": "UtilityApplication",
                        "operatingSystem": "Any",
                        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
                        "author": { "@id": "https://signatureresize.in/#author" },
                        "publisher": { "@id": "https://signatureresize.in/#organization" }
                    })
                }}
            />

            <SEOSchema
                type="HowTo"
                howToName="How to Resize Aadhaar Card Photo for UIDAI myAadhaar Portal"
                howToSteps={howToSteps}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-orange-500/10 via-primary/5 to-background py-8 sm:py-12">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Aadhaar Card Photo Resize" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 px-4 py-1.5 text-sm font-semibold text-orange-700 dark:text-orange-400">
                                <Shield className="h-4 w-4" />
                                UIDAI myAadhaar Portal Compatible
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Aadhaar Card <span className="text-primary">Photo Resize</span> Online Free
                            </h1>
                            <p className="speakable-intro text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                                Compress and resize your photo to <strong>under 35 KB</strong> for the UIDAI myAadhaar portal. JPG output, 200×200 pixels, instant — no installation needed.
                            </p>

                            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
                                {[
                                    "Under 35 KB output",
                                    "200 × 200 px",
                                    "JPG / JPEG format",
                                    "UIDAI compatible",
                                ].map((badge) => (
                                    <span key={badge} className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Tool */}
                <main className="py-8 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl">
                            <SignatureResizer
                                title="Upload Your Aadhaar Photo"
                                defaultTargetKB={30}
                                minKB={10}
                                maxKB={35}
                                maxWidth={200}
                                maxHeight={200}
                                defaultPreset="aadhaar-photo"
                            />

                            {/* Requirements card */}
                            <div className="mt-8 rounded-xl border-2 border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-950/30 p-5">
                                <div className="mb-4 flex items-center gap-2">
                                    <Camera className="h-5 w-5 text-orange-600" />
                                    <h2 className="text-sm font-bold text-foreground">Aadhaar Photo Requirements (UIDAI 2026)</h2>
                                </div>
                                <div className="grid gap-2 sm:grid-cols-2">
                                    {photoRequirements.map((req, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                                            <span className="text-sm text-muted-foreground">{req}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Warning */}
                            <div className="mt-4 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-4">
                                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                                <div className="text-sm text-amber-800 dark:text-amber-300">
                                    <strong>Important:</strong> Photos taken from social media, old Aadhaar cards, or already-compressed sources may lose quality when resized. For best results, use an original high-resolution photo.
                                </div>
                            </div>

                            <AdContainer type="display" />
                        </div>

                        {/* Info Section */}
                        <div className="mx-auto mt-12 max-w-4xl">
                            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                    Aadhaar Photo Resize Guide — UIDAI Requirements Explained
                                </h2>

                                <AdContainer type="inarticle" className="mb-6" />

                                <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                                    <p>
                                        The <strong className="text-foreground">Aadhaar card</strong> is India's universal biometric ID, issued by the <strong className="text-foreground">Unique Identification Authority of India (UIDAI)</strong>. Over 1.39 billion Indians have an Aadhaar card, and many need to update their photo periodically — especially when the original photo is outdated or unclear.
                                    </p>
                                    <p>
                                        When uploading a photo via the <strong className="text-foreground">myAadhaar portal</strong> (myaadhaar.uidai.gov.in), UIDAI enforces strict file size and format requirements. The photo must be a <strong className="text-foreground">JPG/JPEG file under 35 KB</strong> with dimensions of <strong className="text-foreground">200×200 pixels</strong>. Files that exceed 35KB or are in PNG/WEBP format are rejected immediately.
                                    </p>

                                    <h3 className="text-lg font-semibold text-foreground">Why Photo Resizing is Needed for Aadhaar</h3>
                                    <p>
                                        Standard photos from phone cameras can range from 1MB to 5MB — far exceeding the 35KB limit. Even photos from professional photographers are typically 500KB–2MB. The UIDAI portal does not automatically compress photos, so you must resize before uploading.
                                    </p>
                                    <p>
                                        Our tool uses a <strong className="text-foreground">binary search compression algorithm</strong> to find the exact JPEG quality level that achieves your target file size within a 1–2KB tolerance. This ensures you get the highest possible visual quality at or just below 35KB.
                                    </p>

                                    <h3 className="text-lg font-semibold text-foreground">Step-by-Step: How to Update Aadhaar Photo</h3>
                                    <ol className="ml-5 list-decimal space-y-2">
                                        <li>Resize your photo using the tool above (output: JPG, ~30KB, 200×200px)</li>
                                        <li>Log in to <strong className="text-foreground">myaadhaar.uidai.gov.in</strong> with your Aadhaar number and OTP</li>
                                        <li>Navigate to "Update Aadhaar" → "Update Demographics"</li>
                                        <li>Upload your resized photo</li>
                                        <li>Complete identity verification and pay the applicable fee</li>
                                        <li>Note your URN (Update Request Number) for tracking</li>
                                    </ol>

                                    <h3 className="text-lg font-semibold text-foreground">Related Tools</h3>
                                    <p>
                                        Need to resize for government exams?{" "}
                                        <Link to="/pan-card-photo-signature-resize" className="text-primary hover:underline font-medium">PAN Card Photo Resize</Link>,{" "}
                                        <Link to="/signature-resize" className="text-primary hover:underline font-medium">Signature Resize</Link>, and{" "}
                                        <Link to="/compress-image-to-20kb-online" className="text-primary hover:underline font-medium">Compress Image to 20KB</Link>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Author Bio */}
                        <div className="mx-auto mt-6 max-w-4xl">
                            <div className="rounded-xl border border-border bg-card/50 p-5 flex items-start gap-4">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-primary">SR</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">Reviewed by SignatureResize Editorial Team</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        This guide is based on official UIDAI guidelines published at uidai.gov.in. We review and update our content with every UIDAI policy change.{" "}
                                        <Link to="/about-us" className="text-primary hover:underline">About us →</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <AdContainer type="infeed" className="mx-auto max-w-4xl" />

                        <div className="mx-auto mt-10 max-w-3xl">
                            <ProcessingFeatures />
                        </div>
                        <div className="mx-auto mt-10 max-w-4xl">
                            <TrustBadges />
                        </div>
                    </div>
                </main>

                <FAQSection faqs={faqs} />
                <AdContainer type="multiplex" className="container mx-auto px-4 mb-6" />
                <Footer />
            </div>
        </>
    );
};

export default AadhaarCardPhotoResize;

import { Link } from "react-router-dom";
import { Scale, Info, CheckCircle, XCircle, Monitor, Printer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";

const ImageDPIvsKB = () => {
    const faqs = [
        {
            question: "What is DPI and why does it matter for exams?",
            answer: "DPI (Dots Per Inch) measures print resolution. For online exam forms, it usually doesn't matter unless specifically requested (like PAN Card's 200 DPI). It's just metadata in the file header telling a printer how dense the pixels should be.",
        },
        {
            question: "Does changing DPI change the file size (KB)?",
            answer: "No. DPI is just a tag. A 1000x1000 pixel image has the same amount of data (MB/KB) whether it's tagged as 72 DPI or 300 DPI. The file size only changes if you change the pixel dimensions or compression quality.",
        },
        {
            question: "How do I check the DPI of my image?",
            answer: "On Windows: Right-click image > Properties > Details > Horizontal/Vertical Resolution. On Phone: Most galleries don't show this. You need an EXIF viewer app. Our PAN card resize tool automatically sets the correct DPI so you don't need to check.",
        },
        {
            question: "My photo is 300 DPI but portal says 'rejected'. Why?",
            answer: "The portal likely wants strict pixel dimensions (e.g., 200x230 px) or specific KB size. DPI is rarely the cause of rejection for exam portals (unlike PAN/Passport). Focus on pixels and file size first.",
        },
    ];

    return (
        <>
            <SEOHead
                title="Image DPI vs KB vs Pixels: What Exam Portals Actually Check?"
                description="Confused by DPI, KB, and Pixels? Learn what matters for government exam uploads. Why PAN card needs 200 DPI but SSC doesn't. Simple guide."
                canonicalUrl="https://signatureresize.in/image-dpi-vs-kb-vs-pixels-exam-portals"
                keywords="dpi vs kb vs pixels, what is dpi in photo, 200 dpi photo size converter, image resolution for exam, kb to dpi converter"
            />

            <div className="min-h-screen bg-background">
                <Header />
                <section className="relative overflow-hidden bg-gradient-to-br from-violet-600/10 via-accent to-background py-10 sm:py-14">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "DPI vs KB vs Pixels" }]} />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-violet-600/10 px-4 py-2 text-sm font-medium text-violet-600">📊 TECHNICAL GUIDE</span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                Image DPI vs KB vs Pixels: <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">What Matters?</span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                                Stop worrying about DPI for SSC/IBPS. Understand exactly what exam portals validate.
                            </p>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            <section className="mb-12">
                                <h2 className="mb-6 text-xl sm:text-2xl font-bold text-foreground">The Three Pillars of Digital Images</h2>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <div className="rounded-xl border border-border bg-card p-5">
                                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10"><Monitor className="h-5 w-5 text-blue-500" /></div>
                                        <h3 className="font-bold text-blue-600">1. Pixels (px)</h3>
                                        <p className="text-sm mt-2 text-muted-foreground">The actual dimensions of the image. E.g., <strong className="text-foreground">200 x 230 px</strong>.</p>
                                        <p className="text-xs mt-2 font-medium text-green-600">Most Important for Exams ✅</p>
                                    </div>
                                    <div className="rounded-xl border border-border bg-card p-5">
                                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10"><Scale className="h-5 w-5 text-purple-500" /></div>
                                        <h3 className="font-bold text-purple-600">2. File Size (KB)</h3>
                                        <p className="text-sm mt-2 text-muted-foreground">How much space it takes on disk. E.g., <strong className="text-foreground">20-50 KB</strong>.</p>
                                        <p className="text-xs mt-2 font-medium text-green-600">Most Important for Exams ✅</p>
                                    </div>
                                    <div className="rounded-xl border border-border bg-card p-5">
                                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10"><Printer className="h-5 w-5 text-orange-500" /></div>
                                        <h3 className="font-bold text-orange-600">3. DPI (Resolution)</h3>
                                        <p className="text-sm mt-2 text-muted-foreground">Print density instruction. E.g., <strong className="text-foreground">200 DPI</strong>.</p>
                                        <p className="text-xs mt-2 font-medium text-red-500">Usually Ignored ❌</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">When Does DPI Actually Matter?</h2>
                                <p className="mb-4 text-muted-foreground">For 95% of exams (SSC, IBPS, GATE), the portal ignores DPI. You can upload 72 DPI or 300 DPI, and as long as Pixels and KB are correct, it will work.</p>
                                <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
                                    <h3 className="font-bold text-foreground">The Exceptions: PAN & Passport</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        <strong>NSDL / UTI PAN Card:</strong> Strictly requires <strong>200 DPI</strong>. If the metadata says 72 or 96 (standard screen DPI), the upload fails.
                                    </p>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        <strong>Passport Seva:</strong> Often requires 300 DPI for high-quality printing on the booklet.
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <Link to="/pan-card-photo-signature-resize" className="text-primary hover:underline font-medium">Use our PAN Resize Tool for guaranteed 200 DPI →</Link>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">How to "Convert" KB Without Losing Quality?</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Students often ask "How many pixels make 50KB?". There is no fixed formula. 50KB depends on image complexity (colors, details) and compression level.
                                </p>
                                <ul className="mt-4 space-y-2 list-disc pl-5 text-muted-foreground">
                                    <li><strong>Dimensions:</strong> Smaller pixels (e.g. 100x100) = Smaller KB.</li>
                                    <li><strong>Compression:</strong> Higher JPG compression = Smaller KB (but quality drops).</li>
                                    <li><strong>Content:</strong> A white background photo is smaller in KB than a colorful outdoor photo of same dimensions.</li>
                                </ul>
                            </section>

                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">About This Guide</h2>
                                <p className="text-muted-foreground leading-relaxed">Published by <strong className="text-foreground">SignatureResize.in</strong>. We built our resizing engine to handle these technical details automatically, so you don't have to do the math.</p>
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

export default ImageDPIvsKB;

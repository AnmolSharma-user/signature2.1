import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const BlogPage = () => {
    const posts = [
        {
            title: "How to Create Digital Signature for Government Exams Without Scanner",
            slug: "/create-digital-signature-without-scanner",
            desc: "No scanner? No problem. Use your phone camera to create a perfect digital signature for any online application form.",
            date: "Feb 2026",
            readTime: "5 min read",
            category: "Guide",
        },
        {
            title: "SSC CGL 2026 Photo & Signature Upload Guide",
            slug: "/ssc-cgl-photo-signature-upload-guide-2026",
            desc: "Exact size, dimensions, and format requirements for SSC CGL 2026 application. Avoid rejection with this guide.",
            date: "Feb 2026",
            readTime: "4 min read",
            category: "Exam Specific",
        },
        {
            title: "JPG vs PNG vs JPEG for Government Exam Forms",
            slug: "/jpg-vs-png-for-government-exam-forms",
            desc: "Why do portals reject PNG? Is JPEG the same as JPG? The complete file format guide for aspirants.",
            date: "Feb 2026",
            readTime: "3 min read",
            category: "Technical",
        },
        {
            title: "Photo Resize for Admit Card & Mark Sheet",
            slug: "/photo-resize-for-admit-card-mark-sheet",
            desc: "How to resize your passport photo to under 100KB for admit cards and mark sheet uploads.",
            date: "Feb 2026",
            readTime: "4 min read",
            category: "Guide",
        },
        {
            title: "How to Crop Signature from Full Page Scan",
            slug: "/crop-signature-from-full-page-scan",
            desc: "Scanned a full A4 page? Learn how to crop just the signature part cleanly for uploading.",
            date: "Feb 2026",
            readTime: "3 min read",
            category: "Tutorial",
        },
        {
            title: "SBI PO/Clerk 2026 Photo & Signature Guide",
            slug: "/sbi-po-clerk-photo-signature-resize-guide-2026",
            desc: "Official specifications for SBI PO and Clerk exams. Photo, signature, and left thumb impression resizing.",
            date: "Feb 2026",
            readTime: "4 min read",
            category: "Exam Specific",
        },
        {
            title: "Why Exam Portal Keeps Rejecting Your Photo (10 Reasons)",
            slug: "/why-exam-portal-rejecting-photo-10-reasons",
            desc: "From file size to background color—here are 10 reasons why your upload failed and how to fix them.",
            date: "Feb 2026",
            readTime: "6 min read",
            category: "Troubleshooting",
        },
        {
            title: "NTA Exam Photo & Signature Guidelines (NEET, JEE)",
            slug: "/nta-exam-photo-signature-guidelines-2026",
            desc: "Comprehensive guide for NEET, JEE Main, and CUET photo requirements. Includes postcard photo rules.",
            date: "Feb 2026",
            readTime: "5 min read",
            category: "Exam Specific",
        },
        {
            title: "Get White Background for Signature Using Phone",
            slug: "/signature-photo-white-background-phone",
            desc: "How to remove grey background and shadows from your signature photo using simple phone editing.",
            date: "Feb 2026",
            readTime: "3 min read",
            category: "Tutorial",
        },
        {
            title: "PAN Card Photo & Signature Resize (200 DPI)",
            slug: "/pan-card-photo-signature-resize",
            desc: "Resize for NSDL and UTIITSL portals. Sets exact 200 DPI resolution required for PAN applications.",
            date: "Feb 2026",
            readTime: "3 min read",
            category: "Document",
        },
        {
            title: "Is It Safe to Resize Signature Online?",
            slug: "/is-it-safe-to-resize-signature-online",
            desc: "Privacy and security explained. How we handle your data with auto-deletion and encryption.",
            date: "Feb 2026",
            readTime: "2 min read",
            category: "Security",
        },
        {
            title: "Image DPI vs KB vs Pixels: What Matters?",
            slug: "/image-dpi-vs-kb-vs-pixels-exam-portals",
            desc: "Technical explainer on image properties. Why you usually don't need to worry about DPI for exams.",
            date: "Feb 2026",
            readTime: "4 min read",
            category: "Technical",
        },
    ];

    return (
        <>
            <SEOHead
                title="Signature & Photo Resize Blog - Guides & Tips 2026"
                description="Expert guides on resizing photos and signatures for government exams like SSC, IBPS, NEET, JEE, and GATE. Tutorials, troubleshooting, and exam-specific rules."
                canonicalUrl="https://signatureresize.in/blog"
            />

            <div className="min-h-screen bg-background text-foreground">
                <Header />

                {/* Hero */}
                <section className="bg-muted/30 py-12 md:py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="mb-4 text-3xl font-bold md:text-5xl">Signature Resize <span className="text-primary">Blog</span></h1>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Expert guides, tutorials, and technical explainers to help you resize documents for any online application form.
                        </p>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={[{ name: "Blog" }]} />

                        <AdContainer type="infeed" className="my-8" />

                        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post, i) => (
                                <article key={i} className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
                                    <div className="p-6 flex flex-col h-full">
                                        <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
                                            <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">{post.category}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                                                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                                            </div>
                                        </div>

                                        <h2 className="mb-3 text-xl font-bold leading-tight group-hover:text-primary">
                                            <Link to={post.slug} className="outline-none focus:underline">
                                                {post.title}
                                                <span className="absolute inset-0" aria-hidden="true" />
                                            </Link>
                                        </h2>

                                        <p className="mb-6 flex-1 text-muted-foreground">
                                            {post.desc}
                                        </p>

                                        <div className="mt-auto flex items-center text-sm font-medium text-primary">
                                            Read Article <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <AdSenseDisclaimer />
                <Footer />
            </div>
        </>
    );
};

export default BlogPage;

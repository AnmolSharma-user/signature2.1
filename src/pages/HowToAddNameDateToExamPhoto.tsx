import { Link } from "react-router-dom";
import { CheckCircle, XCircle, AlertTriangle, FileImage, Type, Download, Info } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOSchema from "@/components/SEOSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const HowToAddNameDateToExamPhoto = () => {
    const faqs = [
        {
            question: "Which exams require name and date on passport photo?",
            answer: "Several major Indian government exams require name and date on the photo, including SSC CGL, SSC CHSL, SSC GD, UPSC CSE Mains, and many state PSC exams. The exact requirement varies by cycle — always check your specific exam's official notification for this rule.",
        },
        {
            question: "How do I add name and date to photo without any app?",
            answer: "Use the free 'Add Name & Date to Photo' tool at signatureresize.in/add-name-date-to-photo. It runs completely in your browser — no download, no install, no signup. Upload your photo, type your name and date, and download the ready-to-upload image in the correct format and size.",
        },
        {
            question: "Can I write my name on the photo by hand?",
            answer: "Technically yes, but it's strongly discouraged. Handwritten text below the photo looks unprofessional, may be illegible, and the photo may get rejected if the ink smears or the text is not clearly within the photo frame. Always use a digital tool to add text cleanly.",
        },
        {
            question: "What format should the date be in when printed on the photo?",
            answer: "Use DD/MM/YYYY format — for example, '28/03/2026'. This is the standard Indian date format accepted on most exam portals. Some SSC notifications specifically require the date in this format. Write the actual date the photograph was taken, not the application date.",
        },
        {
            question: "Does adding name and date increase the photo file size beyond the limit?",
            answer: "Our free tool handles this automatically — it adds the name and date text and then compresses the output to fit within your exam's file size limit (e.g., 20–50 KB for SSC). You won't exceed the limit as long as you download from our tool.",
        },
        {
            question: "Where exactly should the name and date appear on the photo?",
            answer: "The name and date must appear below the face area, typically in a white strip at the bottom of the image. The text should be inside the photo boundary, not on a sticker or paper beneath it. Our tool places text exactly as required.",
        },
    ];

    const examsRequiringNameDate = [
        { exam: "SSC CGL", required: true, notes: "Name + date below photo. Check current cycle notification." },
        { exam: "SSC CHSL", required: true, notes: "Standard SSC rule applies: name and photo date required." },
        { exam: "SSC GD Constable", required: true, notes: "Photo with name and date is explicitly specified in past notifications." },
        { exam: "UPSC CSE Mains", required: true, notes: "Required for Mains application — name and date on photo." },
        { exam: "IBPS PO/Clerk", required: false, notes: "IBPS does not require this. Standard passport photo without text." },
        { exam: "RRB NTPC", required: false, notes: "Some cycles require it — verify in specific notification." },
        { exam: "SBI PO/Clerk", required: false, notes: "SBI does not require name/date on photo. Standard passport photo." },
        { exam: "NEET, JEE (NTA)", required: false, notes: "NTA follows its own postcard photo guidelines — no name/date rule." },
    ];

    return (
        <>
            <SEOHead
                title="How to Add Name & Date to Passport Photo for SSC/UPSC Exams (Free)"
                description="Step-by-step guide on how to add your name and date to your exam passport photo for SSC CGL, CHSL, UPSC. Use the free online tool — no app needed, correct format guaranteed."
                canonicalUrl="https://signatureresize.in/how-to-add-name-date-to-exam-photo-free"
                keywords="how to add name date to passport photo SSC, write name on exam photo, add date to photo for SSC CGL, UPSC photo with name and date, exam photo name date free online"
                ogImage="https://signatureresize.in/assest/how-to-add-name-date-exam-photo.png"
            />
            <SEOSchema
                type="Article"
                data={{
                    headline: "How to Add Name & Date to Passport Photo for Exam Applications",
                    description: "Step-by-step guide on adding name and date to passport photo for SSC CGL, CHSL, and UPSC exams using a free online tool.",
                    url: "https://signatureresize.in/how-to-add-name-date-to-exam-photo-free",
                }}
            />

            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden bg-gradient-to-br from-violet-600/10 via-accent to-background py-10 sm:py-16">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs
                            items={[
                                { name: "Blog", href: "/blog" },
                                { name: "Add Name & Date to Exam Photo" },
                            ]}
                        />
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-violet-600/10 px-4 py-2 text-sm font-medium text-violet-600">
                                TUTORIAL · PHOTO PREPARATION
                            </span>
                            <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                                How to Add Name & Date to{" "}
                                <span className="text-primary underline decoration-primary decoration-wavy underline-offset-4">
                                    Exam Passport Photo
                                </span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg leading-relaxed">
                                SSC CGL, CHSL, and UPSC require your name and photo date printed below the face.
                                Here's how to do it correctly — for free, in under 2 minutes.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5"><Type className="h-4 w-4 text-primary" /> No App Needed</span>
                                <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-500" /> 100% Free Tool</span>
                                <span className="flex items-center gap-1.5"><FileImage className="h-4 w-4 text-primary" /> Correct Format & Size</span>
                            </div>
                        </div>
                    </div>
                </section>

                <article className="py-10 md:py-14">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">

                            {/* Table of Contents */}
                            <div className="mb-10 rounded-xl border border-border bg-card shadow-sm overflow-hidden">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="toc" className="border-b-0">
                                        <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors">
                                            <h2 className="text-lg font-bold text-foreground flex items-center gap-2 m-0">
                                                <Info className="h-5 w-5 text-primary" /> Table of Contents
                                            </h2>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-6 pb-6 pt-2">
                                            <ul className="space-y-3 text-sm text-muted-foreground">
                                                {[
                                                    { href: "#why", label: "Why Do Exams Require Name & Date on Photo?" },
                                                    { href: "#which-exams", label: "Which Exams Require This Rule?" },
                                                    { href: "#how-to", label: "Step-by-Step: How to Add Name & Date (Free Tool)" },
                                                    { href: "#rules", label: "Exact Rules for Text Placement & Format" },
                                                    { href: "#mistakes", label: "Common Mistakes That Lead to Rejection" },
                                                    { href: "#tools", label: "Related Free Tools" },
                                                ].map((item, i) => (
                                                    <li key={i}>
                                                        <a href={item.href} className="hover:text-primary hover:underline flex items-center gap-2">
                                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">{i + 1}</span>
                                                            {item.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            {/* Featured Image */}
                            <figure className="mb-10">
                                <img
                                    src="/assest/how-to-add-name-date-exam-photo.png"
                                    alt="How to add name and date to passport photo for SSC CGL CHSL UPSC exams — free online tool guide"
                                    className="w-full rounded-xl border border-border shadow-md"
                                    width="1200"
                                    height="630"
                                    loading="eager"
                                    decoding="async"
                                />
                                <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                                    Add your name &amp; date to exam passport photo — free, no app needed.
                                </figcaption>
                            </figure>

                            {/* EEAT Intro */}
                            <section className="mb-10 prose prose-neutral dark:prose-invert max-w-none">
                                <p className="text-lg text-foreground leading-relaxed font-medium">
                                    "Upload your photograph with your name and date written below it." — this one line
                                    in an SSC notification causes more confusion than almost any other requirement. What does
                                    "written below" mean? Does it go inside the photo or outside? What date? What font size?
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    We've seen thousands of candidates submit photos with names written on a Post-it note stuck below
                                    the printed photo (wrong), or candidates who skip the requirement because they think it's optional
                                    (also wrong — this is a disqualifying error in SSC cycles). At SignatureResize.in, we built a
                                    dedicated tool specifically for this — and in this guide, we explain not just the <em>how</em>
                                    but the <em>why</em> behind this requirement.
                                </p>
                            </section>

                            <AdContainer type="display" className="mb-8" />

                            {/* Why */}
                            <section id="why" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Why Do SSC & UPSC Require Name & Date on Photo?
                                </h2>
                                <p className="mb-4 text-muted-foreground leading-relaxed">
                                    The name-and-date requirement exists for two purposes:
                                </p>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-xl border border-border bg-card p-5">
                                        <h3 className="font-bold text-foreground mb-2">🔍 Identity Verification</h3>
                                        <p className="text-sm text-muted-foreground">
                                            When thousands of admit cards are printed and distributed, a name below the photo ensures that
                                            even if photos look similar (which happens more than you'd think), the printed identification
                                            is unique to each candidate.
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-border bg-card p-5">
                                        <h3 className="font-bold text-foreground mb-2">📅 Photo Recency Verification</h3>
                                        <p className="text-sm text-muted-foreground">
                                            The date requirement prevents candidates from using passport photos taken years ago.
                                            SSC requires that your photo not be older than 3 months. The date on the photo is the physical
                                            proof of when it was taken.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <AdContainer type="infeed" className="my-8" />

                            {/* Which Exams */}
                            <section id="which-exams" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Which Exams Require Name & Date on Photo?
                                </h2>
                                <div className="overflow-x-auto rounded-xl border border-border">
                                    <table className="w-full text-sm">
                                        <thead className="bg-muted/50">
                                            <tr>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Exam</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Required?</th>
                                                <th className="px-4 py-3 text-left font-semibold text-foreground">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {examsRequiringNameDate.map((row, i) => (
                                                <tr key={i} className="border-t border-border">
                                                    <td className="px-4 py-3 text-foreground font-semibold">{row.exam}</td>
                                                    <td className="px-4 py-3">
                                                        {row.required ? (
                                                            <span className="flex items-center gap-1 text-green-600 font-medium">
                                                                <CheckCircle className="h-4 w-4" /> Yes
                                                            </span>
                                                        ) : (
                                                            <span className="flex items-center gap-1 text-muted-foreground">
                                                                <XCircle className="h-4 w-4" /> No
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-3 text-muted-foreground text-xs">{row.notes}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-3 text-xs text-muted-foreground">
                                    Always verify against your specific exam's official notification — requirements can change between cycles.
                                </p>
                            </section>

                            {/* How To */}
                            <section id="how-to" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Step-by-Step: How to Add Name & Date to Your Exam Photo (Free)
                                </h2>
                                <div className="mb-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
                                    <p className="text-foreground font-semibold text-sm">
                                        Use our free tool at{" "}
                                        <Link to="/add-name-date-to-photo" className="text-primary hover:underline font-bold">
                                            signatureresize.in/add-name-date-to-photo
                                        </Link>
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-1">No login, no signup, no watermark. Works on any device.</p>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {[
                                        { step: "1", title: "Upload Your Passport Photo", desc: "Click the upload button and select your passport-style JPG photo. Ensure it has a white background before adding text." },
                                        { step: "2", title: "Enter Your Full Name", desc: "Type your full name as it appears on your application form. Use the same spelling — the portal may cross-check it." },
                                        { step: "3", title: "Enter the Photo Date", desc: "Type the date the photo was taken in DD/MM/YYYY format (e.g., 15/03/2026). This is the date of the photo, not today's date." },
                                        { step: "4", title: "Preview the Result", desc: "The tool shows you a live preview. The name and date appear in a clean white strip below your face, inside the photo frame." },
                                        { step: "5", title: "Set Target File Size", desc: "Choose your target size (e.g., 20–50 KB for SSC). The tool compresses the output to fit this limit." },
                                        { step: "6", title: "Download & Upload", desc: "Download the final JPG and upload it directly to your exam portal. The file is formatted correctly for government portals." },
                                    ].map((item) => (
                                        <div key={item.step} className="rounded-xl border border-border bg-card p-5">
                                            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-violet-600/10 text-sm font-bold text-violet-600">
                                                {item.step}
                                            </div>
                                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                                            <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Rules */}
                            <section id="rules" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Exact Rules for Name & Date Placement
                                </h2>
                                <div className="space-y-4">
                                    <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                                        <h3 className="font-bold text-foreground flex items-center gap-2 mb-3">
                                            <CheckCircle className="h-5 w-5 text-green-500" /> Correct Format
                                        </h3>
                                        <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                            <li>Text must be <strong className="text-foreground">inside the photo file</strong> — not on paper beneath a printed photo</li>
                                            <li>Name and date appear in a <strong className="text-foreground">white strip below the face area</strong></li>
                                            <li>Use simple, legible font — no decorative or stylized text</li>
                                            <li>Date in <strong className="text-foreground">DD/MM/YYYY format</strong> (e.g., 28/03/2026)</li>
                                            <li>Full name matching the application form exactly</li>
                                            <li>Text must not overlap the face or obscure any facial features</li>
                                        </ul>
                                    </div>
                                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                                        <h3 className="font-bold text-foreground flex items-center gap-2 mb-3">
                                            <XCircle className="h-5 w-5 text-red-500" /> Incorrect / Rejected Approaches
                                        </h3>
                                        <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                            <li>Writing name on a piece of paper BELOW the printed photo</li>
                                            <li>Using a sticker or Post-it note</li>
                                            <li>Stamping the back of the photo (this is for hard-copy submissions, not online uploads)</li>
                                            <li>Using stylized calligraphy or decorative fonts</li>
                                            <li>Overlapping text over the face</li>
                                            <li>Writing the application date instead of the photo-taken date</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <AdContainer type="inarticle" className="my-8" />

                            {/* Mistakes */}
                            <section id="mistakes" className="mb-12">
                                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">
                                    Common Mistakes That Lead to Rejection
                                </h2>
                                <div className="space-y-3">
                                    {[
                                        { title: "Writing the Application Date Instead of Photo Date", desc: "The 'date' refers to when the photo was physically taken — not when you're filling the form. These can be days or weeks apart." },
                                        { title: "Using Tomorrow's Date to Show Photo is Recent", desc: "Never use a future date. Portal reviewers specifically look for future dates as an attempt to fake photo recency." },
                                        { title: "Adding Text on Top of the Face", desc: "Text must go in the strip at the bottom, clearly below the chin. If any text touches the face area, the photo will be rejected." },
                                        { title: "Photo Size Exceeding Limit After Adding Text", desc: "Adding text increases file size slightly. Our tool handles this automatically, but if you use MS Paint, always recheck the KB." },
                                        { title: "Skipping This Step Entirely", desc: "Many candidates assume this requirement is optional or forget it while rushing. SSC reviewers catch this and the application is rejected during scrutiny — often after the exam." },
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 rounded-xl border border-border bg-card p-4">
                                            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
                                            <div>
                                                <p className="font-semibold text-foreground">{item.title}</p>
                                                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Deep dive */}
                            <section className="mb-10 rounded-xl border border-border bg-muted/20 p-6">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Why Our Tool Is Better Than MS Paint for This Job</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Many tutorials suggest using MS Paint to add text to your photo. The problem: Paint doesn't
                                    automatically handle file size compression, and the text placement is imprecise — it's easy to
                                    accidentally overlap the face or leave text partially outside the photo boundary.
                                </p>
                                <p className="mt-4 text-muted-foreground leading-relaxed">
                                    Our free tool at{" "}
                                    <Link to="/add-name-date-to-photo" className="text-primary hover:underline">
                                        signatureresize.in/add-name-date-to-photo
                                    </Link>{" "}
                                    automatically adds a precisely sized white strip below the photo image area,
                                    places the text in the correct font size and position, and compresses the result
                                    to your target KB range — all in one operation. It runs entirely in your browser;
                                    your photo is never uploaded to our servers.
                                </p>
                            </section>

                            {/* CTA Tools */}
                            <section id="tools" className="mb-12 rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Related Free Tools</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <Link to="/add-name-date-to-photo" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <Type className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Add Name & Date to Photo Tool</p>
                                            <p className="text-xs text-muted-foreground">Free, instant, no signup required</p>
                                        </div>
                                    </Link>
                                    <Link to="/compress-image-to-20kb-online" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <FileImage className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Compress Photo to Exact KB</p>
                                            <p className="text-xs text-muted-foreground">Hit 20KB, 50KB, or custom target</p>
                                        </div>
                                    </Link>
                                    <Link to="/exam-photo-checker" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Exam Photo Checker</p>
                                            <p className="text-xs text-muted-foreground">Check if your photo specs are correct</p>
                                        </div>
                                    </Link>
                                    <Link to="/passport-photo-maker" className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                                        <Download className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground text-sm">Passport Photo Maker</p>
                                            <p className="text-xs text-muted-foreground">Create correct size photo from selfie</p>
                                        </div>
                                    </Link>
                                </div>
                            </section>

                            {/* Related */}
                            <section className="mb-10">
                                <h2 className="mb-4 text-xl font-bold text-foreground">Related Exam Guides</h2>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        { title: "SSC CGL 2026 Photo & Signature Upload Guide", href: "/ssc-cgl-photo-signature-upload-guide-2026" },
                                        { title: "SSC CHSL 2026 Photo & Signature Guide", href: "/ssc-chsl-photo-signature-guide-2026" },
                                        { title: "Why Exam Portal Keeps Rejecting Your Photo", href: "/why-exam-portal-rejecting-photo-10-reasons" },
                                        { title: "How to Compress Photo to 20KB Without Apps (Mobile)", href: "/mobile-photo-compress-20kb-no-app" },
                                        { title: "Passport Photo at Home — Free Guide", href: "/how-to-take-passport-photo-at-home-for-exams" },
                                        { title: "Passport Photo Size — All Indian Exams 2026", href: "/passport-photo-size-guide-all-indian-exams-2026" },
                                    ].map((link) => (
                                        <Link
                                            key={link.href}
                                            to={link.href}
                                            className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 text-sm hover:border-primary/50 hover:text-primary transition-colors"
                                        >
                                            <span className="text-primary">→</span> {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* Author */}
                            <section className="mb-8 rounded-xl border border-border bg-muted/30 p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">SR</div>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">SignatureResize.in Editorial Team</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Last reviewed: March 2026 · Based on SSC CGL, CHSL, and UPSC official notification guidelines</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                                            This guide is written by the team behind SignatureResize.in — a tool used by 50,000+ Indian exam aspirants.
                                            The name-and-date requirement information is based on official SSC and UPSC notification guidelines
                                            collected across multiple recruitment cycles. Always verify the current cycle's specific requirements
                                            in your exam's official notification.
                                        </p>
                                    </div>
                                </div>
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

export default HowToAddNameDateToExamPhoto;

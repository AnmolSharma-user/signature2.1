import { Users, Target, Heart, Award, CheckCircle, Shield, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const AboutUs = () => {
  return (
    <>
      <SEOHead
        title="About Us | SignatureResize.in - Free Signature Tool"
        description="SignatureResize.in - India's trusted free signature resize tool. Helping 50,000+ students with government exam applications."
        canonicalUrl="https://signatureresize.in/about-us"
        keywords="about signatureresize, signature tool india"
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                About SignatureResize.in
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                We are a team of developers and designers passionate about making government exam
                applications easier for millions of Indian students.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 grid gap-8 md:grid-cols-2">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Our Story</span>
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                    Born from Personal Experience
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      SignatureResize.in started in 2023 when our founder, a GATE aspirant himself,
                      faced the frustrating challenge of resizing his signature to meet exam requirements.
                      After spending hours trying different tools and failing multiple times, he decided
                      to build something better.
                    </p>
                    <p>
                      What began as a simple personal project has grown into India's most trusted
                      signature resize tool, helping over 50,000 students and professionals prepare
                      their documents for government exams and applications.
                    </p>
                    <p>
                      We understand the pressure of exam applications. Missing a deadline because your
                      signature file is 2KB over the limit is not just annoying—it can delay your
                      career by an entire year. That's why we built a tool that works every single time.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border bg-card p-6 text-center">
                      <span className="text-3xl font-bold text-primary">50K+</span>
                      <p className="mt-2 text-sm text-muted-foreground">Happy Users</p>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-6 text-center">
                      <span className="text-3xl font-bold text-primary">100K+</span>
                      <p className="mt-2 text-sm text-muted-foreground">Images Resized</p>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-6 text-center">
                      <span className="text-3xl font-bold text-primary">4.8/5</span>
                      <p className="mt-2 text-sm text-muted-foreground">User Rating</p>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-6 text-center">
                      <span className="text-3xl font-bold text-primary">Free</span>
                      <p className="mt-2 text-sm text-muted-foreground">Forever</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="border-y border-border bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Our Mission</span>
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                  Making Exam Applications Stress-Free
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Our mission is simple: ensure no student misses an exam deadline because of
                  technical document requirements. We believe technology should simplify your life,
                  not complicate it.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Speed & Efficiency</h3>
                  <p className="text-sm text-muted-foreground">
                    We value your time. Our tool delivers results in seconds, not minutes.
                    Quick processing means you can focus on what matters—your exam preparation.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Privacy First</h3>
                  <p className="text-sm text-muted-foreground">
                    Your signature is personal. We process everything in your browser—your images
                    never leave your device. No uploads, no storage, complete privacy.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Free Forever</h3>
                  <p className="text-sm text-muted-foreground">
                    Education tools should be accessible to everyone. We committed to keeping
                    our core features free forever—no hidden fees, no premium tiers for basic needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Our Expertise</span>
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                  Technical Excellence You Can Trust
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 rounded-xl border border-border bg-card p-6">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Advanced Image Processing</h3>
                    <p className="text-muted-foreground">
                      Our proprietary binary search algorithm adjusts image quality to achieve exact
                      file sizes. Unlike basic compressors, we maintain image clarity while hitting
                      precise KB targets required by exam portals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-xl border border-border bg-card p-6">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Exam-Specific Optimization</h3>
                    <p className="text-muted-foreground">
                      We've studied requirements for every major Indian exam—GATE, SSC, UPSC, NTPC,
                      and more. Our exam-specific tools are pre-configured with correct dimensions
                      and size limits, eliminating guesswork.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-xl border border-border bg-card p-6">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Browser-Based Security</h3>
                    <p className="text-muted-foreground">
                      All processing happens locally using modern JavaScript APIs. We don't run
                      servers that handle your images—everything stays on your computer. This
                      architecture ensures both speed and privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="border-t border-border bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Our Team</span>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                Built by Students, for Students
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Our team comprises engineers, designers, and former exam aspirants who understand
                the challenges you face. We've been in your shoes—filling out applications at midnight,
                panicking over file size errors, and counting down to deadlines. That experience drives
                everything we build.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Based in India, we're committed to supporting the millions of students who appear for
                government exams each year. Your success is our success.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 mb-8">
          <AdContainer type="display" />
        </div>

        <AdSenseDisclaimer />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
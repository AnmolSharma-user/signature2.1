import { useState } from "react";
import { Megaphone, Users, Target, Send, Handshake, BarChart3, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const AdvertiseWithUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    brandName: "",
    contactName: "",
    email: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Proposal Sent!",
        description: "Thank you for your interest. Our partnership team will contact you within 24 hours.",
      });
      setFormData({ brandName: "", contactName: "", email: "", budget: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <SEOHead
        title="Advertise With Us | SignatureResize.in"
        description="Reach out to 50,000+ government exam aspirants monthly. Advertise your coaching institute, mock test app, or exam books with us."
        canonicalUrl="https://signatureresize.in/advertise"
        keywords="advertise exam portal, sponsor signature tool"
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3 text-primary">
                <Megaphone className="h-6 w-6" />
              </div>
              <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Reach Over 50,000 Exam Aspirants
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Partner with SignatureResize.in to get your coaching institute, study materials, or test series in front of a highly targeted, high-intent audience.
              </p>
            </div>
          </div>
        </section>

        {/* Audience Metrics Section */}
        <section className="py-12 border-b border-border bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center p-6 text-center rounded-xl bg-card border border-border shadow-sm">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">50K+</h3>
                  <p className="text-sm text-muted-foreground">Monthly Active Users</p>
                </div>
                <div className="flex flex-col items-center p-6 text-center rounded-xl bg-card border border-border shadow-sm">
                  <Target className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">100%</h3>
                  <p className="text-sm text-muted-foreground">Intent-Driven (Exam Applicants)</p>
                </div>
                <div className="flex flex-col items-center p-6 text-center rounded-xl bg-card border border-border shadow-sm">
                  <BarChart3 className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">Top 3</h3>
                  <p className="text-sm text-muted-foreground">Search ranking for major exam tools</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-10 md:grid-cols-2">
                
                {/* Information */}
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-foreground">Why Advertise With Us?</h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p>
                      SignatureResize.in is specifically built for Indian students actively filling out government exam application forms (SSC, UPSC, RRB, GATE, State PSCs).
                    </p>
                    <p>
                      When a user is on our site, they are in the crucial final step of their application journey. This presents a prime opportunity for **Mock Test Providers**, **Book Publishers**, and **Coaching Institutes** to offer resources exactly when they start their exam prep.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-foreground mt-8 mb-4 flex items-center gap-2">
                      <Handshake className="h-5 w-5 text-primary" /> Placement Options
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                        <span><strong>Homepage Hero Banner</strong> - High visibility placement right below our main sizing tool.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                        <span><strong>Tool Pages Integration</strong> - Contextual ad placement (e.g., advertise SSC books on the SSC Signature Resize page).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                        <span><strong>Blog Sponsorships</strong> - Featured mentions inside our highly-ranked ultimate exam guides.</span>
                      </li>
                    </ul>

                    <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
                      <h3 className="mb-4 font-semibold text-foreground flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" /> Prefer direct contact?
                      </h3>
                      <a href="mailto:signatureresize.in@gmail.com" className="font-medium text-primary hover:underline pb-1 border-b border-primary/30">
                        signatureresize.in@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Proposal Form */}
                <div>
                  <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm">
                    <h2 className="mb-6 text-xl font-bold text-foreground">Send a Proposal</h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="brandName" className="mb-2 block text-sm font-medium text-foreground">
                          Brand / Institute Name *
                        </label>
                        <Input
                          id="brandName"
                          name="brandName"
                          value={formData.brandName}
                          onChange={handleChange}
                          placeholder="E.g., XYZ Classes"
                          required
                        />
                      </div>
                      
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="contactName" className="mb-2 block text-sm font-medium text-foreground">
                            Contact Person *
                          </label>
                          <Input
                            id="contactName"
                            name="contactName"
                            value={formData.contactName}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                            Work Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">
                          Expected Budget (Optional)
                        </label>
                        <Input
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          placeholder="E.g., ₹10,000 / month"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                          Campaign Goals & Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us what you want to promote and what kind of placements you are interested in..."
                          rows={4}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          "Sending Proposal..."
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Submit Request
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AdvertiseWithUs;

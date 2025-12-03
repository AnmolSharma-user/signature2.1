import { useState } from "react";
import { Mail, MessageSquare, Clock, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <SEOHead
        title="Contact Us | SignatureResize.in Support"
        description="Contact SignatureResize.in for support, feedback or inquiries. We respond within 24 hours. Get help with signature resize issues."
        canonicalUrl="https://signatureresize.in/contact"
        keywords="contact signatureresize, signature tool support"
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Have a question, suggestion, or need help? We're here to assist you. 
                Drop us a message and we'll respond as quickly as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 md:grid-cols-5">
                {/* Contact Info */}
                <div className="md:col-span-2">
                  <h2 className="mb-6 text-xl font-bold text-foreground">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email Us</h3>
                        <a href="mailto:signatureresize.in@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">signatureresize.in@gmail.com</a>
                        <p className="text-xs text-muted-foreground mt-1">For general inquiries and support</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Response Time</h3>
                        <p className="text-sm text-muted-foreground">Within 24 hours</p>
                        <p className="text-xs text-muted-foreground mt-1">Monday to Saturday</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Location</h3>
                        <p className="text-sm text-muted-foreground">India</p>
                        <p className="text-xs text-muted-foreground mt-1">Serving users nationwide</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Help */}
                  <div className="mt-8 rounded-xl border border-border bg-muted/30 p-6">
                    <h3 className="mb-4 font-semibold text-foreground">Common Questions</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <MessageSquare className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <span>How to resize signature for GATE exam?</span>
                      </li>
                      <li className="flex gap-2">
                        <MessageSquare className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <span>Why is my signature getting rejected?</span>
                      </li>
                      <li className="flex gap-2">
                        <MessageSquare className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <span>Is my data safe with your tool?</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-xs text-muted-foreground">
                      Check our FAQ section on the homepage for instant answers!
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="md:col-span-3">
                  <div className="rounded-xl border border-border bg-card p-6 md:p-8">
                    <h2 className="mb-6 text-xl font-bold text-foreground">Send us a Message</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                            Your Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is this about?"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please describe your question or feedback in detail..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
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

        <AdSenseDisclaimer />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
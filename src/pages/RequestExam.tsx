import { useState } from "react";
import { ClipboardList, Send, FileWarning, Search, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import AdSenseDisclaimer from "@/components/AdSenseDisclaimer";
import AdContainer from "@/components/AdContainer";

const RequestExam = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    examName: "",
    notificationLink: "",
    requirements: "",
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
        title: "Request Received!",
        description: "Thank you! We have logged your request and will add this exam soon.",
      });
      setFormData({ name: "", email: "", examName: "", notificationLink: "", requirements: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <SEOHead
        title="Request an Exam | SignatureResize.in"
        description="Cannot find your specific government exam on our site? Request it here and we will immediately add the specific photo and signature requirements."
        canonicalUrl="https://signatureresize.in/request-exam"
        keywords="request exam signature resize, missing exam resize tool"
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3 text-primary">
                <Search className="h-6 w-6" />
              </div>
              <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Request a Missing Exam
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                If the exam you are applying for is not listed on our site, let us know! 
                We constantly add new portals to help aspirants smoothly upload their documents.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 md:grid-cols-5">
                {/* Guidelines */}
                <div className="md:col-span-2">
                  <h2 className="mb-6 text-xl font-bold text-foreground">How it Works</h2>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <ClipboardList className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Submit Notification Details</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Provide the exam name and (if possible) a link to the official notification document.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <FileWarning className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">We Analyze the Reqs</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Our team reads the technical specifications (KB limits, pixels, format).
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <HelpCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Tool is Configured</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Within 24-48 hours, we integrate the new compression presets into our platform.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fallback Email Contact */}
                  <div className="mt-8 rounded-xl border border-border bg-muted/30 p-6">
                    <h3 className="mb-4 font-semibold text-foreground">Urgent Request?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      If your application deadline is approaching rapidly, email us directly and we will prioritize it.
                    </p>
                    <a href="mailto:signatureresize.in@gmail.com" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                      signatureresize.in@gmail.com
                    </a>
                  </div>
                </div>

                {/* Form */}
                <div className="md:col-span-3">
                  <div className="rounded-xl border border-border bg-card p-6 md:p-8">
                    <h2 className="mb-6 text-xl font-bold text-foreground">Exam Details</h2>

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
                            Email Address (Optional)
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="To notify you when it's live"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="examName" className="mb-2 block text-sm font-medium text-foreground">
                          Name of the Exam / Board *
                        </label>
                        <Input
                          id="examName"
                          name="examName"
                          value={formData.examName}
                          onChange={handleChange}
                          placeholder="e.g. DSSSB TGT 2026, APPSC Group 2"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="notificationLink" className="mb-2 block text-sm font-medium text-foreground">
                          Official Notification Link (Optional)
                        </label>
                        <Input
                          id="notificationLink"
                          name="notificationLink"
                          type="url"
                          value={formData.notificationLink}
                          onChange={handleChange}
                          placeholder="https://..."
                        />
                      </div>

                      <div>
                        <label htmlFor="requirements" className="mb-2 block text-sm font-medium text-foreground">
                          Known Requirements (Optional)
                        </label>
                        <Textarea
                          id="requirements"
                          name="requirements"
                          value={formData.requirements}
                          onChange={handleChange}
                          placeholder="What rules do you know? E.g., Signature must be 10KB to 20KB with a white background in JPG format."
                          rows={4}
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          "Submitting..."
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

        <div className="container mx-auto px-4 mb-8">
          <AdContainer type="display" />
        </div>

        <AdSenseDisclaimer />
        <Footer />
      </div>
    </>
  );
};

export default RequestExam;

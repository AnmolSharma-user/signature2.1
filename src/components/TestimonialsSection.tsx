import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "GATE 2024 Aspirant",
      rating: 5,
      text: "This tool saved me hours of frustration! Resized my signature perfectly for GATE application in just seconds. Highly recommended!",
      avatar: "RS",
    },
    {
      name: "Priya Patel",
      role: "SSC CGL Candidate",
      rating: 5,
      text: "Best signature resize tool I've found. The SSC-specific option made it so easy to get the exact size needed. Thank you!",
      avatar: "PP",
    },
    {
      name: "Amit Kumar",
      role: "RRB NTPC Applicant",
      rating: 5,
      text: "Simple, fast, and accurate. My signature was resized to exactly 15KB as required. The step-by-step process is very user-friendly.",
      avatar: "AK",
    },
    {
      name: "Sneha Reddy",
      role: "Bank PO Aspirant",
      rating: 4,
      text: "Great free tool! Used it for my IBPS PO application. The preview feature helped me see the result before downloading.",
      avatar: "SR",
    },
    {
      name: "Vikash Singh",
      role: "UPSC Candidate",
      rating: 5,
      text: "Privacy is important to me, and I love that this tool processes everything locally. No uploading to servers!",
      avatar: "VS",
    },
    {
      name: "Anjali Gupta",
      role: "UTI PAN Applicant",
      rating: 5,
      text: "Resized my signature and photo for PAN card application. Works perfectly on mobile too. Very convenient!",
      avatar: "AG",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-background to-accent/30 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            TESTIMONIALS
          </span>
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Trusted by 50,000+ Students
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            See what our users say about SignatureResize.in
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-xl"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/10 transition-colors group-hover:text-primary/20" />
              
              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="mb-4 text-muted-foreground">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-border pt-10">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.8/5</span>
            <span className="text-muted-foreground">Average Rating</span>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <span className="font-semibold text-foreground">50,000+</span>
            <span className="ml-1 text-muted-foreground">Happy Users</span>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <span className="font-semibold text-foreground">100,000+</span>
            <span className="ml-1 text-muted-foreground">Signatures Resized</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search, FileImage, Pen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import AdContainer from "@/components/AdContainer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const popularTools = [
    { href: "/signature-resize", label: "Signature Resize", icon: Pen },
    { href: "/gate-signature-resize", label: "GATE Signature", icon: FileImage },
    { href: "/ssc-mts-signature-resize", label: "SSC Signature", icon: Pen },
    { href: "/bulk-resize", label: "Bulk Resize", icon: FileImage },
  ];

  return (
    <>
      <SEOHead
        title="Page Not Found - SignatureResize.in"
        description="The page you're looking for doesn't exist. Find our signature resize tools for GATE, SSC, UPSC exams."
        canonicalUrl="https://signatureresize.in/404"
      />

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-1 flex items-center justify-center py-12 px-4">
          <div className="max-w-2xl w-full text-center">
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="relative inline-block">
                <span className="text-[120px] sm:text-[180px] font-bold text-primary/10 leading-none">
                  404
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Search className="h-16 w-16 sm:h-24 sm:w-24 text-primary/50" />
                </div>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
              Don't worry, you can find our signature resize tools below.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg">
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Go to Homepage
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/signature-resize">
                  <Pen className="mr-2 h-5 w-5" />
                  Resize Signature
                </Link>
              </Button>
            </div>

            <div className="mb-12 max-w-md mx-auto">
              <AdContainer type="display" />
            </div>

            {/* Popular Tools */}
            <div className="border-t border-border pt-8">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Popular Tools
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {popularTools.map((tool) => (
                  <Link
                    key={tool.href}
                    to={tool.href}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border bg-card hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    <tool.icon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-foreground">{tool.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;

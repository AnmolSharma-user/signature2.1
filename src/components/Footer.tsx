import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

const Footer = () => {
  const toolLinks = [
    { href: "/signature-resize", label: "Signature Resize" },
    { href: "/signature-resize-10-to-20-kb", label: "Resize 10-20 KB" },
    { href: "/gate-signature-resize", label: "GATE Signature" },
    { href: "/ssc-mts-signature-resize", label: "SSC MTS Signature" },
    { href: "/ntpc-signature-resize", label: "NTPC Signature" },
    { href: "/gate-photo-resize", label: "GATE Photo Resize" },
    { href: "/uti-pan-resize", label: "UTI PAN Resize" },
    { href: "/50kb-signature-size", label: "50KB Signature" },
    { href: "/gds-photo-signature-resize", label: "GDS Photo & Signature" },
    { href: "/neet-photo-signature-resize", label: "NEET Photo & Signature" },
    { href: "/ibps-photo-signature-resize", label: "IBPS Photo & Signature" },
    { href: "/thumb-impression-resize", label: "Thumb Impression" },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2">
            <Link to="/" className="flex items-center gap-2 group">
              <AnimatedLogo size="md" />
              <span className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">SignatureResize</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Free online signature and photo resize tool for government exams.
              Resize your signature to exact KB size for GATE, SSC, NTPC, UTI PAN,
              and other competitive exams.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:signatureresize.in@gmail.com" className="hover:text-primary transition-colors">
                signatureresize.in@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Popular Tools</h3>
            <ul className="space-y-2">
              {toolLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">More Tools</h3>
            <ul className="space-y-2">
              {toolLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/how-to-scan-signature-for-online-forms" className="text-sm text-muted-foreground transition-colors hover:text-primary">How to Scan Signature</Link></li>
              <li><Link to="/exam-photo-signature-requirements-2026" className="text-sm text-muted-foreground transition-colors hover:text-primary">Exam Requirements 2026</Link></li>
              <li><Link to="/signature-upload-errors-and-fixes" className="text-sm text-muted-foreground transition-colors hover:text-primary">Upload Error Fixes</Link></li>
              <li><Link to="/upsc-triple-signature-guide" className="text-sm text-muted-foreground transition-colors hover:text-primary">UPSC Triple Signature</Link></li>
              <li><Link to="/how-to-take-passport-photo-at-home-for-exams" className="text-sm text-muted-foreground transition-colors hover:text-primary">Passport Photo at Home</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-sm text-muted-foreground transition-colors hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-sm text-muted-foreground transition-colors hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm text-muted-foreground transition-colors hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-sm text-muted-foreground transition-colors hover:text-primary">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SignatureResize.in. All rights reserved.
            Free signature resize tool for Indian government exams.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms</Link>
            <Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            <a href="mailto:signatureresize.in@gmail.com" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

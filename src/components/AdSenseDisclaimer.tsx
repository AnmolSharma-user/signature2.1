import { Shield, Award, Users } from "lucide-react";

const AdSenseDisclaimer = () => {
  return (
    <section className="border-t border-border bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* E-A-T Signals */}
          <div className="mb-6 grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg bg-card p-4">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Expert Tool</p>
                <p className="text-xs text-muted-foreground">Built by developers with expertise in image processing</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-card p-4">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Authoritative</p>
                <p className="text-xs text-muted-foreground">Trusted by 50,000+ students across India</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-card p-4">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Trustworthy</p>
                <p className="text-xs text-muted-foreground">100% privacy, no data stored on servers</p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="rounded-lg border border-border bg-card p-4 text-xs text-muted-foreground">
            <p className="mb-2">
              <strong className="text-foreground">Disclaimer:</strong> SignatureResize.in is an independent tool and is not affiliated with or endorsed by GATE, SSC, NTPC, UPSC, or any government examination authority. The signature and photo requirements mentioned are based on publicly available guidelines and may change. Always verify the latest requirements from official exam websites before submitting your application.
            </p>
            <p>
              <strong className="text-foreground">Privacy Notice:</strong> All image processing happens locally in your browser. We do not upload, store, or transmit your signature or photo images to any server. Your privacy is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdSenseDisclaimer;

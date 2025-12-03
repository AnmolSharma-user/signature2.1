import { Zap, Shield, FileCheck, Image, Settings, Download } from "lucide-react";

interface FeatureGridProps {
  examName?: string;
}

const FeatureGrid = ({ examName = "SSC" }: FeatureGridProps) => {
  const features = [
    {
      icon: Zap,
      title: "Instant Resizing",
      description: "Resize your signature and photo in seconds",
      cta: "Start Resizing Now →",
    },
    {
      icon: FileCheck,
      title: `${examName} Standard Compliance`,
      description: `Get exact ${examName} format & dimensions`,
      cta: "Start Resizing Now →",
    },
    {
      icon: Image,
      title: "Supports Multiple Formats",
      description: "JPG, PNG, and JPEG supported",
      cta: "Start Resizing Now →",
    },
    {
      icon: Shield,
      title: "Privacy Guaranteed",
      description: "No data stored, all processing in browser",
      cta: "Start Resizing Now →",
    },
    {
      icon: Settings,
      title: "Free & Easy to Use",
      description: "No software needed, works online",
      cta: "Start Resizing Now →",
    },
    {
      icon: Download,
      title: "High-Quality Output",
      description: "Get a clear and sharp signature and photo without losing quality",
      cta: "Start Resizing Now →",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group rounded-xl border-2 border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-xl"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <feature.icon className="h-7 w-7" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
          <p className="mb-4 text-sm text-muted-foreground">{feature.description}</p>
          <span className="text-sm font-medium text-primary">{feature.cta}</span>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;

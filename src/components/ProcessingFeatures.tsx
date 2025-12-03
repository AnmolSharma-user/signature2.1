import { Shield, Zap, Monitor, Smartphone, Lock, CloudOff } from "lucide-react";

const ProcessingFeatures = () => {
  const features = [
    {
      icon: Lock,
      title: "Data Security",
      description: "Your data is never stored - Your images are processed securely.",
    },
    {
      icon: CloudOff,
      title: "No data stored",
      description: "Files processed in your browser - No data on our servers.",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Instant processing with AI optimization.",
    },
    {
      icon: Monitor,
      title: "Works Everywhere",
      description: "Compatible with all devices - Use it on mobile or desktop.",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-8 text-primary-foreground">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-foreground/10" />
      <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary-foreground/5" />
      
      <div className="relative z-10">
        <h3 className="mb-2 text-center text-2xl font-bold">Processing</h3>
        <p className="mb-8 text-center text-sm opacity-90">
          Complete Security and Privacy Respected
        </p>
        
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg bg-primary-foreground/10 p-4 backdrop-blur-sm transition-transform hover:scale-[1.02]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20">
                <feature.icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="text-sm opacity-80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessingFeatures;

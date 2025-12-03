import { Star, Users, Download, Award } from "lucide-react";

const TrustBadges = () => {
  const stats = [
    { icon: Users, value: "50K+", label: "Happy Users" },
    { icon: Download, value: "100K+", label: "Downloads" },
    { icon: Star, value: "4.8/5", label: "User Rating" },
    { icon: Award, value: "Free", label: "Forever Free" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center rounded-xl border border-border bg-card p-4 text-center transition-all hover:border-primary hover:shadow-lg"
        >
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <stat.icon className="h-6 w-6 text-primary" />
          </div>
          <span className="text-2xl font-bold text-foreground">{stat.value}</span>
          <span className="text-sm text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;

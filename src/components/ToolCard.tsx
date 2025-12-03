import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ToolCardProps {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
}

const ToolCard = ({ href, title, description, icon: Icon, badge }: ToolCardProps) => {
  return (
    <Link to={href}>
      <Card className="group relative h-full overflow-hidden border-2 border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:shadow-xl">
        {badge && (
          <span className="absolute right-3 top-3 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
            {badge}
          </span>
        )}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center text-sm font-medium text-primary">
          <span>Use Tool</span>
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  );
};

export default ToolCard;

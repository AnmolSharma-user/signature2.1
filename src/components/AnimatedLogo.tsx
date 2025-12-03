import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const AnimatedLogo = ({ size = "md", className }: AnimatedLogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  return (
    <div className={cn("relative group", className)}>
      {/* Glow effect */}
      <div 
        className={cn(
          "absolute inset-0 rounded-lg bg-primary/30 blur-md transition-all duration-500 group-hover:bg-primary/50 group-hover:blur-lg group-hover:scale-125",
          sizeClasses[size]
        )} 
      />
      
      {/* Logo container with animations */}
      <div className={cn(
        "relative overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
        sizeClasses[size]
      )}>
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
        
        <img 
          src="/logo.png" 
          alt="SignatureResize Logo" 
          className={cn(
            "object-contain transition-all duration-300",
            sizeClasses[size]
          )}
        />
      </div>
      
      {/* Floating particles on hover */}
      <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
      <div className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rounded-full bg-primary/70 opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-150" />
    </div>
  );
};

export default AnimatedLogo;

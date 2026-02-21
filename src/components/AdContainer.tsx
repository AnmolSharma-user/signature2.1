import { useEffect } from "react";

interface AdContainerProps {
  slot: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  className?: string;
}

const AdContainer = ({ slot, format = "auto", className = "" }: AdContainerProps) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, [slot]);

  const formatStyles: Record<string, string> = {
    auto: "min-h-[100px]",
    horizontal: "min-h-[90px] max-h-[90px]",
    vertical: "min-h-[600px] w-full max-w-[160px]",
    rectangle: "min-h-[250px] w-full max-w-[300px]",
  };

  return (
    <div
      className={`ad-container-wrapper my-6 overflow-hidden transition-all duration-300 ${className}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-medium">Advertisement</span>
        <div className="h-[1px] flex-1 bg-border/40 ml-4"></div>
      </div>

      <div
        className={`ad-content-area bg-muted/5 rounded-xl border border-border/30 flex items-center justify-center relative overflow-hidden ${formatStyles[format]}`}
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%" }}
          data-ad-client="ca-pub-3488894749741987"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />

        {/* Fallback/Loading state styling */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-primary/5 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default AdContainer;
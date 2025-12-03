interface AdContainerProps {
  slot: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  className?: string;
}

const AdContainer = ({ slot, format = "auto", className = "" }: AdContainerProps) => {
  // This component provides a placeholder for AdSense ads
  // Replace the placeholder with actual AdSense code after approval
  
  const formatStyles: Record<string, string> = {
    auto: "min-h-[100px]",
    horizontal: "min-h-[90px] max-h-[90px]",
    vertical: "min-h-[600px] w-[160px]",
    rectangle: "min-h-[250px] w-[300px]",
  };

  return (
    <div 
      className={`ad-container bg-muted/20 border border-dashed border-border rounded-lg flex items-center justify-center ${formatStyles[format]} ${className}`}
      data-ad-slot={slot}
      data-ad-format={format}
    >
      {/* AdSense code will go here after approval */}
      {/* 
      <ins className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true">
      </ins>
      */}
      <span className="text-xs text-muted-foreground">Advertisement</span>
    </div>
  );
};

export default AdContainer;
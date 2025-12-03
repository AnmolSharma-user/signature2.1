import { FileImage, Pen, Download, Check } from "lucide-react";

const FloatingElements = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Floating icons */}
      <div className="absolute left-[10%] top-[20%] animate-bounce opacity-20" style={{ animationDuration: "3s" }}>
        <FileImage className="h-8 w-8 text-primary" />
      </div>
      <div className="absolute right-[15%] top-[30%] animate-bounce opacity-20" style={{ animationDuration: "4s", animationDelay: "1s" }}>
        <Pen className="h-6 w-6 text-primary" />
      </div>
      <div className="absolute left-[20%] bottom-[20%] animate-bounce opacity-20" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}>
        <Download className="h-7 w-7 text-primary" />
      </div>
      <div className="absolute right-[10%] bottom-[30%] animate-bounce opacity-20" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }}>
        <Check className="h-8 w-8 text-primary" />
      </div>
      
      {/* Floating dots */}
      <div className="absolute left-[5%] top-[40%] h-2 w-2 animate-pulse rounded-full bg-primary/30" />
      <div className="absolute right-[8%] top-[50%] h-3 w-3 animate-pulse rounded-full bg-primary/20" style={{ animationDelay: "1s" }} />
      <div className="absolute left-[30%] bottom-[10%] h-2 w-2 animate-pulse rounded-full bg-primary/25" style={{ animationDelay: "2s" }} />
      <div className="absolute right-[25%] top-[15%] h-2 w-2 animate-pulse rounded-full bg-primary/30" style={{ animationDelay: "0.5s" }} />
    </div>
  );
};

export default FloatingElements;

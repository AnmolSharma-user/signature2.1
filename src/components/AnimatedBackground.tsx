import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 20;
      const yPercent = (clientY / innerHeight - 0.5) * 20;

      container.style.setProperty("--mouse-x", `${xPercent}px`);
      container.style.setProperty("--mouse-y", `${yPercent}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient orbs */}
      <div
        className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl transition-transform duration-700"
        style={{ transform: "translate(var(--mouse-x, 0), var(--mouse-y, 0))" }}
      />
      <div
        className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-accent/30 blur-3xl transition-transform duration-1000"
        style={{ transform: "translate(calc(var(--mouse-x, 0) * -1), calc(var(--mouse-y, 0) * -1))" }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
      />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;

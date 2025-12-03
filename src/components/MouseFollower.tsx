import { useEffect, useState } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor glow */}
      <div
        className="pointer-events-none fixed z-50 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-sm transition-transform duration-75 md:block"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      {/* Trailing glow */}
      <div
        className="pointer-events-none fixed z-40 hidden h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl transition-all duration-300 md:block"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
};

export default MouseFollower;

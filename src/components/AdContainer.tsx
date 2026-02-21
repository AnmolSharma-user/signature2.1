import { useEffect, useRef, useState } from "react";

export type AdType = "display" | "infeed" | "inarticle" | "multiplex";

interface AdContainerProps {
  type?: AdType;
  className?: string;
}

const AD_CONFIG: Record<AdType, {
  slot: string;
  style: React.CSSProperties;
  extra?: Record<string, string>;
}> = {
  display: {
    slot: "5029933266",
    style: { display: "block" },
    extra: { "data-ad-format": "auto", "data-full-width-responsive": "true" },
  },
  infeed: {
    slot: "1900014100",
    style: { display: "block" },
    extra: {
      "data-ad-format": "fluid",
      "data-ad-layout-key": "-fb+5w+4e-db+86",
    },
  },
  inarticle: {
    slot: "8273850765",
    style: { display: "block", textAlign: "center" },
    extra: {
      "data-ad-layout": "in-article",
      "data-ad-format": "fluid",
    },
  },
  multiplex: {
    slot: "5931263034",
    style: { display: "block" },
    extra: { "data-ad-format": "autorelaxed" },
  },
};

const AdContainer = ({ type = "display", className = "" }: AdContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const pushed = useRef(false);

  // Lazy-load: only push ad when container scrolls into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible && !pushed.current) {
      pushed.current = true;
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        // AdSense not available (dev/localhost)
      }
    }
  }, [visible]);

  const config = AD_CONFIG[type];

  return (
    <div ref={containerRef} className={`ad-unit my-6 w-full overflow-hidden ${className}`}>
      {/* Label */}
      <div className="flex items-center gap-3 mb-1.5">
        <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/50 select-none">
          Advertisement
        </span>
        <div className="h-px flex-1 bg-border/30" />
      </div>

      {/* Ad slot */}
      {visible && (
        <ins
          className="adsbygoogle"
          style={config.style}
          data-ad-client="ca-pub-3488894749741987"
          data-ad-slot={config.slot}
          {...config.extra}
        />
      )}
    </div>
  );
};

export default AdContainer;
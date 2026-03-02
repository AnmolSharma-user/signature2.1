import { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";

/**
 * BackToTopButton
 * ─────────────────────────────────────────────────────────────────────────────
 * - Appears when user scrolls > 300 px (hidden otherwise — zero layout impact)
 * - Shows a thin circular SVG progress ring showing scroll-depth of the page
 * - Smooth scroll back to top on click
 * - Positioned bottom-right, small (44×44 px touch target), above ad units
 * - aria-label for accessibility; no SEO impact (not indexable interactive)
 */
const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const updateState = useCallback(() => {
        const scrollY = window.scrollY;
        const docHeight =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setVisible(scrollY > 300);
        setProgress(docHeight > 0 ? Math.min((scrollY / docHeight) * 100, 100) : 0);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", updateState, { passive: true });
        updateState();
        return () => window.removeEventListener("scroll", updateState);
    }, [updateState]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // SVG circle math
    const size = 44;
    const strokeWidth = 3;
    const radius = (size - strokeWidth) / 2;      // 20.5
    const circumference = 2 * Math.PI * radius;   // ~128.8
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={[
                "fixed bottom-5 right-4 z-50 flex items-center justify-center",
                "rounded-full shadow-lg shadow-primary/20",
                "bg-background/90 backdrop-blur-sm ring-1 ring-border",
                "transition-all duration-300 hover:scale-110 active:scale-95",
                visible
                    ? "translate-y-0 opacity-100 pointer-events-auto"
                    : "translate-y-12 opacity-0 pointer-events-none",
            ].join(" ")}
            style={{ width: size, height: size }}
        >
            {/* Circular progress ring */}
            <svg
                width={size}
                height={size}
                className="absolute inset-0 -rotate-90"
                aria-hidden="true"
            >
                {/* Track */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    className="text-border"
                />
                {/* Progress */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="text-primary transition-[stroke-dashoffset] duration-150"
                />
            </svg>

            {/* Arrow icon centred inside ring */}
            <ArrowUp className="relative z-10 h-4 w-4 text-primary" strokeWidth={2.5} />
        </button>
    );
};

export default BackToTopButton;

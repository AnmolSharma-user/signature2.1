import { useState, useEffect, useCallback } from "react";
import { X, Smartphone, Download, Star, Zap, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

// Global deferred prompt — captured once, used by any component
let globalDeferredPrompt: BeforeInstallPromptEvent | null = null;

// Listen for beforeinstallprompt globally
if (typeof window !== "undefined") {
    window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        globalDeferredPrompt = e as BeforeInstallPromptEvent;
    });
}

interface PWADownloadPromptProps {
    isOpen: boolean;
    onClose: () => void;
}

const PWADownloadPrompt = ({ isOpen, onClose }: PWADownloadPromptProps) => {
    const [isIOS, setIsIOS] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        setIsIOS(ios);
        setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
    }, []);

    useEffect(() => {
        if (isOpen) {
            // Small delay for entrance animation
            requestAnimationFrame(() => setAnimateIn(true));
            // Prevent body scroll
            document.body.style.overflow = "hidden";
        } else {
            setAnimateIn(false);
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleInstall = useCallback(async () => {
        if (globalDeferredPrompt) {
            globalDeferredPrompt.prompt();
            const { outcome } = await globalDeferredPrompt.userChoice;
            if (outcome === "accepted") {
                localStorage.setItem("pwa-installed", "true");
            }
            globalDeferredPrompt = null;
        }
        onClose();
    }, [onClose]);

    const handleDismiss = useCallback(() => {
        onClose();
    }, [onClose]);

    // Don't show if already installed as PWA
    if (!isOpen || isStandalone) return null;

    // Check if we can trigger native install prompt
    const canInstallNative = !!globalDeferredPrompt && !isIOS;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-end sm:items-center justify-center transition-all duration-300 ${animateIn ? "bg-black/50 backdrop-blur-sm" : "bg-black/0"
                }`}
            onClick={(e) => {
                if (e.target === e.currentTarget) handleDismiss();
            }}
        >
            <div
                className={`relative w-full max-w-md mx-4 mb-0 sm:mb-0 overflow-hidden rounded-t-2xl sm:rounded-2xl border border-border bg-card shadow-2xl transition-all duration-500 ${animateIn ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-95 opacity-0"
                    }`}
            >
                {/* Top gradient bar */}
                <div className="h-1.5 bg-gradient-to-r from-blue-500 via-primary to-purple-500" />

                {/* Close button */}
                <button
                    onClick={handleDismiss}
                    className="absolute right-3 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors z-10"
                    aria-label="Close"
                >
                    <X className="h-5 w-5" />
                </button>

                <div className="p-5 sm:p-6">
                    {/* Success checkmark */}
                    <div className="text-center mb-4">
                        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground">
                            Signature Downloaded! 🎉
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Need to resize again for another exam?
                        </p>
                    </div>

                    {/* Install CTA */}
                    <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/10 p-4">
                        <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                                <Smartphone className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground text-sm">
                                    Install SignatureResize App
                                </h4>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    {isIOS
                                        ? "Add to Home Screen for instant access anytime!"
                                        : "One tap install — no Play Store needed!"}
                                </p>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="mt-3 grid grid-cols-3 gap-2">
                            {[
                                { icon: Zap, text: "Instant Access" },
                                { icon: Shield, text: "Works Offline" },
                                { icon: Star, text: "App-like Feel" },
                            ].map((benefit, i) => (
                                <div key={i} className="flex flex-col items-center gap-1 rounded-lg bg-card/60 py-2 px-1 text-center">
                                    <benefit.icon className="h-4 w-4 text-primary" />
                                    <span className="text-[10px] font-medium text-muted-foreground">{benefit.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-4 flex gap-3">
                        {canInstallNative ? (
                            <>
                                <Button onClick={handleInstall} className="flex-1 gap-2 h-11">
                                    <Download className="h-4 w-4" />
                                    Install App
                                </Button>
                                <Button variant="ghost" onClick={handleDismiss} className="text-muted-foreground">
                                    Later
                                </Button>
                            </>
                        ) : isIOS ? (
                            <>
                                <Button onClick={handleDismiss} className="flex-1 gap-2 h-11">
                                    <ArrowRight className="h-4 w-4" />
                                    Got it!
                                </Button>
                            </>
                        ) : (
                            <Button variant="outline" onClick={handleDismiss} className="flex-1 h-11">
                                Continue
                            </Button>
                        )}
                    </div>

                    {/* Trust line */}
                    <p className="mt-3 text-center text-[10px] text-muted-foreground">
                        Trusted by 50,000+ students across India
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PWADownloadPrompt;

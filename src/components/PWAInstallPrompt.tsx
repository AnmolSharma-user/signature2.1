import { useState, useEffect } from "react";
import { X, Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed or dismissed
    const dismissed = localStorage.getItem("pwa-prompt-dismissed");
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
    
    if (dismissed || isStandalone) return;

    // Check for iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // For iOS, show prompt after a delay
    if (isIOSDevice) {
      const timer = setTimeout(() => setShowPrompt(true), 3000);
      return () => clearTimeout(timer);
    }

    // For Android/Chrome, listen for beforeinstallprompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setShowPrompt(true), 3000);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === "accepted") {
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-prompt-dismissed", "true");
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-in-up">
      <div className="mx-auto max-w-lg p-4">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Gradient accent */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary" />
          
          <button
            onClick={handleDismiss}
            className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            aria-label="Dismiss"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-4 sm:p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 animate-pulse">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              
              <div className="flex-1 pr-6">
                <h3 className="font-semibold text-foreground">
                  Install SignatureResize App
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {isIOS 
                    ? "Tap the share button and select 'Add to Home Screen' for quick access!"
                    : "Install our app for faster access and offline support. No app store needed!"}
                </p>
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              {!isIOS && deferredPrompt && (
                <Button onClick={handleInstall} className="flex-1 gap-2">
                  <Download className="h-4 w-4" />
                  Install Now
                </Button>
              )}
              {isIOS && (
                <Button variant="secondary" className="flex-1" onClick={handleDismiss}>
                  Got it!
                </Button>
              )}
              {!isIOS && (
                <Button variant="outline" onClick={handleDismiss}>
                  Not Now
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;

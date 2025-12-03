import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Replace GA_MEASUREMENT_ID with your actual Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: location.pathname,
    });

    return () => {
      // Cleanup if needed
    };
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollRestoration — scrolls to the top of the page on every route change.
 * Zero visual output; purely behavioural. SEO-safe (no markup emitted).
 */
const ScrollRestoration = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Instant scroll — avoids fight with browser's own scroll restoration
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [pathname]);

    return null;
};

export default ScrollRestoration;

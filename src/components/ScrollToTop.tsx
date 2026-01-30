import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, key } = useLocation();

  // Disable browser's automatic scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  useLayoutEffect(() => {
    // Force scroll to top
    const forceScrollToTop = () => {
      const html = document.documentElement;
      const originalBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";

      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      html.style.scrollBehavior = originalBehavior;
    };

    // Scroll immediately
    forceScrollToTop();

    // Also scroll after React finishes render
    requestAnimationFrame(() => {
      forceScrollToTop();
      requestAnimationFrame(forceScrollToTop);
    });
  }, [pathname, key]);

  return null;
}

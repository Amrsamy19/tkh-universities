import { useState, useEffect } from "react";

export type ScreenSize = "mobile" | "tablet" | "desktop";

/**
 * A hook to check the current screen size based on standard Tailwind breakpoints.
 * Best practice: Use this hook ONLY when you need to conditionally render different React nodes or pass specific JS props (like the `size` prop to a Button).
 * For purely visual styling changes (padding, margins, colors), prefer using Tailwind CSS responsive classes (e.g., `md:gap-4 lg:gap-8`) instead.
 */
export const useScreenSize = (): ScreenSize => {
  // Initialize state with a default value. If using SSR (like Next.js), you might default to "desktop" or "mobile" to avoid hydration mismatch.
  const [screenSize, setScreenSize] = useState<ScreenSize>("desktop");

  useEffect(() => {
    // We only run this on the client side
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Tailwind 'md' breakpoint
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        // Tailwind 'lg' breakpoint
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    // Check on initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

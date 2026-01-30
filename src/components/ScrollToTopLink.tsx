import { Link as RouterLink, LinkProps } from "react-router-dom";
import { forwardRef, MouseEvent } from "react";

const ScrollToTopLink = forwardRef<HTMLAnchorElement, LinkProps>(
    ({ onClick, ...props }, ref) => {
        const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
            // Scroll to top when clicking a link
            const html = document.documentElement;
            html.style.scrollBehavior = "auto";

            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;

            // Restore smooth scroll after a short delay
            setTimeout(() => {
                html.style.scrollBehavior = "";
            }, 100);

            // Call original onClick if provided
            if (onClick) {
                onClick(e);
            }
        };

        return <RouterLink ref={ref} onClick={handleClick} {...props} />;
    },
);

ScrollToTopLink.displayName = "ScrollToTopLink";

export { ScrollToTopLink };

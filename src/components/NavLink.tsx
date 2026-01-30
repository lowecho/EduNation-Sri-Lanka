import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, onClick, ...props }, ref) => {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      // Scroll to top when clicking a nav link
      // Disable smooth scroll temporarily
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

    return (
      <RouterNavLink
        ref={ref}
        to={to}
        onClick={handleClick}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };

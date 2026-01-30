import { Outlet } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import LanguageToggle from "@/components/LanguageToggle";
import { useI18n } from "@/lib/i18n";
import ThemeToggle from "@/components/ThemeToggle";
import BrandMark from "@/components/BrandMark";
import { Heart, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react";

const nav = [
  { to: "/", key: "nav.home" },
  { to: "/donate-books", key: "nav.donateBooks" },
  { to: "/donate-money", key: "nav.donateMoney" },
  { to: "/updates", key: "nav.updates" },
  { to: "/volunteer", key: "nav.volunteer" },
  { to: "/contact", key: "nav.contact" },
];

export default function AppLayout() {
  const { t } = useI18n();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Background decorations */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent-emerald/5 blur-3xl" />
      </div>

      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:border focus:border-border focus:bg-card focus:px-4 focus:py-2 focus:shadow-lg"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-18 items-center justify-between gap-4 py-4">
          <div className="flex min-w-0 items-center gap-4">
            <BrandMark label={t("app.name")} size="lg" />
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop navigation */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  className="relative rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
                  activeClassName="text-primary bg-primary/10"
                >
                  {t(n.key)}
                  {/* Animated underline */}
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent-cyan transition-all duration-300 group-hover:w-1/2" />
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="border-t border-border/40 lg:hidden">
          <div className="container overflow-x-auto py-3">
            <nav className="flex min-w-max items-center gap-2" aria-label="Primary">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  className="whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  activeClassName="text-primary bg-primary/10"
                >
                  {t(n.key)}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main id="main" className="container relative py-12">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border/50 bg-gradient-to-b from-background to-muted/30">
        {/* Decorative top border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container py-16">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Brand section */}
            <div className="space-y-6 lg:col-span-4">
              <BrandMark label={t("app.name")} size="sm" />
              <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
                {t("footer.tag")}
              </p>

              {/* Quick action buttons */}
              <div className="flex flex-wrap gap-2">
                {[
                  { to: "/donate-books", label: t("nav.donateBooks") },
                  { to: "/donate-money", label: t("nav.donateMoney") },
                  { to: "/volunteer", label: t("nav.volunteer") },
                  { to: "/contact", label: t("nav.contact") },
                ].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card hover:text-foreground hover:shadow-sm"
                  >
                    <Heart className="h-3 w-3 text-primary" />
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Links grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
              {/* Quick Links */}
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {t("footer.links")}
                </div>
                <div className="grid gap-3">
                  {[
                    { to: "/", label: t("nav.home") },
                    { to: "/updates", label: t("nav.updates") },
                    { to: "/how-it-works", label: "How it works" },
                    { to: "/impact", label: "Impact" },
                  ].map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Get Involved */}
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent-emerald">
                  Get Involved
                </div>
                <div className="grid gap-3">
                  {[
                    { to: "/donate-books", label: t("nav.donateBooks") },
                    { to: "/donate-money", label: t("nav.donateMoney") },
                    { to: "/volunteer", label: t("nav.volunteer") },
                  ].map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-accent-emerald focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan">
                  Contact
                </div>
                <div className="grid gap-3">
                  <NavLink
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-accent-cyan"
                  >
                    <MapPin className="h-4 w-4" />
                    Contact page
                  </NavLink>
                  <a
                    href="mailto:library.project@example.com"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-accent-cyan"
                  >
                    <Mail className="h-4 w-4" />
                    Email us
                  </a>
                  <a
                    href="https://wa.me/94XXXXXXXXX"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-accent-cyan"
                  >
                    <Phone className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Legal & Social */}
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent-purple">
                  Legal & Social
                </div>
                <div className="grid gap-3">
                  <NavLink
                    to="/privacy-policy"
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-accent-purple"
                  >
                    {t("footer.privacy")}
                  </NavLink>
                </div>

                {/* Social icons */}
                <div className="flex gap-3 pt-2">
                  {[
                    { icon: Instagram, label: "Instagram", href: "#" },
                    { icon: Twitter, label: "Twitter", href: "#" },
                    { icon: Linkedin, label: "LinkedIn", href: "#" },
                    { icon: Github, label: "GitHub", href: "#" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-card/50 text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary hover:shadow-sm"
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col gap-4 border-t border-border/50 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} EduNation Sri Lanka — Built for community impact
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-accent-coral animate-pulse" />
              <span>for education</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

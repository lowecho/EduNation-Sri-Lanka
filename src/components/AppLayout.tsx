import { Outlet } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import LanguageToggle from "@/components/LanguageToggle";
import { useI18n } from "@/lib/i18n";
import ThemeToggle from "@/components/ThemeToggle";
import BrandMark from "@/components/BrandMark";

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
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border focus:border-border focus:bg-card focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur">
        <div className="container flex h-16 items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <BrandMark label={t("app.name")} />
            </div>

          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  activeClassName="bg-accent text-accent-foreground shadow-soft"
                >
                  {t(n.key)}
                </NavLink>
              ))}
            </nav>
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>

        <div className="border-t border-border/60 lg:hidden">
          <div className="container overflow-x-auto py-2">
            <nav className="flex min-w-max items-center gap-1" aria-label="Primary">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  className="whitespace-nowrap rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  activeClassName="bg-accent text-accent-foreground shadow-soft"
                >
                  {t(n.key)}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main id="main" className="container py-10">
        <Outlet />
      </main>

      <footer className="border-t border-border/70 bg-background">
        <div className="container py-12">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="space-y-3 lg:col-span-4">
              <BrandMark label={t("app.name")} size="sm" />

              <p className="max-w-sm text-sm text-muted-foreground">{t("footer.tag")}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                <NavLink
                  to="/donate-books"
                  className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t("nav.donateBooks")}
                </NavLink>
                <NavLink
                  to="/donate-money"
                  className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t("nav.donateMoney")}
                </NavLink>
                <NavLink
                  to="/volunteer"
                  className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t("nav.volunteer")}
                </NavLink>
                <NavLink
                  to="/contact"
                  className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t("nav.contact")}
                </NavLink>
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {t("footer.links")}
                </div>
                <div className="grid gap-2 text-sm">
                  <NavLink
                    to="/"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {t("nav.home")}
                  </NavLink>
                  <NavLink
                    to="/updates"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {t("nav.updates")}
                  </NavLink>
                  <NavLink
                    to="/how-it-works"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    How it works
                  </NavLink>
                  <NavLink
                    to="/impact"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Impact
                  </NavLink>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Get involved</div>
                <div className="grid gap-2 text-sm">
                  <NavLink
                    to="/donate-books"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {t("nav.donateBooks")}
                  </NavLink>
                  <NavLink
                    to="/donate-money"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {t("nav.donateMoney")}
                  </NavLink>
                  <NavLink
                    to="/volunteer"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {t("nav.volunteer")}
                  </NavLink>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Contact</div>
                <div className="grid gap-2 text-sm">
                  <NavLink
                    to="/contact"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Contact page
                  </NavLink>
                  <a
                    href="mailto:library.project@example.com"
                    className="break-all text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    library.project@example.com
                  </a>
                  <a
                    href="https://wa.me/94XXXXXXXXX"
                    target="_blank"
                    rel="noreferrer"
                    className="break-all text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    WhatsApp: +94 XX XXX XXXX
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Legal & social</div>
                <div className="grid gap-2 text-sm">
                  <NavLink
                    to="/privacy-policy"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {t("footer.privacy")}
                  </NavLink>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-disabled="true"
                    onClick={(e) => e.preventDefault()}
                  >
                    Facebook (add link)
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-disabled="true"
                    onClick={(e) => e.preventDefault()}
                  >
                    Instagram (add link)
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-disabled="true"
                    onClick={(e) => e.preventDefault()}
                  >
                    LinkedIn (add link)
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} — Built for community impact.
            </p>
            <p className="text-xs text-muted-foreground">
              Made with a paper-and-ink design system • Light & Dark supported
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

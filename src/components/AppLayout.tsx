import { Outlet } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import LanguageToggle from "@/components/LanguageToggle";
import { useI18n } from "@/lib/i18n";
import ThemeToggle from "@/components/ThemeToggle";

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
          <div className="flex items-center gap-3">
            <NavLink
              to="/"
              className="group inline-flex items-center gap-3 rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span
                className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card shadow-soft"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-foreground/5" />
              </span>
              <span className="hidden font-semibold tracking-tight sm:inline">{t("app.name")}</span>
              <span className="font-semibold tracking-tight sm:hidden">BL</span>
            </NavLink>
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
        <div className="container py-10">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="space-y-2">
              <div className="text-sm font-medium">{t("app.name")}</div>
              <p className="text-sm text-muted-foreground">{t("footer.tag")}</p>
              <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} — Built for community impact.</p>
            </div>

            <div className="space-y-2 md:col-span-5">
              <div className="text-sm font-medium">{t("footer.links")}</div>
              <div className="grid gap-1 text-sm">
                <NavLink
                  to="/updates"
                  className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t("nav.updates")}
                </NavLink>
                <NavLink
                  to="/donate-money"
                  className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t("nav.donateMoney")}
                </NavLink>
                <NavLink
                  to="/privacy-policy"
                  className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t("footer.privacy")}
                </NavLink>
              </div>
            </div>

            <div className="space-y-2 md:col-span-4">
              <div className="text-sm font-medium">Social</div>
              <p className="text-sm text-muted-foreground">Facebook / Instagram / LinkedIn (placeholders)</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

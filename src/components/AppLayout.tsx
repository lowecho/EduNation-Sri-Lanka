import { Outlet } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import LanguageToggle from "@/components/LanguageToggle";
import { useI18n } from "@/lib/i18n";

const nav = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/donate-books", key: "nav.donateBooks" },
  { to: "/donate-funds", key: "nav.donateFunds" },
  { to: "/how-it-works", key: "nav.how" },
  { to: "/impact", key: "nav.impact" },
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

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="container flex h-14 items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <NavLink
              to="/"
              className="group inline-flex items-center gap-2 rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-brand shadow-brand" aria-hidden="true" />
              <span className="hidden font-semibold tracking-tight sm:inline">{t("app.name")}</span>
              <span className="font-semibold tracking-tight sm:hidden">Library</span>
            </NavLink>
          </div>

          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  activeClassName="bg-accent text-accent-foreground"
                >
                  {t(n.key)}
                </NavLink>
              ))}
            </nav>
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
                  className="whitespace-nowrap rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  activeClassName="bg-accent text-accent-foreground"
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
          <p className="text-sm text-muted-foreground">{t("footer.tag")}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Built for community impact.
          </p>
        </div>
      </footer>
    </div>
  );
}

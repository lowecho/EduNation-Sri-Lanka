import { Link } from "react-router-dom";
import { BookOpen, HandHeart, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroGlow from "@/components/HeroGlow";
import { useI18n } from "@/lib/i18n";
import CountUpStat from "@/components/CountUpStat";
import { getLatestUpdate } from "@/lib/updatesData";

const GOV_URL = "https://rebuildingsrilanka.gov.lk/";

export default function Home() {
  const { t } = useI18n();
  const latest = getLatestUpdate();

  return (
    <div className="space-y-10">
      <HeroGlow>
        <header className="px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-5">
              <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                {t("home.hero.title")}
              </h1>
              <p className="max-w-2xl text-muted-foreground md:text-lg">{t("home.hero.subtitle")}</p>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="hero" size="xl">
                  <Link to="/donate-books">
                    <BookOpen />
                    {t("home.cta.primary")}
                  </Link>
                </Button>
                <Button asChild variant="soft" size="xl">
                  <Link to="/volunteer">
                    <Users />
                    {t("home.cta.secondary")}
                  </Link>
                </Button>
                <Button asChild variant="outlineHero" size="xl">
                  <a href={GOV_URL} target="_blank" rel="noreferrer">
                    <HandHeart />
                    {t("home.cta.official")}
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="rounded-full border border-border bg-background/60 px-3 py-1">{t("home.trust.transparent")}</span>
                <span className="rounded-full border border-border bg-background/60 px-3 py-1">{t("home.trust.photos")}</span>
                <span className="rounded-full border border-border bg-background/60 px-3 py-1">{t("home.trust.community")}</span>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                {
                  title: t("home.how.step1"),
                  desc: "Primary/secondary textbooks, story books, and educational books in Sinhala, Tamil, or English.",
                },
                {
                  title: t("home.how.step2"),
                  desc: "We coordinate collection points and volunteers to sort and label the books.",
                },
                {
                  title: t("home.how.step3"),
                  desc: "We build the library and deliver it with photos and proof to keep it transparent.",
                },
              ].map((c) => (
                <div key={c.title} className="rounded-xl border border-border bg-background/60 p-4 shadow-soft">
                  <div className="font-medium">{c.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </header>
      </HeroGlow>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{t("home.how.title")}</h2>
            <p className="mt-2 text-sm text-muted-foreground">A simple, transparent flow—from your donation to students reading.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[t("home.how.step1"), t("home.how.step2"), t("home.how.step3")].map((step, idx) => (
            <div key={step} className="rounded-xl border border-border bg-background/60 p-4 motion-reduce:animate-none animate-fade-in">
              <div className="text-xs font-medium text-muted-foreground">Step {idx + 1}</div>
              <div className="mt-1 font-medium">{step}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <CountUpStat value={1200} label={t("home.stats.pledged")} />
        <CountUpStat value={640} label={t("home.stats.collected")} />
        <CountUpStat value={1} label={t("home.stats.schools")} />
        <CountUpStat value={48} label={t("home.stats.volunteers")} />
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-sm font-medium text-muted-foreground">{t("home.featured.title")}</div>
            <h2 className="mt-2 text-xl font-semibold">{latest.title}</h2>
            <p className="mt-2 text-muted-foreground">{latest.summary}</p>
            <p className="mt-3 text-xs text-muted-foreground">{latest.date}</p>
          </div>

          <Button asChild variant="outline" className="shrink-0">
            <Link to="/updates">
              {t("home.featured.cta")}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h2 className="text-xl font-semibold">{t("home.strip.title")}</h2>
          <Button asChild variant="hero" size="lg" className="shrink-0">
            <Link to="/donate-books">
              <BookOpen />
              {t("home.strip.cta")}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

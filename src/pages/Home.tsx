import { Link } from "react-router-dom";
import { BookOpen, HandHeart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroGlow from "@/components/HeroGlow";
import SectionHeading from "@/components/SectionHeading";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="space-y-10">
      <HeroGlow>
        <section className="px-6 py-10 md:px-10 md:py-14">
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
                    {t("cta.donateBooks")}
                  </Link>
                </Button>
                <Button asChild variant="outlineHero" size="xl">
                  <Link to="/donate-funds">
                    <HandHeart />
                    {t("cta.donateFunds")}
                  </Link>
                </Button>
                <Button asChild variant="soft" size="xl">
                  <Link to="/volunteer">
                    <Users />
                    {t("cta.volunteer")}
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="rounded-full border border-border bg-background/60 px-3 py-1">{t("trust.official")}</span>
                <span className="rounded-full border border-border bg-background/60 px-3 py-1">{t("trust.secure")}</span>
                <span className="rounded-full border border-border bg-background/60 px-3 py-1">Mobile-friendly</span>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                {
                  title: "Donate books",
                  desc: "Primary/secondary textbooks, story books, and reference books in Sinhala, Tamil, or English.",
                },
                {
                  title: "Donate funds (official)",
                  desc: "Use the Sri Lankan government portal for secure, transparent contributions.",
                },
                {
                  title: "Volunteer",
                  desc: "Help with collection, sorting, cataloguing, and transport support.",
                },
              ].map((c) => (
                <div key={c.title} className="rounded-xl border border-border bg-background/60 p-4 shadow-soft">
                  <div className="font-medium">{c.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </HeroGlow>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
          <div className="text-sm font-medium text-muted-foreground">Mission</div>
          <p className="mt-2">
            Build and support school libraries where learning resources are limited—so every student can read, explore, and dream.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
          <div className="text-sm font-medium text-muted-foreground">Who can help</div>
          <p className="mt-2">Students, parents, teachers, alumni associations, NGOs, companies, and donors worldwide.</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
          <div className="text-sm font-medium text-muted-foreground">Quick start</div>
          <p className="mt-2">Pick a donation type, follow the steps, and we’ll handle collection, sorting, and setup.</p>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <SectionHeading
          eyebrow="Next"
          title="See how your help becomes a library"
          description="A simple, transparent flow—from your donation to students reading." 
        />
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {["Donate books or funds", "Collection & sorting", "Library setup", "Students benefit"].map((step, idx) => (
            <div key={step} className="rounded-xl border border-border bg-background/60 p-4">
              <div className="text-xs font-medium text-muted-foreground">Step {idx + 1}</div>
              <div className="mt-1 font-medium">{step}</div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Button asChild variant="link" className="px-0">
            <Link to="/how-it-works">View the full process →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

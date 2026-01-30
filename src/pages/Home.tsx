import { ScrollToTopLink as Link } from "@/components/ScrollToTopLink";
import { BookOpen, HandHeart, Users, ArrowRight, Sparkles, Heart, Globe, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import CountUpStat from "@/components/CountUpStat";
import { getLatestUpdate } from "@/lib/updatesData";

// Import images
import heroImage from "@/assets/hero-children.png";
import booksImage from "@/assets/books-stack.png";
import volunteersImage from "@/assets/volunteers.png";
import schoolLibraryImage from "@/assets/school-library.png";

const GOV_URL = "https://rebuildingsrilanka.gov.lk/";

export default function Home() {
  const { t } = useI18n();
  const latest = getLatestUpdate();

  return (
    <div className="space-y-20">
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-background to-accent-emerald/5">
        {/* Background decorations */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 to-accent-cyan/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-accent-emerald/15 to-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-pattern-dots opacity-20" />

        <div className="relative grid gap-8 p-8 md:grid-cols-2 md:items-center md:gap-12 md:p-12 lg:p-16">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>A community-built library initiative</span>
            </div>

            {/* Main heading */}
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">{t("home.hero.title")}</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-pretty text-lg text-muted-foreground">
              {t("home.hero.subtitle")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl" className="shadow-lg shadow-primary/25">
                <Link to="/donatebooks">
                  <BookOpen className="h-5 w-5" />
                  {t("home.cta.primary")}
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/volunteer">
                  <Users className="h-5 w-5" />
                  {t("home.cta.secondary")}
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {[
                { icon: CheckCircle, text: t("home.trust.transparent") },
                { icon: Star, text: t("home.trust.photos") },
                { icon: Heart, text: t("home.trust.community") },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="h-4 w-4 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-accent-emerald/20 to-accent-cyan/20 blur-2xl opacity-60" />
            <img
              src={heroImage}
              alt="Children reading books in a library"
              className="relative rounded-2xl shadow-2xl ring-1 ring-white/10 object-cover w-full aspect-[4/3]"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-card border border-border/50 p-4 shadow-xl backdrop-blur-sm animate-float">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-gold to-accent-coral text-white">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">1200+</div>
                  <div className="text-sm text-muted-foreground">Books Pledged</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CountUpStat value={1200} label={t("home.stats.pledged")} />
        <CountUpStat value={640} label={t("home.stats.collected")} />
        <CountUpStat value={1} label={t("home.stats.schools")} />
        <CountUpStat value={48} label={t("home.stats.volunteers")} />
      </section>

      {/* Impact Section with Image */}
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1 animate-slide-in-left">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-emerald/20 to-primary/10 blur-2xl opacity-50" />
            <img
              src={schoolLibraryImage}
              alt="School library with children reading"
              className="relative rounded-2xl shadow-xl ring-1 ring-white/10 object-cover w-full aspect-[4/3]"
            />
          </div>
        </div>

        <div className="order-1 space-y-6 md:order-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-emerald/10 px-4 py-2 text-sm font-semibold text-accent-emerald">
            <Globe className="h-4 w-4" />
            Our Impact
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Building Libraries,<br />
            <span className="text-gradient">Opening Doors</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Many schools in Sri Lanka lack basic reading resources. A small library can transform a child's future, opening doors to knowledge, imagination, and opportunity.
          </p>
          <ul className="space-y-3">
            {[
              "Primary & secondary textbooks in Sinhala, Tamil, English",
              "Story books to spark imagination",
              "Educational reference materials",
              "Community-driven, transparent process",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-0.5 text-accent-emerald shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/about">
              Learn more about our mission
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* How it works section */}
      <section className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 shadow-lg md:p-12">
        <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="text-center mb-12">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-4">
              <Sparkles className="h-4 w-4" />
              Simple Process
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t("home.how.title")}</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent flow—from your donation to students reading.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: t("home.how.step1"),
                desc: "Primary/secondary textbooks, story books, and educational books in Sinhala, Tamil, or English.",
                icon: BookOpen,
                gradient: "from-primary to-accent-cyan",
              },
              {
                step: "02",
                title: t("home.how.step2"),
                desc: "We coordinate collection points and volunteers to sort and label the books carefully.",
                icon: Users,
                gradient: "from-accent-emerald to-accent-teal",
              },
              {
                step: "03",
                title: t("home.how.step3"),
                desc: "We build the library and deliver it with photos and proof to keep it transparent.",
                icon: Globe,
                gradient: "from-accent-purple to-accent-coral",
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/60 p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Step number */}
                <div className={`absolute -right-4 -top-4 text-8xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent opacity-10`}>
                  {item.step}
                </div>

                {/* Icon */}
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}>
                  <item.icon className="h-7 w-7" />
                </div>

                <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60 mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section with Image */}
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-purple/10 px-4 py-2 text-sm font-semibold text-accent-purple">
            <Users className="h-4 w-4" />
            Join Our Team
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Become a <span className="text-gradient">Volunteer</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join our community of passionate volunteers who are making a real difference. Whether you can help with sorting books, coordinating logistics, or setting up libraries—every contribution matters.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Event Support", "Book Sorting", "Logistics", "Photography"].map((role) => (
              <span
                key={role}
                className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
              >
                {role}
              </span>
            ))}
          </div>
          <Button asChild variant="hero" size="lg" className="mt-4">
            <Link to="/volunteer">
              <HandHeart className="h-5 w-5" />
              Volunteer Now
            </Link>
          </Button>
        </div>

        <div className="animate-slide-in-right">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-purple/20 to-accent-coral/10 blur-2xl opacity-50" />
            <img
              src={volunteersImage}
              alt="Volunteers organizing books"
              className="relative rounded-2xl shadow-xl ring-1 ring-white/10 object-cover w-full aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Donate Books Section with Image */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-gold/10 via-background to-accent-coral/10 border border-border/50">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="p-8 md:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-gold/10 px-4 py-2 text-sm font-semibold text-accent-gold">
              <BookOpen className="h-4 w-4" />
              Share Knowledge
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Your Books Can <span className="text-gradient">Change Lives</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Those old textbooks gathering dust on your shelf? They could spark curiosity in a child who's never held a storybook before.
            </p>
            <div className="space-y-3">
              {["Kids books & story books", "School textbooks", "Educational references", "Novels in any language"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-gold shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <Button asChild variant="hero" size="lg" className="mt-4">
              <Link to="/donatebooks">
                <BookOpen className="h-5 w-5" />
                Donate Books
              </Link>
            </Button>
          </div>

          <div className="relative h-full min-h-[300px] md:min-h-[400px]">
            <img
              src={booksImage}
              alt="Stack of beautiful books"
              className="absolute inset-0 h-full w-full object-cover md:rounded-r-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent md:hidden" />
          </div>
        </div>
      </section>

      {/* Latest Update Section */}
      <section className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 shadow-lg md:p-12">
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-accent-cyan/10 blur-3xl" />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-cyan/10 px-4 py-2 text-sm font-semibold text-accent-cyan">
              <Sparkles className="h-4 w-4" />
              {t("home.featured.title")}
            </div>
            <h2 className="text-2xl font-bold tracking-tight">{latest.title}</h2>
            <p className="max-w-lg text-muted-foreground">{latest.summary}</p>
            <p className="text-sm text-muted-foreground/70">{latest.date}</p>
          </div>

          <Button asChild variant="outline" size="lg" className="shrink-0 group">
            <Link to="/updates">
              {t("home.featured.cta")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-accent-emerald to-accent-cyan p-8 shadow-2xl md:p-16 text-center">
        <div className="pointer-events-none absolute inset-0 bg-pattern-dots opacity-10" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

        <div className="relative space-y-6">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            {t("home.strip.title")}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Every book opens a door to knowledge. Join thousands making a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90 shadow-lg">
              <Link to="/donatebooks">
                <BookOpen className="h-5 w-5" />
                {t("home.strip.cta")}
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
              <a href={GOV_URL} target="_blank" rel="noreferrer">
                <HandHeart className="h-5 w-5" />
                {t("home.cta.official")}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

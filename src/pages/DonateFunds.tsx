import { ExternalLink, ShieldCheck, Heart, Sparkles, CheckCircle, Wallet, Gift, Building } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

// Import image
import schoolLibraryImage from "@/assets/school-library.png";

const GOV_URL = "https://rebuildingsrilanka.gov.lk/";

export default function DonateFunds() {
  const { t } = useI18n();

  const supportItems = [
    { icon: "🚚", title: "Transport", desc: "Moving books from donors to schools" },
    { icon: "📚", title: "Shelving", desc: "Library furniture and book shelves" },
    { icon: "🏷️", title: "Cataloguing", desc: "Labels, stamps, and organization" },
    { icon: "🔧", title: "Maintenance", desc: "Long term upkeep and repairs" },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background to-accent-cyan/10">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="p-8 md:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Wallet className="h-4 w-4" />
              Support Our Mission
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              <span className="text-gradient">{t("donateMoney.title")}</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("donateMoney.description")}
            </p>

            <div className="flex flex-wrap gap-3">
              {["100% transparent", "Official receipt", "Tax deductible"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-full min-h-[300px] md:min-h-[400px]">
            <img
              src={schoolLibraryImage}
              alt="School library with children"
              className="absolute inset-0 h-full w-full object-cover md:rounded-r-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent md:hidden" />
          </div>
        </div>
      </section>

      {/* Main CTA Card */}
      <section className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-accent-cyan/5 p-8 shadow-xl md:p-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent-cyan text-white shadow-lg">
                <Building className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Donate via Rebuilding Sri Lanka</h2>
                <p className="text-sm text-muted-foreground">Official Government Portal</p>
              </div>
            </div>

            <p className="text-muted-foreground">
              Use the official government portal to make a secure donation. All contributions are tracked and receipted through official channels.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
                <ShieldCheck className="h-4 w-4" />
                Official Government Website
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-emerald/20 bg-accent-emerald/5 px-4 py-2 text-sm text-accent-emerald">
                <ShieldCheck className="h-4 w-4" />
                Secure & Transparent
              </span>
            </div>
          </div>

          <Button asChild variant="hero" size="xl" className="shrink-0 shadow-lg shadow-primary/25">
            <a href={GOV_URL} target="_blank" rel="noreferrer">
              <Gift className="h-5 w-5" />
              Donate Now
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* What your donation supports */}
      <section>
        <div className="text-center mb-10">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-accent-gold/10 px-4 py-2 text-sm font-semibold text-accent-gold mb-4">
            <Sparkles className="h-4 w-4" />
            Where Your Money Goes
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t("donateMoney.helps.title")}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Your financial contribution covers costs that book donations alone cannot address
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {supportItems.map((item, idx) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-soft transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>

              {/* Subtle gradient on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-cyan/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      {/* Impact section */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-soft">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-emerald to-accent-teal text-white">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Why Funds Matter</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Books alone don't make a library. Transport costs, shelving, cataloguing supplies, and long term maintenance all require funding. Your financial contribution ensures every donated book reaches students in the best possible way.
          </p>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-soft">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent-cyan text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">100% Transparency</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Every donation is tracked and documented. You'll receive receipts, progress photos, and detailed updates on how your contribution made a difference. We believe in complete transparency.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-accent-emerald to-accent-cyan p-8 text-center md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-pattern-dots opacity-10" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/20 blur-3xl" />

        <div className="relative space-y-6">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Every Contribution Counts
          </h2>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Join hundreds of donors who are helping build libraries across Sri Lanka
          </p>
          <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90 shadow-lg">
            <a href={GOV_URL} target="_blank" rel="noreferrer">
              <Gift className="h-5 w-5" />
              Donate via Official Portal
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}

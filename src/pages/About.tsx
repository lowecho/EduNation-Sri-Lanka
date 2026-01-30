import SectionHeading from "@/components/SectionHeading";
import { BookOpen, Users, Heart, Target, Sparkles, CheckCircle, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollToTopLink as Link } from "@/components/ScrollToTopLink";

// Import images
import heroImage from "@/assets/hero-children.png";
import schoolLibraryImage from "@/assets/school-library.png";

export default function About() {
  const cards = [
    {
      title: "The Challenge",
      description: "Not every school has enough textbooks, storybooks, or reference materials. Students often share outdated books or go without.",
      icon: Target,
      gradient: "from-accent-coral to-accent-gold",
    },
    {
      title: "Who We Are",
      description: "A community of students, volunteers, teachers, parents, and supporters working together to improve reading access.",
      icon: Users,
      gradient: "from-primary to-accent-cyan",
    },
    {
      title: "Why Books Matter",
      description: "Books build literacy, confidence, and opportunity. A library creates a safe space for curiosity and lifelong learning.",
      icon: Heart,
      gradient: "from-accent-emerald to-accent-teal",
    },
  ];

  const goals = [
    "Collect books in Sinhala, Tamil, and English",
    "Sort, label, and catalogue books with volunteers",
    "Set up functional, student-friendly library spaces",
    "Provide ongoing support through book drives and partnerships",
  ];

  const values = [
    { title: "Transparency", desc: "Every donation is documented with photos and receipts", icon: "🔍" },
    { title: "Community", desc: "Built by volunteers, driven by collective action", icon: "🤝" },
    { title: "Impact", desc: "Measurable results with real stories from schools", icon: "📊" },
    { title: "Sustainability", desc: "Long-term support, not one-time donations", icon: "🌱" },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background to-accent-emerald/10">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="p-8 md:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Our Mission
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              About <span className="text-gradient">EduNation Sri Lanka</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Many schools in Sri Lanka—especially in underserved areas—have limited learning resources. A small library can change a child's future, opening doors to knowledge, imagination, and opportunity.
            </p>

            <Button asChild variant="hero" size="lg">
              <Link to="/volunteer">
                <Users className="h-5 w-5" />
                Join Our Mission
              </Link>
            </Button>
          </div>

          <div className="relative h-full min-h-[300px] md:min-h-[400px]">
            <img
              src={schoolLibraryImage}
              alt="School library with students"
              className="absolute inset-0 h-full w-full object-cover md:rounded-r-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent md:hidden" />
          </div>
        </div>
      </section>

      {/* Challenge, Who, Why Cards */}
      <section className="grid gap-6 md:grid-cols-3">
        {cards.map((card, idx) => (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 shadow-soft transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-2 animate-fade-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Gradient accent */}
            <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${card.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

            {/* Icon */}
            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
              <card.icon className="h-7 w-7" />
            </div>

            <h2 className="text-xl font-bold tracking-tight">{card.title}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{card.description}</p>

            {/* Hover glow */}
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
          </div>
        ))}
      </section>

      {/* Impact Image Section */}
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="relative animate-slide-in-left">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-emerald/20 to-primary/10 blur-2xl opacity-50" />
          <img
            src={heroImage}
            alt="Children reading books"
            className="relative rounded-2xl shadow-xl ring-1 ring-white/10 object-cover w-full aspect-[4/3]"
          />
        </div>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-emerald/10 px-4 py-2 text-sm font-semibold text-accent-emerald">
            <Globe className="h-4 w-4" />
            Our Vision
          </div>
          <h2 className="text-3xl font-bold tracking-tight">
            Every Child Deserves<br />
            <span className="text-gradient">Access to Books</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We envision a Sri Lanka where every school has a well-stocked library, where children can discover the joy of reading, and where education is accessible to all regardless of location or economic status.
          </p>
          <ul className="space-y-3">
            {goals.map((goal) => (
              <li key={goal} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-0.5 text-accent-emerald shrink-0" />
                <span className="text-muted-foreground">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 shadow-lg md:p-12">
        <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-accent-purple/5 blur-3xl" />

        <div className="relative">
          <div className="text-center mb-10">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-accent-purple/10 px-4 py-2 text-sm font-semibold text-accent-purple mb-4">
              <Heart className="h-4 w-4" />
              What We Stand For
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, idx) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border/50 bg-background/60 p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-md animate-fade-in"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-lg">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-accent-emerald to-accent-cyan p-8 text-center md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-pattern-dots opacity-10" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/20 blur-3xl" />

        <div className="relative space-y-6">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Join our community of donors and volunteers building libraries across Sri Lanka
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/donatebooks">
                <BookOpen className="h-5 w-5" />
                Donate Books
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
              <Link to="/volunteer">
                <Users className="h-5 w-5" />
                Volunteer
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import SectionHeading from "@/components/SectionHeading";

export default function HowItWorks() {
  return (
    <div className="space-y-8">
      <SectionHeading
        title="How It Works"
        description="A clear, community-friendly process—from donating to students benefitting."
      />

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <ol className="grid gap-4 md:grid-cols-4">
          {[
            {
              title: "Donate books or funds",
              desc: "Choose to donate books or contribute through the official portal.",
            },
            {
              title: "Collection & sorting",
              desc: "Volunteers collect, sort, and separate by grade/subject/language.",
            },
            {
              title: "Library setup",
              desc: "We label, catalogue, and organize the library space for easy access.",
            },
            {
              title: "Students benefit",
              desc: "Students read more, learn better, and develop lifelong reading habits.",
            },
          ].map((s, idx) => (
            <li key={s.title} className="rounded-xl border border-border bg-background/60 p-5">
              <div className="text-xs font-medium text-muted-foreground">Step {idx + 1}</div>
              <div className="mt-1 text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

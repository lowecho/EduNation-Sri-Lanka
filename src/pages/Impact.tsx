import CountUpStat from "@/components/CountUpStat";
import SectionHeading from "@/components/SectionHeading";

export default function Impact() {
  const targetBooks = 2000;
  const currentBooks = 620;
  const pct = Math.min(100, Math.round((currentBooks / targetBooks) * 100));

  return (
    <div className="space-y-8">
      <SectionHeading
        title="Impact & Goals"
        description="Track the goal, see what your support enables, and where we go next."
      />

      <section className="grid gap-4 md:grid-cols-3">
        <CountUpStat value={targetBooks} label="Target books" />
        <CountUpStat value={currentBooks} label="Books collected so far" />
        <CountUpStat value={450} label="Students supported (estimate)" suffix="+" />
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <h2 className="text-xl font-semibold">Progress</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Progress numbers are sample placeholders—replace with real counts once you’re ready.
        </p>

        <div className="mt-5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Books goal</span>
            <span className="font-medium">
              {currentBooks.toLocaleString()} / {targetBooks.toLocaleString()} ({pct}%)
            </span>
          </div>
          <div className="mt-3 h-3 rounded-full bg-muted">
            <div className="h-3 rounded-full bg-gradient-brand" style={{ width: `${pct}%` }} aria-hidden="true" />
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-background/60 p-5">
            <h3 className="font-semibold">Short-term focus</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Build a balanced collection: textbooks + story books + reference material across Sinhala, Tamil, and English.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-background/60 p-5">
            <h3 className="font-semibold">Future expansion</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Add more collection points, partner with alumni groups, and support additional schools.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

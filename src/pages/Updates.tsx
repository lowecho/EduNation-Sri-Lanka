import { AspectRatio } from "@/components/ui/aspect-ratio";
import SectionHeading from "@/components/SectionHeading";
import { useI18n } from "@/lib/i18n";
import { gallery, proof, updates } from "@/lib/updatesData";

export default function Updates() {
  const { t } = useI18n();

  return (
    <div className="space-y-8">
      <SectionHeading title={t("updates.title")} description={t("updates.description")} />

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <h2 className="text-xl font-semibold">{t("updates.timeline")}</h2>

        <ol className="mt-6 space-y-5 border-l border-border pl-5">
          {updates
            .slice()
            .sort((a, b) => (a.date < b.date ? 1 : -1))
            .map((u) => (
              <li key={u.id} className="relative">
                <span
                  className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border border-border bg-background"
                  aria-hidden="true"
                />
                <div className="text-xs text-muted-foreground">{u.date}</div>
                <div className="mt-1 font-medium">{u.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{u.summary}</p>
              </li>
            ))}
        </ol>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <h2 className="text-xl font-semibold">{t("updates.gallery")}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((m) => (
            <figure key={m.caption} className="overflow-hidden rounded-xl border border-border bg-background/60">
              <AspectRatio ratio={4 / 3}>
                <img src={m.src} alt={m.alt} loading="lazy" className="h-full w-full object-cover" />
              </AspectRatio>
              <figcaption className="p-4">
                <div className="text-sm font-medium">{m.caption}</div>
                {m.date ? <div className="mt-1 text-xs text-muted-foreground">{m.date}</div> : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <h2 className="text-xl font-semibold">{t("updates.proof")}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {proof.map((m) => (
            <figure key={m.caption} className="overflow-hidden rounded-xl border border-border bg-background/60">
              <AspectRatio ratio={4 / 3}>
                <img src={m.src} alt={m.alt} loading="lazy" className="h-full w-full object-cover" />
              </AspectRatio>
              <figcaption className="p-4">
                <div className="text-sm font-medium">{m.caption}</div>
                {m.date ? <div className="mt-1 text-xs text-muted-foreground">{m.date}</div> : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <h2 className="text-xl font-semibold">{t("updates.report")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("updates.report.soon")}</p>
      </section>
    </div>
  );
}

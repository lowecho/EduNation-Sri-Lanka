import { AspectRatio } from "@/components/ui/aspect-ratio";
import SectionHeading from "@/components/SectionHeading";
import { Badge, type BadgeProps } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { gallery, proof, roadmapMilestones, roadmapPhases, sortByDateDesc, updates } from "@/lib/updatesData";
import { CalendarDays, CheckCircle2, Clock3, Route, Truck, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

function StatusBadge({ status }: { status: "completed" | "ongoing" | "planned" }) {
  const { t } = useI18n();
  const label =
    status === "completed"
      ? t("updates.status.completed")
      : status === "ongoing"
        ? t("updates.status.ongoing")
        : t("updates.status.planned");

  const variant: BadgeProps["variant"] = status === "completed" ? "secondary" : status === "ongoing" ? "default" : "outline";
  const Icon = status === "completed" ? CheckCircle2 : status === "ongoing" ? Clock3 : CalendarDays;

  return (
    <Badge variant={variant} className="gap-1">
      <Icon className="h-3.5 w-3.5" />
      {label}
    </Badge>
  );
}

const GalleryCard = ({ item }: { item: (typeof gallery)[0] }) => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-background/60">
      {item.images && item.images.length > 0 ? (
        <Carousel
          plugins={[autoplayPlugin.current]}
          className="w-full"
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.reset}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {item.images.map((imgSrc, index) => (
              <CarouselItem key={index}>
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={imgSrc}
                    alt={`${item.alt} ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <AspectRatio ratio={4 / 3}>
          <img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover" />
        </AspectRatio>
      )}
      <figcaption className="p-4">
        <div className="text-sm font-medium">{item.caption}</div>
        {item.date ? <div className="mt-1 text-xs text-muted-foreground">{item.date}</div> : null}
      </figcaption>
    </figure>
  );
};

export default function Updates() {
  const { t } = useI18n();

  return (
    <div className="space-y-8">
      <SectionHeading title={t("updates.title")} description={t("updates.description")} />

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold">{t("updates.roadmap.title")}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t("updates.roadmap.subtitle")}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusBadge status="completed" />
            <StatusBadge status="ongoing" />
            <StatusBadge status="planned" />
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {roadmapPhases.map((p) => (
            <article key={p.id} className="rounded-2xl border border-border bg-background/60 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Route className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    <h3 className="text-sm font-semibold tracking-tight">{p.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                </div>
                <StatusBadge status={p.status} />
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" aria-hidden="true" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-sm font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              {t("updates.timeline")}
            </h3>
          </div>

          <ol className="mt-4 space-y-4">
            {roadmapMilestones.map((m) => (
              <li key={m.id} className="rounded-2xl border border-border bg-background/60 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
                      {m.dateLabel}
                    </div>
                    <div className="mt-1 text-base font-semibold">{m.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{m.description}</p>
                  </div>
                  <div className="shrink-0">
                    <StatusBadge status={m.status} />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold">{t("updates.activity.title")}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t("updates.activity.subtitle")}</p>
          </div>
        </div>

        <ol className="mt-6 space-y-4">
          {sortByDateDesc(updates).map((u) => (
            <li key={u.id} className="rounded-2xl border border-border bg-background/60 p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{u.date}</span>
                  </div>
                  <div className="mt-1 font-medium">{u.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{u.summary}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(u.tags ?? []).slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="gap-1">
                      {tag === "volunteer" ? <Users className="h-3.5 w-3.5" /> : null}
                      {tag === "books" ? <Truck className="h-3.5 w-3.5" /> : null}
                      {tag === "announcement" ? <Route className="h-3.5 w-3.5" /> : null}
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold">{t("updates.transparency.title")}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t("updates.transparency.subtitle")}</p>
          </div>
        </div>

        <h3 className="mt-6 text-sm font-semibold tracking-[0.16em] text-muted-foreground uppercase">
          {t("updates.gallery")}
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((m, idx) => (
            <GalleryCard key={m.caption + idx} item={m} />
          ))}
        </div>

        <h3 className="mt-8 text-sm font-semibold tracking-[0.16em] text-muted-foreground uppercase">
          {t("updates.proof")}
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
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

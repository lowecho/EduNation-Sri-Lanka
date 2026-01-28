import { ExternalLink, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const GOV_URL = "https://rebuildingsrilanka.gov.lk/";

export default function DonateFunds() {
  const { t } = useI18n();

  return (
    <div className="space-y-8">
      <SectionHeading
        title={t("donateMoney.title")}
        description={t("donateMoney.description")}
      />

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Donate via Rebuilding Sri Lanka</h2>
            <p className="mt-2 text-muted-foreground">Use the official portal to make a secure donation (opens in a new tab).</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4" /> Official Government Website
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4" /> Secure & Transparent Donations
              </span>
            </div>
          </div>

          <Button asChild variant="gov" size="xl" className="shrink-0">
            <a href={GOV_URL} target="_blank" rel="noreferrer">
              Donate via Rebuilding Sri Lanka (Official Government Portal)
              <ExternalLink />
            </a>
          </Button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
          <h3 className="text-lg font-semibold">{t("donateMoney.helps.title")}</h3>
          <p className="mt-2 text-muted-foreground">
            Transport, shelves, boxes, and printing—so book donations can become a real, usable library.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
          <h3 className="text-lg font-semibold">What your donation supports</h3>
          <p className="mt-2 text-muted-foreground">
            Library furniture, shelving, cataloguing supplies, transport, and long-term maintenance—where book donations alone are not enough.
          </p>
        </div>
      </section>
    </div>
  );
}

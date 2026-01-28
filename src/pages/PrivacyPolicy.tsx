import SectionHeading from "@/components/SectionHeading";
import { useI18n } from "@/lib/i18n";

export default function PrivacyPolicy() {
  const { t } = useI18n();

  return (
    <div className="space-y-8">
      <SectionHeading title={t("footer.privacy")} description="Placeholder privacy policy. Replace this text when ready." />

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We only collect information you voluntarily submit via forms on this website (e.g., donation pledges, volunteer sign-ups,
          and contact messages). This page is a placeholder and should be replaced with your finalized policy.
        </p>

        <h3 className="mt-6 text-lg font-semibold">What we collect</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          <li>Name and contact details you submit</li>
          <li>Donation/volunteer details you provide</li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold">How we use it</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          <li>To coordinate pickup/drop-off and volunteer next steps</li>
          <li>To respond to your questions</li>
        </ul>
      </section>
    </div>
  );
}

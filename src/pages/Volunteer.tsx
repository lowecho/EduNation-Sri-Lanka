import { useMemo } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  whatsapp: z.string().trim().min(7, "Please enter a valid WhatsApp number").max(30),
  district: z.string().trim().min(2, "Please enter your district").max(80),
  availability: z.string().trim().min(2, "Please enter your available days").max(120),
  skills: z.string().trim().max(500).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

export default function Volunteer() {
  const { t } = useI18n();
  const defaults = useMemo<FormValues>(
    () => ({ name: "", whatsapp: "", district: "", availability: "", skills: "" }),
    [],
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: defaults });

  const onSubmit = (values: FormValues) => {
    toast.success("Thanks for volunteering (demo)", {
      description: `We’ll contact you on WhatsApp (${values.whatsapp}) with next steps.`,
    });
    reset(defaults);
  };

  return (
    <div className="space-y-8">
      <SectionHeading
        title={t("volunteer.title")}
        description={t("volunteer.description")}
      />

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Event support",
            desc: "Help at collection events, community drives, and announcements.",
          },
          {
            title: "Book sorting",
            desc: "Assist with sorting by grade, labeling, and basic cataloguing.",
          },
          {
            title: "Logistics coordination",
            desc: "Support transport planning, packing, and delivery to schools.",
          },
          {
            title: "Photography / documentation",
            desc: "Help capture photos and short notes for transparency updates.",
          },
          {
            title: "School library setup",
            desc: "Help arrange shelves, label sections, and set up reading corners.",
          },
        ].map((c) => (
          <div key={c.title} className="rounded-xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-lg font-semibold">{c.title}</h2>
            <p className="mt-2 text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <h2 className="text-xl font-semibold">{t("volunteer.form.title")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">Starter form (demo). We can connect it to email/DB later.</p>

        <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" autoComplete="name" {...register("name")} />
            {errors.name ? <p className="text-sm text-destructive">{errors.name.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input id="whatsapp" autoComplete="tel" {...register("whatsapp")} />
            {errors.whatsapp ? <p className="text-sm text-destructive">{errors.whatsapp.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="district">District</Label>
            <Input id="district" autoComplete="address-level1" {...register("district")} />
            {errors.district ? <p className="text-sm text-destructive">{errors.district.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="availability">Available days</Label>
            <Input id="availability" placeholder="Weekends / Weekdays / Flexible" {...register("availability")} />
            {errors.availability ? <p className="text-sm text-destructive">{errors.availability.message}</p> : null}
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="skills">Skills (optional)</Label>
            <Textarea id="skills" rows={4} placeholder="Photography, design, coordination, driving…" {...register("skills")} />
            {errors.skills ? <p className="text-sm text-destructive">{errors.skills.message}</p> : null}
          </div>
          <div className="md:col-span-2">
            <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
              Sign up
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}

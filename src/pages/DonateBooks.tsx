import { useMemo, useState } from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n";

const bookTypeEnum = z.enum(["kids", "school", "novels", "educational", "other"]);

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone/WhatsApp").max(30),
  district: z.string().trim().min(2, "Please enter your district").max(60),
  city: z.string().trim().min(2, "Please enter your city").max(80),
  bookTypes: z.array(bookTypeEnum).min(1, "Select at least one book type"),
  quantity: z.coerce.number().int().min(1, "Enter an approximate quantity").max(10000),
  condition: z.enum(["new", "used_good"], { required_error: "Select a condition" }),
  message: z.string().trim().max(500).optional().or(z.literal("")),
  consent: z.boolean().refine((v) => v === true, { message: "Consent is required" }),
});

type FormValues = z.infer<typeof schema>;

export default function DonateBooks() {
  const { t } = useI18n();
  const defaults = useMemo<FormValues>(
    () => ({
      name: "",
      phone: "",
      district: "",
      city: "",
      bookTypes: [],
      quantity: 1,
      condition: "used_good",
      message: "",
      consent: false,
    }),
    [],
  );

  const [submitted, setSubmitted] = useState<FormValues | null>(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: defaults });

  const onSubmit = (values: FormValues) => {
    toast.success("Donation pledge received (demo)");
    setSubmitted(values);
  };

  const shareOnWhatsApp = () => {
    const url = typeof window !== "undefined" ? window.location.origin : "";
    const text = `I just pledged books for Breathing Letters. Join me: ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noreferrer");
  };

  const startOver = () => {
    setSubmitted(null);
    reset(defaults);
  };

  const typeOptions: Array<{ key: z.infer<typeof bookTypeEnum>; label: string }> = [
    { key: "kids", label: "Kids" },
    { key: "school", label: "School" },
    { key: "novels", label: "Novels" },
    { key: "educational", label: "Educational" },
    { key: "other", label: "Other" },
  ];

  return (
    <div className="space-y-8">
      <SectionHeading
        title={t("donateBooks.title")}
        description={t("donateBooks.description")}
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
          <h2 className="text-xl font-semibold">{t("donateBooks.form.title")}</h2>
          <p className="mt-2 text-sm text-muted-foreground">Demo form (no backend yet). We can connect it later.</p>

          {submitted ? (
            <div className="mt-6 rounded-xl border border-border bg-background/60 p-6">
              <h3 className="text-lg font-semibold">{t("donateBooks.success.title")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t("donateBooks.success.body")}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button type="button" variant="hero" size="lg" onClick={shareOnWhatsApp}>
                  {t("donateBooks.success.share")}
                </Button>
                <Button type="button" variant="outline" size="lg" onClick={startOver}>
                  {t("donateBooks.success.again")}
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Submitted for: {submitted.name}</p>
            </div>
          ) : (
            <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" autoComplete="name" {...register("name")} />
                {errors.name ? <p className="text-sm text-destructive">{errors.name.message}</p> : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone / WhatsApp</Label>
                <Input id="phone" autoComplete="tel" {...register("phone")} />
                {errors.phone ? <p className="text-sm text-destructive">{errors.phone.message}</p> : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="district">District</Label>
                <Input id="district" autoComplete="address-level1" {...register("district")} />
                {errors.district ? <p className="text-sm text-destructive">{errors.district.message}</p> : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" autoComplete="address-level2" {...register("city")} />
                {errors.city ? <p className="text-sm text-destructive">{errors.city.message}</p> : null}
              </div>

              <div className="space-y-2 md:col-span-2">
                <div className="text-sm font-medium leading-none">Book types</div>
                <Controller
                  control={control}
                  name="bookTypes"
                  render={({ field }) => (
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      {typeOptions.map((opt) => {
                        const checked = field.value.includes(opt.key);
                        return (
                          <label key={opt.key} className="flex items-center gap-2 text-sm">
                            <Checkbox
                              checked={checked}
                              onCheckedChange={(v) => {
                                const next = new Set(field.value);
                                if (v) next.add(opt.key);
                                else next.delete(opt.key);
                                field.onChange(Array.from(next));
                              }}
                            />
                            {opt.label}
                          </label>
                        );
                      })}
                    </div>
                  )}
                />
                {errors.bookTypes ? <p className="text-sm text-destructive">{errors.bookTypes.message}</p> : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Approx quantity</Label>
                <Input id="quantity" type="number" min={1} inputMode="numeric" {...register("quantity")} />
                {errors.quantity ? <p className="text-sm text-destructive">{errors.quantity.message}</p> : null}
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium leading-none">Condition</div>
                <Controller
                  control={control}
                  name="condition"
                  render={({ field }) => (
                    <RadioGroup value={field.value} onValueChange={field.onChange} className="mt-2">
                      <label className="flex items-center gap-2 text-sm">
                        <RadioGroupItem value="new" />
                        New
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <RadioGroupItem value="used_good" />
                        Used (good condition)
                      </label>
                    </RadioGroup>
                  )}
                />
                {errors.condition ? <p className="text-sm text-destructive">{errors.condition.message}</p> : null}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">Optional message</Label>
                <Textarea id="message" rows={5} {...register("message")} />
                {errors.message ? <p className="text-sm text-destructive">{errors.message.message}</p> : null}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Controller
                  control={control}
                  name="consent"
                  render={({ field }) => (
                    <label className="flex items-start gap-2 text-sm">
                      <Checkbox checked={field.value} onCheckedChange={(v) => field.onChange(Boolean(v))} />
                      <span>{t("donateBooks.form.consent")}</span>
                    </label>
                  )}
                />
                {errors.consent ? <p className="text-sm text-destructive">{errors.consent.message}</p> : null}
              </div>

              <div className="md:col-span-2">
                <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
                  Submit pledge
                </Button>
              </div>
            </form>
          )}
        </section>

        <aside className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
          <h2 className="text-xl font-semibold">{t("donateBooks.guidelines.title")}</h2>

          <div className="mt-6 space-y-5">
            <div>
              <div className="text-sm font-medium text-muted-foreground">{t("donateBooks.guidelines.accepted")}</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Kids books, school textbooks, novels, educational/reference books</li>
                <li>Sinhala / Tamil / English</li>
                <li>Clean, readable condition</li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-medium text-muted-foreground">{t("donateBooks.guidelines.notAccepted")}</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Torn or missing pages</li>
                <li>Heavy water damage or mold</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-background/60 p-4">
              <div className="text-sm font-medium">{t("donateBooks.guidelines.promise")}</div>
              <p className="mt-1 text-sm text-muted-foreground">
                We aim to deliver only books that students can comfortably read and learn from.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

import { useMemo } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  area: z.string().trim().min(2, "Please enter your city/area").max(120),
});

type FormValues = z.infer<typeof schema>;

export default function Volunteer() {
  const defaults = useMemo<FormValues>(() => ({ name: "", email: "", area: "" }), []);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: defaults });

  const onSubmit = (values: FormValues) => {
    toast.success("Thanks for volunteering (demo)", {
      description: `We’ll contact you at ${values.email} with next steps.`,
    });
    reset(defaults);
  };

  return (
    <div className="space-y-8">
      <SectionHeading
        title="Volunteer / Get Involved"
        description="Join the community effort. Choose how you can help—every skill matters."
      />

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Book collection",
            desc: "Help coordinate collection points or gather books from your community.",
          },
          {
            title: "Sorting & cataloguing",
            desc: "Assist with sorting by grade, labeling, and basic cataloguing.",
          },
          {
            title: "Transport & logistics",
            desc: "Support transport planning, packing, and delivery to schools.",
          },
        ].map((c) => (
          <div key={c.title} className="rounded-xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-lg font-semibold">{c.title}</h2>
            <p className="mt-2 text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <h2 className="text-xl font-semibold">Volunteer sign-up</h2>
        <p className="mt-2 text-sm text-muted-foreground">Starter form (demo). We can connect it to email/DB later.</p>

        <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" autoComplete="name" {...register("name")} />
            {errors.name ? <p className="text-sm text-destructive">{errors.name.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" autoComplete="email" {...register("email")} />
            {errors.email ? <p className="text-sm text-destructive">{errors.email.message}</p> : null}
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="area">City / Area</Label>
            <Input id="area" autoComplete="address-level2" {...register("area")} />
            {errors.area ? <p className="text-sm text-destructive">{errors.area.message}</p> : null}
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

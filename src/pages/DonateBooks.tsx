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
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  notes: z.string().trim().max(500).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

export default function DonateBooks() {
  const defaults = useMemo<FormValues>(() => ({ name: "", email: "", phone: "", notes: "" }), []);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: defaults });

  const onSubmit = (values: FormValues) => {
    toast.success("Donation registration received (demo)", {
      description: `Thanks, ${values.name}. We’ll contact you about drop-off or courier options.`,
    });
    reset(defaults);
  };

  return (
    <div className="space-y-8">
      <SectionHeading
        title="Donate Books"
        description="Follow these steps to donate books. You can donate Primary & Secondary school books, story books, and reference/educational books in Sinhala, Tamil, or English."
      />

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "1) Check accepted book types",
            desc: "Primary & secondary textbooks, story books, and reference/educational books. Clean, readable condition preferred.",
          },
          {
            title: "2) Register your donation",
            desc: "Use the simple form below so we can coordinate collection details.",
          },
          {
            title: "3) Drop off / courier",
            desc: "We’ll share the nearest drop-off point or courier instructions after registration.",
          },
        ].map((s) => (
          <div key={s.title} className="rounded-xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <h2 className="text-xl font-semibold">Register a book donation</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This starter form is a demo (no backend yet). We can connect it to a database later.
        </p>

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
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" autoComplete="tel" {...register("phone")} />
            {errors.phone ? <p className="text-sm text-destructive">{errors.phone.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Notes (optional)</Label>
            <Input id="notes" placeholder="Book types, approximate quantity, city…" {...register("notes")} />
            {errors.notes ? <p className="text-sm text-destructive">{errors.notes.message}</p> : null}
          </div>
          <div className="md:col-span-2">
            <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
              Submit registration
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}

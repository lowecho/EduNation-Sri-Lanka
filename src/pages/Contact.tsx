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

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Please write a short message").max(1000),
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const defaults = useMemo<FormValues>(() => ({ name: "", email: "", message: "" }), []);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: defaults });

  const onSubmit = (values: FormValues) => {
    toast.success("Message sent (demo)", {
      description: `Thanks, ${values.name}. We’ll reply to ${values.email}.`,
    });
    reset(defaults);
  };

  return (
    <div className="space-y-8">
      <SectionHeading
        title="Contact Us"
        description="Send a message, or reach us via email/phone. Social links can be added here." 
      />

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
          <div className="text-sm font-medium text-muted-foreground">Email</div>
          <div className="mt-2 font-medium">library.project@example.com</div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
          <div className="text-sm font-medium text-muted-foreground">Phone</div>
          <div className="mt-2 font-medium">+94 XX XXX XXXX</div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
          <div className="text-sm font-medium text-muted-foreground">Social</div>
          <div className="mt-2 text-muted-foreground">Add Facebook / Instagram / LinkedIn links.</div>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <h2 className="text-xl font-semibold">Send a message</h2>

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
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={6} {...register("message")} />
            {errors.message ? <p className="text-sm text-destructive">{errors.message.message}</p> : null}
          </div>
          <div className="md:col-span-2">
            <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
              Send
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}

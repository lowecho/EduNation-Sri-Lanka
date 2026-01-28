import { useMemo } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ExternalLink, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n";

const WHATSAPP_DISPLAY = "+94 XX XXX XXXX";
const WHATSAPP_NUMBER = "94XXXXXXXXX";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Please write a short message").max(1000),
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const { t } = useI18n();
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
        title={t("contact.title")}
        description={t("contact.description")}
      />

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
          <div className="text-sm font-medium text-muted-foreground">{t("contact.whatsapp")}</div>
          <div className="mt-2 font-medium">{WHATSAPP_DISPLAY}</div>
          <div className="mt-4">
            <Button asChild variant="hero" size="sm">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                <MessageCircle />
                WhatsApp
                <ExternalLink />
              </a>
            </Button>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
          <div className="text-sm font-medium text-muted-foreground">Email</div>
          <div className="mt-2 font-medium">library.project@example.com</div>
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

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <h2 className="text-xl font-semibold">{t("contact.map")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">Map placeholder (replace with your exact pickup point/office).</p>
        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <iframe
            title="Map"
            loading="lazy"
            className="h-72 w-full"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Colombo%2C%20Sri%20Lanka&output=embed"
          />
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
        <h2 className="text-xl font-semibold">{t("contact.faq")}</h2>
        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="donate">
            <AccordionTrigger>How to donate?</AccordionTrigger>
            <AccordionContent>
              Submit the Donate Books pledge, and we will contact you to coordinate pickup/drop-off.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="receive">
            <AccordionTrigger>Who receives the books?</AccordionTrigger>
            <AccordionContent>
              Books are delivered to the supported school library as part of the Breathing Letters initiative.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="volunteer">
            <AccordionTrigger>How do I volunteer?</AccordionTrigger>
            <AccordionContent>
              Fill out the volunteer form and we’ll reach out with next steps based on your availability and skills.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}

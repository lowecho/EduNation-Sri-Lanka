import { useMemo } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ExternalLink, MessageCircle, Mail, MapPin, Send, HelpCircle, Sparkles } from "lucide-react";
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
      description: `Thanks, ${values.name}. We'll reply to ${values.email}.`,
    });
    reset(defaults);
  };

  const contactCards = [
    {
      title: t("contact.whatsapp"),
      value: WHATSAPP_DISPLAY,
      icon: MessageCircle,
      gradient: "from-accent-emerald to-accent-teal",
      action: (
        <Button asChild variant="hero" size="sm" className="mt-4">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      ),
    },
    {
      title: "Email",
      value: "library.project@example.com",
      icon: Mail,
      gradient: "from-primary to-accent-cyan",
      action: (
        <Button asChild variant="outline" size="sm" className="mt-4">
          <a href="mailto:library.project@example.com">
            <Mail className="h-4 w-4" />
            Send Email
          </a>
        </Button>
      ),
    },
    {
      title: "Location",
      value: "Colombo, Sri Lanka",
      icon: MapPin,
      gradient: "from-accent-purple to-accent-coral",
      description: "Contact us to arrange book drop-off or pickup",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background to-accent-cyan/10 p-8 md:p-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            Get in Touch
          </div>
          <SectionHeading
            title={t("contact.title")}
            description={t("contact.description")}
          />
        </div>
      </div>

      {/* Contact Cards */}
      <section className="grid gap-6 md:grid-cols-3">
        {contactCards.map((card, idx) => (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-soft transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Top gradient accent */}
            <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${card.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

            {/* Icon */}
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
              <card.icon className="h-6 w-6" />
            </div>

            <div className="text-sm font-medium text-muted-foreground">{card.title}</div>
            <div className="mt-2 font-bold text-foreground">{card.value}</div>
            {card.description && (
              <div className="mt-2 text-sm text-muted-foreground">{card.description}</div>
            )}
            {card.action}

            {/* Hover glow */}
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
          </div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 shadow-lg md:p-10">
        <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent-cyan text-white shadow-md">
              <Send className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Send a Message</h2>
              <p className="text-sm text-muted-foreground">We'd love to hear from you</p>
            </div>
          </div>

          <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label htmlFor="name" className="font-medium">Name</Label>
              <Input
                id="name"
                autoComplete="name"
                className="h-12 rounded-xl border-border/50 bg-background/50 transition-all duration-300 focus:border-primary/50 focus:bg-background"
                placeholder="Your name"
                {...register("name")}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                className="h-12 rounded-xl border-border/50 bg-background/50 transition-all duration-300 focus:border-primary/50 focus:bg-background"
                placeholder="your@email.com"
                {...register("email")}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message" className="font-medium">Message</Label>
              <Textarea
                id="message"
                rows={6}
                className="rounded-xl border-border/50 bg-background/50 transition-all duration-300 focus:border-primary/50 focus:bg-background resize-none"
                placeholder="Tell us how we can help..."
                {...register("message")}
              />
              {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
            </div>

            <div className="md:col-span-2">
              <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="min-w-[200px]">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 shadow-lg md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-gold to-accent-coral text-white shadow-md">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{t("contact.map")}</h2>
            <p className="text-sm text-muted-foreground">Find us or arrange a book drop-off</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/50 shadow-lg">
          <iframe
            title="Map"
            loading="lazy"
            className="h-80 w-full"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Colombo%2C%20Sri%20Lanka&output=embed"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 shadow-lg md:p-10">
        <div className="pointer-events-none absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-accent-purple/5 blur-3xl" />

        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-purple to-accent-coral text-white shadow-md">
              <HelpCircle className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">{t("contact.faq")}</h2>
              <p className="text-sm text-muted-foreground">Common questions answered</p>
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                value: "donate",
                question: "How to donate?",
                answer: "Submit the Donate Books pledge, and we will contact you to coordinate pickup/drop-off.",
              },
              {
                value: "receive",
                question: "Who receives the books?",
                answer: "Books are delivered to the supported school library as part of the EduNation Sri Lanka initiative.",
              },
              {
                value: "volunteer",
                question: "How do I volunteer?",
                answer: "Fill out the volunteer form and we'll reach out with next steps based on your availability and skills.",
              },
            ].map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="rounded-xl border border-border/50 bg-background/50 px-4 transition-all duration-200 hover:border-primary/30 data-[state=open]:border-primary/30 data-[state=open]:bg-background"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}

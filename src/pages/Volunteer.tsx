import { useMemo, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Users, Calendar, Package, Camera, Sparkles, Heart, BookOpen, Truck, Send, CheckCircle, Share2, RefreshCw } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n";
import { supabase } from "@/lib/supabase";

// Import image
import volunteersImage from "@/assets/volunteers.png";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  whatsapp: z.string().trim().min(7, "Please enter a valid WhatsApp number").max(30),
  district: z.string().trim().min(2, "Please enter your district").max(80),
  availability: z.string().trim().min(2, "Please enter your available days").max(120),
  skills: z.string().trim().max(500).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

const roles = [
  {
    title: "Event Support",
    desc: "Help at collection events, community drives, and announcements.",
    icon: Calendar,
    gradient: "from-primary to-accent-cyan",
  },
  {
    title: "Book Sorting",
    desc: "Assist with sorting by grade, labeling, and basic cataloguing.",
    icon: BookOpen,
    gradient: "from-accent-emerald to-accent-teal",
  },
  {
    title: "Logistics Coordination",
    desc: "Support transport planning, packing, and delivery to schools.",
    icon: Truck,
    gradient: "from-accent-gold to-accent-coral",
  },
  {
    title: "Photography & Documentation",
    desc: "Help capture photos and short notes for transparency updates.",
    icon: Camera,
    gradient: "from-accent-purple to-accent-coral",
  },
  {
    title: "School Library Setup",
    desc: "Help arrange shelves, label sections, and set up reading corners.",
    icon: Package,
    gradient: "from-accent-cyan to-primary",
  },
];

export default function Volunteer() {
  const { t } = useI18n();
  const defaults = useMemo<FormValues>(
    () => ({ name: "", whatsapp: "", district: "", availability: "", skills: "" }),
    [],
  );

  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: defaults });

  const onSubmit = async (values: FormValues) => {
    try {
      const { error } = await supabase.from('volunteers').insert([
        {
          name: values.name,
          whatsapp: values.whatsapp,
          district: values.district,
          availability: values.availability,
          skills: values.skills,
          created_at: new Date().toISOString(),
        }
      ]);

      if (error) throw error;

      toast.success("Thanks for volunteering! 🎉", {
        description: `We'll contact you on WhatsApp (${values.whatsapp}) with next steps.`,
      });
      setSubmitted(values);
    } catch (error) {
      console.error('Error submitting volunteer info:', error);
      toast.error("Failed to submit. Please try again.");
    }
  };

  const shareOnWhatsApp = () => {
    const text = `🤝 I just signed up to volunteer with EduNation Sri Lanka!
Join me in making a difference for students across the country. 🌟
Sign up here: testtttt.com`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noreferrer");
  };

  const startOver = () => {
    setSubmitted(null);
    reset(defaults);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-emerald/10 via-background to-primary/10">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-accent-emerald/10 blur-3xl" />

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="p-8 md:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-emerald/10 px-4 py-2 text-sm font-semibold text-accent-emerald">
              <Heart className="h-4 w-4" />
              Join Our Team
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Make a <span className="text-gradient">Difference</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("volunteer.description")}
            </p>

            <div className="flex flex-wrap gap-3">
              {["Flexible hours", "No experience needed", "Make real impact"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent-emerald" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-full min-h-[300px] md:min-h-[400px]">
            <img
              src={volunteersImage}
              alt="Volunteers working together"
              className="absolute inset-0 h-full w-full object-cover md:rounded-r-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent md:hidden" />
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section>
        <div className="text-center mb-10">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-4">
            <Users className="h-4 w-4" />
            Volunteer Roles
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ways You Can Help</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Choose how you'd like to contribute based on your skills and availability
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {roles.map((role, idx) => (
            <div
              key={role.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-soft transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Top gradient accent */}
              <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${role.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

              {/* Icon */}
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${role.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                <role.icon className="h-7 w-7" />
              </div>

              <h3 className="font-bold tracking-tight text-lg">{role.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{role.desc}</p>

              {/* Hover glow */}
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 shadow-lg md:p-12">
        <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-accent-emerald/5 blur-3xl" />

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-accent-emerald/10 px-4 py-2 text-sm font-semibold text-accent-emerald mb-4">
              <Sparkles className="h-4 w-4" />
              Sign Up
            </div>
            <h2 className="text-3xl font-bold tracking-tight">{t("volunteer.form.title")}</h2>
            <p className="mt-4 text-muted-foreground">Fill out the form below and we'll reach out with next steps</p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-accent-emerald/30 bg-accent-emerald/5 p-8 text-center space-y-6 animate-in fade-in zoom-in duration-300">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent-emerald to-accent-teal text-white">
                <CheckCircle className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-accent-emerald">Welcome to the Team!</h3>
                <p className="mt-2 text-muted-foreground">
                  Thanks for signing up, {submitted.name.split(' ')[0]}. We'll contact you on WhatsApp soon.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button type="button" variant="hero" size="lg" onClick={shareOnWhatsApp}>
                  <Share2 className="h-5 w-5" />
                  Share with Friends
                </Button>
                <Button type="button" variant="outline" size="lg" onClick={startOver}>
                  <RefreshCw className="h-5 w-5" />
                  Register Another
                </Button>
              </div>
            </div>
          ) : (
            <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <Label htmlFor="name" className="font-medium">Full Name</Label>
                <Input
                  id="name"
                  autoComplete="name"
                  className="h-12 rounded-xl border-border/50 bg-background/50 transition-all duration-300 focus:border-primary/50 focus:bg-background"
                  placeholder="Your full name"
                  {...register("name")}
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="font-medium">WhatsApp Number</Label>
                <Input
                  id="whatsapp"
                  autoComplete="tel"
                  className="h-12 rounded-xl border-border/50 bg-background/50 transition-all duration-300 focus:border-primary/50 focus:bg-background"
                  placeholder="+94 XX XXX XXXX"
                  {...register("whatsapp")}
                />
                {errors.whatsapp && <p className="text-sm text-destructive">{errors.whatsapp.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="district" className="font-medium">District</Label>
                <Input
                  id="district"
                  autoComplete="address-level1"
                  className="h-12 rounded-xl border-border/50 bg-background/50 transition-all duration-300 focus:border-primary/50 focus:bg-background"
                  placeholder="Your district"
                  {...register("district")}
                />
                {errors.district && <p className="text-sm text-destructive">{errors.district.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability" className="font-medium">Available Days</Label>
                <Input
                  id="availability"
                  className="h-12 rounded-xl border-border/50 bg-background/50 transition-all duration-300 focus:border-primary/50 focus:bg-background"
                  placeholder="Weekends / Weekdays / Flexible"
                  {...register("availability")}
                />
                {errors.availability && <p className="text-sm text-destructive">{errors.availability.message}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="skills" className="font-medium">Skills & Interests (optional)</Label>
                <Textarea
                  id="skills"
                  rows={4}
                  className="rounded-xl border-border/50 bg-background/50 transition-all duration-300 focus:border-primary/50 focus:bg-background resize-none"
                  placeholder="Photography, design, coordination, driving, etc."
                  {...register("skills")}
                />
                {errors.skills && <p className="text-sm text-destructive">{errors.skills.message}</p>}
              </div>

              <div className="md:col-span-2 flex justify-center">
                <Button type="submit" variant="hero" size="xl" disabled={isSubmitting} className="min-w-[250px]">
                  <Send className="h-5 w-5" />
                  Sign Up to Volunteer
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { useI18n, type Language } from "@/lib/i18n";

const languages: { value: Language; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "si", label: "සිං" },
  { value: "ta", label: "தமிழ்" },
];

export default function LanguageToggle() {
  const { lang, setLang } = useI18n();

  return (
    <div className="inline-flex items-center rounded-full border border-border bg-background/60 p-1 shadow-soft backdrop-blur">
      {languages.map((l) => (
        <Button
          key={l.value}
          type="button"
          variant={lang === l.value ? "soft" : "ghost"}
          size="sm"
          className="h-8 rounded-full px-2"
          onClick={() => setLang(l.value)}
          aria-pressed={lang === l.value}
        >
          {l.label}
        </Button>
      ))}
    </div>
  );
}

import React, { createContext, useContext, useMemo, useState } from "react";

export type Language = "en" | "si" | "ta";

type Dictionary = Record<string, string>;

const dictionaries: Record<Language, Dictionary> = {
  en: {
    "app.name": "School Library Project",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.donateBooks": "Donate Books",
    "nav.donateFunds": "Donate Funds",
    "nav.how": "How It Works",
    "nav.impact": "Impact",
    "nav.volunteer": "Volunteer",
    "nav.contact": "Contact",
    "home.hero.title": "Help Build a School Library – One Book at a Time",
    "home.hero.subtitle":
      "Together, we can bring stories, knowledge, and opportunity to Sri Lankan students—through book donations, volunteering, and trusted official funding.",
    "cta.donateBooks": "Donate Books",
    "cta.donateFunds": "Donate Funds (Official)",
    "cta.volunteer": "Volunteer",
    "trust.official": "Official Government Website",
    "trust.secure": "Secure & Transparent Donations",
    "footer.tag": "Community-powered education support for Sri Lanka.",
  },
  si: {
    "app.name": "පාසල් පුස්තකාල ව්‍යාපෘතිය",
    "nav.home": "මුල් පිටුව",
    "nav.about": "ව්‍යාපෘතිය ගැන",
    "nav.donateBooks": "පොත් පරිත්‍යාග",
    "nav.donateFunds": "මුදල් පරිත්‍යාග",
    "nav.how": "ක්‍රියාවලිය",
    "nav.impact": "ප්‍රභාවය",
    "nav.volunteer": "ස්වේච්ඡා",
    "nav.contact": "සම්බන්ධතා",
    "home.hero.title": "පාසල් පුස්තකාලයක් ගොඩනඟමු – පොතක් එක්ක එක් පියවරක්",
    "home.hero.subtitle":
      "පොත් පරිත්‍යාග, ස්වේච්ඡා සේවය සහ විශ්වාසනීය නිල අරමුදල් මගින් ශ්‍රී ලාංකික දරුවන්ට දැනුම හා අවස්ථා ලබාදෙමු.",
    "cta.donateBooks": "පොත් පරිත්‍යාග කරන්න",
    "cta.donateFunds": "මුදල් පරිත්‍යාග (නිල)",
    "cta.volunteer": "ස්වේච්ඡා වන්න",
    "trust.official": "නිල රාජ්‍ය වෙබ් අඩවිය",
    "trust.secure": "ආරක්ෂිත හා පාරදර්ශී පරිත්‍යාග",
    "footer.tag": "ශ්‍රී ලංකාවේ අධ්‍යාපනය සඳහා ප්‍රජා සහාය.",
  },
  ta: {
    "app.name": "பள்ளி நூலக திட்டம்",
    "nav.home": "முகப்பு",
    "nav.about": "திட்டம் பற்றி",
    "nav.donateBooks": "புத்தக நன்கொடை",
    "nav.donateFunds": "நிதி நன்கொடை",
    "nav.how": "எப்படி செயல்படுகிறது",
    "nav.impact": "தாக்கம்",
    "nav.volunteer": "தன்னார்வம்",
    "nav.contact": "தொடர்பு",
    "home.hero.title": "ஒரு புத்தகமாக பள்ளி நூலகத்தை உருவாக்க உதவுங்கள்",
    "home.hero.subtitle":
      "புத்தக நன்கொடைகள், தன்னார்வம் மற்றும் அதிகாரப்பூர்வ நிதி வழியாக—இலங்கை மாணவர்களுக்கு அறிவும் வாய்ப்பும் வழங்க ஒன்றாக செயல்படலாம்.",
    "cta.donateBooks": "புத்தகங்களை நன்கொடையளிக்க",
    "cta.donateFunds": "நிதி நன்கொடை (அதிகாரம்)",
    "cta.volunteer": "தன்னார்வமாக",
    "trust.official": "அதிகாரப்பூர்வ அரசு வலைத்தளம்",
    "trust.secure": "பாதுகாப்பான & வெளிப்படையான நன்கொடைகள்",
    "footer.tag": "இலங்கைக்கான சமூக ஆதார கல்வி ஆதரவு.",
  },
};

type I18nContextValue = {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function safeLang(value: string | null): Language {
  if (value === "si" || value === "ta" || value === "en") return value;
  return "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    return safeLang(window.localStorage.getItem("lang"));
  });

  const setLang = (l: Language) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
    } catch {
      // ignore
    }
  };

  const value = useMemo<I18nContextValue>(() => {
    const dict = dictionaries[lang];
    return {
      lang,
      setLang,
      t: (key: string) => dict[key] ?? dictionaries.en[key] ?? key,
    };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

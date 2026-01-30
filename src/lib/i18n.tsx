import React, { createContext, useContext, useMemo, useState } from "react";

export type Language = "en" | "si" | "ta";

type Dictionary = Record<string, string>;

const dictionaries: Record<Language, Dictionary> = {
  en: {
    "app.name": "EduNation Sri Lanka",
    "nav.home": "Home",
    "nav.donateBooks": "Donate Books",
    "nav.donateMoney": "Donate Money",
    "nav.updates": "Updates",
    "nav.volunteer": "Volunteer",
    "nav.contact": "Contact",

    // Home
    "home.hero.title": "EduNation Sri Lanka",
    "home.hero.subtitle": "Building a school library. Collecting books across Sri Lanka.",
    "home.cta.primary": "Donate Books",
    "home.cta.secondary": "Volunteer",
    "home.cta.official": "Donate Money (Official)",
    "home.trust.transparent": "Transparent updates",
    "home.trust.photos": "Photos & proof of delivery",
    "home.trust.community": "Community-led project",
    "home.how.title": "How it works",
    "home.how.step1": "You pledge or donate books",
    "home.how.step2": "We collect + sort",
    "home.how.step3": "We build and donate the library",
    "home.stats.pledged": "Books pledged",
    "home.stats.collected": "Books collected",
    "home.stats.schools": "Schools supported",
    "home.stats.volunteers": "Volunteers joined",
    "home.featured.title": "Latest update",
    "home.featured.cta": "Read all updates →",
    "home.strip.title": "Be part of EduNation Sri Lanka, donate a book today.",
    "home.strip.cta": "Donate Books",

    // Donate Books
    "donateBooks.title": "Donate Books",
    "donateBooks.description":
      "Pledge new/used books for students across Sri Lanka. We’ll coordinate pickup/drop off once you submit.",
    "donateBooks.form.title": "Book donation pledge",
    "donateBooks.form.consent": "I agree to be contacted for pickup/dropoff coordination",
    "donateBooks.success.title": "Thank you!",
    "donateBooks.success.body": "We will contact you soon.",
    "donateBooks.success.share": "Share on WhatsApp",
    "donateBooks.success.again": "Submit another pledge",
    "donateBooks.guidelines.title": "Guidelines",
    "donateBooks.guidelines.accepted": "What books are accepted",
    "donateBooks.guidelines.notAccepted": "What books are not accepted",
    "donateBooks.guidelines.promise": "Quality promise",

    // Volunteer
    "volunteer.title": "Volunteer / Get Involved",
    "volunteer.description": "Join the community effort. Choose how you can help every skill matters.",
    "volunteer.form.title": "Volunteer sign-up",

    // Donate Money
    "donateMoney.title": "Donate Money (Official)",
    "donateMoney.description": "Money donations are made through the official Rebuilding Sri Lanka portal.",
    "donateMoney.helps.title": "Why money helps",

    // Updates
    "updates.title": "Updates / Transparency",
    "updates.description": "Timeline, photos, and proof—shared openly to build trust.",
    "updates.timeline": "Timeline",
    "updates.roadmap.title": "Timeline & roadmap",
    "updates.roadmap.subtitle": "A clear view of what’s completed, what’s ongoing, and what’s next.",
    "updates.activity.title": "Live activity feed",
    "updates.activity.subtitle": "Short, dated entries so partners and donors can follow progress.",
    "updates.transparency.title": "Transparency gallery",
    "updates.transparency.subtitle": "Real photos with simple captions — collection, sorting, meetings, and deliveries.",
    "updates.status.completed": "Completed",
    "updates.status.ongoing": "Ongoing",
    "updates.status.planned": "Upcoming",
    "updates.gallery": "Photo gallery",
    "updates.proof": "Proof of delivery",
    "updates.report": "Downloadable report",
    "updates.report.soon": "Report coming soon.",

    // Contact
    "contact.title": "Contact Us",
    "contact.description": "Send a message, or reach us via WhatsApp/email. Social links can be added here.",
    "contact.whatsapp": "WhatsApp",
    "contact.map": "Map",
    "contact.faq": "FAQ",

    // Footer
    "footer.tag": "Community-powered education support for Sri Lanka.",
    "footer.links": "Links",
    "footer.privacy": "Privacy Policy",

    // Back-compat keys used in older pages
    "nav.about": "About",
    "nav.donateFunds": "Donate Funds",
    "nav.how": "How It Works",
    "nav.impact": "Impact",
    "cta.donateBooks": "Donate Books",
    "cta.donateFunds": "Donate Funds (Official)",
    "cta.volunteer": "Volunteer",
    "trust.official": "Official Government Website",
    "trust.secure": "Secure & Transparent Donations",
  },
  si: {
    "app.name": "EduNation Sri Lanka",
    "nav.home": "මුල් පිටුව",
    "nav.donateBooks": "පොත් පරිත්‍යාග",
    "nav.donateMoney": "මුදල් පරිත්‍යාග (නිල)",
    "nav.updates": "යාවත්කාලීන",
    "nav.volunteer": "ස්වේච්ඡා",
    "nav.contact": "සම්බන්ධතා",

    // Home
    "home.hero.title": "EduNation Sri Lanka",
    "home.hero.subtitle": "පාසල් පුස්තකාලයක් ගොඩනැගීම. ශ්‍රී ලංකාව පුරා පොත් එකතු කිරීම.",
    "home.cta.primary": "පොත් පරිත්‍යාග කරන්න",
    "home.cta.secondary": "ස්වේච්ඡා වන්න",
    "home.cta.official": "මුදල් පරිත්‍යාග (නිල)",
    "home.trust.transparent": "පාරදර්ශී යාවත්කාලීන",
    "home.trust.photos": "ඡායාරූප සහ භාරදීමේ සාක්ෂි",
    "home.trust.community": "ප්‍රජා විසින් නායකත්වය",
    "home.how.title": "කෙසේද ක්‍රියා කරන්නේ",
    "home.how.step1": "ඔබ පොත් පරිත්‍යාග කරයි / පොරොන්දු වේ",
    "home.how.step2": "අපි එකතු කර වර්ග කරමු",
    "home.how.step3": "පුස්තකාලය සකස් කර පාසලට භාර දෙමු",
    "home.stats.pledged": "පොරොන්දු කළ පොත්",
    "home.stats.collected": "එකතු කළ පොත්",
    "home.stats.schools": "සහාය කළ පාසල්",
    "home.stats.volunteers": "එකතු වූ ස්වේච්ඡා",
    "home.featured.title": "නවතම යාවත්කාලීනය",
    "home.featured.cta": "සියලු යාවත්කාලීන →",
    "home.strip.title": "EduNation Sri Lanka සමඟ එකතු වන්න, අදම පොතක් පරිත්‍යාග කරන්න.",
    "home.strip.cta": "පොත් පරිත්‍යාග",

    // Donate Books
    "donateBooks.title": "පොත් පරිත්‍යාග",
    "donateBooks.description": "නව/පාවිච්චි කළ පොත් පරිත්‍යාග කිරීමට ලියාපදිංචි වන්න. අපි එකතු කිරීම/භාරදීම සම්බන්ධ කර ගන්නෙමු.",
    "donateBooks.form.title": "පොත් පරිත්‍යාග පොරොන්දුව",
    "donateBooks.form.consent": "එකතු කිරීම/භාරදීම සම්බන්ධයෙන් මා සම්බන්ධ කර ගැනීමට එකඟ වෙමි",
    "donateBooks.success.title": "ස්තුතියි!",
    "donateBooks.success.body": "අපි ඉක්මනින් ඔබව සම්බන්ධ කරගන්නෙමු.",
    "donateBooks.success.share": "WhatsApp හරහා බෙදාගන්න",
    "donateBooks.success.again": "නැවත යොමු කරන්න",
    "donateBooks.guidelines.title": "මාර්ගෝපදේශ",
    "donateBooks.guidelines.accepted": "පිළිගන්නා පොත්",
    "donateBooks.guidelines.notAccepted": "පිළි නොගන්නා පොත්",
    "donateBooks.guidelines.promise": "ගුණාත්මකත්ව පොරොන්දුව",

    // Volunteer
    "volunteer.title": "ස්වේච්ඡා / සම්බන්ධ වන්න",
    "volunteer.description": "ප්‍රජා උත්සාහයට එකතු වන්න. ඔබට උදව් කළ හැකි ආකාරය තෝරන්න.",
    "volunteer.form.title": "ස්වේච්ඡා ලියාපදිංචිය",

    // Donate Money
    "donateMoney.title": "මුදල් පරිත්‍යාග (නිල)",
    "donateMoney.description": "මුදල් පරිත්‍යාගය නිල Rebuilding Sri Lanka පෝර්ටලය හරහා සිදු කෙරේ.",
    "donateMoney.helps.title": "මුදල් ඇයි වැදගත්ද",

    // Updates
    "updates.title": "යාවත්කාලීන / පාරදර්ශිතාව",
    "updates.description": "කාලරේඛාව, ඡායාරූප, සහ භාරදීමේ සාක්ෂි — විශ්වාසය ගොඩනැගීමට.",
    "updates.timeline": "කාලරේඛාව",
    "updates.gallery": "ඡායාරූප ගැලරිය",
    "updates.proof": "භාරදීමේ සාක්ෂි",
    "updates.report": "වාර්තාව",
    "updates.report.soon": "වාර්තාව ඉක්මනින්.",

    // Contact
    "contact.title": "සම්බන්ධ වන්න",
    "contact.description": "පණිවිඩයක් යවන්න හෝ WhatsApp/Email මගින් සම්බන්ධ වන්න.",
    "contact.whatsapp": "WhatsApp",
    "contact.map": "සිතියම",
    "contact.faq": "ප්‍රශ්න හා පිළිතුරු",

    // Footer
    "footer.tag": "ශ්‍රී ලංකාවේ අධ්‍යාපනය සඳහා ප්‍රජා සහාය.",
    "footer.links": "සබැඳි",
    "footer.privacy": "රහස්‍යතා ප්‍රතිපත්තිය",

    // Back-compat keys
    "nav.about": "ව්‍යාපෘතිය ගැන",
    "nav.donateFunds": "මුදල් පරිත්‍යාග",
    "nav.how": "ක්‍රියාවලිය",
    "nav.impact": "ප්‍රභාවය",
    "cta.donateBooks": "පොත් පරිත්‍යාග කරන්න",
    "cta.donateFunds": "මුදල් පරිත්‍යාග (නිල)",
    "cta.volunteer": "ස්වේච්ඡා වන්න",
    "trust.official": "නිල රාජ්‍ය වෙබ් අඩවිය",
    "trust.secure": "ආරක්ෂිත හා පාරදර්ශී පරිත්‍යාග",
  },
  ta: {
    "app.name": "EduNation Sri Lanka",
    "nav.home": "முகப்பு",
    "nav.donateBooks": "புத்தக நன்கொடை",
    "nav.donateMoney": "பணம் நன்கொடை (அதிகாரம்)",
    "nav.updates": "புதுப்பிப்புகள்",
    "nav.volunteer": "தன்னார்வம்",
    "nav.contact": "தொடர்பு",

    // Home
    "home.hero.title": "EduNation Sri Lanka",
    "home.hero.subtitle": "ஒரு பள்ளி நூலகத்தை உருவாக்குவது. இலங்கை முழுவதும் புத்தகங்களை சேகரிப்பது.",
    "home.cta.primary": "புத்தக நன்கொடை",
    "home.cta.secondary": "தன்னார்வம்",
    "home.cta.official": "பணம் நன்கொடை (அதிகாரம்)",
    "home.trust.transparent": "வெளிப்படையான புதுப்பிப்புகள்",
    "home.trust.photos": "புகைப்படங்கள் & வழங்கல் சான்றுகள்",
    "home.trust.community": "சமூக முன்னெடுப்பு",
    "home.how.title": "எப்படி செயல்படுகிறது",
    "home.how.step1": "நீங்கள் புத்தகங்களை நன்கொடையளிக்கிறீர்கள்",
    "home.how.step2": "நாங்கள் சேகரித்து வகைப்படுத்துகிறோம்",
    "home.how.step3": "நூலகத்தை அமைத்து வழங்குகிறோம்",
    "home.stats.pledged": "உறுதிப்படுத்தப்பட்ட புத்தகங்கள்",
    "home.stats.collected": "சேகரிக்கப்பட்ட புத்தகங்கள்",
    "home.stats.schools": "ஆதரிக்கப்பட்ட பள்ளிகள்",
    "home.stats.volunteers": "சேர்ந்த தன்னார்வலர்கள்",
    "home.featured.title": "சமீபத்திய புதுப்பிப்பு",
    "home.featured.cta": "அனைத்து புதுப்பிப்புகள் →",
    "home.strip.title": "EduNation Sri Lanka-இல் பங்கேளுங்கள், இன்று ஒரு புத்தகம் நன்கொடையளியுங்கள்.",
    "home.strip.cta": "புத்தக நன்கொடை",

    // Donate Books
    "donateBooks.title": "புத்தக நன்கொடை",
    "donateBooks.description": "புதிய/பயன்படுத்திய புத்தகங்களை உறுதிப்படுத்துங்கள். சேகரிப்பு/வழங்கல் குறித்து நாங்கள் தொடர்பு கொள்வோம்.",
    "donateBooks.form.title": "புத்தக நன்கொடை உறுதிப்பாடு",
    "donateBooks.form.consent": "சேகரிப்பு/வழங்கல் ஒருங்கிணைப்பிற்காக என்னை தொடர்பு கொள்ள ஒப்புக்கொள்கிறேன்",
    "donateBooks.success.title": "நன்றி!",
    "donateBooks.success.body": "நாங்கள் விரைவில் தொடர்பு கொள்வோம்.",
    "donateBooks.success.share": "WhatsApp-ல் பகிரவும்",
    "donateBooks.success.again": "மீண்டும் சமர்ப்பிக்கவும்",
    "donateBooks.guidelines.title": "வழிகாட்டல்கள்",
    "donateBooks.guidelines.accepted": "ஏற்கப்படும் புத்தகங்கள்",
    "donateBooks.guidelines.notAccepted": "ஏற்கப்படாத புத்தகங்கள்",
    "donateBooks.guidelines.promise": "தர உறுதி",

    // Volunteer
    "volunteer.title": "தன்னார்வம் / பங்கேற்க",
    "volunteer.description": "சமூக முயற்சியில் இணையுங்கள். உதவக்கூடிய வழியைத் தேர்ந்தெடுக்கவும்.",
    "volunteer.form.title": "தன்னார்வ பதிவு",

    // Donate Money
    "donateMoney.title": "பணம் நன்கொடை (அதிகாரம்)",
    "donateMoney.description": "பணம் நன்கொடைகள் அதிகாரப்பூர்வ Rebuilding Sri Lanka தளத்தின் மூலம் செய்யப்படும்.",
    "donateMoney.helps.title": "பணம் ஏன் உதவுகிறது",

    // Updates
    "updates.title": "புதுப்பிப்புகள் / வெளிப்படைத்தன்மை",
    "updates.description": "காலவரிசை, புகைப்படங்கள், வழங்கல் சான்றுகள் — நம்பிக்கைக்காக.",
    "updates.timeline": "காலவரிசை",
    "updates.gallery": "புகைப்படக் காட்சியகம்",
    "updates.proof": "வழங்கல் சான்றுகள்",
    "updates.report": "அறிக்கை",
    "updates.report.soon": "அறிக்கை விரைவில்.",

    // Contact
    "contact.title": "தொடர்பு",
    "contact.description": "செய்தி அனுப்பவும் அல்லது WhatsApp/Email மூலம் தொடர்பு கொள்ளவும்.",
    "contact.whatsapp": "WhatsApp",
    "contact.map": "வரைபடம்",
    "contact.faq": "அடிக்கடி கேட்கப்படும் கேள்விகள்",

    // Footer
    "footer.tag": "இலங்கைக்கான சமூக ஆதார கல்வி ஆதரவு.",
    "footer.links": "இணைப்புகள்",
    "footer.privacy": "தனியுரிமை கொள்கை",

    // Back-compat keys
    "nav.about": "திட்டம் பற்றி",
    "nav.donateFunds": "நிதி நன்கொடை",
    "nav.how": "எப்படி செயல்படுகிறது",
    "nav.impact": "தாக்கம்",
    "cta.donateBooks": "புத்தகங்களை நன்கொடையளிக்க",
    "cta.donateFunds": "நிதி நன்கொடை (அதிகாரம்)",
    "cta.volunteer": "தன்னார்வமாக",
    "trust.official": "அதிகாரப்பூர்வ அரசு வலைத்தளம்",
    "trust.secure": "பாதுகாப்பான & வெளிப்படையான நன்கொடைகள்",
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

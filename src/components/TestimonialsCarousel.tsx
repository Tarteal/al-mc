import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Testimonial = {
  name: { en: string; ar: string };
  country: { en: string; ar: string };
  feedback: { en: string; ar: string };
};

const testimonials: Testimonial[] = [
  {
    name: { en: "Ahmed Hassan", ar: "أحمد حسن" },
    country: { en: "United Kingdom", ar: "المملكة المتحدة" },
    feedback: {
      en: "Al Mustafa Caravan made our Hajj truly unforgettable. The accommodations were just steps from the Haram and the scholars guided us through every rite with patience and wisdom.",
      ar: "جعلت قافلة المصطفى حجّنا تجربة لا تُنسى. كانت الإقامة على بعد خطوات من الحرم، ورافقنا العلماء في كل منسك بصبر وحكمة.",
    },
  },
  {
    name: { en: "Fatima Al-Zahra", ar: "فاطمة الزهراء" },
    country: { en: "Canada", ar: "كندا" },
    feedback: {
      en: "From the visa process to the return flight, every detail was handled with care. Our Umrah felt peaceful, organized, and deeply spiritual.",
      ar: "من إجراءات التأشيرة وحتى رحلة العودة، كل تفصيل عُني به بإتقان. كانت عمرتنا هادئة ومنظّمة وعميقة الروحانية.",
    },
  },
  {
    name: { en: "Mohammed Reza", ar: "محمد رضا" },
    country: { en: "Australia", ar: "أستراليا" },
    feedback: {
      en: "Our Ziyarah to Karbala and Najaf was the journey of a lifetime. The guide's knowledge brought every shrine to life. Highly recommended.",
      ar: "كانت زيارتنا لكربلاء والنجف رحلة العمر. علم المرشد أضفى على كل ضريح حياةً. أنصح بهم بشدة.",
    },
  },
  {
    name: { en: "Aisha Khan", ar: "عائشة خان" },
    country: { en: "United States", ar: "الولايات المتحدة" },
    feedback: {
      en: "I traveled with my elderly mother, and the team's attention to her needs was extraordinary. Truly an honored responsibility, as they promise.",
      ar: "سافرت برفقة والدتي المسنّة، وكانت عناية الفريق بها استثنائية. أمانة مشرّفة بحقّ كما يَعِدون.",
    },
  },
  {
    name: { en: "Yusuf Ibrahim", ar: "يوسف إبراهيم" },
    country: { en: "Malaysia", ar: "ماليزيا" },
    feedback: {
      en: "Premium service at a fair price. The hotels, transport, and meals all exceeded expectations. We will travel with them again, in sha Allah.",
      ar: "خدمة راقية بسعر منصف. الفنادق والتنقلات والوجبات فاقت توقعاتنا. سنسافر معهم مجدداً إن شاء الله.",
    },
  },
];

export function TestimonialsCarousel() {
  const { lang } = useI18n();
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setI((n) => (n - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((n) => (n + 1) % testimonials.length);
  const t = testimonials[i];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="relative rounded-3xl bg-card p-8 shadow-lg sm:p-12">
        <Quote className="absolute -top-4 start-8 h-10 w-10 rounded-full bg-primary p-2 text-primary-foreground" />
        <div className="flex justify-center gap-1 text-primary">
          {Array.from({ length: 5 }).map((_, k) => (
            <Star key={k} size={18} fill="currentColor" />
          ))}
        </div>
        <p className="mt-6 text-center text-lg leading-relaxed text-foreground/85 sm:text-xl">
          "{t.feedback[lang]}"
        </p>
        <div className="mt-6 text-center">
          <p className="font-display text-xl text-foreground">{t.name[lang]}</p>
          <p className="text-sm text-muted-foreground">{t.country[lang]}</p>
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute start-0 top-1/2 -translate-y-1/2 -translate-x-2 rounded-full bg-background p-2 shadow-md transition hover:bg-primary hover:text-primary-foreground rtl:translate-x-2"
      >
        <ChevronLeft className="rtl:rotate-180" />
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute end-0 top-1/2 -translate-y-1/2 translate-x-2 rounded-full bg-background p-2 shadow-md transition hover:bg-primary hover:text-primary-foreground rtl:-translate-x-2"
      >
        <ChevronRight className="rtl:rotate-180" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, k) => (
          <button
            key={k}
            onClick={() => setI(k)}
            aria-label={`Go to testimonial ${k + 1}`}
            className={`h-2 rounded-full transition-all ${
              k === i ? "w-8 bg-primary" : "w-2 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

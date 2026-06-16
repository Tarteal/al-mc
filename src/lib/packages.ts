import type { Lang } from "./i18n";

export type Package = {
  id: string;
  name: { en: string; ar: string };
  duration: { en: string; ar: string };
  hotel: { en: string; ar: string };
  price: number; // USD
  popular?: boolean;
  includes: { en: string[]; ar: string[] };
};

export const hajjPackages: Package[] = [
  {
    id: "hajj-economy",
    name: { en: "Economy Hajj", ar: "حج اقتصادي" },
    duration: { en: "28 days", ar: "٢٨ يوماً" },
    hotel: { en: "4★ · 1.5 km from Haram", ar: "٤ نجوم · ١٫٥ كم من الحرم" },
    price: 6500,
    includes: {
      en: [
        "Round-trip economy flights",
        "Hajj visa & processing",
        "Shared room (quad occupancy)",
        "Daily breakfast & dinner",
        "Air-conditioned Mina tents",
        "Group transport in Saudi Arabia",
        "Experienced scholar group leader",
      ],
      ar: [
        "تذاكر طيران ذهاباً وإياباً",
        "تأشيرة الحج وإجراءاتها",
        "غرفة مشتركة (٤ أشخاص)",
        "فطور وعشاء يومياً",
        "خيام مكيّفة في منى",
        "تنقلات جماعية داخل السعودية",
        "مرشد عالم متمرّس",
      ],
    },
  },
  {
    id: "hajj-premium",
    name: { en: "Premium Hajj", ar: "حج مميّز" },
    duration: { en: "24 days", ar: "٢٤ يوماً" },
    hotel: { en: "5★ · 400 m from Haram", ar: "٥ نجوم · ٤٠٠ م من الحرم" },
    price: 9800,
    popular: true,
    includes: {
      en: [
        "Round-trip premium economy flights",
        "Hajj visa & full processing",
        "Triple occupancy rooms",
        "Full board (3 meals daily)",
        "Upgraded Mina camp (Aziziya VIP)",
        "Private coach transfers",
        "Ziyarat tours in Makkah & Madinah",
        "Dedicated scholar & guide",
      ],
      ar: [
        "تذاكر درجة بريميوم ذهاباً وإياباً",
        "تأشيرة الحج وكافة الإجراءات",
        "غرفة ثلاثية",
        "إقامة كاملة (٣ وجبات يومياً)",
        "مخيم منى المحسّن (عزيزية VIP)",
        "تنقلات بحافلات خاصة",
        "جولات زيارات في مكة والمدينة",
        "مرشد علمي مختص",
      ],
    },
  },
  {
    id: "hajj-vip",
    name: { en: "VIP Hajj", ar: "حج VIP" },
    duration: { en: "21 days", ar: "٢١ يوماً" },
    hotel: { en: "5★ · Adjacent to Haram", ar: "٥ نجوم · مجاور للحرم" },
    price: 14500,
    includes: {
      en: [
        "Round-trip business class flights",
        "Expedited Hajj visa",
        "Double occupancy luxury rooms",
        "Full board, gourmet menu",
        "Private VIP Mina suites",
        "Private SUV transfers",
        "Exclusive Ziyarat with scholar",
        "Personal concierge support 24/7",
      ],
      ar: [
        "تذاكر درجة رجال الأعمال",
        "تأشيرة حج مستعجلة",
        "غرفة ثنائية فاخرة",
        "إقامة كاملة بقائمة راقية",
        "أجنحة VIP خاصة في منى",
        "تنقلات SUV خاصة",
        "زيارات حصرية مع عالم",
        "خدمة كونسيرج خاصة على مدار الساعة",
      ],
    },
  },
];

export const umrahPackages: Package[] = [
  {
    id: "umrah-standard",
    name: { en: "Standard Umrah", ar: "عمرة قياسية" },
    duration: { en: "10 days", ar: "١٠ أيام" },
    hotel: { en: "4★ · 800 m from Haram", ar: "٤ نجوم · ٨٠٠ م من الحرم" },
    price: 1650,
    includes: {
      en: [
        "Round-trip economy flights",
        "Umrah visa",
        "Triple occupancy rooms",
        "Daily breakfast",
        "Airport & city transfers",
        "Madinah Ziyarat tour",
      ],
      ar: [
        "تذاكر طيران ذهاباً وإياباً",
        "تأشيرة العمرة",
        "غرفة ثلاثية",
        "فطور يومي",
        "تنقلات من وإلى المطار",
        "جولة زيارات في المدينة",
      ],
    },
  },
  {
    id: "umrah-deluxe",
    name: { en: "Deluxe Umrah", ar: "عمرة ديلوكس" },
    duration: { en: "12 days", ar: "١٢ يوماً" },
    hotel: { en: "5★ · 300 m from Haram", ar: "٥ نجوم · ٣٠٠ م من الحرم" },
    price: 2400,
    popular: true,
    includes: {
      en: [
        "Round-trip economy flights",
        "Umrah visa & processing",
        "Double occupancy rooms",
        "Breakfast & dinner daily",
        "Private coach transfers",
        "Makkah & Madinah Ziyarat tours",
        "Group leader with scholar",
      ],
      ar: [
        "تذاكر طيران ذهاباً وإياباً",
        "تأشيرة العمرة وإجراءاتها",
        "غرفة ثنائية",
        "فطور وعشاء يومياً",
        "تنقلات بحافلات خاصة",
        "زيارات في مكة والمدينة",
        "مرشد عالم مرافق",
      ],
    },
  },
  {
    id: "umrah-luxury",
    name: { en: "Luxury Umrah", ar: "عمرة فاخرة" },
    duration: { en: "14 days", ar: "١٤ يوماً" },
    hotel: { en: "5★ · Haram-view suite", ar: "٥ نجوم · جناح بإطلالة على الحرم" },
    price: 3500,
    includes: {
      en: [
        "Round-trip business class flights",
        "Express Umrah visa",
        "Haram-view suite",
        "Full board, premium dining",
        "Private SUV transfers",
        "Exclusive Ziyarat tours",
        "Personal concierge support",
      ],
      ar: [
        "تذاكر درجة رجال الأعمال",
        "تأشيرة عمرة سريعة",
        "جناح بإطلالة على الحرم",
        "إقامة كاملة بمطاعم راقية",
        "تنقلات SUV خاصة",
        "زيارات حصرية",
        "خدمة كونسيرج خاصة",
      ],
    },
  },
];

export const ziyarahPackages: Package[] = [
  {
    id: "ziyarah-standard",
    name: { en: "Standard Iraq Ziyarah", ar: "زيارة العراق القياسية" },
    duration: { en: "7 days", ar: "٧ أيام" },
    hotel: { en: "3★ · Near shrines", ar: "٣ نجوم · قرب الأضرحة" },
    price: 1450,
    includes: {
      en: [
        "Round-trip economy flights",
        "Iraq visa processing",
        "Najaf, Karbala, Kadhimiya, Samarra",
        "Triple occupancy rooms",
        "Daily breakfast",
        "Air-conditioned coach transport",
        "Scholar guide throughout",
      ],
      ar: [
        "تذاكر طيران ذهاباً وإياباً",
        "إجراءات التأشيرة العراقية",
        "النجف وكربلاء والكاظمية وسامراء",
        "غرفة ثلاثية",
        "فطور يومي",
        "تنقلات بحافلات مكيّفة",
        "مرشد عالم طوال الرحلة",
      ],
    },
  },
  {
    id: "ziyarah-premium",
    name: { en: "Premium Iraq Ziyarah", ar: "زيارة العراق المميّزة" },
    duration: { en: "9 days", ar: "٩ أيام" },
    hotel: { en: "4★ · Walking distance to shrine", ar: "٤ نجوم · على مسافة المشي" },
    price: 2100,
    popular: true,
    includes: {
      en: [
        "Round-trip economy flights",
        "Iraq visa & processing",
        "Double occupancy rooms",
        "Breakfast & dinner daily",
        "All four holy cities",
        "Private coach transfers",
        "Dedicated scholar guide",
        "Group ziyarat ceremonies",
      ],
      ar: [
        "تذاكر طيران ذهاباً وإياباً",
        "تأشيرة عراقية وإجراءاتها",
        "غرفة ثنائية",
        "فطور وعشاء يومياً",
        "جميع المدن المقدسة الأربع",
        "تنقلات بحافلات خاصة",
        "مرشد عالم مختص",
        "مراسم زيارة جماعية",
      ],
    },
  },
  {
    id: "ziyarah-vip",
    name: { en: "VIP Ziyarah + Iran Extension", ar: "زيارة VIP + امتداد إيران" },
    duration: { en: "12 days", ar: "١٢ يوماً" },
    hotel: { en: "5★ · Shrine-view suite", ar: "٥ نجوم · جناح بإطلالة على الضريح" },
    price: 2950,
    includes: {
      en: [
        "Round-trip business class flights",
        "Iraq + Iran visa coordination",
        "Mashhad (Imam Reza) extension",
        "Double occupancy luxury suites",
        "Full board fine dining",
        "Private SUV transfers",
        "Personal scholar companion",
        "24/7 concierge service",
      ],
      ar: [
        "تذاكر درجة رجال الأعمال",
        "تنسيق تأشيرة العراق وإيران",
        "امتداد مشهد (الإمام الرضا)",
        "أجنحة فاخرة ثنائية",
        "إقامة كاملة بمطاعم راقية",
        "تنقلات SUV خاصة",
        "عالم مرافق شخصي",
        "خدمة كونسيرج على مدار الساعة",
      ],
    },
  },
];

export function localized<T>(obj: { en: T; ar: T }, lang: Lang): T {
  return obj[lang];
}

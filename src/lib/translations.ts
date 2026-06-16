export const translations = {
  en: {
    brand: "Al Mustafa Caravan",
    nav_home: "Home",
    nav_hajj: "Hajj",
    nav_umrah: "Umrah",
    nav_ziyarah: "Ziyarah",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact",
    lang_toggle: "عربي",

    hero_title: "Where Spiritual Dreams Become Reality",
    hero_subtitle: "Your Sacred Journey, Our Honored Responsibility",
    hero_cta: "Learn More",

    home_hajj_title: "Hajj Packages",
    home_hajj_desc:
      "Fulfill the fifth pillar with carefully planned itineraries, premium accommodations near the Haram, and experienced scholars guiding every rite.",
    home_hajj_cta: "Explore Hajj",

    home_umrah_title: "Umrah Packages",
    home_umrah_desc:
      "Year-round Umrah journeys with comfortable hotels, smooth transfers, and a serene experience for you and your family.",
    home_umrah_cta: "Explore Umrah",

    home_ziyarah_title: "Ziyarah Tours",
    home_ziyarah_desc:
      "Visit the blessed shrines of Najaf, Karbala, Kadhimiya, and Samarra with knowledgeable guides and warm hospitality throughout.",
    home_ziyarah_cta: "Explore Ziyarah",

    packages_title: "Choose Your Package",
    packages_subtitle: "Tailored tiers crafted for every pilgrim",
    from: "From",
    per_person: "per person",
    duration: "Duration",
    hotel: "Hotel",
    includes: "Includes",
    book_whatsapp: "Book on WhatsApp",
    popular: "Most Popular",

    hajj_page_title: "Hajj Packages",
    hajj_page_subtitle: "Sacred journeys to fulfill the pilgrimage of a lifetime",
    umrah_page_title: "Umrah Packages",
    umrah_page_subtitle: "Year-round spiritual journeys to the House of Allah",
    ziyarah_page_title: "Ziyarah Tours",
    ziyarah_page_subtitle: "Heartfelt visits to the holy shrines of Iraq",

    testimonials_title: "Voices of Our Pilgrims",
    testimonials_subtitle: "Stories from those who journeyed with us",

    contact_title: "Contact Us",
    contact_subtitle: "Reach out and we'll guide you through every step of your journey",
    form_name: "Full Name",
    form_email: "Email",
    form_phone: "Phone Number",
    form_service: "Service",
    form_message: "Message",
    form_submit: "Send via WhatsApp",
    select_service: "Select a service",
    contact_phone: "Phone",
    contact_email: "Email",
    contact_location: "Location",
    our_address: "Office Address",

    footer_rights: "All rights reserved.",
    footer_tagline: "Honored to serve pilgrims on the path of the Beloved.",
  },
  ar: {
    brand: "قافلة المصطفى",
    nav_home: "الرئيسية",
    nav_hajj: "الحج",
    nav_umrah: "العمرة",
    nav_ziyarah: "الزيارات",
    nav_testimonials: "آراء الحجاج",
    nav_contact: "اتصل بنا",
    lang_toggle: "EN",

    hero_title: "حيث تتحقق الأحلام الروحية",
    hero_subtitle: "رحلتكم المقدسة، أمانتنا المشرّفة",
    hero_cta: "اعرف المزيد",

    home_hajj_title: "باقات الحج",
    home_hajj_desc:
      "أدِّ الركن الخامس ببرامج مدروسة، وإقامة فاخرة قرب الحرم، ومرشدين أفاضل يصحبونكم في كل منسك.",
    home_hajj_cta: "تصفّح الحج",

    home_umrah_title: "باقات العمرة",
    home_umrah_desc:
      "رحلات عمرة على مدار العام بإقامة مريحة وتنقّلات سلسة وتجربة هادئة لكم ولعائلتكم.",
    home_umrah_cta: "تصفّح العمرة",

    home_ziyarah_title: "رحلات الزيارة",
    home_ziyarah_desc:
      "زيارة الأضرحة المباركة في النجف وكربلاء والكاظمية وسامراء بصحبة مرشدين متمكّنين وضيافة كريمة.",
    home_ziyarah_cta: "تصفّح الزيارات",

    packages_title: "اختر باقتك",
    packages_subtitle: "باقات مصمّمة بعناية لكل حاج",
    from: "ابتداءً من",
    per_person: "للشخص الواحد",
    duration: "المدة",
    hotel: "الفندق",
    includes: "يشمل",
    book_whatsapp: "احجز عبر واتساب",
    popular: "الأكثر طلباً",

    hajj_page_title: "باقات الحج",
    hajj_page_subtitle: "رحلات مقدسة لأداء فريضة العمر",
    umrah_page_title: "باقات العمرة",
    umrah_page_subtitle: "رحلات روحانية على مدار العام إلى بيت الله الحرام",
    ziyarah_page_title: "رحلات الزيارة",
    ziyarah_page_subtitle: "زيارات صادقة إلى الأضرحة المقدسة في العراق",

    testimonials_title: "أصوات حجاجنا",
    testimonials_subtitle: "حكايات من الذين رافقونا في الرحلة",

    contact_title: "اتصل بنا",
    contact_subtitle: "تواصل معنا وسنرافقك في كل خطوة من رحلتك",
    form_name: "الاسم الكامل",
    form_email: "البريد الإلكتروني",
    form_phone: "رقم الهاتف",
    form_service: "الخدمة",
    form_message: "الرسالة",
    form_submit: "إرسال عبر واتساب",
    select_service: "اختر الخدمة",
    contact_phone: "الهاتف",
    contact_email: "البريد",
    contact_location: "العنوان",
    our_address: "عنوان المكتب",

    footer_rights: "جميع الحقوق محفوظة.",
    footer_tagline: "نتشرّف بخدمة الحجاج على درب الحبيب المصطفى.",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

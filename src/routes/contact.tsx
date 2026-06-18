import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Al Mustafa Caravan" },
      {
        name: "description",
        content:
          "Get in touch with Al Mustafa Caravan to plan your Hajj, Umrah, or Ziyarah. We respond personally to every inquiry.",
      },
      { property: "og:title", content: "Contact — Al Mustafa Caravan" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, lang } = useI18n();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines =
      lang === "ar"
        ? [
            "السلام عليكم,",
            `الاسم: ${form.name}`,
            `البريد: ${form.email}`,
            `الهاتف: ${form.phone}`,
            `الخدمة: ${form.service}`,
            `الرسالة: ${form.message}`,
          ]
        : [
            "Assalamu Alaikum,",
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Phone: ${form.phone}`,
            `Service: ${form.service}`,
            `Message: ${form.message}`,
          ];
    window.open(whatsappLink(lines.join("\n")), "_blank");
  };

  return (
    <Layout>
      <section className="bg-cream pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl text-foreground sm:text-5xl">
              {t("contact_title")}
            </h1>
            <p className="mt-3 text-muted-foreground">{t("contact_subtitle")}</p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            {/* Form */}
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label={t("form_name")}
                  required
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <Field
                  label={t("form_email")}
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
                <Field
                  label={t("form_phone")}
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                />
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium text-foreground">
                    {t("form_service")}
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="">{t("select_service")}</option>
                    <option value="Hajj">{t("nav_hajj")}</option>
                    <option value="Umrah">{t("nav_umrah")}</option>
                    <option value="Ziyarah">{t("nav_ziyarah")}</option>
                  </select>
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <label className="mb-1 text-sm font-medium text-foreground">
                  {t("form_message")}
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
              >
                <Send size={16} />
                {t("form_submit")}
              </button>
            </form>

            {/* Info */}
            <div className="space-y-6">
              <InfoRow icon={<Phone size={20} />} label={t("contact_phone")} value="+1 (313) 676-6662" />
              <InfoRow icon={<Mail size={20} />} label={t("contact_email")} value="info@almustafacaravan.com" />
              <InfoRow
                icon={<MapPin size={20} />}
                label={t("contact_location")}
                value="123 Pilgrim Way, City, Country"
              />
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1645911554007!2d39.82618!3d21.42250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b74c28d467%3A0xb2f543a618beaad!2sMasjid%20al-Haram!5e0!3m2!1sen!2s!4v1700000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  type = "text",
  required,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={255}
        className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
}

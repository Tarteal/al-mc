// Update this with the agency's real WhatsApp number (international format, no + or spaces)
export const WHATSAPP_NUMBER = "1234567890";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

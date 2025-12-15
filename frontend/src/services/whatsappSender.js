export function sendWhatsAppMessage(message) {
  const phone = "51997473711";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

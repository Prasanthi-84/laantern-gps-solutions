import { MessageCircle } from "lucide-react";

const WhatsAppFab = () => (
  <a
    href="https://wa.me/919182923352?text=Hi%2C%20I%20am%20interested%20in%20your%20products.%20Please%20share%20details."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-600 flex items-center justify-center shadow-lg hover:bg-green-700 hover:scale-110 transition-all"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-7 w-7 text-foreground" />
  </a>
);

export default WhatsAppFab;

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "919922957006";
    const message = encodeURIComponent(
        "Hello Asif ji, I reviewed the Razin Tooling Services capability dossier and would like to discuss a tooling / die proving / manpower requirement."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 btn btn--primary whitespace-nowrap"
            aria-label="WhatsApp Asif N Shaikh directly"
        >
            <MessageCircle size={20} aria-hidden="true" />
            <span>WhatsApp Asif</span>
        </a>
    );
}

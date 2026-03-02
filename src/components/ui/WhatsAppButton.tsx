import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "919922957006"; // Contact: Asif N Shaikh
    const message = encodeURIComponent("Hello! I'm interested in learning more about your Tooling & Manpower Services.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} />
            {/* Tooltip */}
            <span className="absolute right-16 px-3 py-1.5 bg-slate-800 text-white text-xs font-semibold rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                Chat with us
            </span>
        </a>
    );
}

import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/8924987442" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </Link>
  );
}

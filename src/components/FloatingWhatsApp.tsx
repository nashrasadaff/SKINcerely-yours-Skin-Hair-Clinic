import { WhatsApp } from "./Icons";
import { waLink } from "@/lib/clinic";

export default function FloatingWhatsApp() {
  return (
    <a
      className="wa-float"
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label="Chat with the clinic on WhatsApp"
    >
      <span className="wa-ping" aria-hidden="true" />
      <WhatsApp size={27} />
    </a>
  );
}

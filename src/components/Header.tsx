import Image from "next/image";
import { clinic } from "@/lib/clinic";

const links = [
  { href: "#about", label: "The Doctor" },
  { href: "#services", label: "Treatments" },
  { href: "#why", label: `Why ${clinic.name}` },
  { href: "#results", label: "Results" },
  { href: "#stories", label: "Stories" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label={`${clinic.nameFull}, home`}>
          <span className="brand-mark" style={{ overflow: "hidden" }} aria-hidden="true">
            <Image src="/logo.png" alt="" width={42} height={42} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </span>
          <span>
            {clinic.name}
            <small>{clinic.tagline}</small>
          </span>
        </a>

        {/* CSS-only mobile nav — no JavaScript needed */}
        <input type="checkbox" className="nav-check" id="navToggle" />
        <label className="nav-toggle" htmlFor="navToggle" aria-label="Toggle navigation menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </label>

        <nav className="nav-links" id="navLinks" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-primary nav-cta" href="#contact">
            Book a Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}

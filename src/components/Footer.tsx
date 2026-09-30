import Image from "next/image";
import { clinic, waLink } from "@/lib/clinic";

const treatments = [
  "Acne & acne scars",
  "Pigmentation & melasma",
  "Botox & fillers",
  "Laser hair reduction",
  "Hair fall & PRP",
  "Hair transplant consult",
];

const clinicLinks = [
  { href: "#about", label: clinic.doctor },
  { href: "#why", label: `Why ${clinic.name}` },
  { href: "#results", label: "Patient results" },
  { href: "#stories", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Book a consultation" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <svg className="divider" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" style={{ margin: 0, display: "block" }}>
        <path d="M0 0c240 70 480 70 720 40s480-60 720 6V0H0Z" fill="#EFEADE" />
      </svg>

      <div className="wrap footer-top">
        <div className="footer-about">
          <a className="brand" href="#top">
            <span className="brand-mark" style={{ overflow: "hidden" }} aria-hidden="true">
              <Image src="/logo.png" alt="" width={42} height={42} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </span>
            <span>
              {clinic.name}
              <small>{clinic.tagline}</small>
            </span>
          </a>
          <p>
            A private dermatology, dermatosurgery and hair restoration clinic in Malakpet,
            Hyderabad — led by {clinic.doctor}, {clinic.degrees}.
          </p>
          <div className="socials">
            <a href="#contact" aria-label={`${clinic.name} on Instagram`}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="5.5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" /></svg>
            </a>
            <a href="#contact" aria-label={`${clinic.name} on Facebook`}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9V7.2c0-.8.2-1.2 1.4-1.2H17V3h-2.6C11.3 3 10.3 4.5 10.3 7v2H8v3h2.3v9H14v-9h2.6l.4-3H14Z" /></svg>
            </a>
            <a href="#contact" aria-label={`${clinic.name} on YouTube`}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 8.2a3 3 0 0 0-2.1-2.1C18.6 5.6 12 5.6 12 5.6s-6.6 0-8.4.5A3 3 0 0 0 1.5 8.2 31 31 0 0 0 1 12a31 31 0 0 0 .5 3.8 3 3 0 0 0 2.1 2.1c1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-3.8ZM9.9 15.3V8.7l5.7 3.3-5.7 3.3Z" /></svg>
            </a>
            <a href={waLink()} aria-label={`${clinic.name} on WhatsApp`} target="_blank" rel="noopener">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2a.6.6 0 0 0 0-.6c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.2-.3-.3-.6-.4Z" /></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Treatments</h4>
          <ul>
            {treatments.map((t) => (
              <li key={t}>
                <a href="#services">{t}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Clinic</h4>
          <ul>
            {clinicLinks.map((l) => (
              <li key={l.href + l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Reach us</h4>
          <ul>
            <li>
              <a href={`tel:${clinic.phone}`}>{clinic.phoneDisplay}</a>
            </li>
            <li>
              <a href={`tel:${clinic.phone2}`}>{clinic.phone2Display}</a>
            </li>
            {clinic.email !== "" && (
              <li>
                <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
              </li>
            )}
            <li>
              <a href="#contact">
                New Malakpet, Malakpet,
                <br />
                Hyderabad 500036
              </a>
            </li>
            <li>
              <a href="#contact">Mon–Fri 5–8pm · Sat 11–1pm</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} {clinic.nameFull}. All rights reserved.</p>
        <ul>
          <li>
            <a href="#contact">Privacy policy</a>
          </li>
          <li>
            <a href="#contact">Terms of care</a>
          </li>
          <li>
            <a href="#faq">Patient consent</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

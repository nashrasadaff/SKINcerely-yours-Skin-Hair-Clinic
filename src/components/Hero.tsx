import { ArrowRight, Check, Star, Clock, WhatsApp } from "./Icons";
import { clinic, waLink } from "@/lib/clinic";

export default function Hero() {
  return (
    <section className="hero">
      <svg className="leaf-deco animate-drift" style={{ top: "6%", left: -40, width: 190 }} viewBox="0 0 200 200" aria-hidden="true">
        <path d="M100 10c60 20 80 90 40 140-40 50-100 30-120-20C0 80 40 -10 100 10Z" fill="#A7C1A8" opacity=".35" />
        <path d="M60 170C70 110 100 60 150 30" stroke="#4F6F52" strokeWidth="3" fill="none" opacity=".4" strokeLinecap="round" />
      </svg>
      <svg className="leaf-deco animate-sway" style={{ bottom: "4%", right: "2%", width: 150 }} viewBox="0 0 120 200" aria-hidden="true">
        <path d="M60 195C60 120 20 70 10 20c50 8 90 60 90 120 0 25-15 48-40 55Z" fill="#C97B5A" opacity=".22" />
        <path d="M60 195C60 130 80 80 110 45" stroke="#C97B5A" strokeWidth="3" fill="none" opacity=".35" strokeLinecap="round" />
      </svg>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 22c0-7 4-12 10-13.5C21.5 16 17.5 21 12 22Zm0 0C12 15 8 10 2 8.5 2.5 16 6.5 21 12 22Z" /></svg>
            {clinic.doctorTitles}
          </span>
          <h1>
            Skin that feels
            <br />
            <span className="accent">looked after,</span> not treated.
          </h1>
          <p className="lede">
            {clinic.name} is a calm, plant-lit clinic where medical dermatology, dermatosurgery and
            hair restoration meet unhurried care. Every plan — from a peel to a transplant — is
            written by hand by {clinic.doctor}, {clinic.degrees}. No packages, no pressure, no
            guesswork.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Book an Appointment
              <ArrowRight />
            </a>
            <a className="btn btn-terra" href={waLink()} target="_blank" rel="noopener">
              <WhatsApp size={16} />
              WhatsApp the clinic
            </a>
            <a className="btn btn-ghost" href="#services">
              Explore treatments
            </a>
          </div>

          <div className="hero-trust">
            <div>
              <strong>12,000+</strong>
              <span>Patients treated</span>
            </div>
            <div>
              <strong>4.9 ★</strong>
              <span>Google rating</span>
            </div>
            <div>
              <strong>14 yrs</strong>
              <span>Clinical practice</span>
            </div>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-blob animate-breathe">
            <div className="hb-inner">
              <svg className="hb-figure" viewBox="0 0 240 260" aria-hidden="true">
                <defs>
                  <linearGradient id="fg1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#C9DCC9" />
                    <stop offset="1" stopColor="#A7C1A8" />
                  </linearGradient>
                  <linearGradient id="fg2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#F0D9CD" />
                    <stop offset="1" stopColor="#E0B8A2" />
                  </linearGradient>
                </defs>
                <path d="M120 24c44 0 74 34 74 80 0 38-16 62-34 78-10 9-14 16-14 28v22H94v-24c0-12-5-19-15-28-19-17-33-40-33-76 0-46 30-80 74-80Z" fill="url(#fg1)" />
                <path d="M120 44c33 0 55 26 55 60 0 30-13 48-27 61-8 7-11 13-11 22H103c0-9-4-15-12-22-14-13-26-31-26-61 0-34 22-60 55-60Z" fill="#FBF8F1" opacity=".75" />
                <path d="M120 200c0-46 24-78 62-92-4 48-26 80-62 92Z" fill="url(#fg2)" opacity=".9" />
                <path d="M120 200c0-38-20-66-52-78 3 40 22 68 52 78Z" fill="#A7C1A8" opacity=".85" />
                <path d="M120 212v-58" stroke="#4F6F52" strokeWidth="4" strokeLinecap="round" />
                <circle cx="120" cy="140" r="7" fill="#C97B5A" />
                <path d="M74 232h92" stroke="#4F6F52" strokeWidth="5" strokeLinecap="round" opacity=".55" />
              </svg>
            </div>
          </div>

          <div className="hero-badge b1 animate-drift">
            <i aria-hidden="true"><Check /></i>
            US-FDA approved
            <br />
            devices
          </div>
          <div className="hero-badge b2 animate-drift-slow">
            <i aria-hidden="true"><Star size={17} /></i>
            4.9 from 1,840
            <br />
            Google reviews
          </div>
          <div className="hero-badge b3 animate-drift">
            <i aria-hidden="true"><Clock /></i>
            {clinic.hoursShort}
          </div>
        </div>
      </div>
    </section>
  );
}

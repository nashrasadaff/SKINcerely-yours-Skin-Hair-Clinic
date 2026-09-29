import BookingForm from "./BookingForm";
import { Phone, Mail, Pin, Clock, WhatsApp } from "./Icons";
import { clinic, waLink } from "@/lib/clinic";

export default function Contact() {
  return (
    <section className="contact section" id="contact" style={{ paddingTop: "clamp(2rem,3vw,3.5rem)" }}>
      <svg className="blob-deco" style={{ bottom: "-15%", left: "-12%", width: 480 }} viewBox="0 0 400 400" aria-hidden="true">
        <path d="M310 90c40 60 20 170-40 220s-160 30-210-30S30 110 90 60 270 30 310 90Z" fill="#C9DCC9" opacity=".5" />
      </svg>

      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 22s-8-5-8-11a8 8 0 1 1 16 0c0 6-8 11-8 11Z" /></svg>
            Visit us
          </span>
          <h2>Come sit in the green room.</h2>
          <p className="lede">Request an appointment and we&apos;ll confirm by phone within one working day.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Request an appointment</h3>
            <BookingForm />
          </div>

          <div style={{ display: "grid", gap: "clamp(1.2rem,2.5vw,2rem)", alignContent: "start" }}>
            <div className="contact-card">
              <h3>Clinic details</h3>
              <ul className="contact-list">
                <li>
                  <i aria-hidden="true"><Phone /></i>
                  <div>
                    <b>Call us</b>
                    <a href={`tel:${clinic.phone}`}>{clinic.phoneDisplay}</a>
                    <br />
                    <a href={`tel:${clinic.phone2}`}>{clinic.phone2Display}</a>
                  </div>
                </li>
                <li>
                  <i aria-hidden="true"><WhatsApp size={18} /></i>
                  <div>
                    <b>WhatsApp</b>
                    <a href={waLink()} target="_blank" rel="noopener">
                      {clinic.phoneDisplay}
                    </a>
                  </div>
                </li>
                {clinic.email !== "" && (
                  <li>
                    <i aria-hidden="true"><Mail /></i>
                    <div>
                      <b>Email</b>
                      <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
                    </div>
                  </li>
                )}
                <li>
                  <i aria-hidden="true"><Pin /></i>
                  <div>
                    <b>Clinic</b>
                    <p>
                      {clinic.address.split("\n").map((l, i) => (
                        <span key={i}>
                          {l}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </li>
                <li>
                  <i aria-hidden="true"><Clock /></i>
                  <div>
                    <b>Hours</b>
                    <p>
                      {clinic.hours.split("\n").map((l, i) => (
                        <span key={i}>
                          {l}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="map-mock">
              <svg className="mapbg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <rect width="400" height="300" fill="#D5E4D6" />
                <path d="M0 90h400M0 200h400M120 0v300M280 0v300" stroke="#FBF8F1" strokeWidth="10" opacity=".8" />
                <path d="M0 150c80-40 160 40 240 10s120-60 160-30" stroke="#A7C1A8" strokeWidth="16" fill="none" opacity=".7" />
                <circle cx="60" cy="50" r="22" fill="#B9D2BA" opacity=".8" />
                <circle cx="340" cy="250" r="30" fill="#B9D2BA" opacity=".7" />
                <rect x="140" y="110" width="50" height="40" rx="8" fill="#C9DCC9" />
                <rect x="300" y="110" width="60" height="50" rx="8" fill="#C9DCC9" />
                <rect x="20" y="215" width="70" height="45" rx="8" fill="#C9DCC9" />
              </svg>
              <div className="map-pin">
                <b>{clinic.nameFull}</b>
                <span>Near Bank of Baroda, Subedar Ameer Ali Khan Rd, Malakpet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

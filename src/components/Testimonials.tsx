import { Star, StarRow } from "./Icons";

const testimonials = [
  {
    initials: "MK",
    name: "Meera K.",
    tag: "Melasma · Indiranagar",
    quote:
      "I'd been through three clinics for melasma. Dr. Rao was the first to explain why it kept returning and to put sun behaviour before lasers. Eight months on, my face finally looks like one colour.",
  },
  {
    initials: "RS",
    name: "Rahul S.",
    tag: "Hair fall & PRP · HSR Layout",
    quote:
      "I came in convinced I needed a transplant. I was told to wait six months and try medical therapy first. That honesty saved me two lakhs — and my crown filled in anyway.",
  },
  {
    initials: "AD",
    name: "Anjali D.",
    tag: "Injectables · Koramangala",
    quote:
      "Botox that nobody noticed — which was exactly the brief. She treats one muscle at a time and asks you to come back in two weeks instead of overfilling on day one.",
  },
  {
    initials: "TN",
    name: "Tara N.",
    tag: "Laser hair reduction · Whitefield",
    quote:
      "Laser hair reduction on deep brown skin always scared me. The cooling, the patch test, the written settings — I felt informed rather than sold to. Six sessions and done.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section" id="stories">
      <svg className="leaf-deco animate-sway" style={{ top: "6%", left: "-2%", width: 130 }} viewBox="0 0 120 180" aria-hidden="true">
        <path d="M60 175C60 110 25 70 18 22c46 8 82 52 82 108 0 24-14 40-40 45Z" fill="#C97B5A" opacity=".2" />
      </svg>

      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 7h5v5c0 3-2 5-5 5V7Zm7 0h5v5c0 3-2 5-5 5V7Z" /></svg>
            Patient stories
          </span>
          <h2>Quiet wins, in their own words.</h2>
          <p className="lede">
            A few notes from the 1,840 reviews that add up to our 4.9 Google rating.
          </p>
        </div>

        <div className="t-grid">
          {testimonials.map((t) => (
            <figure className="tcard" key={t.name}>
              <StarRow />
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="tmeta">
                <span className="avatar" aria-hidden="true">
                  {t.initials}
                </span>
                <span>
                  <b>{t.name}</b>
                  <span>{t.tag}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="rating-banner">
          <div>
            <h3>Rated 4.9 by 1,840 patients</h3>
            <p>Consistently reviewed for honest advice, gentle technique and on-time appointments.</p>
          </div>
          <div className="rating-score">
            <span className="num">4.9</span>
            <div className="stars" style={{ color: "#F0D9CD" }} aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={20} />
              ))}
            </div>
            <a className="btn btn-light" href="#contact">
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

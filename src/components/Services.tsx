const services = [
  {
    title: "Acne & acne-scar care",
    body: "Medical-grade acne control followed by staged resurfacing for rolling, boxcar and ice-pick scars — sequenced so your barrier never breaks down.",
    tags: ["Peels", "Microneedling RF", "Subcision"],
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.9" fill="none" />
        <circle cx="9" cy="10" r="1.4" fill="currentColor" />
        <circle cx="15" cy="14" r="1.1" fill="currentColor" />
        <circle cx="14" cy="8.5" r="0.9" fill="currentColor" />
      </>
    ),
  },
  {
    title: "Pigmentation & melasma",
    body: "Indian-skin-safe protocols for melasma, sun damage and post-inflammatory marks, with photoprotection coaching that actually fits your day.",
    tags: ["Q-switch laser", "Cosmelan", "Oral therapy"],
    icon: (
      <>
        <path d="M12 3a9 9 0 1 0 9 9c0-2-1.5-2.5-3-2.5S15 8 15 6.5 13.8 3 12 3Z" stroke="currentColor" strokeWidth="1.9" fill="none" strokeLinecap="round" />
        <circle cx="8.5" cy="12" r="1.2" fill="currentColor" />
        <circle cx="12" cy="16" r="1.2" fill="currentColor" />
      </>
    ),
  },
  {
    title: "Anti-ageing, botox & fillers",
    body: "Conservative, expression-preserving injectables. We map your face at rest and in motion, then treat the minimum needed to look rested.",
    tags: ["Botulinum", "HA fillers", "Skin boosters"],
    icon: (
      <path d="M4 16c4-1 6-4 6-8M20 16c-4-1-6-4-6-8M6 20h12M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.9" fill="none" strokeLinecap="round" />
    ),
  },
  {
    title: "Laser hair reduction",
    body: "Triple-wavelength diode with contact cooling — comfortable on deeper skin tones, with a session plan that ends rather than renews forever.",
    tags: ["Diode", "Full body", "Face & neck"],
    icon: (
      <path d="M12 2v6M8.5 22h7l1-8h-9l1 8ZM9 5.5 12 8l3-2.5" stroke="currentColor" strokeWidth="1.9" fill="none" strokeLinecap="round" />
    ),
  },
  {
    title: "Hair fall & PRP therapy",
    body: "Trichoscopy and blood work first, then growth-factor PRP, mesotherapy or medical therapy. We photograph density every 8 weeks so progress is measurable.",
    tags: ["Trichoscopy", "PRP / GFC", "Mesotherapy"],
    icon: (
      <path d="M5 20c0-8 3-14 7-17M9 20c0-7 2.5-12 6-15M13 20c0-6 2-10 5-12" stroke="currentColor" strokeWidth="1.9" fill="none" strokeLinecap="round" />
    ),
  },
  {
    title: "Hair transplant consultation",
    body: "An honest graft-count assessment — including when not to transplant. You get donor mapping, a cost range and a medical plan to protect native hair.",
    tags: ["Donor mapping", "FUE planning", "Second opinion"],
    icon: (
      <>
        <path d="M4 9c4-5 12-5 16 0M7 13c3-3 7-3 10 0M12 21v-5" stroke="currentColor" strokeWidth="1.9" fill="none" strokeLinecap="round" />
        <circle cx="12" cy="15" r="1.4" fill="currentColor" />
      </>
    ),
  },
  {
    title: "Dermatosurgery & minor OT",
    body: "Day-care surgical dermatology under local anaesthesia in our sterile in-clinic OT: mole and cyst excision, ear-lobe repair, scar revision, nail and vitiligo surgeries.",
    tags: ["Excisions", "Scar revision", "Vitiligo surgery"],
    icon: (
      <>
        <path d="M6 4 18 20M18 4 6 20" stroke="currentColor" strokeWidth="1.9" fill="none" strokeLinecap="round" />
        <circle cx="9.5" cy="9.5" r="1.6" fill="currentColor" />
        <circle cx="14.5" cy="14.5" r="1.6" fill="currentColor" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <svg className="blob-deco" style={{ top: "-6%", left: "-12%", width: 520, opacity: 0.5 }} viewBox="0 0 400 400" aria-hidden="true">
        <path d="M320 80c40 60 30 160-30 210S140 360 80 310 10 160 60 100 280 20 320 80Z" fill="#C9DCC9" opacity=".45" />
      </svg>

      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2 14.5 9.5 22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z" /></svg>
            Treatments we grow with you
          </span>
          <h2>Seven focused pathways, one gentle philosophy.</h2>
          <p className="lede">
            We treat skin and scalp as living tissue — restore the barrier, then refine. Every
            pathway begins with diagnosis, not a device.
          </p>
        </div>

        <div className="service-grid">
          {services.map((s) => (
            <article className="pebble" key={s.title}>
              <div className="svc-icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24">{s.icon}</svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul className="svc-tags">
                {s.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

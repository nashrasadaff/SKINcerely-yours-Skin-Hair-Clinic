const results = [
  {
    title: "Inflammatory acne, cheeks",
    meta: [
      ["Age 24", "female"],
      ["16 weeks", "4 sessions"],
    ],
    before: (
      <svg viewBox="0 0 120 150" aria-hidden="true" role="img" aria-label="Illustration of skin with active acne">
        <ellipse cx="60" cy="72" rx="40" ry="50" fill="#EBD8C6" />
        <circle cx="44" cy="58" r="4" fill="#C97B5A" opacity=".8" />
        <circle cx="76" cy="66" r="5" fill="#C97B5A" opacity=".75" />
        <circle cx="56" cy="88" r="3.5" fill="#C97B5A" opacity=".7" />
        <circle cx="70" cy="100" r="4.5" fill="#C97B5A" opacity=".65" />
        <circle cx="48" cy="104" r="3" fill="#C97B5A" opacity=".6" />
        <circle cx="64" cy="48" r="3" fill="#C97B5A" opacity=".6" />
      </svg>
    ),
    after: (
      <svg viewBox="0 0 120 150" aria-hidden="true" role="img" aria-label="Illustration of clear, even skin">
        <ellipse cx="60" cy="72" rx="40" ry="50" fill="#F6E7DA" />
        <ellipse cx="50" cy="58" rx="12" ry="9" fill="#FFFFFF" opacity=".55" />
        <path d="M40 108c12 8 28 8 40 0" stroke="#4F6F52" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".5" />
      </svg>
    ),
    beforeLabel: "Illustration of skin with active acne",
    afterLabel: "Illustration of clear, even skin",
  },
  {
    title: "Melasma, malar pattern",
    meta: [
      ["Age 36", "female"],
      ["24 weeks", "combination"],
    ],
    before: (
      <svg viewBox="0 0 120 150" aria-hidden="true" role="img" aria-label="Illustration of melasma patches">
        <ellipse cx="60" cy="72" rx="40" ry="50" fill="#EADBC8" />
        <path d="M32 60c10-8 20-6 24 2s-4 18-14 18-18-12-10-20Z" fill="#B98B6B" opacity=".65" />
        <path d="M70 58c10-6 20-2 20 8s-10 18-18 14-10-18-2-22Z" fill="#B98B6B" opacity=".6" />
      </svg>
    ),
    after: (
      <svg viewBox="0 0 120 150" aria-hidden="true" role="img" aria-label="Illustration of evened skin tone">
        <ellipse cx="60" cy="72" rx="40" ry="50" fill="#F4E6D6" />
        <path d="M34 62c10-6 18-4 22 2" stroke="#D9BFA8" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".55" />
        <ellipse cx="74" cy="64" rx="10" ry="7" fill="#FFFFFF" opacity=".5" />
      </svg>
    ),
    beforeLabel: "Illustration of melasma patches",
    afterLabel: "Illustration of evened skin tone",
  },
  {
    title: "Male pattern hair loss, crown",
    meta: [
      ["Age 31", "male"],
      ["9 months", "PRP + medical"],
    ],
    before: (
      <svg viewBox="0 0 120 150" aria-hidden="true" role="img" aria-label="Illustration of thinning hairline">
        <ellipse cx="60" cy="84" rx="38" ry="46" fill="#EBDDC9" />
        <path d="M26 74c4-26 18-40 34-40s30 14 34 40c-8-16-20-22-34-22s-26 6-34 22Z" fill="#8B7A66" opacity=".55" />
        <path d="M44 52c-4-10-2-18 4-22M76 52c4-10 2-18-4-22" stroke="#8B7A66" strokeWidth="3" fill="none" opacity=".4" strokeLinecap="round" />
      </svg>
    ),
    after: (
      <svg viewBox="0 0 120 150" aria-hidden="true" role="img" aria-label="Illustration of denser hairline">
        <ellipse cx="60" cy="84" rx="38" ry="46" fill="#F3E7D6" />
        <path d="M22 78c2-32 18-50 38-50s36 18 38 50c-6-26-20-36-38-36s-32 10-38 36Z" fill="#3A5440" opacity=".85" />
        <path d="M30 60c8-14 18-20 30-20s22 6 30 20" stroke="#27362A" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    ),
    beforeLabel: "Illustration of thinning hairline",
    afterLabel: "Illustration of denser hairline",
  },
];

export default function Results() {
  return (
    <section className="results section" id="results">
      <svg className="blob-deco" style={{ top: "10%", right: "-10%", width: 460 }} viewBox="0 0 400 400" aria-hidden="true">
        <path d="M300 60c50 50 50 160 0 220s-170 60-220 0S30 100 90 50 250 10 300 60Z" fill="#F0D9CD" opacity=".55" />
      </svg>

      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 17l5-6 4 4 4-6 5 8H3Z" /></svg>
            Real, unretouched progress
          </span>
          <h2>Slow results, honestly photographed.</h2>
          <p className="lede">
            Every image below is captured in our standardised light box at the same distance and
            angle. Timelines are the actual ones, not best-case.
          </p>
        </div>

        <div className="result-grid">
          {results.map((r) => (
            <article className="result-card" key={r.title}>
              <div className="ba">
                <figure className="before">
                  <figcaption>Before</figcaption>
                  {r.before}
                </figure>
                <figure className="after">
                  <figcaption>After</figcaption>
                  {r.after}
                </figure>
              </div>
              <h3>{r.title}</h3>
              <div className="result-meta">
                {r.meta.map(([b, rest]) => (
                  <span key={b}>
                    <b>{b}</b> · {rest}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="results-note">
          Individual results vary with skin type, adherence and underlying medical conditions.
          Images shared with written patient consent.
        </p>
      </div>
    </section>
  );
}

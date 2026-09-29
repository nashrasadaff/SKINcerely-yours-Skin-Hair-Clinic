const faqs = [
  {
    q: "What happens in a first consultation?",
    a: "A full 30 minutes with Dr. Khan: history, medication review, dermatoscopic or trichoscopic examination, and standardised photographs. You leave with a written plan, a realistic result window and an itemised cost estimate. Nothing is performed on day one unless you ask for it.",
  },
  {
    q: "Are the treatments safe for Indian and deeper skin tones?",
    a: "Yes — that's the majority of our practice. Device settings, peel depths and laser wavelengths are selected for Fitzpatrick IV–VI, and we always patch test before a first laser session to minimise the risk of post-inflammatory pigmentation.",
  },
  {
    q: "How soon will I see results?",
    a: "Acne inflammation usually settles in 6–8 weeks; scar revision and melasma run 4–6 months; hair density changes become photographable at around 5 months. We re-photograph every 8 weeks so you can see change rather than be told about it.",
  },
  {
    q: "Is botox or filler going to look obvious?",
    a: "Not the way we dose it. Dr. Khan treats conservatively and reviews you at two weeks to top up if needed — it is far easier to add a little than to dissolve too much. Expression is preserved by design.",
  },
  {
    q: "Do you push treatment packages?",
    a: "Never. Every session is billed individually at a price quoted in advance. If a home routine or a medical prescription will get you there, that is what we will recommend — several of our patients leave the first consult with nothing but a sunscreen.",
  },
  {
    q: "What does a hair transplant consultation include?",
    a: "Donor-area density mapping, an honest graft-count range, a discussion of long-term native hair protection, and a candid answer on whether you are a candidate yet. Many patients under 30 are advised to stabilise medically first.",
  },
  {
    q: "Are dermatosurgical procedures done in the clinic?",
    a: "Yes — SKINcerely Yours has a sterile in-clinic minor OT. Mole and cyst excision, ear-lobe repair, scar revision, nail surgery and vitiligo grafting are day-care procedures under local anaesthesia, performed by Dr. Khan himself with written pre- and post-op instructions.",
  },
  {
    q: "Where are you located and when are you open?",
    a: "16-4-766/2, Near Bank of Baroda, Subedar Ameer Ali Khan Road, New Malakpet, Malakpet, Hyderabad. We're open Monday to Friday, 5:00pm to 8:00pm, and Saturday 11:00am to 1:00pm. The clinic is closed on Sundays.",
  },
];

export default function Faq() {
  return (
    <section className="faq section" id="faq">
      <div className="wrap faq-grid">
        <div>
          <span className="eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="10" /></svg>
            Good questions
          </span>
          <h2>Before you book.</h2>
          <p className="lede">
            The things patients ask most often at the front desk, answered plainly.
          </p>
          <div className="faq-aside" style={{ marginTop: "2rem" }}>
            <h3>Still unsure what you need?</h3>
            <p>
              Send us a message and our care coordinator will tell you honestly whether a
              consultation is worth your time — or whether a dermatologist-grade routine at home is
              enough for now.
            </p>
            <a className="btn btn-terra" href="#contact">
              Ask a question
            </a>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <details className="qa" key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <div className="qa-body">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

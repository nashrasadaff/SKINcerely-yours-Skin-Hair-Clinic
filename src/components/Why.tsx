import { Check } from "./Icons";
import { clinic } from "@/lib/clinic";

const reasons = [
  {
    title: "One doctor, start to finish",
    body: `${clinic.doctor.split(" ").pop() === "Rao" ? "Dr. Rao" : clinic.doctor} performs every injectable, laser and PRP session herself — no rotating technicians.`,
  },
  {
    title: "US-FDA approved devices only",
    body: "Serviced quarterly, with calibration logs you're welcome to see.",
  },
  {
    title: "Transparent, itemised pricing",
    body: "Quoted before you sit in the chair. No bundled packages, ever.",
  },
  {
    title: "Standardised progress photos",
    body: "Same light, same angle, every visit — so results are seen, not claimed.",
  },
];

const stats = [
  { value: "12,000+", label: "Patients treated" },
  { value: "4.9 ★", label: "Google rating" },
  { value: "14", label: "Years experience" },
  { value: "30 min", label: "Average consult" },
];

export default function Why() {
  return (
    <section className="why section" id="why">
      <svg className="leaf-deco animate-drift" style={{ bottom: -20, left: "4%", width: 140 }} viewBox="0 0 120 180" aria-hidden="true">
        <path d="M60 175C60 110 25 70 18 22c46 8 82 52 82 108 0 24-14 40-40 45Z" fill="#4F6F52" opacity=".18" />
      </svg>

      <div className="wrap why-grid">
        <div>
          <span className="eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-8-4.9-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.1-8 11-8 11Z" /></svg>
            Why patients stay
          </span>
          <h2>Care that behaves like a garden, not a factory.</h2>
          <p className="lede">
            Slower intake, smaller session counts, better documentation. Here&apos;s what that looks
            like in practice.
          </p>

          <div className="why-list">
            {reasons.map((r) => (
              <div className="why-item" key={r.title}>
                <i aria-hidden="true"><Check /></i>
                <div>
                  <b>{r.title}</b>
                  <span>{r.body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="stat-cluster">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

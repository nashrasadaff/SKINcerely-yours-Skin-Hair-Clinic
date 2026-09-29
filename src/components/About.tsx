import Image from "next/image";
import { clinic } from "@/lib/clinic";

const credentials = [
  {
    title: "Consultant Dermatologist",
    body: clinic.regBody,
    icon: (
      <path d="M22 10 12 5 2 10l10 5 10-5ZM6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Dermatosurgery",
    body: "Excisions, scar revision, vitiligo & nail surgery under local anaesthesia.",
    icon: (
      <path d="M8 2h8v6l3 3v11H5V11l3-3V2ZM9 14h6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Hair Transplant Surgeon",
    body: "Fellowship-trained in FUE, donor mapping and graft planning.",
    icon: (
      <>
        <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8.5 13.5 7 22l5-2.5L17 22l-1.5-8.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Cosmetologist",
    body: "Injectables, lasers, peels and skin boosters — physician-administered.",
    icon: (
      <path d="M12 2 14.5 9.5 22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "12,000+ patients",
    body: "Across acne, pigmentation, ageing and hair-loss care.",
    icon: (
      <>
        <path d="M12 21s-7-4.4-7-10a7 7 0 0 1 14 0c0 5.6-7 10-7 10Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
      </>
    ),
  },
  {
    title: "IADVL · ISHRS member",
    body: "Evidence-led protocols, US-FDA approved devices only.",
    icon: (
      <path d="M12 3v18M5 8l7-5 7 5M5 8v8l7 5 7-5V8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <svg className="leaf-deco animate-sway" style={{ top: "8%", right: -30, width: 170 }} viewBox="0 0 160 220" aria-hidden="true">
        <path d="M80 215C80 130 30 80 20 20c60 12 110 62 110 130 0 33-20 58-50 65Z" fill="#A7C1A8" opacity=".3" />
      </svg>

      <div className="wrap about-grid">
        <div className="portrait animate-drift-slow">
          <div className="portrait-face">
            <div style={{ width: "82%", aspectRatio: "1 / 1", borderRadius: "50%", overflow: "hidden", position: "relative" }}>
              <Image
                src="/dr-shahnoor.png"
                alt={`Portrait of ${clinic.doctor}`}
                fill
                sizes="(max-width: 900px) 70vw, 300px"
                style={{ objectFit: "cover", objectPosition: "50% 25%" }}
              />
            </div>
          </div>
          <p className="portrait-caption">{clinic.doctor}, {clinic.degrees}</p>
        </div>

        <div>
          <span className="eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7H4Z" /></svg>
            Meet your dermatologist
          </span>
          <h2>Listening first, prescribing second.</h2>
          <p className="lede">
            {clinic.doctor} is a Consultant Dermatologist, Dermatosurgeon, Cosmetologist and Hair
            Transplant Surgeon. He founded {clinic.name} in Malakpet to build the kind of clinic he
            wished existed: quiet rooms, honest timelines, and treatment plans that respect your
            skin barrier as much as your budget.
          </p>
          <p>
            Consultations run a full 30 minutes. You&apos;ll leave with a written plan, a realistic
            result window, and the option to do absolutely nothing until you&apos;re ready.
          </p>

          <div className="credentials">
            {credentials.map((c) => (
              <div className="cred" key={c.title}>
                <i aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24">{c.icon}</svg>
                </i>
                <div>
                  <b>{c.title}</b>
                  <span>{c.body}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="signature">— {clinic.doctor}</p>
        </div>
      </div>
    </section>
  );
}

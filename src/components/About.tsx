import { clinic } from "@/lib/clinic";

const credentials = [
  {
    title: "MBBS, MD Dermatology (DVL)",
    body: clinic.kmcReg,
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
            <svg viewBox="0 0 220 240" aria-hidden="true">
              <defs>
                <linearGradient id="coat" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#FFFFFF" />
                  <stop offset="1" stopColor="#E9E4D8" />
                </linearGradient>
              </defs>
              <path d="M28 240c0-44 30-70 82-78 52 8 82 34 82 78H28Z" fill="url(#coat)" />
              <path d="M110 162c-16 10-26 34-28 78h-18c2-44 18-70 46-78Z" fill="#C9DCC9" opacity=".8" />
              <path d="M110 162c16 10 26 34 28 78h18c-2-44-18-70-46-78Z" fill="#C9DCC9" opacity=".8" />
              <path d="M62 92c0-34 21-58 48-58s48 24 48 58c0 18-3 30-6 42 6-44-12-56-42-56S62 90 68 134c-3-12-6-24-6-42Z" fill="#3A5440" />
              <path d="M56 104c2-44 24-70 54-70s52 26 54 70c2 30-6 44-10 44 4-40-14-64-44-64s-48 24-44 64c-4 0-12-14-10-44Z" fill="#27362A" />
              <circle cx="110" cy="106" r="42" fill="#F2DDCB" />
              <path d="M110 148c-7 0-13-1-18-4v20h36v-20c-5 3-11 4-18 4Z" fill="#E8CDB8" />
              <circle cx="95" cy="103" r="3.4" fill="#3A5440" />
              <circle cx="125" cy="103" r="3.4" fill="#3A5440" />
              <path d="M87 93c4-4 11-4 15-1M118 92c4-3 11-3 15 1" stroke="#3A5440" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M101 122c5 4 13 4 18 0" stroke="#C97B5A" strokeWidth="3.2" strokeLinecap="round" fill="none" />
              <path d="M92 168c-6 18-2 34 10 42M128 168c6 18 2 34-10 42" stroke="#4F6F52" strokeWidth="5" fill="none" strokeLinecap="round" />
              <circle cx="110" cy="214" r="9" fill="#C97B5A" />
              <path d="M148 180c8-6 14-4 18 2-6 6-12 7-18-2Z" fill="#A7C1A8" />
            </svg>
          </div>
          <p className="portrait-caption">{clinic.doctor}, {clinic.degrees}</p>
        </div>

        <div>
          <span className="eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7H4Z" /></svg>
            Meet your dermatologist
          </span>
          <h2>Fourteen years of listening first, prescribing second.</h2>
          <p className="lede">
            {clinic.doctor} is a Consultant Dermatologist, Dermatosurgeon, Cosmetologist and Hair
            Transplant Surgeon. After her MD in Dermatology, Venereology &amp; Leprosy, she completed
            fellowships in dermatosurgery and hair restoration, and founded {clinic.name} in
            Koramangala to build the kind of clinic she wished existed: quiet rooms, honest
            timelines, and treatment plans that respect your skin barrier as much as your budget.
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

const items = [
  "Consultant Dermatologist",
  "Certified Dermatosurgeon",
  "Cosmetologist",
  "Hair Transplant Surgeon",
  "No-upsell promise",
];

export default function CredentialStrip() {
  return (
    <>
      <svg className="divider" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40c220 50 420 50 720 18S1240-10 1440 32V90H0V40Z" fill="#4F6F52" />
      </svg>
      <div className="strip">
        <div className="wrap strip-inner">
          {items.map((item) => (
            <span key={item}>
              <span className="dot" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
      <svg className="divider flip" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40c220 50 420 50 720 18S1240-10 1440 32V90H0V40Z" fill="#FBF8F1" />
      </svg>
    </>
  );
}

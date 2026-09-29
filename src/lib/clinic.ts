// Single source of truth for placeholder clinic details — swap these for the
// real values before going live.
export const clinic = {
  name: "Lumiere",
  nameFull: "Lumiere Skin & Hair Clinic",
  tagline: "Skin & Hair",
  doctor: "Dr. Ananya Rao",
  doctorTitles:
    "Consultant Dermatologist · Dermatosurgeon · Cosmetologist · Hair Transplant Surgeon",
  degrees: "MBBS, MD (DVL)",
  kmcReg: "Karnataka Medical Council Reg. No. 54XXX",
  phoneDisplay: "+91 98765 43210",
  phone: "+919876543210",
  whatsapp: "919876543210",
  email: "hello@lumiereclinic.in",
  address: "2nd Floor, Koramangala,\nBengaluru 560034",
  hours: "Monday – Saturday\n10:00am – 7:00pm",
  hoursShort: "Mon–Sat · 10am–7pm",
  location: "Koramangala, Bengaluru",
} as const;

export function waLink(message = "Hello Lumiere Clinic, I'd like to book a consultation") {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

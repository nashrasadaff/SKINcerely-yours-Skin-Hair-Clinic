// Single source of truth for clinic details.
export const clinic = {
  name: "SKINcerely Yours",
  nameFull: "SKINcerely Yours Skin & Hair Clinic",
  tagline: "Skin & Hair",
  doctor: "Dr. Shahnoor Ali Khan",
  doctorTitles:
    "Consultant Dermatologist · Dermatosurgeon · Cosmetologist · Hair Transplant Surgeon",
  degrees: "MBBS, MD (Dermatology)",
  regBody: "Telangana Medical Council Registered Practitioner",
  phoneDisplay: "+91 94931 23000",
  phone: "+919493123000",
  phone2Display: "+91 81217 81781",
  phone2: "+918121781781",
  whatsapp: "919493123000",
  email: "",
  address:
    "16-4-766/2, Near Bank of Baroda,\nSubedar Ameer Ali Khan Road,\nNew Malakpet, Malakpet, Hyderabad 500036",
  hours: "Monday – Friday\n5:00pm – 8:00pm\nSaturday\n11:00am – 1:00pm\nSunday — Closed",
  hoursShort: "Mon–Fri 5–8pm · Sat 11–1pm",
  location: "Malakpet, Hyderabad",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://skincerelyyours.in",
} as const;

export function waLink(
  message = "Hello SKINcerely Yours Clinic, I'd like to book a consultation",
) {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

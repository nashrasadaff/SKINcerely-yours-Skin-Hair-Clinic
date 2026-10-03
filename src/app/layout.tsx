import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import { clinic } from "@/lib/clinic";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const title =
  "SKINcerely Yours Skin & Hair Clinic — Dr. Shahnoor Ali Khan | Dermatologist, Dermatosurgeon & Hair Transplant Surgeon, Hyderabad";
const description =
  "SKINcerely Yours Skin & Hair Clinic in Malakpet, Hyderabad. Dr. Shahnoor Ali Khan — Consultant Dermatologist, Dermatosurgeon, Cosmetologist & Hair Transplant Surgeon. Acne, pigmentation, lasers, PRP, FUE hair transplant and dermatosurgery. Book a consultation.";

export const metadata: Metadata = {
  metadataBase: new URL(clinic.siteUrl),
  title,
  description,
  keywords: [
    "dermatologist Hyderabad",
    "skin clinic Malakpet",
    "hair transplant Hyderabad",
    "Dr. Shahnoor Ali Khan",
    "acne treatment Hyderabad",
    "PRP therapy",
    "laser hair reduction",
    "dermatosurgeon Hyderabad",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: clinic.nameFull,
    title,
    description,
    images: [{ url: "/dr-shahnoor.png", width: 1024, height: 1024, alt: clinic.doctor }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/dr-shahnoor.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

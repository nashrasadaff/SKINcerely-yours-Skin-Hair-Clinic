import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Lumiere Skin & Hair Clinic — Dr. Ananya Rao | Dermatologist, Dermatosurgeon & Hair Transplant Surgeon, Bengaluru",
  description:
    "Lumiere Skin & Hair Clinic in Koramangala, Bengaluru. Dr. Ananya Rao, MBBS MD (DVL) — Consultant Dermatologist, Dermatosurgeon, Cosmetologist & Hair Transplant Surgeon. Acne, pigmentation, lasers, PRP, FUE hair transplant and dermatosurgery. Book a consultation.",
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

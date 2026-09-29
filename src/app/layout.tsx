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
  title: "SKINcerely Yours Skin & Hair Clinic — Dr. Shahnoor Ali Khan | Dermatologist, Dermatosurgeon & Hair Transplant Surgeon, Hyderabad",
  description:
    "SKINcerely Yours Skin & Hair Clinic in Malakpet, Hyderabad. Dr. Shahnoor Ali Khan — Consultant Dermatologist, Dermatosurgeon, Cosmetologist & Hair Transplant Surgeon. Acne, pigmentation, lasers, PRP, FUE hair transplant and dermatosurgery. Book a consultation.",
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

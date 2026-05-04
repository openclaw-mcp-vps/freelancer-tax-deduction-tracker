import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxTrack — Freelancer Tax Deduction Tracker",
  description: "Automatically categorize expenses and track tax deductions from your bank and credit card transactions. Built for freelance developers, designers, and consultants.",
  keywords: "freelancer tax deductions, expense tracker, tax categories, receipt matching, self-employed taxes",
  openGraph: {
    title: "TaxTrack — Freelancer Tax Deduction Tracker",
    description: "Track tax deductions automatically for freelancers earning $50k+",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="32f58dfc-4477-40ea-b999-c5c7f7d3868d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}

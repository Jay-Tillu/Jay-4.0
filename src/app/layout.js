import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Jay Tillu",
  description:
    "Hello! I'm Jay Tillu, an Information Security Engineer at Simple2Call. I have expertise in security frameworks and compliance, including NIST, ISO 27001, and ISO 27701. My specialities include Vulnerability Management, Threat Analysis, and Incident Response. I have also earned certifications in Google Cybersecurity and Microsoft Azure. I’m always eager to connect and discuss cybersecurity—let's get in touch!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${geistSans.variable}`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

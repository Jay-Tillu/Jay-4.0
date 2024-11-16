import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Jay Tillu",
  description:
    "My Name is Jay Tillu and I am a Software Developer by Profession, Tech Enthucist by Passion and Content Creator by hobby. I have been coding for more than 3 years now. When it comes to coding, I specialize in React, NextJs, JavaScript, HTML, CSS, TailwindCSS and Appwrite.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>{children}</body>
    </html>
  );
}

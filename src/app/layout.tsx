import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, VT323 } from "next/font/google";
import "./globals.css";
import "./cyber.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omer | Robotics Engineer",
  description: "Engineering student specializing in robotics, mechanical design, electronics, and software. Passionate about legged robots and robotic prosthetics.",
  keywords: ["robotics", "engineering", "mechanical", "electronics", "software", "legged robots", "prosthetics"],
  authors: [{ name: "Omer Mohammed" }],
  openGraph: {
    title: "Omer | Robotics Engineer",
    description: "I build machines that move.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${vt323.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

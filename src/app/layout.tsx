import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robotics Engineer",
  description: "Engineering student specializing in robotics, mechanical design, electronics, and software. Passionate about legged robots and robotic prosthetics.",
  keywords: ["robotics", "engineering", "mechanical", "electronics", "software", "legged robots", "prosthetics"],
  authors: [{ name: "Omer Mohammed" }],
  openGraph: {
    title: "Robotics Engineer",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

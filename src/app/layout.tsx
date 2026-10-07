import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const pixel = localFont({
  src: "./fonts/slkscr-webfont.woff",
  variable: "--font-pixel",
  weight: "100 900",
});

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelclimb.xyz"),
  title: "Pixel Climb — One-tap climbing on Solana",
  description:
    "Pixel Climb is a hyper-casual mobile game powered by Solana. Tap to jump, climb endless floors, collect gems, and hold $PCMB.",
  openGraph: {
    title: "Pixel Climb",
    description: "Hyper-casual web3 game powered by Solana.",
    url: "https://pixelclimb.xyz",
    siteName: "Pixel Climb",
    images: ["/pcmb_icon.png"],
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@pixelclimb",
    title: "Pixel Climb",
    description: "Hyper-casual web3 game powered by Solana.",
    images: ["/pcmb_icon.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#07080c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pixel.variable} ${sans.variable} ${mono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

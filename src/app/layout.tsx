import type { Metadata } from "next";
import { Playfair_Display, Roboto_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import WhatsAppButton from "@/components/WhatsAppButton";
import MediaProtection from "@/components/MediaProtection";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ["normal"],
  variable: "--font-playfair",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "eDrive JetCar",
    template: "%s | eDrive JetCar",
  },
  description: "eDrive JetCar — Electric jet-powered watercraft. Configure, explore, and experience the future of luxury water mobility.",
  authors: [{ name: "eDrive JetCar Manufacturing L.L.C." }],
  openGraph: {
    title: "eDrive JetCar",
    description: "eDrive JetCar — Electric jet-powered watercraft for luxury resorts and private owners.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eDrive JetCar",
    description: "eDrive JetCar — Electric jet-powered watercraft for luxury resorts and private owners.",
  },
  icons: {
    icon: "/edrive-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${robotoCondensed.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Providers>
          <MediaProtection />
          {children}
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}

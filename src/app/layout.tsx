import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ["normal"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Drive to Survive",
    template: "%s | Drive to Survive",
  },
  description: "Drive to Survive — Premium automotive experience. Configure your dream car with our state-of-the-art 3D configurator.",
  authors: [{ name: "Vamsi" }],
  openGraph: {
    title: "Drive to Survive",
    description: "Drive to Survive — Premium automotive experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drive to Survive",
    description: "Drive to Survive — Premium automotive experience.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

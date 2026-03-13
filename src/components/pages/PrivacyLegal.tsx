'use client';

import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const sections = [
  {
    title: "Privacy Policy",
    text: [
      "E-Drive JetCar Manufacturing L.L.C. respects your privacy and is committed to protecting the personal data you share with us.",
      "We collect personal information only when you voluntarily provide it — for example, when submitting an inquiry form, subscribing to updates, or contacting us directly.",
    ],
    bullets: [
      "We do not sell, rent, or share your personal data with third parties for marketing purposes",
      "Personal data is used solely to respond to your inquiries and improve our services",
      "We implement appropriate technical and organizational measures to protect your data",
      "You may request access to, correction of, or deletion of your personal data at any time by contacting us",
    ],
  },
  {
    title: "Use of Cookies",
    text: [
      "This website may use cookies and similar technologies to enhance your browsing experience and analyze site traffic.",
    ],
    bullets: [
      "Essential cookies are required for basic site functionality",
      "Analytics cookies help us understand how visitors interact with the website",
      "You can manage cookie preferences through your browser settings",
    ],
  },
  {
    title: "Intellectual Property",
    text: [
      "All content on this website — including text, images, graphics, logos, videos, and design elements — is the intellectual property of E-Drive JetCar Manufacturing L.L.C. unless otherwise stated.",
      "Unauthorized reproduction, distribution, or use of any content from this website without prior written consent is strictly prohibited.",
    ],
  },
  {
    title: "Disclaimer",
    text: [
      "The specifications, features, and visuals displayed on this website may vary depending on market availability and configuration.",
      "Product availability, specifications, and compliance may differ based on regional regulations.",
      "E-Drive makes reasonable efforts to ensure that information on this website is accurate and up to date, but does not guarantee completeness or accuracy at all times.",
      "If you believe information is incorrectly displayed for your location, please contact an authorized E-Drive representative.",
    ],
  },
  {
    title: "Investment Disclaimer",
    text: [
      "E-Drive is not a publicly traded company and does not offer shares or equity through this website.",
      "E-Drive may present individual investment and partnership opportunities, including projects related to JetCar placement and operation, exclusively on a contractual basis and through authorized company representatives.",
      "Any third-party claims regarding the sale of shares, equity participation, or investment products on behalf of E-Drive without official written confirmation from the company are unauthorized.",
    ],
  },
  {
    title: "Limitation of Liability",
    text: [
      "E-Drive shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or reliance on any information provided herein.",
      "Links to third-party websites are provided for convenience only. E-Drive does not endorse or assume responsibility for the content or practices of external sites.",
    ],
  },
  {
    title: "Governing Law",
    text: [
      "This website and its contents are governed by the laws of the United Arab Emirates. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of the UAE.",
    ],
  },
  {
    title: "Contact",
    text: [
      "If you have any questions regarding our privacy practices or legal notices, please contact us at:",
    ],
    bullets: [
      "Email: info@edrive-jetcar.com",
    ],
  },
];

const PrivacyLegal = () => {
  return (
    <>
      <NavBar />
      <main className="bg-background text-foreground min-h-screen selection:bg-tiffany selection:text-black">
        {/* HERO */}
        <section className="relative h-[60vh] flex flex-col justify-end pb-20 px-8 md:px-16 bg-gradient-to-b from-neutral-900 to-black">
          <motion.div {...fade}>
            <p className="text-sm tracking-[0.3em] text-white/50 uppercase mb-4">Legal</p>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-heading-xl">Privacy & Legal</h1>
          </motion.div>
        </section>

        {sections.map((s, i) => (
          <section key={i} className={`py-24 px-8 ${i % 2 === 0 ? 'bg-black' : 'bg-neutral-950'} ${i > 0 ? 'border-t border-white/5' : ''}`}>
            <div className="max-w-4xl mx-auto">
              <motion.div {...fade}>
                <h3 className="text-sm tracking-[0.2em] text-white/50 uppercase mb-8">{s.title}</h3>
                {s.text.map((t, j) => (
                  <p key={j} className={`text-lg font-light leading-relaxed mb-4 ${j > 0 ? 'text-muted-foreground' : 'text-white/80'}`}>{t}</p>
                ))}
                {s.bullets && (
                  <ul className="mt-6 space-y-3">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-4 text-white/70">
                        <span className="w-1.5 h-1.5 bg-tiffany rounded-full flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          </section>
        ))}

        {/* COPYRIGHT */}
        <section className="py-40 px-8 text-center bg-black border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fade}>
              <p className="text-2xl md:text-4xl font-light italic leading-snug">
                © 2026 E-Drive JetCar Manufacturing L.L.C. All rights reserved.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default PrivacyLegal;

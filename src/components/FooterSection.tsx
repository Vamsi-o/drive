'use client';

import Link from "next/link";

const FooterSection = () => {

  return (
    <footer className="bg-[#202020] text-white font-body">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-[calc((100%-1418px)/2+16px)] pt-8 pb-10">

        {/* Navigation Links Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link href="/company" className="text-[#C0BFBF] text-sm md:text-base hover:text-white transition-colors">
            Company
          </Link>
          <Link href="/become-distributor" className="text-[#C0BFBF] text-sm md:text-base hover:text-white transition-colors">
            Collaborate
          </Link>
          <a href="mailto:info@edrive-jetcar.com" className="text-[#C0BFBF] text-sm md:text-base hover:text-white transition-colors">
            Contact Us
          </a>
          <Link href="/privacy-legal" className="text-[#C0BFBF] text-sm md:text-base hover:text-white transition-colors">
            Privacy & Legal
          </Link>
          <Link href="/company/careers" className="text-[#C0BFBF] text-sm md:text-base hover:text-white transition-colors">
            Careers
          </Link>
        </div>

        {/* Follow Us Section */}
        <div className="mb-6">
          <p className="text-white text-base md:text-lg mb-5">Follow us on :</p>
          <div className="flex flex-wrap items-center gap-6 md:gap-10 lg:gap-12">
            <a href="https://www.instagram.com/edrive.jetcar?igsh=Y3pqY3ZoY243NDRj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-white/70 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
              <span className="text-sm md:text-base">Instagram</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100093972499250" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-white/70 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              <span className="text-sm md:text-base">Facebook</span>
            </a>
            <a href="https://www.tiktok.com/@edrive_jetcar?_r=1&_t=ZS-93CVTQMaPOX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-white/70 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.38-6.2V9.07a8.16 8.16 0 0 0 4.84 1.58V7.2a4.85 4.85 0 0 1-1-.51z"/></svg>
              <span className="text-sm md:text-base">TikTok</span>
            </a>
            <a href="https://www.linkedin.com/company/emotion-drive" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-white/70 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              <span className="text-sm md:text-base">LinkedIn</span>
            </a>
            <a href="https://youtube.com/@emotiondriveuae?si=QMmH4eEAlw3i9FiG" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-white/70 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.35z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
              <span className="text-sm md:text-base">YouTube</span>
            </a>
            <a href="https://wa.me/message/3DYTH4POQLBFD1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-white/70 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span className="text-sm md:text-base">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/30 mb-6" />

        {/* Legal Notice 1 */}
        <div className="mb-6">
          <h4 className="text-white text-sm md:text-base font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>LEGAL NOTICE</h4>
          <p className="text-[#B4B4B4] text-xs md:text-sm leading-relaxed">
            The specifications, features, and visuals displayed on this website may vary depending on market availability and configuration.
            <br />
            Product availability, specifications, and compliance may differ based on regional regulations.
            <br />
            If you believe information is incorrectly displayed for your location, please contact an authorized E-Drive representative.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/30 mb-6" />

        {/* Legal Notice 2 */}
        <div className="mb-6">
          <h4 className="text-white text-sm md:text-base font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>LEGAL NOTICE</h4>
          <p className="text-[#B4B4B4] text-xs md:text-sm leading-relaxed">
            E-Drive is not a publicly traded company and does not offer shares or equity through this website.
            <br />
            E-Drive may present individual investment and partnership opportunities, including projects related to JetCar placement and operation, exclusively on a contractual basis and through authorized company representatives.
            <br />
            Any third-party claims regarding the sale of shares, equity participation, or investment products on behalf of E-Drive without official written confirmation from the company are unauthorized.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/30 mb-6" />

        {/* Copyright */}
        <div>
          <h4 className="text-white text-sm md:text-base font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>COPYRIGHT</h4>
          <p className="text-[#B4B4B4] text-xs md:text-sm leading-relaxed">
            © {new Date().getFullYear()} E-Drive JetCar Manufacturing L.L.C.
            <br />
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;

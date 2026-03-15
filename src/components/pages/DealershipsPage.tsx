'use client';

import { useState } from "react";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";
const dealerBg = "/assets/dealer-bg.jpg";

const dealers = [
  { name: "eDrive HQ", city: "Dubai", country: "UAE", address: "Dubai Maritime City" },
  { name: "eDrive Abu Dhabi", city: "Abu Dhabi", country: "UAE", address: "Yas Marina Circuit" },
  { name: "eDrive Europe", city: "Athens", country: "Greece", address: "Piraeus Marina" },
  { name: "eDrive Bahrain", city: "Manama", country: "Bahrain", address: "Bahrain Bay" },
  { name: "eDrive Southeast Asia", city: "Manila", country: "Philippines", address: "Manila Bay" },
  { name: "eDrive Maldives", city: "Malé", country: "Maldives", address: "Resort District" },
];

const DealershipsPage = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const filtered = dealers.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.city.toLowerCase().includes(search.toLowerCase()) ||
    d.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] flex items-end overflow-hidden">
          <img src={dealerBg} alt="Dealer" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="relative z-10 px-8 md:px-16 pb-16">
            <h1 className="text-heading-xl text-4xl md:text-6xl text-foreground">{t('dealerships.title')}</h1>
          </div>
        </section>

        {/* Search */}
        <section className="px-8 md:px-16 py-12">
          <div className="relative max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('dealerships.searchPlaceholder')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent border border-border pl-12 pr-4 py-3 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
          </div>
        </section>

        {/* Dealers list */}
        <section className="px-8 md:px-16 pb-20">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {filtered.map((dealer) => (
                <div key={dealer.name} className="bg-background p-8 hover:bg-secondary/50 transition-colors cursor-pointer">
                  <h3 className="text-heading-xl text-lg text-foreground mb-2">{dealer.name}</h3>
                  <p className="text-sm text-muted-foreground font-body">{dealer.address}</p>
                  <p className="text-xs text-muted-foreground font-body mt-1">{dealer.city}, {dealer.country}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg font-body">{t('dealer.noResults')}</p>
            </div>
          )}
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default DealershipsPage;


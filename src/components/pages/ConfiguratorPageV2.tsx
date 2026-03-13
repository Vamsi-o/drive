'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
const modelRImg = "/assets/model-r.webp";
const luminaImg = "/assets/revuelto.jpg";
const cyberImg = "/assets/temerario.jpg";
const modelFImg = "/assets/slide-model-f.png";
const MODELS = [
  {
    id: 'MODEL R',
    name: 'MODEL R',
    letter: 'R',
    tagline: 'Refined Performance',
    logoImage: '/logo-r.png',
    slug: 'model-r',
    desc: 'Designed for premium leisure and commercial use, compliant with CE standards for global operation.',
    image: modelRImg,
    activeColor: '#F6C974',
    stats: { length: '5.22 m', width: '2.06 m', depth: '1.82 m', seating: '4–5 persons', brand: 'Yamaha', engine: '1900 cc', cert: 'CE Certified' }
  },
  {
    id: 'MODEL F',
    name: 'MODEL F',
    letter: 'F',
    tagline: 'Pure Power on Water',
    logoImage: '/logo-f.png',
    slug: 'model-f',
    desc: 'A high-performance JetCar engineered for speed, control, and CE-compliant commercial use.',
    image: modelFImg,
    activeColor: '#FFFFFF',
    stats: { length: '5.22 m', width: '2.06 m', depth: '1.83 m', seating: '2 persons', brand: 'Yamaha', engine: '1900 cc', cert: 'CE Certified' }
  },
  {
    id: 'LUMINA',
    name: 'LUMINA',
    letter: 'L',
    tagline: 'Innovation in Motion',
    slug: 'lumina',
    desc: 'A compact, agile water kart developed in accordance with CE safety and quality requirements.',
    image: luminaImg,
    activeColor: '#FFFFFF',
    stats: { length: '3.40 m', width: '2.15 m', depth: 'N/A', seating: '2 persons', brand: 'Tohatsu', engine: 'Outboard', cert: 'CE Certified' }
  },
  {
    id: 'CYBERMARINE',
    name: 'CYBERMARINE',
    letter: 'C',
    tagline: 'The Future, Reimagined',
    slug: 'cybermarine',
    desc: 'Coming Soon\n\nA future-focused concept designed for next-generation water mobility, with planned CE certification.',
    image: cyberImg,
    activeColor: '#FFFFFF',
    stats: { length: 'TBA', width: 'TBA', depth: 'TBA', seating: 'TBA', brand: 'TBA', engine: 'TBA', cert: 'Planned CE' }
  }
];

const ConfiguratorPageV2 = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(MODELS[0]);

  return (
    <section id="configurator" className="w-full min-h-screen bg-[#1B1B1B] relative flex flex-col justify-between overflow-hidden scroll-mt-[70px]">
      
      {/* Background ambient glow behind car */}
      <div className="absolute right-0 bottom-1/4 w-[50vw] h-[20vh] bg-[#0A0A0A] blur-[40px] rounded-full mix-blend-screen pointer-events-none z-0 hidden lg:block"></div>

      {/* Top Models Tab Navigation */}
      <div className="w-full pt-[max(4vh,80px)] flex justify-center gap-[4vw] z-20">
        {MODELS.map((model) => (
          <div 
            key={model.id}
            onClick={() => setActiveTab(model)}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <span className={`font-light text-base md:text-lg lg:text-xl transition-colors ${activeTab.id === model.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}
                  style={{ color: activeTab.id === model.id ? model.activeColor : '' }}>
              {model.id}
            </span>
            <div className={`h-[3px] w-full transition-colors ${activeTab.id === model.id ? 'bg-current' : 'bg-transparent group-hover:bg-gray-600'}`}
                 style={{ backgroundColor: activeTab.id === model.id ? model.activeColor : undefined }}></div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-[5vw] lg:px-[8vw] z-10 w-full max-w-[1920px] mx-auto mt-4 md:mt-0">
        
        {/* Left Side: Typography & Buttons */}
        <div className="flex flex-col items-start w-full md:w-[50%] lg:w-[45%] mt-6 md:mt-0">
          
          {/* Logo Letter / Image */}
          {activeTab.logoImage ? (
            <img 
              src={activeTab.logoImage} 
              alt={`${activeTab.name} Logo`} 
              className="h-[80px] md:h-[120px] lg:h-[150px] object-contain object-left mb-[3vh] ml-[-10px]" 
            />
          ) : (
            <div className="flex flex-col items-start leading-none gap-0 whitespace-nowrap font-serif italic font-bold mb-[3vh]" style={{ color: activeTab.activeColor }}>
              <span className="text-sm md:text-base lg:text-[20px] tracking-[0.3em] font-sans font-normal not-italic ml-1 lg:ml-2 mb-1 text-white">MODEL</span>
              <span className="text-[80px] md:text-[100px] lg:text-[130px] leading-[0.8] tracking-tighter">{activeTab.letter}</span>
            </div>
          )}

          {/* Title Area */}
          <div className="font-light text-xl md:text-2xl sm:text-[32px] leading-tight text-white mb-2">
            {t('configurator.headline').toUpperCase()}
          </div>
          <div className="font-bold text-3xl md:text-4xl sm:text-[64px] leading-tight text-white mb-3">
            {activeTab.name}
          </div>
          <div className="font-medium text-[15px] lg:text-[18px] tracking-[0.2em] uppercase text-[#F6C974] mb-6" style={{ color: activeTab.activeColor !== '#FFFFFF' ? activeTab.activeColor : '#81D8D0' }}>
            {activeTab.tagline}
          </div>

          {/* Description */}
          <div className="font-extralight text-lg lg:text-[20px] leading-relaxed text-gray-200 mb-[5vh] max-w-xl whitespace-pre-wrap">
            {activeTab.desc}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-[1.5vw] mt-[2vh]">
            <Link href="/configurator" className="h-[50px] lg:h-[60px] px-6 lg:px-[25px] bg-[#81D8D0] rounded-[6px] hover:bg-[#6ec2ba] transition-colors flex items-center justify-between group min-w-[200px] lg:min-w-[250px]">
              <span className="font-normal text-xs sm:text-sm text-black whitespace-nowrap mr-3">
                {t('configurator.startConfig').toUpperCase()}
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] text-black group-hover:scale-110 transition-transform relative">
                {/* 3D Cube core */}
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                
                {/* Corner Brackets */}
                <path strokeWidth="1.5" strokeLinecap="square" d="M7 2H4v3 M17 2h3v3 M7 22H4v-3 M17 22h3v-3" />
              </svg>
            </Link>

            <Link href={`/models/${activeTab.slug}`} className="h-[50px] lg:h-[60px] px-6 lg:px-[30px] border border-white rounded-[6px] hover:bg-white/10 transition-colors flex items-center justify-between group cursor-pointer pointer-events-auto min-w-[200px] lg:min-w-[250px]">
              <span className="font-normal text-sm lg:text-[15px] text-[#E3E3E3] whitespace-nowrap mr-3">
                {t('configurator.exploreModel').toUpperCase()}
              </span>
              <svg className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] text-[#F5F5F5] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14m-6-6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Side: Car Image */}
        <div className="w-full md:w-[45%] lg:w-[50%] h-[30vh] md:h-[50vh] flex items-center justify-center md:justify-end mt-10 md:mt-0 relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1B1B1B] to-transparent z-10 pointer-events-none block md:hidden"></div>
            <img key={activeTab.id} src={activeTab.image} alt={activeTab.name} className="object-contain object-center md:object-right w-full h-full max-h-[400px] xl:max-h-[500px] opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]" />
        </div>
      </div>

      {/* Specifications Footer */}
      <div className="w-full px-4 sm:px-[5vw] lg:px-0 lg:max-w-[1620px] mx-auto pb-4 lg:pb-[20px] grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row items-center justify-center lg:justify-between z-20 text-[11px] sm:text-[12px] lg:text-[15px] text-[#8E8E8E] font-light gap-2 sm:gap-3 lg:gap-0">
        <div className="whitespace-nowrap text-center">{t('configurator.specs.length')}: {activeTab.stats.length}</div>
        <div className="hidden lg:block w-[30px] h-[1px] bg-[#8E8E8E] transform -rotate-90"></div>

        <div className="whitespace-nowrap text-center">{t('configurator.specs.width')}: {activeTab.stats.width}</div>
        <div className="hidden lg:block w-[30px] h-[1px] bg-[#8E8E8E] transform -rotate-90"></div>

        <div className="whitespace-nowrap text-center">{t('configurator.specs.depth')}: {activeTab.stats.depth}</div>
        <div className="hidden lg:block w-[30px] h-[1px] bg-[#8E8E8E] transform -rotate-90"></div>

        <div className="whitespace-nowrap text-center">{t('configurator.specs.seating')}: {activeTab.stats.seating}</div>
        <div className="hidden lg:block w-[30px] h-[1px] bg-[#8E8E8E] transform -rotate-90"></div>

        <div className="whitespace-nowrap text-center">{t('configurator.specs.engine')}: {activeTab.stats.brand}</div>
        <div className="hidden lg:block w-[30px] h-[1px] bg-[#8E8E8E] transform -rotate-90"></div>

        <div className="whitespace-nowrap text-center">{activeTab.stats.engine}</div>
        <div className="hidden lg:block w-[30px] h-[1px] bg-[#8E8E8E] transform -rotate-90"></div>

        <div className="whitespace-nowrap text-center col-span-2 sm:col-span-1">{t('configurator.specs.cert')}: {activeTab.stats.cert}</div>
      </div>

      {/* Social Icons Sidebar */}
      {/* <div className="hidden lg:flex absolute right-[20px] xl:right-[40px] top-1/2 -translate-y-1/2 flex-col gap-6 items-center z-50">
        <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
          <Facebook className="text-white w-full h-full" strokeWidth={1.5} />
        </div>
        <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
          <Instagram className="text-white w-full h-full" strokeWidth={1.5} />
        </div>
        <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
          <Linkedin className="text-white w-full h-full" strokeWidth={1.5} />
        </div>
        <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
          <Youtube className="text-white w-full h-full" strokeWidth={1.5} />
        </div>
        <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
          <Music2 className="text-white w-full h-full" strokeWidth={1.5} />
        </div>
        <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer hover:scale-125 transition-transform">
          <MessageCircle className="text-white w-full h-full" strokeWidth={1.5} />
        </div>
      </div> */}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateX(20px); }
          to { opacity: 1; transform: scale(1) translateX(0); }
        }
      `}} />

    </section>
  );
};

export default ConfiguratorPageV2;

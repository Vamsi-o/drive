'use client';

import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import HeroSectionV2 from "@/components/HeroSectionV2";
import SocialSidebar from "@/components/SocialSidebar";
import SmoothScroll from "@/components/SmoothScroll";

const ConfiguratorPageV2 = dynamic(() => import("@/components/pages/ConfiguratorPageV2"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-[#0A0A0A]" />,
});
const ModelsSection = dynamic(() => import("@/components/ModelsSection"), {
  loading: () => <div className="min-h-[80vh] bg-[#FAFAFA]" />,
});
const NewsSection = dynamic(() => import("@/components/NewsSection"), {
  loading: () => <div className="min-h-[60vh] bg-tiffany" />,
});
const BlogsSection = dynamic(() => import("@/components/BlogsSection"), {
  loading: () => <div className="min-h-[60vh] bg-white" />,
});
const FooterSection = dynamic(() => import("@/components/FooterSection"), {
  loading: () => <div className="min-h-[40vh] bg-[#202020]" />,
});

const Index = () => {
  return (
    <>
      <SmoothScroll />
      <NavBar transparentOnHero />
      <SocialSidebar />
      <main>
        <HeroSectionV2 />
        <ConfiguratorPageV2 />
        <ModelsSection />
        <NewsSection />
        <BlogsSection />
      </main>
      <FooterSection />
    </>
  );
};

export default Index;

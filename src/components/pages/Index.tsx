'use client';

import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import HeroSectionV2 from "@/components/HeroSectionV2";
import SocialSidebar from "@/components/SocialSidebar";
import SmoothScroll from "@/components/SmoothScroll";

const ConfiguratorPageV2 = dynamic(() => import("@/components/pages/ConfiguratorPageV2"), { ssr: false });
const ModelsSection = dynamic(() => import("@/components/ModelsSection"));
const NewsSection = dynamic(() => import("@/components/NewsSection"));
const BlogsSection = dynamic(() => import("@/components/BlogsSection"));
const FooterSection = dynamic(() => import("@/components/FooterSection"));

const Index = () => {
  return (
    <>
      <SmoothScroll />
      <NavBar />
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

import { HeroSection } from "@/components/sections/HeroSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { InfluencerGridSection } from "@/components/sections/InfluencerGridSection";
import { CTASection } from "@/components/sections/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <InfluencerGridSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}

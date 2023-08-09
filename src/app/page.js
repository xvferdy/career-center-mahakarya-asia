import HeroSection from "@/sections/HeroSection";
import KelebihanSection from "@/sections/KelebihanSection";
import HiringPartnersSection from "@/sections/HiringPartnersSection";
import WelcomeSection from "@/sections/WelcomeSection";
import PricingSections from "@/sections/PricingSections";
import KelasSection from "@/sections/KelasSection";
import JobConnectorSection from "@/sections/JobConnectorSection";
import TestimoniSection from "@/sections/TestimoniSection";
import FaqSection from "@/sections/FaqSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <main className="homepage-main">
      <HeroSection />
      <div className="white">
        <KelebihanSection />
        <HiringPartnersSection />
        <WelcomeSection />
        <PricingSections />
        <KelasSection />
        <JobConnectorSection />
        <TestimoniSection />
        <FaqSection />
      </div>
      <ContactSection />
    </main>
  );
}

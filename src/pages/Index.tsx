import { useEffect, useRef } from "react";
import HeroSection from "@/components/landing/HeroSection";
import InvitationSection from "@/components/landing/InvitationSection";
import ProofSection from "@/components/landing/ProofSection";
import VehicleSection from "@/components/landing/VehicleSection";
import TimelineSection from "@/components/landing/TimelineSection";
import DisqualificationSection from "@/components/landing/DisqualificationSection";
import LogisticsSection from "@/components/landing/LogisticsSection";
import InvestmentSection from "@/components/landing/InvestmentSection";
import FAQSection from "@/components/landing/FAQSection";
import AboutSection from "@/components/landing/AboutSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = sectionsRef.current?.querySelectorAll(".observe-section");
    sections?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionsRef} className="overflow-x-hidden">
      <HeroSection />
      <InvitationSection />
      <ProofSection />
      <VehicleSection />
      <TimelineSection />
      <DisqualificationSection />
      <LogisticsSection />
      <InvestmentSection />
      <FAQSection />
      <AboutSection />
      <CTASection />
    </div>
  );
};

export default Index;

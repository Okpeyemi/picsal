import { HeroSection } from "@/components/blocks/hero-section-1"
import { WhyAiWebSection } from "@/components/blocks/why-ai-web-section"
import { TargetAudienceSection } from "@/components/blocks/target-audience-section"
import { ServicesSection } from "@/components/blocks/services-section"
import { FaqSection } from "@/components/blocks/faq-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyAiWebSection />
      <TargetAudienceSection />
      <ServicesSection />
      <FaqSection />
    </>
  );
}
import { Metadata } from 'next';
import { HeroSection } from "@/components/blocks/hero-section-1"
import { WhyAiWebSection } from "@/components/blocks/why-ai-web-section"
import { TargetAudienceSection } from "@/components/blocks/target-audience-section"
import { ServicesSection } from "@/components/blocks/services-section"
import { FaqSection } from "@/components/blocks/faq-section"

export const metadata: Metadata = {
  title: "Accueil",
  description: "Découvrez nos solutions IA et web pour automatiser vos processus, créer des sites performants et propulser votre entreprise. PME, startups, freelances - audit gratuit.",
  alternates: {
    canonical: 'https://picscal.com',
  },
};

export default function Home() {
  return (
    <>
      {/* Données structurées pour la page d'accueil */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Picscal",
            "url": "https://picscal.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://picscal.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      {/* Données structurées pour les services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Solutions IA et Développement Web",
            "provider": {
              "@type": "Organization",
              "name": "Picscal"
            },
            "description": "Solutions d'automatisation IA et développement web pour entreprises",
            "serviceType": ["Intelligence Artificielle", "Développement Web", "Automatisation"],
            "areaServed": "France",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services Picscal",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Automatisation des processus IA",
                    "description": "Automatisation intelligente des tâches répétitives"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Développement web",
                    "description": "Sites web et applications performantes"
                  }
                }
              ]
            }
          })
        }}
      />

      <HeroSection />
      <WhyAiWebSection />
      <TargetAudienceSection />
      <ServicesSection />
      <FaqSection />
    </>
  );
}
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([0]); // Premier item ouvert par défaut

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "Services",
      question: "Quels types de solutions IA proposez-vous ?",
      answer: "Nous développons des solutions IA sur mesure : chatbots intelligents, automatisation de workflows, analyse prédictive, classification de documents, recommandations personnalisées, et outils d'aide à la décision. Chaque solution est adaptée à votre secteur d'activité et vos besoins spécifiques."
    },
    {
      category: "Délais",
      question: "Combien de temps faut-il pour développer une solution ?",
      answer: "Cela dépend de la complexité : un prototype fonctionnel peut être livré en 48h, un chatbot complet en 1-2 semaines, et un site web professionnel en 7-14 jours. Nous privilégions les approches itératives pour vous livrer de la valeur rapidement."
    },
    {
      category: "Tarifs",
      question: "Comment sont calculés vos tarifs ?",
      answer: "Nos tarifs sont transparents et adaptés à votre budget. Nous proposons des forfaits fixes pour les projets standards (sites vitrine, chatbots simples) et des devis personnalisés pour les solutions complexes. Un audit gratuit permet d'évaluer vos besoins et de proposer la solution la plus rentable."
    },
    {
      category: "Support",
      question: "Proposez-vous de la maintenance et du support ?",
      answer: "Oui, nous offrons différents niveaux de support : maintenance corrective, évolutions fonctionnelles, monitoring des performances, et formation de vos équipes. Nos solutions sont conçues pour être autonomes, mais nous restons disponibles pour vous accompagner dans leur évolution."
    },
    {
      category: "Technique",
      question: "Mes données sont-elles sécurisées ?",
      answer: "Absolument. Nous appliquons les meilleures pratiques de sécurité : chiffrement des données, hébergement sécurisé (France/UE), conformité RGPD, accès restreints, et audits réguliers. Vos données restent votre propriété et ne sont jamais partagées avec des tiers."
    },
    {
      category: "Compatibilité",
      question: "Vos solutions s'intègrent-elles avec nos outils existants ?",
      answer: "Nos solutions sont conçues pour s'intégrer facilement à votre écosystème : CRM (Salesforce, HubSpot), ERP, outils de communication (Slack, Teams), plateformes e-commerce, et APIs existantes. Nous réalisons un audit technique pour garantir une intégration fluide."
    },
    {
      category: "Secteurs",
      question: "Travaillez-vous avec tous les secteurs d'activité ?",
      answer: "Nous accompagnons principalement les PME, freelances, startups, e-commerce, secteur des services et associations. Notre approche personnalisée nous permet de nous adapter à tout secteur, avec une expertise particulière en automatisation, web et solutions métier."
    },
    {
      category: "ROI",
      question: "Quel retour sur investissement puis-je espérer ?",
      answer: "Nos clients observent généralement : 30-50% de gain de temps sur les tâches automatisées, réduction des erreurs humaines, amélioration de la satisfaction client, et augmentation des conversions web. Le ROI dépend de votre activité, mais nous visons un retour positif sous 6-12 mois."
    },
    {
      category: "Formation",
      question: "Faut-il des compétences techniques pour utiliser vos solutions ?",
      answer: "Non, nos solutions sont conçues pour être intuitives et accessibles. Nous proposons une formation personnalisée à vos équipes, une documentation complète, et un support continu. L'objectif est que vous soyez autonome rapidement tout en gardant notre expertise à disposition."
    },
    {
      category: "Évolution",
      question: "Puis-je faire évoluer ma solution dans le temps ?",
      answer: "Bien sûr ! Nos architectures sont pensées pour évoluer avec votre croissance. Vous pouvez ajouter des fonctionnalités, intégrer de nouveaux outils, ou adapter votre solution à de nouveaux besoins. Nous travaillons par itérations pour accompagner votre développement."
    }
  ];

  const categories = ["Tous", ...Array.from(new Set(faqs.map(faq => faq.category)))];
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredFaqs = selectedCategory === "Tous" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/3 h-96 w-96 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-40 right-1/4 h-80 w-80 rounded-full bg-gradient-to-tl from-primary/15 via-primary/5 to-transparent blur-3xl" />
      </div>

      <div className="relative space-y-16">
        {/* Header */}
        <AnimatedGroup preset="blur-slide" className="text-center max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Questions fréquentes
            </h2>
          </div>
          <p className="text-muted-foreground font-mono text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Toutes les réponses aux questions que vous vous posez sur nos <strong className="text-foreground">solutions IA</strong> et 
            <strong className="text-foreground"> services web</strong>. Une question spécifique ? N&apos;hésitez pas à nous contacter.
          </p>
        </AnimatedGroup>

        {/* Category Filter */}
        <AnimatedGroup preset="fade" className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background border border-border hover:border-primary/30 text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </AnimatedGroup>

        {/* FAQ List */}
        <AnimatedGroup preset="slide-up" className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div
                key={index}
                className="group rounded-2xl border border-border/60 bg-background/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-sm"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors duration-200 hover:bg-muted/30"
                >
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex font-sans items-center px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="font-sans font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-200">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform duration-200",
                      isOpen && "rotate-180",
                      "group-hover:text-primary"
                    )} 
                  />
                </button>
                
                <div className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-border/30">
                      <p className="text-muted-foreground leading-relaxed font-mono text-sm mt-3">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </AnimatedGroup>

        {/* CTA */}
        <AnimatedGroup preset="blur-slide" className="text-center space-y-6">
          <div className="space-y-3">
            <h3 className="font-sans text-3xl font-semibold">
              Une question spécifique&nbsp;?
            </h3>
            <p className="text-muted-foreground font-mono max-w-xl mx-auto">
              Notre équipe est disponible pour répondre à toutes vos questions et vous conseiller 
              sur la solution la plus adaptée à vos besoins.
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-sans font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
              <a href="#contact">Poser une question</a>
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-sans font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
              <a href="tel:+33123456789">Planifier un appel</a>
            </button>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
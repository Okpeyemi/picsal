"use client";

import { Building2, User, Briefcase, ShoppingCart, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Badge } from "@/components/ui/badge";

export function TargetAudienceSection() {
  const audiences = [
    {
      type: "enterprise",
      icon: Building2,
      title: "PME & ETI",
      subtitle: "Petites et moyennes entreprises",
      description: "Vous cherchez à digitaliser vos processus, automatiser vos tâches répétitives et améliorer votre présence en ligne pour rester compétitif.",
      painPoints: [
        "Processus manuels chronophages",
        "Manque de présence digitale",
        "Gestion client désorganisée",
        "Coûts opérationnels élevés"
      ],
      solutions: [
        "Automatisation des workflows",
        "Site web professionnel",
        "CRM intelligent",
        "Analytics & reporting"
      ],
      badge: "B2B",
      color: "primary"
    },
    {
      type: "freelance",
      icon: User,
      title: "Freelances & Consultants",
      subtitle: "Professionnels indépendants",
      description: "Vous avez besoin d'une présence professionnelle forte et d'outils pour automatiser votre activité et attirer plus de clients.",
      painPoints: [
        "Manque de visibilité en ligne",
        "Gestion administrative lourde",
        "Prospection chronophage",
        "Image peu professionnelle"
      ],
      solutions: [
        "Portfolio & site vitrine",
        "Automatisation administrative",
        "Outils de prospection IA",
        "Personal branding"
      ],
      badge: "Indépendant",
      color: "secondary"
    },
    {
      type: "startup",
      icon: Zap,
      title: "Startups & Scale-ups",
      subtitle: "Entreprises en croissance",
      description: "Vous devez rapidement mettre en place des solutions scalables pour soutenir votre croissance et optimiser vos opérations.",
      painPoints: [
        "Croissance rapide difficile à gérer",
        "Besoins technologiques évolutifs",
        "Budget optimisation requis",
        "Time-to-market critique"
      ],
      solutions: [
        "Architecture évolutive",
        "MVP & prototypage rapide",
        "Intégrations natives",
        "Monitoring & analytics"
      ],
      badge: "Growth",
      color: "primary"
    },
    {
      type: "commerce",
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      subtitle: "Commerce physique et en ligne",
      description: "Vous souhaitez booster vos ventes en ligne, améliorer l'expérience client et automatiser votre gestion commerciale.",
      painPoints: [
        "Faible conversion en ligne",
        "Gestion stock complexe",
        "Service client surchargé",
        "Concurrence digitale forte"
      ],
      solutions: [
        "Site e-commerce optimisé",
        "Chatbot support client",
        "Recommandations IA",
        "Analytics comportementaux"
      ],
      badge: "E-commerce",
      color: "secondary"
    },
    {
      type: "services",
      icon: Briefcase,
      title: "Secteur des Services",
      subtitle: "Agences, cabinets, professions libérales",
      description: "Vous devez moderniser votre approche client, automatiser vos processus métier et développer votre expertise digitale.",
      painPoints: [
        "Processus métier obsolètes",
        "Gestion client inefficace",
        "Manque d'expertise tech",
        "Différenciation difficile"
      ],
      solutions: [
        "Plateforme de gestion client",
        "Automatisation sur mesure",
        "Outils d'expertise IA",
        "Dashboard analytique"
      ],
      badge: "Services",
      color: "primary"
    },
    {
      type: "association",
      icon: Users,
      title: "Associations & ONG",
      subtitle: "Organisations à but non lucratif",
      description: "Vous cherchez à maximiser votre impact avec des ressources limitées grâce à des outils digitaux efficaces et abordables.",
      painPoints: [
        "Budget serré pour la tech",
        "Gestion bénévoles complexe",
        "Communication limitée",
        "Reporting donateurs"
      ],
      solutions: [
        "Site vitrine optimisé",
        "Gestion membres automatisée",
        "Outils communication",
        "Tableaux de bord impact"
      ],
      badge: "Non-profit",
      color: "secondary"
    }
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-72 w-72 rounded-full bg-gradient-to-bl from-primary/15 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-20 left-1/4 h-80 w-80 -translate-x-1/3 rounded-full bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl" />
      </div>

      <div className="relative space-y-20">
        {/* Header */}
        <AnimatedGroup preset="blur-slide" className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Qui sont nos clients&nbsp;?
          </h2>
          <p className="text-muted-foreground font-mono text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Des entreprises et professionnels visionnaires qui comprennent que l&apos;IA et le web 
            ne sont plus des options, mais des <strong className="text-foreground">nécessités stratégiques</strong> pour rester compétitifs.
          </p>
        </AnimatedGroup>

        {/* Audience Cards Grid */}
        <AnimatedGroup 
          preset="fade" 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <div
                key={audience.type}
                className="group font-mono relative h-full flex flex-col rounded-3xl border border-border/60 bg-background/50 backdrop-blur-sm p-8 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Hover effect */}
                <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
                
                <div className="relative flex flex-col gap-6 flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-sans text-xl font-semibold">{audience.title}</h3>
                        <p className="text-sm text-muted-foreground">{audience.subtitle}</p>
                      </div>
                    </div>
                    <Badge variant={audience.color === "primary" ? "default" : "outline"} className="text-xs font-sans">
                      {audience.badge}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {audience.description}
                  </p>

                  {/* Pain Points */}
                  <div className="space-y-3">
                    <h4 className="font-sans font-medium text-sm text-destructive">Défis actuels :</h4>
                    <ul className="space-y-2">
                      {audience.painPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-destructive/60 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="space-y-3 mt-auto">
                    <h4 className="font-sans font-medium text-sm text-primary">Nos solutions :</h4>
                    <ul className="space-y-2">
                      {audience.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </AnimatedGroup>

        {/* CTA Section */}
        <AnimatedGroup preset="blur-slide" className="text-center space-y-8">
          <div className="space-y-4">
            <h3 className="font-sans text-3xl font-semibold">
              Vous vous reconnaissez&nbsp;?
            </h3>
            <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
              Peu importe votre secteur, si vous voulez <strong className="text-foreground">automatiser</strong>, 
              <strong className="text-foreground"> digitaliser</strong> et <strong className="text-foreground">
              performer</strong>, nous avons la solution.
            </p>
          </div>
          
          <div className="flex flex-col font-sans items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-xl font-sans px-8">
              <a href="#contact">Parler de votre projet</a>
            </Button>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
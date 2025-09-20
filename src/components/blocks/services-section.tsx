"use client";

import { Bot, Workflow, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServicesSection() {
  const services = [
    {
      key: "automation",
      icon: Bot,
      title: "Automatisation des Processus via l’IA",
      desc:
        "Simplifiez vos opérations avec des outils IA : automatisation des tâches répétitives, chatbots support, analyse prédictive et orchestration de vos workflows métiers.",
      benefits: [
        "Réduction des coûts opérationnels",
        "Moins d’erreurs humaines",
        "Déploiements rapides (prototype < 48h)",
      ],
      example:
        "Automatisez la gestion de vos emails clients en 48h : classification, priorisation, réponses assistées, intégration CRM.",
      tags: ["Workflows", "Chatbots", "Classification"],
      cta: { label: "Planifiez un audit gratuit", href: "/contact" },
    },
    {
      key: "webapps",
      icon: Workflow,
      title: "Solutions Web & Applications",
      desc:
        "Conception et développement de sites et applications performantes, accessibles et scalables : vitrine, tableau de bord, e‑commerce ou application métier.",
      benefits: [
        "UX & design responsive optimisés",
        "Rendu performant (SSR / SSG / PWA)",
        "Intégration APIs & architecture sécurisée",
        "SEO & temps de chargement améliorés",
      ],
      example:
        "Livraison d’un site vitrine optimisé + tableau de bord admin en 7 jours (API, analytics, CI/CD).",
      tags: ["Vitrine", "PWA", "E‑commerce", "Perf"],
      cta: { label: "Demandez une démo", href: "/contact" },
    },
  ];

  return (
    <section
      id="services"
      className="relative mx-auto max-w-7xl px-6 py-28 md:py-36"
    >
      {/* Background doux basé sur tokens */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl" />
      </div>

      <div className="relative space-y-14">
        <header className="text-center max-w-3xl mx-auto space-y-5">
          <h2 className="font-sans text-5xl font-semibold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Nos Solutions pour Votre Succès
          </h2>
          <p className="text-muted-foreground font-mono text-lg md:text-xl leading-relaxed">
            Nous combinons l’intelligence artificielle et le développement web
            pour propulser votre entreprise.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-2 items-stretch">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.key}
                className="relative group h-full flex flex-col rounded-3xl border border-border/60 bg-muted/10 backdrop-blur-sm p-10 overflow-hidden"
              >
                <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
                <div className="relative font-mono flex flex-col gap-6 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-sans text-2xl font-semibold">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                  <ul className="space-y-3">
                    {s.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm md:text-base text-muted-foreground"
                      >
                        <span className="mt-0.5 rounded-full bg-primary/15 p-1.5 text-primary">
                          <CheckCircle2 className="h-4 w-4" />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 rounded-xl border border-border/60 bg-muted/10 p-5 text-sm leading-relaxed">
                    <div className="flex items-center gap-2 mb-2 font-sans font-medium text-primary">
                      <Mail className="h-4 w-4" />
                      <span>Exemple concret</span>
                    </div>
                    <p className="text-muted-foreground">{s.example}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-[11px] font-medium tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-2">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl font-sans px-6"
                    >
                      <Link href={s.cta.href}>{s.cta.label}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { Clock, Rocket, BarChart3, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhyAiWebSection() {
  const items = [
    {
      icon: <Clock className="h-7 w-7" />,
      title: "Gain de temps",
      desc: "Automatisez les tâches répétitives pour économiser jusqu’à 50% de temps.",
    },
    {
      icon: <Rocket className="h-7 w-7" />,
      title: "Croissance des revenus",
      desc: "Sites web optimisés pour convertir vos visiteurs en clients.",
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: "Décisions intelligentes",
      desc: "Utilisez l’IA pour analyser vos données et anticiper les tendances.",
    },
    {
      icon: <Wrench className="h-7 w-7" />,
      title: "Solutions sur mesure",
      desc: "Des outils adaptés à votre secteur (PME, agences, e-commerce, etc.).",
    },
  ];

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-32">
      <h2 className="font-sans text-5xl md:text-6xl font-bold text-center mb-20">
        Pourquoi adopter l’IA et un site web optimisé&nbsp;?
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="group relative flex flex-col items-center rounded-2xl border bg-white/5 p-8 text-center shadow-lg backdrop-blur transition hover:scale-[1.03] hover:border-foreground"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="font-sans text-lg font-semibold mb-2">{item.title}</h3>
            <p className="font-mono text-muted-foreground text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button asChild size="lg" className="font-sans px-8 py-4 text-base rounded-xl">
          <a href="#services">En savoir plus sur nos solutions</a>
        </Button>
      </div>
    </section>
  );
}
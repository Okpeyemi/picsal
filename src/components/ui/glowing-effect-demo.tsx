"use client";

import { Box, Lock, Search, Settings, Sparkles, Cpu, Rocket } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Cpu className="h-4 w-4" />}
        title="Agents & RAG"
        description="Assistants métier, recherche sémantique, pipelines RAG optimisés."
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4" />}
        title="Architecture scalable"
        description="Edge, serverless, caches intelligents, observabilité intégrée."
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-4 w-4" />}
        title="Sécurité & conformité"
        description="Isolation données, chiffrement, audit trail, gouvernance."
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4" />}
        title="Automation"
        description="Réduction tâches manuelles, triggers, orchestrations."
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Rocket className="h-4 w-4" />}
        title="Accélération produit"
        description="Prototype → prod rapide, performance & itérations guidées."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-2xl border border-border/60 p-2 md:p-3">
        <GlowingEffect
          spread={50}
            glow
          disabled={false}
          proximity={72}
          inactiveZone={0.04}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-border/50 bg-background/70 backdrop-blur-sm p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="w-fit rounded-lg border border-border/50 bg-muted/60 p-2 shadow-sm">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold tracking-tight text-lg md:text-xl">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
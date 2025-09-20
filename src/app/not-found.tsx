import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";

export default function NotFound() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl" />
      </div>

      <div className="relative text-center space-y-6 font-mono">
        <AnimatedGroup preset="blur-slide" className="space-y-4">
          <p className="text-primary font-sans text-sm tracking-wider">ERREUR 404</p>
          <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight">
            Page introuvable
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Désolé, cette page n’existe pas ou a été déplacée.
          </p>
        </AnimatedGroup>

        <AnimatedGroup preset="fade" className="mt-8 flex items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-xl font-sans px-6">
            <Link href="/">Retour à l’accueil</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-xl font-sans px-6">
            <Link href="/contact">Contacter le support</Link>
          </Button>
        </AnimatedGroup>
      </div>
    </section>
  );
}
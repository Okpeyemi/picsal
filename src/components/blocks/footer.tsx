"use client";

import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { name: "Développement IA", href: "#services" },
      { name: "Sites Web", href: "#services" },
      { name: "Automatisation", href: "#services" },
      { name: "Consulting", href: "#services" },
    ],
    company: [
      { name: "À propos", href: "#about" },
      { name: "Nos clients", href: "#clients" },
      { name: "FAQ", href: "#faq" },
      { name: "Blog", href: "/blog" },
    ],
    legal: [
      { name: "Mentions légales", href: "/legal" },
      { name: "Politique de confidentialité", href: "/privacy" },
      { name: "CGV", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
    ],
    social: [
      { name: "GitHub", href: "#", icon: Github },
      { name: "LinkedIn", href: "#", icon: Linkedin },
      { name: "Twitter", href: "#", icon: Twitter },
    ],
  };

  const contact = {
    email: "maqsoudt9@gmail.com",
    phone: "+229 01 61 91 62 09",
    address: "Cotonou, Bénin",
    hours: "Lun-Ven 9h-18h",
  };

  return (
    <footer className="relative bg-background/95 backdrop-blur-sm border-t border-border/40">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-primary/5 via-primary/2 to-transparent blur-3xl" />
        <div className="absolute bottom-20 right-1/3 h-80 w-80 rounded-full bg-gradient-to-tl from-primary/8 via-primary/3 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Newsletter section */}
        <div className="border-t border-border/40 py-12">
          <AnimatedGroup preset="blur-slide" className="text-center space-y-6">
            <div className="space-y-3 max-w-2xl mx-auto">
              <h4 className="font-sans text-xl font-semibold">
                Restez informé de nos innovations
              </h4>
              <p className="text-muted-foreground font-mono text-sm">
                Recevez nos dernières actualités, cas d'usage IA et conseils tech directement dans votre boîte mail.
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row max-w-md mx-auto">
              <div className="flex w-full gap-2">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 h-11 rounded-xl border border-border/60 bg-background/50 backdrop-blur-sm px-4 text-sm placeholder:text-muted-foreground focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                />
                <Button size="default" className="rounded-xl font-sans px-6">
                  S'abonner
                </Button>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground/70 max-w-md mx-auto">
              En vous abonnant, vous acceptez de recevoir nos communications. Vous pouvez vous désabonner à tout moment.
            </p>
          </AnimatedGroup>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© {currentYear} Picscal. Tous droits réservés.</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-xs">Fait avec ❤️ au Bénin</span>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Propulsé par l'IA</span>
              <span>•</span>
              <span>Hébergé en France</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                Tous systèmes opérationnels
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
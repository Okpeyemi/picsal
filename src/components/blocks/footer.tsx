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
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <AnimatedGroup preset="fade" className="flex">
            {/* Brand section */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-4">
                <h3 className="font-sans text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Picscal
                </h3>
                <p className="text-muted-foreground font-mono leading-relaxed max-w-md">
                  Nous transformons vos idées en solutions IA et web performantes. 
                  <strong className="text-foreground"> Innovation</strong>, 
                  <strong className="text-foreground"> rapidité</strong> et 
                  <strong className="text-foreground"> expertise</strong> à votre service.
                </p>
              </div>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {contact.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <a 
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 block"
                    >
                      {contact.phone}
                    </a>
                    <span className="text-xs text-muted-foreground/70">{contact.hours}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">{contact.address}</span>
                </div>
              </div>

              {/* Social links */}
              {/* <div className="flex items-center gap-3">
                {navigation.social.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="h-10 w-10 rounded-xl bg-background border border-border/60 hover:border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200 hover:shadow-sm"
                      aria-label={item.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div> */}
            </div>

            {/* Navigation links */}
            <div className="lg:col-span-8 grid gap-8 sm:grid-cols-3">
              {/* Services */}
              <div className="space-y-4">
                <h4 className="font-sans font-semibold text-foreground">Services</h4>
                <ul className="space-y-3">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {item.name}
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h4 className="font-sans font-semibold text-foreground">Entreprise</h4>
                <ul className="space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {item.name}
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="space-y-4">
                <h4 className="font-sans font-semibold text-foreground">Légal</h4>
                <ul className="space-y-3">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {item.name}
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedGroup>
        </div>

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
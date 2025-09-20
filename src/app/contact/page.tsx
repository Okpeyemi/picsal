import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AnimatedGroup } from '@/components/ui/animated-group';

export const metadata: Metadata = {
  title: 'Contact - Devis Gratuit & Consultation IA',
  description: 'Contactez Picscal pour votre projet IA ou web. Audit gratuit, réponse sous 24h, devis personnalisé. Automatisation, chatbots, sites performants.',
  keywords: [
    'contact picscal', 'devis gratuit IA', 'consultation web', 'audit automatisation',
    'contact développeur IA', 'devis site web', 'projet digitalisation'
  ],
  alternates: {
    canonical: 'https://picscal.com/contact',
  },
  openGraph: {
    title: 'Contactez Picscal - Audit Gratuit pour votre Projet IA',
    description: 'Parlons de votre projet ! Audit gratuit, réponse rapide, solutions sur mesure.',
    url: 'https://picscal.com/contact',
  }
};

export default function ContactPage() {
  const contactInfo = {
    email: "maqsoudt9@gmail.com",
    phone: "+229 01 61 91 62 09",
    address: "Cotonou, Bénin",
    hours: "Lun-Ven 9h-18h"
  };

  const services = [
    "Automatisation des processus IA",
    "Solutions web & applications",
    "Chatbots intelligents",
    "Sites vitrine & e-commerce",
    "Intégrations CRM/ERP",
    "Audit & conseil technique"
  ];

  return (
    <>
      {/* Données structurées pour la page contact */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Picscal",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+229-01-61-91-62-09",
                "email": "maqsoudt9@gmail.com",
                "contactType": "Customer Service",
                "areaServed": "FR",
                "availableLanguage": "French"
              }
            }
          })
        }}
      />
      
      <div className="min-h-screen bg-background font-mono">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 pt-24 md:pt-32">
          <div className="container mx-auto px-4">
            <AnimatedGroup>
              <div className="text-center mb-12">
                <h1 className="font-sans text-4xl lg:text-6xl font-bold mb-6">
                  Parlons de votre{' '}
                  <span className="text-primary">projet</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Que vous cherchiez à automatiser vos processus, créer une solution web performante, 
                  ou simplement obtenir des conseils, nous sommes là pour vous accompagner.
                </p>
              </div>
            </AnimatedGroup>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <AnimatedGroup>
                <div className="bg-card border rounded-2xl p-8">
                  <div className="mb-8">
                    <h2 className="font-sans text-2xl font-bold mb-4">Décrivez-nous votre projet</h2>
                    <p className="text-muted-foreground">
                      Remplissez ce formulaire et nous vous recontactons sous 24h pour discuter de vos besoins.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input 
                          id="firstName" 
                          name="firstName" 
                          required 
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input 
                          id="lastName" 
                          name="lastName" 
                          required 
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email professionnel *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Entreprise / Organisation</Label>
                      <Input 
                        id="company" 
                        name="company" 
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="projectType">Type de projet *</Label>
                      <select 
                        id="projectType" 
                        name="projectType" 
                        required
                        className="mt-2 w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Sélectionnez un type de projet</option>
                        <option value="automation">Automatisation des processus IA</option>
                        <option value="webapp">Site web / Application</option>
                        <option value="chatbot">Chatbot intelligent</option>
                        <option value="integration">Intégration CRM/ERP</option>
                        <option value="audit">Audit & conseil</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="budget">Budget envisagé</Label>
                      <select 
                        id="budget" 
                        name="budget"
                        className="mt-2 w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Non défini</option>
                        <option value="< 5k">Moins de 5 000€</option>
                        <option value="5k-15k">5 000€ - 15 000€</option>
                        <option value="15k-50k">15 000€ - 50 000€</option>
                        <option value="50k+">Plus de 50 000€</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="timeline">Délai souhaité</Label>
                      <select 
                        id="timeline" 
                        name="timeline"
                        className="mt-2 w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Non défini</option>
                        <option value="urgent">Urgent (&lt; 1 mois)</option>
                        <option value="short">Court terme (1-3 mois)</option>
                        <option value="medium">Moyen terme (3-6 mois)</option>
                        <option value="long">Long terme (6+ mois)</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Décrivez votre projet *</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        required
                        rows={5}
                        className="mt-2"
                        placeholder="Décrivez vos besoins, objectifs, contraintes techniques, etc. Plus vous serez précis, mieux nous pourrons vous conseiller."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full font-sans">
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer ma demande
                    </Button>

                    <p className="text-xs text-muted-foreground">
                      * Champs obligatoires. Vos données sont traitées conformément à notre politique de confidentialité et ne sont jamais partagées avec des tiers.
                    </p>
                  </form>
                </div>
              </AnimatedGroup>

              {/* Contact Info & Services */}
              <div className="space-y-8">
                {/* Contact Direct */}
                <AnimatedGroup>
                  <div className="bg-card border rounded-2xl p-8">
                    <h3 className="font-sans text-xl font-bold mb-6">Contact direct</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a 
                            href={`mailto:${contactInfo.email}`}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {contactInfo.email}
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            Réponse sous 24h
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Téléphone</p>
                          <a 
                            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {contactInfo.phone}
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            Audit gratuit par téléphone
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Localisation</p>
                          <p className="text-muted-foreground">{contactInfo.address}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Hébergement France/UE
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Disponibilité</p>
                          <p className="text-muted-foreground">{contactInfo.hours}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Support 24/7 pour les urgences
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedGroup>

                {/* Services */}
                <AnimatedGroup>
                  <div className="bg-card border rounded-2xl p-8">
                    <h3 className="font-sans text-xl font-bold mb-6">Nos services</h3>
                    
                    <div className="space-y-3">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <MessageSquare className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{service}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm text-primary font-medium mb-2">
                        🎯 Audit gratuit inclus
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Nous analysons vos besoins et vous proposons la solution la plus adaptée, 
                        avec un prototype fonctionnel possible sous 48h.
                      </p>
                    </div>
                  </div>
                </AnimatedGroup>

                {/* CTA */}
                <AnimatedGroup>
                  <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border rounded-2xl p-8 text-center">
                    <h3 className="font-sans text-xl font-bold mb-4">Besoin d&apos;une réponse immédiate ?</h3>
                    <p className="text-muted-foreground mb-6">
                      Planifiez un appel de 15 minutes pour discuter de votre projet
                    </p>
                    <Button asChild size="lg" className="rounded-xl font-sans">
                      <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        Appeler maintenant
                      </a>
                    </Button>
                  </div>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ rapide */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedGroup>
              <div className="text-center mb-12">
                <h2 className="font-sans text-3xl font-bold mb-4">Questions fréquentes</h2>
                <p className="text-muted-foreground">
                  Les réponses aux questions les plus posées avant le premier contact
                </p>
              </div>
            </AnimatedGroup>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AnimatedGroup>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-sans font-medium mb-2">Combien coûte un audit ?</h3>
                    <p className="text-sm text-muted-foreground">
                      L&apos;audit initial est gratuit et sans engagement. Il nous permet d&apos;évaluer vos besoins et de vous proposer une solution adaptée.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-sans font-medium mb-2">Quels sont vos délais ?</h3>
                    <p className="text-sm text-muted-foreground">
                      Prototype en 48h, chatbot complet en 1-2 semaines, site web professionnel en 7-14 jours selon la complexité.
                    </p>
                  </div>
                </div>
              </AnimatedGroup>

              <AnimatedGroup>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-sans font-medium mb-2">Travaillez-vous à distance ?</h3>
                    <p className="text-sm text-muted-foreground">
                      Oui, nous travaillons avec des clients partout en France et en Europe. Réunions par visio et suivi projet en ligne.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-sans font-medium mb-2">Proposez-vous de la maintenance ?</h3>
                    <p className="text-sm text-muted-foreground">
                      Oui, nous offrons différents niveaux de support : maintenance, évolutions, monitoring et formation de vos équipes.
                    </p>
                  </div>
                </div>
              </AnimatedGroup>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
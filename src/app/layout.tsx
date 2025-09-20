import type { Metadata } from "next";
import { Space_Grotesk, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/blocks/header'
import { Footer } from "@/components/blocks/footer";
import { NavigationLoader } from "@/components/ui/navigation-loader";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken", 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://picscal.maqsoud.tech'),
  title: {
    default: "Picscal - Solutions IA & Web pour Entreprises | Automatisation & Sites Performants",
    template: "%s | Picscal - Solutions IA & Web"
  },
  description: "Propulsez votre entreprise avec nos solutions IA sur mesure et sites web performants. Automatisation des processus, chatbots intelligents, développement web moderne. Audit gratuit.",
  keywords: [
    "intelligence artificielle", "IA entreprise", "automatisation processus", 
    "chatbot", "développement web", "site web professionnel", "solutions digitales",
    "PME digitalisation", "startup tech", "consultation IA", "France"
  ],
  authors: [{ name: "Équipe Picscal" }],
  creator: "Picscal",
  publisher: "Picscal",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://picscal.maqsoud.tech',
    siteName: 'Picscal',
    title: 'Picscal - Solutions IA & Web pour Entreprises',
    description: 'Propulsez votre entreprise avec nos solutions IA sur mesure et sites web performants. Automatisation, chatbots, développement moderne.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Picscal - Solutions IA & Web',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Picscal - Solutions IA & Web pour Entreprises',
    description: 'Automatisation IA, sites web performants, solutions sur mesure pour PME et startups.',
    images: ['/twitter-image.jpg'],
    creator: '@picscal',
  },
  alternates: {
    canonical: 'https://picscal.maqsoud.tech',
    languages: {
      'fr-FR': 'https://picscal.maqsoud.tech',
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a1a2e" />
        
        {/* Données structurées pour l'organisation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Picscal",
              "url": "https://picscal.maqsoud.tech",
              "logo": "https://picscal.maqsoud.tech/logo.png",
              "description": "Solutions IA et développement web pour entreprises",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "FR",
                "addressLocality": "Paris"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33-1-23-45-67-89",
                "contactType": "Customer Service",
                "areaServed": "FR",
                "availableLanguage": "French"
              },
              "sameAs": [
                "https://linkedin.com/company/picscal",
                "https://twitter.com/picscal"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${space.variable} ${hanken.variable} antialiased`}
      >
        <NavigationLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

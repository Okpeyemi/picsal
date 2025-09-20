import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Actualités, cas d’usage IA et conseils web par Picscal. Les articles arrivent bientôt.",
  alternates: {
    canonical: "https://picscal.maqsoud.tech/blog",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://picscal.maqsoud.tech/blog",
    siteName: "Picscal",
    title: "Blog Picscal",
    description:
      "Actualités, cas d’usage IA et conseils web par Picscal. Les articles arrivent bientôt.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Picscal - Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Picscal",
    description:
      "Actualités, cas d’usage IA et conseils web par Picscal. Les articles arrivent bientôt.",
    images: ["/twitter-image.jpg"],
    creator: "@picscal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://picscal.maqsoud.tech",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://picscal.maqsoud.tech/blog",
      },
    ],
  };

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: "https://picscal.maqsoud.tech/blog",
    name: "Blog Picscal",
    description:
      "Actualités, cas d’usage IA et conseils web par Picscal. Les articles arrivent bientôt.",
    publisher: {
      "@type": "Organization",
      name: "Picscal",
      url: "https://picscal.maqsoud.tech",
    },
    blogPost: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />

      <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
        </div>

        <div className="relative space-y-6 text-center">
          <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight">
            Blog Picscal
          </h1>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            Nos articles arrivent bientôt. Abonnez-vous à nos actualités ou
            contactez-nous pour un audit gratuit.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 h-11 text-sm font-sans text-primary-foreground hover:bg-primary/90 transition"
            >
              Parler à un expert
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border px-6 h-11 text-sm font-sans hover:bg-accent hover:text-accent-foreground transition"
            >
              Retour à l’accueil
            </Link>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="rounded-2xl border border-border/60 bg-background/50 p-10 text-center">
            <p className="text-sm text-muted-foreground">
              Aucun article publié pour le moment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
// src/components/seo/structured-data.tsx
interface StructuredDataProps {
  data: object;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  );
}

// Usage dans vos pages
export function ServiceStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Picscal",
    "image": "https://picscal.maqsoud.tech/logo.png",
    "description": "Solutions IA et développement web pour entreprises",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates", 
      "latitude": "48.8566",
      "longitude": "2.3522"
    },
    "url": "https://picscal.maqsoud.tech",
    "telephone": "+33-1-23-45-67-89",
    "priceRange": "€€"
  };

  return <StructuredData data={data} />;
}
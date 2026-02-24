interface FAQ {
  question: string;
  answer: string;
}

interface HowToStep {
  text: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ArticleData {
  headline: string;
  description: string;
  url: string;
}

interface SEOSchemaProps {
  type: "FAQPage" | "HowTo" | "BreadcrumbList" | "Organization" | "WebApplication" | "Article";
  faqs?: FAQ[];
  howToSteps?: HowToStep[];
  howToName?: string;
  breadcrumbs?: BreadcrumbItem[];
  organizationName?: string;
  organizationUrl?: string;
  organizationLogo?: string;
  data?: ArticleData;
}

const SEOSchema = ({
  type,
  faqs,
  howToSteps,
  howToName,
  breadcrumbs,
  data,
  organizationName = "SignatureResize.in",
  organizationUrl = "https://signatureresize.in",
  organizationLogo = "https://signatureresize.in/favicon.ico",
}: SEOSchemaProps) => {
  const generateSchema = () => {
    switch (type) {
      case "FAQPage":
        if (!faqs || faqs.length === 0) return null;
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        };

      case "HowTo":
        if (!howToSteps || howToSteps.length === 0 || !howToName) return null;
        return {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: howToName,
          step: howToSteps.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            text: step.text,
          })),
        };

      case "BreadcrumbList":
        if (!breadcrumbs || breadcrumbs.length === 0) return null;
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: organizationName,
          url: organizationUrl,
          logo: organizationLogo,
          sameAs: [],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["English", "Hindi"],
          },
        };

      case "Article":
        if (!data) return null;
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: data.headline,
          description: data.description,
          url: data.url,
          publisher: {
            "@type": "Organization",
            name: "SignatureResize.in",
            url: "https://signatureresize.in",
          },
          dateModified: new Date().toISOString().split("T")[0],
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SEOSchema;

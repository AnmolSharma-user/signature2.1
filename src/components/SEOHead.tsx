import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  articleAuthor?: string;
}

const DEFAULT_OG_IMAGE = "https://signatureresize.in/assest/signature-resize-landing-page-image.png";
const DEFAULT_OG_IMAGE_WIDTH = 1200;
const DEFAULT_OG_IMAGE_HEIGHT = 630;

const SEOHead = ({
  title,
  description,
  canonicalUrl,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageWidth = DEFAULT_OG_IMAGE_WIDTH,
  ogImageHeight = DEFAULT_OG_IMAGE_HEIGHT,
  ogType = "website",
  publishedTime,
  modifiedTime,
  articleAuthor = "SignatureResize Editorial Team",
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Core meta
    updateMeta("description", description);
    if (keywords) updateMeta("keywords", keywords);

    // Open Graph
    updateMeta("og:title", title, true);
    updateMeta("og:description", description, true);
    updateMeta("og:type", ogType, true);
    updateMeta("og:image", ogImage, true);
    updateMeta("og:image:width", String(ogImageWidth), true);
    updateMeta("og:image:height", String(ogImageHeight), true);
    updateMeta("og:image:alt", title, true);

    // Twitter Card
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", ogImage);

    // Article-specific meta (for blog posts — key for Google Discover)
    if (ogType === "article") {
      updateMeta("og:type", "article", true);
      if (publishedTime) updateMeta("article:published_time", publishedTime, true);
      if (modifiedTime) updateMeta("article:modified_time", modifiedTime, true);
      updateMeta("article:author", articleAuthor, true);
      updateMeta("article:publisher", "https://signatureresize.in", true);
    }

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", canonicalUrl);
    }
  }, [title, description, canonicalUrl, keywords, ogImage, ogImageWidth, ogImageHeight, ogType, publishedTime, modifiedTime, articleAuthor]);

  return null;
};

export default SEOHead;

# Blog Generation Guide & Rules (`blogrule.md`)

This document serves as the ultimate prompt and instruction manual for the AI to seamlessly generate, format, and integrate new blog posts into the `signature2.1` React application. 

When you attach this file and say **"start"**, the AI must strictly follow the workflow below to generate 5 highly optimized, unique, and trending blog posts.

---

## 1. Topic Research & Keyword Strategy

Before writing any content, perform the following research:
- **Discover Untapped Keywords:** Find related, niche keywords that have **not been covered** in previous blogs on `signatureresize.in`.
- **Trending & Future-Focused:** The topic must be highly relevant, trending, and focused on future exams, recent latest news, or new portal updates (e.g., changes in NTA, SSC, UPSC, or state exams).
- **News Integration:** If I provide a brief about news, trends, or new updates, heavily integrate that context into the article to make it fresh and easily rankable.
- **Search Intent & Discover:** Topics must be tailored for **Google Discover** (highly engaging titles, direct answers, visually appealing structure).

*(Note to AI: Always generate 5 new, fresh, trending, and easy-to-rank blog concepts when the user initiates this workflow.)*

---

## 2. Content Quality & Formatting Rules

The blog content must strictly adhere to the following standards:
- **Tone & Style:** 100% human tone, highly engaging, unique, and designed to **bypass AI detection**.
- **Indepth Knowledge:** Content must be comprehensive, providing real value and deep insights into the topic. Avoid fluff.
- **EEAT Rules (Experience, Expertise, Authoritativeness, Trustworthiness):**
  - Always include an **Editorial Team / Author Trust Block** at the end of the post (e.g., "SignatureResize.in Editorial Team").
  - Speak from the perspective of an expert who has helped thousands of students.
- **Interlinking:** Strategically interlink to existing tools (e.g., Signature Resize, Photo Resize) and previous related blog posts for fast indexing.
- **Table of Contents (TOC):** Include a standard, clickable Table of Contents at the beginning of the post to improve user experience and SEO jump links.
- **Google Guidelines:** Strictly follow Google's latest helpful content guidelines and AI content guidelines.
- **image generation:** should have best discover freindly image generated.

---

## 3. SEO & Schema Optimization

- **High-Quality Image:** An SEO-friendly, highly optimized featured image is required. The image must be **at least 1200px wide** to qualify for Google Discover. It should be saved in `public/assest/` (e.g., `/assest/new-blog-feature.png`).
- **SEOHead:** Use the `<SEOHead />` component with a highly optimized `title`, `description`, `canonicalUrl`, `keywords`, and `ogImage`.
- **Article Schema:** Use the `<SEOSchema type="Article" />` component to provide structured data for the blog.
- **FAQ Schema (CRITICAL - AVOID DUPLICATES):** 
  - Provide a dedicated `<FAQSection faqs={faqs} />` at the bottom of the page.
  - **IMPORTANT:** Do *not* manually add a `<SEOSchema type="FAQPage" />` component anywhere on the page, because the `FAQSection` component *already* injects it automatically. Doing so will cause the "Duplicate FAQPage field" error in Search Console.

---

## 4. Monetization (Google AdSense)

The content must follow Google AdSense policies and be optimized for high CTR and earnings:
- **Ad Placements:** Use the existing `<AdContainer />` components naturally within the content flow.
  - `<AdContainer type="display" className="mb-8" />` (After Intro/TOC)
  - `<AdContainer type="infeed" className="my-8" />` (Mid-content)
  - `<AdContainer type="inarticle" className="my-8" />` (Mid-content)
  - `<AdContainer type="multiplex" />` (At the very end, before FAQs)
- Always include the `<AdSenseDisclaimer />` at the bottom of the page.

---

## 5. Implementation Workflow (Step-by-Step)

When generating the code for a new blog post, the AI must automatically execute all the following integration steps:

### Step 1: Create the Component
Create the new blog file in `src/pages/[PascalCaseName].tsx`. Structure it using `Header`, `Footer`, `SEOHead`, breadcrumbs, the content narrative, `FAQSection`, and Ad containers. Refer to `AgniveerPhotoSignatureGuide.tsx` as the gold standard template.

### Step 2: Update App Routing
Open `src/App.tsx`:
1. Import the new component at the top.
2. Add the new `<Route path="/blog-slug-url" element={<PascalCaseName />} />` inside the `<Routes>` block.

### Step 3: Update Blog Index Page
Open `src/pages/BlogPage.tsx`:
1. Add the new blog entry to the `posts` array with properties: `title`, `slug`, `desc`, `date`, `readTime`, and `category`.

### Step 4: Update HTML Sitemap (Frontend)
Open `src/pages/SitemapPage.tsx`:
1. Add the new blog link to the appropriate category array (usually `"📖 Guides & Blog"` or `"🌐 Exam-Specific Tools"`). Include a catchy `badge` like `"New"`.

### Step 5: Update XML Sitemap (Search Console)
Open `public/sitemap.xml`:
1. Add a new `<url>` block for the new blog post. Use the current date for `<lastmod>`, set `<changefreq>` to `monthly`, and `<priority>` to `0.8`.

---

**User Instructions:** Whenever you are ready to write a new blog, just drop your brief/news update with this file attached and type **"Start"**. The AI will generate 5 completely new, un-covered SEO topics. Upon your approval, the AI will generate the fully-coded pages and wire them into the router, blog pages, and sitemaps automatically.

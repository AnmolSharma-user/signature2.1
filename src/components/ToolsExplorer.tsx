import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, X } from "lucide-react";

type Category = "All" | "Trending" | "Banking" | "Police" | "Teaching & Defence" | "SSC & Railway" | "General";

interface Tool {
  href: string;
  title: string;
  desc: string;
  category: Category;
  badge?: string;
}

const tools: Tool[] = [
  // Trending
  { href: "/sbi-po-2026-photo-signature-resize", title: "SBI PO 2026", desc: "Photo 20–50KB (200×230px) · Sig 10–20KB · Deadline July 8, 2026", category: "Trending", badge: "July 8" },
  { href: "/bihar-police-photo-signature-resize", title: "Bihar Police (CSBC)", desc: "Photo 20–50KB · Sig 10–40KB · csbc.bih.nic.in", category: "Trending", badge: "Active" },
  { href: "/rajasthan-police-photo-signature-resize", title: "Rajasthan Police", desc: "Photo 50–100KB · Sig 20–50KB · Raj SSO Portal", category: "Trending", badge: "Active" },
  { href: "/mp-police-photo-signature-resize", title: "MP Police (MPPEB)", desc: "Photo 20–50KB · Sig 10–30KB · peb.mp.gov.in", category: "Trending", badge: "Active" },
  // Banking
  { href: "/sbi-po-2026-photo-signature-resize", title: "SBI PO 2026 Photo & Sig", desc: "200×230px · Photo 20–50KB · Signature 10–20KB", category: "Banking" },
  { href: "/signature-resize", title: "SBI Clerk / IBPS Signature", desc: "Resize signature to 10–20KB for any banking portal", category: "Banking" },
  { href: "/compress-image-to-20kb-online", title: "Compress to 20KB", desc: "Exact 20KB output — IBPS, SBI strict limit", category: "Banking" },
  { href: "/exam-photo-checker", title: "Exam Photo Checker", desc: "Instantly verify your photo meets bank exam specs", category: "Banking" },
  // Police
  { href: "/delhi-police-photo-signature-resize", title: "Delhi Police", desc: "Photo 20–50KB (100×120px) · Sig 10–20KB · Thumb", category: "Police" },
  { href: "/up-police-photo-signature-resize", title: "UP Police (OTR)", desc: "Photo 20–50KB · Sig 10–30KB · uppolicerecruitment.in", category: "Police" },
  { href: "/bihar-police-photo-signature-resize", title: "Bihar Police (CSBC)", desc: "Photo 20–50KB (200×230px) · Sig 10–40KB", category: "Police" },
  { href: "/rajasthan-police-photo-signature-resize", title: "Rajasthan Police", desc: "Photo 50–100KB · Sig 20–50KB · SSO Portal", category: "Police" },
  { href: "/mp-police-photo-signature-resize", title: "MP Police (MPPEB)", desc: "Photo 20–50KB · Sig 10–30KB · peb.mp.gov.in", category: "Police" },
  { href: "/hssc-photo-signature-resize", title: "HSSC / Haryana Police", desc: "Photo 10–40KB · Sig 10–30KB · CET Group C/D", category: "Police" },
  { href: "/ssc-gd-photo-signature-resize", title: "SSC GD Constable", desc: "Photo 4–40KB (160×200px) · Sig 1–20KB", category: "Police" },
  // Teaching & Defence
  { href: "/ctet-2026-photo-signature-resize", title: "CTET 2026", desc: "Photo 10–100KB (200×230px) · Sig 3–30KB · NTA portal", category: "Teaching & Defence" },
  { href: "/kvs-teacher-photo-signature-resize", title: "KVS PGT / TGT / PRT", desc: "Photo 10–200KB · Sig 4–30KB · kvsangathan.nic.in", category: "Teaching & Defence" },
  { href: "/nda-2026-photo-signature-resize", title: "NDA 2026", desc: "Square 350×350px · Photo 10–300KB · Sig 4–30KB", category: "Teaching & Defence" },
  { href: "/capf-ac-photo-signature-resize", title: "CAPF AC (BSF/CRPF/CISF)", desc: "Square 350×350px · Photo 10–300KB · UPSC portal", category: "Teaching & Defence" },
  { href: "/agniveer-agnipath-photo-signature-requirements-2026", title: "Agniveer 2026", desc: "Photo & signature specs for all Agniveer army / navy posts", category: "Teaching & Defence" },
  { href: "/upsc-signature-resize", title: "UPSC Civil Services", desc: "Photo 100–600KB (300×400px) · Sig 4–20KB", category: "Teaching & Defence" },
  // SSC & Railway
  { href: "/ssc-cgl-photo-signature-resize", title: "SSC CGL / CHSL", desc: "Photo 4–20KB (100×120px) · Sig 1–12KB · SSC OTRP", category: "SSC & Railway" },
  { href: "/ssc-gd-photo-signature-resize", title: "SSC GD Constable", desc: "Photo 4–40KB (160×200px) · Sig 1–20KB", category: "SSC & Railway" },
  { href: "/ssc-mts-signature-resize", title: "SSC MTS", desc: "Signature 10–20KB for SSC MTS 2026 application", category: "SSC & Railway" },
  { href: "/rrb-group-d-photo-signature-resize", title: "RRB Group D", desc: "Photo 20–50KB · Sig 10–40KB · Thumb 10–40KB", category: "SSC & Railway" },
  { href: "/ntpc-signature-resize", title: "RRB NTPC", desc: "Signature resize 10–20KB for NTPC application", category: "SSC & Railway" },
  { href: "/compress-image-to-20kb-online", title: "Compress to 20KB", desc: "SSC OTRP strict limit — guaranteed exact output", category: "SSC & Railway" },
  // General
  { href: "/signature-creator", title: "Signature Creator", desc: "Draw or type your signature — download as JPG instantly", category: "General" },
  { href: "/signature-resize", title: "Universal Sig Resizer", desc: "Resize any signature to any KB — works for all exams", category: "General" },
  { href: "/passport-photo-maker", title: "Passport Photo Maker", desc: "2×2 inch photo for US Visa, USCIS, Indian exam portals", category: "General" },
  { href: "/aadhaar-card-photo-resize", title: "Aadhaar Photo Resize", desc: "Under 35KB for UIDAI myAadhaar portal upload", category: "General" },
  { href: "/uti-pan-resize", title: "UTI PAN Card", desc: "Photo & signature resize for UTI PAN card application", category: "General" },
  { href: "/gate-photo-resize", title: "GATE Photo", desc: "5KB – 200KB photo for GATE 2026 application", category: "General" },
  { href: "/gate-signature-resize", title: "GATE Signature", desc: "4KB – 30KB · 160×60px for GATE exam application", category: "General" },
  { href: "/bulk-resize", title: "Bulk Resize", desc: "Resize multiple signatures at once — batch processing", category: "General" },
];

const CATEGORIES: Category[] = ["All", "Trending", "Banking", "Police", "Teaching & Defence", "SSC & Railway", "General"];

const ToolsExplorer = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return tools.filter((t) => {
      const matchCat = activeCategory === "All" || t.category === activeCategory;
      const matchQ = !q || t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, activeCategory]);

  // Deduplicate by href so the same tool doesn't appear twice in "All"
  const unique = useMemo(() => {
    const seen = new Set<string>();
    return filtered.filter((t) => {
      const key = t.href + t.category;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [filtered]);

  return (
    <div>
      {/* Search bar */}
      <div className="relative mx-auto mb-6 max-w-lg">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          type="search"
          placeholder="Search exam, e.g. SBI PO, Bihar Police, CTET…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-border bg-background pl-10 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-150 border ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      {query && (
        <p className="text-xs text-muted-foreground mb-4 text-center">
          {unique.length} result{unique.length !== 1 ? "s" : ""} for <span className="font-medium text-foreground">"{query}"</span>
        </p>
      )}

      {/* Tool cards grid */}
      {unique.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {unique.map((tool) => (
            <Link
              key={tool.href + tool.category}
              to={tool.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-primary/60 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-2 gap-2">
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{tool.title}</p>
                {tool.badge && (
                  <span className="shrink-0 text-[10px] font-semibold rounded-full bg-primary/10 text-primary px-2 py-0.5 border border-primary/20">
                    {tool.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1">{tool.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                Open Tool <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <Search className="h-8 w-8 mx-auto mb-3 opacity-30" />
          <p className="text-sm">No tools found for <span className="font-medium text-foreground">"{query}"</span></p>
          <button onClick={() => { setQuery(""); setActiveCategory("All"); }} className="mt-2 text-xs text-primary hover:underline">
            Clear search
          </button>
        </div>
      )}
    </div>
  );
};

export default ToolsExplorer;

import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import SEOSchema from "./SEOSchema";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const breadcrumbsForSchema = [
    { name: "Home", url: "https://signatureresize.in/" },
    ...items.map((item) => ({
      name: item.name,
      url: item.href
        ? `https://signatureresize.in${item.href}`
        : "https://signatureresize.in/",
    })),
  ];

  return (
    <>
      <SEOSchema type="BreadcrumbList" breadcrumbs={breadcrumbsForSchema} />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4" />
              {item.href && index < items.length - 1 ? (
                <Link
                  to={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;

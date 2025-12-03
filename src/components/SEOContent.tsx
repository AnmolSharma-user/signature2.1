interface SEOContentProps {
  title: string;
  content: React.ReactNode;
}

const SEOContent = ({ title, content }: SEOContentProps) => {
  return (
    <section className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <article className="prose prose-lg mx-auto max-w-4xl text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
          <h2 className="text-2xl font-bold">{title}</h2>
          {content}
        </article>
      </div>
    </section>
  );
};

export default SEOContent;

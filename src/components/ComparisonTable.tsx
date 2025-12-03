import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ComparisonTable = () => {
  const exams = [
    {
      name: "GATE",
      signatureSize: "4KB - 30KB",
      photoSize: "5KB - 200KB",
      signatureDimensions: "280×80 px",
      photoDimensions: "200×230 px",
      format: "JPG/JPEG",
      link: "/gate-signature-resize",
      popular: true,
    },
    {
      name: "SSC CGL/MTS/CHSL",
      signatureSize: "1KB - 12KB",
      photoSize: "4KB - 12KB",
      signatureDimensions: "140×60 px",
      photoDimensions: "100×120 px",
      format: "JPG/JPEG",
      link: "/ssc-mts-signature-resize",
      popular: true,
    },
    {
      name: "RRB NTPC",
      signatureSize: "10KB - 20KB",
      photoSize: "20KB - 50KB",
      signatureDimensions: "140×60 px",
      photoDimensions: "200×230 px",
      format: "JPG/JPEG",
      link: "/ntpc-signature-resize",
      popular: false,
    },
    {
      name: "UPSC",
      signatureSize: "4KB - 30KB",
      photoSize: "20KB - 300KB",
      signatureDimensions: "140×60 px",
      photoDimensions: "200×230 px",
      format: "JPG/JPEG",
      link: "/signature-resize",
      popular: false,
    },
    {
      name: "UTI PAN Card",
      signatureSize: "2KB - 20KB",
      photoSize: "2KB - 20KB",
      signatureDimensions: "140×60 px",
      photoDimensions: "200×230 px",
      format: "JPG/JPEG",
      link: "/uti-pan-resize",
      popular: false,
    },
    {
      name: "Bank PO/Clerk",
      signatureSize: "10KB - 20KB",
      photoSize: "20KB - 50KB",
      signatureDimensions: "140×60 px",
      photoDimensions: "200×230 px",
      format: "JPG/JPEG",
      link: "/signature-resize-10-to-20-kb",
      popular: false,
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            REQUIREMENTS GUIDE
          </span>
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Signature & Photo Requirements for All Exams
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Compare signature and photo size requirements for different government exams. Choose the right tool for your application.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full border-collapse bg-card text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-4 font-semibold text-foreground">Exam Name</th>
                <th className="px-4 py-4 font-semibold text-foreground">Signature Size</th>
                <th className="px-4 py-4 font-semibold text-foreground">Photo Size</th>
                <th className="px-4 py-4 font-semibold text-foreground">Signature Dimensions</th>
                <th className="px-4 py-4 font-semibold text-foreground">Format</th>
                <th className="px-4 py-4 font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((exam, index) => (
                <tr
                  key={index}
                  className="border-b border-border transition-colors hover:bg-accent/50"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{exam.name}</span>
                      {exam.popular && (
                        <span className="rounded bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                          Popular
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-muted-foreground">{exam.signatureSize}</td>
                  <td className="px-4 py-4 text-muted-foreground">{exam.photoSize}</td>
                  <td className="px-4 py-4 text-muted-foreground">{exam.signatureDimensions}</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-1 text-primary">
                      <Check className="h-4 w-4" />
                      {exam.format}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <Button asChild size="sm" variant="outline">
                      <Link to={exam.link}>Use Tool →</Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <>
      <SEOHead
        title="Disclaimer | SignatureResize.in"
        description="Important disclaimer for SignatureResize.in. We are not affiliated with any government exam authority. Read before using."
        canonicalUrl="https://signatureresize.in/disclaimer"
        keywords="disclaimer, signature tool disclaimer"
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Disclaimer
              </h1>
              <p className="text-muted-foreground">
                Important information about using SignatureResize.in
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* Important Notice */}
              <div className="mb-8 flex gap-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-6">
                <AlertTriangle className="h-6 w-6 shrink-0 text-yellow-600" />
                <div>
                  <h2 className="mb-2 text-lg font-semibold text-foreground">Important Notice</h2>
                  <p className="text-muted-foreground">
                    Please read this disclaimer carefully before using our signature resize tool. 
                    By using SignatureResize.in, you acknowledge that you have read and understood 
                    this disclaimer.
                  </p>
                </div>
              </div>

              <article className="prose prose-lg text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
                
                <h2>No Affiliation with Government Bodies</h2>
                <p>
                  SignatureResize.in is an independent, privately-operated website. We are 
                  <strong> not affiliated with, endorsed by, sponsored by, or in any way 
                  officially connected to</strong> any government examination authority, 
                  recruitment board, or government agency, including but not limited to:
                </p>
                <ul>
                  <li>Graduate Aptitude Test in Engineering (GATE)</li>
                  <li>Staff Selection Commission (SSC)</li>
                  <li>Railway Recruitment Board (RRB)</li>
                  <li>Union Public Service Commission (UPSC)</li>
                  <li>National Testing Agency (NTA)</li>
                  <li>Institute of Banking Personnel Selection (IBPS)</li>
                  <li>UTI Infrastructure Technology And Services Ltd (UTIITSL)</li>
                  <li>Any state public service commission</li>
                  <li>Any central or state government department</li>
                </ul>
                <p>
                  All exam names, logos, trademarks, and requirements mentioned on this website 
                  are the property of their respective owners and are used here solely for 
                  identification and informational purposes.
                </p>

                <h2>Information Accuracy</h2>
                <p>
                  While we make every effort to provide accurate and up-to-date information 
                  about exam requirements, we cannot guarantee that all information on this 
                  website is current, complete, or accurate at all times.
                </p>
                <p>
                  <strong>Exam requirements change frequently.</strong> Always verify the latest 
                  signature and photo requirements directly from official exam websites before 
                  submitting your application. We recommend checking:
                </p>
                <ul>
                  <li>Official exam notification PDF</li>
                  <li>Official exam website FAQ section</li>
                  <li>Application form guidelines</li>
                </ul>

                <h2>No Guarantee of Acceptance</h2>
                <p>
                  Using our tool does not guarantee that your signature or photo will be 
                  accepted by exam portals or other applications. Acceptance depends on many 
                  factors beyond file size, including:
                </p>
                <ul>
                  <li>Image quality and clarity</li>
                  <li>Proper scanning technique</li>
                  <li>Correct signature format (handwritten, not typed)</li>
                  <li>Background color and contrast</li>
                  <li>Current requirements that may have changed</li>
                </ul>
                <p>
                  If your application is rejected due to signature or photo issues, we cannot 
                  be held responsible. We strongly recommend testing your resized images well 
                  before the application deadline.
                </p>

                <h2>Use at Your Own Risk</h2>
                <p>
                  The signature resize service is provided free of charge, and you use it at 
                  your own risk. We shall not be liable for any direct, indirect, incidental, 
                  special, consequential, or exemplary damages resulting from:
                </p>
                <ul>
                  <li>Your use or inability to use our service</li>
                  <li>Application rejection due to image issues</li>
                  <li>Missed deadlines or opportunities</li>
                  <li>Any other matter relating to the service</li>
                </ul>

                <h2>Technical Limitations</h2>
                <p>
                  Our tool processes images entirely in your browser using JavaScript. While 
                  this approach ensures privacy, it also means:
                </p>
                <ul>
                  <li>Results may vary slightly across different browsers</li>
                  <li>Very large images may cause performance issues on some devices</li>
                  <li>The tool requires a modern web browser to function properly</li>
                  <li>Some image formats may not be supported</li>
                </ul>

                <h2>External Links</h2>
                <p>
                  Our website may contain links to third-party websites. These links are 
                  provided for your convenience and reference only. We do not control and 
                  are not responsible for the content, privacy policies, or practices of 
                  any third-party websites.
                </p>

                <h2>Advertising</h2>
                <p>
                  This website may display advertisements from third-party advertising networks. 
                  We do not endorse any products or services advertised on our website. Any 
                  dealings you have with advertisers found on this site are between you and 
                  the advertiser.
                </p>

                <h2>Keep Original Images</h2>
                <p>
                  <strong>Always keep backup copies of your original signature and photo images.</strong> 
                  Our tool only produces resized versions. If you need to try different settings 
                  or sizes, you'll need your original high-quality images.
                </p>

                <h2>Changes to This Disclaimer</h2>
                <p>
                  We reserve the right to update or change this disclaimer at any time. Changes 
                  will be posted on this page with an updated date. Your continued use of the 
                  website after any changes indicates your acceptance of the updated disclaimer.
                </p>

                <h2>Contact</h2>
                <p>
                  If you have any questions about this disclaimer, please contact us at 
                  support@signatureresize.in.
                </p>

              </article>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Disclaimer;
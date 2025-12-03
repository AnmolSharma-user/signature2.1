import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | SignatureResize.in"
        description="Your privacy matters. Learn how SignatureResize.in protects your data. All image processing happens locally in your browser."
        canonicalUrl="https://signatureresize.in/privacy-policy"
        keywords="privacy policy, data protection, signature privacy"
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last Updated: December 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <article className="prose prose-lg mx-auto max-w-4xl text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
              
              <p>
                At SignatureResize.in, we take your privacy seriously. This Privacy Policy explains 
                how we handle your information when you use our signature resize tool and website.
              </p>

              <h2>Our Privacy Commitment</h2>
              <p>
                <strong>We do not collect, store, or transmit your images.</strong> This is the 
                most important thing you need to know about our service. When you upload a signature 
                or photo to resize, the entire process happens locally in your web browser using 
                JavaScript. Your images never leave your device.
              </p>

              <h2>How Our Tool Works</h2>
              <p>
                Our signature resize tool uses client-side image processing. Here's what that means 
                for your privacy:
              </p>
              <ul>
                <li>
                  <strong>No Server Uploads:</strong> Your signature images are processed entirely 
                  within your browser. We don't have servers that receive or store your images.
                </li>
                <li>
                  <strong>No Cloud Storage:</strong> Your files are not saved to any cloud service 
                  or external database.
                </li>
                <li>
                  <strong>Immediate Deletion:</strong> Once you close the browser tab or navigate 
                  away, your uploaded images are automatically cleared from browser memory.
                </li>
                <li>
                  <strong>No Tracking of Image Content:</strong> We cannot see, access, or analyze 
                  the content of your signatures or photos.
                </li>
              </ul>

              <h2>Information We Collect</h2>
              <p>
                While we don't collect your images, we may collect limited information to improve 
                our service:
              </p>
              
              <h3>Analytics Data</h3>
              <p>
                We use Google Analytics to understand how visitors use our website. This includes:
              </p>
              <ul>
                <li>Pages visited and time spent on each page</li>
                <li>Browser type and device information</li>
                <li>Approximate geographic location (country/city level)</li>
                <li>Referral sources (how you found our website)</li>
              </ul>
              <p>
                This data is anonymized and aggregated. We cannot identify individual users from 
                this information.
              </p>

              <h3>Contact Information</h3>
              <p>
                If you contact us through our contact form, we collect:
              </p>
              <ul>
                <li>Your name</li>
                <li>Email address</li>
                <li>Message content</li>
              </ul>
              <p>
                This information is used solely to respond to your inquiries and is not shared 
                with third parties.
              </p>

              <h2>Cookies</h2>
              <p>
                We use cookies for the following purposes:
              </p>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Required for basic website functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Used by Google Analytics to understand 
                  website usage patterns
                </li>
                <li>
                  <strong>Preference Cookies:</strong> To remember your settings like dark/light 
                  mode preference
                </li>
              </ul>
              <p>
                You can disable cookies in your browser settings, though this may affect some 
                website functionality.
              </p>

              <h2>Third-Party Services</h2>
              <p>
                Our website may use the following third-party services:
              </p>
              <ul>
                <li>
                  <strong>Google Analytics:</strong> For website traffic analysis. Google's 
                  privacy policy applies to data they collect.
                </li>
                <li>
                  <strong>Google AdSense:</strong> For displaying advertisements. These ads may 
                  use cookies to serve personalized content based on your browsing history.
                </li>
              </ul>
              <p>
                You can opt out of personalized advertising through Google's Ad Settings or by 
                using browser extensions that block tracking.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our service is not directed to children under 13 years of age. We do not knowingly 
                collect personal information from children. If you are a parent and believe your 
                child has provided us with personal information, please contact us.
              </p>

              <h2>Data Security</h2>
              <p>
                Since we don't store your signature images, there is no risk of your images being 
                exposed through a data breach on our end. For the limited data we do collect 
                (analytics, contact form submissions), we use industry-standard security measures.
              </p>

              <h2>Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Request information about what data we have collected from you</li>
                <li>Request deletion of any personal data we hold</li>
                <li>Opt out of analytics tracking</li>
                <li>Contact us with privacy concerns</li>
              </ul>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any 
                significant changes by posting the new policy on this page with an updated 
                revision date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, 
                please contact us at:
              </p>
              <p>
                Email: support@signatureresize.in
              </p>

            </article>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignatureResize from "./pages/SignatureResize";
import SignatureResize10to20KB from "./pages/SignatureResize10to20KB";
import GATESignatureResize from "./pages/GATESignatureResize";
import SSCMTSSignatureResize from "./pages/SSCMTSSignatureResize";
import NTPCSignatureResize from "./pages/NTPCSignatureResize";
import GATEPhotoResize from "./pages/GATEPhotoResize";
import UTIPANResize from "./pages/UTIPANResize";
import SignatureSize50KB from "./pages/SignatureSize50KB";
import UPSCSignatureResize from "./pages/UPSCSignatureResize";
import JEESignatureResize from "./pages/JEESignatureResize";
import BulkResize from "./pages/BulkResize";
import GDSPhotoSignatureResize from "./pages/GDSPhotoSignatureResize";
import NEETPhotoSignatureResize from "./pages/NEETPhotoSignatureResize";
import IBPSPhotoSignatureResize from "./pages/IBPSPhotoSignatureResize";
import ThumbImpressionResize from "./pages/ThumbImpressionResize";
import HowToScanSignature from "./pages/HowToScanSignature";
import ExamPhotoSignatureGuide from "./pages/ExamPhotoSignatureGuide";
import SignatureUploadErrors from "./pages/SignatureUploadErrors";
import UPSCTripleSignatureGuide from "./pages/UPSCTripleSignatureGuide";
import PassportPhotoAtHome from "./pages/PassportPhotoAtHome";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import GoogleAnalytics from "./components/GoogleAnalytics";
import PWAInstallPrompt from "./components/PWAInstallPrompt";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GoogleAnalytics />
        <PWAInstallPrompt />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signature-resize" element={<SignatureResize />} />
          <Route path="/signature-resize-10-to-20-kb" element={<SignatureResize10to20KB />} />
          <Route path="/gate-signature-resize" element={<GATESignatureResize />} />
          <Route path="/ssc-mts-signature-resize" element={<SSCMTSSignatureResize />} />
          <Route path="/ntpc-signature-resize" element={<NTPCSignatureResize />} />
          <Route path="/gate-photo-resize" element={<GATEPhotoResize />} />
          <Route path="/uti-pan-resize" element={<UTIPANResize />} />
          <Route path="/50kb-signature-size" element={<SignatureSize50KB />} />
          <Route path="/upsc-signature-resize" element={<UPSCSignatureResize />} />
          <Route path="/jee-signature-resize" element={<JEESignatureResize />} />
          <Route path="/bulk-resize" element={<BulkResize />} />
          <Route path="/gds-photo-signature-resize" element={<GDSPhotoSignatureResize />} />
          <Route path="/neet-photo-signature-resize" element={<NEETPhotoSignatureResize />} />
          <Route path="/ibps-photo-signature-resize" element={<IBPSPhotoSignatureResize />} />
          <Route path="/thumb-impression-resize" element={<ThumbImpressionResize />} />
          <Route path="/how-to-scan-signature-for-online-forms" element={<HowToScanSignature />} />
          <Route path="/exam-photo-signature-requirements-2026" element={<ExamPhotoSignatureGuide />} />
          <Route path="/signature-upload-errors-and-fixes" element={<SignatureUploadErrors />} />
          <Route path="/upsc-triple-signature-guide" element={<UPSCTripleSignatureGuide />} />
          <Route path="/how-to-take-passport-photo-at-home-for-exams" element={<PassportPhotoAtHome />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

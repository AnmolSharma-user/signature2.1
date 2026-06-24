import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollRestoration from "@/components/ScrollRestoration";
import BackToTopButton from "@/components/BackToTopButton";
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
import SignatureCreatorPage from "./pages/SignatureCreatorPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import DigitalSignatureWithoutScanner from "./pages/DigitalSignatureWithoutScanner";
import SSCCGLPhotoSignatureGuide from "./pages/SSCCGLPhotoSignatureGuide";
import JPGvsPNGForExams from "./pages/JPGvsPNGForExams";
import PhotoResizeForAdmitCard from "./pages/PhotoResizeForAdmitCard";
import CropSignatureFromScan from "./pages/CropSignatureFromScan";
import SBIPOClerkPhotoSignatureGuide from "./pages/SBIPOClerkPhotoSignatureGuide";
import PhotoRejectionReasons from "./pages/PhotoRejectionReasons";
import NTAExamPhotoGuidelines from "./pages/NTAExamPhotoGuidelines";
import SignatureWhiteBackgroundPhone from "./pages/SignatureWhiteBackgroundPhone";
import PANCardPhotoResize from "./pages/PANCardPhotoResize";
import SafeToResizeOnline from "./pages/SafeToResizeOnline";
import ImageDPIvsKB from "./pages/ImageDPIvsKB";
import BlogPage from "./pages/BlogPage";
import GoogleAnalytics from "./components/GoogleAnalytics";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import AgniveerPhotoSignatureGuide from "./pages/AgniveerPhotoSignatureGuide";
import CUETPhotoSignatureGuide from "./pages/CUETPhotoSignatureGuide";
import DigitalVsWetSignatureGuide from "./pages/DigitalVsWetSignatureGuide";
import USVisaPhotoResize from "./pages/USVisaPhotoResize";
import USCISPhotoSignatureGuide from "./pages/USCISPhotoSignatureGuide";
import ExamPhotoCheckerTool from "./pages/ExamPhotoCheckerTool";
import PassportPhotoMakerTool from "./pages/PassportPhotoMakerTool";
import RRBGroupDPhotoSignatureResize from "./pages/RRBGroupDPhotoSignatureResize";
import AadhaarCardPhotoResize from "./pages/AadhaarCardPhotoResize";
import CompressImageTo20KB from "./pages/CompressImageTo20KB";
import RRBNTPCPhotoGuide2026 from "./pages/RRBNTPCPhotoGuide2026";
import RRBAlpPhotoSignatureGuide2026 from "./pages/RRBAlpPhotoSignatureGuide2026";
import SignatureRejection10KB20KBFix from "./pages/SignatureRejection10KB20KBFix";
import TNPSCPhotoCompressor from "./pages/TNPSCPhotoCompressor";
import SitemapPage from "./pages/SitemapPage";
import SSCCGLPhotoSignatureResize from "./pages/SSCCGLPhotoSignatureResize";
import SBIPOClerkPhotoSignatureResize from "./pages/SBIPOClerkPhotoSignatureResize";
import SSCGDPhotoSignatureResize from "./pages/SSCGDPhotoSignatureResize";
import BPSCPhotoSignatureResize from "./pages/BPSCPhotoSignatureResize";
import UPPolicePhotoSignatureResize from "./pages/UPPolicePhotoSignatureResize";
import MPSCPhotoSignatureResize from "./pages/MPSCPhotoSignatureResize";
import JEEMainPhotoResize from "./pages/JEEMainPhotoResize";
import AddNameDateToPhoto from "./pages/AddNameDateToPhoto";
import UPPSCROAROPhotoSignatureGuide from "./pages/UPPSCROAROPhotoSignatureGuide";
import MobilePhotoCompress20KB from "./pages/MobilePhotoCompress20KB";
import WhiteBackgroundExamRule from "./pages/WhiteBackgroundExamRule";
import EPFOSSAThumbSignatureGuide from "./pages/EPFOSSAThumbSignatureGuide";
import BlurryAdmitCardPhotoFix from "./pages/BlurryAdmitCardPhotoFix";
import SSCCHSLPhotoSignatureGuide from "./pages/SSCCHSLPhotoSignatureGuide";
import IBPSPOClerkPhotoSignatureGuide from "./pages/IBPSPOClerkPhotoSignatureGuide";
import RPFConstableSIPhotoSignatureGuide from "./pages/RPFConstableSIPhotoSignatureGuide";
import HowToAddNameDateToExamPhoto from "./pages/HowToAddNameDateToExamPhoto";
import PassportPhotoSizeGuideAllExams from "./pages/PassportPhotoSizeGuideAllExams";
import RequestExam from "./pages/RequestExam";
import AdvertiseWithUs from "./pages/AdvertiseWithUs";
import DelhiPolicePhotoSignatureResize from "./pages/DelhiPolicePhotoSignatureResize";
import HSPCPhotoSignatureResize from "./pages/HSPCPhotoSignatureResize";
import SBIPOPhotoSignatureResize2026 from "./pages/SBIPOPhotoSignatureResize2026";
import BiharPolicePhotoSignatureResize from "./pages/BiharPolicePhotoSignatureResize";
import RajasthanPolicePhotoSignatureResize from "./pages/RajasthanPolicePhotoSignatureResize";
import MPPolicePhotoSignatureResize from "./pages/MPPolicePhotoSignatureResize";
import CTETPhotoSignatureResize2026 from "./pages/CTETPhotoSignatureResize2026";
import NDAPhotoSignatureResize2026 from "./pages/NDAPhotoSignatureResize2026";
import KVSTeacherPhotoSignatureResize from "./pages/KVSTeacherPhotoSignatureResize";
import CAPFACPhotoSignatureResize from "./pages/CAPFACPhotoSignatureResize";

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
          <Route path="/signature-creator" element={<SignatureCreatorPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/create-digital-signature-without-scanner" element={<DigitalSignatureWithoutScanner />} />
          <Route path="/ssc-cgl-photo-signature-upload-guide-2026" element={<SSCCGLPhotoSignatureGuide />} />
          <Route path="/jpg-vs-png-for-government-exam-forms" element={<JPGvsPNGForExams />} />
          <Route path="/photo-resize-for-admit-card-mark-sheet" element={<PhotoResizeForAdmitCard />} />
          <Route path="/crop-signature-from-full-page-scan" element={<CropSignatureFromScan />} />
          <Route path="/sbi-po-clerk-photo-signature-resize-guide-2026" element={<SBIPOClerkPhotoSignatureGuide />} />
          <Route path="/why-exam-portal-rejecting-photo-10-reasons" element={<PhotoRejectionReasons />} />
          <Route path="/nta-exam-photo-signature-guidelines-2026" element={<NTAExamPhotoGuidelines />} />
          <Route path="/signature-photo-white-background-phone" element={<SignatureWhiteBackgroundPhone />} />
          <Route path="/pan-card-photo-signature-resize" element={<PANCardPhotoResize />} />
          <Route path="/is-it-safe-to-resize-signature-online" element={<SafeToResizeOnline />} />
          <Route path="/image-dpi-vs-kb-vs-pixels-exam-portals" element={<ImageDPIvsKB />} />
          <Route path="/agniveer-agnipath-photo-signature-requirements-2026" element={<AgniveerPhotoSignatureGuide />} />
          <Route path="/cuet-ug-photo-signature-upload-guide-2026" element={<CUETPhotoSignatureGuide />} />
          <Route path="/digital-signature-vs-wet-signature-government-portals" element={<DigitalVsWetSignatureGuide />} />
          <Route path="/resize-passport-photo-us-visa-ds-160" element={<USVisaPhotoResize />} />
          <Route path="/resize-photo-signature-uscis-immigration-forms" element={<USCISPhotoSignatureGuide />} />
          <Route path="/exam-photo-checker" element={<ExamPhotoCheckerTool />} />
          <Route path="/passport-photo-maker" element={<PassportPhotoMakerTool />} />
          <Route path="/rrb-group-d-photo-signature-resize" element={<RRBGroupDPhotoSignatureResize />} />
          <Route path="/aadhaar-card-photo-resize" element={<AadhaarCardPhotoResize />} />
          <Route path="/compress-image-to-20kb-online" element={<CompressImageTo20KB />} />
          <Route path="/rrb-ntpc-2026-photo-signature-upload-guide" element={<RRBNTPCPhotoGuide2026 />} />
          <Route path="/rrb-alp-2026-photo-signature-upload-guide" element={<RRBAlpPhotoSignatureGuide2026 />} />
          <Route path="/why-signature-rejected-10kb-20kb-fix-2026" element={<SignatureRejection10KB20KBFix />} />
          <Route path="/tnpsc-photo-compressor" element={<TNPSCPhotoCompressor />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/ssc-cgl-photo-signature-resize" element={<SSCCGLPhotoSignatureResize />} />
          <Route path="/sbi-po-photo-signature-resize" element={<SBIPOClerkPhotoSignatureResize />} />
          <Route path="/ssc-gd-photo-signature-resize" element={<SSCGDPhotoSignatureResize />} />
          <Route path="/bpsc-photo-signature-resize" element={<BPSCPhotoSignatureResize />} />
          <Route path="/up-police-photo-signature-resize" element={<UPPolicePhotoSignatureResize />} />
          <Route path="/mpsc-photo-signature-resize" element={<MPSCPhotoSignatureResize />} />
          <Route path="/jee-main-photo-resize" element={<JEEMainPhotoResize />} />
          <Route path="/add-name-date-to-photo" element={<AddNameDateToPhoto />} />
          <Route path="/uppsc-ro-aro-photo-signature-rules-2026" element={<UPPSCROAROPhotoSignatureGuide />} />
          <Route path="/mobile-photo-compress-20kb-no-app" element={<MobilePhotoCompress20KB />} />
          <Route path="/white-background-exam-rule-explained" element={<WhiteBackgroundExamRule />} />
          <Route path="/epfo-ssa-thumb-impression-signature-guide" element={<EPFOSSAThumbSignatureGuide />} />
          <Route path="/blurry-admit-card-photo-fix" element={<BlurryAdmitCardPhotoFix />} />
          <Route path="/ssc-chsl-photo-signature-guide-2026" element={<SSCCHSLPhotoSignatureGuide />} />
          <Route path="/ibps-po-clerk-photo-signature-guide-2026" element={<IBPSPOClerkPhotoSignatureGuide />} />
          <Route path="/rpf-constable-si-photo-signature-guide-2026" element={<RPFConstableSIPhotoSignatureGuide />} />
          <Route path="/how-to-add-name-date-to-exam-photo-free" element={<HowToAddNameDateToExamPhoto />} />
          <Route path="/passport-photo-size-guide-all-indian-exams-2026" element={<PassportPhotoSizeGuideAllExams />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/request-exam" element={<RequestExam />} />
          <Route path="/advertise" element={<AdvertiseWithUs />} />
          <Route path="/delhi-police-photo-signature-resize" element={<DelhiPolicePhotoSignatureResize />} />
          <Route path="/hssc-photo-signature-resize" element={<HSPCPhotoSignatureResize />} />
          <Route path="/sbi-po-2026-photo-signature-resize" element={<SBIPOPhotoSignatureResize2026 />} />
          <Route path="/bihar-police-photo-signature-resize" element={<BiharPolicePhotoSignatureResize />} />
          <Route path="/rajasthan-police-photo-signature-resize" element={<RajasthanPolicePhotoSignatureResize />} />
          <Route path="/mp-police-photo-signature-resize" element={<MPPolicePhotoSignatureResize />} />
          <Route path="/ctet-2026-photo-signature-resize" element={<CTETPhotoSignatureResize2026 />} />
          <Route path="/nda-2026-photo-signature-resize" element={<NDAPhotoSignatureResize2026 />} />
          <Route path="/kvs-teacher-photo-signature-resize" element={<KVSTeacherPhotoSignatureResize />} />
          <Route path="/capf-ac-photo-signature-resize" element={<CAPFACPhotoSignatureResize />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollRestoration />
        <BackToTopButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

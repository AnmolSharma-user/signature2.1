import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollRestoration from "@/components/ScrollRestoration";
import BackToTopButton from "@/components/BackToTopButton";
import GoogleAnalytics from "./components/GoogleAnalytics";
import PWAInstallPrompt from "./components/PWAInstallPrompt";

// Lazy load all pages for code splitting (fixes large bundle / INP issue)
const Index = lazy(() => import("./pages/Index"));
const SignatureResize = lazy(() => import("./pages/SignatureResize"));
const SignatureResize10to20KB = lazy(() => import("./pages/SignatureResize10to20KB"));
const GATESignatureResize = lazy(() => import("./pages/GATESignatureResize"));
const SSCMTSSignatureResize = lazy(() => import("./pages/SSCMTSSignatureResize"));
const NTPCSignatureResize = lazy(() => import("./pages/NTPCSignatureResize"));
const GATEPhotoResize = lazy(() => import("./pages/GATEPhotoResize"));
const UTIPANResize = lazy(() => import("./pages/UTIPANResize"));
const SignatureSize50KB = lazy(() => import("./pages/SignatureSize50KB"));
const UPSCSignatureResize = lazy(() => import("./pages/UPSCSignatureResize"));
const JEESignatureResize = lazy(() => import("./pages/JEESignatureResize"));
const BulkResize = lazy(() => import("./pages/BulkResize"));
const GDSPhotoSignatureResize = lazy(() => import("./pages/GDSPhotoSignatureResize"));
const NEETPhotoSignatureResize = lazy(() => import("./pages/NEETPhotoSignatureResize"));
const IBPSPhotoSignatureResize = lazy(() => import("./pages/IBPSPhotoSignatureResize"));
const ThumbImpressionResize = lazy(() => import("./pages/ThumbImpressionResize"));
const HowToScanSignature = lazy(() => import("./pages/HowToScanSignature"));
const ExamPhotoSignatureGuide = lazy(() => import("./pages/ExamPhotoSignatureGuide"));
const SignatureUploadErrors = lazy(() => import("./pages/SignatureUploadErrors"));
const UPSCTripleSignatureGuide = lazy(() => import("./pages/UPSCTripleSignatureGuide"));
const PassportPhotoAtHome = lazy(() => import("./pages/PassportPhotoAtHome"));
const SignatureCreatorPage = lazy(() => import("./pages/SignatureCreatorPage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DigitalSignatureWithoutScanner = lazy(() => import("./pages/DigitalSignatureWithoutScanner"));
const SSCCGLPhotoSignatureGuide = lazy(() => import("./pages/SSCCGLPhotoSignatureGuide"));
const JPGvsPNGForExams = lazy(() => import("./pages/JPGvsPNGForExams"));
const PhotoResizeForAdmitCard = lazy(() => import("./pages/PhotoResizeForAdmitCard"));
const CropSignatureFromScan = lazy(() => import("./pages/CropSignatureFromScan"));
const SBIPOClerkPhotoSignatureGuide = lazy(() => import("./pages/SBIPOClerkPhotoSignatureGuide"));
const PhotoRejectionReasons = lazy(() => import("./pages/PhotoRejectionReasons"));
const NTAExamPhotoGuidelines = lazy(() => import("./pages/NTAExamPhotoGuidelines"));
const SignatureWhiteBackgroundPhone = lazy(() => import("./pages/SignatureWhiteBackgroundPhone"));
const PANCardPhotoResize = lazy(() => import("./pages/PANCardPhotoResize"));
const SafeToResizeOnline = lazy(() => import("./pages/SafeToResizeOnline"));
const ImageDPIvsKB = lazy(() => import("./pages/ImageDPIvsKB"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const AgniveerPhotoSignatureGuide = lazy(() => import("./pages/AgniveerPhotoSignatureGuide"));
const CUETPhotoSignatureGuide = lazy(() => import("./pages/CUETPhotoSignatureGuide"));
const DigitalVsWetSignatureGuide = lazy(() => import("./pages/DigitalVsWetSignatureGuide"));
const USVisaPhotoResize = lazy(() => import("./pages/USVisaPhotoResize"));
const USCISPhotoSignatureGuide = lazy(() => import("./pages/USCISPhotoSignatureGuide"));
const ExamPhotoCheckerTool = lazy(() => import("./pages/ExamPhotoCheckerTool"));
const PassportPhotoMakerTool = lazy(() => import("./pages/PassportPhotoMakerTool"));
const PassportSizePhotoMaker = lazy(() => import("./pages/PassportSizePhotoMaker"));
const RRBGroupDPhotoSignatureResize = lazy(() => import("./pages/RRBGroupDPhotoSignatureResize"));
const AadhaarCardPhotoResize = lazy(() => import("./pages/AadhaarCardPhotoResize"));
const CompressImageTo20KB = lazy(() => import("./pages/CompressImageTo20KB"));
const CompressImageToKB = lazy(() => import("./pages/CompressImageToKB"));
const RRBNTPCPhotoGuide2026 = lazy(() => import("./pages/RRBNTPCPhotoGuide2026"));
const RRBAlpPhotoSignatureGuide2026 = lazy(() => import("./pages/RRBAlpPhotoSignatureGuide2026"));
const SignatureRejection10KB20KBFix = lazy(() => import("./pages/SignatureRejection10KB20KBFix"));
const TNPSCPhotoCompressor = lazy(() => import("./pages/TNPSCPhotoCompressor"));
const SitemapPage = lazy(() => import("./pages/SitemapPage"));
const SSCCGLPhotoSignatureResize = lazy(() => import("./pages/SSCCGLPhotoSignatureResize"));
const SSCGDPhotoSignatureResize = lazy(() => import("./pages/SSCGDPhotoSignatureResize"));
const BPSCPhotoSignatureResize = lazy(() => import("./pages/BPSCPhotoSignatureResize"));
const UPPolicePhotoSignatureResize = lazy(() => import("./pages/UPPolicePhotoSignatureResize"));
const MPSCPhotoSignatureResize = lazy(() => import("./pages/MPSCPhotoSignatureResize"));
const JEEMainPhotoResize = lazy(() => import("./pages/JEEMainPhotoResize"));
const AddNameDateToPhoto = lazy(() => import("./pages/AddNameDateToPhoto"));
const UPPSCROAROPhotoSignatureGuide = lazy(() => import("./pages/UPPSCROAROPhotoSignatureGuide"));
const MobilePhotoCompress20KB = lazy(() => import("./pages/MobilePhotoCompress20KB"));
const WhiteBackgroundExamRule = lazy(() => import("./pages/WhiteBackgroundExamRule"));
const EPFOSSAThumbSignatureGuide = lazy(() => import("./pages/EPFOSSAThumbSignatureGuide"));
const BlurryAdmitCardPhotoFix = lazy(() => import("./pages/BlurryAdmitCardPhotoFix"));
const SSCCHSLPhotoSignatureGuide = lazy(() => import("./pages/SSCCHSLPhotoSignatureGuide"));
const IBPSPOClerkPhotoSignatureGuide = lazy(() => import("./pages/IBPSPOClerkPhotoSignatureGuide"));
const RPFConstableSIPhotoSignatureGuide = lazy(() => import("./pages/RPFConstableSIPhotoSignatureGuide"));
const HowToAddNameDateToExamPhoto = lazy(() => import("./pages/HowToAddNameDateToExamPhoto"));
const PassportPhotoSizeGuideAllExams = lazy(() => import("./pages/PassportPhotoSizeGuideAllExams"));
const RequestExam = lazy(() => import("./pages/RequestExam"));
const AdvertiseWithUs = lazy(() => import("./pages/AdvertiseWithUs"));
const DelhiPolicePhotoSignatureResize = lazy(() => import("./pages/DelhiPolicePhotoSignatureResize"));
const HSPCPhotoSignatureResize = lazy(() => import("./pages/HSPCPhotoSignatureResize"));
const SBIPOPhotoSignatureResize2026 = lazy(() => import("./pages/SBIPOPhotoSignatureResize2026"));
const BiharPolicePhotoSignatureResize = lazy(() => import("./pages/BiharPolicePhotoSignatureResize"));
const RajasthanPolicePhotoSignatureResize = lazy(() => import("./pages/RajasthanPolicePhotoSignatureResize"));
const MPPolicePhotoSignatureResize = lazy(() => import("./pages/MPPolicePhotoSignatureResize"));
const CTETPhotoSignatureResize2026 = lazy(() => import("./pages/CTETPhotoSignatureResize2026"));
const NDAPhotoSignatureResize2026 = lazy(() => import("./pages/NDAPhotoSignatureResize2026"));
const KVSTeacherPhotoSignatureResize = lazy(() => import("./pages/KVSTeacherPhotoSignatureResize"));
const CAPFACPhotoSignatureResize = lazy(() => import("./pages/CAPFACPhotoSignatureResize"));

const queryClient = new QueryClient();

// Minimal loading fallback — invisible to user on fast connections
const PageLoader = () => (
  <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ width: 32, height: 32, border: "3px solid #e5e7eb", borderTopColor: "#6366f1", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GoogleAnalytics />
        <PWAInstallPrompt />
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/passport-size-photo-maker" element={<PassportSizePhotoMaker />} />
            <Route path="/rrb-group-d-photo-signature-resize" element={<RRBGroupDPhotoSignatureResize />} />
            <Route path="/aadhaar-card-photo-resize" element={<AadhaarCardPhotoResize />} />
            <Route path="/compress-image-to-20kb-online" element={<CompressImageTo20KB />} />
            <Route path="/compress-image-to-kb" element={<CompressImageToKB />} />
            <Route path="/rrb-ntpc-2026-photo-signature-upload-guide" element={<RRBNTPCPhotoGuide2026 />} />
            <Route path="/rrb-alp-2026-photo-signature-upload-guide" element={<RRBAlpPhotoSignatureGuide2026 />} />
            <Route path="/why-signature-rejected-10kb-20kb-fix-2026" element={<SignatureRejection10KB20KBFix />} />
            <Route path="/tnpsc-photo-compressor" element={<TNPSCPhotoCompressor />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/ssc-cgl-photo-signature-resize" element={<SSCCGLPhotoSignatureResize />} />
            {/* Old SBI PO page had wrong specs (200×200px) — 301 redirect to correct 2026 page */}
            <Route path="/sbi-po-photo-signature-resize" element={<Navigate to="/sbi-po-2026-photo-signature-resize" replace />} />
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
        </Suspense>
        <ScrollRestoration />
        <BackToTopButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

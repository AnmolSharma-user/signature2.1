import { useState, useCallback } from "react";
import { Upload, Download, RefreshCw, Image as ImageIcon, FileUp, Check, Settings, ArrowRight, ArrowLeft, Crop, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { resizeImageToTargetSize, downloadImage, ResizeResult, examPresets, getFileExtension } from "@/utils/imageResize";
import StepIndicator from "./StepIndicator";
import ImageCropper from "./ImageCropper";

interface SignatureResizerProps {
  defaultTargetKB?: number;
  minKB?: number;
  maxKB?: number;
  title?: string;
  maxWidth?: number;
  maxHeight?: number;
  defaultPreset?: string;
}

const steps = [
  { number: 1, label: "Upload" },
  { number: 2, label: "Configure" },
  { number: 3, label: "Preview" },
  { number: 4, label: "Download" },
];

type OutputFormat = 'jpeg' | 'jpg' | 'png';

const SignatureResizer = ({
  defaultTargetKB = 20,
  minKB = 5,
  maxKB = 100,
  title = "Signature Resize Tool",
  maxWidth = 400,
  maxHeight = 200,
  defaultPreset = "custom",
}: SignatureResizerProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<ResizeResult | null>(null);
  const [targetKB, setTargetKB] = useState(defaultTargetKB);
  const [currentMaxWidth, setCurrentMaxWidth] = useState(maxWidth);
  const [currentMaxHeight, setCurrentMaxHeight] = useState(maxHeight);
  const [currentMinKB, setCurrentMinKB] = useState(minKB);
  const [currentMaxKB, setCurrentMaxKB] = useState(maxKB);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(defaultPreset);
  const [outputFormat, setOutputFormat] = useState<OutputFormat>('jpeg');
  const [showCropper, setShowCropper] = useState(false);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Please select a valid image file");
        return;
      }
      setSelectedFile(file);
      setResult(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setCurrentStep(2);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setResult(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setCurrentStep(2);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handlePresetChange = (presetName: string) => {
    setSelectedPreset(presetName);
    const preset = examPresets.find(p => p.name === presetName);
    if (preset) {
      setTargetKB(preset.targetSizeKB);
      setCurrentMaxWidth(preset.maxWidth);
      setCurrentMaxHeight(preset.maxHeight);
      setCurrentMinKB(preset.minKB);
      setCurrentMaxKB(preset.maxKB);
    }
  };

  const handleCropComplete = (croppedImageUrl: string) => {
    setPreview(croppedImageUrl);
    setShowCropper(false);
    toast.success("Image cropped successfully!");
  };

  const handleResize = async () => {
    if (!selectedFile && !preview) {
      toast.error("Please select an image first");
      return;
    }

    setIsProcessing(true);
    try {
      let fileToResize = selectedFile;
      if (preview && preview.startsWith('data:')) {
        const response = await fetch(preview);
        const blob = await response.blob();
        fileToResize = new File([blob], 'cropped_signature.jpg', { type: 'image/jpeg' });
      }

      if (!fileToResize) {
        toast.error("No image to process");
        setIsProcessing(false);
        return;
      }

      const resized = await resizeImageToTargetSize(fileToResize, {
        targetSizeKB: targetKB,
        maxWidth: currentMaxWidth,
        maxHeight: currentMaxHeight,
        format: outputFormat === 'jpg' ? 'jpeg' : outputFormat,
      });
      setResult(resized);
      setCurrentStep(4);
      toast.success(`Image resized to ${resized.sizeKB} KB successfully!`);
    } catch (error) {
      toast.error("Failed to resize image. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (result) {
      const extension = getFileExtension(outputFormat);
      downloadImage(result.dataUrl, `signature_${targetKB}kb.${extension}`);
      toast.success("Image downloaded successfully!");
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreview(null);
    setResult(null);
    setCurrentStep(1);
    setShowCropper(false);
  };

  const goToStep = (step: number) => {
    if (step === 1) {
      setCurrentStep(1);
    } else if (step === 2 && preview) {
      setCurrentStep(2);
      setResult(null);
    } else if (step === 3 && preview) {
      setCurrentStep(3);
    }
  };

  // Button style classes for attractive effects
  const primaryButtonClass = "relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group";
  const secondaryButtonClass = "relative overflow-hidden border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group";
  const successButtonClass = "relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group";

  return (
    <Card className="overflow-hidden border-2 border-border bg-card shadow-xl">
      {/* Header */}
      <div className="border-b border-border bg-gradient-to-r from-primary/5 to-accent/50 p-4 sm:p-6">
        <h2 className="mb-4 text-center text-xl sm:text-2xl font-bold text-foreground">{title}</h2>
        <StepIndicator steps={steps} currentStep={currentStep} />
      </div>

      <div className="p-4 sm:p-6">
        {/* Step 1: Upload */}
        {currentStep === 1 && (
          <div
            onDrop={handleDrop}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            className={`cursor-pointer rounded-xl border-2 border-dashed p-6 sm:p-8 text-center transition-all duration-300 ${
              isDragging
                ? "border-primary bg-primary/10 scale-[1.02]"
                : "border-primary/30 bg-accent/50 hover:border-primary hover:bg-accent"
            }`}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 animate-pulse">
                <FileUp className="h-8 w-8 text-primary" />
              </div>
              <p className="mb-2 text-base sm:text-lg font-semibold text-foreground">
                Drag & Drop Your Signature
              </p>
              <p className="mb-4 text-sm text-muted-foreground">
                or click to browse files (JPG, PNG, JPEG supported)
              </p>
              <Button 
                variant="default" 
                size="lg" 
                className={`pointer-events-none ${primaryButtonClass}`}
              >
                <Upload className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                Browse Files
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </label>
          </div>
        )}

        {/* Step 2: Configure */}
        {currentStep === 2 && !showCropper && (
          <div className="space-y-6 animate-fade-in">
            {/* Original Image Preview */}
            <div className="rounded-xl border border-border bg-background p-4">
              <div className="mb-2 flex items-center justify-between flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground">Uploaded Image</span>
                <div className="flex items-center gap-2">
                  {selectedFile && (
                    <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                      {Math.round(selectedFile.size / 1024)} KB
                    </span>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowCropper(true)}
                    className="h-7 text-xs hover:bg-primary/10 hover:border-primary transition-all duration-200"
                  >
                    <Crop className="mr-1 h-3 w-3" />
                    Crop
                  </Button>
                </div>
              </div>
              <div className="flex h-32 sm:h-44 items-center justify-center overflow-hidden rounded-lg bg-muted/30">
                <img
                  src={preview!}
                  alt="Original signature"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Preset Selection */}
            <div className="rounded-xl border border-border bg-background p-4">
              <Label className="mb-3 block text-sm font-medium">Select Exam/Configuration</Label>
              <Select value={selectedPreset} onValueChange={handlePresetChange}>
                <SelectTrigger className="w-full transition-all duration-200 hover:border-primary focus:ring-primary/20">
                  <SelectValue placeholder="Select a preset" />
                </SelectTrigger>
                <SelectContent>
                  {examPresets.map((preset) => (
                    <SelectItem key={preset.name} value={preset.name} className="cursor-pointer">
                      <div className="flex flex-col">
                        <span className="font-medium">{preset.label}</span>
                        <span className="text-xs text-muted-foreground">{preset.description}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedPreset !== "custom" && (
                <p className="mt-2 text-xs text-primary flex items-center gap-1">
                  <Check className="h-3 w-3" />
                  Preset auto-selected based on your page
                </p>
              )}
            </div>

            {/* Custom Controls */}
            <div className="rounded-xl border border-border bg-background p-4 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="h-4 w-4 text-primary" />
                <Label className="text-sm font-medium">Size Settings</Label>
              </div>
              
              {/* Target Size Slider */}
              <div>
                <div className="mb-2 flex items-center justify-between flex-wrap gap-2">
                  <Label className="text-sm">Target Size</Label>
                  <span className="rounded-full bg-gradient-to-r from-primary/20 to-primary/10 px-3 py-1 text-sm font-bold text-primary border border-primary/20">
                    {targetKB} KB
                  </span>
                </div>
                <Slider
                  value={[targetKB]}
                  onValueChange={(value) => setTargetKB(value[0])}
                  min={currentMinKB}
                  max={currentMaxKB}
                  step={1}
                  className="w-full"
                />
                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                  <span>{currentMinKB} KB</span>
                  <span>{currentMaxKB} KB</span>
                </div>
              </div>

              {/* Exact Size Input */}
              <div className="flex items-center gap-3 flex-wrap">
                <Label className="text-sm">Or enter exact size:</Label>
                <Input
                  type="number"
                  value={targetKB}
                  onChange={(e) => setTargetKB(Math.min(currentMaxKB, Math.max(currentMinKB, Number(e.target.value))))}
                  className="w-20 transition-all duration-200 focus:ring-primary/20"
                  min={currentMinKB}
                  max={currentMaxKB}
                />
                <span className="text-sm text-muted-foreground">KB</span>
              </div>

              {/* Dimension Settings (Custom only) */}
              {selectedPreset === "custom" && (
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border">
                  <div>
                    <Label className="text-sm">Max Width (px)</Label>
                    <Input
                      type="number"
                      value={currentMaxWidth}
                      onChange={(e) => setCurrentMaxWidth(Number(e.target.value))}
                      className="mt-1"
                      min={50}
                      max={800}
                    />
                  </div>
                  <div>
                    <Label className="text-sm">Max Height (px)</Label>
                    <Input
                      type="number"
                      value={currentMaxHeight}
                      onChange={(e) => setCurrentMaxHeight(Number(e.target.value))}
                      className="mt-1"
                      min={30}
                      max={400}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Output Format */}
            <div className="rounded-xl border border-border bg-background p-4">
              <Label className="mb-3 block text-sm font-medium">Output Format</Label>
              <RadioGroup value={outputFormat} onValueChange={(v) => setOutputFormat(v as OutputFormat)} className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="jpeg" id="jpeg" />
                  <Label htmlFor="jpeg" className="cursor-pointer">JPEG (Recommended)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="jpg" id="jpg" />
                  <Label htmlFor="jpg" className="cursor-pointer">JPG</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="png" id="png" />
                  <Label htmlFor="png" className="cursor-pointer">PNG</Label>
                </div>
              </RadioGroup>
              <p className="mt-2 text-xs text-muted-foreground">
                JPEG/JPG produces smaller files. Use PNG only if the portal specifically requires it.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => setCurrentStep(1)}
                variant="outline"
                size="lg"
                className={`flex-1 ${secondaryButtonClass}`}
              >
                <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                Change Image
              </Button>
              <Button
                onClick={() => setCurrentStep(3)}
                size="lg"
                className={`flex-1 ${primaryButtonClass}`}
              >
                <Sparkles className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                Preview & Resize
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </div>
          </div>
        )}

        {/* Cropper View */}
        {currentStep === 2 && showCropper && preview && (
          <ImageCropper
            imageSrc={preview}
            onCropComplete={handleCropComplete}
            onCancel={() => setShowCropper(false)}
          />
        )}

        {/* Step 3: Preview & Process */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
              {/* Original */}
              <div className="rounded-xl border border-border bg-background p-4">
                <div className="mb-2 flex items-center justify-between flex-wrap gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Original Image</span>
                  {selectedFile && (
                    <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                      {Math.round(selectedFile.size / 1024)} KB
                    </span>
                  )}
                </div>
                <div className="flex h-32 sm:h-44 items-center justify-center overflow-hidden rounded-lg bg-muted/30">
                  <img
                    src={preview!}
                    alt="Original signature"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Resized Preview Placeholder */}
              <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-4">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ImageIcon className="h-6 w-6 text-primary/50" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Click "Resize Now" to see result
                  </p>
                </div>
              </div>
            </div>

            {/* Settings Summary */}
            <div className="rounded-xl border border-border bg-gradient-to-r from-background to-primary/5 p-4">
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Settings className="h-4 w-4 text-primary" />
                Configuration Summary
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
                <div className="bg-background rounded-lg p-3 border border-border">
                  <span className="text-xs text-muted-foreground block">Target</span>
                  <span className="font-bold text-primary">{targetKB} KB</span>
                </div>
                <div className="bg-background rounded-lg p-3 border border-border">
                  <span className="text-xs text-muted-foreground block">Max Size</span>
                  <span className="font-bold">{currentMaxWidth}×{currentMaxHeight}</span>
                </div>
                <div className="bg-background rounded-lg p-3 border border-border">
                  <span className="text-xs text-muted-foreground block">Format</span>
                  <span className="font-bold uppercase">{outputFormat}</span>
                </div>
                <div className="bg-background rounded-lg p-3 border border-border">
                  <span className="text-xs text-muted-foreground block">Preset</span>
                  <span className="font-bold">{examPresets.find(p => p.name === selectedPreset)?.label || 'Custom'}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => setCurrentStep(2)}
                variant="outline"
                size="lg"
                className={`flex-1 ${secondaryButtonClass}`}
              >
                <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                Back to Configure
              </Button>
              <Button
                onClick={handleResize}
                disabled={!preview || isProcessing}
                size="lg"
                className={`flex-1 ${primaryButtonClass} disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                    Resize Now
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Download */}
        {currentStep === 4 && result && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
              {/* Original */}
              <div className="rounded-xl border border-border bg-background p-4">
                <div className="mb-2 flex items-center justify-between flex-wrap gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Original Image</span>
                  {selectedFile && (
                    <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                      {Math.round(selectedFile.size / 1024)} KB
                    </span>
                  )}
                </div>
                <div className="flex h-32 sm:h-44 items-center justify-center overflow-hidden rounded-lg bg-muted/30">
                  <img
                    src={preview!}
                    alt="Original signature"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Resized */}
              <div className="rounded-xl border-2 border-green-500 bg-green-500/5 p-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-bl-full" />
                <div className="mb-2 flex items-center justify-between flex-wrap gap-2 relative z-10">
                  <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                    <Check className="h-4 w-4" />
                    Resized Image
                  </span>
                  <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                    {result.sizeKB} KB
                  </span>
                </div>
                <div className="flex h-32 sm:h-44 items-center justify-center overflow-hidden rounded-lg bg-muted/30 relative z-10">
                  <img
                    src={result.dataUrl}
                    alt="Resized signature"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="mt-2 text-center text-xs text-green-600 relative z-10">
                  {result.width} × {result.height} px | {outputFormat.toUpperCase()}
                </p>
              </div>
            </div>

            {/* Success Message with Reduction Stats */}
            <div className="rounded-xl border-2 border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 text-center">
              <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="h-8 w-8 text-green-500" />
              </div>
              <h4 className="font-bold text-lg text-foreground">Resize Successful!</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Your signature has been resized to <span className="font-bold text-green-600">{result.sizeKB} KB</span> ({result.width}×{result.height} px)
              </p>
              
              {/* Size Reduction Indicator */}
              {selectedFile && (
                <div className="mt-4 pt-4 border-t border-green-500/20">
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="text-muted-foreground">
                      <span className="block text-xs">Original</span>
                      <span className="font-semibold">{Math.round(selectedFile.size / 1024)} KB</span>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-600 font-bold">
                      <ArrowRight className="h-4 w-4" />
                      {Math.round((1 - (result.sizeKB / (selectedFile.size / 1024))) * 100)}% smaller
                    </div>
                    <div className="text-green-600">
                      <span className="block text-xs">New Size</span>
                      <span className="font-semibold">{result.sizeKB} KB</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleDownload} 
                size="lg" 
                className={`flex-1 ${successButtonClass}`}
              >
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                Download {outputFormat.toUpperCase()}
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
              <Button
                onClick={() => goToStep(2)}
                variant="outline"
                size="lg"
                className={`flex-1 ${secondaryButtonClass}`}
              >
                <Settings className="mr-2 h-5 w-5 transition-transform group-hover:rotate-90" />
                Resize Again
              </Button>
              <Button 
                onClick={handleReset} 
                variant="outline" 
                size="lg"
                className={secondaryButtonClass}
              >
                <RefreshCw className="mr-2 h-5 w-5 transition-transform group-hover:rotate-180" />
                New
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default SignatureResizer;

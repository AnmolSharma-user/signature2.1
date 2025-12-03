import { useState, useCallback } from "react";
import { Upload, Download, RefreshCw, Image as ImageIcon, FileUp, Check, Settings, X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { resizeImageToTargetSize, downloadImage, ResizeResult, examPresets, getFileExtension } from "@/utils/imageResize";
import StepIndicator from "./StepIndicator";

interface FileWithPreview {
  file: File;
  preview: string;
  id: string;
  result?: ResizeResult;
  status: 'pending' | 'processing' | 'done' | 'error';
}

const steps = [
  { number: 1, label: "Upload" },
  { number: 2, label: "Configure" },
  { number: 3, label: "Process" },
  { number: 4, label: "Download" },
];

type OutputFormat = 'jpeg' | 'jpg' | 'png';

const BulkSignatureResizer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [targetKB, setTargetKB] = useState(20);
  const [currentMaxWidth, setCurrentMaxWidth] = useState(400);
  const [currentMaxHeight, setCurrentMaxHeight] = useState(200);
  const [currentMinKB, setCurrentMinKB] = useState(5);
  const [currentMaxKB, setCurrentMaxKB] = useState(100);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState("custom");
  const [outputFormat, setOutputFormat] = useState<OutputFormat>('jpeg');
  const [processedCount, setProcessedCount] = useState(0);

  const handleFilesSelect = useCallback((selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const newFiles: FileWithPreview[] = [];
    Array.from(selectedFiles).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const fileWithPreview: FileWithPreview = {
            file,
            preview: reader.result as string,
            id: `${file.name}-${Date.now()}-${Math.random()}`,
            status: 'pending'
          };
          setFiles(prev => [...prev, fileWithPreview]);
        };
        reader.readAsDataURL(file);
      }
    });

    if (files.length === 0 && selectedFiles.length > 0) {
      setTimeout(() => setCurrentStep(2), 100);
    }
  }, [files.length]);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFilesSelect(e.dataTransfer.files);
  }, [handleFilesSelect]);

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
  };

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

  const handleProcessAll = async () => {
    setIsProcessing(true);
    setProcessedCount(0);
    setCurrentStep(3);

    const updatedFiles = [...files];
    
    for (let i = 0; i < updatedFiles.length; i++) {
      const fileData = updatedFiles[i];
      fileData.status = 'processing';
      setFiles([...updatedFiles]);

      try {
        const resized = await resizeImageToTargetSize(fileData.file, {
          targetSizeKB: targetKB,
          maxWidth: currentMaxWidth,
          maxHeight: currentMaxHeight,
          format: outputFormat === 'jpg' ? 'jpeg' : outputFormat,
        });
        fileData.result = resized;
        fileData.status = 'done';
      } catch (error) {
        fileData.status = 'error';
      }
      
      setProcessedCount(i + 1);
      setFiles([...updatedFiles]);
    }

    setIsProcessing(false);
    setCurrentStep(4);
    toast.success(`Processed ${files.length} images successfully!`);
  };

  const handleDownloadAll = () => {
    files.forEach((fileData, index) => {
      if (fileData.result) {
        const extension = getFileExtension(outputFormat);
        const baseName = fileData.file.name.replace(/\.[^/.]+$/, "");
        setTimeout(() => {
          downloadImage(fileData.result!.dataUrl, `${baseName}_resized.${extension}`);
        }, index * 200);
      }
    });
    toast.success("All images downloaded!");
  };

  const handleReset = () => {
    setFiles([]);
    setCurrentStep(1);
    setProcessedCount(0);
  };

  const progress = files.length > 0 ? (processedCount / files.length) * 100 : 0;

  return (
    <Card className="overflow-hidden border-2 border-border bg-card shadow-xl">
      {/* Header */}
      <div className="border-b border-border bg-gradient-to-r from-primary/5 to-accent/50 p-4 sm:p-6">
        <h2 className="mb-4 text-center text-xl sm:text-2xl font-bold text-foreground">Bulk Signature Resizer</h2>
        <StepIndicator steps={steps} currentStep={currentStep} />
      </div>

      <div className="p-4 sm:p-6">
        {/* Step 1: Upload Multiple */}
        {currentStep === 1 && (
          <div className="space-y-4">
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
                multiple
                onChange={(e) => handleFilesSelect(e.target.files)}
                className="hidden"
                id="bulk-file-upload"
              />
              <label htmlFor="bulk-file-upload" className="cursor-pointer">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <FileUp className="h-8 w-8 text-primary" />
                </div>
                <p className="mb-2 text-base sm:text-lg font-semibold text-foreground">
                  Drag & Drop Multiple Images
                </p>
                <p className="mb-4 text-sm text-muted-foreground">
                  Select multiple signature images at once
                </p>
                <Button variant="default" size="lg" className="pointer-events-none">
                  <Upload className="mr-2 h-5 w-5" />
                  Browse Files
                </Button>
              </label>
            </div>

            {files.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{files.length} files selected</span>
                  <Button variant="ghost" size="sm" onClick={() => setFiles([])}>
                    <Trash2 className="h-4 w-4 mr-1" />
                    Clear All
                  </Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                  {files.map((fileData) => (
                    <div key={fileData.id} className="relative group rounded-lg border bg-muted/30 p-2">
                      <img src={fileData.preview} alt="" className="w-full h-16 object-contain" />
                      <button
                        onClick={() => removeFile(fileData.id)}
                        className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </button>
                      <p className="text-xs truncate mt-1">{fileData.file.name}</p>
                    </div>
                  ))}
                </div>
                <Button onClick={() => setCurrentStep(2)} className="w-full">
                  Continue to Configure
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Configure */}
        {currentStep === 2 && (
          <div className="space-y-6">
            {/* Files Preview */}
            <div className="rounded-xl border border-border bg-background p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">{files.length} images to process</span>
                <Button variant="ghost" size="sm" onClick={() => setCurrentStep(1)}>
                  Add More
                </Button>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 max-h-32 overflow-y-auto">
                {files.map((fileData) => (
                  <div key={fileData.id} className="rounded-lg border bg-muted/30 p-1">
                    <img src={fileData.preview} alt="" className="w-full h-12 object-contain" />
                  </div>
                ))}
              </div>
            </div>

            {/* Preset Selection */}
            <div className="rounded-xl border border-border bg-background p-4">
              <Label className="mb-3 block text-sm font-medium">Select Exam/Configuration</Label>
              <Select value={selectedPreset} onValueChange={handlePresetChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a preset" />
                </SelectTrigger>
                <SelectContent>
                  {examPresets.map((preset) => (
                    <SelectItem key={preset.name} value={preset.name}>
                      <div className="flex flex-col">
                        <span>{preset.label}</span>
                        <span className="text-xs text-muted-foreground">{preset.description}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Size Settings */}
            <div className="rounded-xl border border-border bg-background p-4 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="h-4 w-4 text-primary" />
                <Label className="text-sm font-medium">Size Settings</Label>
              </div>
              
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <Label className="text-sm">Target Size</Label>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
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
              </div>
            </div>

            {/* Output Format */}
            <div className="rounded-xl border border-border bg-background p-4">
              <Label className="mb-3 block text-sm font-medium">Output Format</Label>
              <RadioGroup value={outputFormat} onValueChange={(v) => setOutputFormat(v as OutputFormat)} className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="jpeg" id="bulk-jpeg" />
                  <Label htmlFor="bulk-jpeg" className="cursor-pointer">JPEG</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="jpg" id="bulk-jpg" />
                  <Label htmlFor="bulk-jpg" className="cursor-pointer">JPG</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="png" id="bulk-png" />
                  <Label htmlFor="bulk-png" className="cursor-pointer">PNG</Label>
                </div>
              </RadioGroup>
            </div>

            <Button onClick={handleProcessAll} size="lg" className="w-full">
              <ImageIcon className="mr-2 h-5 w-5" />
              Process All {files.length} Images
            </Button>
          </div>
        )}

        {/* Step 3: Processing */}
        {currentStep === 3 && isProcessing && (
          <div className="space-y-6 text-center py-8">
            <RefreshCw className="mx-auto h-12 w-12 text-primary animate-spin" />
            <div>
              <h3 className="text-lg font-semibold">Processing Images...</h3>
              <p className="text-sm text-muted-foreground">{processedCount} of {files.length} completed</p>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
        )}

        {/* Step 4: Download */}
        {currentStep === 4 && !isProcessing && (
          <div className="space-y-6">
            {/* Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-64 overflow-y-auto">
              {files.map((fileData) => (
                <div key={fileData.id} className={`rounded-xl border p-3 ${fileData.status === 'done' ? 'border-primary bg-primary/5' : 'border-destructive bg-destructive/5'}`}>
                  {fileData.result && (
                    <>
                      <img src={fileData.result.dataUrl} alt="" className="w-full h-20 object-contain mb-2" />
                      <div className="flex items-center justify-between text-xs">
                        <span className="truncate">{fileData.file.name}</span>
                        <span className="font-medium text-primary">{fileData.result.sizeKB} KB</span>
                      </div>
                    </>
                  )}
                  {fileData.status === 'error' && (
                    <p className="text-sm text-destructive">Failed</p>
                  )}
                </div>
              ))}
            </div>

            {/* Success Message */}
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-center">
              <Check className="mx-auto mb-2 h-8 w-8 text-primary" />
              <h4 className="font-semibold text-foreground">All Images Processed!</h4>
              <p className="text-sm text-muted-foreground">
                {files.filter(f => f.status === 'done').length} images resized successfully
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={handleDownloadAll} size="lg" className="flex-1">
                <Download className="mr-2 h-5 w-5" />
                Download All
              </Button>
              <Button onClick={handleReset} variant="outline" size="lg" className="flex-1">
                <RefreshCw className="mr-2 h-5 w-5" />
                Start Over
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default BulkSignatureResizer;

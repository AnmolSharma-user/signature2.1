export interface ResizeOptions {
  targetSizeKB: number;
  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  minHeight?: number;
  format?: 'jpeg' | 'png' | 'jpg';
}

export interface ResizeResult {
  blob: Blob;
  dataUrl: string;
  width: number;
  height: number;
  sizeKB: number;
  format?: string;
}

export interface ExamPreset {
  name: string;
  label: string;
  targetSizeKB: number;
  maxWidth: number;
  maxHeight: number;
  minKB: number;
  maxKB: number;
  description: string;
}

export const examPresets: ExamPreset[] = [
  { name: "gate", label: "GATE Exam", targetSizeKB: 20, maxWidth: 160, maxHeight: 60, minKB: 4, maxKB: 30, description: "4KB - 30KB, 160×60 px" },
  { name: "ssc", label: "SSC (CGL/MTS/CHSL)", targetSizeKB: 10, maxWidth: 140, maxHeight: 60, minKB: 1, maxKB: 12, description: "1KB - 12KB, 140×60 px" },
  { name: "ntpc", label: "RRB NTPC", targetSizeKB: 15, maxWidth: 140, maxHeight: 60, minKB: 10, maxKB: 20, description: "10KB - 20KB, 140×60 px" },
  { name: "upsc", label: "UPSC Exam", targetSizeKB: 15, maxWidth: 150, maxHeight: 50, minKB: 4, maxKB: 20, description: "4KB - 20KB, 150×50 px" },
  { name: "uti-pan", label: "UTI PAN Card", targetSizeKB: 20, maxWidth: 160, maxHeight: 60, minKB: 10, maxKB: 30, description: "10KB - 30KB, 160×60 px" },
  { name: "ibps", label: "IBPS Bank Exams", targetSizeKB: 20, maxWidth: 140, maxHeight: 60, minKB: 10, maxKB: 20, description: "10KB - 20KB, 140×60 px" },
  { name: "jee", label: "JEE Main/Advanced", targetSizeKB: 50, maxWidth: 230, maxHeight: 60, minKB: 10, maxKB: 100, description: "10KB - 100KB, 230×60 px" },
  { name: "gds-photo", label: "GDS Photo (India Post)", targetSizeKB: 60, maxWidth: 320, maxHeight: 400, minKB: 30, maxKB: 100, description: "30KB - 100KB, 320×400 px" },
  { name: "gds-signature", label: "GDS Signature (India Post)", targetSizeKB: 50, maxWidth: 300, maxHeight: 120, minKB: 20, maxKB: 100, description: "20KB - 100KB, 300×120 px" },
  { name: "neet-photo", label: "NEET UG Photo", targetSizeKB: 100, maxWidth: 200, maxHeight: 230, minKB: 10, maxKB: 200, description: "10KB - 200KB, 200×230 px" },
  { name: "neet-signature", label: "NEET UG Signature", targetSizeKB: 15, maxWidth: 140, maxHeight: 60, minKB: 4, maxKB: 30, description: "4KB - 30KB, 140×60 px" },
  { name: "ibps-photo", label: "IBPS Photo (PO/Clerk/RRB)", targetSizeKB: 35, maxWidth: 200, maxHeight: 230, minKB: 20, maxKB: 50, description: "20KB - 50KB, 200×230 px" },
  { name: "thumb-impression", label: "Thumb Impression", targetSizeKB: 30, maxWidth: 240, maxHeight: 240, minKB: 10, maxKB: 50, description: "10KB - 50KB, 240×240 px" },
  { name: "custom", label: "Custom Size", targetSizeKB: 20, maxWidth: 400, maxHeight: 200, minKB: 5, maxKB: 100, description: "Set your own parameters" }
];

export function getFileExtension(format: string): string {
  if (format === 'png') return 'png';
  if (format === 'jpg') return 'jpg';
  return 'jpeg';
}

export async function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

export async function resizeImageToTargetSize(
  file: File,
  options: ResizeOptions
): Promise<ResizeResult> {
  const { targetSizeKB, maxWidth = 400, maxHeight = 200, minWidth = 100, minHeight = 50, format = 'jpeg' } = options;

  const img = await loadImage(file);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;

  let width = img.width;
  let height = img.height;

  if (width > maxWidth) { height = (height * maxWidth) / width; width = maxWidth; }
  if (height > maxHeight) { width = (width * maxHeight) / height; height = maxHeight; }
  if (width < minWidth) { height = (height * minWidth) / width; width = minWidth; }
  if (height < minHeight) { width = (width * minHeight) / height; height = minHeight; }

  canvas.width = Math.round(width);
  canvas.height = Math.round(height);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
  const targetBytes = targetSizeKB * 1024;

  let minQuality = 0.1, maxQuality = 1.0, bestBlob: Blob | null = null, bestQuality = 0.5;

  for (let i = 0; i < 10; i++) {
    const quality = (minQuality + maxQuality) / 2;
    const blob = await new Promise<Blob>((resolve) => { canvas.toBlob((b) => resolve(b!), mimeType, quality); });
    if (blob.size <= targetBytes) { bestBlob = blob; bestQuality = quality; minQuality = quality; }
    else { maxQuality = quality; }
  }

  if (!bestBlob || bestBlob.size > targetBytes) {
    let scale = 0.9;
    while (scale > 0.1) {
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise<Blob>((resolve) => { canvas.toBlob((b) => resolve(b!), mimeType, bestQuality); });
      if (blob.size <= targetBytes) { bestBlob = blob; break; }
      scale -= 0.1;
    }
  }

  if (!bestBlob) { bestBlob = await new Promise<Blob>((resolve) => { canvas.toBlob((b) => resolve(b!), mimeType, 0.1); }); }

  const dataUrl = await blobToDataUrl(bestBlob);
  return { blob: bestBlob, dataUrl, width: canvas.width, height: canvas.height, sizeKB: Math.round((bestBlob.size / 1024) * 100) / 100, format };
}

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
}

export function downloadImage(dataUrl: string, filename: string) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

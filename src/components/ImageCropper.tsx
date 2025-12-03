import { useState, useRef, useCallback } from "react";
import ReactCrop, { type Crop, centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Button } from "@/components/ui/button";
import { Crop as CropIcon, RotateCcw, Check, X } from "lucide-react";

interface ImageCropperProps {
  imageSrc: string;
  onCropComplete: (croppedImageUrl: string) => void;
  onCancel: () => void;
  aspectRatio?: number;
}

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

const ImageCropper = ({
  imageSrc,
  onCropComplete,
  onCancel,
  aspectRatio,
}: ImageCropperProps) => {
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<Crop>();
  const imgRef = useRef<HTMLImageElement>(null);

  const onImageLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const { width, height } = e.currentTarget;
      const initialCrop = aspectRatio
        ? centerAspectCrop(width, height, aspectRatio)
        : {
            unit: "%" as const,
            x: 5,
            y: 5,
            width: 90,
            height: 90,
          };
      setCrop(initialCrop);
    },
    [aspectRatio]
  );

  const getCroppedImage = useCallback(async () => {
    if (!completedCrop || !imgRef.current) return;

    const image = imgRef.current;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const cropX = completedCrop.x * scaleX;
    const cropY = completedCrop.y * scaleY;
    const cropWidth = completedCrop.width * scaleX;
    const cropHeight = completedCrop.height * scaleY;

    canvas.width = cropWidth;
    canvas.height = cropHeight;

    ctx.drawImage(
      image,
      cropX,
      cropY,
      cropWidth,
      cropHeight,
      0,
      0,
      cropWidth,
      cropHeight
    );

    const croppedImageUrl = canvas.toDataURL("image/jpeg", 0.95);
    onCropComplete(croppedImageUrl);
  }, [completedCrop, onCropComplete]);

  const resetCrop = () => {
    if (imgRef.current) {
      const { width, height } = imgRef.current;
      const initialCrop = aspectRatio
        ? centerAspectCrop(width, height, aspectRatio)
        : {
            unit: "%" as const,
            x: 5,
            y: 5,
            width: 90,
            height: 90,
          };
      setCrop(initialCrop);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CropIcon className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Crop Your Image</h3>
        </div>
        <p className="text-xs text-muted-foreground">
          Drag to adjust the crop area
        </p>
      </div>

      <div className="flex justify-center rounded-lg border border-border bg-muted/30 p-4 overflow-auto max-h-[400px]">
        <ReactCrop
          crop={crop}
          onChange={(c) => setCrop(c)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={aspectRatio}
          className="max-w-full"
        >
          <img
            ref={imgRef}
            src={imageSrc}
            alt="Crop preview"
            onLoad={onImageLoad}
            className="max-h-[350px] w-auto"
          />
        </ReactCrop>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          onClick={resetCrop}
          className="flex-1"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
        <Button
          variant="outline"
          onClick={onCancel}
          className="flex-1"
        >
          <X className="mr-2 h-4 w-4" />
          Cancel
        </Button>
        <Button
          onClick={getCroppedImage}
          disabled={!completedCrop?.width || !completedCrop?.height}
          className="flex-1"
        >
          <Check className="mr-2 h-4 w-4" />
          Apply Crop
        </Button>
      </div>
    </div>
  );
};

export default ImageCropper;

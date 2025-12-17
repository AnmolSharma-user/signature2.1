import { Play, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

const VideoTutorial = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    "Open SignatureResize.in in your browser",
    "Click 'Browse Files' or drag & drop your signature",
    "Set your target file size using the slider",
    "Click 'Resize Now' to process",
    "Preview and download your resized signature",
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            VIDEO TUTORIAL
          </span>
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            How to Resize & Compress Your Signature and Photo?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Watch our step-by-step video guide to resize your signature in under 30 seconds
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Video Placeholder */}
          <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-border bg-gradient-to-br from-primary/20 to-accent shadow-xl">
            {!isPlaying ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="group mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-xl"
                >
                  <Play className="h-8 w-8 translate-x-0.5" fill="currentColor" />
                </button>
                <p className="font-semibold text-foreground">Watch Tutorial</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>2 min video</span>
                </div>
              </div>
            ) : (
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/TdZ59g5TDpM?si=yLpRKfyjB2nFglfd"
                title="How to Resize Signature for Government Exams"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {/* Schema markup for video */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "VideoObject",
                "name": "How to Resize Signature for Government Exams",
                "description": "Step-by-step tutorial on how to resize signature and photo for GATE, SSC, NTPC, and other government exam applications.",
                "thumbnailUrl": "https://signatureresize.in/video-thumbnail.jpg",
                "uploadDate": "2025-17-12",
                "duration": "PT2M",
                "contentUrl": "https://youtu.be/TdZ59g5TDpM?si=JBjEU-hRlLqtmj3j",
                "embedUrl": "https://www.youtube.com/embed/TdZ59g5TDpM?si=yLpRKfyjB2nFglfd"
              })
            }} />
          </div>

          {/* Steps List */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-6 text-xl font-bold text-foreground">
              Quick Steps to Resize Your Signature
            </h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-lg bg-primary/10 p-4">
              <CheckCircle className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Pro Tip:</strong> Sign on white paper with black ink for best results!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTutorial;

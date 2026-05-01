import { useEffect } from 'react';

export type AdType = "display" | "infeed" | "inarticle" | "multiplex";

interface AdContainerProps {
  type?: AdType;
  className?: string;
  slot?: string;
}

const AdContainer = ({ type = 'display', className = '', slot }: AdContainerProps) => {
  useEffect(() => {
    try {
      // @ts-ignore
      const adsbygoogle = window.adsbygoogle || [];
      adsbygoogle.push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  const adFormat = type === 'multiplex' ? 'autorelaxed' : (type === 'inarticle' ? 'fluid' : 'auto');
  const adLayout = type === 'inarticle' ? 'in-article' : undefined;

  return (
    <div className={`w-full overflow-hidden my-4 flex justify-center min-h-[100px] ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-pub-3488894749741987"
        data-ad-slot={slot || undefined}
        data-ad-format={adFormat}
        data-ad-layout={adLayout}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdContainer;
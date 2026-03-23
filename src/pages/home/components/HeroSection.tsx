import { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const [videoReady, setVideoReady] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const imgWipeRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const headlineWrapRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  const runAnimation = useCallback(() => {
    const ctx = gsap.context(() => {
      gsap.set(imageCardRef.current, { opacity: 1, borderRadius: 0 });
      gsap.set(imgWipeRef.current, {
        right: 'auto', bottom: 'auto',
        top: '36%', left: '42%',
        width: '16%', height: '28%',
        clipPath: 'inset(0% 100% 0% 0%)'
      });
      gsap.set(videoRef.current, { scale: 1.8, transformOrigin: '50% 50%' });
      gsap.set(line1Ref.current, { xPercent: -110, opacity: 1 });
      gsap.set(line2Ref.current, { xPercent:  110, opacity: 1 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(loaderRef.current, { opacity: 0, duration: 0.35, ease: 'power1.inOut',
        onComplete: () => { if (loaderRef.current) loaderRef.current.style.display = 'none'; }
      })
      .to(imgWipeRef.current, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.6, ease: 'power2.out' })
      .to(imgWipeRef.current, {
        top: '0%', left: '0%', width: '100%', height: '100%',
        duration: 0.85, ease: 'power2.inOut',
      }, '+=0.8')
      .to(videoRef.current, { scale: 1, duration: 1.15, ease: 'power2.out' }, '-=0.85')
      .to(line1Ref.current, { xPercent: 0, duration: 1.4, ease: 'cubic-bezier(0.52, 0.00, 0.48, 1.00)' }, '-=0.45')
      .to(line2Ref.current, { xPercent: 0, duration: 1.4, ease: 'cubic-bezier(0.52, 0.00, 0.48, 1.00)' }, '<')
      .to(imageCardRef.current, { borderRadius: '1.5rem', duration: 0.9, ease: 'power2.inOut' }, '+=2');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!videoReady) return;
    const cleanup = runAnimation();
    return cleanup;
  }, [videoReady, runAnimation]);

  // Create video element imperatively — only safe way to autoplay muted in Safari
  useEffect(() => {
    const container = videoContainerRef.current;
    if (!container) return;

    const vid = document.createElement('video');
    vid.src = '/videos/herovideo.mp4';
    vid.loop = false;
    vid.muted = true;
    // Pause 60 frames (~2s at 30fps) before the end
    vid.ontimeupdate = () => {
      if (vid.duration && vid.currentTime >= vid.duration - (60 / 30) - 1) {
        vid.pause();
        vid.ontimeupdate = null;
      }
    };
    vid.setAttribute('muted', '');
    vid.setAttribute('playsinline', '');
    vid.setAttribute('preload', 'auto');
    vid.setAttribute('disablepictureinpicture', '');
    vid.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;';
    vid.onloadedmetadata = () => setVideoReady(true);
    container.appendChild(vid);
    videoRef.current = vid;
    vid.play().catch(() => {});

    const fallback = setTimeout(() => setVideoReady(true), 2000);
    return () => {
      clearTimeout(fallback);
      vid.pause();
      container.removeChild(vid);
    };
  }, []);

  const handleSearch = () => {};
  const formatDate = (d: string) => d;

  return (
    <section ref={sectionRef} id="hero" className="w-full bg-white pt-16">

      {/* Full-screen loader — visible until hero image fires onLoad */}
      <div
        ref={loaderRef}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      >
        <div className="flex flex-col items-center gap-4">
          {/* Spinner ring */}
          <div className="w-10 h-10 rounded-full border-[3px] border-gray-200 border-t-[#C41E3A] animate-spin" />
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Serrano</span>
        </div>
      </div>
      <div className="px-6 md:px-10 lg:px-14 pt-5 pb-0">

          {/* Big rounded image card — border-radius animates in via GSAP */}
          <div ref={imageCardRef} className="relative w-full overflow-hidden" style={{ height: '520px' }}>
            {/* Wipe wrapper — owns clipPath so scale lives in its own space */}
            <div ref={imgWipeRef} className="absolute inset-0">
              {/* Video inserted imperatively for Safari muted-autoplay compatibility */}
              <div ref={videoContainerRef} className="absolute inset-0" />
              {/* Gradient inside wrapper so it moves with the video */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
            </div>

            {/* Text bottom-left */}
            <div ref={headlineWrapRef} className="absolute bottom-16 left-10 z-10 overflow-hidden">
              <h1
                className="text-white font-black leading-none"
                style={{ fontSize: 'clamp(2.6rem, 4.5vw, 4rem)', fontFamily: '"Space Grotesk", sans-serif' }}
              >
                <span ref={line1Ref} className="block" style={{ display: 'block' }}>Tu mejor elección,</span>
                <span ref={line2Ref} className="block" style={{ display: 'block' }}>al momento de rentar.</span>
              </h1>
            </div>
          </div>

      </div>

      {/* Bottom spacing */}
      <div className="pb-14" />
    </section>
  );
}

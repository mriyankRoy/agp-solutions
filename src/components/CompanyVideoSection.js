import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Activity, Maximize2, X } from "lucide-react";

const CompanyVideoSection = ({
  videoSrc = "https://www.youtube.com/watch?v=3V-tIsMuCK4",
  title = "Operational Excellence",
  tagline = "Visualizing the future of power infrastructure and strategic assembly.",
}) => {
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const sectionRef = useRef(null); // Reference for the scroll observer

  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hover, setHover] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isVisible, setIsVisible] = useState(false); // Scroll visibility state

  // --- SCROLL ANIMATION LOGIC ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Shared Animation Classes
  const revealClass = (visible, delay = "duration-1000") =>
    `transition-all ${delay} ease-[cubic-bezier(0.22,1,0.36,1)] ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    }`;

  // --- AUTO-HIDE CURSOR & UI LOGIC ---
  const handleMouseMove = () => {
    setShowControls(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (isPlaying) {
      timerRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFsChange);
    document.addEventListener("webkitfullscreenchange", handleFsChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFsChange);
      document.removeEventListener("webkitfullscreenchange", handleFsChange);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying]);

  const extractVideoId = (url) => {
    const match = url.match(
      /(?:youtube\.com.*(?:\/|v=)|youtu\.be\/)([a-zA-Z0-9_-]+)/
    );
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(videoSrc);

  useEffect(() => {
    if (!videoId) return;
    if (!window.YT) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
    }
    const onYouTubeReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId,
        playerVars: {
          controls: 0,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          showinfo: 0,
          disablekb: 1,
        },
        events: {
          onReady: () => setIsReady(true),
          onStateChange: (event) => {
            setIsPlaying(event.data === 1);
            if (event.data !== 1) setShowControls(true);
          },
        },
      });
    };
    if (window.YT && window.YT.Player) onYouTubeReady();
    else window.onYouTubeIframeAPIReady = onYouTubeReady;
  }, [videoId]);

  const togglePlayPause = () => {
    if (!playerRef.current || !isReady) return;
    isPlaying ? playerRef.current.pauseVideo() : playerRef.current.playVideo();
    setShowControls(true);
  };

  const handleFullScreen = () => {
    const elem = containerRef.current;
    if (elem?.requestFullscreen) elem.requestFullscreen();
    else if (elem?.webkitRequestFullscreen) elem.webkitRequestFullscreen();
  };

  const exitFullScreen = (e) => {
    e.stopPropagation();
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
  };

  return (
    <section ref={sectionRef} className="relative bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* 🏗️ INDUSTRIAL HEADER - Animated */}
        <div className={`mb-16 ${revealClass(isVisible)}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-[#BF092F]" />
            <Activity size={14} className="text-[#BF092F] animate-pulse" />
            <h2 className="text-sm text-[#44444E] uppercase font-bold tracking-[0.4em]">
              System Stream
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h3 className="text-3xl md:text-5xl font-semibold text-[#44444E] leading-tight uppercase tracking-tight">
              Operational <br></br><span className="text-[#BF092F]">Excellence</span>
            </h3>
            <p className="max-w-md text-gray-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed pb-1 border-l-2 border-gray-100 pl-6 lg:ml-8">
              Visualizing the future of power infrastructure and strategic assembly.
            </p>
          </div>
        </div>

        {/* VIDEO PLAYER CHASSIS - Animated with delay */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`group relative w-full bg-black transition-all duration-500 overflow-hidden 
            ${revealClass(isVisible, "duration-[1200ms] delay-300")}
            ${
              isFullscreen
                ? "rounded-0"
                : "rounded-2xl shadow-xl border border-gray-100"
            }
            ${!showControls && isPlaying ? "cursor-none" : "cursor-default"}`}
        >
          {/* CLOSE BUTTON (FULLSCREEN ONLY) */}
          {isFullscreen && (
            <button
              onClick={exitFullScreen}
              className={`absolute top-10 right-10 text-white/50 hover:text-[#BF092F] transition-all z-[110] 
                ${
                  showControls || !isPlaying
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
            >
              <X size={40} className="hover:rotate-90 transition-transform" />
            </button>
          )}

          <div
            className={`relative bg-gray-900 overflow-hidden ${
              isFullscreen ? "h-screen w-screen" : "aspect-video"
            }`}
          >
            <div id="yt-player" className="w-full h-full pointer-events-none" />

            {/* OVERLAY INTERFACE */}
            <div
              className={`absolute inset-0 bg-black/30 transition-opacity duration-700 flex items-center justify-center
              ${
                showControls || !isPlaying
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <button
                onClick={togglePlayPause}
                className="cursor-pointer w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 border-2 bg-[#BF092F] border-[#BF092F] shadow-[0_10px_30px_rgba(191,9,47,0.4)] hover:scale-110 active:scale-95"
              >
                {isPlaying ? (
                  <Pause size={32} className="text-white fill-white" />
                ) : (
                  <Play
                    size={32}
                    className="text-white fill-white translate-x-1"
                  />
                )}
              </button>
            </div>
          </div>

          {/* BOTTOM BAR (DESKTOP MODE ONLY) */}
          {!isFullscreen && (
            <div className="p-8 bg-white border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-1 h-10 bg-[#BF092F]" />
                <p className="text-[12px] text-gray-400 tracking-widest leading-relaxed max-w-xl uppercase font-medium">
                  {tagline}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest mb-1">
                    Status
                  </span>
                  <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#44444E]">
                    <div className="w-2 h-2 rounded-full bg-[#BF092F] animate-pulse" />{" "}
                    Technical Live
                  </div>
                </div>
                <div className="h-8 w-px bg-gray-100" />
                <button
                  onClick={handleFullScreen}
                  className="cursor-pointer flex items-center gap-2 text-[#BF092F] font-bold text-[11px] uppercase tracking-[0.2em] hover:scale-105 transition-transform"
                >
                  Full Screen <Maximize2 size={16} />
                </button>
              </div>
            </div>
          )}

          {!isFullscreen && (
            <div
              className={`absolute bottom-0 left-0 h-1 bg-[#BF092F] transition-all duration-700 ${
                hover ? "w-full" : "w-0"
              }`}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CompanyVideoSection;
import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Activity, Maximize2, Monitor } from "lucide-react";

const CompanyVideoSection = ({
  videoSrc = "https://www.youtube.com/watch?v=3V-tIsMuCK4",
  title = "Operational Excellence",
  tagline = "Visualizing the future of power infrastructure and strategic assembly.",
}) => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const extractVideoId = (url) => {
    const match = url.match(/(?:youtube\.com.*(?:\/|v=)|youtu\.be\/)([a-zA-Z0-9_-]+)/);
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
        },
        events: {
          onReady: () => setIsReady(true),
          onStateChange: (event) => {
            // YT.PlayerState.PLAYING is 1, PAUSED is 2
            setIsPlaying(event.data === 1);
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      onYouTubeReady();
    } else {
      window.onYouTubeIframeAPIReady = onYouTubeReady;
    }
  }, [videoId]);

  const togglePlayPause = () => {
    if (!playerRef.current || !isReady) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <section className="relative bg-[#F8F9FA] py-24 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Technical Header Chassis */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-l-4 border-[#CF0F0F] pl-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Activity size={16} className="text-[#CF0F0F] animate-pulse" />
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">Media_Feed</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#44444E] uppercase tracking-tighter">
              {title}
            </h2>
          </div>
          {/* <div className="hidden lg:block text-right">
             <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
               Encrypted Link: Secure_Access <br/>
               Resolution: 4K_UHD_OPTIC
             </p>
          </div> */}
        </div>

        {/* 🎥 VIDEO PLAYER OVERLAP CHASSIS */}
        <div className="relative group mx-auto max-w-6xl">
          <div className="relative aspect-video bg-black overflow-hidden border border-gray-200 shadow-2xl">
            
            {/* The YouTube Iframe */}
            <div id="yt-player" className="w-full h-full pointer-events-none scale-105" />

            {/* Cinematic Gradient Overlays */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 transition-opacity duration-700 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`} />

            {/* Corner Technical Accents */}
            <div className="absolute top-6 left-6 flex items-center gap-2 text-white/40 group-hover:text-[#CF0F0F] transition-colors">
              <Monitor size={14} />
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">Live Visual Link</span>
            </div>
            <div className="absolute bottom-6 right-6">
              <Maximize2 size={16} className="text-white/20" />
            </div>

            {/* Play/Pause Button - Industrial Design */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={togglePlayPause}
                className={`
                  w-20 h-20 rounded-full flex items-center justify-center
                  backdrop-blur-md border border-white/20 transition-all duration-500
                  ${isPlaying ? "opacity-0 group-hover:opacity-100 bg-white/10" : "opacity-100 bg-[#CF0F0F] shadow-[0_0_30px_rgba(207,15,15,0.4)]"}
                  hover:scale-110 active:scale-95
                `}
              >
                {isPlaying ? (
                  <Pause size={32} className="text-white fill-white" />
                ) : (
                  <Play size={32} className="text-white fill-white translate-x-1" />
                )}
              </button>
            </div>
          </div>

          {/* Sub-Video Caption Strip */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 px-2">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-relaxed max-w-xl">
               {tagline}
            </p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#44444E]">
               <div className="w-2 h-2 rounded-full bg-[#CF0F0F]" />
               Technical Overview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyVideoSection;
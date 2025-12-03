import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export const MemorySlider: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      {/* Tape Label Effect - Centered */}
      <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-tape/90 px-6 py-2 text-xs font-mono tracking-widest text-ink shadow-sm transform -rotate-1 z-20 border border-ink/10 select-none">
        TAPE_04: JULY 4TH, 1991
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center mt-6">
        
        {/* Box 1: Raw Footage */}
        <div className="relative group w-[260px] aspect-[9/16] bg-black rounded-sm shadow-xl overflow-hidden border-2 border-ink/10 rotate-1 transition-transform hover:rotate-0 duration-500">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center filter grayscale opacity-70 sepia-[.4] contrast-75 brightness-90 transition-all duration-700 group-hover:scale-105"
                 style={{ backgroundImage: 'url("https://www.dropbox.com/scl/fi/mjzw1h4e3jg02ru42o2da/IMG_3333-2.PNG?rlkey=pu30gnybkvf9t7kmx4uik85rv&st=ntvp43lc&raw=1")' }}>
            </div>
            {/* Scanlines Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,6px_100%] pointer-events-none z-10"></div>
            
            {/* Overlay UI */}
            <div className="absolute top-4 left-4 bg-black/60 text-white/90 text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-widest backdrop-blur-md border border-white/10 z-20">
                RAW_FOOTAGE.mp4
            </div>
            
            {/* Camcorder UI Elements */}
            <div className="absolute bottom-8 left-4 right-4 flex justify-between items-end opacity-60 z-20">
                 <div className="font-mono text-[8px] text-white tracking-widest uppercase">SP 0:00:00</div>
                 <div className="font-mono text-[8px] text-white tracking-widest uppercase animate-pulse">BATTERY LOW</div>
            </div>
        </div>

        {/* Arrow visual to show transformation */}
        <div className="hidden md:flex text-ink/20 flex-col items-center gap-2">
            <div className="h-[2px] w-12 bg-ink/20"></div>
            <ArrowRight className="w-6 h-6" />
            <div className="h-[2px] w-12 bg-ink/20"></div>
        </div>

        {/* Box 2: Social Cut */}
        <div className="relative group w-[260px] aspect-[9/16] bg-black rounded-sm shadow-2xl overflow-hidden border-2 border-ink -rotate-1 transition-transform hover:rotate-0 duration-500">
             {/* Background Image */}
             <div className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                 style={{ backgroundImage: 'url("https://www.dropbox.com/scl/fi/ut203oo80uorbgej2d7vn/IMG_3334.jpg?rlkey=djkh7v6gxqq3enrtn4ha648nb&st=o718qyv9&raw=1")' }}>
            </div>
            
            {/* Overlay UI */}
            <div className="absolute top-4 right-4 bg-ink text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-lg z-10 flex items-center gap-2">
                <Star className="w-3 h-3 fill-white" /> Social Cut
            </div>
        </div>

      </div>
    </div>
  );
};
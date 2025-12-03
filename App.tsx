import React, { useState, useEffect } from 'react';
import { Play, Instagram, Menu, X, Star, Mail, Disc, Film, Zap, Facebook, Youtube } from 'lucide-react';
import { MemorySlider } from './components/MemorySlider';
import { CheckoutModal, ServiceType } from './components/CheckoutModal';

// --- Navbar Component ---
const NavBar: React.FC<{ onOpenCheckout: (type: ServiceType) => void }> = ({ onOpenCheckout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-paper/90 backdrop-blur-md py-4 border-b border-ink/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center gap-3 group cursor-pointer select-none">
          <div className="relative w-12 h-12 rounded-sm overflow-hidden border border-ink/20 shadow-md group-hover:rotate-3 transition-transform duration-300 bg-black">
            <img 
              src="https://www.dropbox.com/scl/fi/qjtmljohywoa5oiailk3o/53271411-A3EC-4288-A316-50C003A24B87.PNG?rlkey=bs4izfenm9mqgxo9cjg44xllm&st=ukhgftva&raw=1" 
              alt="Lost Family Tapes Logo" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif font-black text-lg tracking-tight text-ink">LOST FAMILY TAPES</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-[0.1em] text-ink/70 font-bold">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="hover:text-ink transition-colors relative group"
          >
            ABOUT
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-ink transition-all group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
            className="hover:text-ink transition-colors relative group"
          >
            PROCESS
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-ink transition-all group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="hover:text-ink transition-colors relative group"
          >
            PRICING
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-ink transition-all group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-ink hover:bg-ink/80 text-paper px-6 py-2.5 font-bold tracking-widest uppercase transition-all shadow-lg hover:shadow-xl rounded-sm flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="w-2 h-2 rounded-full bg-alert animate-pulse shadow-[0_0_8px_#D93025]"></div>
            Digitize Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-ink p-2">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-paper border-b border-ink/10 p-8 flex flex-col gap-6 font-serif text-2xl text-center shadow-2xl h-screen animate-in slide-in-from-top-10">
          <button onClick={() => { setIsOpen(false); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-ink hover:text-alert transition-colors">About</button>
          <button onClick={() => { setIsOpen(false); document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-ink hover:text-alert transition-colors">Process</button>
          <button onClick={() => { setIsOpen(false); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-ink hover:text-alert transition-colors">Pricing</button>
          <button onClick={() => { setIsOpen(false); document.getElementById('pricing')?.scrollIntoView(); }} className="text-alert font-bold mt-4 underline decoration-2 decoration-alert/30">Start Recording</button>
        </div>
      )}
    </nav>
  );
};

// --- Hero Section ---
const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper pt-20">
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        {/* The Badge */}
        <div className="mb-16 inline-flex items-center gap-3 px-5 py-2 border border-ink/10 bg-white rounded-full shadow-sm animate-in fade-in duration-1000 slide-in-from-bottom-4">
          <Star className="w-3 h-3 text-alert fill-alert" />
          <span className="text-ink font-mono text-xs uppercase tracking-[0.2em] font-bold">The Nostalgia Engine™</span>
        </div>

        {/* Hero Graphic (Image + Wiggle) */}
        <div className="relative w-80 md:w-96 mx-auto mb-16 animate-wiggle hover:scale-105 transition-transform duration-300 cursor-pointer">
           <img 
             src="https://www.dropbox.com/scl/fi/lnknvmhehci94mcgkftri/Gemini_Generated_Image_w0fe91w0fe91w0fe.jpeg?rlkey=pf1lxap0whci6tct4jjo0eo5g&st=6221kjn6&raw=1" 
             alt="Lost Family Tapes" 
             className="w-full h-auto drop-shadow-2xl rounded-sm"
           />
        </div>

        <p className="text-lg md:text-2xl font-serif italic text-ink/80 max-w-2xl mx-auto mb-16 leading-relaxed">
          "We don't just digitize. We turn your history into <span className="border-b-2 border-ink pb-1 font-bold">viral stories</span>."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-ink text-paper font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(217,48,37,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(217,48,37,1)] transition-all duration-200 rounded-sm flex items-center gap-3 border border-ink"
          >
            <Play className="w-4 h-4 fill-white" />
            Start Your Archive
          </button>
          
          <a 
            href="https://instagram.com/lostfamilytapes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative block bg-white px-8 py-3 border border-ink/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-sm"
          >
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-tape/90 transform -rotate-1 shadow-sm opacity-90"></div>
              <div className="flex items-center gap-4">
                <div className="group-hover:animate-wiggle text-[#E1306C]">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-ink/60 font-bold">Follow Us</div>
                  <div className="font-bold text-ink text-sm font-serif">@lostfamilytapes</div>
                </div>
              </div>
          </a>
        </div>
      </div>

       {/* Scroll Indicator */}
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 opacity-40 mix-blend-multiply">
        <span className="font-mono text-[10px] tracking-widest text-ink uppercase animate-pulse">Scroll to Restore Your Memories</span>
        <div className="w-[1px] h-16 bg-ink"></div>
      </div>
    </header>
  );
};

// --- About Section (The Curator's Manifesto) ---
const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-paper-dark relative border-t border-ink/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
        
        {/* Content Side */}
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-alert"></div>
            <span className="font-mono text-ink tracking-widest uppercase text-sm font-bold">The Curator's Manifesto</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-serif font-black text-ink mb-8 leading-[0.9]">
            We don't just store memories. <br/>
            <span className="italic text-ink/50 font-medium">We awaken them.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-ink/80 font-serif leading-relaxed">
            <div className="pl-6 border-l-2 border-tape/50 relative">
              <p className="mb-4">
                "It started when I digitized my own family's tapes. I didn't just dump them on a hard drive—I clipped the best moments and shared them on Instagram."
              </p>
              <p className="font-medium text-ink">
                The reaction was electric.
              </p>
            </div>
            
            <p>
              My family didn't just watch; they <span className="underline decoration-alert decoration-2 underline-offset-2">reconnected</span>. We laughed, cried, and flooded the group chat. That's when I realized:
            </p>

            <p className="font-bold text-xl text-ink">
              Memories on a USB stick are dormant.<br/>
              Memories on your feed are <span className="text-[#007AFF]">alive</span>.
            </p>

            <p className="text-base font-mono text-ink/60 pt-4">
              Big digitization factories are graveyards for footage. They sell you storage space. We offer a resurrection. We are archivists for the social age.
            </p>
          </div>
          
          <div className="mt-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-ink grayscale hover:grayscale-0 transition-all">
               <img src="https://www.dropbox.com/scl/fi/qjtmljohywoa5oiailk3o/53271411-A3EC-4288-A316-50C003A24B87.PNG?rlkey=bs4izfenm9mqgxo9cjg44xllm&st=ukhgftva&raw=1" alt="Founder" className="w-full h-full object-cover" />
            </div>
            <div>
               <div className="font-hand text-xl text-ink">Founder's Note</div>
               <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50">Lost Family Tapes Studio</div>
            </div>
          </div>

        </div>

        {/* Visual Side */}
        <div className="order-1 lg:order-2">
           <MemorySlider />
           <div className="text-center mt-6 font-mono text-[10px] uppercase tracking-widest text-ink/40">
             Compare raw vs. restored
           </div>
        </div>

      </div>
    </section>
  );
};

// --- Process Steps ---
const Workflow: React.FC = () => {
    const steps = [
        { title: "Ship", icon: <Mail className="w-6 h-6" />, desc: "We send you a crush-proof kit. You fill it with tapes." },
        { title: "Digitize", icon: <Disc className="w-6 h-6" />, desc: "Pro-grade capture. We treat every tape like a rare artifact." },
        { title: "Curate", icon: <Film className="w-6 h-6" />, desc: "Our editors find the gems. We cut the fluff and enhance." },
        { title: "Viral", icon: <Star className="w-6 h-6" />, desc: "You get a cloud link. Download. Share. Cry happy tears." },
      ];
    
      return (
        <section id="process" className="py-32 bg-paper border-t border-ink/5 scroll-mt-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <span className="font-mono text-alert tracking-widest uppercase text-xs font-bold mb-4 block">The Workflow</span>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-ink">The Viral Loop</h2>
            </div>
    
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="group relative bg-white p-8 border border-ink/5 shadow-sm hover:shadow-[8px_8px_0px_0px_rgba(27,42,73,0.1)] hover:-translate-y-2 transition-all duration-300 rounded-sm">
                  <div className="absolute top-4 right-6 font-serif text-6xl text-tape opacity-50 group-hover:opacity-100 transition-opacity">
                    0{i + 1}
                  </div>
                  <div className="w-12 h-12 bg-paper-dark text-ink rounded-full flex items-center justify-center mb-6 group-hover:bg-ink group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-3 tracking-tight font-serif">{step.title}</h3>
                  <p className="text-ink/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

// --- Pricing ---
const Pricing: React.FC<{ onOpenCheckout: (type: ServiceType) => void }> = ({ onOpenCheckout }) => {
  return (
    <section id="pricing" className="py-32 bg-paper-dark relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-mono text-ink/60 tracking-widest uppercase text-sm mb-2 block">Service Menu</span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-ink">Simple Pricing.</h2>
          </div>
          <p className="text-ink/80 max-w-sm text-right font-serif italic border-l-2 border-alert pl-4">
            No hidden costs. No per-minute charges.<br/>Just pure nostalgia.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Card 1 */}
          <div className="bg-paper p-8 border border-ink/10 shadow-sm hover:border-ink/30 transition-all group relative">
            <h3 className="text-2xl font-serif font-bold text-ink mb-2">The Archive</h3>
            <div className="text-4xl font-bold text-ink/80 mb-6 font-mono tracking-tighter">$25<span className="text-sm text-ink/50 font-sans font-normal ml-2">/ tape</span></div>
            <p className="text-ink/70 text-sm mb-8 min-h-[40px]">Perfect for preservation. Safe, secure, high-res digitization.</p>
            <ul className="space-y-4 mb-8 text-sm text-ink font-mono">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ink/30 rounded-full"></div>Pro Digitization</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ink/30 rounded-full"></div>Cloud Link</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-ink/30 rounded-full"></div>Safe Return</li>
            </ul>
            <button 
              onClick={() => onOpenCheckout('archive')}
              className="w-full py-4 border-2 border-ink/10 text-ink font-bold uppercase text-xs tracking-widest hover:bg-ink hover:text-white transition-all"
            >
              Select
            </button>
          </div>

          {/* Card 2 - Featured */}
          <div className="bg-white p-8 border-2 border-ink shadow-[12px_12px_0px_0px_rgba(217,48,37,0.2)] relative transform lg:-translate-y-4 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-alert text-white font-mono text-[10px] uppercase tracking-widest px-4 py-1 shadow-md font-bold">Most Popular</div>
            
            <h3 className="text-3xl font-serif font-black text-ink mb-2">The Social Cut</h3>
            <div className="text-5xl font-bold text-[#007AFF] mb-6 font-mono tracking-tighter">$199<span className="text-sm text-ink/50 font-sans font-normal ml-2">/ project</span></div>
            <p className="text-ink/80 text-sm mb-8 min-h-[40px] font-medium">Our signature product. We turn your tapes into 4 viral-ready reels.</p>
            <ul className="space-y-4 mb-8 text-sm text-ink font-bold font-mono">
              <li className="flex items-center gap-3"><Star className="w-4 h-4 text-alert fill-alert" />Digitization Included (2 Tapes)</li>
              <li className="flex items-center gap-3"><Star className="w-4 h-4 text-alert fill-alert" />4 Vertical Viral Reels (9:16)</li>
              <li className="flex items-center gap-3"><Star className="w-4 h-4 text-alert fill-alert" />USB Drive Included</li>
              <li className="flex items-center gap-3"><Star className="w-4 h-4 text-alert fill-alert" />Color Grading & Audio Mix</li>
              <li className="flex items-center gap-3"><Star className="w-4 h-4 text-alert fill-alert" />2 Week Turnaround</li>
            </ul>
            <button 
              onClick={() => onOpenCheckout('social')}
              className="w-full py-4 bg-ink text-white font-bold uppercase text-xs tracking-widest hover:bg-ink/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Project
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-paper p-8 border border-ink/10 shadow-sm hover:border-ink/30 transition-all group">
            <h3 className="text-2xl font-serif font-bold text-ink mb-2">Documentary</h3>
            <div className="text-4xl font-bold text-ink/80 mb-6 font-mono tracking-tighter">$750+<span className="text-sm text-ink/50 font-sans font-normal ml-2">/ film</span></div>
            <p className="text-ink/70 text-sm mb-8 min-h-[40px]">A true cinematic experience. Full narrative editing for special occasions.</p>
            <ul className="space-y-4 mb-8 text-sm text-ink font-mono">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-tape rounded-full"></div>Up to 10 Tapes</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-tape rounded-full"></div>Narrative Story Arc</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-tape rounded-full"></div>Custom Scoring</li>
            </ul>
            <a href="mailto:lostfamilytapes@gmail.com" className="w-full py-4 border-2 border-ink/10 text-ink font-bold uppercase text-xs tracking-widest hover:bg-ink hover:text-white transition-all block text-center">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer: React.FC = () => {
    return (
      <footer className="bg-ink py-20 text-paper relative overflow-hidden border-t-8 border-alert">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          
          <div className="w-16 h-16 bg-paper rounded-sm flex items-center justify-center mb-8 rotate-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
             <Film className="w-8 h-8 text-ink" />
          </div>
          
          <h2 className="text-4xl font-serif font-black text-paper mb-4 tracking-tight">LOST FAMILY TAPES</h2>
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-12 text-tape opacity-80">The Nostalgia Engine</p>
          
          <div className="flex gap-8 mb-12 items-center">
            <a href="https://instagram.com/lostfamilytapes" target="_blank" rel="noopener noreferrer" className="hover:text-alert transition-colors p-2 bg-white/5 rounded-full"><Instagram className="w-5 h-5" /></a>
            <a href="https://www.facebook.com/profile.php?id=61583459321916" target="_blank" rel="noopener noreferrer" className="hover:text-alert transition-colors p-2 bg-white/5 rounded-full"><Facebook className="w-5 h-5" /></a>
            <a href="https://www.youtube.com/@Lost_FamilyTapes" target="_blank" rel="noopener noreferrer" className="hover:text-alert transition-colors p-2 bg-white/5 rounded-full"><Youtube className="w-5 h-5" /></a>
            <a href="https://www.tiktok.com/@lostfamilytapes" target="_blank" rel="noopener noreferrer" className="hover:text-alert transition-colors p-2 bg-white/5 rounded-full">
              {/* Tiktok Icon (Custom SVG) */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
              </svg>
            </a>
            <a href="mailto:lostfamilytapes@gmail.com" className="hover:text-alert transition-colors p-2 bg-white/5 rounded-full"><Mail className="w-5 h-5" /></a>
          </div>

          <div className="flex flex-col md:flex-row gap-8 text-xs font-mono uppercase tracking-wider opacity-40">
            <span>Creative Vision Group LLC</span>
            <span>//</span>
            <span>Harrington Park, NJ</span>
          </div>
          
          <div className="mt-20 text-[10px] opacity-20 font-mono">
            © ALL RIGHTS RESERVED. <span className="animate-pulse">_</span>
          </div>
        </div>
      </footer>
    );
  };

// --- Main App Component ---
const App = () => {
  const [checkoutType, setCheckoutType] = useState<ServiceType>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCheckout = (type: ServiceType) => {
    setCheckoutType(type);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-paper font-sans selection:bg-ink selection:text-paper overflow-x-hidden">
      <NavBar onOpenCheckout={openCheckout} />
      <Hero />
      <About />
      <Workflow />
      <Pricing onOpenCheckout={openCheckout} />
      <Footer />
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        serviceType={checkoutType} 
      />
    </div>
  );
};

export default App
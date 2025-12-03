import React, { useState } from 'react';
import { Sparkles, Copy, RefreshCw, Loader2 } from 'lucide-react';
import { generateNostalgicCaption, CaptionResult } from '../services/geminiService';

export const CaptionGenerator: React.FC = () => {
  const [inputContext, setInputContext] = useState('');
  const [result, setResult] = useState<CaptionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!inputContext.trim()) return;

    setIsLoading(true);
    setError(null);
    try {
      const data = await generateNostalgicCaption(inputContext);
      setResult(data);
    } catch (err) {
      setError("The nostalgia engine is warming up. Please check your API key and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Decorative 'Tape' */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-tape/90 shadow-sm transform -rotate-1 z-20 border border-ink/10 flex items-center justify-center">
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink/70 font-bold">AI_MODULE_V1</span>
      </div>

      <div className="bg-white border-2 border-ink p-6 pt-10 shadow-[8px_8px_0px_0px_rgba(27,42,73,1)] relative z-10">
        
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-alert" />
          <h3 className="font-serif text-xl font-bold text-ink">Caption Generator</h3>
        </div>

        <p className="text-sm font-mono text-ink/60 mb-6 leading-relaxed">
          Describe your video (e.g., "Dad grilling in 1998" or "First bike ride"). We'll write the post.
        </p>

        <div className="space-y-4">
          <textarea
            value={inputContext}
            onChange={(e) => setInputContext(e.target.value)}
            placeholder="Ex: Mom dancing at a wedding in 1994, wearing a blue dress..."
            className="w-full p-3 bg-paper-dark border border-ink/20 focus:border-ink focus:ring-0 font-sans text-sm resize-none h-24 placeholder:text-ink/30 outline-none transition-all"
          />

          <button
            onClick={handleGenerate}
            disabled={isLoading || !inputContext}
            className="w-full py-3 bg-ink text-white font-mono uppercase text-xs font-bold tracking-widest hover:bg-ink/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                Generate Caption <span className="group-hover:translate-x-1 transition-transform">→</span>
              </>
            )}
          </button>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-50 text-red-600 text-xs font-mono border border-red-200">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-6 border-t-2 border-dashed border-ink/10 pt-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="bg-paper-dark p-4 relative group">
              <p className="font-serif italic text-lg text-ink leading-relaxed mb-3">
                "{result.caption}"
              </p>
              <div className="flex flex-wrap gap-2">
                {result.hashtags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-mono font-bold text-alert uppercase tracking-wider">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <button 
                onClick={() => navigator.clipboard.writeText(`${result.caption} ${result.hashtags.map(t => `#${t}`).join(' ')}`)}
                className="absolute top-2 right-2 p-2 text-ink/40 hover:text-ink bg-white/50 hover:bg-white rounded-full transition-all opacity-0 group-hover:opacity-100"
                title="Copy to clipboard"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            
            <button 
              onClick={() => setResult(null)}
              className="mt-3 text-[10px] font-mono text-ink/40 hover:text-ink underline flex items-center gap-1 mx-auto"
            >
              <RefreshCw className="w-3 h-3" /> Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

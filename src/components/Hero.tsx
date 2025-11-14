import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import thinkingLandscape from "@/assets/thinking-landscape.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-primary via-secondary to-primary-dark text-primary-foreground px-8 py-16 md:py-24 overflow-hidden">
      <Navigation />
      
      {/* Parallax background image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${thinkingLandscape})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-primary-dark/80" />
      
      {/* Animated pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bS0yNCAwYzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
      
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 drop-shadow-lg">
          My AI Workflow Toolkit
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-8 opacity-95 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 drop-shadow-md">
          Six prompt frameworks for marketing, sales, and business content
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <a
            href="https://www.agenticlearninglabs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-accent text-accent-foreground hover:opacity-90 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            Agentic Learning Labs
          </a>
          <a
            href="/how-to"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-primary-foreground/10 text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/20 hover:scale-105 transition-all backdrop-blur-sm"
          >
            How to Build This
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Navigation from "./Navigation";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary to-primary-dark text-primary-foreground px-8 py-16 md:py-24 text-center overflow-hidden">
      <Navigation />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bS0yNCAwYzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          My AI Workflow Toolkit
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-8 opacity-95 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          Six prompt frameworks for marketing, sales, and business content
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <a
            href="https://www.agenticlearninglabs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-primary-foreground text-primary hover:opacity-90 transition-opacity shadow-lg"
          >
            Agentic Learning Labs
          </a>
          <a
            href="/how-to"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-primary-foreground/10 text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/20 transition-colors"
          >
            How to Build This
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

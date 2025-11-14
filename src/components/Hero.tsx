const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary to-primary-dark text-primary-foreground px-8 py-16 md:py-24 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bS0yNCAwYzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          AI Workflow Toolkit
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-8 opacity-95 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          Mastering AI-Driven Solutions
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          Welcome to my curated collection of AI workflows and prompt strategies. This toolkit represents 
          my hands-on experience in leveraging artificial intelligence to solve real-world challenges. 
          Each workflow has been refined through practical application and demonstrates a deep understanding 
          of prompt engineering, AI model capabilities, and strategic implementation.
        </p>
        <p className="text-base md:text-lg italic opacity-85 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          Built with expertise in AI integration, prompt engineering, and workflow optimization
        </p>
      </div>
    </div>
  );
};

export default Hero;

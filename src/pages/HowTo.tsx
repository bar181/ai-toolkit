import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import TimelineStep from "@/components/TimelineStep";
import KanbanBoard from "@/components/KanbanBoard";
import torontoTeam from "@/assets/toronto-team.jpg";

const HowTo = () => {
  const steps = [
    {
      number: 1,
      title: "📚 Provide Context - Extract Core Concepts",
      description:
        "Start with your source material and extract the essential insights. Don't try to include everything—identify what matters most for your audience.",
      prompts: [
        {
          label: "Prompt Used:",
          content:
            "We want to create a toolkit of our favorite techniques and workflows on how to best use AI. We will be using some ideas from this document - summarize <200 words\n\n[Attach your source document]",
        },
      ],
      outcome:
        "Condensed 163 pages into core framework: Prompt-Refine Loop, 3-Layer Personas, Platform Matching, Value Props, and Self-Scoring Rubrics.",
      keyInsight:
        "💡 Key Insight: Start broad, then narrow. Extract essence before adding detail.",
    },
    {
      number: 2,
      title: "⭐ Refine with Your Favorite Prompts",
      description:
        "Get specific about your top 5-6 techniques. For each, define the value proposition, how it works, and include concrete examples from your experience.",
      prompts: [
        {
          label: "Prompt Used:",
          content: `Provide a summary and list of my favorites. Provide 100 words for each including the value prop and tips. Use specific examples from the document:

* brainstorming tips
* creating personas (3 layers)
* tone adaptation for platforms
* value proposition development
* platform matching strategy
* rubric-based self-scoring`,
        },
      ],
      outcome:
        'Generated 6 detailed technique summaries (~600 words) with real examples like "Sophie, 34, Vancouver digital marketer" and specific before/after results.',
      keyInsight:
        "💡 Key Insight: Specificity creates credibility. Real examples > generic descriptions.",
    },
    {
      number: 3,
      title: "🎯 Identify Target Audience (Persona)",
      description:
        "Define who this resource serves. Understanding your audience shapes every design and content decision that follows.",
      prompts: [
        {
          label: "Prompt Used:",
          content:
            "Let's identify the best target audience for this AI toolkit. I want this to be something I can post on LinkedIn to show I understand AI. The secondary purpose is to share with my team or potential employer or friend how they can work with AI because I understand these tips.",
        },
      ],
      outcome:
        'Defined primary audience as "AI-Curious Marketing & Sales Professionals (30-45)" aka "The Overwhelmed Adopter"—people who feel pressure to use AI but lack systematic frameworks.',
      keyInsight:
        "💡 Key Insight: Your audience determines tone, depth, and examples. Know them before designing.",
    },
    {
      number: 4,
      title: "✍️ Create Copy for the Website",
      description:
        "Structure your content logically. Create an outline first (text only), then refine based on purpose. Remove anything that doesn't serve your goal.",
      prompts: [
        {
          label: "Prompt Used (Initial):",
          content:
            "Create an outline for a 1 page website - text only - do not create the website",
        },
        {
          label: "Prompt Used (Refinement):",
          content:
            "This is a toolkit for me to share on LinkedIn - not something I am selling. Remove everything that makes this sound like a product. This is designed to provide value to show my tips. Include the specific prompts for copy/paste.",
        },
      ],
      outcome:
        "Complete website outline with hero section, 6 tabbed workflows (each with problem/approach/prompt/example), footer with clear LinkedIn CTA. Zero sales language.",
      keyInsight:
        '💡 Key Insight: Purpose changes everything. Shifted from "download free toolkit" to "here\'s what I use daily."',
    },
    {
      number: 5,
      title: "🎨 Prototype in Claude - Refine as Needed",
      description:
        "Transform your text outline into a functional prototype. Test the interactive elements, visual hierarchy, and user flow. Iterate quickly.",
      prompts: [
        {
          label: "Prompt Used:",
          content:
            "Create an interactive artifact - HTML with JavaScript. Make this a modern website and highly engaging. Use the concepts for the website.",
        },
      ],
      outcome:
        "Fully functional single-page website with tabbed navigation, copy-to-clipboard functionality, color-coded sections (problem/approach/example), responsive design, and professional gradient theme.",
      keyInsight:
        "💡 Key Insight: With good structure, AI builds the technical implementation. The hard work was steps 1-4.",
    },
    {
      number: 6,
      title: "💎 Make Professional on Lovable",
      description:
        "Take your working prototype and polish it for production. Deploy to a custom domain, optimize performance, add analytics, and ensure mobile responsiveness.",
      prompts: [
        {
          label: "Export & Deploy:",
          content: `1. Export HTML/CSS/JS from Claude artifact
2. Upload to Lovable.dev
3. Customize domain (bradley.academy/ai-toolkit)
4. Add Google Analytics tracking
5. Test across devices and browsers
6. Share on LinkedIn with launch post`,
        },
      ],
      outcome:
        "Production-ready website deployed at custom domain, optimized for SEO, fully responsive, with professional hosting and analytics integrated.",
      keyInsight:
        "💡 Key Insight: Professional deployment transforms a prototype into a portfolio piece.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-accent/10 to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background rounded-3xl shadow-2xl overflow-hidden my-8 mx-4 md:mx-8">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary text-primary-foreground px-8 py-16 text-center overflow-hidden">
            <Link
              to="/"
              className="absolute top-6 left-8 flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors z-10"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Toolkit</span>
            </Link>

            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                🚀 How We Built the AI Toolkit Website
              </h1>
              <p className="text-xl opacity-90 mb-8">
                From 163-page course document to interactive website in 6
                strategic steps
              </p>

              {/* Toronto Team Image */}
              <div className="max-w-4xl mx-auto mb-8">
                <img
                  src={torontoTeam}
                  alt="Happy collaborative team in Toronto"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>

              {/* Edit Site Section */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-primary-foreground/20">
                <h2 className="text-2xl font-bold mb-4">Edit this Site yourself:</h2>
                <div className="space-y-3">
                  <a
                    href="https://claude.ai/public/artifacts/b7f618b1-4669-48de-9fdb-ea9f99386d64"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                  >
                    <span>Claude Site - Main Page</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://claude.ai/public/artifacts/2487b541-d941-4147-b83a-c629791b8c0e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                  >
                    <span>Claude Site - How To Page</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 md:px-12 py-12 md:py-16 max-w-6xl mx-auto">
            {/* Timeline Steps */}
            <div className="space-y-6">
              {steps.map((step) => (
                <TimelineStep key={step.number} {...step} />
              ))}
            </div>

            {/* Kanban Board */}
            <KanbanBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTo;

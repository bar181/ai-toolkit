import { useState } from "react";
import Navigation from "@/components/Navigation";
import PromptBox from "@/components/PromptBox";
import { Database, Users, BarChart3, Table, UserCircle, FileText, AlertTriangle, Wrench, HelpCircle, ClipboardCheck, Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import dataHero from "@/assets/data-hero.jpg";

const categories = ["All", "Analysis", "Output", "Validation", "Creative"] as const;
type Category = typeof categories[number];

const prompts = [
  {
    id: 1,
    title: "Data Verification & Accuracy",
    icon: Database,
    category: "Validation" as Category,
    content: `Before answering, confirm whether this is real data or synthetic.
Do not make up values.
If any assumptions are required, state them clearly.
Provide links or references where possible and confirm that conclusions are supported by the data.`
  },
  {
    id: 2,
    title: "Audience-Specific Insights",
    icon: Users,
    category: "Analysis" as Category,
    content: `Based on this dataset, provide the top 3 insights for the following audience: [executives / analysts / operators / non-technical stakeholders].
Keep insights concise, actionable, and appropriate for this audience.`
  },
  {
    id: 3,
    title: "Interactive Data Artifact",
    icon: BarChart3,
    category: "Output" as Category,
    content: `Using this dataset, present the findings as an interactive HTML artifact (charts, tables, or filters).
Optimize for clarity, exploration, and decision-making.`
  },
  {
    id: 4,
    title: "Excel-Ready Summary Table",
    icon: Table,
    category: "Output" as Category,
    content: `Convert the key findings into a clean table format suitable for copy-and-paste into Excel.
Include clear column headers and avoid unnecessary formatting.`
  },
  {
    id: 5,
    title: "Persona Identification",
    icon: UserCircle,
    category: "Creative" as Category,
    content: `Based on this dataset, identify the top 5 user personas.
For each persona, include:

Primary goals

Most-preferred platform (e.g., TikTok, Facebook, LinkedIn)

Preferred communication tone (e.g., educational, persuasive, direct)`
  },
  {
    id: 6,
    title: "Sales Sheet Creation",
    icon: FileText,
    category: "Creative" as Category,
    content: `Create a pitch-perfect sales sheet for our target audience using insights from this dataset.
Focus on value, outcomes, and relevance rather than features.`
  },
  {
    id: 7,
    title: "Bias & Outlier Analysis",
    icon: AlertTriangle,
    category: "Validation" as Category,
    content: `Review this dataset and identify any biases, gaps, or outliers.
Explain how these issues could affect conclusions and suggest specific corrective measures or adjustments.`
  },
  {
    id: 8,
    title: "Tool-Specific Prompt Suggestion",
    icon: Wrench,
    category: "Creative" as Category,
    content: `Suggest an optimized prompt for using this dataset with [Tool Name].
Tailor the prompt to that tool's strengths and typical workflows.`
  },
  {
    id: 9,
    title: "Understanding & Clarification Check",
    icon: HelpCircle,
    category: "Validation" as Category,
    content: `I am providing data and contextual comments.
Before proceeding, ask any clarifying questions needed to confirm your understanding of the data, goals, and constraints.`
  },
  {
    id: 10,
    title: "Rubric-Based Scoring",
    icon: ClipboardCheck,
    category: "Analysis" as Category,
    content: `Evaluate this work using a rubric-based scorecard (1–100).
Provide:

Overall score

Category-level scores

Specific, actionable improvement suggestions`
  }
];

const categoryColors: Record<Category, string> = {
  "All": "bg-primary/20 text-primary hover:bg-primary/30",
  "Analysis": "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30",
  "Output": "bg-green-500/20 text-green-400 hover:bg-green-500/30",
  "Validation": "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30",
  "Creative": "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30"
};

const DataPrompts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredPrompts = prompts.filter((prompt) => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || prompt.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img 
          src={dataHero} 
          alt="Data visualization abstract art" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">10 Curated Prompts</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 drop-shadow-lg">
              Data & Analysis Prompts
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto drop-shadow-md">
              Copy these refined prompts to supercharge your AI-assisted data analysis
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Search and Filter */}
          <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg py-4 mb-8 -mx-4 px-4 border-b border-border/50">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search prompts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-muted/50 border-border/50"
                />
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className={`cursor-pointer transition-all duration-200 ${
                      activeCategory === category
                        ? categoryColors[category]
                        : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Prompts Grid */}
          <div className="space-y-6">
            {filteredPrompts.map((prompt, index) => (
              <div 
                key={prompt.id} 
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:scale-110 transition-transform duration-300">
                    <prompt.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {prompt.id}. {prompt.title}
                    </h2>
                  </div>
                  <Badge variant="outline" className={categoryColors[prompt.category]}>
                    {prompt.category}
                  </Badge>
                </div>
                <PromptBox content={prompt.content} label="Prompt" />
              </div>
            ))}
          </div>

          {filteredPrompts.length === 0 && (
            <div className="text-center py-16">
              <Database className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground text-lg">No prompts found matching your search.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DataPrompts;

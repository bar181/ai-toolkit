import Navigation from "@/components/Navigation";
import PromptBox from "@/components/PromptBox";
import { Database, Users, BarChart3, Table, UserCircle, FileText, AlertTriangle, Wrench, HelpCircle, ClipboardCheck } from "lucide-react";

const prompts = [
  {
    id: 1,
    title: "Data Verification & Accuracy",
    icon: Database,
    content: `Before answering, confirm whether this is real data or synthetic.
Do not make up values.
If any assumptions are required, state them clearly.
Provide links or references where possible and confirm that conclusions are supported by the data.`
  },
  {
    id: 2,
    title: "Audience-Specific Insights",
    icon: Users,
    content: `Based on this dataset, provide the top 3 insights for the following audience: [executives / analysts / operators / non-technical stakeholders].
Keep insights concise, actionable, and appropriate for this audience.`
  },
  {
    id: 3,
    title: "Interactive Data Artifact",
    icon: BarChart3,
    content: `Using this dataset, present the findings as an interactive HTML artifact (charts, tables, or filters).
Optimize for clarity, exploration, and decision-making.`
  },
  {
    id: 4,
    title: "Excel-Ready Summary Table",
    icon: Table,
    content: `Convert the key findings into a clean table format suitable for copy-and-paste into Excel.
Include clear column headers and avoid unnecessary formatting.`
  },
  {
    id: 5,
    title: "Persona Identification",
    icon: UserCircle,
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
    content: `Create a pitch-perfect sales sheet for our target audience using insights from this dataset.
Focus on value, outcomes, and relevance rather than features.`
  },
  {
    id: 7,
    title: "Bias & Outlier Analysis",
    icon: AlertTriangle,
    content: `Review this dataset and identify any biases, gaps, or outliers.
Explain how these issues could affect conclusions and suggest specific corrective measures or adjustments.`
  },
  {
    id: 8,
    title: "Tool-Specific Prompt Suggestion",
    icon: Wrench,
    content: `Suggest an optimized prompt for using this dataset with [Tool Name].
Tailor the prompt to that tool's strengths and typical workflows.`
  },
  {
    id: 9,
    title: "Understanding & Clarification Check",
    icon: HelpCircle,
    content: `I am providing data and contextual comments.
Before proceeding, ask any clarifying questions needed to confirm your understanding of the data, goals, and constraints.`
  },
  {
    id: 10,
    title: "Rubric-Based Scoring",
    icon: ClipboardCheck,
    content: `Evaluate this work using a rubric-based scorecard (1–100).
Provide:

Overall score

Category-level scores

Specific, actionable improvement suggestions`
  }
];

const DataPrompts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Favorite Data & Analysis Prompts
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Copy these refined prompts to get better, more accurate results from your AI-assisted data analysis.
            </p>
          </header>

          <div className="space-y-8">
            {prompts.map((prompt) => (
              <div key={prompt.id} className="group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <prompt.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {prompt.id}. {prompt.title}
                  </h2>
                </div>
                <PromptBox content={prompt.content} label="Prompt" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DataPrompts;

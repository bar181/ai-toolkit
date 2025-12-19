import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Database, Eye, ClipboardList, UserCircle, Presentation, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";

interface Step {
  id: string;
  number: number;
  title: string;
  icon: React.ElementType;
  purpose: string;
  tasks: string[];
  outputs: string[];
}

const steps: Step[] = [
  {
    id: "team-setup",
    number: 1,
    title: "Team Setup",
    icon: Users,
    purpose: "Align strengths and focus fast",
    tasks: [
      "Identify 1–2 skills per team member",
      "Define case in one clear sentence",
      "Confirm roles using AI",
      "Generate and select a team name with a value proposition",
    ],
    outputs: [
      "Named team with clear responsibilities",
      "Shared understanding of problem",
    ],
  },
  {
    id: "load-data",
    number: 2,
    title: "Load Data and Assumptions",
    icon: Database,
    purpose: "Make sure foundation is solid",
    tasks: [
      "Upload dataset",
      "Run basic sanity checks",
      "Upload and restate assumptions",
      "Identify what is testable vs uncertain",
    ],
    outputs: [
      "Trusted dataset",
      "Clear assumptions in plain language",
    ],
  },
  {
    id: "big-picture",
    number: 3,
    title: "Big Picture Framing",
    icon: Eye,
    purpose: "See forest before trees",
    tasks: [
      "Create a one-page summary",
      "Identify key insight areas",
      "Align analysis with team strengths and client needs",
      "Create a simple visualization",
    ],
    outputs: [
      "One-page decision context",
      "First visual or interactive artifact",
    ],
  },
  {
    id: "project-plan",
    number: 4,
    title: "Project Plan",
    icon: ClipboardList,
    purpose: "Turn ideas into action",
    tasks: [
      "Generate step-by-step analysis plan",
      "Assign roles and outputs",
      "Identify any required research",
      "List all available insights",
    ],
    outputs: [
      "Clear plan with ownership",
      "No confusion about next steps",
    ],
  },
  {
    id: "owner-persona",
    number: 5,
    title: "Owner Persona and Requirements",
    icon: UserCircle,
    purpose: "Aim analysis at a real decision maker",
    tasks: [
      "Create a business owner persona",
      "Identify decision triggers",
      "Confirm what evidence matters",
      "Decide what to include and exclude",
    ],
    outputs: [
      "Recommendation shaped for a real person",
      "Focused scope",
    ],
  },
  {
    id: "recommendation",
    number: 6,
    title: "Recommendation and Presentation",
    icon: Presentation,
    purpose: "Make data actionable",
    tasks: [
      "Generate key insights",
      "Validate evidence and limits",
      "Draft a decision-ready recommendation",
      "Self-evaluate for clarity and relevance",
    ],
    outputs: [
      "Decision-ready recommendation",
      "Interactive presentation artifact",
    ],
  },
];

const CaseStudies = () => {
  const [activeStep, setActiveStep] = useState("team-setup");

  const currentStep = steps.find((s) => s.id === activeStep);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-accent/10 to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background rounded-3xl shadow-2xl overflow-hidden my-8 mx-4 md:mx-8 border border-primary/10">
          {/* Hero Header */}
          <div className="relative bg-gradient-to-br from-primary via-secondary to-primary-dark text-primary-foreground px-8 py-16 text-center overflow-hidden">
            <Navigation />
            
            {/* Animated pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bS0yNCAwYzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/50 to-primary-dark/60" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 drop-shadow-lg">
                Day 1 Group Workflow
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mb-6 opacity-95 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 drop-shadow-md">
                From Data to Decision
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                A complete, practical analytics workflow that moves from: <strong>team → data → insight → decision</strong>. 
                Not theory. Not dashboards for dashboards' sake. Clear thinking someone can act on.
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-border bg-muted/30">
            <div className="px-4 md:px-8 overflow-x-auto">
              <div className="flex gap-1 py-2 min-w-max">
                {steps.map((step) => {
                  const Icon = step.icon;
                  const isActive = activeStep === step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`
                        flex items-center gap-2 px-4 py-3 rounded-lg font-medium text-sm transition-all
                        ${isActive 
                          ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }
                      `}
                    >
                      <span className={`
                        w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                        ${isActive ? "bg-primary-foreground/20" : "bg-muted-foreground/20"}
                      `}>
                        {step.number}
                      </span>
                      <Icon className="w-4 h-4" />
                      <span className="hidden md:inline">{step.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="px-8 md:px-16 py-12 md:py-16">
            {currentStep && (
              <div className="animate-in fade-in duration-500">
                {/* Step Header */}
                <div className="flex items-start gap-6 mb-10">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-2xl flex items-center justify-center shadow-xl">
                    <currentStep.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        Step {currentStep.number}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                      {currentStep.title}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      <span className="font-semibold text-primary">Purpose:</span> {currentStep.purpose}
                    </p>
                  </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* You Will Section */}
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <ClipboardList className="w-5 h-5 text-primary" />
                      You will:
                    </h3>
                    <ul className="space-y-3">
                      {currentStep.tasks.map((task, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                            <span className="text-xs font-bold text-primary">{index + 1}</span>
                          </div>
                          <span className="text-foreground leading-relaxed">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Output Section */}
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Output:
                    </h3>
                    <ul className="space-y-3">
                      {currentStep.outputs.map((output, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground leading-relaxed font-medium">{output}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <span>Progress</span>
                    <span>Step {currentStep.number} of {steps.length}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                      style={{ width: `${(currentStep.number / steps.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => {
                      const prevIndex = steps.findIndex(s => s.id === activeStep) - 1;
                      if (prevIndex >= 0) setActiveStep(steps[prevIndex].id);
                    }}
                    disabled={currentStep.number === 1}
                    className="px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-muted hover:bg-muted/80 text-foreground"
                  >
                    ← Previous Step
                  </button>
                  <button
                    onClick={() => {
                      const nextIndex = steps.findIndex(s => s.id === activeStep) + 1;
                      if (nextIndex < steps.length) setActiveStep(steps[nextIndex].id);
                    }}
                    disabled={currentStep.number === steps.length}
                    className="px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Next Step →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Summary */}
          <div className="bg-gradient-to-br from-code-bg via-code-bg/95 to-primary-dark text-code-text px-8 md:px-16 py-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-accent text-2xl font-bold mb-4">What You Walk Away With</h3>
              <p className="text-lg opacity-90 mb-6">
                A complete, practical analytics workflow that moves from: <br />
                <strong className="text-accent">team → data → insight → decision</strong>
              </p>
              <p className="text-base opacity-80">
                Not theory. Not dashboards for dashboards' sake. Clear thinking someone can act on.
              </p>
              <div className="mt-8">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-gradient-to-r from-accent to-primary text-primary-foreground hover:from-accent/90 hover:to-primary/90 hover:scale-105 transition-all shadow-lg"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Toolkit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;

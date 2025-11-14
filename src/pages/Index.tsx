import { useState } from "react";
import Hero from "@/components/Hero";
import TabNavigation from "@/components/TabNavigation";
import ContentSection from "@/components/ContentSection";
import ProblemBox from "@/components/ProblemBox";
import ApproachBox from "@/components/ApproachBox";
import PromptBox from "@/components/PromptBox";
import ExampleBox from "@/components/ExampleBox";
import LayerSection from "@/components/LayerSection";
import { workflows, tabs } from "@/data/workflows";

const Index = () => {
  const [activeTab, setActiveTab] = useState("brainstorming");

  const currentWorkflow = workflows.find((w) => w.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-primary-dark/10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background rounded-3xl shadow-2xl overflow-hidden my-8 mx-4 md:mx-8">
          <Hero />
          
          <TabNavigation
            activeTab={activeTab}
            onTabChange={setActiveTab}
            tabs={tabs}
          />

          <div className="px-8 md:px-16 py-12 md:py-16">
            {currentWorkflow && (
              <ContentSection title={currentWorkflow.title}>
                {currentWorkflow.subtitle && (
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {currentWorkflow.subtitle}
                  </p>
                )}

                <ProblemBox
                  title={currentWorkflow.problem.title}
                  description={currentWorkflow.problem.description}
                />

                <ApproachBox
                  title={currentWorkflow.approach.title}
                  description={currentWorkflow.approach.description}
                />

                {/* Render sections if they exist (for multi-layer workflows) */}
                {currentWorkflow.sections && currentWorkflow.sections.map((section, index) => (
                  <LayerSection key={index} title={section.title}>
                    <PromptBox
                      label={section.prompt.label}
                      content={section.prompt.content}
                    />
                  </LayerSection>
                ))}

                {/* Render single prompt if no sections */}
                {currentWorkflow.prompt && !currentWorkflow.sections && (
                  <PromptBox
                    label={currentWorkflow.prompt.label}
                    content={currentWorkflow.prompt.content}
                  />
                )}

                <ExampleBox
                  title={currentWorkflow.example.title}
                  description={currentWorkflow.example.description}
                />
              </ContentSection>
            )}
          </div>

          <footer className="bg-code-bg text-code-text px-8 md:px-16 py-12">
            <h3 className="text-success text-2xl font-bold mb-6">How to Use This Toolkit</h3>
            <div className="space-y-4 text-base leading-relaxed opacity-90">
              <p>
                <strong className="text-success">Not magic formulas.</strong> These prompts work because they solve 
                specific problems I've encountered repeatedly. Copy them exactly, or adapt the structure to your context.
              </p>
              <p>
                <strong className="text-success">Iteration expected.</strong> First output is rarely final. The 
                workflow is: generate → select best → refine specifics → deploy.
              </p>
              <p>
                <strong className="text-success">Combine them.</strong> Real projects layer these together. 
                Build a persona (Tab 2) → match platform (Tab 5) → adapt tone (Tab 3) → score output (Tab 6).
              </p>
              <p className="pt-4">
                <strong className="text-success">Why I built this:</strong> After teaching AI workshops and 
                consulting on implementation, I kept returning to these six frameworks. They're simple enough 
                to remember, specific enough to be useful, and flexible enough to adapt. If you get value from 
                even one, it's served its purpose.
              </p>
              <p className="pt-4 text-sm opacity-75">
                Questions, feedback, or consulting inquiries → bradley@example.com
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;

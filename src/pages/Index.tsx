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
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-success text-2xl font-bold mb-6">How to Use This Toolkit</h3>
                <div className="space-y-4 text-base leading-relaxed opacity-90">
                  <p>
                    <strong className="text-success">Not magic formulas.</strong> These prompts work because they solve 
                    specific problems encountered repeatedly. Copy them exactly, or adapt the structure to your context.
                  </p>
                  <p>
                    <strong className="text-success">Iteration expected.</strong> First output is rarely final. The 
                    workflow is: generate → select best → refine specifics → deploy.
                  </p>
                  <p>
                    <strong className="text-success">Combine them.</strong> Real projects layer these together. 
                    Build a persona (Tab 2) → match platform (Tab 5) → adapt tone (Tab 3) → score output (Tab 6).
                  </p>
                  <div className="mt-6">
                    <a
                      href="/how-to"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-success/20 text-success border border-success/30 hover:bg-success/30 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-success text-2xl font-bold mb-6">About Bradley Ross</h3>
                <div className="space-y-4 text-base leading-relaxed opacity-90">
                  <p>
                    Bradley Ross is a digital media designer and educator specializing in practical AI applications 
                    for business and marketing. He combines academic rigor with real-world implementation experience.
                  </p>
                  <div className="space-y-2">
                    <p><strong className="text-success">Education:</strong> Harvard ALM Digital Media Design</p>
                    <p><strong className="text-success">Teaching:</strong> CS50 Teaching Fellow</p>
                    <p><strong className="text-success">Organization:</strong> Agentics Foundation</p>
                  </div>
                  <div className="pt-4">
                    <a 
                      href="https://www.linkedin.com/in/bradaross/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-success/20 text-success border border-success/30 hover:bg-success/30 transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm opacity-75">Practical AI Education</p>
                    <a 
                      href="https://www.agenticlearninglabs.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-success hover:underline font-medium"
                    >
                      Agentic Learning Labs
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;

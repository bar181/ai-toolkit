import { useState } from "react";
import Hero from "@/components/Hero";
import TabNavigation from "@/components/TabNavigation";
import ContentSection from "@/components/ContentSection";
import ProblemBox from "@/components/ProblemBox";
import ApproachBox from "@/components/ApproachBox";
import PromptBox from "@/components/PromptBox";
import ExampleBox from "@/components/ExampleBox";

const Index = () => {
  const [activeTab, setActiveTab] = useState("research");

  const tabs = [
    { id: "research", label: "Research & Analysis" },
    { id: "content", label: "Content Creation" },
    { id: "technical", label: "Technical Writing" },
    { id: "strategy", label: "Strategic Planning" },
  ];

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
            {activeTab === "research" && (
              <>
                <ContentSection title="Research & Competitive Analysis">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Comprehensive market analysis and competitive intelligence gathering using AI-powered research techniques.
                  </p>

                  <ProblemBox
                    title="The Challenge"
                    description="Conducting thorough market research is time-consuming and often yields scattered, inconsistent data that's difficult to synthesize into actionable insights."
                  />

                  <ApproachBox
                    title="AI-Powered Solution"
                    description="Leverage Claude or GPT-4 to systematically analyze markets, competitors, and trends. This approach ensures comprehensive coverage while maintaining consistency in analysis framework."
                  />

                  <PromptBox
                    label="Market Research Prompt"
                    content={`Analyze the [INDUSTRY/MARKET] landscape focusing on:

1. Market Size & Growth
   - Current market valuation
   - Historical growth trends (3-5 years)
   - Projected growth rate and factors
   - Key market segments

2. Competitive Analysis
   - Top 5-7 major players
   - Their market share and positioning
   - Unique value propositions
   - Strengths and weaknesses

3. Trends & Opportunities
   - Emerging technologies or approaches
   - Unmet customer needs
   - Regulatory changes
   - Market gaps

4. Target Customer Profile
   - Demographics
   - Pain points
   - Buying behavior
   - Decision factors

Provide data-driven insights with sources where possible.`}
                  />

                  <ExampleBox
                    title="Example Use Case"
                    description="Used this workflow to analyze the AI automation tools market, identifying a gap in user-friendly workflow builders for non-technical users. This insight informed product positioning and feature prioritization."
                  />
                </ContentSection>
              </>
            )}

            {activeTab === "content" && (
              <>
                <ContentSection title="Content Creation & Optimization">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Strategic content development leveraging AI for ideation, creation, and optimization while maintaining authentic voice.
                  </p>

                  <ProblemBox
                    title="The Challenge"
                    description="Creating engaging, SEO-optimized content consistently while maintaining brand voice and avoiding generic AI-generated text."
                  />

                  <ApproachBox
                    title="Layered Content Strategy"
                    description="Use AI for research and structure, then apply human creativity for authentic voice and insights. This hybrid approach ensures content is both efficient to produce and genuinely valuable."
                  />

                  <PromptBox
                    label="Content Brief Generator"
                    content={`Create a comprehensive content brief for: [TOPIC]

Target Audience: [DESCRIPTION]
Content Type: [Blog/Guide/Case Study]
Primary Goal: [Education/Conversion/Awareness]

Include:

1. SEO Research
   - Primary keyword (with search volume)
   - 5-7 related keywords
   - Search intent analysis
   - Featured snippet opportunities

2. Content Structure
   - Compelling headline options (3-5)
   - Subheading framework
   - Key points to cover
   - Recommended length

3. Competitive Analysis
   - Top 3 ranking articles
   - Content gaps they miss
   - Differentiation opportunities

4. Engagement Elements
   - Statistics to include
   - Examples or case studies
   - Call-to-action suggestions
   - Visual content recommendations

Make it actionable and specific.`}
                  />

                  <ExampleBox
                    title="Real Application"
                    description="Generated briefs for a tech blog series that increased organic traffic by 300% over 3 months. The AI research identified trending topics and gaps competitors missed."
                  />
                </ContentSection>
              </>
            )}

            {activeTab === "technical" && (
              <>
                <ContentSection title="Technical Documentation">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Transform complex technical concepts into clear, accessible documentation using AI-assisted explanation and structuring.
                  </p>

                  <ProblemBox
                    title="The Challenge"
                    description="Technical documentation often becomes too jargon-heavy for beginners or too simplified for advanced users, failing to serve either audience effectively."
                  />

                  <ApproachBox
                    title="Adaptive Documentation"
                    description="Create layered documentation that AI helps organize by complexity level, ensuring both novice and expert users find relevant information quickly."
                  />

                  <PromptBox
                    label="Technical Explainer Prompt"
                    content={`Explain [TECHNICAL CONCEPT/PROCESS] with a layered approach:

**Quick Overview** (2-3 sentences)
Explain what it is and why it matters in simple terms.

**How It Works** (Beginner Level)
- Break down the process step-by-step
- Use analogies where helpful
- Define any necessary technical terms
- Visual description of the flow

**Technical Details** (Advanced Level)
- System architecture
- Technical specifications
- Integration points
- Configuration options
- Performance considerations

**Common Use Cases**
- 3-5 practical applications
- When to use vs alternatives
- Best practices

**Troubleshooting**
- Common issues and solutions
- Debugging approaches
- Resources for help

Use clear formatting, code examples where relevant, and maintain accuracy throughout.`}
                  />

                  <ExampleBox
                    title="Documentation Success"
                    description="Used this framework to document a complex API integration, reducing support tickets by 60% as developers found answers more easily in the multi-level documentation."
                  />
                </ContentSection>
              </>
            )}

            {activeTab === "strategy" && (
              <>
                <ContentSection title="Strategic Planning & Decision Making">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Use AI as a strategic thinking partner to explore scenarios, identify risks, and develop comprehensive plans.
                  </p>

                  <ProblemBox
                    title="The Challenge"
                    description="Strategic decisions require considering multiple perspectives, potential outcomes, and long-term implications - a mentally taxing process prone to blind spots."
                  />

                  <ApproachBox
                    title="AI-Enhanced Strategic Framework"
                    description="Leverage AI to systematically explore scenarios, challenge assumptions, and identify considerations you might miss, while maintaining human judgment for final decisions."
                  />

                  <PromptBox
                    label="Strategic Analysis Prompt"
                    content={`Act as a strategic advisor analyzing this decision:

**Decision Context:**
[Describe the decision/challenge]

**Current Situation:**
[Relevant background, constraints, goals]

Please provide:

1. **Stakeholder Analysis**
   - Who is impacted?
   - What are their interests/concerns?
   - Potential resistance points

2. **Option Analysis**
   For each viable option:
   - Pros and cons
   - Resource requirements
   - Timeline implications
   - Risk factors
   - Success metrics

3. **Scenario Planning**
   Best case, likely case, worst case for top 2-3 options

4. **Risk Mitigation**
   - Top risks for each option
   - Mitigation strategies
   - Warning signs to monitor

5. **Implementation Roadmap**
   For the most promising option:
   - Phase breakdown
   - Quick wins
   - Critical dependencies
   - Decision checkpoints

Challenge my assumptions and identify potential blind spots.`}
                  />

                  <ExampleBox
                    title="Strategic Application"
                    description="Applied this framework when evaluating a major product pivot. AI analysis uncovered a customer segment we'd overlooked and identified implementation risks that would have derailed the timeline."
                  />
                </ContentSection>
              </>
            )}
          </div>

          <footer className="bg-code-bg text-code-text px-8 md:px-16 py-12">
            <h3 className="text-success text-2xl font-bold mb-6">About This Toolkit</h3>
            <div className="space-y-4 text-base leading-relaxed opacity-90">
              <p>
                This AI Workflow Toolkit represents my practical experience in integrating artificial 
                intelligence into real-world business processes. Each workflow has been tested, refined, 
                and proven effective across various projects.
              </p>
              <p>
                <strong className="text-success">Key Principles:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>AI augments human intelligence, never replaces it</li>
                <li>Prompt engineering is about asking the right questions</li>
                <li>Iteration and refinement are essential to quality</li>
                <li>Context and specificity drive better AI outputs</li>
                <li>Human review and judgment are always critical</li>
              </ul>
              <p className="pt-4 text-sm opacity-75">
                Built to showcase AI expertise and workflow optimization capabilities
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const HowTo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-primary-dark/10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-background rounded-3xl shadow-2xl overflow-hidden my-8 mx-4 md:mx-8">
          <div className="relative bg-gradient-to-br from-primary to-primary-dark text-primary-foreground px-8 py-16 text-center">
            <Link 
              to="/"
              className="absolute top-6 left-8 flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Toolkit</span>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How to Build This Toolkit
            </h1>
            <p className="text-xl opacity-90">
              From class work to Claude to Lovable
            </p>
          </div>

          <div className="px-8 md:px-16 py-12 md:py-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">Step-by-Step Guide</h2>
              
              <div className="space-y-8">
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Step 1: Gather Your Content</h3>
                  <p className="text-muted-foreground">
                    Start with your class work, notes, or existing AI workflows. Organize your prompts, 
                    examples, and frameworks into clear categories.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Step 2: Structure with Claude</h3>
                  <p className="text-muted-foreground">
                    Use Claude or your preferred AI assistant to help structure your content. Create 
                    consistent formatting for problems, approaches, prompts, and examples across all sections.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Step 3: Design in Lovable</h3>
                  <p className="text-muted-foreground">
                    Bring your structured content to Lovable. Describe your vision for the design, and 
                    Lovable will generate a modern, responsive React application with your content organized 
                    in an intuitive tabbed interface.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Step 4: Iterate & Refine</h3>
                  <p className="text-muted-foreground">
                    Work with Lovable to adjust colors, layout, and functionality. Add your personal branding, 
                    contact information, and any additional sections you need.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Step 5: Deploy & Share</h3>
                  <p className="text-muted-foreground">
                    Once you're happy with your toolkit, deploy it using Lovable's one-click publish feature. 
                    Share the link on LinkedIn, in your resume, or with potential employers to showcase your 
                    AI expertise.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-3">Pro Tips</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Keep your prompts actionable and specific</li>
                  <li>• Include real examples from your own work</li>
                  <li>• Make it personal - your unique perspective is valuable</li>
                  <li>• Update regularly as you discover new workflows</li>
                  <li>• Use this as a living document that grows with your AI expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTo;

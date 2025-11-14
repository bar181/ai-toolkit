import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface TimelineStepProps {
  number: number;
  title: string;
  description: string;
  prompts: Array<{ label: string; content: string }>;
  outcome: string;
  keyInsight: string;
}

const TimelineStep = ({
  number,
  title,
  description,
  prompts,
  outcome,
  keyInsight,
}: TimelineStepProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="mb-8 bg-background rounded-2xl shadow-lg overflow-hidden border-l-4 border-primary hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
            {number}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {/* Left column - Prompts */}
          <div className="space-y-3">
            {prompts.map((prompt, index) => (
              <div
                key={index}
                className="bg-code-bg text-code-text p-4 rounded-lg font-mono text-xs relative"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-400 font-bold text-[10px] uppercase tracking-wider">
                    {prompt.label}
                  </span>
                  <button
                    onClick={() => copyToClipboard(prompt.content, index)}
                    className="flex items-center gap-1 px-2 py-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded text-[10px] font-semibold transition-colors"
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="w-3 h-3" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="whitespace-pre-wrap text-[11px] leading-relaxed">
                  {prompt.content}
                </div>
              </div>
            ))}
          </div>

          {/* Right column - Outcome & Insight */}
          <div className="space-y-3">
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-lg">
              <strong className="text-green-700 dark:text-green-400 block mb-2 text-sm font-bold">
                Outcome
              </strong>
              <p className="text-green-800 dark:text-green-300 text-sm leading-relaxed">
                {outcome}
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-lg">
              <p className="text-orange-800 dark:text-orange-300 text-sm leading-relaxed italic">
                {keyInsight}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineStep;

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface TimelineStepProps {
  number: number;
  title: string;
  description: string;
  prompts: Array<{ label: string; content: string }>;
  outcome: string;
  keyInsight: string;
  isEven: boolean;
}

const TimelineStep = ({
  number,
  title,
  description,
  prompts,
  outcome,
  keyInsight,
  isEven,
}: TimelineStepProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div
      className={`flex mb-16 relative items-center ${
        isEven ? "md:flex-row-reverse" : ""
      } flex-col md:flex-row`}
    >
      {/* Step number circle */}
      <div className="absolute left-1/2 -translate-x-1/2 w-20 h-20 bg-background border-4 border-primary rounded-full flex items-center justify-center text-3xl font-bold text-primary shadow-xl z-10 md:relative md:left-auto md:translate-x-0">
        {number}
      </div>

      {/* Content box */}
      <div
        className={`w-full md:w-[45%] bg-background p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-all ${
          isEven ? "md:ml-auto" : "md:mr-auto"
        } mt-12 md:mt-0`}
      >
        <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Prompts */}
        {prompts.map((prompt, index) => (
          <div
            key={index}
            className="bg-code-bg text-code-text p-5 rounded-lg font-mono text-sm mb-4 relative"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-green-400 font-bold text-xs uppercase tracking-wider">
                {prompt.label}
              </span>
              <button
                onClick={() => copyToClipboard(prompt.content, index)}
                className="flex items-center gap-2 px-3 py-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded text-xs font-semibold transition-colors"
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
            <div className="whitespace-pre-wrap">{prompt.content}</div>
          </div>
        ))}

        {/* Outcome */}
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
          <strong className="text-green-700 dark:text-green-400 block mb-2">
            Outcome:
          </strong>
          <p className="text-green-800 dark:text-green-300">{outcome}</p>
        </div>

        {/* Key Insight */}
        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded italic">
          <p className="text-orange-800 dark:text-orange-300">{keyInsight}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineStep;

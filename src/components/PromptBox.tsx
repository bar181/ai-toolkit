import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface PromptBoxProps {
  label?: string;
  content: string;
}

const PromptBox = ({ label = "Prompt", content }: PromptBoxProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  return (
    <div className="bg-code-bg text-code-text rounded-xl p-6 my-6 font-mono text-sm leading-relaxed shadow-lg">
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-code-text/20">
        <span className="text-success font-bold text-xs uppercase tracking-wider">
          {label}
        </span>
        <Button
          onClick={handleCopy}
          size="sm"
          className={`transition-all ${
            copied
              ? "bg-success hover:bg-success"
              : "bg-primary hover:bg-primary-dark"
          }`}
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </>
          )}
        </Button>
      </div>
      <div className="whitespace-pre-wrap">{content}</div>
    </div>
  );
};

export default PromptBox;

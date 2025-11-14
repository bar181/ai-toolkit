import { AlertCircle } from "lucide-react";

interface ProblemBoxProps {
  title: string;
  description: string;
}

const ProblemBox = ({ title, description }: ProblemBoxProps) => {
  return (
    <div className="bg-error-light border-l-4 border-error rounded-lg p-6 my-6">
      <div className="flex items-start gap-3">
        <AlertCircle className="h-6 w-6 text-error flex-shrink-0 mt-0.5" />
        <div>
          <strong className="text-error text-lg block mb-2">{title}</strong>
          <p className="text-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemBox;

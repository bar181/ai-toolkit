import { Lightbulb } from "lucide-react";

interface ExampleBoxProps {
  title: string;
  description: string;
}

const ExampleBox = ({ title, description }: ExampleBoxProps) => {
  return (
    <div className="bg-warning-light border-l-4 border-warning rounded-lg p-6 my-6">
      <div className="flex items-start gap-3">
        <Lightbulb className="h-6 w-6 text-warning flex-shrink-0 mt-0.5" />
        <div>
          <strong className="text-warning block mb-2 text-base">{title}</strong>
          <div className="text-foreground leading-relaxed whitespace-pre-line">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ExampleBox;

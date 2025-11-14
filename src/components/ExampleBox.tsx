import { Lightbulb } from "lucide-react";

interface ExampleBoxProps {
  title: string;
  description: string;
}

const ExampleBox = ({ title, description }: ExampleBoxProps) => {
  return (
    <div className="bg-gradient-to-br from-secondary/10 to-primary-light/10 border-l-4 border-secondary rounded-lg p-6 my-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-3">
        <Lightbulb className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
        <div>
          <strong className="text-secondary block mb-2 text-base">{title}</strong>
          <div className="text-foreground leading-relaxed whitespace-pre-line">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ExampleBox;

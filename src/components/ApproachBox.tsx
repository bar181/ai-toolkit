import { CheckCircle2 } from "lucide-react";

interface ApproachBoxProps {
  title: string;
  description: string;
}

const ApproachBox = ({ title, description }: ApproachBoxProps) => {
  return (
    <div className="bg-success-light border-l-4 border-success rounded-lg p-6 my-6">
      <div className="flex items-start gap-3">
        <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
        <div>
          <strong className="text-success text-lg block mb-2">{title}</strong>
          <p className="text-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ApproachBox;

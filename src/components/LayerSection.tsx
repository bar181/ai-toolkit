import { ReactNode } from "react";

interface LayerSectionProps {
  title: string;
  children: ReactNode;
}

const LayerSection = ({ title, children }: LayerSectionProps) => {
  return (
    <div className="my-8 p-6 bg-secondary/50 rounded-xl">
      <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default LayerSection;

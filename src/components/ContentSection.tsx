import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
}

const ContentSection = ({ title, children }: ContentSectionProps) => {
  return (
    <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{title}</h2>
      {children}
    </div>
  );
};

export default ContentSection;

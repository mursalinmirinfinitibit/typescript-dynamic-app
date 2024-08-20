// SectionContainer.tsx
import React from "react";

interface SectionContainerProps {
  title: string;
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ title, children }) => (
  <div className="border p-4 shadow">
    <h3 className="text-lg font-medium border-b pb-2">{title}</h3>
    <div className="mt-2">{children}</div>
  </div>
);

export default SectionContainer;
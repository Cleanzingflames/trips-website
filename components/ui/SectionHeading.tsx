import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`section-head ${center ? "section-head-center" : ""} ${className}`.trim()}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h2-title">{title}</h2>
      {description ? <p className="lead">{description}</p> : null}
    </div>
  );
}
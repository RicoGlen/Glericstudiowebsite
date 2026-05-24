interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
  titleMaxWidth?: string;
}

export function SectionHeading({ eyebrow, title, lead, className = "", titleMaxWidth }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-20 ${className}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className="section-title"
        style={titleMaxWidth ? { maxWidth: titleMaxWidth } : undefined}
      >
        {title}
      </h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}

interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
}

const Label: React.FC<LabelProps> = (proos: LabelProps) => {
  const { children, htmlFor, className = "text-white font-semibold" } = proos;
  return <label htmlFor={htmlFor} className={className}>{children}</label>;
}

export default Label;
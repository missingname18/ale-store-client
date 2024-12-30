interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, children,disabled = false 
    ,className = "bg-secondary text-slate-100 p-2 rounded-md border-none font-semibold"
  } = props;
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
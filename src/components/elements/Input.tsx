interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  id?: string;
  className?: string;
  type?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    type, value, onChange, placeholder, id, 
    className = "border-none outline-secondary p-2 rounded-md font-normal", 
  } = props;
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      id={id}
    />
  );
}

export default Input;
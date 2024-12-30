import Input from "../elements/Input";
import Button from "../elements/Button";
import Label from "../elements/Label";

interface FormProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;  
  className?: string;
}

const FormLogin: React.FC<FormProps> = (props) => {
  const { 
    onSubmit, 
    onChange,
    className = "flex flex-col gap-2 p-2 rounded-md bg-primary w-full",
  } = props;
  
  return (
    <form onSubmit={onSubmit} className={className}>
      <Label htmlFor="email">Email</Label>
      <Input type="email" placeholder="input your email" onChange={onChange}/>
      <Label htmlFor="password">Password</Label>
      <Input type="password" placeholder="Password" onChange={onChange}/>
      <Button>Login</Button>
    </form>
  );
}

export default FormLogin;
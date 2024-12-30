import FormLogin from "../fragments/FormLogin";

function SectionLogin() {
  return (
      <div className="p-2 bg-primary rounded-md flex flex-col gap-4 items-center w-4/5">
        <h1 className="text-lg font-bold text-white">Admin Login</h1>
        <FormLogin/>
      </div>
  );
}

export default SectionLogin;
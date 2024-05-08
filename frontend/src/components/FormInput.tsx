type FormInputProps = {
  nip: string;
  setNip: React.Dispatch<React.SetStateAction<string>>;
};

function FormInput({ nip, setNip }: FormInputProps) {
  return <input value={nip} onChange={(e) => setNip(e.target.value)} />;
}

export default FormInput;

// import { UseFormRegisterReturn } from "react-hook-form";
// import { ErrorMessage } from "./ErrorMessage";

interface Props {
  label: string;
  type: string;
  id: string;
  placeholder?: string;
  errorMessage?: string;
  // register?: UseFormRegisterReturn<string>;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>
}

export function Input({ label, type, id, placeholder, handleChange }: Props) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border border-gray-200 p-3 rounded"
        // {...register}
        onChange={handleChange} />
      {/* {errorMessage && <ErrorMessage message={errorMessage} />} */}
    </div>
  )
}

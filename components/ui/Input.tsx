"use client";

type InputProps = {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  password?: boolean;
};

function Input({ placeholder, value, setValue, password }: InputProps) {
  return (
    <input
      type={password ? "password" : "text"}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="rounded-lg border-zinc-800 border-2 px-4 py-2 text-zinc-300 outline-none"
    />
  );
}

export default Input;

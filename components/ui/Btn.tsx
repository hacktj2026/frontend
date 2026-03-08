"use client";

import Link from "next/link";

type BtnProps = {
  text: string;
  link?: string;
  onclick?: () => void;
  primary?: boolean;
  fit?: boolean;
  submit?: boolean;
};

function Btn({ text, link, onclick, primary, fit, submit }: BtnProps) {
  const btnStyles = `${
    primary
      ? "bg-zinc-200 hover:bg-zinc-300 border-zinc-200 hover:border-zinc-300 text-zinc-900"
      : "bg-zinc-950 hover:bg-zinc-900 text-zinc-300 border-zinc-800"
  } border-2 rounded-lg py-2.5 px-4 cursor-pointer font-bold ${fit ? "w-fit" : ""}`;

  return link ? (
    <Link href={link} className={btnStyles}>
      {text}
    </Link>
  ) : (
    <button
      type={submit ? "submit" : "button"}
      className={btnStyles}
      onClick={onclick}
    >
      {text}
    </button>
  );
}

export default Btn;

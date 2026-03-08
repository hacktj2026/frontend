import Link from "next/link";
import Image from "next/image";

type QuizCardProps = {
  name: string;
  description: string;
  src: string;
  link: string;
};

function QuizCard({ name, description, src, link }: QuizCardProps) {
  return (
    <Link
      href={link}
      className="w-70 rounded-lg border-2 border-zinc-800 p-5 flex flex-col items-center gap-y-5 hover:bg-zinc-900"
    >
      <Image
        src={src}
        alt="Quiz Card"
        width={200}
        height={130}
        className="w-full rounded-lg"
      />
      <h2 className="text-white font-bold text-xl">{name}</h2>
      <p className="text-zinc-300 text-sm">{description}</p>
    </Link>
  );
}

export default QuizCard;

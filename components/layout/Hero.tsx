import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Btn from "../ui/Btn";
import AnimateBtn from "./AnimateBtn";

type HeroProps = {
  title: string;
  description?: string;
  home?: boolean;
};

async function Hero({ title, description, home }: HeroProps) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="flex flex-col gap-y-10 items-center py-15 w-[80%] text-center">
      <h1 className="bg-linear-to-br from-zinc-200 to-slate-400 bg-clip-text text-transparent text-4xl font-bold">
        {title}
      </h1>
      {description && <p className="text-zinc-300">{description}</p>}
      {home && (
        <div className="flex gap-x-5">
          <AnimateBtn>
            <Btn
              text="Get started"
              link={session ? "/quizzes" : "/signin"}
              primary
            />
          </AnimateBtn>
          <AnimateBtn>
            <Btn text="Learn more" link="/about" />
          </AnimateBtn>
        </div>
      )}
    </div>
  );
}

export default Hero;

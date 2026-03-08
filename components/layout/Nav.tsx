import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Btn from "../ui/Btn";
import NavUser from "./NavUser";
import AnimateBtn from "./AnimateBtn";
import Image from "next/image";
import Link from "next/link";

const navLinkStyles =
  "rounded-lg hover:bg-zinc-900 text-zinc-300 py-2 px-4 font-bold";

async function Nav() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="border-b-2 border-zinc-800 sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80">
      <div className="flex relative justify-center py-2.5 items-center w-full max-w-400 m-auto">
        <Link
          href="/"
          className="flex items-center gap-x-3 absolute left-3 sm:left-10 md:left-25 lg:left-50 text-white text-lg font-bold"
        >
          <Image src="/favicon.png" alt="Logo" width={40} height={40} />
          <span className="hidden md:block">LinguaLift</span>
        </Link>
        <div className="flex gap-x-3">
          <Link href="/quizzes" className={navLinkStyles}>
            Quizzes
          </Link>
          <Link href="/flashcards" className={navLinkStyles}>
            Flashcards
          </Link>
          <Link href="/about" className={navLinkStyles}>
            About
          </Link>
        </div>
        <div className="flex items-center gap-x-5 absolute right-3 sm:right-10 md:right-25 lg:right-50">
          {session ? (
            <NavUser user={session.user} />
          ) : (
            <AnimateBtn>
              <Btn text="Sign in" link="/signin" primary />
            </AnimateBtn>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;

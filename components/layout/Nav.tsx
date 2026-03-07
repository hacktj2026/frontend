import { FaGlobe } from "react-icons/fa";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Btn from "../ui/Btn";
import NavUser from "./NavUser";
import Link from "next/link";

const navLinkStyles =
  "rounded-lg hover:bg-zinc-900 text-zinc-300 py-2 px-4 font-bold";

async function Nav() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="flex relative justify-center border-b-2 border-zinc-800 py-2.5 items-center">
      <Link
        href="/"
        className="flex items-center gap-x-3 absolute left-50 text-white text-lg font-bold"
      >
        <FaGlobe size={30} />
        Language App
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
      <div className="flex items-center gap-x-5 absolute right-50">
        {session ? (
          <NavUser user={session.user} />
        ) : (
          <Btn text="Sign in" link="/signin" primary />
        )}
      </div>
    </div>
  );
}

export default Nav;

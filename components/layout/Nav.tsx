import { FaGlobe } from "react-icons/fa";
import Link from "next/link";
import SignInBtn from "./SignInBtn";

const navLinkStyles =
  "rounded-lg hover:bg-zinc-900 text-zinc-300 py-2 px-4 font-bold";

function Nav() {
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
        <SignInBtn />
      </div>
    </div>
  );
}

export default Nav;

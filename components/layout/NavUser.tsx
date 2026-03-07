import type { User } from "better-auth";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function NavUser({ user }: { user: User }) {
  return (
    <Link
      href="/profile"
      className="rounded-lg hover:bg-zinc-900 px-3 py-2 flex items-center gap-x-3 text-zinc-300 font-bold"
    >
      {user.image ? (
        <Image
          src={user.image}
          alt="Avatar"
          width={30}
          height={30}
          className="rounded-full border-2 border-zinc-800"
        />
      ) : (
        <FaUserCircle
          size={30}
          className="rounded-full border-2 border-zinc-800"
        />
      )}
      {user.name}
    </Link>
  );
}

export default NavUser;

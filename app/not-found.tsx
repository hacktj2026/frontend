import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Language App",
  description: "This page doesn't exist...",
};

function NotFound() {
  return (
    <div className="flex flex-col items-center py-20 gap-y-5 text-center">
      <h1 className="bg-linear-to-br from-zinc-200 to-slate-400 bg-clip-text text-transparent text-9xl text-center font-extrabold my-20">
        404
      </h1>
      <div className="text-zinc-300">This page doesn&apos;t exist...</div>
      <div className="text-zinc-300">
        Go back{" "}
        <Link href="/" className="underline">
          home
        </Link>{" "}
        or open a{" "}
        <a
          href="https://github.com/hacktj2026/frontend/issues"
          className="underline"
          target="_blank"
        >
          GitHub issue
        </a>
      </div>
    </div>
  );
}

export default NotFound;

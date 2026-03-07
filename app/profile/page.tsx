import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { updateName } from "./actions";
import SignOutBtn from "./SignOutBtn";
import EditName from "./EditName";
import Hero from "@/components/layout/Hero";
import Image from "next/image";

const sectionStyles =
  "flex flex-col items-center border-2 border-zinc-800 rounded-lg p-10 gap-10 max-w-300 w-[90%] md:w-[70%]";
const sectionHeadingStyles =
  "text-white text-2xl font-bold flex items-center gap-x-5 text-center";

export const metadata: Metadata = {
  title: "My Profile | Language App",
  description: "View your profile and manage your account settings.",
};

async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) redirect("/signin");

  return (
    <div className="flex flex-col items-center w-full max-w-400 m-auto pb-10">
      <Hero
        title="My Profile"
        description="Check out your learner profile here with your level, flashcards, and quizzes' data"
      />
      <div className="flex flex-col w-full gap-y-5 items-center">
        <div className={sectionStyles + " sm:flex-row"}>
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt="Avatar"
              width={200}
              height={200}
              className="rounded-full border-2 border-zinc-800"
            />
          ) : (
            <FaUserCircle size={200} className="text-zinc-300" />
          )}
          <div className="flex flex-col gap-y-2 text-zinc-300 items-start justify-center">
            <EditName updateName={updateName} />
            <div className="mb-3 text-white text-lg font-bold">Level: 0</div>
            <p className="">
              Email:{" "}
              <a
                href={"mailto:" + session.user.email}
                className="hover:underline"
              >
                {session.user.email}
              </a>
            </p>
            <p className="mb-3">
              Joined {session.user.createdAt.toLocaleDateString()}
            </p>
            <SignOutBtn />
          </div>
        </div>
        <div className={sectionStyles}>
          <h2 className={sectionHeadingStyles}>My Quizzes</h2>
          <p className="text-zinc-300">Quizzes coming soon</p>
        </div>
        <div className={sectionStyles}>
          <h2 className={sectionHeadingStyles}>My Flashcards</h2>
          <p className="text-zinc-300">Flashcards coming soon</p>
        </div>
      </div>
    </div>
  );
}

export default Page;

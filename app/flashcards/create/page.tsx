import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createFlashcards } from "./actions";
import Hero from "@/components/layout/Hero";
import Flashcards from "./Flashcards";

export const metadata: Metadata = {
  title: "Make Flashcards | LinguaLift",
  description:
    "Create your own custom flashcards with words and their definitions to improve your vocabulary and skills!",
};

async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) redirect("/signin");

  return (
    <div className="flex flex-col items-center w-full max-w-400 m-auto pb-10">
      <Hero
        title="Make Flashcards"
        description="Create your own custom interactive flashcards of words and definitions!"
      />
      <Flashcards createFlashcards={createFlashcards} />
    </div>
  );
}

export default Page;

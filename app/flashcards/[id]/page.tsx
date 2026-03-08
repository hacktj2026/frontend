import type { FlashcardsType } from "@/types/Flashcards";
import { dbConnect } from "@/lib/db";
import { Flashcard } from "@/models/Flashcard";
import { redirect } from "next/navigation";
import Flashcards from "./Flashcards";
import Hero from "@/components/layout/Hero";

async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  await dbConnect();
  const existingFlashcards = await Flashcard.findOne({
    id: id,
  });
  if (!existingFlashcards) redirect("/flashcards");
  const flashcards: FlashcardsType = JSON.parse(
    JSON.stringify(existingFlashcards),
  );

  return (
    <div className="flex flex-col items-center w-full max-w-400 m-auto pb-10">
      <Hero title={flashcards.title} description={flashcards.description} />
      <Flashcards flashcards={flashcards.flashcards} />
    </div>
  );
}

export default Page;

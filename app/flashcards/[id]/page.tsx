import type { FlashcardsType } from "@/types/Flashcards";
import { dbConnect } from "@/lib/db";
import { Flashcard } from "@/models/Flashcard";
import { redirect } from "next/navigation";
import Flashcards from "./Flashcards";
import Hero from "@/components/layout/Hero";

async function fetchFlashcards(id: string): Promise<FlashcardsType> {
  await dbConnect();
  const existingFlashcards = await Flashcard.findOne({
    id: id,
  });
  if (!existingFlashcards) redirect("/flashcards");
  return JSON.parse(JSON.stringify(existingFlashcards)) as FlashcardsType;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const flashcards = await fetchFlashcards(id);

  return {
    title: flashcards.title + " | Flashcards | LinguaLift",
    description:
      flashcards.description +
      " Try out this custom made flashcard set to improve your vocabulary and skills!",
  };
}

async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const flashcards = await fetchFlashcards(id);

  return (
    <div className="flex flex-col items-center w-full max-w-400 m-auto pb-10">
      <Hero title={flashcards.title} description={flashcards.description} />
      <Flashcards flashcards={flashcards.flashcards} email={flashcards.email} />
    </div>
  );
}

export default Page;

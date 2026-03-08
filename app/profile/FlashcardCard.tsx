import { dbConnect } from "@/lib/db";
import { Flashcard } from "@/models/Flashcard";
import Link from "next/link";

async function FlashcardCard({ id }: { id: string }) {
  await dbConnect();
  const existingFlashcardSet = await Flashcard.findOne({ id: id });

  return (
    <Link
      href={"/flashcards/" + id}
      className="border-2 border-zinc-800 rounded-lg p-5 flex flex-col items-center gap-y-3 hover:bg-zinc-900 w-50 text-center"
    >
      <h2 className="text-lg text-white font-bold">
        {existingFlashcardSet.title}
      </h2>
      <p className="text-zinc-300 text-sm">
        {existingFlashcardSet.description}
      </p>
    </Link>
  );
}

export default FlashcardCard;

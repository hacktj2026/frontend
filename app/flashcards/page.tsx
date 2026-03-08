import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";
import QuizCard from "@/components/ui/QuizCard";

export const metadata: Metadata = {
  title: "Flashcards | LinguaLift",
  description: "Create your own custom interactive flashcards!",
};

function Page() {
  return (
    <div className="flex flex-col items-center w-full max-w-400 m-auto pb-10">
      <Hero
        title="Flashcards"
        description="Make custom flashcard sets to strengthen and improve your Spanish vocabulary and skills!"
      />
      <QuizCard
        name="Make Flashcards"
        description="Create your own custom interactive flashcards of words and definitions!"
        src="/flashcards.jpg"
        link="/flashcards/create"
      />
    </div>
  );
}

export default Page;

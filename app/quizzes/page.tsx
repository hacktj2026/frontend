import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";
import QuizCard from "@/components/ui/QuizCard";

export const metadata: Metadata = {
  title: "Quizzes | LinguaLift",
  description: "Check out and take these custom generated quizzes!",
};

function Page() {
  return (
    <div className="flex flex-col items-center w-full max-w-400 m-auto pb-10">
      <Hero
        title="Quizzes"
        description="Take all kinds of different dynamic interactive quizzes to improve your Spanish skills!"
      />
      <div className="flex flex-wrap justify-center gap-10">
        <QuizCard
          name="Mixed Practice"
          description="Take an interactive quiz with randomly and dynamically generated multiple choice and free response questions!"
          src="/mixed.jpg"
          link="/mixed"
        />
        <QuizCard
          name="Multiple Choice Quiz"
          description="Take an interactive quiz with an infinite number of possible dynamically generated 4-option multiple choice questions!"
          src="/mcq.jpg"
          link="/mcq"
        />
        <QuizCard
          name="Free Response Quiz"
          description="Take an interactive quiz with an infinite number of possible dynamically generated free response questions!"
          src="/frq.jpg"
          link="/frq"
        />
      </div>
    </div>
  );
}

export default Page;

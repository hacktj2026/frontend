import Hero from "@/components/layout/Hero";
import QuizCard from "@/components/ui/QuizCard";

export default async function Home() {
  return (
    <div className="flex flex-col items-center w-full max-w-400 m-auto gap-y-10 pb-10">
      <Hero
        title="Welcome to LinguaLift"
        description="Use LinguaLift to take custom adaptive quizzes and create flashcards to improve your Spanish skills!"
        home
      />
      <div className="flex flex-col gap-y-5">
        <h2 className="text-white text-2xl font-bold text-center">
          Try out these quizzes
        </h2>
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
      <div className="flex flex-col gap-y-5">
        <h2 className="text-white text-2xl font-bold text-center">
          Create custom flashcards
        </h2>
        <div className="flex justify-center">
          <QuizCard
            name="Make Flashcards"
            description="Create your own custom interactive flashcards of words and definitions!"
            src="/flashcards.jpg"
            link="/flashcards/create"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <h2 className="text-white text-2xl font-bold text-center">
          View your profile and learn more about LinguaLift
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          <QuizCard
            name="My Profile"
            description="Check out your learner profile here with your level, flashcards, and quizzes' data"
            src="/profile.jpg"
            link="/profile"
          />
          <QuizCard
            name="About LinguaLift"
            description="Browse more information and learn some tips and tricks about using LinguaLift!"
            src="/about.jpg"
            link="/about"
          />
        </div>
      </div>
    </div>
  );
}

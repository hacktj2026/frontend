import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";

const paragraphStyles =
  "text-zinc-300 w-[95%] md:w-[75%] lg:w-[50%] m-auto leading-7";

export const metadata: Metadata = {
  title: "About | LinguaLift",
  description: "Check out and learn more information about LinguaLift!",
};

function Page() {
  return (
    <div className="flex flex-col items-center w-full max-w-400 m-auto pb-10">
      <Hero
        title="About"
        description="Browse more information and tips about using LinguaLift!"
      />
      <div className="flex flex-col gap-y-5 mb-10">
        <h2 className="text-white text-2xl font-bold text-center">
          What is LinguaLift?
        </h2>
        <div className={paragraphStyles}>
          LinguaLift is an adaptive language-learning engine designed to
          eliminate the plateau effect by dynamically scaling with your
          progress. At the core of the platform is a proprietary Skill Point
          system that monitors your performance in real-time; as you rack up
          points, the backend automatically ratchets up the complexity of the
          content. This ensures that every learner remains in a state of optimal
          challenge, transitioning seamlessly from foundational concepts to
          advanced linguistic mastery without manual intervention.
        </div>
      </div>
      <div className="flex flex-col gap-y-5 mb-10">
        <h2 className="text-white text-2xl font-bold text-center">
          Skill-based computer adaptive question generation algorithm
        </h2>
        <div className={paragraphStyles}>
          The platform offers three distinct training modules to ensure
          comprehensive retention: MCQ for rapid recognition, FRQ for active
          recall and production, and a Mixed mode for the ultimate challenge.
          Powered by a robust Spring Boot backend, LinguaLift provides an
          infinite stream of questions, meaning your practice sessions never hit
          a wall. Whether you&apos;re drill-testing new vocabulary or refining
          your syntax, the system generates endless opportunities to apply what
          you&apos;ve learned across varying levels of difficulty.
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <h2 className="text-white text-2xl font-bold text-center">
          Powerful, customizable, and easily created flashcards
        </h2>
        <div className={paragraphStyles}>
          Beyond the core curriculum, LinguaLift empowers users with a custom
          Flashcard suite, allowing for the creation of personalized decks
          complete with specialized words and definitions. Your profile serves
          as a centralized hub where you can track your total Skill Points,
          monitor your growth trajectory, and manage your handcrafted study
          materials. By combining high-stakes testing with custom user-generated
          content, LinguaLift bridges the gap between structured courses and
          personal learning goals.
        </div>
      </div>
    </div>
  );
}

export default Page;

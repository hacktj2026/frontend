import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";
import Quiz from "./Quiz";

export const metadata: Metadata = {
  title: "Free Response Quiz | LinguaLift",
  description:
    "Interactive quiz with dynamically generated free response questions!",
};

function Page() {
  return (
    <div className="flex flex-col items-center w-full max-w-400 m-auto pb-10">
      <Hero
        title="Free Response Quiz"
        description="Interactive quiz with dynamically generated free response questions!"
      />
      <Quiz />
    </div>
  );
}

export default Page;

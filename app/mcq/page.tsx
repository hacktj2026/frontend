import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";
import Quiz from "./Quiz";

export const metadata: Metadata = {
  title: "Multiple Choice Quiz | LinguaLift",
  description:
    "Interactive quiz with dynamically generated 4-option multiple choice questions!",
};

function Page() {
  return (
    <div className="flex flex-col items-center w-full max-w-400 m-auto pb-10">
      <Hero
        title="Multiple Choice Quiz"
        description="Interactive quiz with dynamically generated 4-option multiple choice questions!"
      />
      <Quiz />
    </div>
  );
}

export default Page;

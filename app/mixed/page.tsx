import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";

export const metadata: Metadata = {
  title: "Mixed Quiz | LinguaLift",
  description:
    "Strengthen your Spanish skills more with this quiz mixed with both multiple choice and free response questions!",
};

function Page() {
  return (
    <div className="flex flex-col items-center w-full max-w-400 m-auto pb-10">
      <Hero
        title="Mixed Quiz"
        description="Strengthen your Spanish skills more with this quiz mixed with both multiple choice and free response questions!"
      />
    </div>
  );
}

export default Page;

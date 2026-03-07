import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";

export const metadata: Metadata = {
  title: "Quizzes | Language App",
  description: "Check out and take these custom generated quizzes!",
};

function Page() {
  return (
    <div className="flex flex-col items-center w-full max-w-400 m-auto gap-y-10 pb-10">
      <Hero title="Quizzes" description="Quizzes coming soon!" />
    </div>
  );
}

export default Page;

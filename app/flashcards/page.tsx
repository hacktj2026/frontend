import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";

export const metadata: Metadata = {
  title: "Flashcards | Language App",
  description: "Create your own custom interactive flashcards!",
};

function Page() {
  return (
    <div className="flex flex-col items-center w-full max-w-400 m-auto gap-y-10 pb-10">
      <Hero title="Flashcards" description="Flashcards coming soon!" />
    </div>
  );
}

export default Page;

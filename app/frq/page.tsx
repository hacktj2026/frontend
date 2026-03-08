import Hero from "@/components/layout/Hero";
import Quiz from "./Quiz";

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

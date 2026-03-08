import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";

export const metadata: Metadata = {
  title: "About | LinguaLift",
  description: "Check out and learn more information about LinguaLift!",
};

function Page() {
  return (
    <div className="flex flex-col items-center w-full max-w-400 m-auto gap-y-10 pb-10">
      <Hero
        title="About"
        description="Browse more information and tips about using LinguaLift!"
      />
    </div>
  );
}

export default Page;

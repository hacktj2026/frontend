import type { Metadata } from "next";
import Hero from "@/components/layout/Hero";

export const metadata: Metadata = {
  title: "About | Language App",
  description: "Check out and learn more information about Language App!",
};

function Page() {
  return (
    <div className="flex flex-col items-center w-full max-w-400 m-auto gap-y-10 pb-10">
      <Hero title="About" description="About page coming soon!" />
    </div>
  );
}

export default Page;

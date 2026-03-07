import Hero from "@/components/layout/Hero";

export default async function Home() {
  return (
    <div className="flex flex-col items-center w-300 m-auto gap-y-10 pb-10">
      <Hero
        title="Welcome to the Language App"
        description="Lorem ipsum dolor sit amet"
        home
      />
    </div>
  );
}

import Btn from "../ui/Btn";

function Hero() {
  return (
    <div className="flex flex-col gap-y-10 items-center py-15">
      <h1 className="bg-linear-to-br from-zinc-200 to-slate-400 bg-clip-text text-transparent text-5xl font-bold h-full">
        Welcome to Language App!
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
        fugiat, doloribus, nisi rerum quis quod expedita adipisci quibusdam
        soluta necessitatibus reprehenderit vero hic. Reprehenderit, sint.
      </p>
      <div>
        <Btn text="Get started" link="/signin" primary />
        <Btn text="Learn more" link="/signin" />
      </div>
    </div>
  );
}

export default Hero;

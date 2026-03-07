function Footer() {
  return (
    <div className="py-10 text-center text-zinc-400 text-sm flex flex-col items-center gap-y-5 border-t-2 border-zinc-800">
      <div className="flex gap-x-10">
        <span>&copy; {new Date().getFullYear()} Language App</span>
        <span>All rights reserved</span>
      </div>
      <div className="flex gap-x-10">
        <a href="https://hacktj.org" target="_blank" className="underline">
          HackTJ 2026
        </a>
        <a
          href="https://github.com/hacktj2026/frontend"
          target="_blank"
          className="underline"
        >
          Frontend
        </a>
        <a
          href="https://github.com/hacktj2026/backend2"
          target="_blank"
          className="underline"
        >
          Backend
        </a>
      </div>
    </div>
  );
}

export default Footer;

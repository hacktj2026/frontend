"use client";

import { authClient } from "@/lib/auth-client";

function Provider({ provider }: { provider: string }) {
  async function signIn() {
    await authClient.signIn.social({
      provider: provider.toLowerCase(),
      callbackURL: "/",
    });
  }

  return (
    <div
      className="rounded-lg border-zinc-800 border-2 text-center font-bold text-zinc-300 py-2 cursor-pointer hover:bg-zinc-900"
      onClick={signIn}
    >
      Sign in with {provider}
    </div>
  );
}

export default Provider;

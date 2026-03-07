"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

function Provider({ provider }: { provider: string }) {
  const [loading, setLoading] = useState<boolean>(false);

  async function signIn() {
    setLoading(true);
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
      {loading ? "Loading..." : `Sign in with ${provider}`}
    </div>
  );
}

export default Provider;

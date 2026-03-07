"use client";

import { authClient } from "@/lib/auth-client";
import Btn from "@/components/ui/Btn";

function SignOutBtn() {
  async function handleSignOut() {
    await authClient.signOut();
    window.location.reload();
  }

  return <Btn text="Sign out" onclick={handleSignOut} />;
}

export default SignOutBtn;

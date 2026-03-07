import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import SignOutBtn from "./SignOutBtn";

export const metadata: Metadata = {
  title: "Profile | Language App",
  description: "View your profile and manage your account settings.",
};

async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) redirect("/signin");

  return <SignOutBtn />;
}

export default Page;

import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Hero from "@/components/layout/Hero";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Sign In | Language App",
  description: "Sign in to your account to access your flashcards and quizzes.",
};

async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) redirect("/profile");

  return (
    <div className="flex flex-col items-center w-full max-w-400 m-auto mb-10">
      <Hero title="Sign in to Language App" />
      <Form />
    </div>
  );
}

export default Page;

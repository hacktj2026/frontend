import type { Metadata } from "next";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
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
    <div>
      <Form />
    </div>
  );
}

export default Page;

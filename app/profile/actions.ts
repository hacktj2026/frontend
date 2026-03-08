"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { dbConnect } from "@/lib/db";
import { User } from "@/models/User";

export async function updateName(email: string, name: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (session?.user.email !== email) throw new Error("Email doesn't match");
    await dbConnect();
    await User.findOneAndUpdate(
      { email: email },
      { name: name },
      { returnDocument: "after" },
    );
  } catch (err) {
    console.error("Error: " + err);
  }
}

export async function handleDelete() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    await dbConnect();
    await User.findOneAndDelete({ email: session?.user.email });
  } catch (err) {
    console.error("Error: " + err);
  }
}

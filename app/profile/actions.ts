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
    console.log(email, name);
    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      { name: name },
      { returnDocument: "after" },
    );
    console.log(updatedUser);
  } catch (err) {
    console.error("Error: " + err);
  }
}

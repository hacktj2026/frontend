"use server";

import type { FlashcardsType } from "@/types/Flashcards";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { dbConnect } from "@/lib/db";
import { Flashcard } from "@/models/Flashcard";
import { User } from "@/models/User";

export async function createFlashcards(flashcards: FlashcardsType) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    console.log(flashcards);
    if (session?.user.email !== flashcards.email)
      throw new Error("Email doesn't match");
    await dbConnect();
    await Flashcard.create(flashcards);
    const existingUser = await User.findOne({ email: session.user.email });
    const existingFlashcards = existingUser.flashcards;
    console.log(existingFlashcards);
    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      { flashcards: [...existingFlashcards, flashcards.id] },
      { new: true },
    );
    console.log(updatedUser);
  } catch (err) {
    console.error("Error: " + err);
  }
}

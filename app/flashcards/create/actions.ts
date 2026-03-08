"use server";

import type { FlashcardsType } from "@/types/Flashcards";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {dbConnect} from "@/lib/db"
import { Flashcard } from "@/models/Flashcard";

export async function createFlashcards(flashcards:FlashcardsType) {
try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    console.log(flashcards)
    if (session?.user.email !== flashcards.email) throw new Error("Email doesn't match");
    await dbConnect();
    const newFlashcards = await Flashcard.create(flashcards);
    console.log(newFlashcards)

} catch (err) {
    console.error("Error: "+err);
}
}
import { Schema, model, models } from "mongoose";

const FlashcardSchema = new Schema({
  word: { type: String, required: true },
  definition: { type: String, required: true },
});

const FlashcardsSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  flashcards: [FlashcardSchema],
  email: { type: String, required: true },
});

export const Flashcard =
  models.Flashcard || model("Flashcard", FlashcardsSchema);

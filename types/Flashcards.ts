export interface FlashcardsType {
  id: string;
  title: string;
  description: string;
  flashcards: FlashcardType[];
  email: string;
}

export interface FlashcardType {
  word: string;
  definition: string;
}

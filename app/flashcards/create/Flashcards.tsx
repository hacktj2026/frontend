"use client";

import type { FlashcardsType } from "@/types/Flashcards";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import Input from "@/components/ui/Input";
import Btn from "@/components/ui/Btn";

function Flashcards({
  createFlashcards,
}: {
  createFlashcards: (flashcards: FlashcardsType) => Promise<void>;
}) {
  const { data: session } = authClient.useSession();
  const [flashcards, setFlashcards] = useState<FlashcardsType>({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    flashcards: [
      {
        word: "",
        definition: "",
      },
    ],
    email: session?.user.email || "",
  });

  useEffect(() => {
    setFlashcards((prev) => {
      return { ...prev, email: session?.user.email || "" };
    });
  }, [session]);

  function handleDelete(index: number) {
    setFlashcards({
      ...flashcards,
      flashcards: flashcards.flashcards.filter((flashcard, i) => index !== i),
    });
  }

  async function handleSubmit() {
    await createFlashcards(flashcards);
    redirect("/flashcards/" + flashcards.id);
  }

  return (
    <div className="flex flex-col gap-y-10 items-center w-[90%] sm:w-[80%] md:w-[50%] max-w-400 m-auto pb-10">
      <div className="flex flex-col gap-y-3 w-full">
        <Input
          placeholder="Flashcard set title"
          value={flashcards.title}
          setValue={(value) => setFlashcards({ ...flashcards, title: value })}
        />
        <Input
          placeholder="Flashcard set description"
          value={flashcards.description}
          setValue={(value) =>
            setFlashcards({ ...flashcards, description: value })
          }
        />
      </div>
      <div className="w-full flex flex-col gap-y-3">
        {flashcards.flashcards.map((flashcard, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-3 rounded-lg border-zinc-800 border-2 p-5 relative"
          >
            <h2 className="text-white text-lg font-bold mb-2">
              Flashcard #{index + 1}
            </h2>
            <Input
              placeholder="Enter word here"
              value={flashcard.word}
              setValue={(value) => {
                const newFlashcards = [...flashcards.flashcards];
                newFlashcards[index] = { ...newFlashcards[index], word: value };
                setFlashcards({
                  ...flashcards,
                  flashcards: newFlashcards,
                });
              }}
            />
            <Input
              placeholder="Enter definition here"
              value={flashcard.definition}
              setValue={(value) => {
                const newFlashcards = [...flashcards.flashcards];
                newFlashcards[index] = {
                  ...newFlashcards[index],
                  definition: value,
                };
                setFlashcards({
                  ...flashcards,
                  flashcards: newFlashcards,
                });
              }}
            />
            {flashcards.flashcards.length > 1 && (
              <motion.div
                whileHover={{ y: -1, scale: 1.2 }}
                className="text-red-600 absolute top-5 right-5 cursor-pointer"
                onClick={() => handleDelete(index)}
              >
                <FaTrash size={20} title="Delete flashcard" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-x-5">
        <Btn
          text="Add flashcard"
          onclick={() =>
            setFlashcards({
              ...flashcards,
              flashcards: [
                ...flashcards.flashcards,
                { word: "", definition: "" },
              ],
            })
          }
        />
        <Btn text="Submit set" onclick={handleSubmit} primary />
      </div>
    </div>
  );
}

export default Flashcards;

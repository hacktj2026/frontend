"use client";

import type { FlashcardType } from "@/types/Flashcards";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Btn from "@/components/ui/Btn";

type FlashcardsProps = {
  flashcards: FlashcardType[];
  email: string;
};

function Flashcards({ flashcards, email }: FlashcardsProps) {
  const [index, setIndex] = useState<number>(-1);
  const [revealed, setRevealed] = useState<boolean>(false);
  const [forward, setForward] = useState<boolean>(true);

  useEffect(() => {
    setRevealed(false);
  }, [index]);

  function handleBack() {
    setForward(false);
    setIndex(index - 1);
  }

  function handleNext() {
    setForward(true);
    setIndex(index + 1);
  }

  return (
    <div className="flex flex-col items-center gap-y-5">
      {index > -1 ? (
        <>
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={index}
              initial={{ left: forward ? 250 : -250, opacity: 0 }}
              animate={{ left: 0, opacity: 1 }}
              exit={{ left: forward ? -250 : 250, opacity: 0 }}
              className={`border-zinc-800 border-2 rounded-lg w-100 h-65 flex items-center cursor-pointer bg-zinc-950 hover:bg-zinc-900 justify-center relative transition-transform! ${revealed ? "rotate-x-180 rotate-180 -scale-x-100" : ""}`}
              onClick={() => setRevealed(!revealed)}
            >
              <div className="absolute top-10 text-zinc-300">
                {revealed ? "Definition" : "Word"}
              </div>
              <h2 className="text-white font-bold text-3xl">
                {revealed
                  ? flashcards[index].definition
                  : flashcards[index].word}
              </h2>
            </motion.div>
          </AnimatePresence>
          <div className="text-zinc-300">
            {index + 1}/{flashcards.length}
          </div>
          <div className="flex gap-x-5">
            {index !== 0 && <Btn text="Back" onclick={handleBack} />}
            {index === flashcards.length - 1 ? (
              <Btn text="Finish" link="/flashcards" primary />
            ) : (
              <Btn text="Next" onclick={handleNext} primary />
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-y-10 items-center">
          <div className="text-zinc-300">Created by: {email}</div>
          <Btn text="Start" onclick={() => setIndex(0)} primary />
        </div>
      )}
    </div>
  );
}

export default Flashcards;

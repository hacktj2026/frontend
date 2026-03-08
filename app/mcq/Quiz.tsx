"use client";

import { useState, useEffect } from "react";
import Btn from "@/components/ui/Btn";

const options = [
  { text: "option 1" },
  { text: "option 2", correct: true },
  { text: "option 3" },
  { text: "option 4" },
];

function Quiz() {
  const [answered, setAnswered] = useState<boolean>(false);
  const [correct, setCorrect] = useState<boolean>(false);
  const [selected, setSelected] = useState<number | null>(null);

  function handleChoose(index: number) {
    if (!answered) {
      console.log("Chose: " + index);
      setSelected(index);
      //fetch backend api here and stuff
      setAnswered(true);
      setCorrect(options[index].correct || false);
    }
  }

  function handleNextQuestion() {
    console.log("Next question");
    //fetch backend api here and stuff
    setAnswered(false);
  }

  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (Number(e.key) >= 1 && Number(e.key) <= 4) {
        handleChoose(Number(e.key) - 1);
      }
    };
    document.addEventListener("keydown", keyListener);
    return () => {
      document.removeEventListener("keydown", keyListener);
    };
  });

  return (
    <div className="flex flex-col items-center w-[90%] sm:w-[80%] md:w-[50%] max-w-400 m-auto gap-y-10 pb-10">
      <div className="flex flex-col gap-y-10 w-full">
        <div className="flex flex-col gap-y-3">
          <h2 className="font-bold text-white text-lg">Question 1 </h2>
          <h2 className="text-white text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eveniet
            quasi? Laboriosam corporis quod quidem?
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className={`${options[index].correct && answered && "bg-green-900"} ${
                  selected === index && answered && !correct
                    ? " bg-red-900"
                    : ""
                } ${answered ? " " : " hover:bg-zinc-900"} rounded-lg border-2 border-zinc-800 py-4 text-zinc-300 text-lg cursor-pointer min-w-[40%] flex-1 text-center relative`}
                onClick={() => handleChoose(index)}
              >
                {!answered && (
                  <div className="absolute top-2 left-2 rounded-lg text-xs text-zinc-300 border-2 border-zinc-800 flex items-center justify-center w-6 h-6 bg-zinc-900">
                    {index + 1}
                  </div>
                )}
                {option.text}
              </div>
            );
          })}
        </div>
      </div>
      {answered && (
        <Btn text="Next question" onclick={handleNextQuestion} primary />
      )}
    </div>
  );
}

export default Quiz;

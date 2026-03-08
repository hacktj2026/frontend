"use client";

import type { QuizType } from "@/types/Quiz";
import { useState, useEffect } from "react";
import Btn from "@/components/ui/Btn";

function Quiz() {
  const [answered, setAnswered] = useState<boolean>(false);
  const [correct, setCorrect] = useState<boolean>(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [index, setIndex] = useState<number>(0);
  const [quiz, setQuiz] = useState<QuizType | null>(null);

  async function handleChoose(index: number) {
    if (!answered) {
      setSelected(index);
      setAnswered(true);
      const correct = quiz!.choices[index] === quiz!.correctAnswer;
      setCorrect(correct);
      await fetch(
        process.env.NEXT_PUBLIC_API_URL +
          "/api/check-answer?username=test&correct=" +
          correct +
          "&level=" +
          quiz?.level,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        },
      );
    }
  }

  function handleNextQuestion() {
    fetchQuiz();
    setAnswered(false);
    setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 400);
  }

  async function fetchQuiz() {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/mcq/problem?username=test",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      },
    );
    const data: QuizType = await res.json();
    setQuiz(data);
  }

  useEffect(() => {
    fetchQuiz();
  }, []);

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
          <h2 className="font-bold text-white text-lg">
            Question #{index + 1}
          </h2>
          <h2 className="text-white text-lg">
            {quiz ? quiz.question : "Loading question..."}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {quiz?.choices.map((option, index) => {
            return (
              <div
                key={index}
                className={`${option === quiz.correctAnswer && answered && "bg-green-900"} ${
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
                {option}
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

"use client";

import type { QuizType } from "@/types/Quiz";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import Btn from "@/components/ui/Btn";
import Input from "@/components/ui/Input";

function Quiz() {
  const [answered, setAnswered] = useState<boolean>(false);
  const [correct, setCorrect] = useState<boolean>(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [index, setIndex] = useState<number>(0);
  const [response, setResponse] = useState<string>("");
  const [quiz, setQuiz] = useState<QuizType | null>(null);
  const { data: session } = authClient.useSession();

  async function handleChoose(index: number) {
    if (!answered) {
      setSelected(index);
      setAnswered(true);
      const correct = quiz!.choices[index] === quiz!.correctAnswer;
      setCorrect(correct);
      await fetch(
        process.env.NEXT_PUBLIC_API_URL +
          `/api/check-answer?username=${session?.user.email}&correct=` +
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
    setResponse("");
  }

  async function fetchQuiz() {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `/api/problem?username=${session?.user.email}`,
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

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    if (!(answered && correct) && response.trim().length > 0) {
      setAnswered(true);
      const collator = new Intl.Collator(undefined, { sensitivity: "base" });
      const wasCorrect =
        collator.compare(
          response.trim().toLowerCase(),
          quiz!.correctAnswer!,
        ) === 0;
      if (!wasCorrect) setResponse("");
      setCorrect(wasCorrect);
      await fetch(
        process.env.NEXT_PUBLIC_API_URL +
          `/api/check-answer?username=${session?.user.email}&correct=` +
          wasCorrect +
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
        {quiz?.choices && quiz.choices.length! > 0 ? (
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
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1">
              {!answered && (
                <div className="text-zinc-300 text-sm">
                  Case and accent don&apos;t matter, just type the right
                  spelling
                </div>
              )}
              {answered && !correct && (
                <div className="text-red-400 text-sm">
                  That wasn&apos;t quite right. Try another form or spelling?
                </div>
              )}
              {answered && correct && (
                <div className="text-green-400 text-sm">
                  Correct! Move on to more challenging questions next!
                </div>
              )}
              <Input
                placeholder="Type your answer here"
                value={response}
                setValue={setResponse}
                full
              />
            </div>
            <div className="flex gap-x-3">
              <Btn text="Submit" submit fit primary={!correct} />
              {answered && (
                <Btn
                  text={correct ? "Next question" : "Skip"}
                  onclick={handleNextQuestion}
                  primary={correct}
                />
              )}
            </div>
          </form>
        )}
      </div>
      {answered && quiz && quiz.choices.length > 0 && (
        <Btn text="Next question" onclick={handleNextQuestion} primary />
      )}
    </div>
  );
}

export default Quiz;

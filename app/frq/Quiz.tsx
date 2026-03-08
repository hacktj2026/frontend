"use client";

import type { QuizType } from "@/types/Quiz";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import Btn from "@/components/ui/Btn";
import Input from "@/components/ui/Input";

function Quiz() {
  const [answered, setAnswered] = useState<boolean>(false);
  const [correct, setCorrect] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [quiz, setQuiz] = useState<QuizType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { data: session } = authClient.useSession();

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

  function handleNextQuestion() {
    setLoading(true);
    setIndex(index + 1);
    setResponse("");
    setAnswered(false);
  }

  async function fetchQuiz() {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `/api/frq/problem?username=${session?.user.email}`,
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
    setLoading(false);
    console.log(data);
  }

  useEffect(() => {
    fetchQuiz();
  }, [index]);

  return (
    <div className="flex flex-col items-center w-[90%] sm:w-[80%] md:w-[50%] max-w-400 m-auto gap-y-10 pb-10">
      <div className="flex flex-col gap-y-5 w-full">
        <div className="flex flex-col gap-y-3">
          <h2 className="font-bold text-white text-lg">
            Question #{index + 1}
          </h2>
          <h2 className="text-white text-lg">
            {loading ? "Loading question..." : quiz?.question}
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-1">
            {!answered && (
              <div className="text-zinc-300 text-sm">
                Case and accent don&apos;t matter, just type the right spelling
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
      </div>
    </div>
  );
}

export default Quiz;

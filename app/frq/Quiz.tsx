"use client";

import { useState } from "react";
import Btn from "@/components/ui/Btn";
import Input from "@/components/ui/Input";

function Quiz() {
  const [answered, setAnswered] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    if (!answered && response.trim().length > 0) {
      setAnswered(true);
      console.log("submitted: " + response);
      //fetch backend api and stuff here
      setResponse("");
    }
  }

  function handleNextQuestion() {
    console.log("Next question");
    //fetch backend api here and stuff
    setAnswered(false);
  }

  return (
    <div className="flex flex-col items-center w-[90%] sm:w-[80%] md:w-[50%] max-w-400 m-auto gap-y-10 pb-10">
      <div className="flex flex-col gap-y-5 w-full">
        <div className="flex flex-col gap-y-3">
          <h2 className="font-bold text-white text-lg">Question 1 </h2>
          <h2 className="text-white text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eveniet
            quasi? Laboriosam corporis quod quidem?
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
          <Input
            placeholder="Type your answer here"
            value={response}
            setValue={setResponse}
            full
          />
          <div className="flex gap-x-3">
            <Btn text="Submit" submit fit primary={!answered} />
            {answered && (
              <Btn text="Next question" onclick={handleNextQuestion} primary />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Quiz;

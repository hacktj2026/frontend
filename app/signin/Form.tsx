"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Input from "@/components/ui/Input";
import Btn from "@/components/ui/Btn";
import Provider from "./Provider";

function Form() {
  const [newUser, setNewUser] = useState({ email: "", name: "", password: "" });
  const [signUp, setSignUp] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function handleSignin() {
    if (signUp) {
      await authClient.signUp.email(
        {
          email: newUser.email,
          password: newUser.password,
          name: newUser.name,
        },
        {
          onRequest: () => {
            setLoading(true);
          },
          onSuccess: () => {
            window.location.reload();
          },
          onError: (ctx) => {
            setError(ctx.error.message);
            setLoading(false);
          },
        },
      );
    } else {
      await authClient.signIn.email(
        {
          email: newUser.email,
          password: newUser.password,
          callbackURL: "/profile",
        },
        {
          onRequest: () => {
            setLoading(true);
          },
          onError: (ctx) => {
            setError(ctx.error.message);
            setLoading(false);
          },
        },
      );
    }
  }

  return (
    <div className="flex flex-col gap-y-5 justify-center rounded-lg border-2 border-zinc-800 w-100 m-auto my-10 px-5 py-10">
      <h1 className="text-white font-bold text-2xl text-center">
        Sign {signUp ? "Up" : "In"}
      </h1>
      <Input
        placeholder="Email"
        value={newUser.email}
        setValue={(value) => setNewUser({ ...newUser, email: value })}
      />
      {signUp && (
        <Input
          placeholder="Display name"
          value={newUser.name}
          setValue={(value) => setNewUser({ ...newUser, name: value })}
        />
      )}
      <Input
        placeholder="Password"
        value={newUser.password}
        setValue={(value) => setNewUser({ ...newUser, password: value })}
        password
      />
      {error && <p className="text-red-500">Error: {error}</p>}
      {signUp ? (
        <p className="text-zinc-300 text-sm">
          Already have an account?{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => setSignUp(false)}
          >
            Sign in
          </span>
        </p>
      ) : (
        <p className="text-zinc-300 text-sm">
          Don&apos;t have an account?{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => setSignUp(true)}
          >
            Sign up
          </span>
        </p>
      )}
      <Btn
        text={loading ? "Loading..." : signUp ? "Sign up" : "Sign in"}
        onclick={handleSignin}
        primary
      />
      <div className="my-5 w-full bg-zinc-800 h-0.5 flex items-center justify-center">
        <span className="bg-zinc-950 px-3 text-zinc-300 text-sm">or</span>
      </div>
      <div className="flex flex-col gap-y-3">
        <Provider provider="Google" />
        <Provider provider="GitHub" />
      </div>
    </div>
  );
}

export default Form;

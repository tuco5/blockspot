"use client";
import { useActionState } from "react";
import { login, signup } from "../actions";

const initialState = {
  error: "",
};

export default function SignInForm() {
  const [loginState, loginAction] = useActionState(login, initialState);

  return (
    <form className="flex flex-col">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <div className="flex items-center justify-center gap-4">
        <button className="bg-blue-300" formAction={loginAction}>
          Log in
        </button>
      </div>
      <p className="text-red-500">{loginState.error}</p>
    </form>
  );
}

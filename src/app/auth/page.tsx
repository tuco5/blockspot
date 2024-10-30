import { redirect } from "next/navigation";

export default function AuthPage() {
  console.log("AuthPage");
  return redirect("/auth/sign-in");
}

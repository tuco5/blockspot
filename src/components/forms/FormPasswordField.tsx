"use client";
import { Eye, EyeOff } from "lucide-react";
import { Input, type InputProps } from "../ui/input";
import { useState } from "react";

export function FormPasswordField(props: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const Icon = showPassword ? Eye : EyeOff;

  return (
    <div className="relative mb-1.5 flex flex-col-reverse gap-2">
      <Input {...props} type={showPassword ? "text" : "password"} />

      <button
        onClick={() => setShowPassword(!showPassword)}
        type="button"
        className="text-yellow absolute right-4 top-1/2 -translate-y-1/2"
      >
        <Icon size={20} />
      </button>
    </div>
  );
}

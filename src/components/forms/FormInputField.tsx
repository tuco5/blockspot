"use client";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { Input, type InputProps } from "../ui/input";
import { ErrorMessages } from "./ErrorMessages";
import { Label } from "../ui/label";
import { useState } from "react";

interface FormInputFieldProps extends InputProps {
  label?: string;
  errors?: string[];
}

export function FormInputField({
  label = "",
  errors = [],
  type,
  ...props
}: FormInputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const passwordIcon = showPassword ? (
    <Eye size={20} className="text-slate-700" />
  ) : (
    <EyeOff size={20} className="text-slate-500" />
  );

  const getInputClass = () =>
    cn(
      "peer h-12 w-full rounded-lg border border-stone-300 bg-transparent text-sm text-stone-900 transition-colors focus:border-ring dark:text-white",
      errors.length > 0 ? "border-destructive" : "border-stone-300",
    );

  const getLabelClass = () =>
    cn(
      "px-2 text-sm transition-all peer-focus:text-ring",
      errors.length > 0
        ? "text-destructive"
        : "text-stone-600 dark:text-stone-400",
    );

  return (
    <div>
      <div className="relative mb-1.5 flex flex-col-reverse gap-2">
        <Input
          id={props.name}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          className={getInputClass()}
          {...props}
        />
        <Label htmlFor={props.name} className={getLabelClass()}>
          {label}
        </Label>
        {type === "password" && (
          <button
            onClick={handleShowPassword}
            type="button"
            className="absolute right-4 top-2/3 -translate-y-1/2"
          >
            {passwordIcon}
          </button>
        )}
      </div>
      <ErrorMessages errors={errors} />
    </div>
  );
}

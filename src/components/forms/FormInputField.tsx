import { cn } from "@/lib/utils";
import { Input, type InputProps } from "../ui/input";
import { ErrorMessages } from "./ErrorMessages";
import { Label } from "../ui/label";

interface FormInputFieldProps extends InputProps {
  label?: string;
  errors?: string[];
}

export function FormInputField({
  label = "",
  errors = [],
  ...props
}: FormInputFieldProps) {
  const inputErrorStyle =
    errors?.length > 0 ? "border-red-500" : "border-stone-300";
  const labelErrorStyle =
    errors?.length > 0 ? "text-red-500" : "text-stone-600 dark:text-stone-400";

  return (
    <div>
      <div className="mb-1.5 flex flex-col-reverse">
        <Input
          id={props.name}
          className={cn(
            "peer block w-full rounded-lg border border-stone-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-stone-900 transition-colors focus:border-sky-500 focus:outline-none focus:ring-0 dark:text-white",
            inputErrorStyle,
          )}
          {...props}
        />
        <Label
          htmlFor={props.name}
          className={cn(
            "px-2 text-sm transition-all peer-focus:text-sky-500",
            labelErrorStyle,
          )}
        >
          {label}
        </Label>
      </div>
      <ErrorMessages errors={errors} />
    </div>
  );
}

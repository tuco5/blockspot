import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface InputFieldProps extends InputProps {
  label?: string;
  errors?: string[];
}
/* TODOs: 
  - add placeholder support
*/

export function InputField({
  label = "",
  errors = [],
  className,
  ...props
}: InputFieldProps) {
  const ErrorMessages = () => {
    if (errors?.length > 0) {
      return (
        <ul className="flex flex-col gap-1">
          {errors.map((error) => (
            <li key={error} className="px-3 text-xs text-red-500">
              {error}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  const inputErrorStyle =
    errors?.length > 0 ? "border-red-500" : "border-stone-300";
  const labelErrorStyle =
    errors?.length > 0 ? "text-red-500" : "text-stone-600 dark:text-stone-400";

  return (
    <div>
      <div className="mb-1.5 flex flex-col-reverse">
        <input
          id={props.name}
          className={cn(
            "peer block w-full rounded-lg border border-stone-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-stone-900 transition-colors focus:border-sky-500 focus:outline-none focus:ring-0 dark:text-white",
            inputErrorStyle,
          )}
          {...props}
        />
        <label
          htmlFor={props.name}
          className={cn(
            "px-2 text-sm transition-all peer-focus:text-sky-500",
            labelErrorStyle,
          )}
        >
          {label}
        </label>
      </div>
      <ErrorMessages />
    </div>
  );
}

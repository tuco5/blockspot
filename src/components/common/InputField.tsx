import { InputProps } from "@/components/ui/input";

interface InputFieldProps extends InputProps {
  variant?: "filled" | "outline" | "standard";
  label?: string;
  error?: string;
}

export function InputField({
  variant = "standard",
  label = "",
  error = "",
  className,
  ...props
}: InputFieldProps) {
  return (
    <div className="relative">
      <input
        id="floating_filled"
        className="peer block w-full rounded-lg border border-stone-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-stone-900 focus:border-sky-500 focus:outline-none focus:ring-0 dark:text-white invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-600 dark:invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
        placeholder=" "
        {...props}
      />
      <label
        htmlFor="floating_filled"
        className="pointer-events-none absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-card px-2 text-sm text-stone-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-sky-600 dark:text-stone-400 peer-focus:dark:text-sky-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
      >
        {label}
      </label>
      {error && <p className="px-3 py-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

import { FadeLoader } from "react-spinners";
import { Button, type ButtonProps } from "@/components/ui/button";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface FormSubmitButtonProps extends ButtonProps {
  isPending?: boolean;
}
const FormSubmitButton = forwardRef<HTMLButtonElement, FormSubmitButtonProps>(
  ({ isPending = false, children, className, ...props }, ref) => {
    if (isPending) {
      return (
        <div className="flex w-full items-center justify-center">
          <FadeLoader
            color="hsl(var(--primary))"
            height={5}
            width={5}
            margin={0.2}
            radius={4}
          />
        </div>
      );
    }

    return (
      <Button
        ref={ref}
        variant="primary"
        rounded="full"
        type="submit"
        className={cn("px-8 py-4 text-lg", className)}
        {...props}
      >
        {children}
      </Button>
    );
  },
);
FormSubmitButton.displayName = "Button";

export { FormSubmitButton };

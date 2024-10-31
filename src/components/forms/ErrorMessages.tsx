interface ErrorMessagesProps {
  errors: string[];
}

export function ErrorMessages({ errors }: ErrorMessagesProps) {
  return (
    <ul className="flex min-h-4 flex-col gap-1">
      {errors.map((error) => (
        <li key={error} className="px-3 text-xs text-destructive">
          {error}
        </li>
      ))}
    </ul>
  );
}

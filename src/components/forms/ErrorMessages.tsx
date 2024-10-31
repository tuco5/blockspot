interface ErrorMessagesProps {
  errors: string[];
}

export function ErrorMessages({ errors }: ErrorMessagesProps) {
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
}

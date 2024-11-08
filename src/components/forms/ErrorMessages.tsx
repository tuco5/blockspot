interface ErrorMessagesProps {
  error?: string;
}

export function ErrorMessages({ error }: ErrorMessagesProps) {
  return <p className="px-3 text-destructive">{error}</p>;
}

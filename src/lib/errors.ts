class UnauthorizedError extends Error {
  constructor(
    readonly message = "Unauthorized access",
    readonly status = 401,
    readonly name = "UnauthorizedError",
  ) {
    super(message);
  }
}

class NotFoundError extends Error {
  constructor(
    readonly message = "Resource not found",
    readonly name = "NotFoundError",
    readonly status = 404,
  ) {
    super(message);
  }
}

export { UnauthorizedError, NotFoundError };

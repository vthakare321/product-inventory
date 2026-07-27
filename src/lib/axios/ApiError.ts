import type { ErrorCode } from "./errorCodes";

export class ApiError extends Error {
  constructor(
    public readonly status: number | undefined,
    public readonly code: ErrorCode,
    public readonly title: string,
    message: string,
  ) {
    super(message);

    this.name = "ApiError";
  }
}
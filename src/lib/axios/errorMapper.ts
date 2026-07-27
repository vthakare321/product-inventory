import type { AxiosError } from "axios";

import { ApiError } from "./ApiError";
import { ERROR_CODES } from "./errorCodes";

export function mapAxiosError(error: AxiosError): ApiError {
  // Network Error
  if (error.code === "ERR_NETWORK") {
    return new ApiError(
      undefined,
      ERROR_CODES.NETWORK,
      "No Internet Connection",
      "Please check your internet connection and try again.",
    );
  }

  // Request Timeout
  if (error.code === "ECONNABORTED") {
    return new ApiError(
      undefined,
      ERROR_CODES.TIMEOUT,
      "Request Timed Out",
      "The request took too long to complete. Please try again.",
    );
  }

  // No response received
  if (!error.response) {
    return new ApiError(
      undefined,
      ERROR_CODES.UNKNOWN,
      "Connection Error",
      "Unable to connect to the server.",
    );
  }

  switch (error.response.status) {
    case 400:
      return new ApiError(
        400,
        ERROR_CODES.BAD_REQUEST,
        "Bad Request",
        "The request is invalid.",
      );

    case 401:
      return new ApiError(
        401,
        ERROR_CODES.UNAUTHORIZED,
        "Unauthorized",
        "Your session has expired. Please log in again.",
      );

    case 403:
      return new ApiError(
        403,
        ERROR_CODES.FORBIDDEN,
        "Forbidden",
        "You don't have permission to perform this action.",
      );

    case 404:
      return new ApiError(
        404,
        ERROR_CODES.NOT_FOUND,
        "Not Found",
        "The requested resource could not be found.",
      );

    case 500:
      return new ApiError(
        500,
        ERROR_CODES.SERVER_ERROR,
        "Server Error",
        "Something went wrong on the server.",
      );

    default:
      return new ApiError(
        error.response.status,
        ERROR_CODES.UNKNOWN,
        "Unexpected Error",
        "Something went wrong. Please try again later.",
      );
  }
}
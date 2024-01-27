import { ApiError } from "./apiError";
import { formatResponse } from "./formatResponse";

export const catchAsync = (fn: any) => async (event: any, context: any) => {
  try {
    let body = null;
    if (event.body) {
      body = JSON.parse(event.body);
    }
    const d = await fn(body, event, context);
    return d;
  } catch (err: unknown) {
    const error = err as Error & ApiError;

    return formatResponse(error.statusCode || 500, error.message);
  }
};

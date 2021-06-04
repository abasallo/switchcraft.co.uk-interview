import type { Request, Response } from "express";
import { appLogger } from "./app-logger";
import type { ApiError } from "./api-error.interface";

export const handleApiErrors = (
  error: ApiError,
  req: Request,
  res: Response,
  next: () => void
): void => {
  appLogger.warn({
    error,
    url: req.url
  }, "API error");
  res.status(error.code).json({ error: error.message });
  next();
};

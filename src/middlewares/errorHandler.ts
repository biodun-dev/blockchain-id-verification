// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { handleError } from '../utils/errorHandler';

export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  const { message, details } = handleError(err);
  res.status(500).json({ message, details });
};

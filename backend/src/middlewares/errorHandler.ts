import { HttpException } from '../common/exceptions/httpException';
import { NextFunction, Request, Response } from 'express';

export function errorHandler(err: Error, req: Request, res: Response, _next: NextFunction) {
  console.error(err);

  let statusCode = 500;
  let message = 'Internal Server Error';

  if (err instanceof HttpException) {
    statusCode = err.status;
    message = err.message;
  }

  res.status(statusCode).json({ message });
}
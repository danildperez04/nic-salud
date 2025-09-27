import { ValidationError } from 'class-validator';
import { HttpException } from '../common/exceptions/httpException';
import { NextFunction, Request, Response } from 'express';

export function errorHandler(err: Error, req: Request, res: Response, _next: NextFunction) {
  console.error(err);

  let statusCode = 500;
  let message = 'Internal Server Error';
  let errors;

  if (err instanceof HttpException) {
    statusCode = err.status;
    message = err.message;
  }

  if ((err as any).details) {
    let details = (err as any).details as ValidationError[]

    errors = details.map(({ constraints }) => constraints);
  }

  res.status(statusCode).json({ message, errors });
}
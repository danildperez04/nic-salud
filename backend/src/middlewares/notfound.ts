import { NextFunction, Request, Response } from "express";

export function notFoundHandler(req: Request, res: Response, next: NextFunction){
  res.status(404).json({ message: 'Resource not found' });
}
import { Request, Response, NextFunction } from 'express';
import * as municipalityRepo from '../repositories/municipality.repository';

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const list = await municipalityRepo.findAll();
    res.json(list);
  } catch (err) {
    next(err);
  }
}

export { getAll };

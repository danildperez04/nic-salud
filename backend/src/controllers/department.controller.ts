import { Request, Response, NextFunction } from 'express';
import * as municipalityRepo from '../repositories/municipality.repository';

async function getAllDepartments(req: Request, res: Response, next: NextFunction) {
  try {
    const deps = await municipalityRepo.findAllDepartments();
    res.json(deps);
  } catch (err) {
    next(err);
  }
}

export { getAllDepartments };

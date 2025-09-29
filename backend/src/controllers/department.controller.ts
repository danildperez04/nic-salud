import { Request, Response, NextFunction } from 'express';
import * as departmentRepo from '../repositories/department.repository';

async function getAllDepartments(req: Request, res: Response, next: NextFunction) {
  try {
    const deps = await departmentRepo.findAll();
    res.json(deps);
  } catch (err) {
    next(err);
  }
}

export { getAllDepartments };

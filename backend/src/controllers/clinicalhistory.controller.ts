import { Request, Response, NextFunction } from 'express';
import clinicalRepo from '../repositories/clinicalhistory.repository';

export async function findAll(req: Request, res: Response, next: NextFunction) {
  try {
    const list = await clinicalRepo.findAll();
    res.json(list);
  } catch (err) {
    next(err);
  }
}

export async function findOne(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await clinicalRepo.findById(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const ent = await clinicalRepo.create(req.body);
    res.status(201).json(ent);
  } catch (err) {
    next(err);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const updated = await clinicalRepo.update(id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const removed = await clinicalRepo.remove(id);
    res.json(removed);
  } catch (err) {
    next(err);
  }
}

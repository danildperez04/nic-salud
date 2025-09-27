import { Request, Response, NextFunction } from 'express';
import labTestRepository from '../repositories/labtest.repository';

export async function findAll(req: Request, res: Response, next: NextFunction) {
  try {
    const list = await labTestRepository.findAll();
    res.json(list);
  } catch (err) {
    next(err);
  }
}

export async function findOne(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await labTestRepository.findById(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const ent = await labTestRepository.create(req.body);
    res.status(201).json(ent);
  } catch (err) {
    next(err);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const updated = await labTestRepository.update(id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const removed = await labTestRepository.remove(id);
    res.json(removed);
  } catch (err) {
    next(err);
  }
}

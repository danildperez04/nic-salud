import { Request, Response, NextFunction } from 'express';
import roleRepository from '../repositories/role.repository';

export async function findAll(req: Request, res: Response, next: NextFunction) {
  try {
    const roles = await roleRepository.findAll();
    res.json(roles);
  } catch (err) {
    next(err);
  }
}

export async function findOne(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const role = await roleRepository.findById(id);
    res.json(role);
  } catch (err) {
    next(err);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const role = await roleRepository.create(req.body);
    res.status(201).json(role);
  } catch (err) {
    next(err);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const updated = await roleRepository.update(id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const removed = await roleRepository.remove(id);
    res.json(removed);
  } catch (err) {
    next(err);
  }
}

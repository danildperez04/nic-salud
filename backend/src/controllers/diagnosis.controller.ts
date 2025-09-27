import { Request, Response, NextFunction } from 'express';
import diagnosisRepository from '../repositories/diagnosis.repository';

export async function findAll(req: Request, res: Response, next: NextFunction) {
  try {
    const diagnoses = await diagnosisRepository.findAll();
    res.json(diagnoses);
  } catch (err) {
    next(err);
  }
}

export async function findOne(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const diagnosis = await diagnosisRepository.findById(id);
    res.json(diagnosis);
  } catch (err) {
    next(err);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const diagnosis = await diagnosisRepository.create(req.body);
    res.status(201).json(diagnosis);
  } catch (err) {
    next(err);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const updated = await diagnosisRepository.update(id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const removed = await diagnosisRepository.remove(id);
    res.json(removed);
  } catch (err) {
    next(err);
  }
}

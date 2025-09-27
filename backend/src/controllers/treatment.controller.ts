import { Request, Response, NextFunction } from 'express';
import treatmentRepository from '../repositories/treatment.repository';

export async function findAll(req: Request, res: Response, next: NextFunction) {
  try {
    const list = await treatmentRepository.findAll();
    res.json(list);
  } catch (err) {
    next(err);
  }
}

export async function findOne(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await treatmentRepository.findById(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const ent = await treatmentRepository.create(req.body);
    res.status(201).json(ent);
  } catch (err) {
    next(err);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const updated = await treatmentRepository.update(id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const removed = await treatmentRepository.remove(id);
    res.json(removed);
  } catch (err) {
    next(err);
  }
}

// Medication endpoints
export async function listMedications(req: Request, res: Response, next: NextFunction) {
  try {
    const meds = await treatmentRepository.findAllMedications();
    res.json(meds);
  } catch (err) {
    next(err);
  }
}

export async function getMedication(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const m = await treatmentRepository.findMedicationById(id);
    res.json(m);
  } catch (err) {
    next(err);
  }
}

export async function createMedication(req: Request, res: Response, next: NextFunction) {
  try {
    const m = await treatmentRepository.createMedication(req.body);
    res.status(201).json(m);
  } catch (err) {
    next(err);
  }
}

export async function updateMedication(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const m = await treatmentRepository.updateMedication(id, req.body);
    res.json(m);
  } catch (err) {
    next(err);
  }
}

export async function removeMedication(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const m = await treatmentRepository.removeMedication(id);
    res.json(m);
  } catch (err) {
    next(err);
  }
}

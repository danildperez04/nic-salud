import { Request, Response, NextFunction } from 'express';
import medicalRepo from '../repositories/medicalcatalogs.repository';

// Vaccines
export async function listVaccines(req: Request, res: Response, next: NextFunction) {
  try {
    const list = await medicalRepo.findAllVaccines();
    res.json(list);
  } catch (err) {
    next(err);
  }
}

export async function getVaccine(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await medicalRepo.findVaccineById(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function createVaccine(req: Request, res: Response, next: NextFunction) {
  try {
    const ent = await medicalRepo.createVaccine(req.body);
    res.status(201).json(ent);
  } catch (err) {
    next(err);
  }
}

export async function updateVaccine(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await medicalRepo.updateVaccine(id, req.body);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function removeVaccine(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await medicalRepo.removeVaccine(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

// Allergies
export async function listAllergies(req: Request, res: Response, next: NextFunction) {
  try {
    const list = await medicalRepo.findAllAllergies();
    res.json(list);
  } catch (err) {
    next(err);
  }
}

export async function getAllergy(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await medicalRepo.findAllergyById(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function createAllergy(req: Request, res: Response, next: NextFunction) {
  try {
    const ent = await medicalRepo.createAllergy(req.body);
    res.status(201).json(ent);
  } catch (err) {
    next(err);
  }
}

export async function updateAllergy(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await medicalRepo.updateAllergy(id, req.body);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function removeAllergy(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await medicalRepo.removeAllergy(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

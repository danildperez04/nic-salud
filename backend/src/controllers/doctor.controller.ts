import { Request, Response, NextFunction } from 'express';
import doctorRepo from '../repositories/doctor.repository';

// Doctors
export async function listDoctors(req: Request, res: Response, next: NextFunction) {
  try {
    const list = await doctorRepo.findAll();
    res.json(list);
  } catch (err) {
    next(err);
  }
}

export async function getDoctor(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await doctorRepo.findById(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function createDoctor(req: Request, res: Response, next: NextFunction) {
  try {
    const ent = await doctorRepo.create(req.body);
    res.status(201).json(ent);
  } catch (err) {
    next(err);
  }
}

export async function updateDoctor(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await doctorRepo.update(id, req.body);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function removeDoctor(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await doctorRepo.remove(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

// Departments
export async function listDepartments(req: Request, res: Response, next: NextFunction) {
  try {
    const list = await doctorRepo.findAllDepartments();
    res.json(list);
  } catch (err) {
    next(err);
  }
}

export async function getDepartment(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await doctorRepo.findDepartmentById(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function createDepartment(req: Request, res: Response, next: NextFunction) {
  try {
    const ent = await doctorRepo.createDepartment(req.body);
    res.status(201).json(ent);
  } catch (err) {
    next(err);
  }
}

export async function updateDepartment(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await doctorRepo.updateDepartment(id, req.body);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function removeDepartment(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await doctorRepo.removeDepartment(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

import { Request, Response, NextFunction } from 'express';
import mrRepo from '../repositories/medicalrecord.repository';

// MedicalRecord
export async function listMedicalRecords(req: Request, res: Response, next: NextFunction) {
  try {
    const list = await mrRepo.findAll();
    res.json(list);
  } catch (err) {
    next(err);
  }
}

export async function getMedicalRecord(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await mrRepo.findById(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function createMedicalRecord(req: Request, res: Response, next: NextFunction) {
  try {
    const ent = await mrRepo.create(req.body);
    res.status(201).json(ent);
  } catch (err) {
    next(err);
  }
}

export async function updateMedicalRecord(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await mrRepo.update(id, req.body);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function removeMedicalRecord(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await mrRepo.remove(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

// Diseases
export async function listDiseases(req: Request, res: Response, next: NextFunction) {
  try {
    const list = await mrRepo.findAllDiseases();
    res.json(list);
  } catch (err) {
    next(err);
  }
}

export async function getDisease(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await mrRepo.findDiseaseById(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function createDisease(req: Request, res: Response, next: NextFunction) {
  try {
    const ent = await mrRepo.createDisease(req.body);
    res.status(201).json(ent);
  } catch (err) {
    next(err);
  }
}

export async function updateDisease(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await mrRepo.updateDisease(id, req.body);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function removeDisease(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await mrRepo.removeDisease(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

// PatientDiseases
export async function listPatientDiseases(req: Request, res: Response, next: NextFunction) {
  try {
    const list = await mrRepo.findAllPatientDiseases();
    res.json(list);
  } catch (err) {
    next(err);
  }
}

export async function getPatientDisease(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await mrRepo.findPatientDiseaseById(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function createPatientDisease(req: Request, res: Response, next: NextFunction) {
  try {
    const ent = await mrRepo.createPatientDisease(req.body);
    res.status(201).json(ent);
  } catch (err) {
    next(err);
  }
}

export async function updatePatientDisease(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await mrRepo.updatePatientDisease(id, req.body);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function removePatientDisease(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await mrRepo.removePatientDisease(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

// Surgeries
export async function listSurgeries(req: Request, res: Response, next: NextFunction) {
  try {
    const list = await mrRepo.findAllSurgeries();
    res.json(list);
  } catch (err) {
    next(err);
  }
}

export async function getSurgery(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await mrRepo.findSurgeryById(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function createSurgery(req: Request, res: Response, next: NextFunction) {
  try {
    const ent = await mrRepo.createSurgery(req.body);
    res.status(201).json(ent);
  } catch (err) {
    next(err);
  }
}

export async function updateSurgery(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await mrRepo.updateSurgery(id, req.body);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

export async function removeSurgery(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const ent = await mrRepo.removeSurgery(id);
    res.json(ent);
  } catch (err) {
    next(err);
  }
}

import { Request, Response, NextFunction } from 'express';
import patientRepository from '../repositories/patient.repository';
import { CreatePatientDto, UpdatePatientDto } from '../dtos/patient.dto';

async function findAll(req: Request, res: Response, next: NextFunction) {
  try {
    const patients = await patientRepository.findAll();

    res.json(patients);
  } catch (err) {
    next(err);
  }
}

async function findOne(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);

    const patient = await patientRepository.findById(id);

    res.json(patient);
  } catch (err) {
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const dto = req.body as CreatePatientDto;

    // const isValid = validateDNI(dto.dni);

    // if (!isValid) {
    //   throw new BadRequestException('El DNI no es valido')
    // }

    const patient = await patientRepository.create({
      dni: dto.dni,
      fullname: dto.fullname,
      gender: dto.gender,
      address: dto.address,
      phoneNumber: dto.phoneNumber,
      birthDate: new Date(dto.birthDate),
      municipalityId: (dto as any).municipalityId,
      userId: (dto as any).userId
    });

    res.status(201).json(patient);
  } catch (err) {
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const dto = req.body as UpdatePatientDto;

    const patientData: any = {};
    if (typeof dto.dni !== 'undefined') patientData.dni = dto.dni;
    if (typeof dto.fullname !== 'undefined') patientData.fullname = dto.fullname;
    if (typeof dto.gender !== 'undefined') patientData.gender = dto.gender;
    if (typeof dto.address !== 'undefined') patientData.address = dto.address;
    if (typeof dto.phoneNumber !== 'undefined') patientData.phoneNumber = dto.phoneNumber;
    if (typeof dto.birthDate !== 'undefined') patientData.birthDate = new Date(dto.birthDate as string);
    if (typeof (dto as any).municipalityId !== 'undefined') patientData.municipalityId = (dto as any).municipalityId;
    if (typeof (dto as any).userId !== 'undefined') patientData.userId = (dto as any).userId;

    const updated = await patientRepository.update({ id, patientData });

    res.json(updated);
  } catch (err) {
    next(err);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);

    const removed = await patientRepository.remove({ id });

    res.json(removed);
  } catch (err) {
    next(err);
  }
}

async function validateDNI(dni: string) {

}

export {
  findAll,
  findOne,
  create,
  update,
  remove
};

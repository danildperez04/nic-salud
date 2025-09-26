import { dataSource } from '../config/database';
import { Patient } from '../entities/patient.entity';
import { NotFoundException } from '../common/exceptions/httpException';

const patientRepository = dataSource.getRepository(Patient);

interface PatientData {
  id: number;
  dni: string;
  fullname: string;
  gender: string;
  address: string;
  phoneNumber: string;
  birthDate: Date;
  municipalityId?: number;
  userId?: number;
  isActive?: boolean;
}

async function findAll() {
  return await patientRepository.find({ where: { isActive: true } });
}

async function findById(id: number) {
  const patient = await patientRepository.findOne({ where: { id } });

  if (!patient) throw new NotFoundException('Patient not found');

  return patient;
}

async function create(patientData: Omit<PatientData, 'id' | 'isActive'>) {
  const patient = await patientRepository.save(patientData as any);

  return patient;
}

async function update({ id, patientData }: { id: number; patientData: Partial<Omit<PatientData, 'id'>> }) {
  const found = await findById(id);

  Object.assign(found, patientData);

  return await patientRepository.save(found);
}

async function remove({ id }: { id: number }) {
  const found = await findById(id);

  found.isActive = false;

  return await patientRepository.save(found);
}

export default {
  findAll,
  findById,
  create,
  update,
  remove
};

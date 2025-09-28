import { dataSource } from '../config/database';
import { Patient } from '../entities/patient.entity';
import { NotFoundException } from '../common/exceptions/httpException';
import * as municipalityRepo from '../repositories/municipality.repository';
import { Municipality } from '../entities/department.entity';

const patientRepository = dataSource.getRepository(Patient);

interface PatientData {
  id: number;
  dni: string;
  fullname: string;
  gender: string;
  address: string;
  phoneNumber: string;
  birthDate: Date;
  municipalityId: number;
  municipality: Municipality;
  userId?: number;
  isActive?: boolean;
  inviteToken?: string | null;
  inviteExpiresAt?: Date | null;
  inviteEmail?: string | null;
}

async function findAll() {
  return await patientRepository.find({ where: { isActive: true } });
}

async function findById(id: number) {
  const patient = await patientRepository.findOne({ where: { id }, relations: ['municipality', 'user', 'medicalRecord'] });

  if (!patient) throw new NotFoundException('Patient not found');

  return patient;
}

async function findByUserId(userId: number) {
  const patient = await patientRepository.findOne({ where: { user: { id: userId } as any }, relations: ['municipality', 'user', 'medicalRecord'] });

  if (!patient) throw new NotFoundException('Patient not found for user');

  return patient;
}

async function findByInviteToken(token: string) {
  const patient = await patientRepository.findOne({ where: { inviteToken: token }, relations: ['municipality', 'user', 'medicalRecord'] });

  if (!patient) throw new NotFoundException('Invitation not found');

  return patient;
}

async function create(patientData: Omit<PatientData, 'id' | 'isActive'>) {
  const municipality = await municipalityRepo.findOne(patientData.municipalityId);

  patientData.municipality = municipality;

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

async function linkPatientToUser() {

}

export default {
  findAll,
  findById,
  findByUserId,
  findByInviteToken,
  create,
  update,
  remove
};

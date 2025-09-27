import { dataSource } from '../config/database';
import { MedicalRecord, Disease, PatientDisease, Surgery } from '../entities/medical-record.entity';
import { NotFoundException } from '../common/exceptions/httpException';

const repo = dataSource.getRepository(MedicalRecord);
const diseaseRepo = dataSource.getRepository(Disease);
const patientDiseaseRepo = dataSource.getRepository(PatientDisease);
const surgeryRepo = dataSource.getRepository(Surgery);

// MedicalRecord
async function findAll() {
  return await repo.find({ relations: ['patient', 'patientDiseases', 'patientAllergies', 'surgeries', 'appointments', 'diagnoses', 'treatments', 'vaccines', 'labTests', 'clinicalHistories'] });
}

async function findById(id: number) {
  const ent = await repo.findOne({ where: { id }, relations: ['patient', 'patientDiseases', 'patientAllergies', 'surgeries', 'appointments', 'diagnoses', 'treatments', 'vaccines', 'labTests', 'clinicalHistories'] });
  if (!ent) throw new NotFoundException('MedicalRecord not found');
  return ent;
}

async function create(data: Partial<MedicalRecord>) {
  return await repo.save(data);
}

async function update(id: number, data: Partial<MedicalRecord>) {
  const ent = await findById(id);
  Object.assign(ent, data);
  return await repo.save(ent);
}

async function remove(id: number) {
  const ent = await findById(id);
  return await repo.remove(ent);
}

// Disease catalog
async function findAllDiseases() {
  return await diseaseRepo.find();
}

async function findDiseaseById(id: number) {
  const d = await diseaseRepo.findOne({ where: { id } });
  if (!d) throw new NotFoundException('Disease not found');
  return d;
}

async function createDisease(data: Partial<Disease>) {
  return await diseaseRepo.save(data);
}

async function updateDisease(id: number, data: Partial<Disease>) {
  const d = await findDiseaseById(id);
  Object.assign(d, data);
  return await diseaseRepo.save(d);
}

async function removeDisease(id: number) {
  const d = await findDiseaseById(id);
  return await diseaseRepo.remove(d);
}

// PatientDisease
async function findAllPatientDiseases() {
  return await patientDiseaseRepo.find({ relations: ['medicalRecord', 'disease'] });
}

async function findPatientDiseaseById(id: number) {
  const pd = await patientDiseaseRepo.findOne({ where: { id }, relations: ['medicalRecord', 'disease'] });
  if (!pd) throw new NotFoundException('PatientDisease not found');
  return pd;
}

async function createPatientDisease(data: Partial<PatientDisease>) {
  return await patientDiseaseRepo.save(data);
}

async function updatePatientDisease(id: number, data: Partial<PatientDisease>) {
  const pd = await findPatientDiseaseById(id);
  Object.assign(pd, data);
  return await patientDiseaseRepo.save(pd);
}

async function removePatientDisease(id: number) {
  const pd = await findPatientDiseaseById(id);
  return await patientDiseaseRepo.remove(pd);
}

// Surgery
async function findAllSurgeries() {
  return await surgeryRepo.find({ relations: ['medicalRecord'] });
}

async function findSurgeryById(id: number) {
  const s = await surgeryRepo.findOne({ where: { id }, relations: ['medicalRecord'] });
  if (!s) throw new NotFoundException('Surgery not found');
  return s;
}

async function createSurgery(data: Partial<Surgery>) {
  return await surgeryRepo.save(data);
}

async function updateSurgery(id: number, data: Partial<Surgery>) {
  const s = await findSurgeryById(id);
  Object.assign(s, data);
  return await surgeryRepo.save(s);
}

async function removeSurgery(id: number) {
  const s = await findSurgeryById(id);
  return await surgeryRepo.remove(s);
}

export default {
  findAll,
  findById,
  create,
  update,
  remove,
  findAllDiseases,
  findDiseaseById,
  createDisease,
  updateDisease,
  removeDisease,
  findAllPatientDiseases,
  findPatientDiseaseById,
  createPatientDisease,
  updatePatientDisease,
  removePatientDisease,
  findAllSurgeries,
  findSurgeryById,
  createSurgery,
  updateSurgery,
  removeSurgery,
};

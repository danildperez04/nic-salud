import { dataSource } from '../config/database';
import { Treatment, Medication } from '../entities/treatment.entity';
import { NotFoundException } from '../common/exceptions/httpException';

const treatmentRepository = dataSource.getRepository(Treatment);
const medicationRepository = dataSource.getRepository(Medication);

async function findAll() {
  return await treatmentRepository.find({ relations: ['medication', 'diagnosis', 'patient', 'doctor', 'medicalRecord'] });
}

async function findById(id: number) {
  const ent = await treatmentRepository.findOne({ where: { id }, relations: ['medication', 'diagnosis', 'patient', 'doctor', 'medicalRecord'] });
  if (!ent) throw new NotFoundException('Treatment not found');
  return ent;
}

async function create(data: Partial<Treatment>) {
  return await treatmentRepository.save(data);
}

async function update(id: number, data: Partial<Treatment>) {
  const ent = await findById(id);
  Object.assign(ent, data);
  return await treatmentRepository.save(ent);
}

async function remove(id: number) {
  const ent = await findById(id);
  return await treatmentRepository.remove(ent);
}

// Medication helpers
async function findAllMedications() {
  return await medicationRepository.find();
}

async function findMedicationById(id: number) {
  const m = await medicationRepository.findOne({ where: { id } });
  if (!m) throw new NotFoundException('Medication not found');
  return m;
}

async function createMedication(data: Partial<Medication>) {
  return await medicationRepository.save(data);
}

async function updateMedication(id: number, data: Partial<Medication>) {
  const m = await findMedicationById(id);
  Object.assign(m, data);
  return await medicationRepository.save(m);
}

async function removeMedication(id: number) {
  const m = await findMedicationById(id);
  return await medicationRepository.remove(m);
}

export default {
  findAll,
  findById,
  create,
  update,
  remove,
  findAllMedications,
  findMedicationById,
  createMedication,
  updateMedication,
  removeMedication,
};

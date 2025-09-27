import { dataSource } from '../config/database';
import { Vaccine, Allergy } from '../entities/medical-record.entity';
import { NotFoundException } from '../common/exceptions/httpException';

const vaccineRepo = dataSource.getRepository(Vaccine);
const allergyRepo = dataSource.getRepository(Allergy);

// Vaccines
async function findAllVaccines() {
  return await vaccineRepo.find({ relations: ['medicalRecord'] });
}

async function findVaccineById(id: number) {
  const v = await vaccineRepo.findOne({ where: { id }, relations: ['medicalRecord'] });
  if (!v) throw new NotFoundException('Vaccine not found');
  return v;
}

async function createVaccine(data: Partial<Vaccine>) {
  return await vaccineRepo.save(data);
}

async function updateVaccine(id: number, data: Partial<Vaccine>) {
  const v = await findVaccineById(id);
  Object.assign(v, data);
  return await vaccineRepo.save(v);
}

async function removeVaccine(id: number) {
  const v = await findVaccineById(id);
  return await vaccineRepo.remove(v);
}

// Allergies
async function findAllAllergies() {
  return await allergyRepo.find({ relations: ['medicalRecord'] });
}

async function findAllergyById(id: number) {
  const a = await allergyRepo.findOne({ where: { id }, relations: ['medicalRecord'] });
  if (!a) throw new NotFoundException('Allergy not found');
  return a;
}

async function createAllergy(data: Partial<Allergy>) {
  return await allergyRepo.save(data);
}

async function updateAllergy(id: number, data: Partial<Allergy>) {
  const a = await findAllergyById(id);
  Object.assign(a, data);
  return await allergyRepo.save(a);
}

async function removeAllergy(id: number) {
  const a = await findAllergyById(id);
  return await allergyRepo.remove(a);
}

export default {
  findAllVaccines,
  findVaccineById,
  createVaccine,
  updateVaccine,
  removeVaccine,
  findAllAllergies,
  findAllergyById,
  createAllergy,
  updateAllergy,
  removeAllergy,
};

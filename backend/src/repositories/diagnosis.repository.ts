import { dataSource } from '../config/database';
import { Diagnosis } from '../entities/diagnosis.entity';
import { NotFoundException } from '../common/exceptions/httpException';

const diagnosisRepository = dataSource.getRepository(Diagnosis);

async function findAll() {
  return await diagnosisRepository.find();
}

async function findById(id: number) {
  const diagnosis = await diagnosisRepository.findOne({ where: { id } });
  if (!diagnosis) throw new NotFoundException('Diagnosis not found');
  return diagnosis;
}

async function create(diagnosisData: Partial<Diagnosis>) {
  return await diagnosisRepository.save(diagnosisData);
}

async function update(id: number, diagnosisData: Partial<Diagnosis>) {
  const diagnosis = await findById(id);
  Object.assign(diagnosis, diagnosisData);
  return await diagnosisRepository.save(diagnosis);
}

async function remove(id: number) {
  const diagnosis = await findById(id);
  return await diagnosisRepository.remove(diagnosis);
}

export default { findAll, findById, create, update, remove };

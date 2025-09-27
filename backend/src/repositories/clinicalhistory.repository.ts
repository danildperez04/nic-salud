import { dataSource } from '../config/database';
import { ClinicalHistory } from '../entities/clinical-history.entity';
import { NotFoundException } from '../common/exceptions/httpException';

const repo = dataSource.getRepository(ClinicalHistory);

async function findAll() {
  return await repo.find({ relations: ['medicalRecord'] });
}

async function findById(id: number) {
  const ent = await repo.findOne({ where: { id }, relations: ['medicalRecord'] });
  if (!ent) throw new NotFoundException('ClinicalHistory not found');
  return ent;
}

async function create(data: Partial<ClinicalHistory>) {
  return await repo.save(data);
}

async function update(id: number, data: Partial<ClinicalHistory>) {
  const ent = await findById(id);
  Object.assign(ent, data);
  return await repo.save(ent);
}

async function remove(id: number) {
  const ent = await findById(id);
  return await repo.remove(ent);
}

export default { findAll, findById, create, update, remove };

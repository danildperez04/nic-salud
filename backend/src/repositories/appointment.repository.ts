import { dataSource } from '../config/database';
import { Appointment } from '../entities/appointment.entity';
import { NotFoundException } from '../common/exceptions/httpException';

const repo = dataSource.getRepository(Appointment);

async function findAll() {
  return await repo.find({ relations: ['patient', 'doctor', 'medicalRecord', 'diagnoses'] });
}

async function findById(id: number) {
  const ent = await repo.findOne({ where: { id }, relations: ['patient', 'doctor', 'medicalRecord', 'diagnoses'] });
  if (!ent) throw new NotFoundException('Appointment not found');
  return ent;
}

async function create(data: Partial<Appointment>) {
  return await repo.save(data);
}

async function update(id: number, data: Partial<Appointment>) {
  const ent = await findById(id);
  Object.assign(ent, data);
  return await repo.save(ent);
}

async function remove(id: number) {
  const ent = await findById(id);
  return await repo.remove(ent);
}

export default { findAll, findById, create, update, remove };

import { dataSource } from '../config/database';
import { Doctor } from '../entities/doctor.entity';
import { Department, Municipality } from '../entities/department.entity';
import { NotFoundException } from '../common/exceptions/httpException';

const repo = dataSource.getRepository(Doctor);
const deptRepo = dataSource.getRepository(Department);
// Municipality uses same file

async function findAll() {
  return await repo.find({ relations: ['user', 'appointments', 'diagnoses', 'treatments', 'municipality', 'specialties'] });
}

async function findById(id: number) {
  const ent = await repo.findOne({ where: { id }, relations: ['user', 'appointments', 'diagnoses', 'treatments', 'municipality', 'specialties'] });
  if (!ent) throw new NotFoundException('Doctor not found');
  return ent;
}

async function create(data: Partial<Doctor>) {
  return await repo.save(data);
}

async function update(id: number, data: Partial<Doctor>) {
  const ent = await findById(id);
  Object.assign(ent, data);
  return await repo.save(ent);
}

async function remove(id: number) {
  const ent = await findById(id);
  return await repo.remove(ent);
}

// Departments
async function findAllDepartments() {
  return await deptRepo.find({ relations: ['municipalities'] });
}

async function findDepartmentById(id: number) {
  const d = await deptRepo.findOne({ where: { id }, relations: ['municipalities'] });
  if (!d) throw new NotFoundException('Department not found');
  return d;
}

async function createDepartment(data: Partial<Department>) {
  return await deptRepo.save(data);
}

async function updateDepartment(id: number, data: Partial<Department>) {
  const d = await findDepartmentById(id);
  Object.assign(d, data);
  return await deptRepo.save(d);
}

async function removeDepartment(id: number) {
  const d = await findDepartmentById(id);
  return await deptRepo.remove(d);
}

export default {
  findAll,
  findById,
  create,
  update,
  remove,
  findAllDepartments,
  findDepartmentById,
  createDepartment,
  updateDepartment,
  removeDepartment,
};

import { dataSource } from '../config/database';
import { Role } from '../entities/user.entity';
import { NotFoundException } from '../common/exceptions/httpException';

const roleRepository = dataSource.getRepository(Role);

async function findAll() {
  return await roleRepository.find();
}

async function findById(id: number) {
  const role = await roleRepository.findOne({ where: { id } });
  if (!role) throw new NotFoundException('Role not found');
  return role;
}

async function create(roleData: Partial<Role>) {
  return await roleRepository.save(roleData);
}

async function update(id: number, roleData: Partial<Role>) {
  const role = await findById(id);
  Object.assign(role, roleData);
  return await roleRepository.save(role);
}

async function remove(id: number) {
  const role = await findById(id);
  return await roleRepository.remove(role);
}

export default { findAll, findById, create, update, remove };

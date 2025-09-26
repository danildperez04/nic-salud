import { dataSource } from '../config/database';
import { User } from '../entities/user.entity';
import { NotFoundException } from 'common/exceptions/httpException';

const userRepository = dataSource.getRepository(User);

interface userData {
  id: number;
  username: string;
  email: string;
  password: string;
  roleId: number;
}

async function findAll() {
  const users = await userRepository.find();

  return users;
}

async function findOne({ username }: { username: string }) {
  const user = await userRepository.findOne({
    where: {
      username: username
    }
  });

  if (!user) throw new NotFoundException('User not found');

  return user;
}

async function create(userData: userData) {
  const user = await userRepository.save(userData);

  return user;
}

async function update({ username, userData }: {
  username: string;
  userData: Omit<userData, 'id' | 'roleId'>
}) {
  const userFound = await findOne({ username });

  Object.assign(userFound, userData);

  return await userRepository.save(userFound);;
}

async function remove({ username }: { username: string }) {
  const found = await findOne({ username });

  found.isActive = false;

  return await userRepository.save(found);
}

export default {
  findAll,
  findOne,
  create,
  update,
  remove
};
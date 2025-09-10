import { dataSource } from '../config/database'
import { User } from '../entities/user.entity';

const userRepository = dataSource.getRepository(User);

async function findAll() {
  const users = await userRepository.find();

  return users;
}

async function findOne() {

}

async function create() {
}

async function update() {
}

async function remove() {
}

export default {
  findAll,
  findOne,
  create,
  update,
  remove
}
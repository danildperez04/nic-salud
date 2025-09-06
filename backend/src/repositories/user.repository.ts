import { dataSource } from "../config/database"
import { User } from "../entities/user.entity";

async function findAll(){
  const userRepository = dataSource.getRepository(User);
  const users = await userRepository.find(); 

  return users;
}

export default {
  findAll
}
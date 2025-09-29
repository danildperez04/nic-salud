import { NotFoundException } from "../common/exceptions/httpException";
import { dataSource } from "../config/database";
import { Department } from "../entities/department.entity";

const departmentRepo = dataSource.getRepository(Department);

async function findAll() {
  const departments = await departmentRepo.find({ relations: ["municipalities"] });

  if (!departments) throw new NotFoundException('No se han encontrado departamentos');

  return departments;
}

export {
  findAll
}
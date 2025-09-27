import { NotFoundException } from "../common/exceptions/httpException";
import { dataSource } from "../config/database";
import { Department, Municipality } from "../entities/department.entity";

const departmentRepo = dataSource.getRepository(Department);

const municipalityRepo = dataSource.getRepository(Municipality);

async function findAllDepartments() {
  const departments = await departmentRepo.find({ relations: ["municipality"] });

  if (!departments) throw new NotFoundException('No se han encontrado departamentos');

  return departments;
}

async function findAll() {

}

async function findOne(id: number) {
  const municipality = await municipalityRepo.findOne({ where: { id } })

  if (!municipality) throw new NotFoundException(`No se ha encontrado un municipio para el id ${id}`);

  return municipality;
}

export {
  findAllDepartments,
  findOne
}
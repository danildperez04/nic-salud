import { Router } from 'express';
import { findAll, findOne, create, update, remove } from '../controllers/patient.controller';
import validateDto from '../middlewares/validate';
import { CreatePatientDto, UpdatePatientDto } from '../dtos/patient.dto';

const router = Router();

router.route('/')
  .get(findAll)
  .post(validateDto(CreatePatientDto), create);

router.route('/:id')
  .get(findOne)
  .put(validateDto(UpdatePatientDto), update)
  .delete(remove);

export default router;

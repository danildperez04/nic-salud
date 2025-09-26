import { Router } from 'express';
import { findAll, findOne, create, update, remove } from '../controllers/user.controller';
import validateDto from '../middlewares/validate';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

const router = Router();

router.route('/')
  .get(findAll)
  .post(validateDto(CreateUserDto), create);

router.route('/:username')
  .get(findOne)
  .put(validateDto(UpdateUserDto), update)
  .delete(remove);

export default router;

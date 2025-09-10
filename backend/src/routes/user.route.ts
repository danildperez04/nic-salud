import { Router } from 'express';
import { findAll, findOne, create, update, remove } from '../controllers/user.controller';

const router = Router();

router.route('/')
  .get(findAll)
  .post(create);

router.route('/:id')
  .get(findOne)
  .put(update)
  .delete(remove);

export default router;

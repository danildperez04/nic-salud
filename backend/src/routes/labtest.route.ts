import { Router } from 'express';
import * as labTestCtrl from '../controllers/labtest.controller';
import authenticate, { authorizeRoles } from '../middlewares/auth';

const router = Router();

router.get('/', labTestCtrl.findAll);
router.get('/:id', labTestCtrl.findOne);
router.post('/', authenticate, authorizeRoles('doctor','lab','admin'), labTestCtrl.create);
router.put('/:id', authenticate, authorizeRoles('doctor','lab','admin'), labTestCtrl.update);
router.delete('/:id', authenticate, authorizeRoles('admin'), labTestCtrl.remove);

export default router;

import { Router } from 'express';
import * as appCtrl from '../controllers/appointment.controller';
import authenticate, { authorizeRoles } from '../middlewares/auth';

const router = Router();

router.get('/', appCtrl.findAll);
router.get('/:id', appCtrl.findOne);
router.post('/', authenticate, authorizeRoles('doctor','admin'), appCtrl.create);
router.put('/:id', authenticate, authorizeRoles('doctor','admin'), appCtrl.update);
router.delete('/:id', authenticate, authorizeRoles('admin'), appCtrl.remove);

export default router;

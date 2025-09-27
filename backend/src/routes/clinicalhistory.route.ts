import { Router } from 'express';
import * as chCtrl from '../controllers/clinicalhistory.controller';
import authenticate, { authorizeRoles } from '../middlewares/auth';

const router = Router();

router.get('/', chCtrl.findAll);
router.get('/:id', chCtrl.findOne);
router.post('/', authenticate, authorizeRoles('doctor','admin'), chCtrl.create);
router.put('/:id', authenticate, authorizeRoles('doctor','admin'), chCtrl.update);
router.delete('/:id', authenticate, authorizeRoles('admin'), chCtrl.remove);

export default router;

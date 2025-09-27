import { Router } from 'express';
import * as treatmentCtrl from '../controllers/treatment.controller';
import authenticate, { authorizeRoles } from '../middlewares/auth';

const router = Router();

router.get('/', treatmentCtrl.findAll);
router.get('/:id', treatmentCtrl.findOne);
router.post('/', authenticate, authorizeRoles('doctor','admin'), treatmentCtrl.create);
router.put('/:id', authenticate, authorizeRoles('doctor','admin'), treatmentCtrl.update);
router.delete('/:id', authenticate, authorizeRoles('admin'), treatmentCtrl.remove);

// Medications
router.get('/medications', treatmentCtrl.listMedications);
router.get('/medications/:id', treatmentCtrl.getMedication);
router.post('/medications', authenticate, authorizeRoles('doctor','admin'), treatmentCtrl.createMedication);
router.put('/medications/:id', authenticate, authorizeRoles('doctor','admin'), treatmentCtrl.updateMedication);
router.delete('/medications/:id', authenticate, authorizeRoles('admin'), treatmentCtrl.removeMedication);

export default router;

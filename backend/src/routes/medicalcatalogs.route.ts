import { Router } from 'express';
import * as mcCtrl from '../controllers/medicalcatalogs.controller';
import authenticate, { authorizeRoles } from '../middlewares/auth';

const router = Router();

// Vaccines
router.get('/vaccines', mcCtrl.listVaccines);
router.get('/vaccines/:id', mcCtrl.getVaccine);
router.post('/vaccines', authenticate, authorizeRoles('admin'), mcCtrl.createVaccine);
router.put('/vaccines/:id', authenticate, authorizeRoles('admin'), mcCtrl.updateVaccine);
router.delete('/vaccines/:id', authenticate, authorizeRoles('admin'), mcCtrl.removeVaccine);

// Allergies
router.get('/allergies', mcCtrl.listAllergies);
router.get('/allergies/:id', mcCtrl.getAllergy);
router.post('/allergies', authenticate, authorizeRoles('admin'), mcCtrl.createAllergy);
router.put('/allergies/:id', authenticate, authorizeRoles('admin'), mcCtrl.updateAllergy);
router.delete('/allergies/:id', authenticate, authorizeRoles('admin'), mcCtrl.removeAllergy);

export default router;

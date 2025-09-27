import { Router } from 'express';
import * as docCtrl from '../controllers/doctor.controller';
import authenticate, { authorizeRoles } from '../middlewares/auth';

const router = Router();

// Doctors
router.get('/', docCtrl.listDoctors);
router.get('/:id', docCtrl.getDoctor);
router.post('/', authenticate, authorizeRoles('admin'), docCtrl.createDoctor);
router.put('/:id', authenticate, authorizeRoles('admin'), docCtrl.updateDoctor);
router.delete('/:id', authenticate, authorizeRoles('admin'), docCtrl.removeDoctor);

// Departments
router.get('/departments', docCtrl.listDepartments);
router.get('/departments/:id', docCtrl.getDepartment);
router.post('/departments', authenticate, authorizeRoles('admin'), docCtrl.createDepartment);
router.put('/departments/:id', authenticate, authorizeRoles('admin'), docCtrl.updateDepartment);
router.delete('/departments/:id', authenticate, authorizeRoles('admin'), docCtrl.removeDepartment);

export default router;

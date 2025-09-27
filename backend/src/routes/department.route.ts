import { Router } from 'express';
import * as departmentController from '../controllers/department.controller';

const router = Router();

// GET /departments -> returns departments with municipalities
router.get('/', departmentController.getAllDepartments);

export default router;

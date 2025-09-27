import { Router } from 'express';
import * as municipalityController from '../controllers/municipality.controller';

const router = Router();

// Public endpoint to fetch municipalities (with their department)
router.get('/', municipalityController.getAll);

export default router;

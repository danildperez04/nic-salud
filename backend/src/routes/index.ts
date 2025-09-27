import { Router } from 'express';
import userRouter from './user.route';
import authRouter from './auth.route';
import patientRouter from './patient.route';
import treatmentRouter from './treatment.route';
import labTestRouter from './labtest.route';
import medicalCatalogsRouter from './medicalcatalogs.route';
import clinicalHistoryRouter from './clinicalhistory.route';
import appointmentRouter from './appointment.route';
import doctorRouter from './doctor.route';
import municipalityRouter from './municipality.route';
import departmentRouter from './department.route';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/patients', patientRouter);
router.use('/doctors', doctorRouter);
router.use('/municipalities', municipalityRouter);
router.use('/departments', departmentRouter);
router.use('/treatments', treatmentRouter);
router.use('/appointments', appointmentRouter);
router.use('/lab-tests', labTestRouter);
router.use('/medical-catalogs', medicalCatalogsRouter);
router.use('/clinical-histories', clinicalHistoryRouter);

export default router;

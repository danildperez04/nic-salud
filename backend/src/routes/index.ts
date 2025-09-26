import { Router } from 'express';
import userRouter from './user.route';
import authRouter from './auth.route';
import patientRouter from './patient.route';

const router = Router();

router.get('/', (req, res) => {
  res.send('<h1>API is working</h1>');
});

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/patients', patientRouter);
// router.use('/users', doctorRouter);
// router.use('/users', patientRouter);

export default router;

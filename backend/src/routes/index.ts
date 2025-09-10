import { Router } from 'express';
import userRouter from './user.route';

const router = Router();

router.get('/', (req, res) => {
  res.send('<h1>API is working</h1>');
});

router.use('/users', userRouter);
// router.use('/users', doctorRouter);
// router.use('/users', patientRouter);

export default router;

import { Router } from 'express';
import { login, register, activate } from '../controllers/auth.controller';
import validateDto from '../middlewares/validate';
import { CreateUserDto } from '../dtos/user.dto';
import LoginDto from '../dtos/auth.dto';

const router = Router();

router.post('/login', validateDto(LoginDto), login);
router.post('/register', validateDto(CreateUserDto), register);
router.post('/activate', activate);

export default router;

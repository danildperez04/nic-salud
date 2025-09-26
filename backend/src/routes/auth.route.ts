import { Router } from 'express';
import { login, register } from '../controllers/auth.controller';
import validateDto from '../middlewares/validate';
import { CreateUserDto } from '../dtos/user.dto';

const router = Router();

router.post('/login', login);
router.post('/register', validateDto(CreateUserDto), register);

export default router;

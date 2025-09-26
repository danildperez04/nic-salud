import { Request, Response, NextFunction } from 'express';
import userRepository from '../repositories/user.repository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UnauthorizedException, BadRequestException } from '../common/exceptions/httpException';
import { config } from '../config/config';

async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new UnauthorizedException('Username and password are required');
    }

    const user = await userRepository.findByUsername(username);

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // remove sensitive fields before returning
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _pw, twoFACode, twoFACodeExpiresAt, ...safeUser } = user as any;

    // sign JWT
    const secret = config.auth?.jwtSecret;
    const expiresIn = config.auth?.jwtExpiresIn || '1h';

    if (!secret) {
      throw new Error('JWT_SECRET not configured');
    }

    const token = jwt.sign({ id: user.id, username: user.username }, secret as jwt.Secret, { expiresIn } as jwt.SignOptions);

    res.json({ user: safeUser, token });
  } catch (err) {
    next(err);
  }
}

async function register(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, email, password, roleId } = req.body;

    if (!username || !email || !password) {
      throw new BadRequestException('username, email and password are required');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userRepository.create({
      username,
      email,
      password: hashedPassword,
      roleId: roleId ?? 1
    });

    const secret = config.auth?.jwtSecret;
    const expiresIn = config.auth?.jwtExpiresIn || '1h';

    if (!secret) {
      throw new Error('JWT_SECRET not configured');
    }

    const token = jwt.sign({ id: user.id, username: user.username }, secret as jwt.Secret, { expiresIn } as jwt.SignOptions);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _pw, twoFACode, twoFACodeExpiresAt, ...safeUser } = user as any;

    res.status(201).json({ user: safeUser, token });
  } catch (err) {
    next(err);
  }
}

export { login, register };
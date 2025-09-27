import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import userRepository from '../repositories/user.repository';
import { config } from '../config/config';
import { UnauthorizedException, ForbiddenException } from '../common/exceptions/httpException';

export interface AuthRequest extends Request {
  user?: any;
}

export async function authenticate(req: AuthRequest, _res: Response, next: NextFunction) {
  try {
    const header = req.headers.authorization;

    if (!header || !header.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid Authorization header');
    }

    const token = header.split(' ')[1];
    const secret = config.auth?.jwtSecret;

    if (!secret) throw new Error('JWT secret not configured');

    const payload: any = jwt.verify(token, secret as jwt.Secret) as any;

    if (!payload || !payload.id) {
      throw new UnauthorizedException('Invalid token payload');
    }

    const user = await userRepository.findByUsername(payload.username);

    if (!user) throw new UnauthorizedException('User not found');

    req.user = user;

    next();
  } catch (err) {
    next(err);
  }
}

export function authorizeRoles(...allowedRoles: string[]) {
  return (req: AuthRequest, _res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user) return next(new UnauthorizedException('Not authenticated'));

    const userRole = (user.role && user.role.name) || (user.roleId ? String(user.roleId) : null);

    if (!userRole) return next(new ForbiddenException('Role not found for user'));

    if (!allowedRoles.includes(userRole)) {
      return next(new ForbiddenException('Insufficient permissions'));
    }

    next();
  };
}

export default authenticate;

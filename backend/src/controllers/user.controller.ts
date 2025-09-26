import { Request, Response, NextFunction } from 'express';
import userRepository from '../repositories/user.repository';
import bcrypt from 'bcrypt';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

// Get all users
async function findAll(req: Request, res: Response) {
  try {
    const users = await userRepository.findAll();

    if (!users || users.length === 0) {
      // Let middleware handle NotFound via throwing an exception
      const e: any = new Error('No users found');
      e.status = 404;
      throw e;
    }

    res.json(users);
  } catch (err) {
    // Delegate to error handler
    (req as any).next?.(err);
  }
}

async function findOne(req: Request, res: Response) {
  try {
  const username = req.params.username;

    const user = await userRepository.findByUsername(username);

    res.json(user);
  } catch (err) {
    (req as any).next?.(err);
  }
}

async function create(req: Request, res: Response) {
  try {
    const dto = req.body as CreateUserDto;

    const hashedPassword = await hashPassword(dto.password as string);

    const user = await userRepository.create({
      username: dto.username as string,
      email: dto.email as string,
      password: hashedPassword,
      roleId: (dto as any).roleId ?? 1
    });

    res.status(201).json(user);
  } catch (err) {
    (req as any).next?.(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
  const username = req.params.username;
    const dto = req.body as UpdateUserDto;

    // Build only defined fields to avoid overwriting with undefined
    const userData: any = {};

    if (typeof dto.username !== 'undefined') userData.username = dto.username;
    if (typeof dto.email !== 'undefined') userData.email = dto.email;
    if (typeof dto.password !== 'undefined') {
      userData.password = await hashPassword(dto.password as string);
    }

    const updated = await userRepository.update({ username, userData });

    res.json(updated);
  } catch (err) {
    next(err);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
  const username = req.params.username;

    const removed = await userRepository.remove({ username });

    res.json(removed);
  } catch (err) {
    next(err);
  }
}

async function hashPassword(input: string) {
  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(input, salt);

  return hash;
}

export {
  findAll,
  findOne,
  create,
  update,
  remove
};
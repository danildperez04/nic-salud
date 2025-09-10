import { Request, Response } from 'express';
import userRepository from '../repositories/user.repository';

// Get all users
async function findAll(req: Request, res: Response) {
  const users = await userRepository.findAll();

  if (!users || users.length === 0) {
    return res.status(404).json({ message: 'No users found' });
  }

  res.json(users);
}

async function findOne(req: Request, res: Response) {
  res.send('Get one user');
}

async function create(req: Request, res: Response) {
  res.send('Create user')
}

async function update(req: Request, res: Response) {
  res.send('Update user')
}

async function remove(req: Request, res: Response) {
  res.send('Remove user')
}

export {
  findAll,
  findOne,
  create,
  update,
  remove
}
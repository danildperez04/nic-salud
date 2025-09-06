import { Request, Response } from "express";
import userRepository from "../repositories/user.repository";

// Get all users
async function getAllUsers(req: Request, res: Response){
  const users = await userRepository.findAll();

  if (!users || users.length === 0) {
    return res.status(404).json({ message: 'No users found' });
  }

  res.json(users);
}

export {
  getAllUsers
}
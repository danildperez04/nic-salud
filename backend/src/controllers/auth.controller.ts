import { Request, Response } from 'express';

async function login(req: Request, res: Response) {
  res.send('Login user');
}

export {
  login
}
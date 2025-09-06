import { Request, Response } from "express";

function login(req: Request, res: Response){
  res.send('Login user');
}
import { Router } from "express";
import { getAllUsers } from "../controllers/user.controller";

const router = Router();

router.route('/')
  .get(getAllUsers)
  // .post();

router.route('/:id')
  // .get()
  // .put()
  // .delete();

export default router;

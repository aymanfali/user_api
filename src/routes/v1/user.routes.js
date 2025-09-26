import { Router } from "express";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../../controllers/user.controller.js";
import {
  createUserValidator,
  updateUserValidator,
  userIdValidator,
} from "../../validators/user.validator.js";

const router = Router();

router.post("/users/", createUserValidator, createUser);
router.get("/users/", getUsers);
router.get("/users/:id", userIdValidator, getUser);
router.put("/users/:id", updateUserValidator, updateUser);
router.delete("/users/:id", userIdValidator, deleteUser);

export default router;

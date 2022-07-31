import { Router } from "express";
import { getUsers, newUser, getUser, updateUser, deleteUser } from "../controllers/user.controller";

const router = Router();

router.route('/user')
	.get(getUsers)
	.post(newUser);

router.route('/user/:id')
	.get(getUser)
	.put(updateUser)
	.delete(deleteUser);

export default router;

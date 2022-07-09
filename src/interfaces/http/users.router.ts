import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router()

router.get('/users/', new ListUsersController().run)
router.post('/users/', new CreateUserController().run)

export default router
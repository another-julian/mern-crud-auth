import { Router } from "express";
import {
  login,
  register,
  logout,
  findUser,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerScheme, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerScheme), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/auth/verify", authRequired, findUser);
export default router;

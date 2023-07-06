import express from "express";
import { getAllUsers, register } from "../controllers/userController.js";
import { login,logout } from "../controllers/userController.js";


const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);


router.route("/logout").get(logout);


router.route("/admin/users").get(getAllUsers);



export default router;

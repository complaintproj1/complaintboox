import express from "express";
import { getAllcomplaint } from "../controllers/complaintController.js";

const router = express.Router();

router.route("/complaint").get(getAllcomplaint);


export default router;

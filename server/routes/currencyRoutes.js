import express from "express";
import { convertCurrency } from "../controllers/currencyController.js";

const router = express.Router();
router.get("/convert",convertCurrency);
export default router;
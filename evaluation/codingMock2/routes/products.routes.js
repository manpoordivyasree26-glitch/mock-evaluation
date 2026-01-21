import { Router } from "express";
import { getProducts, addProducts } from "../controller/products.controller.js";

const router = Router();

router.get("/", getProducts);
router.post("/", addProducts);

export default router;

import { Router } from "express";
import {
  createOrder,
  getAllOrders,
  cancelOrder,
  changeOrderStatus
} from "../controller/orders.controller.js";

const router = Router();

router.post("/", createOrder);
router.get("/", getAllOrders);
router.delete("/:orderId", cancelOrder);
router.patch("/change-status/:orderId", changeOrderStatus);

export default router;

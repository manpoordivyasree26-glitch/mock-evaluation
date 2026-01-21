import { Router } from "express";
import {
  getAllOrdersAnalytics,
  getCancelledOrders,
  getShippedOrders,
  getTotalRevenueByProduct,
  getAllRevenue
} from "../controllers/analytics.controller.js";

const router = Router();

router.get("/allorders", getAllOrdersAnalytics);
router.get("/cancelled-orders", getCancelledOrders);
router.get("/shipped", getShippedOrders);
router.get("/total-revenue/:productId", getTotalRevenueByProduct);
router.get("/alltotalrevenue", getAllRevenue);

export default router;

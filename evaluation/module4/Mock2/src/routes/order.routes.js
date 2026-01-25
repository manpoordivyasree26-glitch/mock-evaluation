import express from "express";

import {
    createOrder,
    updateOrder,
    deleteOrder
} from "../controllers/order.controller.js"
import {validateCustomer} from "../validations/customer.controller.js";
const router=express.Router()
router.post("/add-order",createOrder);
router.put("/update-order/:orderId",updateOrder);
router.delete("/delete-order/:orderId",deleteOrder)
export default router;
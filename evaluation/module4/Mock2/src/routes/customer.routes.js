import express from "express";
import {registerCustomer,deleteCustomer} from "../controllers/customer.controller.js";
import {validateCustomer} from "../validations/customer.controller.js";

const router=express.Router();

router.post("register-customer",registerCustomer);
router.delete("/delete-customer/:customerId",deleteCustomer);

export default router;
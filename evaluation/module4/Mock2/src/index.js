import express from "express";
import dotenv from "dotenv";
import customerRoutes from "./routes/customer.routes.js";
import orderRoutes from "./routes/order.routes.js";

dotenv.config();
const app=express();
app.use(express.json());

app.use("/api/customer",customerRoutes);
app.use("/api/orders",orderRoutes)

app.listen(3000,()=>{
    console.log("server has been started on the 3000")
})
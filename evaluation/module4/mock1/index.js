import express from "express";
import productsRoutes from "./routers/products.routes.js";
import ordersRoutes from "./Routers/orders.routes.js";
// import analyticsRoutes from "./Routers/analytics.routes";

const app=express();
app.use(express.json());

app.use("/products",productsRoutes);
app.use("/orders",ordersRoutes);
// app.use("/analytics",analyticsRouter);

app.listen(3000,()=>{
    console.log("server running on 3000")
})
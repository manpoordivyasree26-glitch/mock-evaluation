import express from "express"
import analyticsRoutes from "./routes/analytics.routes.js";
import ordersRouter from "./routes/orders.routes.js";
import productsRouter from "./routes/products.routes.js"

const app=express;
app.use(express.json())

app.use("./products",productsRouter)
app.use("./orders",ordersRouter)
app.use("./analytics",analyticsRoutes)

app.listen(3000,()=>{
    ("server is running on 3000")
})
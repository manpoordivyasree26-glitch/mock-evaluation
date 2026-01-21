import express from "express"
import analyticsRoutes from "./routes/analytics.routes";
import ordersRouter from "./routes/orders.routes";
import productsRouter from "./routes/products.routes"

const app=express;
app.use(express.json())

app.use("./products",productsRouter)
app.use("./orders",ordersRouter)
app.use("./analytics",analyticsRoutes)

app.listen(3000,()=>{
    ("server is running on 3000")
})
import { Router } from "express";
import { readDB, writeDB } from "./db.js";

const router = Router();

router.post("/", (req, res) => {
  const { productId, quantity } = req.body;
  const db = readDB();

  const product = db.products.find(p => p.id == productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  if (product.stock === 0) return res.status(400).json({ message: "Out of stock" });

  if (quantity > product.stock) return res.status(400).json({ message: "Insufficient stock" });

  const totalAmount = product.price * quantity;
  const newOrder = {
    id: db.orders.length + 1,
    productId,
    quantity,
    totalAmount,
    status: "placed",
    createdAt: new Date().toISOString().split("T")[0]
  };

  db.orders.push(newOrder);
  product.stock -= quantity;
  writeDB(db);

  return res.status(201).json(newOrder);
});


router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.orders);
});


router.delete("/:orderId", (req, res) => {
  const { orderId } = req.params;
  const db = readDB();

  const order = db.orders.find(o => o.id == orderId);
  if (!order) return res.status(404).json({ message: "Order not found" });

  if (order.status === "cancelled") {
    return res.status(400).json({ message: "Order already cancelled" });
  }

  const today = new Date().toISOString().split("T")[0];
  if (order.createdAt !== today) {
    return res.status(400).json({ message: "Cancellation only allowed on same day" });
  }

  order.status = "cancelled";

  const product = db.products.find(p => p.id == order.productId);
  product.stock += order.quantity;

  writeDB(db);
  return res.json({ message: "Order cancelled successfully" });
});


router.patch("/change-status/:orderId", (req, res) => {
  const { orderId } = req.params;
  const db = readDB();

  const order = db.orders.find(o => o.id == orderId);
  if (!order) return res.status(404).json({ message: "Order not found" });

  if (order.status === "cancelled" || order.status === "delivered") {
    return res.status(400).json({ message: "Status cannot be changed" });
  }

  const flow = ["placed", "shipped", "delivered"];
  const index = flow.indexOf(order.status);

  order.status = flow[index + 1];
  writeDB(db);

  return res.json(order);
});

export default router;

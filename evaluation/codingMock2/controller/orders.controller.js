import { readDB, writeDB } from "../utils/db.js";

export const createOrder = (req, res) => {
  const { productId, quantity } = req.body;
  const db = readDB();

  const product = db.products.find(p => p.id == productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  if (product.stock === 0 || quantity > product.stock) {
    return res.status(400).json({ message: "Insufficient stock" });
  }

  const totalAmount = product.price * quantity;
  product.stock -= quantity;

  const newOrder = {
    id: Date.now(),
    productId,
    quantity,
    totalAmount,
    status: "placed",
    createdAt: new Date().toISOString().split("T")[0]
  };

  db.orders.push(newOrder);
  writeDB(db);
  res.status(201).json(newOrder);
};

export const getAllOrders = (req, res) => {
  const db = readDB();
  res.status(200).json(db.orders);
};

export const cancelOrder = (req, res) => {
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
  res.status(200).json({ message: "Order cancelled successfully" });
};

export const changeOrderStatus = (req, res) => {
  const { orderId } = req.params;
  const db = readDB();

  const order = db.orders.find(o => o.id == orderId);
  if (!order) return res.status(404).json({ message: "Order not found" });

  if (order.status === "cancelled" || order.status === "delivered") {
    return res.status(400).json({ message: "Cannot change this order status" });
  }

  const statusFlow = ["placed", "shipped", "delivered"];
  const idx = statusFlow.indexOf(order.status);

  order.status = statusFlow[idx + 1];
  writeDB(db);
  res.status(200).json(order);
};

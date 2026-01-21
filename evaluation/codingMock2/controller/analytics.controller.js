import { readDB } from "../utils/db.js";

export const getAllOrdersAnalytics = (req, res) => {
  const db = readDB();
  const orders = db.orders.map(o => o);
  res.status(200).json({ count: orders.length, orders });
};

export const getCancelledOrders = (req, res) => {
  const db = readDB();
  const cancelled = db.orders.filter(o => o.status === "cancelled");
  res.status(200).json({ count: cancelled.length, orders: cancelled });
};

export const getShippedOrders = (req, res) => {
  const db = readDB();
  const shipped = db.orders.filter(o => o.status === "shipped");
  res.status(200).json({ count: shipped.length, orders: shipped });
};

export const getTotalRevenueByProduct = (req, res) => {
  const { productId } = req.params;
  const db = readDB();
  const filtered = db.orders.filter(o => o.productId == productId && o.status !== "cancelled");
  const totalRevenue = filtered.reduce((acc, curr) => acc + curr.totalAmount, 0);
  res.status(200).json({ productId, totalRevenue });
};

export const getAllRevenue = (req, res) => {
  const db = readDB();
  const valid = db.orders.filter(o => o.status !== "cancelled");
  const totalRevenue = valid.reduce((acc, curr) => acc + curr.totalAmount, 0);
  res.status(200).json({ totalRevenue });
};

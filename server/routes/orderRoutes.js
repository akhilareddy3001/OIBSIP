const express = require("express");
const verifyFirebaseToken = require("../middleware/authMiddleware");

const {
    createOrder,
    getUserOrders,
    getOrderById,
    updateOrderStatus,
    getAllOrders,
} = require("../controllers/orderController");

const router = express.Router();

// Create new order
router.post("/", verifyFirebaseToken, createOrder);
// Get orders for a particular user
router.get("/my-orders", verifyFirebaseToken, getUserOrders);
router.get("/:id", getOrderById);
router.patch("/:id/status", updateOrderStatus);
router.get("/", getAllOrders);

module.exports = router;
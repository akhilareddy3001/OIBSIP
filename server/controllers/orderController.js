const Order = require("../models/Order");


// ==========================================
// CREATE NEW ORDER
// ==========================================

const createOrder = async (req, res) => {
    try {
        const {
            items,
            address,
            paymentMethod,
            subtotal,
            deliveryFee,
            gst,
            total,
        } = req.body;

        // Get email from verified Firebase token
        const userEmail = req.user.email;

        const newOrder = new Order({
            userEmail,
            items,
            address,
            paymentMethod,
            subtotal,
            deliveryFee,
            gst,
            total,
            status: "Preparing",
        });

        const savedOrder = await newOrder.save();

        res.status(201).json({
            message: "Order placed successfully",
            order: savedOrder,
        });

    } catch (error) {

        console.error(
            "Create Order Error:",
            error
        );

        res.status(500).json({
            message: "Failed to place order",
            error: error.message,
        });
    }
};


// ==========================================
// GET LOGGED-IN USER ORDERS
// ==========================================

const getUserOrders = async (req, res) => {
    try {
        console.log("========== GET MY ORDERS ==========");

        console.log(
            "Firebase user exists:",
            !!req.user
        );

        console.log(
            "Firebase email exists:",
            !!req.user?.email
        );

        const userEmail = req.user?.email;

        if (!userEmail) {
            return res.status(400).json({
                message: "Firebase user email not found",
            });
        }

        console.log("Searching orders for authenticated user...");

        const orders = await Order.find({
            userEmail: userEmail,
        }).sort({
            createdAt: -1,
        });

        console.log(
            "Orders found:",
            orders.length
        );

        return res.status(200).json(orders);

    } catch (error) {

        console.error(
            "GET USER ORDERS ERROR:"
        );

        console.error(error);

        return res.status(500).json({
            message: "Failed to get orders",
            error: error.message,
        });
    }
};

// ==========================================
// GET SINGLE ORDER
// ==========================================

const getOrderById = async (req, res) => {
    try {

        const order = await Order.findById(
            req.params.id
        );

        if (!order) {
            return res.status(404).json({
                message: "Order not found",
            });
        }

        res.status(200).json(order);

    } catch (error) {

        console.error(
            "Get Order By ID Error:",
            error
        );

        res.status(500).json({
            message: "Failed to get order",
            error: error.message,
        });
    }
};


// ==========================================
// UPDATE ORDER STATUS
// ==========================================

const updateOrderStatus = async (req, res) => {
    try {

        const { status } = req.body;

        const allowedStatuses = [
            "Preparing",
            "Out for Delivery",
            "Delivered",
            "Cancelled",
        ];

        if (!allowedStatuses.includes(status)) {

            return res.status(400).json({
                message: "Invalid order status",
            });

        }

        const order =
            await Order.findByIdAndUpdate(
                req.params.id,
                { status },
                { new: true }
            );

        if (!order) {

            return res.status(404).json({
                message: "Order not found",
            });

        }

        res.status(200).json({
            message:
                "Order status updated successfully",
            order,
        });

    } catch (error) {

        console.error(
            "Update Order Status Error:",
            error
        );

        res.status(500).json({
            message:
                "Failed to update order status",
            error: error.message,
        });
    }
};


// ==========================================
// GET ALL ORDERS
// ==========================================

const getAllOrders = async (req, res) => {
    try {

        const orders = await Order.find().sort({
            createdAt: -1,
        });

        res.status(200).json(orders);

    } catch (error) {

        console.error(
            "Get All Orders Error:",
            error
        );

        res.status(500).json({
            message: "Failed to get all orders",
            error: error.message,
        });
    }
};


// ==========================================
// EXPORT
// ==========================================

module.exports = {
    createOrder,
    getUserOrders,
    getOrderById,
    updateOrderStatus,
    getAllOrders,
};
const express = require("express");
const { createOrder, getOrderByEmail } = require("./order.controller");
const router = express.Router();

// create order
router.post("/", createOrder);

// get orders by email
router.get("/email/:email", getOrderByEmail);

module.exports = router;

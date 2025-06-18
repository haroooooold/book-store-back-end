const Order = require("./order.model");

const createOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (error) {
    console.error("Error creating order", error);
    res.status(500).send({ message: "Failed to create order" });
  }
};

const getOrderByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email }).sort({ createdAt: -1 });
    if (!orders) {
      res.status(404).send({ message: "Orders not found!" });
    }
    res.status(200).send(orders);
  } catch (error) {
    console.error("Error fetching orders", error);
    res.status(500).send({ message: "Failed to fetch orders" });
  }
};

module.exports = {
  createOrder,
  getOrderByEmail,
};

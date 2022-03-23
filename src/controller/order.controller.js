const Order = require("../model/Order");

const getUserOrders = async (req, res) => {
  const userId = req.query.userId;
  console.log(userId);
  const response = await Order.find({ userId: userId });
  res.status(200).json({ success: true, data: response });
};
exports.getUserOrders = getUserOrders;

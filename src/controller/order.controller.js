const Order = require("../model/Order");

const getUserOrderHistory = async (req, res) => {
  const userEmail = req.params.email;
  try {
    if (userEmail === undefined) {
      return res
        .status(400)
        .json({ message: "User Email not defined", success: false });
    }

    const orderHistory = await Order.find({ email: userEmail });

    if (orderHistory.length == 0) {
      return res
        .status(404)
        .send({ message: "No Orders found", success: false });
    }
    return res.status(200).send({ success: true, data: orderHistory });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

exports.getUserOrderHistory = getUserOrderHistory;

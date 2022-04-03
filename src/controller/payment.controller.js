/** @author Prit THakkar (B00890731) */
const Order = require("../model/Order");
const Payment = require("../model/Payment");
const uuid = require("uuid");


/**
 * 
 * 
 * @param {*} req - the http request received
 * @param {*} res - the http response to be sent
 * for adding a payment method for a user
 */
const addPaymentMethod = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    console.log(payment);
    const result = await payment.save();
    res
      .status(200)
      .send({ success: true, data: result, message: "Record Added" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
const getPayments = async (req, res) => {
  try {
    res
      .status(200)
      .json({
        success: true,
        message: "Data Retreived",
        data: await Payment.find(),
      });
  } catch (error) {
    console.log(error);
  }
};

/**
 * 
 * @param {*} req - the http request received
 * @param {*} res - the http response to be sent
 * for editing a payment method for a user
 */
const editPaymentMethod = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    delete payment._id;
    const updatedResult = await Payment.updateOne(
      { _id: req.body._id },
      payment,
      { upsert: true }
    );
    console.log(updatedResult);
    res
      .status(200)
      .json({
        success: updatedResult.acknowledged,
        message: "Card Updated",
        count: updatedResult.modifiedCount,
      });
  } catch (error) {
    res.status(500).json({ success: false, data: error.message });
  }
};

/**
 * 
 * @param {*} req - the http request received
 * @param {*} res - the http response to be sent
 * for deleting a payment method for a user
 */
const deletePaymentMethod = async (req, res) => {
  try {
    const payment = await Payment.deleteOne({
      cardNumber: req.body.cardNumber,
    });
    res
      .status(200)
      .json({
        success: payment.acknowledged,
        message: "Deleted entry",
        count: payment.count,
      });
  } catch (error) {
    console.log(error);
    res.send(500).json({ success: false, message: error.message });
  }
};


/**
 * -- broken right now --
 * @param {*} req - the http request received
 * @param {*} res - the http response to be sent
 * to make a purchase
 */
const makePayment = async (req, res) => {
  try {
    const paymentDetails = req.body.payment;

    const allOrders = req.body.orders;
    let orders = [];
    for (const order in allOrders) {
      console.log(allOrders[order].bookName);
      let newOrder = new Order({
        _id: uuid.v4(),
        bookName: allOrders[order].bookName,
        bookId: allOrders[order].bookId,
        price: allOrders[order].price,
        email: allOrders[order].userId,
        amount: allOrders[order].amount,
        purchaseDate: String(new Date()),
      });
      const responseForOrder = await newOrder.save();
      orders.push(newOrder);
    }
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
  }
};


exports.addPaymentMethod = addPaymentMethod;
exports.getPayments = getPayments;
exports.deletePaymentMethod = deletePaymentMethod;
exports.editPaymentMethod = editPaymentMethod;
exports.makePayment = makePayment;

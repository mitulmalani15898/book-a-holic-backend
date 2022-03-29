/** @author Prit Thakkar (B00890731) */

/*
The payment model is used to transfer the data received from client and the data sent back from the
server, dealing with the payment method details of a user.
*/

const mongoose = require("mongoose");
const model = mongoose.model;
const Schema = mongoose.Schema;
const Payment = new Schema({
  type: {
    type: String,
    enum: ["visa", "mastercard"],
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  securityCode: {
    type: Number,
    maxlength: 3,
  },
  expiry: {
    type: String,
  },
});
module.exports = model("Payment", Payment);

const express = require("express");
const paymentServices = require("../controller/payment.controller");
const router = express.Router();

/* API DESIGN 
  To be incorporated in the user collection in mongo db
  eg {
    "id":"",
    "name":"",
    "email":"",
    .
    .
    .
    "payment": [
      {
        ...
      }
    ]

  }

  Payments Card Information
  /api/payments (post) with amount and order details to make a payment
  /api/payments/add (post) to add a payment method
  /api/payments (get) to retrieve payment information
  /api/payments (delete) to delete a payment request
  /api/payments (put) to modify a payment request
*/

router.get("/api/payments", paymentServices.getPayments);
router.post("/api/payments/add", paymentServices.addPaymentMethod);
router.delete("/api/payments", paymentServices.deletePaymentMethod);
router.put("/api/payments", paymentServices.editPaymentMethod);
router.post("/api/payments", paymentServices.makePayment);
/*


router.post("/",);*/

module.exports = router;

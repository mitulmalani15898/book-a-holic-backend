const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const mongoose = require("./utils/mongo.connection");
const paymentRoutes = require("./routes/payment.routes");
const orderRoutes = require("./routes/order.routes");
const bookRoutes = require("./routes/book.routes");
const userRoutes = require("./routes/user.routes");
const app = express();

// accepting incoming json requests
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(userRoutes)
app.use(paymentRoutes);
app.use(orderRoutes);
app.use(bookRoutes);


module.exports = app;

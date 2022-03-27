const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const mongoose = require("./utils/mongo.connection");
const paymentRoutes = require("./routes/payment.routes");
const orderRoutes = require("./routes/order.routes");
const bookRoutes = require("./routes/book.routes");
const reviewRoutes = require("./routes/review.routes")
const userRoutes = require("./routes/user.routes");
const app = express();

// accepting incoming json requests
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(userRoutes);
app.use(paymentRoutes);
app.use(orderRoutes);
app.use(bookRoutes);
app.use(reviewRoutes);

module.exports = app;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("multer");
const path = require("path");

require("./src/utils/mongo.connection");
const paymentRoutes = require("./src/routes/payment.routes");
const cartRoutes = require("./src/routes/cart.routes");
const orderRoutes = require("./src/routes/order.routes");
const bookRoutes = require("./src/routes/book.routes");
const userRoutess = require("./src/routes/routes");
const profileRoutes = require("./src/routes/user.profile.routes");
const reviewRoutes = require("./src/routes/review.routes");
const userRoutes = require("./src/routes/user.routes");
//ns
const userDashBoardRoute = require("./src/routes/userdashboard.routes");
const app = express();

// accepting incoming json requests
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

// enable cors
app.use(cors());

app.use((err, req, res, next) => {
  try {
    if (err) {
      console.log("Path: ", req.path);
      throw err;
    }
    next();
  } catch (error) {
    return res.status(500).send({ error });
  }
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Book-a-holic!");
});

app.use("/static", express.static("static"));
app.use(paymentRoutes);
app.use(cartRoutes);
app.use(orderRoutes);
app.use(bookRoutes);
app.use(profileRoutes);
app.use(reviewRoutes);
app.use(userRoutes);
app.use(userRoutess);
app.use(userDashBoardRoute);
app.use("*", (req, res) => {
  res.status("404").send("Route not found.");
});

module.exports = app;

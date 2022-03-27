const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("multer");

require("./src/utils/mongo.connection");
const paymentRoutes = require("./src/routes/payment.routes");
const orderRoutes = require("./src/routes/order.routes");
const bookRoutes = require("./src/routes/book.routes");

const app = express();

// accepting incoming json requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

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

app.use('/static', express.static('static'))
app.use(paymentRoutes);
app.use(orderRoutes);
app.use(bookRoutes);

app.use("*", (req, res) => {
  res.status("404").send("Route not found.");
});


module.exports = app;

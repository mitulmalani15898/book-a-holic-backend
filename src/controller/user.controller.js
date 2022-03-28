/**
 * File: user.controller.js
 * Author: Abhinav Rawat (B00895691)
 * File Purpose: Contains controller logic for all user APIs.
 */

const jwt = require("jsonwebtoken");
const user = require("../model/User");
const nodemailer = require("nodemailer");
const privateKey = "09f26e402586e2faa8da4c98a35f1b20d6b033c60";

require("dotenv").config();

const addUser = async (req, res) => {
  try {
    const createUser = new user(req.body);
    const userFirstName = createUser.firstName;
    const userLastName = createUser.lastName;
    const userEmail = createUser.email.toLowerCase();
    const userPassword = createUser.password;
    const oldUser = await user.findOne({ email: userEmail });
    if (oldUser) {
      return res
        .status(409)
        .send({ success: true, message: "user email exists!" });
    } else {
      const newUser = await user.create({
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        password: userPassword,
      });
      res.status(200).send({ success: true, message: "User Created!" });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const userData = new user(req.body);
    const userEmail = userData.email;
    const userPassword = userData.password;
    const response = await user.findOne({ email: userEmail });
    const fetchedPassword = response.password;
    if (userPassword === fetchedPassword) {
      var token = jwt.sign({ email: userEmail }, privateKey, {
        expiresIn: "1h",
      });
      var auth = { token: token, email: userEmail };
      return res.status(200).send({
        success: true,
        data: auth,
        message: "User successfully logged in.",
      });
    }
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

const forgotUser = async (req, res) => {
  const userEmail = req.params.email;
  console.log(userEmail);
  if (user.findOne({ email: userEmail })) {
    try {
      console.log(userEmail);
      var token = jwt.sign({ email: userEmail }, privateKey, {
        expiresIn: "15m",
      });
      var auth = { token: token, email: userEmail };
      main(auth).catch(console.error);

      return res
        .status(200)
        .json({ success: true, message: "Password Retrieved successfully!" });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  }
};

async function recoveryUser(req, res) {
  const token = req.params.token;
  const userEmail = req.params.userEmail;
  const userPassword = req.body.password;
  if (!tokenValidator) return res.send({ success: false, message: "bitch" });
  try {
    const result = await user.findOneAndUpdate(
      { email: userEmail },
      { password: userPassword }
    );
    console.log(token);
    console.log(userPassword, userEmail);

    return res
      .status(200)
      .send({ success: true, message: "Password Updated!" });
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Couldn't update password." });
  }
}

function tokenValidator(token) {
  if (token == null) return false;

  return jwt.verify(token, privateKey).email === req.params.userEmail;
}

async function main(auth) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: "web.5709.group5@gmail.com", // sender address
    to: auth.email, // list of receivers
    subject: "Password change Request", // Subject line
    text: "Follow the link to change your password", // plain text body
    html: ` http://localhost:3000/recovery/${auth.token}/${auth.email}`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

exports.loginUser = loginUser;
exports.addUser = addUser;
exports.forgotUser = forgotUser;
exports.recoveryUser = recoveryUser;

const jwt = require("jsonwebtoken");
const user = require("../model/User");
const privateKey = "09f26e402586e2faa8da4c98a35f1b20d6b033c60";

const addUser = async (req, res) => {
  try {
    const createUser = new user(req.body);
    const userFirstName = createUser.firstName;
    const userLastName = createUser.lastName;
    const userEmail = createUser.email;
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
    //console.log(req.body);
    const response = await user.findOne({ email: userEmail });
    const fetchedPassword = response.password;
    if (userPassword === fetchedPassword) {
      var token = jwt.sign({ email: userEmail }, privateKey, {
        expiresIn: "1h",
      });
      var auth = { token: token, email: userEmail };
      //console.log(auth);
      res.status(200).send({
        success: true,
        data: auth,
        message: "User successfully logged in.",
      });
    }
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const forgotUser = async (req, res) => {
  const userEmail = req.query.email;
  try {
    const response = await User.find({ email: userEmail });
    const fetchedPassword = response.password;
    const fetchedEmail = response.email;
    res
      .status(200)
      .json({ success: true, message: "Password Retrieved successfully!" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

exports.loginUser = loginUser;
exports.addUser = addUser;
exports.forgotUser = forgotUser;

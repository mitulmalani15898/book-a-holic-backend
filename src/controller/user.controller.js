const user = require("../model/User");
const uuid = require("uuid");

const addUser = async (req, res) => {
  try {
    const createUser = new user(req.body);
    console.log(createUser);
    const result = await createUser.save();
    res
      .status(200)
      .send({ success: true, data: result, message: "User Created!" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const getUser = async (req, res) => {
    try{
    const userData = new user(req.body);
    const userEmail = userData.email;
    const userPassword = userData.password;
    const response = await user.findOne({ email: userEmail });
    const fetchedPassword= response.password;
    res
      .status(200)
      .send({ success: true, data: response });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
    // if(userPassword === fetchedPassword) {
    //     //user token
    // res.status(200).json({ success: true, message: "User successfully logged in." });
    // }
    // // else
    // //login page redirection
};

const forgotUser = async (req, res) => {
    const userEmail = req.query.email;
    try{
    const response = await User.find({ email: userEmail });
    const fetchedPassword = response.password;
    const fetchedEmail = response.email;
    res.status(200).json({ success: true, message: "Password Retrieved successfully!" });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message }); 
    }
};

exports.getUser = getUser;
exports.addUser = addUser;
exports.forgotUser = forgotUser;
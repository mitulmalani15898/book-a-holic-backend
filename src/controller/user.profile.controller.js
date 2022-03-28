/**
 * File: user.profile.controller.js
 * Author: Yashvi Gulati (B00900339)
 * File Purpose: Contains controller logic for all user profile APIs.
 */

const user = require("../model/User");
const url = require("url");

// GET - To display data of a specific user
const getUserProfile = async (req, res) => {
  try {
    const queryObject = url.parse(req.url, true).query;
    const email = queryObject.email;
    const userData = await user.findOne({ email: email });

    if (userData.length === 0) {
      return res
        .status(404)
        .send({ message: "No Orders found", success: false });
    }
    res.status(200).send({ success: true, data: userData });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

// POST - To upload profile picture
const uploadProfilePicture = async (req, res) => {
  try {
    const { email } = req.query;
    const { imageData } = req.body;

    if (!imageData || !email) {
      res.send({ error: "Please enter image data" });
    }

    const userData = await user.findOneAndUpdate(
      { email: email },
      { avatar: imageData }
    );

    res.send({ message: "Updated" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

// PUT - To edit user profile
const editGeneralProfile = async (req, res) => {
  try {
    const updatedUser = req.body;

    const updatedResult = await user.findOneAndUpdate(
      {
        email: updatedUser.email,
      },
      { ...updatedUser }
    );

    const userData = await user.findOne({
      email: updatedUser.email,
    });

    res.status(200).send({ success: true, data: userData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE - To delete user from the database
const deleteProfile = async (req, res) => {
  try {
    const { email } = req.query;
    const deleteResult = await user.deleteOne(email);
    res.status(200).send({ success: true, message: "User Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getUserProfile = getUserProfile;
exports.uploadProfilePicture = uploadProfilePicture;
exports.editGeneralProfile = editGeneralProfile;
exports.deleteProfile = deleteProfile;

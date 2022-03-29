/**
 * File: user.profile.routes.js
 * Author: Yashvi Gulati (B00900339)
 * File Purpose: Contains routes related to user profile
 */

const userProfileController = require("../controller/user.profile.controller");
const express = require("express");
const router = express.Router();

router.get("/api/user/profile", userProfileController.getUserProfile);
router.post(
  "/api/user/upload-profile",
  userProfileController.uploadProfilePicture
);
router.put(
  "/api/user/edit-general-profile",
  userProfileController.editGeneralProfile
);
router.delete("/api/user/delete", userProfileController.deleteProfile);

module.exports = router;

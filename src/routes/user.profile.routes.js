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

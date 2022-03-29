const express = require("express");
const router = express.Router();
const userdashboardcontroller=require("../controller/userdashboard.controller");
router.get("/api/userdashboard",userdashboardcontroller.getborrowed);
router.post("/api/userdashboard/add", userdashboardcontroller.addborrowedtMethod);
router.put("/api/userdashboard/addfavorites", userdashboardcontroller.editfavorites);
module.exports=router
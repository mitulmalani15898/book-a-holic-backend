const express = require("express");
const router = express.Router();
const userdashboardcontroller=require("../controller/userdashboard.controller");
router.get("/api/userdashboard/borrowedbooks/:id",userdashboardcontroller.getborrowed);
router.get("/api/userdashboard/favoritebooks/:id",userdashboardcontroller.favoritebooks);
router.post("/api/userdashboard/add", userdashboardcontroller.addborrowedtMethod);
router.put("/api/userdashboard/addfavorites/:id", userdashboardcontroller.editfavorites);
module.exports=router
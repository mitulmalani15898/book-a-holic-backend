const Book = require("../model/Book");
const userdash = require("../model/UserDashboard");
const uuid = require("uuid");

const addborrowedtMethod = async (req, res) => {
    try {
      const borrowed = new userdash(req.body);
      console.log(borrowed);
      const result = await borrowed.save();
      res
        .status(200)
        .send({ success: true, data: result, message: "Record Added" });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };
  const getborrowed = async (req, res) => {
    try {
      res
        .status(200)
        .json({
          success: true,
          message: "Data Retreived",
          data: await userdash.find(),
        });
    } catch (error) {
      console.log(error);
    }
  };


  const editfavorites = async (req, res) => {
    try {
      const favorites = req.body.favorites;

      
        let newFavorite = new Order(req.body);
        const responseForOrder = await newOrder.save();
        favorites.push(newFavorite);
      
      res.status(200).json({ success: true, data: orders });
    } catch (error) {
      console.log(error);
    }
  };
  exports.addborrowedtMethod=addborrowedtMethod;
  exports.getborrowed=getborrowed;
  exports.editfavorites=editfavorites;
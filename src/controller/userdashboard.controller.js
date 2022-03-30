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
  const getborrowed = async (request, response) => {
    const id = request.params.id;
    try {
      const user = await userdash.findById(id);
      response.json(user.borrowedbooks);
    } catch (error) {
      response.json({ message: error.message });
    }
    // try {
    //   res
    //     .status(200)
    //     .json({
    //       success: true,
    //       message: "Data Retreived",
    //       data: await userdash.find(),
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const getfavorites = async (request, response) => {
    const id = request.params.id;
    try {
      const user = await userdash.findById(id);
      response.json(user.favoritebooks);
    } catch (error) {
      response.json({ message: error.message });
    }
    // try {
    //   res
    //     .status(200)
    //     .json({
    //       success: true,
    //       message: "Data Retreived",
    //       data: await userdash.find(),
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
  };


  
  const getnames = async (request, response) => {
    const id = request.params.id;
    try {
      const user = await userdash.findById(id);
      response.json(user.name);
    } catch (error) {
      response.json({ message: error.message });
    }
    // try {
    //   res
    //     .status(200)
    //     .json({
    //       success: true,
    //       message: "Data Retreived",
    //       data: await userdash.find(),
    //     });
    // } catch (error) {
    //   console.log(error);
    // }
  };



  const editfavorites = async (request, response) => {
    const user = request.body;

  const editUser = new userdash(user);

  try {
    await userdash.update({ _id: request.params.id }, editUser);
    response.json(editUser);
  } catch (error) {
    response.json({ message: error.message });
  }
  };
  exports.addborrowedtMethod=addborrowedtMethod;
  exports.getborrowed=getborrowed;
  exports.favoritebooks=getfavorites;
  exports.getnames=getnames;
  exports.editfavorites=editfavorites;
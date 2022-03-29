
/** Author : JAINAM SHAH
 */



const User = require("../model/user-schema");

const getUsers = async (request, response) => {
  try {
    let user = await User.find();
    response.json(user);
  } catch (error) {
    response.json({ message: error.message });
  }
};

const addUser = async (request, response) => {
 

  const user = request.body;
  console.log(user);
  const newUser = new User(user);

  console.log(newUser);
  try {
    await newUser.save();
    response.json(newUser);
  } catch (error) {
    response.json({ message: error.message });
  }
};
const getUserById = async (request, response) => {
  const id = request.params.id;
  try {
    const user = await User.findById(id);
    response.json(user);
  } catch (error) {
    response.json({ message: error.message });
  }
};

const editUser = async (request, response) => {
  const user = request.body;

  const editUser = new User(user);

  try {
    await User.updateOne({ _id: request.params.id }, editUser);
    response.json(editUser);
  } catch (error) {
    response.json({ message: error.message });
  }
};

const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ _id: request.params.id });
    response.json("User Deleted");
  } catch (error) {
    response.json({ message: error.message });
  }
};


module.exports = {
  getUsers,
  getUserById,
  deleteUser,
  editUser,
  addUser,
};

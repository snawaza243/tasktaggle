const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;
  try {
    const user = new User({ firstName, lastName, email, password, role });
    await user.save();
    res.status(201).send('User created');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send('User deleted');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

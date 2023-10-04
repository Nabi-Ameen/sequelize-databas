let db = require("../models");
let User = db.user;

const getAllUser = async (req, res) => {
  const data = await User.findAll();
  res.status(200).json({ data });
};

const getUser = async (req, res) => {
  const data = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data });
};

const postUser = async (req, res) => {
  const body = req.body;
  const data = await User.create(body);
  res.status(200).json(data);
};

const deleteUser = async (req, res) => {
  const deleteData = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(deleteData);
};

const updateUser = async (req, res) => {
  const updatedData = req.body;
  const updated = await User.update(updatedData, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(updated);
};

module.exports = { getAllUser, getUser, postUser, deleteUser, updateUser };

const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((user) => res.send(user))
    .catch((err) => res.status(500).send({ message: err }));
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.userId)
    .then((data) => {
      const user = {
        _id: data.id,
        name: data.name,
        about: data.about,
        avatar: data.avatar,
      };
      return (user);
    })
    .then((user) => res.send(user))
    .catch((err) => res.status(500).send({ message: err }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((data) => {
      const user = {
        _id: data.id,
        name: data.name,
        about: data.about,
        avatar: data.avatar,
      };
      return (user);
    })
    .then((user) => res.send(user))
    .catch((err) => res.status(500).send({ message: err }));
};

module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about })
    .then((data) => {
      const user = {
        _id: data.id,
        name: data.name,
        about: data.about,
        avatar: data.avatar,
      };
      return (user);
    })
    .then((user) => res.send(user))
    .catch((err) => res.status(500).send({ message: err }));
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar })
    .then((data) => {
      const user = {
        _id: data.id,
        name: data.name,
        about: data.about,
        avatar: data.avatar,
      };
      return (user);
    })
    .then((user) => res.send(user))
    .catch((err) => res.status(500).send({ message: err }));
};

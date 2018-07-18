const User = require('./user.model');

const controllers = {
  getOne: async (req, res, next) => {
    try {

    } catch (e) {
      next(e);
    }
  },
  getAll: async (req, res, next) => {
    try {
      const doc = await User.find({});
      res.json(doc);
    } catch (e) {
      next(e);
    }
  },
  createOne: async (req, res, next) => {
    try {
      const { email } = req.body;
      const exists = await User.findOne({ email });
      if (exists) {
        return res.status(409).json({ message: `User with this email exists!` });
      }

      const newUser = await User.create(req.body);
      res.json({ message: `User [${newUser.name}] created.` });
    } catch (e) {
      next(e);
    }

  },
  updateOne: (req, res, next) => {
    try {

    } catch (e) {
      next(e);
    }
  },
  deleteOne: (req, res, next) => {
    try {

    } catch (e) {
      next(e);
    }
  },
  deleteAll: async (req, res, next) => {
    try {
      await User.remove({});
      res.json({ message: `Users dropped.` });
    } catch (e) {
      next(e);
    }
  }
};

module.exports = controllers;

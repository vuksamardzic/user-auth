const User = require('./user.model');
const JWT = require('jsonwebtoken');
const { secret, expireTime } = require('./../../../config');


const signToken = user => {
  return JWT.sign({
    iss: 'vuk samardžić <samardzic.vuk@gmail.com>',
    sub: user.id
  }, secret, { expiresIn: expireTime });
};

const controllers = {
  login: async (req, res, next) => {
    try {
      const token = signToken(req.user);
      res.status(200).json({ token });
    } catch (e) {
      next(e);
    }
  },
  secret: async (req, res, next) => {
    try {
      res.json({ secret: true });
    } catch (e) {
      next(e);
    }
  },
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
      const token = signToken(newUser);

      res.status(200).json({ token });
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

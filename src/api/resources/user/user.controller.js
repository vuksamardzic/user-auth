const User = require('./user.model');
const JWT = require('jsonwebtoken');
const { secret } = require('./../../../config');


const signToken = user => {
  return JWT.sign({
    iss: 'vuk samardzic',
    sub: user.id,
    iat: new Date().getTime(),
    exp: Math.floor(Date.now() / 1000) + (60 * 60)
  }, secret);
};

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

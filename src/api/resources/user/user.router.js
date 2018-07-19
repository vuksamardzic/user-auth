const express = require('express');
const controller = require('./user.controller');
const passport = require('passport');
require('./../../../passport');


const userRouter = express.Router({});

userRouter.route('/')
  .get(controller.getAll)
  .post(controller.createOne)
  .delete(controller.deleteAll);

userRouter.route('/secret')
  .get(passport.authenticate('jwt', { session: false }), controller.secret);

module.exports = userRouter;

const express = require('express');
const controller = require('./user.controller');

const userRouter = express.Router({});

userRouter.route('/')
  .get(controller.getAll)
  .post(controller.createOne)
  .delete(controller.deleteAll);


module.exports = userRouter;

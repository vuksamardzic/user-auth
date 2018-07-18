const express = require('express');
const userRouter = require('./resources/user/user.router');


const restRouter = express.Router({});

restRouter.use('/user', userRouter);

module.exports = restRouter;

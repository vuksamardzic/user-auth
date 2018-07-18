const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connect = require('./db');
const restRouter = require('./api/rest.router');


const app = express();

connect();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1', restRouter);

const port = process.env.PORT || 3000;
app.listen(port);

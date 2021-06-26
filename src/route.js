const express = require('express');
const questionController = require('./controllers/QuestionController');
const roomController = require('./controllers/roomController');

const route = express.Router();

route.get('/', (req, res) => res.render('index'));
route.get('/room/:room', (req, res) => res.render('room'));
route.get('/create-room', (req, res) => res.render('create-room'));


route.post('/question/:room/:question/:action', questionController.index);
route.post('/create-room', roomController.create);
module.exports = route;
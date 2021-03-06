const express = require('express');
const questionController = require('./controllers/QuestionController');
const roomController = require('./controllers/RoomController');

const route = express.Router();

route.get('/', (req, res) => res.render('index'));
route.get('/create-room', (req, res) => res.render('create-room'));

route.post('/create-room', roomController.create);
route.get('/room/:room', roomController.open);
route.post('/enterroom', roomController.enter);

route.post('/question/create/:room', questionController.create);
route.post('/question/:room/:question/:action', questionController.index);
module.exports = route;
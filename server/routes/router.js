const express = require('express');
const route = express.Router();
const UserController = require('../controller/userController');
const ViewController = require('../controller/viewController');

const userController = new UserController();
const viewController = new ViewController();

route.get('/', viewController.getHomePage);

route.get('/add-user', viewController.addUser);

route.get('/update-user', viewController.updateUser);

//API
route.get('/api/user', userController.getListUser)
route.get('/api/view/:id', userController.getUserById)
route.post('/api/user', userController.insertUser)
route.post('/api/user/:id', userController.updateUser)
route.get('/api/delete/user/:id', userController.deleteUser)

module.exports = route; 

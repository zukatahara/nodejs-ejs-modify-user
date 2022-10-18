const express = require('express');
const route = express.Router();

const services = require('../services/render')
const controller = require('../controller/controller')
/**
 * @description Route Route
 * @method GET /
 */
route.get('/', services.homeRouter)
/**
 * @description add Route
 * @method GET /add-user
 */
route.get('/add-user', services.add_user)
/**
 * @description update Route
 * @method GET /update-user
 */
route.get('/update-user', services.update_user)

//API
route.post('/api/user', controller.create)
route.get('/api/user', controller.find)
route.put('/api/user/:id', controller.update)
route.delete('/api/user/:id', controller.delete)
module.exports = route; 

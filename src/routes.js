const express = require('express');
const UserController = require('./controllers/UserController')

const routes = express.Router();

routes.post('/adiciona', UserController.store)
routes.get('/imprime', UserController.index)

routes.get('/', (req, res) => {

    const { name } = req.body;

    return res.json({ name });
})

module.exports = routes;
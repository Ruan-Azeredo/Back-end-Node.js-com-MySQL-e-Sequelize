const express = require('express'); //importa o express
const routes = require('./routes');
require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333); //porta do navegador
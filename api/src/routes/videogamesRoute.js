const { Router } = require('express');
const { getAllVideogamesHandler } = require('../handlers/videogamesAllHandler');
const { getVideogamesByIdHandler } = require('../handlers/videogamesHandlerById');
const {  getVideogameByNameHandler } = require('../handlers/videogamesHandlerByName');


const videogamesRoute = Router();

videogamesRoute.get('/', getAllVideogamesHandler);
videogamesRoute.get('/:id', getVideogamesByIdHandler);
videogamesRoute.get('/:name', getVideogameByNameHandler);


module.exports = videogamesRoute;
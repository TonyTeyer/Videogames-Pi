const { Router } = require('express');
const { getAllVideogames } = require('../handlers/videogamesAllHandler');
const { getVideogamesByIdHandler } = require('../handlers/videogamesHandlerById');
const {  getVideogameByName } = require('../handlers/videogamesHandlerByName');


const videogamesRoute = Router();

videogamesRoute.get('/', getAllVideogames);
videogamesRoute.get('/:id', getVideogamesByIdHandler);
videogamesRoute.get('/:name', getVideogameByName);


module.exports = videogamesRoute;
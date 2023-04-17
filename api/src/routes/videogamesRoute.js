const { Router } = require('express');
const { getAllAndByNameVideogamesHandler, getVideogamesByIdHandler, } = require('../handlers/getVideogamesHandlers');
const { postNewVideogameHandler } = require('../handlers/postVideogamesHandlers');

const videogamesRoute = Router();

videogamesRoute.get('/', getAllAndByNameVideogamesHandler);
videogamesRoute.get('/:id', getVideogamesByIdHandler);
videogamesRoute.post('/', postNewVideogameHandler);


module.exports = videogamesRoute;
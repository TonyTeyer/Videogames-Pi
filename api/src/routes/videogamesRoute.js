const { Router } = require('express');
const allVideogamesAndByNameHandler = require('../handlers/getAllVideogamesAndByNameHandler');
const videogamesByIdHandler = require('../handlers/getVideogamesByIdHandler');
const postNewVideogameHandler = require('../handlers/postNewVideogameHandler');

const videogamesRoute = Router();

videogamesRoute.get('/', allVideogamesAndByNameHandler);
videogamesRoute.get('/:id', videogamesByIdHandler);
videogamesRoute.post('/', postNewVideogameHandler);



module.exports = videogamesRoute;
const { Router } = require('express');
const { getVideogamesGenresHandler } = require('../handlers/getGenresHandlers');

const genresRoute = Router();

genresRoute.get('/', getVideogamesGenresHandler);

module.exports = genresRoute; 
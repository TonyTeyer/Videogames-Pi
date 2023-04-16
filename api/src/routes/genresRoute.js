const { Router } = require('express');
const { getGenresHandler } = require('../handlers/genresHandler');

const genresRoute = Router();

genresRoute.get('/', getGenresHandler);

module.exports = genresRoute; 
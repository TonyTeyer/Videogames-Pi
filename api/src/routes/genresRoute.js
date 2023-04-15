const { Router } = require('express');
const { getGenres } = require('../handlers/genresHandler');

const genresRoute = Router();

genresRoute.get('/', getGenres);

module.exports = genresRoute; 
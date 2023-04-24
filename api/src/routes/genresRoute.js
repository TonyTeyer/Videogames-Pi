const { Router } = require('express');
const getGenresHandler  = require('../handlers/getGenresHandler');

const genresRoute = Router();

genresRoute.get('/', getGenresHandler);

module.exports = genresRoute;
const { Router } = require("express");
const { postNewVideogameHandler } = require('../handlers/videogamesPostHandler');


const postRoute = Router();

postRoute.post('/', postNewVideogameHandler);
 
module.exports = postRoute;
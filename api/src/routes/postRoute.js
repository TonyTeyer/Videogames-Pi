const { Router } = require("express");
const { postNewVideogame } = require('../handlers/videogamesPostHandler');


const postRoute = Router();

postRoute.post('/', postNewVideogame);
 
module.exports = postRoute;
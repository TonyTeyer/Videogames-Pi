const { Videogame } = require('../db');

const createNewVideogame = async (
    id,
    name,
    description,
    platforms,
    background_image,
    release_date,
    rating,
) => await Videogame.create({
        id,
        name,
        description,
        platforms,
        background_image,
        release_date,
        rating,
    });
    
module.exports = {
    createNewVideogame,
};
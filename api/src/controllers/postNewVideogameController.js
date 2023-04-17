const { Videogame, Genres } = require('../db');
const axios = require('axios');

const createNewVideogame = async ({ name, description, platform, background_image, released, rating, genre }) => {
    if (!name || !description || !platform || !background_image || !released || !rating || !genre) {
        throw new Error('Invalid parameters');
    };
    const searchName = await Videogame.findAll({
        where: { name: name }
    });
    if (searchName.length !== 0) throw Error('This videogame already exist');

    let getGenreFromDb = await Genres.findAll({
        where: { name: genre }
    });

    if (getGenreFromDb.length === 0) throw Error('Its empty');

    let postNewVideogame = await Videogame.create({
        name,
        description,
        platform,
        background_image,
        released,
        rating,
        genre,
    });
    await postNewVideogame.addGenres(getGenreFromDb);
    return postNewVideogame;
};

const postNewVideogame = (form) => {
    return createNewVideogame(form);
};

module.exports = {
    postNewVideogame,
}
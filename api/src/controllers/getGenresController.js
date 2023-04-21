const axios = require('axios');
const { Genre } = require('../db');
require("dotenv").config();

//=======solicitamos generos de la API  y los almacenamos en la DB======
const getVideogamesGenres = async () => {

    let response = await axios.get(`${process.env.GENRES_URL}?key=${process.env.API_KEY}`)
    let genres = await response.data.results.map(g => g.name);

    const count = await Genre.count();

    if (count === 0) {
        genres.forEach(element => {
            Genre.create({ name: element }) //getGenreDB del controller postNewVideogameController espera un objeto por aqui lo pasamos
        });
    };
    return genres;
};

module.exports = getVideogamesGenres
const axios = require('axios');
const { Genres } = require('../db');
require("dotenv").config();

const getVideogamesGenres = async () => {
    const response = await axios.get(`${process.env.GENRES_URL}?key=${process.env.API_KEY}`);
    const genres = await response.data.results.map(g => g.name);
    const count = await Genres.count();

    if (count === 0) {
        genres.forEach(element => {
            Genres.create({ name: element });
        });
    };
    return genres;
};

module.exports = {
    getVideogamesGenres,
}
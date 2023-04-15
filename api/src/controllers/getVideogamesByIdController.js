const { Videogame } = require('../db');
const axios = require('axios');


const getVideogameById = async (id, source) => {
    const videogames =
        source === "api"
            ? (await axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=${page}`))
                .data
            : await Videogame.findByPk(id);
    return videogames;
};

module.exports = {
    getVideogameById,
};
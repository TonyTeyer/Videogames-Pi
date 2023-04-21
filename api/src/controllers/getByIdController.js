const { Videogame, Genre } = require('../db');
const axios = require('axios');
require("dotenv").config();

//================traer videojuegos por ID==============

//buscamos por id en la API
const getIdFromApi = async (id) => {
    const idApi = [];

    const getApiId = await axios.get(`${process.env.GAMES_URL}/${id}?key=${process.env.API_KEY}`);
    idApi.push({
        id: getApiId.data.id,
        name: getApiId.data.name,
        description: getApiId.data.description,  // Solo tiene description si se busca por ID
        platform: getApiId.data.platforms.map(e => e.platform.name),
        background_image: getApiId.data.background_image,
        released: getApiId.data.released,
        rating: getApiId.data.rating,
        genres: getApiId.data.genres.map((g) => g.name),
    });
    return idApi;
};
//busco ids en la DB
const getIdFromDB = async (id) => {
    let gamesDb = [];
    let getDbId = await Videogame.findByPk(
        id, {
        include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attribuites: [],
            },
        },
    });
    gamesDb.push({
        id: getDbId.id,
        name: getDbId.name,
        description: getDbId.description,
        platform: getDbId.platform,
        background_image: getDbId.background_image,
        released: getDbId.released,
        rating: getDbId.rating,
        genres: getDbId.genres.map(genre => genre.name)
    });
    return gamesDb;
};
//===================funcion que se irá al handler 'videogamesByIdHandler'===================
const videogamesById = async (id, source) => {
    if (source === 'api') return getIdFromApi(id) //todos los ids que vengan por API
    else return getIdFromDB(id); //todos los ids que vengan por DB
};

module.exports = videogamesById;
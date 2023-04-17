const axios = require('axios');
const { Videogame, Genres } = require('../db');
require("dotenv").config();

const getVideogamesByIdApi = async (id) => {
    try {
        const videogameIdApi = (
            await axios.get(`${process.env.API_URL}/${id}?key=${process.env.API_KEY}`)
        ).data;
        const resultApiId = {
            id: videogameIdApi.id,
            name: videogameIdApi.name,
            description: videogameIdApi.description,
            background_image: videogameIdApi.background_image,
            genres: videogameIdApi.genres.map((genre) => genre.genre),
            platforms: videogameIdApi.platforms.map((element) => element.platform.name),
            rating: videogameIdApi.rating,
        };
        return resultApiId;
    } catch (error) {
        throw Error('Ese id de videojuego no existe intenta de nuevo :).');
    }
};
const getVideogamesByIdDb = async (id) => {
    const resultDbId = await Videogame.findByPk(id, {
        include: [
            {
                model: Genres,
                attributes: ["name"],
                through: {
                    attributes:[],
                },
            },
        ],
    });
    const mapped = resultDbId.toJSON();
    mapped.genres = mapped.genres.map((g) => g.name);
    return mapped;
}
const getVideogameById = async (id, source) => {
    const result =
        source === "api" ? await getVideogamesByIdApi(id) : await getVideogamesByIdDb(id);
    return result;
};

module.exports = {
    getVideogameById,
}
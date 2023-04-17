const axios = require('axios');
const { Videogame, Genres } = require('../db');
require("dotenv").config();

//------------------------Obtencion de todos los videojuegos--------------------//
// GET | /videogames
//Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.

const getAllVideogames = async () => {
    const pageSize = [1, 2, 3, 4, 5]; //cada pagina de la api trae 20 juegos por defecto
    const links = pageSize.map((page) => {
        return `${process.env.API_URL}?key=${process.env.API_KEY}&page=${page}`;
    });
    const videogamesFromApi = await Promise.all(
        links.map(async (link) => {
            const videogamePage = await axios.get(link);
            const videogameResults = videogamePage.data.results;
            const formatVideogames = videogameResults.map((game) => {
                return {
                    id: game.id,
                    name: game.name,
                    background_image: game.background_image,
                    genres: game.genres.map((genre) => genre.genre),
                    platforms: game.platforms.map((element) => element.platform.name),
                    rating: game.rating,
                };
            });
            return formatVideogames;
        })
    );
    const cleanVideogamesApiList = videogamesFromApi.reduce((a, b) => {
        return a.concat(b);
    });
    let videogamesDb = await Videogame.findAll({
        include: {
            model: Genres,
            attributes: ["name"],
        },
    });
    const cleanVideogamesDbList = videogamesDb.map((videogameDb) => {
        const dbVideogamesFormat = {
            id: videogameDb.dataValues.id,
            name: videogameDb.dataValues.name,
            description: videogameDb.description,
            background_image: videogameDb.dataValues.background_image,
            genres: videogameDb.dataValues.genres.map((genre) => genre.dataValues.name),
            platforms: videogameDb.dataValues.platforms,
            rating: videogameDb.dataValues.rating,
        };
        return dbVideogamesFormat;
    });
    return cleanVideogamesApiList.concat(cleanVideogamesDbList);       
};









module.exports = {
    getAllVideogames,
}
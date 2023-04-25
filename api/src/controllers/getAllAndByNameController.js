const { Videogame, Genre } = require('../db');
const axios = require('axios');
require("dotenv").config();
const { Op } = require("sequelize");


//====funciones para traer TODOS los videojuegos o por nombre====

//traer todos los videojuegos
const getAllVideogames = async () => {
    //traigo los videojuegos de la db
    const dbVideogames = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }
    });
    // mapeo y formateo lo que llega de la database
    const formatDbVideogames = dbVideogames.map(games => {
        return {
            id: games.id,
            name: games.name,
            description: games.description,
            platform: games.platform,
            background_image: games.background_image,
            released: games.released,
            rating: games.rating,
            genres: games.genres.map(genre => genre.name)
        }
    })
    // traigo los videojuegos de la api
    const formatApiVideogames = [];
    for (let i = 1; i <= 7; i++){
        let apiResponse = await axios.get(`${process.env.GAMES_URL}?key=${process.env.API_KEY}&page=${i}`);
        //formato y pusheo al array vacio formatApiVideogames
        apiResponse.data.results.map(games => {
            formatApiVideogames.push({
                id: games.id,
                name: games.name,
                platform: games.platforms.map(e => e.platform.name),
                background_image: games.background_image,
                released: games.released,
                rating: games.rating,
                genres: games.genres.map(g => g.name)
            });
        });
    };
    // concateno el resultado de la api y la db 
    return [...formatDbVideogames, ...formatApiVideogames];
};

//Traigo los videojuegos por nombre
const getVideogamesByName = async (name) => {
    try {
        //busco en la db por nombre
        const dbVideogames = await Videogame.findAll({
            where: {
                name: { [Op.iLike]: `%${name}%` }
            },
            include: {
                model: Genre,
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            },
        });
        //mapeo y formateo lo que llega de la db
            const formatDbVideogames = dbVideogames.map(games => {
                return {
                    id: games.id,
                    name: games.name,
                    description: games.description,
                    platform: games.platform,
                    background_image: games.background_image,
                    released: games.released,
                    rating: games.rating,
                    genres: games.genres.map(genre => genre.name)
                }
            });
        //mapeo y pusheo al array vacio formatApiVideogames todo lo que viene de la api
        const formatApiVideogames = [];
        for (let i = 1; i <= 2; i++) {
            let apiResponse = await axios.get(`${process.env.GAMES_URL}?search=${name}&key=${process.env.API_KEY}&page=${i}`);
            apiResponse.data.results.map(games => {
                formatApiVideogames.push({
                    id: games.id,
                    name: games.name,
                    platform: games.platforms.map(e => e.platform.name),
                    background_image: games.background_image,
                    released: games.released,
                    rating: games.rating,
                    genres: games.genres.map(g => g.name)
                });
            });
        };
        
        let getVideogamesByName = [...formatDbVideogames, ...formatApiVideogames].slice(0, 15);//el .slice(0, 15) es para que solo me traiga los primeros 15 juegos encontrados por nombre.
        return getVideogamesByName;
    } catch (error) {
        throw Error("No existe el videojuego que buscas, intenta nuevamente.");
    }
};
//===============funciones que se van al handler 'allVideogamesAndByNameHandler'================

const getVideogames = (name) => {
    if (!name) return getAllVideogames();
    else return getVideogamesByName(name);
};

module.exports = getVideogames;
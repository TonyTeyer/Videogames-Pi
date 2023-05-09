const { Videogame, Genre } = require('../db');

//======================Crear nuevo videojuego en la Db================
const postNewVideogame = async ({
    name,
    description,
    platform,
    background_image,
    released,
    rating,
    genre,
    price}) => {
    //verificar que no haya campos obligatorios vacios
    if (!name || !description || !platform || !background_image || !released || !rating || !genre || !price) {
        throw Error('Todos los campos son obligatorios')
    };

    //verificar que el nombre no exista en la base de datos
    const nameExist = await Videogame.findAll({
        where: { name: name }
    });//si el nombre existe en la base de datos lanza un error
    if (nameExist.length !== 0) throw Error('This game already exist on your DataBase!!');
    
    //buscar y traer los generos del modelo Genre
    let getGenreDB = await Genre.findAll({
        where: {
            name: genre
        }
    });
    //verificar que la tabla de generos no está vacía
    if (getGenreDB.length === 0) throw Error("Your genres table is empty!");

    //guardamos el nuevo juego en la base de datos
    let newVideogame = await Videogame.create({
        name,
        description,
        platform,
        background_image,
        released,
        rating: Number(rating),
        genre,
        price
    });
    await newVideogame.addGenres(getGenreDB);

    return newVideogame;
};

//====================funcion que se va al handler 'postNewVideogameHandler'=============
const postNewVideogameOnDb = (form) => {
    return postNewVideogame(form);
};

module.exports = postNewVideogameOnDb;
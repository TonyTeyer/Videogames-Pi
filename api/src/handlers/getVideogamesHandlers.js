const { getAllVideogames } = require('../controllers/getAllVideogamesController');
const { getVideogameById } = require('../controllers/getVideogamesByIdController');

const getAllAndByNameVideogamesHandler = async (req, res) => {
    try {
        let { name } = req.query;
        let videogames = [];
        if (name) {
            videogames = await getAllVideogames().then((data) =>
                data.filter((game) =>
                    game.name.toLowerCase().includes(name.toLowerCase())
                )        
            );
            if (videogames.length === 0) {
                return res.status(400).send('Videogame not Found');
            } else {
                return res.status(200).send(videogames);
            }
        } else {
            videogames = await getAllVideogames();
            return res.status(200).json(videogames);
        }
    } catch (error) {
        return res.status(400).send("Something went wrong, we cant't found your Videogames =(.");
    }
};
const getVideogamesByIdHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const result = await getVideogameById(id, source);
        if (result.length === 0) throw Error("Something went wrong, we cant't found your Videogames by ID :(.");
        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
};


module.exports = {
    getAllAndByNameVideogamesHandler,
    getVideogamesByIdHandler,
}
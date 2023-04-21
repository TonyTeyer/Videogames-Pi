const getVideogames = require('../controllers/getAllAndByNameController');


const allVideogamesAndByNameHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const games = await getVideogames(name);
        res.status(200).json(games);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = allVideogamesAndByNameHandler;
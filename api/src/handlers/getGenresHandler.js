const getVideogamesGenres = require('../controllers/getGenresController');

const getGenresHandler = async (req, res) => {
    try {
        let genres = await getVideogamesGenres();
        res.status(200).json(genres);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = getGenresHandler;
const videogamesById = require('../controllers/getByIdController');

const videogamesByIdHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? 'db' : 'api';
    try {
        const gamesById = await videogamesById(id, source);
        return res.status(200).json(gamesById);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = videogamesByIdHandler;
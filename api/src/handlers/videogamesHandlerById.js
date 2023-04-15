const { getVideogameById } = require('../controllers/getVideogamesByIdController');


const getVideogamesByIdHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";

    try { 
        const videogameSource = await getVideogameById(id, source);
        res.status(200).json(videogameSource);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getVideogamesByIdHandler,
};
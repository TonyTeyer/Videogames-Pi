const postNewVideogameOnDb = require('../controllers/postNewVideogameController');


const postNewVideogameHandler = async (req, res) => {
    const {
        name,
        description,
        platform,
        background_image,
        released,
        rating,
        genre,
        price
    } = req.body;
    try {
        const newVideogame = await postNewVideogameOnDb({
            name,
            description,
            platform,
            background_image,
            released,
            rating,
            genre,
            price
        });
        res.status(200).json(newVideogame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = postNewVideogameHandler;
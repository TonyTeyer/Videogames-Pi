const { createNewVideogame } = require("../controllers/videogamesPostController");



const postNewVideogameHandler = async (req, res) => {
    try {
        const { id, name, description, platforms, background_image, release_date, rating } = req.body;
        const newVideogame = await createNewVideogame(
            id,
            name,
            description,
            platforms,
            background_image,
            release_date,
            rating
        ); 
        res.status(201).json(newVideogame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

    
};

module.exports = {
    postNewVideogameHandler,
}
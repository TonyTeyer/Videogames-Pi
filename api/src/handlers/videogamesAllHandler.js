

const getAllVideogames = (req, res) => {
    const { name } = req.query;
    if (name) res.send(`Quiero buscar todos los videogames que se llamen ${name}`);
    else res.send('Quiero enviar todos los videogames');
};



module.exports = {
    getAllVideogames,
};


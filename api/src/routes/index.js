const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRoute = require('./videogamesRoute');
const genresRoute = require('./genresRoute');
const postRoute = require('./postRoute');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogamesRoute);
router.use('/genres', genresRoute);
router.use('/post', postRoute)


module.exports = router;

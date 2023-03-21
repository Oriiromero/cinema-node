const express = require('express');

const router = express.Router();

const {
    getMovie,
    getMovieById,
    getMovieByTitle,
    getMovieByGenre,
    getMovieByYear,
    postMovie,
    putMovie,
    deleteMovie
} = require('../controllers/movie.controllers');

router.get('/', getMovie);
router.get('/:id', getMovieById);
router.get('/title/:title', getMovieByTitle);
router.get('/genre/:genre', getMovieByGenre);
router.get('/year/:year', getMovieByYear);
router.post('/create', postMovie);
router.put('/:id', putMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
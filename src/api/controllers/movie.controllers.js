const Movie = require('../models/movie');


//GETS
const getMovie = async (req, res) => {
    try {

        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);

    } catch (error) {

        return res.status(500).json(error);

    }
}

const getMovieById = async (req, res) => {
    try 
    {
    
        const {id} = req.params;
        const allMovies = await Movie.findById(id);
        return res.status(200).json(allMovies);

    } catch (error)
    {
        
        return res.status(500).json(error);
        
    }
}

const getMovieByTitle = async (req, res) => {
    try 
    {
        const {title} = req.params;
        console.log(title);
        const allMovies = await Movie.find({title: title});
        return res.status(200).json(allMovies);
    } 
    catch (error) 
    {
        return res.status(500).json(error);
    }
}

const getMovieByGenre = async (req, res) => {
    try 
    {
        const {genre} = req.params;
        const allMovies = await Movie.find({genre: genre});
        return res.status(200).json(allMovies);
    } 
    catch (error) 
    {
        return res.status(500).json(error);
    }
}

const getMovieByYear = async (req, res) => {
    try 
    {
        const {year} = req.params;
        const allMovies = await Movie.find({year: {$gt: year}});

        if(allMovies)
        
        return res.status(200).json(allMovies);
    } 
    catch (error) 
    {
        return res.status(500).json(error);
    }
}


//POST
const postMovie = async (req, res)=> {
    try
    {
        const newMovie = new Movie(req.body);

        const createdMovie = await newMovie.save(); 
        return res.status(201).json(createdMovie);

    }
    catch(error)
    {
        return res.status(500).json(error);
    }
}

//PUT
const putMovie = async (req, res) => {
    try 
    {
        const {id} = req.params;
        const putMovie = new Movie(req.body);
        putMovie._id = id;

        const updateMovie = await Movie.findByIdAndUpdate(id, putMovie, {new: true});

        if(!updateMovie){
            return res.status(404).json({"message": "Movie not found."});
        }

        return res.status(200).json(updateMovie);
    } 
    catch (error)
    {
        return res.status(500).json(error);
    }
}

//DELETE 
const deleteMovie = async (req, res) => {
    try 
    {
        const {id} = req.params;
        const deleteMovie = await Movie.findByIdAndDelete(id);

        if(!deleteMovie){
            return res.status(404).json({"message": "Movie not found."})
        }

        res.status(200).json(deleteMovie);
    } 
    catch (error) 
    {
        return res.status(500).json(error);
    }
}





module.exports = {getMovie, getMovieById, getMovieByTitle, getMovieByGenre, getMovieByYear, postMovie, putMovie, deleteMovie};
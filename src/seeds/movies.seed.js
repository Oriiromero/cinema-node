const mongoose = require('mongoose');

const Movie = require('../api/models/movie');

const arrayMovies = [
    {
        title: 'The Matrix',
        director: 'Hermanas Wachowski',
        year: 1999,
        genre: 'Acción',
    },
    {
        title: 'The Matrix Reloaded',
        director: 'Hermanas Wachowski',
        year: 2003,
        genre: 'Acción',
    },
    {
        title: 'Buscando a Nemo',
        director: 'Andrew Stanton',
        year: 2003,
        genre: 'Animación',
    },
    {
        title: 'Buscando a Dory',
        director: 'Andrew Stanton',
        year: 2016,
        genre: 'Animación',
    },
    {
        title: 'Interestelar',
        director: 'Christopher Nolan',
        year: 2014,
        genre: 'Ciencia ficción',
    },
    {
        title: '50 primeras citas',
        director: 'Peter Segal',
        year: 2004,
        genre: 'Comedia romántica',
    }
];

mongoose.connect("mongodb+srv://root:root@movies1.ksfteue.mongodb.net/movies?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then (async ()=> {
    const allMovies = await Movie.find();
    if(allMovies.length > 0) {
        await Movie.collection.drop();
        console.log('Movies are now deleted');
    }
})
.catch((err)=> {
    console.log('Error deleting the movies', err);
})
.then(async ()=> {
    const moviesMap = arrayMovies.map((movie)=> new Movie(movie));
    await Movie.insertMany(moviesMap);
    console.log('Movies have been inserted correctly');
})
.catch((err)=> {
    console.log('Error inserting the movies', err);
})
.finally(()=> mongoose.disconnect());
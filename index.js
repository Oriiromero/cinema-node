const express = require('express');
const { connect } = require('./src/utils/database');
const routerMovies = require('./src/api/routes/movie.routes');
const routerCinemas = require('./src/api/routes/cinema.routes');

const PORT = 5500;

const app = express();
connect();



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/movies', routerMovies);
app.use('/cinemas', routerCinemas);

app.listen(PORT, ()=> console.log(`listening on: http://localhost:${PORT}`));
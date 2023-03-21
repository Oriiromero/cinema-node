//REQUIERO EL MONGOOSE
const mongoose = require('mongoose'); 

//NUESTRA URL A MONGODB
const DB_URL = "mongodb+srv://root:root@movies1.ksfteue.mongodb.net/movies?retryWrites=true&w=majority";

//FUNCION DE CONECTAR
const connect = async ()=> {

    try 
    {
        mongoose.set('strictQuery', true);
        //CONECTO A LA BBDD
        const db = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const {name, host} = db.connection;
        console.log(`Connected to ${name} DB in host: ${host}`);

    }
    catch(error) 
    {
     
        console.log(`Found error at connecting with BBDD: ${error}`);

    }
}

module.exports = {connect};
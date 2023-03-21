const Cinema = require('../models/cinema');

//GET
const getCinema = async (req, res) => {
    try 
    {
        const allCinemas = await Cinema.find();
        return res.status(200).json(allCinemas);
    } 
    catch (error)
    {
        return res.status(500).json(error);
    }
}

const getCinemaById = async (req, res) => {
    try {
        const {id} = req.params;
        const cinema = await Cinema.findById(id).populate("movies");
        if(!cinema){
            return res.status(404).json({ "message": "cinema not found"});
        }
        return res.status(200).json(cinema);
    } catch (error) {
        return res.status(500).json(error);
    }
}


//POST 
const postCinema = async (req, res) => {
    try {
        console.log(req.body);
        const newCinema = new Cinema(req.body);
        const createdCinema = await newCinema.save();
        return res.status(200).json(createdCinema);
    } catch (error) {
        return res.status(500).json(error);
    }

}

//PUT 
const putCinema = async (req, res) => {
    
    try {
        const {id} = req.params;
        const putCinema = new Cinema(req.body);
        putCinema._id = id;
        const updateCinema = await Cinema.findByIdAndUpdate(id, putCinema, {new: true}); //Buscamos por id y actualizamos el elemento
        if(!updateCinema){
            return res.status(404).json({ "message": "cinema not found"});
        }
        return res.status(200).json(updateCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
}

//DELETE 
const deleteCinema = async (req, res) => {
    try {
        const {id}=req.params;
        const deleteCinema = await Cinema.findByIdAndDelete(id); 
        if(!deleteCinema){     
            return res.status(404).json({ "message": "cinema not found"});
        }
        return res.status(200).json(deleteCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getCinema, postCinema, putCinema, deleteCinema, getCinemaById}
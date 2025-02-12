const Movies = require("../models/movies");

const addMovie = async (req, res) => {
  try {
    const newMovie = new Movies(req.body);
    await newMovie.save();
    res.status(200).send({ Msg: "Movie Added Successfully! " });
  } catch (error) {
    res.status(500).send({ Msg: "Failed to Add a New Movie ", error });
  }
};

const getMovies = async (req, res) => {
  try {
    const allMovies = await Movies.find().populate("actors", "Name dob -_id");

    // to remove the id from showing up we use -_id

    // populate is to connect to the other collection and fill in the rest of the infor based on the actor
    // choose what to show in the results by using ,"Name etc " with a space between every key

    res.status(200).send({ Msg: "This is a list of All Movies", allMovies });
  } catch (error) {
    res.status(500).send({ Msg: "List is Empty", error });
  }
};

const getOneMovie = async (req, res) => {
  try {
    const OneMovie = await Movies.findById(req.params.id);
    res.status(200).send({ Msg: "This is the Movie requested ", OneMovie });
  } catch (error) {
    res.status(500).send({ Msg: "Movie not Found ", error });
  }
};

const deleteOneMovie = async (req, res) => {
  try {
    const found = await Movies.findById(req.params.id);
    if (found == null) {
      res.status(400).send({ Msg: "Id not found" });
    } else {
      const deleted = await Movies.findByIdAndDelete(req.params.id);
      res.status(200).send({ Msg: "Found and Deleted Successfuly" });
    }
  } catch (error) {
    res.status(500).send({ Msg: "Failed to Delete ", error });
  }
};

const UpdateOneMovie = async (req, res) => {
  try {
    const foundu = await Movies.findById(req.params.id);
    if (foundu == null) {
      res.status(400).send({ Msg: "Movie not Found" });
    } else {
      const updated = await Movies.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).send({ Msg: "Update Successfully", updated });
    }
  } catch (error) {
    res.status(500).send({ Msg: "Failed to Update ", error });
  }
};
module.exports = {
  addMovie,
  getMovies,
  getOneMovie,
  deleteOneMovie,
  UpdateOneMovie,
};

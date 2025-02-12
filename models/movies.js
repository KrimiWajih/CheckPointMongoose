const mongoose = require("mongoose");
const Moviesschema = new mongoose.Schema({
  title: String,
  summary: String,
  rating: Number,
  poster: String,
  actors: [{ type: mongoose.Types.ObjectId, ref: "Actors" }],   // references to Actors collection in a many to many relation
  trailer: String,
});

const MoviesCollection = mongoose.model("Movies", Moviesschema);
module.exports = MoviesCollection;

const mongoose = require("mongoose");
const Actorsschema = new mongoose.Schema({
  Name: String,
  movies: [{ type: mongoose.Types.ObjectId, ref: "Movies" }],
  dob: Date,
});

const ActorsCollection = mongoose.model("Actors", Actorsschema);
module.exports = ActorsCollection;

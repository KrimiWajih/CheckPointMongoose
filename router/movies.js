const express = require("express");
const {
  addMovie,
  getMovies,
  getOneMovie,
  deleteOneMovie,
  UpdateOneMovie,
} = require("../controller/movies");
const MoviesRouter = express.Router();
MoviesRouter.post("/addmovie", addMovie);
MoviesRouter.get("/listmovies", getMovies);
MoviesRouter.get("/onemovie/:id", getOneMovie);
MoviesRouter.delete("/deletemovie/:id", deleteOneMovie);
MoviesRouter.put("/updatemovie/:id", UpdateOneMovie);
module.exports = MoviesRouter;

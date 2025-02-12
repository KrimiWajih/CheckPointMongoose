const express = require("express");
const {
  addActor,
  getActors,
  getOneActor,
  deleteOneActor,
  UpdateOneActor,
} = require("../controller/actors");
const ActorsRouter = express.Router();
ActorsRouter.post("/addactor", addActor);
// {
//     "title": "gladiator",
//      "summary": "gladiator",
//      "rating": 10,
//      "poster": "path",
//      "actors": [ "67aaccbeea1afb5e374c15a8","67aacca7ea1afb5e374c15a6"],
//      "trailer": "path"
//    }
ActorsRouter.get("/listactors", getActors);
ActorsRouter.get("/oneactor/:id", getOneActor);
ActorsRouter.delete("/deleteactor/:id", deleteOneActor);
ActorsRouter.put("/updateactor/:id", UpdateOneActor);
module.exports = ActorsRouter;

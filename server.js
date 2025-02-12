const express = require("express");
const config = require("./configuration/config");
const MoviesRouter = require("./router/movies");
const ActorsRouter = require("./router/actors");
const port = 5000;
const app = express();
config();
app.use(express.json());
app.use("/movie", MoviesRouter); // we can change the path to /movie to differenciate between paths if they have for example same path name in routers
app.use("/", ActorsRouter);
app.listen(port, console.log("Server is Running"));

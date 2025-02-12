const Actors = require("../models/actors");

const addActor = async (req, res) => {
  try {
    const newActor = new Actors(req.body);
    await newActor.save();
    res.status(200).send({ Msg: "Actor Added Successfully! " });
  } catch (error) {
    res.status(500).send({ Msg: "Failed to Add a New Actor ", error });
  }
};

const getActors = async (req, res) => {
  try {
    const allActors = await Actors.find().populate("movies", "title -_id");
    res.status(200).send({ msg: "This is a list of All Movies", allActors });
  } catch (error) {
    res.status(500).send({ Msg: "List is Empty", error });
  }
};

const getOneActor = async (req, res) => {
  try {
    const OneActor = await Actors.findById(req.params.id);
    res.status(200).send({ Msg: "This is the Actor Requested ", OneActor });
  } catch (error) {
    res.status(500).send({ Msg: "Movie not Found ", error });
  }
};

const deleteOneActor = async (req, res) => {
  try {
    const found = await Actors.findById(req.params.id);

    if (found == null) {
      res.status(400).send({ Msg: "Id not found" });
    } else {
      const deleted = await Actors.findByIdAndDelete(req.params.id);
      res.status(200).send({ Msg: "Found and Deleted Successfuly" });
    }
  } catch (error) {
    res.status(500).send({ Msg: "Failed to Delete ", error });
  }
};

const UpdateOneActor = async (req, res) => {
  try {
    const foundu = await Actors.findById(req.params.id);
    if (foundu == null) {
      res.status(400).send({ Msg: "Actor not Found" });
    } else {
      const updated = await Actors.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).send({ Msg: "Update Successfully", updated });
    }
  } catch (error) {
    res.status(500).send({ Msg: "Failed to Update ", error });
  }
};
module.exports = {
  addActor,
  getActors,
  getOneActor,
  deleteOneActor,
  UpdateOneActor,
};

const mongoose = require("mongoose");
const config = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://name:password@cluster0.jzz0p.mongodb.net/Movies_DB"
    );
    console.log("Connected Successfully");
  } catch (error) {
    console.log("Failed to Connect");
  }
};
module.exports = config;

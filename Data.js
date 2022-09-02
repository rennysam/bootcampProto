const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://localhost:27017/test2")
//   .then(() => console.log("connection open"));

const dataSchema = new mongoose.Schema({
  time: String,
  temperature: Number,
});

const Data = mongoose.model("Data", dataSchema);
module.exports = Data;

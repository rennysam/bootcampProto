const express = require("express");
const app = express();
const Data = require("./Data");
const ejsMate = require("ejs-mate");
const dbUrl =
  "mongodb+srv://rennysam:welcome123@cluster0.vif4jig.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose.connect(dbUrl);
// mongoose.connect("mongodb://localhost:27017/test2");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.get("/", (req, res) => {
  res.render("home");
});

app.post("/fake", async (req, res) => {
  Data.insertMany(req.body);
  res.redirect("/start");
});

app.get("/fake", async (req, res) => {
  res.render("fake");
});

app.get("/start", async (req, res) => {
  const datas = await Data.find({});
  res.render("start", { datas });
});
const port = process.env.PORT;
//const port = 3000;
app.listen(port, () => {
  console.log("server started");
});

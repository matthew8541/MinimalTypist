require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path");

const userRouter = require("./routes/user");
const profileRouter = require('./routes/profile');

const app = express();
const dbUrl = process.env.ATLAS_URI
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection errer"));
db.once("open", () => {
  console.log("Database Connected!");
})

app.use(cors());
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use("/", userRouter);
app.use("/", profileRouter);

app.get('/', (req, res) => {
  res.send('Welcome to MinimalTypist')
})

app.get('/home', (req, res) => {
  res.send('Here is home')
})

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  // console.log("--> GET *")
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
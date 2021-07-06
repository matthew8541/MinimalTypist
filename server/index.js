require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const dbUrl = process.env.ATLAS_URI
mongoose.connect(dbUrl, { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection errer"));
db.once("open", () => {
  console.log("Database Connected!");
})

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  console.log("-->GET Home")
  res.send('Here is home')
})

app.post('/login', (req, res) => {
  console.log("-->POST login")
  res.redirect("/home")
})

const port = 5000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
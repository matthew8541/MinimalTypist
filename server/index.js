require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path");

const userRouter = require("./routes/user");

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
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.use("/", userRouter);

app.get('/', (req, res) => {
  res.send('Welcome to MinimalTypist')
})

app.get('/home', (req, res) => {
  res.send('Here is home')
})

// app.post('/login', (req, res) => {
//   console.log("-->POST login")
//   const {email, password} = req.body
// });

// app.post('/register', async (req, res) => {
//   const {username, email, password} = req.body
// });

// Handles any requests that don't match the ones above
app.get('*', (req, res) =>{
  console.log("--> GET *")
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const port = 5000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
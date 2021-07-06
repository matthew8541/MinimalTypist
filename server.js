require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

// process.env.ATLAS_URI || 
const dbUrl = "mongodb+srv://ytseng35:xfLZzyv6XKXNt7Eb@minimaltypist.rbwd9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(dbUrl, { useNewUrlParser: true, useCreateIndex: true }
);

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

const port = 5000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})



const express = require('express'); // server handler
const mongoose = require('mongoose'); // db handler
const cors = require('cors');
const bodyParser = require('body-parser'); // MW that verifies user input
require("dotenv").config();
const axios = require("axios"); // used to make requrest at frontend part of website
const taskHandler = require("../server/router.ts")

const PORT = process.env.PORT || 3001;
const DB_URL = process.env.DB_CONNECTION_STRING;

const app = express();
//MW
app.use(cors());
app.use(express.json());

// options after the uri can be used to handle auth.username/auth.password
mongoose.connect(DB_URL).then(() => console.log("connected to mongodb"));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));


app.post("/task", taskHandler.create);
app.get("/task", taskHandler.readAll);
app.put("/task/:id", taskHandler.updateById);
app.delete("/task/:id", taskHandler.deleteById);


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
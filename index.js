const express = require('express')
require("dotenv").config();
const cors = require("cors");
const connect = require("./config/db");
const routes = require("./routes/router");
const morgan = require("morgan");
const bodyParser = require("body-parser");


const app = express()
app.use(cors())
app.use(morgan("dev"));
//db con
connect();
app.use(bodyParser.json());
app.use(routes);


app.get('/', (req, res) => {
    res.json("Hello Bdjobs.com")
})

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const PORT = 4000 || process.env.PORT;

const trackRouter = require("./router/route");

app.use(trackRouter);

app.listen(PORT);

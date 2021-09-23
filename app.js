require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const PORT = process.env.PORT || 4000;

const trackRouter = require("./router/route");

app.use(trackRouter);

app.listen(PORT);

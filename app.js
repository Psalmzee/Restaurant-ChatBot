const express = require("express");
const path = require("path");
const app = express();
const sessionMiddleware = require("./config/sessionMiddleware");

app.use(express.static(path.join(__dirname, "public")));

app.use(sessionMiddleware);

module.exports = app;

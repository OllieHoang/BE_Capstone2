const express = require('express');
const initLibraries = require('./configs/libraries');
const server = initLibraries();
const path = require("path");
const db = require("./db/index");
const initWebRouter = require("./routes/index");
let PORT = process.env.PORT || 8000;

initWebRouter(server);
db.connect();
server.use(express.static(path.join(__dirname,"")));

server.listen(PORT, console.log("Hosting Port: "+ PORT));
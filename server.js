const express = require('express');
const initLibraries = require('./src/configs/libraries');
const postgres = require('./src/db/postgresql/postgreSQL')
const server = initLibraries();
const path = require("path");
const db = require("./src/db/index");
const initWebRouter = require("./src/routes/index");
let PORT = process.env.PORT || 8000;

initWebRouter(server);
db.connect();
postgres.initAll();
server.use(express.static(path.join(__dirname,"")));

server.listen(PORT, console.log("Hosting Port: "+ PORT));
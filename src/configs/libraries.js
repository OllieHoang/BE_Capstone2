const express = require('express');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");
// const {apiProxy} = require("./http-proxy");
function initLibraries() {
  const server = express();
  server.use(cors());
  // server.use(apiProxy);
  server.use(cookieParser());
  server.use(express.json());
  server.use(express.urlencoded({extended: true}));
dotenv.config();
return server;
}
module.exports = initLibraries;
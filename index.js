`use strict`;
const server = require("./src/server");
require('dotenv').config();
let PORT = process.env.PORT || 3000 
server.start(PORT);
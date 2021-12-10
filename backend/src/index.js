const express = require("express");
const app = express();

require("./database");

app.use(express.json());

app.use(require("./routes/index"));

app.listen("8080");
console.log(`servidor en el puerto`, 8080);

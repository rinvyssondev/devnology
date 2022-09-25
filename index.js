const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/connection");
const Article = require("./articles/Article");
const ArticlesController = require("./articles/ArticlesController");
const crawler = require("./crawler");

// View engine - configure
app.set("view engine", "ejs");

// Static
app.use(express.static("public"));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database
connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com sucesso");
  })
  .catch((err) => {
    console.log(err);
  });

// Importando o ArticlesController
app.use("/", ArticlesController);

// Conexão da app
const port = process.env.port || 8080;
app.listen(port, "0.0.0.0", () => {
  console.log("servidor no ar");
});

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/connection");
const Article = require("./articles/Article");
const ArticlesController = require("./articles/ArticlesController");

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
app.listen(8080, "localhost", () => {
  console.log("servidor no ar");
});

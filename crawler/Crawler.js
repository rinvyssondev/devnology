const Sequelize = require("sequelize");
const connection = require("../database/connection");
const Article = require("../articles/Article");

// Criando a tabela no banco de dados

const Crawler = connection.define("crawler", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Crawler.sync({ force: true });

module.exports = Crawler;

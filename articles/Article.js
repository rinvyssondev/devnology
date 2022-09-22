const Sequelize = require("sequelize");
const connection = require("../database/connection");
const Crawler = require("../crawler/Crawler");

// Criando a tabela no banco de dados

const Article = connection.define("articles", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  link: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

//Crawler.hasMany(Article); // Relacionamento 1:N
Article.belongsTo(Crawler); // Relacionamento 1:1

// Article.sync({ force: true });
module.exports = Article;

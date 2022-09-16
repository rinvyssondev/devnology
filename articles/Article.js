const Sequelize = require("sequelize");
const connection = require("../database/connection");

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

// Article.sync({ force: true });

module.exports = Article;

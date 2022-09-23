const Sequelize = require("sequelize");
const connection = require("../database/connection");

// Criando a tabela no banco de dados

const Article = connection.define("articles", {
  nome: {
    type: Sequelize.STRING,
    allowNull: true,
    required: true,
  },
  link: {
    type: Sequelize.STRING,
    allowNull: true,
    required: true,
  },
});

Article.sync({ force: false });
module.exports = Article;

const Sequelize = require("sequelize");
const NomeDaTabela = "devnology";
const usuario = "usuário";
const senha = "senha";

// Conectando com o banco
const connection = new Sequelize(NomeDaTabela, usuario, senha, {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = connection;

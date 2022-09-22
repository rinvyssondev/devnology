const Sequelize = require("sequelize");
const NomeDaTabela = "devnology";
const usuario = "root";
const senha = "2305";

// Conectando com o banco
const connection = new Sequelize(NomeDaTabela, usuario, senha, {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = connection;

const Sequelize = require("sequelize");
const NomeDaTabela = "devnology";
const usuario = "seu usuário do mysql";
const senha = "senha do mysql";

// Conectando com o banco
const connection = new Sequelize(NomeDaTabela, usuario, senha, {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = connection;

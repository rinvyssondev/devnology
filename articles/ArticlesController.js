const express = require("express");
const router = express.Router();
const Article = require("./Article");

// Rota link de artigos
router.get("/articles", (req, res) => {
  Article.findAll().then((articles) => {
    res.render("articles/index.ejs", { articles: articles });
  });
});

// Adicionando um link
router.get("/articles/new", (req, res) => {
  res.render("articles/new");
});

// Salvando um link
router.post("/articles/save", (req, res) => {
  var link = req.body.link;
  var nome = req.body.nome;
  Article.create({
    link: link,
    nome: nome,
  }).then(() => {
    res.redirect("/articles");
  });
});

// Editando um link
router.get("/articles/edit/:id", (req, res) => {
  var id = req.params.id;
  // Tratando valores para não nulos
  if (isNaN(id)) {
    res.redirect("/articles");
  }
  Article.findByPk(id)
    .then((article) => {
      if (article != undefined) {
        res.render("articles/edit", { article: article });
      } else {
        res.redirect("/articles");
      }
    })
    .catch((err) => {
      res.redirect("/articles");
    });
});

// Atualizando
router.post("/articles/update", (req, res) => {
  var id = req.body.id;
  var nome = req.body.nome;
  var link = req.body.link;
  Article.update(
    { nome: nome, link: link },
    {
      where: {
        id: id,
      },
    }
  ).then(() => {
    res.redirect("/articles");
  });
});

// Deletando
router.post("/articles/delete", (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      Article.destroy({
        where: {
          id: id,
        },
      }).then(() => {
        res.redirect("/articles");
      });
    } else {
      // Se não for um numero
      res.redirect("/articles");
    }
  } else {
    // Se for nulo
    res.redirect("/articles");
  }
});

module.exports = router;

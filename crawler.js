const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const link = "https://devgo.com.br/";
const Article = require("./articles/Article");

request(link, (err, res, body) => {
  if (err) throw new Error(err);

  var $ = cheerio.load(body); // O $ representa o JQuery

  $(".css-1y2n3q5").each(function () {
    var nome = $(this).find("a").text();
    Article.create({
      nome: nome,
    }).then((err) => {
      console.log(err);
    });
  });
});

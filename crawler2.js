const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios").default;
const fs = require("fs");
const Crawler = require("./Crawler");
const link = "https://devgo.com.br/";

request(link, (err, res, body) => {
  if (err) throw new Error(err);

  var $ = cheerio.load(body); // O $ representa o JQuery

  $(".css-1y2n3q5").each(function () {
    var nome = new Array($(this).find("a").text());
    Crawler.create({
      nome: nome,
    }).then((err) => {
      console.log(err);
    });
  });
});

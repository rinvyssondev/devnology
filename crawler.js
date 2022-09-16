const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request("https://devgo.com.br/", (err, res, body) => {
  if (err) throw new Error(err);

  var $ = cheerio.load(body); // O $ representa o JQuery

  $(".css-1y2n3q5").each(function () {
    var title = $(this).find("a").text();

    fs.appendFile("webCrawler.txt", title + "\n", function (err) {
      if (err) throw err;
      console.log(title);
    });
  });
});

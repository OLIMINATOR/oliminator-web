console.log("Javascripti");
// RANDOM RIPOFNUTE 
writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = "To velke smradlave!";
    quotes[1] = "Opisam ta!";
    quotes[2] = "Kokot smradlavy zafarbeny!";
    quotes[3] = "Policajt pavol";
    quotes[4] = "Kakomaster";
    quotes[5] = "Uwumil";
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
  }
  writeRandomQuote();
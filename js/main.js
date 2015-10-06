document.addEventListener("DOMContentLoaded", function() {
    loadQuotes();
});

function loadQuotes() {
    var request = pegasus('quotes.json');
    request.then(function(data) {
        showQuotes(data.quotes);
    });
}

function showQuotes(quotes) {
    var SENTENCE_ID = "sentence";
    var AUTHOR_ID   = "author";

    var sentenceElement = document.getElementById(SENTENCE_ID);
    var authorElement   = document.getElementById(AUTHOR_ID);
    var quote = quotes[getRandomInt(0, quotes.length)];

    sentenceElement.textContent = quote.sentence + ".";
    authorElement.textContent = quote.author;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

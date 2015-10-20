(function(document) {
    'use strict';

    var quotes = [];
    var usedQuotes = [];
    var intervalId = null;

    document.addEventListener('DOMContentLoaded', function() {
        loadQuotes();
        document.querySelector('#sentence')
            .addEventListener('click', showQuote);
    });

    function loadQuotes() {
        var request = pegasus('quotes.json');
        request.then(function(data) {
            quotes = data.quotes;
            showQuote(loadRandomQuote());
        });
    }

    function loadRandomQuote() {
        if (quotes.length > 0) {
            var randomIndex = getRandomInt(0, quotes.length);
            var quote = quotes.splice(randomIndex, 1)[0];
            usedQuotes.push(quote);
            return quote;
        } else {
            quotes = usedQuotes.slice();
            usedQuotes.length = 0;
            var randomIndex = getRandomInt(0, quotes.length);
            return quotes.splice(randomIndex, 1)[0];
        }
    }

    function showQuote() {
        var SENTENCE_ID = 'sentence';
        var AUTHOR_ID   = 'author';

        var sentenceElement = document.getElementById(SENTENCE_ID);
        var authorElement   = document.getElementById(AUTHOR_ID);
        var quote = loadRandomQuote();

        sentenceElement.textContent = quote.sentence + '.';
        authorElement.textContent = quote.author;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}(document));

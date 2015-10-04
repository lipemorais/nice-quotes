    document.addEventListener("DOMContentLoaded", function() {
        var quotes = [
            {
                "sentence": "A necessidade é a mãe das invenções",
            "author": "Autor desconhecido"
            },
            {
                "sentence": "Escreva suas mágoas em areia, sua gratidão em mármore",
                "author": "Benjamin Franklin"
            },
            {
                "sentence": "É algo bonito, não? O que um homem conquista se tiver um propósito",
                "author": "Ashur - Spartacus S02E09"
            },
            {
                "sentence": "Mude mas comece devagar, o sentido é mais importante que a velocidade",
                "author": "Autor desconhecido"
            },
            {
                "sentence": "Tente dobrar um braço e ele resistirá. Mas convença uma mente a pensar como vocês ter deseja e terá conquistado um aliado",
                "author": "Fortaleza Digital - Dan Brown"
            },
            {
                "sentence": "Nunca dormir sem resolver um problema pessoal com alguém pois quando acumula é pior",
                "author": "Flávio Augusto - Geração de valor"
            },
            {
                "sentence": "Fazer a mesma coisa e esperar resultados diferentes é loucura",
                "author": "Albert Einstein"
            },
        ];

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        var SENTENCE_ID = "sentence";
        var AUTHOR_ID   = "author";

        var sentenceElement = document.getElementById(SENTENCE_ID);
        var authorElement   = document.getElementById(AUTHOR_ID);
        var quote = quotes[getRandomInt(0, quotes.length)];

        sentenceElement.innerText = quote.sentence + ".";
        authorElement.innerText = quote.author;
    });

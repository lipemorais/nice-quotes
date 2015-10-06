document.addEventListener("DOMContentLoaded", function() {
    var quotes = [
        {
        "sentence": "A necessidade é a mãe das invenções",
        "author": "Autor desconhecido",
        },
        {
        "sentence": "Escreva suas mágoas em areia, sua gratidão em mármore",
        "author": "Benjamin Franklin",
        },
        {
        "sentence": "É algo bonito, não? O que um homem conquista se tiver um propósito",
        "author": "Ashur - Spartacus S02E09",
        },
        {
        "sentence": "Mude mas comece devagar, o sentido é mais importante que a velocidade",
        "author": "Autor desconhecido",
        },
        {
        "sentence": "Tente dobrar um braço e ele resistirá. Mas convença uma mente a pensar como vocês ter deseja e terá conquistado um aliado",
        "author": "Fortaleza Digital",
        },
        {
        "sentence": "Nunca dormir sem resolver um problema pessoal com alguém pois quando acumula é pior",
        "author": "Flávio Augusto - Geração de valor",
        },
        {
        "sentence": "Fazer a mesma coisa e esperar resultados diferentes é loucura",
        "author": "Albert Einstein",
        },
        {
        "sentence": "Não seja empregado",
        "author": "Carlos Lemos",
        },
        {
        "sentence": "Be the change you want to see in the world",
        "author": "Gandhi",
        },
        {
        "sentence": "Ouça com atenção, leia com interpretação e amplie seu campo de visão",
        "author": "Autor desconhecido",
        },
        {
        "sentence": "Troque suas folhas, mantenha suas raízes",
        "author": "Victor Hugo",
        },
        {
        "sentence": "Na vida coisa mais feia,  é gente que vive chorando de barriga cheia",
        "author": "Zeca pagodinho - Maneiras",
        },
        {
        "sentence": "Faça a revolução mas busque a informação, Faça a informação, Busque a revolução",
        "author": "Autor desconhecido",
        },
        {
        "sentence": "A força de um homem não esta no peso que ele carrega, mas sim no que ele acredita",
        "author": "Anderson Silva",
        },
        {
        "sentence": "Experimentar algo é muito mais poderoso do que discussões teóricas",
        "author": "Paul Bucheit - Criador do Gmail",
        },
        {
        "sentence": "Não são as espécies mais fortes nem as mais inteligentes que sobrevivem, mas sim aquelas que melhor se adaptam às mudanças",
        "author": "Charles Darwin",
        },
        {
        "sentence": "Não deixe que as pessoas limitem seu aprendizado",
        "author": "Túlio Ornelas",
        },
        {
        "sentence": "Inspecionar para procurar defeitos é desperdício. Inspecionar para previnir defeitos é essencial",
        "author": "Shigueo Shingo",
        },
        {
        "sentence": "As mais altas torres começam do chão",
        "author": "Provérbio chinês",
        },
        {
        "sentence": "É preciso amar as pessoas como se não houvesse amanhã",
        "author": "Renato Russo",
        },
        {
        "sentence": "Não importa o quão forte você pode bater, mas sim, o quanto você pode apanhar da vida e continuar indo em frente",
        "author": "Rocky Balboa",
        },
        {
        "sentence": "Nada é impossível quando  coração e mente estão determinados",
        "author": "Spartacus",
        },
        {
        "sentence": "Não há segundos atos na vida",
        "author": "Fitzgerald",
        },
        {
        "sentence": "Em nossas vidas, como em nossos cérebros, todos podemos ter uma segunda chance",
        "author": "Autor desconhecido",
        },
        {
        "sentence": "If it don't challenge you, it doesn't change you",
        "author": "Autor desconhecido",
        },
        {
        "sentence": "Se você fizer o que você gosta ninguém te segura",
        "author": "Vinicius Telles - hora extra barra",
        },
        {
        "sentence": "People will forget what you said, people will forget what you did, but people will never forget how you made them feel" ,
        "author": "Maya Angelou",
        },
        {
        "sentence": "Men often become what they believe themselves to be. If I believe I cannot do something, it makes me incapable of doing it. But when I believe I can, then I acquire the ability to do it even if I didn’t have it in the beginning" ,
        "author": "Gandhi",
        },
        {
        "sentence": "Your life is your message to the world. Make sure it’s inspiring",
        "author": "Autor desconhecido",
        }
    ];

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var SENTENCE_ID = "sentence";
    var AUTHOR_ID   = "author";

    var sentenceElement = document.getElementById(SENTENCE_ID);
    var authorElement   = document.getElementById(AUTHOR_ID);
    var quote = quotes[getRandomInt(0, quotes.length)];

    sentenceElement.textContent = quote.sentence + ".";
    authorElement.textContent = quote.author;
});

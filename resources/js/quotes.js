var clave = '';
var quote = document.getElementById('quote');

/*******************************
APP BUTTONS
*******************************/

document.querySelector('.btn-love').addEventListener('click', btnLove);
document.querySelector('.btn-inspiration').addEventListener('click', btnInspiration);
//document.querySelector('#button').addEventListener('click', btnRandom);



/*******************************
RANDOMLY SELECTS A QUOTE FROM DATABASE
*******************************/


function btnLove() {
    var category = '&category=love';
    var ourRequest = new XMLHttpRequest(); //opens new XML request
    ourRequest.open('POST', 'http://quotes.rest/quote/search.json?' + clave + category); //gets JSON data

    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.contents.quote);
        renderHTML(ourData);
    };
    ourRequest.send();
}

function btnInspiration() {
    var category = '&category=inspiration';
    var ourRequest = new XMLHttpRequest(); //opens new XML request
    ourRequest.open('POST', 'http://quotes.rest/quote/search.json?' + clave + category); //gets JSON data

    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.contents.quote);
        renderHTML(ourData);
    };
    ourRequest.send();
}

function renderHTML(data) {

    var htmlString = '"' + data.contents.quote + '"' + '<p>' +
        '--' + data.contents.author + '</p>';

    //quote.insertAdjacentHTML('beforeend', htmlString); -> use if I want to make this HTML and not text
    document.getElementById('quote').textContent = htmlString;

}



/*******************************
ARRAYS FOR QUOTES
******************************

var loveQuotesArray = ['"The best love is the kind that awakens the soul; that makes us reach for more, that plants the fire in our hearts and brings peace to our minds. That\'s what I hope to give you forever." - The Notebook',
    '"The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves." - Victor Hugo',
    '"And remember, as it was written, to love another person is to see the face of God." - Les Miserables',
    '"The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart." - Helen Keller',
    '"I swear I couldn\'t love you more than I do right now, and yet I know I will tomorrow." - Leo Christopher'];

var inspirationQuotesArray = ['"Put your heart, mind, and soul into even your smallest acts. This is the secret of success." - Swami Sivananda',
    '"Nothing is impossible, the word itself says \'I\'m possible\'!" - Audrey Hepburn',
    '"Happiness is not something you postpone for the future; it is something you design for the present." - Jim Rohn',
    '"I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination." - Jimmy Dean',
    '"If opportunity doesn\'t knock, build a door." - Milton Berle']; */


/*******************************
CODE TO RANDOMLY SELECT A QUOTE
*******************************

function btnLove() {
    var randomQuote =  Math.floor(Math.random() * loveQuotesArray.length);
    document.getElementById('quote').textContent = loveQuotesArray[randomQuote];
}

function btnInspiration() {
    var randomQuote =  Math.floor(Math.random() * inspirationQuotesArray.length);
    document.getElementById('quote').textContent = inspirationQuotesArray[randomQuote];
}

document.querySelector('.btn-love').addEventListener('click', btnLove);
document.querySelector('.btn-inspiration').addEventListener('click', btnInspiration);




//var randomQuote =  Math.floor(Math.random() * loveQuotesArray.length);
//console.log(loveQuotesArray[randomQuote]);

//document.querySelector('#quote').textContent = loveQuotesArray[randomQuote];
//document.querySelector('#quote').innerHTML = '<em>' + loveQuotesArray[randomQuote] + '</em>';

/*
var loveQuotes = {
    quote01: '"The best love is the kind that awakens the soul; that makes us reach for more, that plants the fire in our hearts and brings peace to our minds. That\'s what I hope to give you forever." - The Notebook',
    quote02: '"The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves." - Victor Hugo',
    quote03: '"And remember, as it was written, to love another person is to see the face of God." - Les Miserables',
    quote04: '"The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart." - Helen Keller',
    quote05: '"I swear I couldn\'t love you more than I do right now, and yet I know I will tomorrow." - Leo Christopher',
};

loveQuotes.quote08 = '"I want to love you like an animal" - NIN';
loveQuotes.quote06 = '"Hold me like you mean it" - Lady Gaga';
loveQuotes.quote07 = '"You are so beautiful to me." - Miles Davis';

/*
console.log(loveQuotes.quote06);

for (var i = 0; i < 10; i++) {
    console.log(i);
}
*/

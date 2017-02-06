/*******************************
GLOBAL VARIABLES FOR APP
*******************************/

var clave = '';
var quote = document.getElementById('quote');
var welcomeAffirmationWords = ['loved', 'cherished', 'awesome', 'brilliant', 'amazing', 'a star', 'powerful',
    'brilliant', 'super', 'one of a kind', 'tops in my book', 'the best', 'wonderful', 'a genius',
    'fantastic', 'a superstar', 'courageous', 'brave', 'charming', 'fearless'];


/*******************************
APP BUTTONS AND CLICK EVENTS
*******************************/

document.querySelector('.btn-love').addEventListener('click', btnLove);
document.querySelector('.btn-inspiration').addEventListener('click', btnInspiration);
//document.querySelector('#button').addEventListener('click', btnRandom);


/*******************************
RANDOMLY SELECTS AND DISPLAYS A WELCOME AFFIRMATION
*******************************/

function welcomeAffirmation() {
    var myRandom =  Math.floor(Math.random() * welcomeAffirmationWords.length);
    document.getElementById('welcome').innerHTML = welcomeAffirmationWords[myRandom];
    //document.getElementById('welcome').textContent = welcomeAffirmationWords[myRandom]; --> Another way to display the affimation
}
welcomeAffirmation();


/*******************************
RANDOMLY SELECTS AND DISPLAYS A TEXT QUOTE FROM DATABASE
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
    if (data.contents.author !== null) {
        var htmlString = '"' + data.contents.quote + '"' +
            ' --' + data.contents.author;
    } else {
        data.contents.author = '(Anonymous)';
        var htmlString = '"' + data.contents.quote + '"' +
            ' --' + data.contents.author;
    }

    //quote.insertAdjacentHTML('beforeend', htmlString); -> use if I want to make this HTML and not text
    document.getElementById('quote').textContent = htmlString;

}


/*******************************
RANDOMLY SELECTS AND DISPLAYS AN IMAGE PICTURE FROM DATABASE
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

function renderHTML(data) {
    if (data.contents.author !== null) {
        var htmlString = '"' + data.contents.quote + '"' +
            ' --' + data.contents.author;
    } else {
        data.contents.author = '(Anonymous)';
        var htmlString = '"' + data.contents.quote + '"' +
            ' --' + data.contents.author;
    }

    //quote.insertAdjacentHTML('beforeend', htmlString); -> use if I want to make this HTML and not text
    document.getElementById('quote').textContent = htmlString;

}
